type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartModalProps = {
  isOpen: boolean;
  onClose: () => void;
  cartItems: number[];
  products: Product[];
};

export const CartModal = ({ isOpen, onClose, cartItems, products }: CartModalProps) => {
  if (!isOpen) return null;

  const itemsInCart = products.filter((product) => cartItems.includes(product.id));

  const total = itemsInCart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white w-[400px] rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Giỏ hàng</h2>
        {itemsInCart.length === 0 ? (
          <p className="text-gray-500">Chưa có sản phẩm nào.</p>
        ) : (
          <ul>
            {itemsInCart.map((item) => (
              <li key={item.id} className="flex items-center justify-between mb-2">
                <img src={item.image} alt={item.name} className="w-12 h-12 object-contain" />
                <span className="text-sm">{item.name}</span>
                <span className="text-sm font-semibold text-blue-500">
                  {item.price.toLocaleString()} đ
                </span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 font-bold text-right text-blue-600">
          Tổng: {total.toLocaleString()} đ
        </div>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Đóng
        </button>
      </div>
    </div>
  );
};
