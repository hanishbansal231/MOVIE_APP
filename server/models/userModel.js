import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const userSchema = new Schema({
    fullName: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'email is required'],
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    token: {
        type: String,
    },
    image: {
        public_id: {
            type: String
        },
        secure_url: {
            type: String
        }
    },
    likedMovie: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Movie'
        }
    ],
    resetPasswordToken: String,
    resetPasswordExpiry: Date,
}, { timestamps: true });


userSchema.pre('save',async function (next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        this.password = await bcrypt.hash(this.password, 10);
    } catch (e) {
        console.error(e);
    }
});

userSchema.methods = {
    genrateToken: async function () {
        return jwt.sign({
            id: this._id,
            email: this.emial,
            isAdmin: this.isAdmin,
        }, process.env.SECRET_KEY, {
            expiresIn: process.env.EXPIRE
        });
    },
    comparePassword: async function(plainText){
        return await bcrypt.compare(plainText,this.password);
    }
}


const User = model('User', userSchema);
export default User