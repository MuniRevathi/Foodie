import React,{lazy,Suspense, useEffect,useState} from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./components/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
    const [userName, setUserName] = useState("");

  useEffect(()=>{
    const data={
      name:"Muni Revathi"
    };
    setUserName(data.name);
  },[]);



  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName, loggedIn:userName, setUserName}}>
    <div className="app">
      <Header />
      <Outlet/>
    
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
      path:"/",
      element:<Body/>,
      },
      {
    path:"/about",
    element:<About/>,
  },
  {
    path:"/contact",
    element:<Contact/>,
  },
  {
    path:"/restaurants/:resId",
    element:<RestaurantMenu/>,
  },
  {
     path:"/cart",
     element:<Cart/>
  }
    ],
    errorElement:<Error/>,
  },
 
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);