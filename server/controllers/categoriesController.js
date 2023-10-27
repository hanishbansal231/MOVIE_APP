import Category from "../models/categoriesModel";
import AppError from "../utils/errorUtils";


const getCategory = async (req, res, next) => {
    try {
        const category = Category.find({});

        if (!category) {
            return next(new AppError('Category not found...', 403));
        }

        return res.status(200).json({
            success: true,
            message: 'Category find...',
            category,
        });

    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}

const createCategory = async (req, res, next) => {
    try {
        const { title } = req.body;

        if (!title) {
            return next(new AppError('Title not found...', 403));
        }

        const category = await Category.create({ title });

        if (!category) {
            return next(new AppError('Category not created...', 402));
        }

        return res.status(200).json({
            success: true,
            message: 'Category created successfully...',
            category
        });

    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}

const updateCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title } = req.body;

        if(!title){
            return next(new AppError('Title not found...',403));
        }

        const updatedCategory = await Category.findByIdAndUpdate(id,{
            title,
        },{new: true});

        if(!updatedCategory){
            return next(new AppError('Category not updated...',403));
        }

        return res.status(200).json({
            success: true,
            message:'Updated Successfully...',
            updatedCategory
        });

    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}

const deleteCategory = async (req,res,next) => {
    try{
        const {id} = req.params;

        await Category.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message:'Category deleted...',
        });

    }catch(e){
        return next(new AppError(e.message, 500));    }
}

export {
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
}