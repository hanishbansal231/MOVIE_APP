import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import storage from '../config/firebaseStorage.js';
import AppError from '../utils/errorUtils.js';

const uploadRouter = Router();

const upload = multer({
    storage: multer.memoryStorage(),
});

uploadRouter.post('/', upload.single('file'), async (req, res, next) => {
    try {
        const file = req.file;
        if (file) {
            const fileName = `${uuidv4()}${path.extname(file.originalname)}`;

            const blob = storage.file(fileName);
            const blobStream = blob.createWriteStream({
                resumable: false,
                metadata: {
                    contentType: file.mimetype,
                },
            });

            blobStream.on('error', (error) => {
                return res.status(400).json({
                    success: false,
                    message: error.message
                })
            });

            blobStream.on('finish', () => {
                const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${storage.name}/o/${fileName}?alt=media`;
                return res.status(200).json({
                    success: true,
                    message: 'FileUpload successfully...',
                    fileName,
                    fileUrl: publicUrl,
                });
            });

            blobStream.end(file.buffer)

        } else {
            return next(new AppError('Please Upload a file...', 404));
        }
    } catch (e) {
        return next(new AppError(e.message, 500));
    }
});

export default uploadRouter;