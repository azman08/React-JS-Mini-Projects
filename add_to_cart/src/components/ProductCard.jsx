const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border p-8 rounded-md bg-white shadow-lg ">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-base font-semibold">Price : {product.price}</p>
      <button
        className="mt-4 bg-black text-white px-4 py-2 rounded-3xl"
        onClick={() => onAddToCart(product)}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
