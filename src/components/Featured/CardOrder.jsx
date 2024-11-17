import PropTypes from "prop-types";

const CardOrder = ({ food }) => {
  return (
    <div className="overflow-hidden rounded-corners w-full bg-gray-100 md:h-[406px] shadow-sm relative">
      <div className="h-fit md:h-[186px]">
        <img
          className="w-full h-full object-cover"
          src={food.img}
          alt="food image"
        />
      </div>
      <div className="p-4 h-full">
        <div className="flex justify-between text-lg mb-4">
          <span className="font-bold text-base">{food.food}</span>
          <span className="text-salmon font-bold ">${food.price}</span>
        </div>
        <p className="text-olive text-lg leading-5 mb-4 md:mb-0">{food.info}</p>
        <button className="font-bold flex items-center gap-2 md:absolute bottom-4 right-4">
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
