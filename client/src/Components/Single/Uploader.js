import React, { useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { FiUploadCloud } from 'react-icons/fi';

function Uploader() {
    const [previewImage, setPreviewImage] = useState(null);
    const inputRef = useRef(null);
    const { getRootProps, getInputProps } = useDropzone({
        multiple: false,
        maxSize: 100000,
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];
            if (file) {
                previewFile(file);
                setPreviewImage(file);
            }
        },
    });

    const previewFile = (file) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onloadend = () => {
            setPreviewImage(fileReader.result);
        }
    }

    return (
        <div className='w-full text-center'>
            {
                !previewImage
                    ?
                    (<div
                        {...getRootProps()}
                        className='px-6 py-8 border-2 border-border border-dashed bg-main rounded cursor-pointer'>
                        <input {...getInputProps()} ref={inputRef} />
                        <span className='mx-auto text-3xl text-subMain flex-colo'>
                            <FiUploadCloud />
                        </span>
                        <p className='text-text'>
                            Drag your image here
                        </p>
                        <em className='text-xs text-gray-500'>(only .jpg and .png files will be accepted)</em>
                    </div>)
                    :
                    (
                        <div>
                            <img
                                src={previewImage}
                                alt='UploadImage'
                                className='w-full h-44 object-contain'
                            />
                        </div>
                    )
            }
        </div>
    )
}

export default Uploader