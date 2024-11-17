const About = () => {
  return (
    <section className="maxWidth px-4 py-20 lg:flex gap-4 items-center">
      <div className="flex-1">
        <h2 className="text-5xl font-serif text-yellow mb-2 tracking-tight fot">
          Little Lemon
        </h2>
        <h3 className="text-3xl text-olive mb-4">New York</h3>
        <p className="mb-12 lg:mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 lg:flex-col flex-1">
        <div className="rounded-corners overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="/chefA.jpg"
            alt="chef picture"
          />
        </div>
        <div className="rounded-corners overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="/chefB.jpg"
            alt="chef picture"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
