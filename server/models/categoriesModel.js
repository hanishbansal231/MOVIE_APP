import {Schema,model} from 'mongoose';

const categorySchema = new Schema({
    title:{
        type:String,
        required: true,
    }
},{timestamps: true});

const Category = model('Category',categorySchema);
export default Category;