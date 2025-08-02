import React from "react";

const Cart = ({ cartItems, onRemove }) => {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
          <img
            src="/images/empty.jpg"
            alt="Empty Cart"
            className="w-64 mx-auto mt-4"
          />
          <p className="text-blue-600 mt-6 text-sm">
            Start adding products to see them here!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-lg shadow p-4"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg mr-4"
              />

              {/* Details */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <p className="text-blue-600 font-bold mt-1">
                  ₹{item.price.toLocaleString("en-IN")}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-2">
                <button
                  className="bg-gray-200 px-2 rounded text-xl"
                  onClick={() => onRemove(index, "decrease")}
                >
                  −
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  className="bg-gray-200 px-2 rounded text-xl"
                  onClick={() => onRemove(index, "increase")}
                >
                  +
                </button>
              </div>

              {/* Delete Button */}
              <button
                className="ml-4 text-red-500 hover:underline"
                onClick={() => onRemove(index, "delete")}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="text-right font-bold text-xl mt-6">
            Total: ₹{totalPrice.toLocaleString("en-IN")}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
