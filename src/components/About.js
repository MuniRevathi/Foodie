import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "./UserContext";
class About extends Component{
    constructor(props){
        super(props);

       // console.log(" parent constructor");
    }
  componentDidMount(){
    //console.log("parent  component did mount")
  }
    render(){
      //  console.log("parent render");
        return(
    <div>
        <h1>About class Component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is Name React web series </h2>
          <UserClass name={"first"} location={"Dehradun class"}/>
        
    </div>
    
  );
 }
}

export default About;


