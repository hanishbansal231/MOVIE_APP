import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../Layout/Layout';
import { movies } from '../Data/movie';
import MovieInfo from '../Components/Single/MovieInfo';
import MovieCasts from '../Components/Single/MovieCasts';
import MovieRates from '../Components/Single/MovieRates';
import Titles from '../Components/Titles';
import { BsCollectionFill } from 'react-icons/bs';
import Movie from '../Components/Movie';

function SingleMovie() {
  const { id } = useParams();
  const movie = movies.filter((movie) => movie.id === id);
  // const relatedMovie = movies.filter((movie) => movie.category === movie.category);

  return (
    <Layout>
      <MovieInfo movie={movie[0]} />
      <div className='container mx-auto min-h-screen px-2 my-6'>
        <MovieCasts />
        <MovieRates movie={movie[0]} />
        <div className='mt-16'>
          <Titles title={'Related Movies'} Icon={BsCollectionFill} />
          <div className='grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
            {
              movies.slice(0,1).map((movie, idx) => (
                <Movie movie={movie} key={idx} />
              ))
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SingleMovie