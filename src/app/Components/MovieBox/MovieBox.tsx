

const MovieBox = () => {
  return (
    <div className="w-96 flex max-w-xl flex-col justify-between py-8">
      <div className="flex items-center gap-x-4 text-xs">
        <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
        <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-500 hover:bg-gray-100">Marketing</a>
      </div>
       <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-400 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Una buena película que merece ser vista</p>
        </div>
    </div>
  )
}

export default MovieBox