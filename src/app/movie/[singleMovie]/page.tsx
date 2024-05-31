import Image from "next/image";
import Sidebar from "../../components/Sidebar/Sidebar";
import { options } from "@/app/utils/fetchData";


async function getMovie(movieName: string) {
  let url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`
  const res = await fetch(url, options)
  const data = await res.json()
 
  return data?.results[0];
}

export default async function MovieDetails({ params }: { params : {singleMovie: string}}) {
  
  const movie = await getMovie(params?.singleMovie);

  return (
    <main className="ml-24 w-5/6 my-6 flex flex-col justify-between">
      <Sidebar />
      <div className="relative w-full h-48">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie?.title}
          layout="fill"
          className="object-cover object-center"
        />
      </div>
      <div className="flex items-center gap-x-4 text-sm my-5">
        <time dateTime="2020-03-16" className="text-gray-200">{movie?.release_date}</time>
        <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-500 hover:bg-gray-100">Rated: {movie?.vote_average}</a>
      </div>
       <div className="group relative">
          <h2 className="mt-3 text-xl font-semibold leading-6 text-emerald-400">
              <span className="absolute inset-0"></span>
              {movie?.title}
          </h2>
          <p className="mt-5 text-lg line-clamp-3  leading-6 text-gray-200">{movie?.overview}</p>
        </div>
    </main>
  )
}

