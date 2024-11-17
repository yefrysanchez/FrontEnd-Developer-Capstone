import ReviewCard from "./ReviewCard";
const revs = [
  {
    img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Lara Clark",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
    name: "Matt Ortiz",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
    name: "Dylan Smith",
  },{
    img: "https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Kiara Robinson",
  },
];

const Testimonials = () => {
  return (
    <section className=" bg-olive pb-4">
      <article className="px-4 pt-8 pb-4 maxWidth">
        <h3 className="text-white font-serif text-3xl mb-8">
          What people say about us!
        </h3>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {revs.map((rev) => (
            <ReviewCard key={rev.name} rev={rev} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Testimonials;
