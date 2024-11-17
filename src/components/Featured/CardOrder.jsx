import PropTypes from "prop-types";

const CardOrder = ({ food }) => {
  return (
    <div className="overflow-hidden hover:scale-105 transition rounded-corners w-full max-w-[282px] bg-gray h-[406px] relative">
      <div className="h-[186px]">
        <img
          className="w-full h-full object-cover"
          src={food.img}
          alt="food image"
        />
      </div>
      <div className="p-4 h-full">
        <div className="flex justify-between text-lg mb-4">
          <span className="font-bold font-serif text-base">{food.food}</span>
          <span className="text-olive">${food.price}</span>
        </div>
        <p className="text-olive text-lg leading-5">{food.info}</p>
        <button className="font-bold flex items-center gap-2 absolute bottom-4 right-4">
          <span>Order Delivery</span>
          <span>
            <img src="/deliveryIcon.svg" alt="Delivery Icon" />
          </span>
        </button>
      </div>
    </div>
  );
};

CardOrder.propTypes = {
  food: PropTypes.shape({
    food: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardOrder;
