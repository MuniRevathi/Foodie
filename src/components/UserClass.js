import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Loading...",
        location: "Loading...",
        avatar_url: "",
        bio: "",
        company: "",
        public_repos: 0,
        followers: 0,
        following: 0,
      },
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      // Fetch GitHub user data
      const data = await fetch("https://api.github.com/users/MuniRevathi");
      
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }
      
      const json = await data.json();

      this.setState({
        userInfo: json,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
      this.setState({
        error: error.message,
        loading: false,
        userInfo: {
          name: "Muni Revathi",
          location: "India",
          avatar_url: "",
          bio: "Full Stack Developer passionate about creating amazing web applications",
          company: "Foodie Inc.",
          public_repos: 25,
          followers: 100,
          following: 50,
        }
      });
    }
  }

  render() {
    const { userInfo, loading, error } = this.state;
    const { name, location, avatar_url, bio, company, public_repos, followers, following } = userInfo;

    if (loading) {
      return (
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto">
          <div className="animate-pulse">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6"></div>
            <div className="h-6 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white text-center">
          <div className="relative inline-block">
            {avatar_url ? (
              <img
                src={avatar_url}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto mb-4"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-4xl border-4 border-white shadow-lg mx-auto mb-4">
                👤
              </div>
            )}
            <div className="absolute bottom-4 right-4 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
          </div>
          <h2 className="text-2xl font-bold mb-2">{name || "Developer"}</h2>
          {company && (
            <p className="text-purple-100 font-medium mb-2">
              <span className="inline-block mr-2">🏢</span>
              {company}
            </p>
          )}
        </div>

        {/* Profile Details */}
        <div className="p-6">
          {/* Bio */}
          {bio && (
            <div className="mb-6">
              <p className="text-gray-600 text-center italic leading-relaxed">
                "{bio}"
              </p>
            </div>
          )}

          {/* Location */}
          <div className="flex items-center justify-center mb-6 text-gray-700">
            <span className="text-xl mr-2">📍</span>
            <span className="font-medium">{location || "Earth"}</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-500">{public_repos}</div>
              <div className="text-sm text-gray-500">Repositories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-500">{followers}</div>
              <div className="text-sm text-gray-500">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-500">{following}</div>
              <div className="text-sm text-gray-500">Following</div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3 text-center">Skills & Technologies</h4>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">React</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Node.js</span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">JavaScript</span>
              <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">Redux</span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">Tailwind</span>
            </div>
          </div>

          {/* Contact Button */}
          <div className="text-center">
            <a
              href="https://github.com/MuniRevathi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <span>🐙</span>
              <span>View GitHub Profile</span>
            </a>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm text-center">
              Note: Using fallback data due to API limitations
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default UserClass;
