import CardOrder from "./CardOrder";

const foods = [
  {
    food: "Greek salad",
    price: "12.99",
    info: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    img: "/greekSalad.jpg",
  },
  {
    food: "Bruchetta",
    price: "5.99",
    info: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    img: "/bruchetta.svg", 
  },
  {
    food: "Lemon Dessert",
    price: "5.00",
    info: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    img: "/lemonDessert.jpg",
  },
];

const Featured = () => {
  return (
    <section className="maxWidth">
      <div className="flex flex-col md:flex-row items-center md:justify-between mb-12">
        <h2 className="font-serif text-5xl font-medium text-center md:text-start mb-8 md:mb-0">
          This Week&apos;s Specials!
        </h2>

        <button 
          className="bg-yellow hover:opacity-90 cursor-pointer py-2 px-8 rounded-lg"
          onClick={() => window.location.href = '/menu'} // Replace '/menu' with the actual menu link
        >
          Online Menu
        </button>
      </div>

      <article className="mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
        {foods.map((food) => (
          <CardOrder key={food.food} food={food} /> 
        ))}
      </article>
    </section>
  );
};

export default Featured;
