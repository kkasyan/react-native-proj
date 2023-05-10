import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const logIn = () => {
    setIsLogged(true);
  };

  // const logOut = () => {
  //   setIsLogged(false);
  // };

  return (
    <UserContext.Provider value={{ isLogged, logIn }}>
      {children}
    </UserContext.Provider>
  );
};
