import React from "react";
import { useState } from "react";

let logoutTimer;

const initialState = {
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: (token) => {},
};
const AuthContext = React.createContext(initialState);

// const calculateRemainingTime =(expirationTime)=>{
//   const currentTime = new Date().getTime();
//   const adjExpirationTime = new Date(expirationTime).getTime();

//   const remainingDuration = adjExpirationTime - currentTime;
//   return remainingDuration;

// }

const calculateRemainingTime = expirationTime => expirationTime - Date.now();
const retrieveStoredToken = ()=>{
  const storedToken = localStorage.getItem('token');
  const storedExpirationDate = localStorage.getItem('expirationTime');

  const remainingTime= calculateRemainingTime(storedExpirationDate);

  if(remainingTime <= 60000){
    localStorage.removeItem('token')
    localStorage.removeItem('expirationTime')
    return null;
  }

  return {
    token:storedToken,
    duration:remainingTime
  }
}

  export  const AuthContextProvider = (props) => {
const tokenData = retrieveStoredToken();
     initialToken = tokenData.token;
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
    if(logoutTimer){
      clearTimeout(logoutTimer);
    }
  };

  const loginHandler = (token,expirationTime) => {
    setToken(token);
    localStorage.setItem('token',token);
    localStorage.setItem('expirationTime',expirationTime)
    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

