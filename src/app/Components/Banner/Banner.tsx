import { FC } from "react";

interface BannerProps {
  buttonLink?: string;
}


const Banner: FC<BannerProps> = ({ buttonLink }) => {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-[url('/gladiator-poster.jpeg')] h-96 text-emerald-200 text-shadow-lg py-14 px-4 md:px-10 lg:px-20 text-center mb-10">
      <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4">La mejor película</h1>
      <p className="text-lg md:text-xl lg:text-1xl mb-6">Una película para locos</p>
      <a 
        href={buttonLink} 
        className="bg-slate text-white-600 py-2 px-4 rounded hover:bg-gray-500 transition duration-300"
      >
        Ver más
      </a>
    </div>
  )
}

export default Banner