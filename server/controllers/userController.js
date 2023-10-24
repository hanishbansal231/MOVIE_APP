import User from '../models/userModel.js';
import AppError from '../utils/errorUtils.js';

// Register User

const register = async (req, res, next) => {
    try {
        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            return next(new AppError('All field are mendatory...', 402));
        }

        const exitUser = await User.findOne({ email });
        if (exitUser) {
            return next(new AppError('User is already exist...Please try to login', 403));
        }

        const user = await User.create({
            fullName,
            email,
            password,
        });

        if (!user) {
            return next(new AppError('User is not created...Please try again after some time', 402));
        }

        return res.status(200).json({
            success: true,
            message: 'User Registered Successfully...',
            user
        });


    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new AppError('All field are mendatory...', 402));
        }

        const user = await User.findOne({ email });

        if (!user) {
            return next(new AppError('User is not login...Please register this account', 401));
        }

        if (!await user.comparePassword(password)) {
            return next(new AppError('Password is incorrect...Please try again', 403));
        }

        const token = await user.genrateToken();

        user.token = token;
        user.password = undefined;

        res.cookie('token', token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
        });

        res.status(200).json({
            success: true,
            message: 'Login Successfully...',
            user,
        });

    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}

const userUpdate = async (req, res, next) => {
    try {
        const { fullName, email } = req.body;
        const { id } = req.user;

        if (!fullName || !email || !password) {
            return next(new AppError('All field are mendatory...', 402));
        }

        const user = await User.findByIdAndUpdate({ _id: id }, {
            fullName,
            email,
        }, { new: true });

        if (!user) {
            return next(new AppError('User is not updated...please try again after some time', 403));
        }

        res.status(200).json({
            success: true,
            message: 'Updated Successfully...',
            user,
        });

    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}


const deleteUser = async (req,res,next) => {
    try{
        const {id} = req.user;

        if(!id){
            return next(new AppError('Id is not found...',403));
        }

      await User.findByIdAndDelete({_id:id});

      res.status(200).json({
        success: true,
        message: 'Deleted Successfully...',
      });

    }catch(e){
        return next(new AppError(e.message, 500));
    }
}


export {
    register,
    loginUser,
    userUpdate,
    deleteUser
}