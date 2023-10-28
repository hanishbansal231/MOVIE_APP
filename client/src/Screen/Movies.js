import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import Filters from '../Components/Home/Filters'
import { movies } from '../Data/movie'
import Movie from '../Components/Movie'
import { CgSpinner } from 'react-icons/cg'

function Movies() {

    const maxPage = 10;
    const [page, setPage] = useState(maxPage);
    const handelLoadingMore = () => {
        setPage((prev) => prev + maxPage);
    }
    return (
        <Layout>
            <div className='min-h-screen container mx-auto px-2 my-6'>
                <Filters />
                <p className='text-lg font-medium my-6'>
                    Total <span className='font-bold text-subMain'>{movies.length}</span> items Found
                </p>
                <div className='grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                    {
                        movies.slice(0, page).map((movie, idx) => (
                            <Movie key={idx} movie={movie} />
                        ))
                    }
                </div>
                <div className='w-full flex-colo md:my-20 my-10 '>
                        <button onClick={handelLoadingMore} className='flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain'>
                            Loading More <CgSpinner className='animate-spin' />
                        </button>
                    </div>
            </div>
        </Layout>
    )
}

export default Movies