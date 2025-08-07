import { useState } from "react";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const { cart, removeFromCart, clearCart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.qty, 0);
  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">ShopMate</h1>

      <div className="relative">
        <button onClick={() => setShowDropDown(!showDropDown)}>
          <FaShoppingCart className="text-2xl text-gray-700 cursor-pointer" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {itemCount}
            </span>
          )}
        </button>
        {showDropDown && (
          <div className="absolute right-0 mt-2 w-80 bg-white border rounded shadow-lg z-50">
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">Cart Items</h2>
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <>
                  <ul className="max-h-60 overflow-y-auto divide-y divide-gray-200">
                    {cart.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between items-center py-2"
                      >
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-gray-500">
                            Quantity: {item.qty}
                          </p>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm text-red-500 hover:underline"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center mt-4">
                    <span>Total Price:</span>
                    <span className="font-semibold">${totalPrice}</span>
                  </div>
                  <button
                    onClick={clearCart}
                    className="mt-3 w-full bg-red-500 text-white py-1 rounded transition"
                  >
                    Clear Cart
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
