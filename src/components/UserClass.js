import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
       
      },
    };
  }

  async componentDidMount() {
    // GitHub API call
    const data = await fetch("https://api.github.com/users/akshaymarch7");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        {/* ✅ GitHub profile photo */}
        <img
          src={avatar_url}
          alt="GitHub Avatar"
          style={{ width: "150px", height: "150px", borderRadius: "8px" }}
        />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;
