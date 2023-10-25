import AppError from "../utils/errorUtils.js"
import jwt from 'jsonwebtoken';
import asyncHandler from "./asyncHandler.js";

const isLoggedIn = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies.token ||
            req.body.token ||
            (req.headers.authorization && req.headers.authorization.replace('Bearer ', ''));

        if (!token) {
            return next(new AppError('Token is not found', 403));
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY);

        if (!decode) {
            return next('User details not found please try again...', 402);
        }

        req.user = decode;

        next();
    } catch (e) {
        return next(new AppError(e.message, 500));
    }
});

const isAdmin = (req, res, next) => {
    try {

        const admin = req.user.isAdmin;

        if (!admin) {
            return next(new AppError('You do not have admin privileges.', 403));
        }

        next();

    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}


export {
    isLoggedIn,
    isAdmin
}