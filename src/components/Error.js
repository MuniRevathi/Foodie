import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
            <div className="text-center px-4">
                {/* Error Illustration */}
                <div className="mb-8">
                    <div className="relative inline-block">
                        <div className="text-8xl font-bold text-orange-500 opacity-20">404</div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-6xl">🍽️</div>
                        </div>
                    </div>
                </div>

                {/* Error Content */}
                <div className="max-w-md mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Oops! Page Not Found
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Looks like this page went out for delivery and got lost! 
                        Don't worry, we'll help you find your way back to delicious food.
                    </p>

                    {/* Action Buttons */}
                    <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                        <Link 
                            to="/"
                            className="inline-block bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
                        >
                            🏠 Go Home
                        </Link>
                        <Link 
                            to="/contact"
                            className="inline-block bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-8 rounded-lg border border-gray-300 transition-all duration-200 transform hover:scale-105"
                        >
                            📞 Contact Support
                        </Link>
                    </div>
                </div>

                {/* Helpful Links */}
                <div className="mt-12 pt-8 border-t border-gray-200 max-w-md mx-auto">
                    <p className="text-sm text-gray-500 mb-4">Maybe you were looking for:</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link to="/" className="text-orange-500 hover:text-orange-600 hover:underline">
                            🍕 Browse Restaurants
                        </Link>
                        <Link to="/cart" className="text-orange-500 hover:text-orange-600 hover:underline">
                            🛒 View Cart
                        </Link>
                        <Link to="/about" className="text-orange-500 hover:text-orange-600 hover:underline">
                            ℹ️ About Us
                        </Link>
                    </div>
                </div>

                {/* Fun Animation */}
                <div className="mt-8">
                    <div className="inline-flex items-center space-x-2 text-gray-400">
                        <span className="animate-bounce">🚲</span>
                        <span className="text-sm">Our delivery guy is looking for this page...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Error;