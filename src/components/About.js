import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "./UserContext";

class About extends Component{
    constructor(props){
        super(props);
    }
  
    componentDidMount(){
        //console.log("parent  component did mount")
    }
    
    render(){
        return(
            <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
                {/* Hero Section */}
                <div className="container mx-auto px-4 py-16">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
                            About <span className="text-orange-500">Foodie</span>
                        </h1>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Welcome to Foodie - your ultimate destination for delicious food delivery. 
                            We connect you with the best restaurants in your area, bringing amazing flavors 
                            right to your doorstep.
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                At Foodie, we believe that great food brings people together. Our mission is to 
                                make quality dining accessible to everyone by partnering with local restaurants 
                                and providing fast, reliable delivery service.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="text-gray-700">Fresh ingredients from trusted suppliers</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="text-gray-700">Fast and reliable delivery service</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="text-gray-700">Supporting local restaurant partners</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-4">Why Choose Foodie?</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center space-x-2">
                                        <span className="text-2xl">🚀</span>
                                        <span>Lightning fast delivery</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="text-2xl">🍽️</span>
                                        <span>Wide variety of cuisines</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="text-2xl">⭐</span>
                                        <span>Top-rated restaurants</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="text-2xl">💯</span>
                                        <span>100% satisfaction guarantee</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-3xl font-bold text-orange-500 mb-2">1000+</div>
                                <div className="text-gray-600">Restaurant Partners</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-orange-500 mb-2">50K+</div>
                                <div className="text-gray-600">Happy Customers</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-orange-500 mb-2">25</div>
                                <div className="text-gray-600">Cities Served</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-orange-500 mb-2">4.8⭐</div>
                                <div className="text-gray-600">Average Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;


