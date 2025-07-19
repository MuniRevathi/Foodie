import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Grocery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        try {
            // Create a cart item format similar to restaurant items
            const cartItem = {
                card: {
                    info: {
                        id: item.id,
                        name: item.name,
                        price: parseInt(item.price.replace(/[₹,]/g, '')) * 100, // Convert to paise
                        description: `Fresh ${item.category} item`,
                        imageId: item.image,
                        category: item.category
                    }
                }
            };
            dispatch(addItem(cartItem));
            
            // Show success feedback
            setToastMessage(`${item.name} added to cart! 🛒`);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        } catch (error) {
            console.error("Error adding item to cart:", error);
            alert("Error adding item to cart. Please try again.");
        }
    };

    const categories = [
        { id: 'all', name: 'All Items', icon: '🛒' },
        { id: 'fruits', name: 'Fruits', icon: '🍎' },
        { id: 'vegetables', name: 'Vegetables', icon: '🥕' },
        { id: 'dairy', name: 'Dairy', icon: '🥛' },
        { id: 'bakery', name: 'Bakery', icon: '🍞' },
        { id: 'snacks', name: 'Snacks', icon: '🍪' },
        { id: 'beverages', name: 'Beverages', icon: '🥤' }
    ];

    const groceryItems = [
        { id: 1, name: 'Fresh Apples', category: 'fruits', price: '₹120', priceDisplay: '₹120/kg', image: '🍎', discount: '10% OFF' },
        { id: 2, name: 'Organic Bananas', category: 'fruits', price: '₹60', priceDisplay: '₹60/dozen', image: '🍌', discount: '15% OFF' },
        { id: 3, name: 'Fresh Tomatoes', category: 'vegetables', price: '₹40', priceDisplay: '₹40/kg', image: '🍅', discount: '5% OFF' },
        { id: 4, name: 'Green Spinach', category: 'vegetables', price: '₹30', priceDisplay: '₹30/bunch', image: '🥬', discount: '20% OFF' },
        { id: 5, name: 'Fresh Milk', category: 'dairy', price: '₹60', priceDisplay: '₹60/liter', image: '🥛', discount: '5% OFF' },
        { id: 6, name: 'Greek Yogurt', category: 'dairy', price: '₹180', priceDisplay: '₹180/pack', image: '🧈', discount: '10% OFF' },
        { id: 7, name: 'Whole Wheat Bread', category: 'bakery', price: '₹45', priceDisplay: '₹45/loaf', image: '🍞', discount: '8% OFF' },
        { id: 8, name: 'Chocolate Cookies', category: 'snacks', price: '₹120', priceDisplay: '₹120/pack', image: '🍪', discount: '15% OFF' },
        { id: 9, name: 'Orange Juice', category: 'beverages', price: '₹150', priceDisplay: '₹150/bottle', image: '🧃', discount: '12% OFF' }
    ];

    const filteredItems = selectedCategory === 'all' 
        ? groceryItems 
        : groceryItems.filter(item => item.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
            <div className="container mx-auto px-4 py-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-orange-600 mb-6">
                        🛒 Grocery <span className="text-green-500">Store</span>
                    </h1>
                    <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                    <p className="text-xl text-orange-700 max-w-3xl mx-auto leading-relaxed">
                        Fresh groceries delivered to your doorstep! From farm-fresh vegetables to 
                        daily essentials, we've got everything you need for your kitchen.
                    </p>
                </div>

                {/* Features Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform">
                        <div className="text-4xl mb-4">🚚</div>
                        <h3 className="text-xl font-bold text-orange-600 mb-3">Same Day Delivery</h3>
                        <p className="text-orange-700">Order before 6 PM and get your groceries delivered the same day!</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform">
                        <div className="text-4xl mb-4">🌱</div>
                        <h3 className="text-xl font-bold text-orange-600 mb-3">Fresh & Organic</h3>
                        <p className="text-orange-700">Handpicked fresh produce sourced directly from local farmers.</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform">
                        <div className="text-4xl mb-4">💰</div>
                        <h3 className="text-xl font-bold text-orange-600 mb-3">Best Prices</h3>
                        <p className="text-orange-700">Competitive prices with regular discounts and special offers.</p>
                    </div>
                </div>

                {/* Category Filter */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">Shop by Category</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                                    selectedCategory === category.id
                                        ? 'bg-green-500 text-white shadow-lg'
                                        : 'bg-green-100 text-green-700 hover:bg-green-200 shadow-md'
                                }`}
                            >
                                <span className="text-xl">{category.icon}</span>
                                <span>{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-orange-600 mb-8 text-center">
                        {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredItems.map(item => (
                            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative p-8 text-center bg-gradient-to-br from-gray-50 to-gray-100">
                                    <div className="text-6xl mb-4">{item.image}</div>
                                    <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                        {item.discount}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-lg text-orange-600 mb-2">{item.name}</h3>
                                    <p className="text-2xl font-bold text-green-500 mb-4">{item.priceDisplay}</p>
                                    <button 
                                        onClick={() => handleAddToCart(item)}
                                        className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Special Offers */}
                <div className="bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl p-8 text-white text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">🎉 Special Weekend Offers!</h2>
                    <p className="text-xl mb-6">Get up to 25% off on all grocery items this weekend!</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="bg-white bg-opacity-20 rounded-lg p-4 text-white">
                            <div className="font-bold text-white">Free Delivery</div>
                            <div className="text-sm text-gray-100">On orders above ₹999</div>
                        </div>
                        <div className="bg-white bg-opacity-20 rounded-lg p-4 text-white">
                            <div className="font-bold text-white">Buy 2 Get 1</div>
                            <div className="text-sm text-gray-100">On selected fruits</div>
                        </div>
                        <div className="bg-white bg-opacity-20 rounded-lg p-4 text-white">
                            <div className="font-bold text-white">Extra 10% Off</div>
                            <div className="text-sm text-gray-100">For new customers</div>
                        </div>
                    </div>
                </div>

                {/* Coming Soon Features */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-orange-600 mb-8">Coming Soon</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl shadow-lg p-6 opacity-75">
                            <div className="text-3xl mb-3">📱</div>
                            <h3 className="font-semibold text-orange-600">Mobile App</h3>
                            <p className="text-sm text-orange-700 mt-2">Download our app for better experience</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 opacity-75">
                            <div className="text-3xl mb-3">🔄</div>
                            <h3 className="font-semibold text-orange-600">Subscription</h3>
                            <p className="text-sm text-orange-700 mt-2">Regular delivery of your essentials</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 opacity-75">
                            <div className="text-3xl mb-3">🛡️</div>
                            <h3 className="font-semibold text-orange-600">Quality Guarantee</h3>
                            <p className="text-sm text-orange-700 mt-2">100% quality promise or money back</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 opacity-75">
                            <div className="text-3xl mb-3">⭐</div>
                            <h3 className="font-semibold text-orange-600">Loyalty Program</h3>
                            <p className="text-sm text-orange-700 mt-2">Earn points and get rewards</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toast Notification */}
            {showToast && (
                <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 ease-in-out">
                    <div className="flex items-center space-x-2">
                        <span className="text-lg">✅</span>
                        <span className="font-medium">{toastMessage}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Grocery;

