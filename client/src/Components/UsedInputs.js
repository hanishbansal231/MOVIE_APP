import React from 'react'

export function Message({ label, placeholder }) {
    return (
        <div className='text-sm w-full'>
            <label className='text-border font-semibold'>
                {label}
            </label>
            <textarea
            placeholder={placeholder}
                className='w-full h-40 bg-main resize-none mt-2 p-6 border border-border rounded'
            />
        </div>
    )
}

export function Select({ label, options, onChange }) {
    return (
        <>
            <label className='text-border font-semibold'>
                {label}
            </label>
            <select className='w-full mt-2 px-6 py-4 text-text bg-main border border-border rounded' onChange={onChange}>
                {
                    options.map((item, idx) => (
                        <option key={idx} value={item.value}>
                            {item.title}
                        </option>
                    ))
                }
            </select>
        </>
    )
}