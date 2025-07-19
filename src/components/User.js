import { useEffect, useState } from "react";

const User = ({ name }) => {
    const [count, setCount] = useState(0);
    const [count2] = useState(1);
    const [userStats, setUserStats] = useState({
        ordersCompleted: 0,
        favoriteRestaurants: 0,
        reviewsWritten: 0
    });

    useEffect(() => {
        // Simulate loading user stats
        const timer = setTimeout(() => {
            setUserStats({
                ordersCompleted: Math.floor(Math.random() * 100) + 50,
                favoriteRestaurants: Math.floor(Math.random() * 20) + 5,
                reviewsWritten: Math.floor(Math.random() * 30) + 10
            });
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300">
            {/* User Header */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                    👨‍💼
                </div>
                <h2 className="text-xl font-bold">{name || "Guest User"}</h2>
                <p className="text-blue-100">Foodie Member</p>
            </div>

            {/* User Content */}
            <div className="p-6">
                {/* Counter Section */}
                <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-4 text-center">Interactive Counters</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-blue-500 mb-2">{count}</div>
                            <div className="text-sm text-gray-600 mb-3">Clicks</div>
                            <button 
                                onClick={incrementCount}
                                className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium py-2 px-3 rounded-md transition-colors"
                            >
                                Click Me!
                            </button>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-green-500 mb-2">{count2}</div>
                            <div className="text-sm text-gray-600 mb-3">Static</div>
                            <div className="text-xs text-gray-400">Read Only</div>
                        </div>
                    </div>
                </div>

                {/* User Info */}
                <div className="mb-6 space-y-3">
                    <div className="flex items-center space-x-3">
                        <span className="text-lg">📍</span>
                        <div>
                            <div className="text-sm text-gray-500">Location</div>
                            <div className="font-medium text-gray-800">Dehradun, India</div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="text-lg">📱</span>
                        <div>
                            <div className="text-sm text-gray-500">Contact</div>
                            <div className="font-medium text-gray-800">@munirevathi06</div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="text-lg">⭐</span>
                        <div>
                            <div className="text-sm text-gray-500">Member Since</div>
                            <div className="font-medium text-gray-800">2024</div>
                        </div>
                    </div>
                </div>

                {/* User Stats */}
                <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-800 mb-3 text-center">Activity Stats</h4>
                    <div className="grid grid-cols-3 gap-3 text-center">
                        <div>
                            <div className="text-lg font-bold text-orange-500">{userStats.ordersCompleted}</div>
                            <div className="text-xs text-gray-500">Orders</div>
                        </div>
                        <div>
                            <div className="text-lg font-bold text-red-500">{userStats.favoriteRestaurants}</div>
                            <div className="text-xs text-gray-500">Favorites</div>
                        </div>
                        <div>
                            <div className="text-lg font-bold text-green-500">{userStats.reviewsWritten}</div>
                            <div className="text-xs text-gray-500">Reviews</div>
                        </div>
                    </div>
                </div>

                {/* User Badges */}
                <div className="mt-4 pt-4 border-t">
                    <h4 className="font-semibold text-gray-800 mb-3 text-center">Achievements</h4>
                    <div className="flex justify-center space-x-2">
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">🏆 Top Reviewer</span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">🍕 Pizza Lover</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;