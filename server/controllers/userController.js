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

        const user = new User({
            fullName, 
            email, 
            password,
            image:{
                public_id:email,
                secure_url:`https://api.dicebear.com/5.x/initials/svg?seed=${fullName}`
            }
        })

        if (!user) {
            return next(new AppError('User is not created...Please try again after some time', 402));
        }
        await user.save();
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

        const user = await User.findById(id);

        user.fullName = fullName;
        user.email = email;

        if (!user) {
            return next(new AppError('User is not updated...please try again after some time', 403));
        }
        await user.save();
        return res.status(200).json({
            success: true,
            message: 'Updated Successfully...',
            user,
        });

    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}


const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.user;

        if (!id) {
            return next(new AppError('Id is not found...', 403));
        }

        await User.findByIdAndDelete({ _id: id });

        res.status(200).json({
            success: true,
            message: 'Deleted Successfully...',
        });

    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}

const changePassword = async (req, res, next) => {
    try {
        const { oldPassword, newPassword } = req.body;
        const { id } = req.user;
        if (!oldPassword || !newPassword) {
            return next(new AppError('All field are mandatory...', 403));
        }

        const user = await User.findById({ _id: id });
        user.password = newPassword;

        await user.save();

        return res.status(200).json({
            success: true,
            message: 'Password Change Successfully...',
            user,
        });

    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}

const getLikedMovie = async (req, res, next) => {
    try {
        const { id } = req.body;

        const user = await User.findById({ _id: id }).populate('likedMovie').exec();

        if (!user) {
            return next(new AppError('User not found...', 403));
        }

        return res.status(200).json({
            success: true,
            message: 'Liked Movie...',
            user,
        });

    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}

const addLikedMovie = async (req, res, next) => {
    try {
        const { movieId } = req.body;
        const { id } = req.user;
        if (!movieId) {
            return next(new AppError('MovieId is not found...', 403));
        }

        const user = await User.findById(id);

        if (user.likedMovie.includes(movieId)) {
            return next(new AppError('Movie is already Liked...', 403));
        }

        user.likedMovie.push(movieId);

        await user.save();

        return res.status(200).json({
            success: true,
            message: 'Movie Added...',
            user,
        });

    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}

const deleteAllLike = async (req, res, next) => {
    try {
        const { id } = req.user;

        const user = await User.findById(id);

        if (!user) {
            return next(new AppError('User is not found...', 402));
        }

        user.likedMovie = [];
        await user.save();

        return res.status(200).json({
            success: true,
            message: 'Deleted all likes...',
        });

    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}

// ********************* ADMIN CONTROLLER *****************

const getUsers = async (req, res, next) => {
    try {
        const user = await User.find({});

        if (!user) {
            return next(new AppError('User is not found...', 402));
        }

        return res.status(200).json({
            success: true,
            message: 'All users...',
            user,
        });

    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}

const userDelete = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!id) {
            return next(new AppError('Id is not found...', 403));
        }

        const user = await User.findById(id);

        if (user.isAdmin) {
            return next(new AppError("Can't delete admin user..."));
        }

        await user.remove();

        return res.status(200).json({
            success: true,
            message: 'Deleted Successfully...',
        });

    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}


export {
    register,
    loginUser,
    userUpdate,
    deleteUser,
    changePassword,
    getLikedMovie,
    addLikedMovie,
    deleteAllLike,
    getUsers,
    userDelete,
}