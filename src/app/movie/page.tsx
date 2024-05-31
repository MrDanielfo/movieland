import Image from "next/image";
import Sidebar from "../components/Sidebar/Sidebar";

export default function MovieDetails() {
  let url = 'https://api.themoviedb.org/3/search/movie?query=Boy%20Kills%20World&include_adult=false&language=en-US&page=1'
  return (
    <main className="flex flex-col justify-between">
      <Sidebar />
      <div className="relative w-full h-48">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`}
          alt={movieData?.title}
          layout="fill"
          className="object-cover object-center"
        />
      </div>
    </main>
  )
}