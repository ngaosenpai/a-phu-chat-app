import { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({ children }){
  const data = JSON.parse(localStorage.getItem("user"));
  let userGlobal;
  const { user, token } = data;  
  user && token ? userGlobal =  user : userGlobal = "";   

  const [userLocal, setUserLocal] = useState({
    ...userGlobal
  })
  return (
    <UserContext.Provider value={{userLocal, setUserLocal}}>
      { children }
    </UserContext.Provider>
  )
}

export default UserContextProvider