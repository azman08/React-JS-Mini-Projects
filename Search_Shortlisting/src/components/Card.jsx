const Card = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 transition-transform transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="h-32 w-full object-cover rounded-full"
      />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-500">{product.category}</p>
      <p className="text-blue-600 font-bold">${product.price}</p>
    </div>
  );
};

export default Card;
