type ProductProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  onAddToCart: (id: number) => void;
};

export const ProductCard = ({ id, name, price, image, onAddToCart }: ProductProps) => (
  <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center">
    <img src={image} alt={name} className="w-40 h-40 object-contain mb-4" />
    <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
    <p className="text-blue-500 font-bold mb-4">{price.toLocaleString()} đ</p>
    <button
      onClick={() => onAddToCart(id)}
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
    >
      Thêm vào giỏ
    </button>
  </div>
);
