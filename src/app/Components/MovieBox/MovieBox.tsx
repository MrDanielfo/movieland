import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/app/page"

interface MovieProps {
  movieData: Movie
}

const MovieBox = ({ movieData }: MovieProps) => {
 
  return (
    <div className="w-96 flex max-w-xl flex-col justify-between py-8">
      {/* <img className="w-full h-48 object-cover object-center" src={imageUrl} alt={title} /> */}
      <div className="relative w-full h-48">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`}
          alt={movieData?.title}
          layout="fill"
          className="object-cover object-center"
        />
      </div>
      <div className="flex items-center gap-x-4 text-xs my-3">
        <time dateTime="2020-03-16" className="text-gray-200">Release Date: {movieData?.release_date}</time>
        <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-500 hover:bg-gray-100">Rated: {movieData?.vote_average.toFixed(1)}</a>
      </div>
       <div className="group relative">
          <Link href={`/movie/${movieData?.title}`} className="mt-3 text-lg font-semibold leading-6 text-gray-400 group-hover:text-gray-600">
              <span className="absolute inset-0"></span>
              {movieData?.title}
          </Link>
        </div>
    </div>
  )
}

export default MovieBox