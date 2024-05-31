import { Movie } from "@/app/page";
import { FC } from "react";
import Link from "next/link";

interface BannerProps {
  movieData: Movie | null;
  buttonLink?: string;
}


const Banner: FC<BannerProps> = ({ movieData, buttonLink }) => {
  let imageUrl = `https://image.tmdb.org/t/p/w500${movieData?.poster_path}`
  return (
    <div 
      className={`bg-cover bg-center bg-no-repeat h-96 text-emerald-200 text-shadow-lg py-14 px-4 md:px-10 lg:px-20 text-center mb-10`}
      style={{ backgroundImage: `url(${imageUrl})`}}
    >
      <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4">{movieData?.title}</h1>

      <Link 
        href={`/movie/${movieData?.title}`} 
        className="bg-slate text-white-600 py-2 px-4 rounded hover:bg-gray-500 transition duration-300"
      >
        See More
      </Link>
    </div>
  )
}

export default Banner