const Banner = () => {
  return (
    // Banner section
    <div className="relative mt-12">
      <img
        src="https://images.unsplash.com/photo-1726994290214-a1e223315096?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full rounded-2xl object-cover h-96 md:h-80 lg:h-[400px]"
      />
      <div className="absolute inset-0 bg-black/50 rounded-2xl flex flex-col items-center justify-center p-6 md:p-8 lg:p-10 space-y-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center leading-tight">
          Discover an Exceptional Cooking <br /> Class Tailored for You!
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white text-center max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum
          <br />
          voluptatum minus. Expedita ut similique nihil alias atque cum? Labore?
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <button className="bg-green-500 hover:bg-green-600 transition duration-300 py-2.5 px-6 text-lg md:text-xl font-normal rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Explore Now
          </button>
          <button className="ring-2 ring-green-500 hover:ring-green-600 text-green-600 hover:bg-green-600 hover:text-white transition duration-300 py-2 px-5 text-lg md:text-xl font-normal rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
