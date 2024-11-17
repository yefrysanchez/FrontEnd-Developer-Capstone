import { FaStar } from "react-icons/fa";
import propTypes, { string } from "prop-types";

const ReviewCard = ({ rev }) => {
  return (
    <div className="bg-white rounded-corners p-4 pb-8 flex flex-col items-center">
      <div className="h-36 w-36 rounded-full overflow-hidden mb-2">
        <img
          className="h-full w-full object-cover"
          src={rev.img}
          alt="profile picture"
        />
      </div>
      <h3 className="text-olive font-bold text-center mb-2">{rev.name}</h3>
      <div className="flex text-2xl text-yellow mb-2">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className="text-olive">
        &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.&quot;
      </p>
    </div>
  );
};

export default ReviewCard;

ReviewCard.propTypes = {
  rev: propTypes.shape({
    img: string.isRequired,
    name: string.isRequired,
  }),
};
