import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500  text-white p-4 gap-10 rounded-md flex flex-col ">
      <h2 className="text-center">
        <span className="text-4xl">{price}</span>
        <span className="text-2xl">/month</span>
      </h2>
      <h3 className="text-3xl text-center ">{name}</h3>
      <div className="pl-5 flex-grow">
        {features.map((feature) => (
          <Feature feature={feature}></Feature>
        ))}
      </div>
      <button className="my-5 bg-green-400 w-full rounded-md py-2 font-semibold hover:bg-green-800">
        Buy
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
