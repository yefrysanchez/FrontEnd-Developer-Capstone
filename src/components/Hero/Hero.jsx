const Hero = () => {
  return (
    <section className="h-[600px] mb-12">
      <div className="bg-olive h-[380px]">
        <header className="maxWidth py-12 w-full flex flex-col md:flex-row px-4">
          <div className="flex-1 mb-4 text-center md:text-start">
            <h1 className="text-yellow text-4xl md:text-6xl font-serif">
              Little Lemon
            </h1>
            <h2 className="text-white text-3xl md:text-4xl font-serif mb-8">
              New York
            </h2>
            <p className="text-white md:text-lg mb-4 md:mb-8 max-w-[341px] mx-auto md:mx-0">
              We are family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button className="bg-yellow hover:bg-gray-100 hover:text-olive transition-colors duration-300 text-lg cursor-pointer h-[34px] w-[168px] rounded-corners">
              Reserve a Table
            </button>
          </div>
          <div className="rounded-corners overflow-hidden flex-1 h-[130px] md:h-[430px] w-full  max-w-[500px] mx-auto md:mx-0 shadow-lg">
            <img
              className="h-[300px] md:h-full w-full object-cover"
              src="/restauranfood.jpg"
              alt="restaurant food"
            />
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;
