"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
// import Skeleton from 'react-loading-skeleton'
import Banner from "./components/Banner/Banner";
import Sidebar from "./components/Sidebar/Sidebar";
import MovieBox from "./components/MovieBox/MovieBox";
import fetchData, { options } from "./utils/fetchData";
import { randomNameMovie } from "./utils/randomName";

// import 'react-loading-skeleton/dist/skeleton.css'
export interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
}


export default function Home() {

  const [movies, setMovies] = useState<Movie[]|null>(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null|boolean>(null);
  const [bannerMovie, setBannerMovie] = useState<Movie|null>(null)

  useEffect(() => {
    
    async function getApiData() {
      try {
        const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
        const result = await fetch(url, options)
        const data = await result.json();
        // console.log(data);
        setMovies(data?.results);
        const randomNumber = randomNameMovie(data?.results.length)
        setBannerMovie(data?.results[randomNumber])
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    getApiData()
  }, [])

  return (
    <main className="flex flex-col justify-between">
      <Sidebar />
      <Banner movieData={bannerMovie} buttonLink="#" />
      <div className="flex flex-wrap ml-20 w-12/12 lg:justify-between sm:justify-center">
        {loading 
          ? <p>Loading...</p> 
          :  movies?.map((data, index) => (
              <MovieBox movieData={data} key={index} />
            ))
        }
      </div>
     
    </main>
  );
}
