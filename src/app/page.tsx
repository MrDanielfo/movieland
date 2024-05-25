
import Image from "next/image";
// import Skeleton from 'react-loading-skeleton'
import Banner from "./Components/Banner/Banner";
import Sidebar from "./Components/Sidebar/Sidebar";
import MovieBox from "./Components/MovieBox/MovieBox";
// import 'react-loading-skeleton/dist/skeleton.css'

export default function Home() {

  const cards = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <main className="flex flex-col justify-between">
      <Sidebar />
      <Banner buttonLink="#" />
      <div className="flex flex-wrap ml-20 w-12/12 lg:justify-between sm:justify-center">
        {cards.map((card, index) => (
          <MovieBox key={index} />
        ))}
        
      </div>
     
    </main>
  );
}
