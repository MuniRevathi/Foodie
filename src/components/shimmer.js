const Shimmer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Shimmer */}
        <div className="mb-8">
          <div className="h-8 bg-gray-200 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-lg w-96 mx-auto animate-pulse"></div>
        </div>

        {/* Search Box Shimmer */}
        <div className="mb-8 flex justify-center space-x-4">
          <div className="h-12 bg-gray-200 rounded-lg w-80 animate-pulse"></div>
          <div className="h-12 bg-gray-200 rounded-lg w-24 animate-pulse"></div>
          <div className="h-12 bg-gray-200 rounded-lg w-32 animate-pulse"></div>
        </div>

        {/* Restaurant Cards Grid Shimmer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse"
            >
              {/* Image Shimmer */}
              <div className="h-48 bg-gray-200"></div>
              
              {/* Content Shimmer */}
              <div className="p-4 space-y-3">
                {/* Restaurant Name */}
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                
                {/* Cuisines */}
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                
                {/* Rating and Cost */}
                <div className="flex justify-between">
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </div>
                
                {/* Delivery Time */}
                <div className="h-4 bg-gray-200 rounded w-24"></div>
                
                {/* User Info */}
                <div className="h-4 bg-gray-200 rounded w-32"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Loading Indicator */}
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
            <div className="relative">
              {/* Spinning Loader */}
              <div className="w-16 h-16 mx-auto mb-4">
                <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
              </div>
              
              {/* Loading Text */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Finding Delicious Food...
              </h3>
              <p className="text-gray-600 mb-4">
                We're fetching the best restaurants for you
              </p>
              
              {/* Animated Dots */}
              <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Loading Message */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <div className="w-4 h-4 border-2 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
            <span className="text-gray-600 font-medium">Loading amazing restaurants...</span>
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-100 rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-red-100 rounded-full animate-ping opacity-20" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-100 rounded-full animate-ping opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-green-100 rounded-full animate-ping opacity-20" style={{ animationDelay: '3s' }}></div>
      </div>
    </div>
  );
};

export default Shimmer;