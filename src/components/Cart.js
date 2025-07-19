import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice.js";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    const price = item?.card?.info?.price || item?.card?.info?.defaultPrice || 0;
    return total + (price / 100);
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="mb-8">
            <div className="text-8xl mb-4">🛒</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any delicious items to your cart yet. 
              Let's find some amazing food!
            </p>
            <Link 
              to="/"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <span>🍽️</span>
              <span>Browse Restaurants</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🛍️ Your <span className="text-orange-500">Cart</span>
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} ready for checkout
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white">Order Items</h2>
                    <button
                      onClick={handleClearCart}
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                    >
                      <span>🗑️</span>
                      <span>Clear Cart</span>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <ItemList items={cartItems} />
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-8">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6">
                  <h3 className="text-2xl font-bold text-white">Order Summary</h3>
                </div>
                
                <div className="p-6 space-y-4">
                  {/* Item Count */}
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Items ({cartItems.length})</span>
                    <span className="font-semibold">₹{totalPrice.toFixed(2)}</span>
                  </div>

                  {/* Delivery Fee */}
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-semibold text-green-500">FREE</span>
                  </div>

                  {/* Platform Fee */}
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Platform Fee</span>
                    <span className="font-semibold">₹5.00</span>
                  </div>

                  {/* GST */}
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">GST (5%)</span>
                    <span className="font-semibold">₹{(totalPrice * 0.05).toFixed(2)}</span>
                  </div>

                  {/* Total */}
                  <div className="flex justify-between items-center py-3 bg-gray-50 rounded-lg px-4">
                    <span className="text-lg font-bold text-gray-800">Total Amount</span>
                    <span className="text-2xl font-bold text-green-500">
                      ₹{(totalPrice + 5 + (totalPrice * 0.05)).toFixed(2)}
                    </span>
                  </div>

                  {/* Savings */}
                  <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-500">💰</span>
                      <span className="text-green-700 font-medium">You're saving ₹25 on delivery!</span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 mt-6">
                    <span>🏪</span>
                    <span>Proceed to Checkout</span>
                  </button>

                  {/* Payment Options */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-3">We Accept</h4>
                    <div className="flex space-x-3">
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium">💳 Cards</div>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-medium">📱 UPI</div>
                      <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded text-sm font-medium">💵 COD</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Estimated Delivery */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center space-x-2">
                  <span>🚚</span>
                  <span>Delivery Information</span>
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <span>⏰</span>
                    <span>Estimated delivery: 25-35 minutes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>📍</span>
                    <span>Delivering to current location</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>📞</span>
                    <span>We'll call you before delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
