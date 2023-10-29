import React from 'react'
import { FaCloudDownloadAlt, FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md';
import { GoEye } from 'react-icons/go';

function Tabel({ data, admin }) {
    const Rows = (movie, idx, admin) => {
        const Text = 'text-sm text-left leading-6 whitespace-now px-5 py-3'

        return (
            <tr key={idx}>
                <td className={`${Text}`}>
                    <div className='w-12 h-12 p-1 bg-dry border border-border rounded overflow-hidden'>
                        <img
                            src={movie.poster}
                            alt={movie.title}
                            className='h-full w-full rounded object-cover'
                        />
                    </div>
                </td>
                <td className={`${Text} truncate`}>{movie.title}</td>
                <td className={`${Text}`}>{movie.title}</td>
                <td className={`${Text}`}>{movie.languages[0]}</td>
                <td className={`${Text}`}>{movie.year.low}</td>
                <td className={`${Text}`}>{movie.title}</td>
                <td className={`${Text} float-right flex-rows gap-2`}>
                    {
                        admin
                            ?
                            (<>
                                <button className='border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2'>
                                    Edit <FaEdit className='text-green-500' />
                                </button>
                                <button className='bg-subMain text-white rounded flex-colo w-6 h-6'>
                                    <MdDelete />
                                </button>
                            </>)
                            :
                            (
                                <>
                                    <button className='border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2'>
                                        Download <FaCloudDownloadAlt className='text-green-500' />
                                    </button>
                                    <button className='bg-subMain text-white rounded flex-colo w-6 h-6'>
                                        <GoEye />
                                    </button>
                                </>)
                    }
                </td>
            </tr>
        )
    }
    const Head = 'text-xs text-left text-main font-semibold px-6 py-2 uppercase'
    return (
        <div className='overflow-x-scroll overflow-hidden relative w-full'>
            <tabel className="w-full table-auto border border-border divide-y divide-border">
                <thead>
                    <tr className='bg-dryGray'>
                        <th scope='col' className={`${Head}`}>Image</th>
                        <th scope='col' className={`${Head}`}>NAME</th>
                        <th scope='col' className={`${Head}`}>CATEGORY</th>
                        <th scope='col' className={`${Head}`}>LANGUAGE</th>
                        <th scope='col' className={`${Head}`}>YEAR</th>
                        <th scope='col' className={`${Head}`}>HOURS</th>
                        <th scope='col' className={`${Head} text-end`}>ACTIONS</th>
                    </tr>
                </thead>
                <tbody className='bg-main divide-y divide-gray-800'>
                    {
                        data.map((item, idx) => (
                            Rows(item, idx, admin)
                        ))
                    }

                </tbody>
            </tabel>
        </div>
    )
}

export default Tabel