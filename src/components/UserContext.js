import { createContext } from "react"

const UserContext=createContext({
    loggedInUser:"Default User",
    loggedIn:"Default User",
    setUserName: () => {}
});

export default UserContext;