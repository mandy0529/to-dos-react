//context.js에서
import React, {useState, useContext} from 'react';

export const UserContext = React.createContext();

const UserContextProvider = ({children}) => {
  const [user, setUser] = useState({
    name: 'minji',
    loggedIn: false,
  });
  const loggedUser = () => setUser({...user, loggedIn: true});
  const loggedOutUser = () => setUser({...user, loggedIn: false});
  return (
    <UserContext.Provider value={{user, fn: {loggedUser, loggedOutUser}}}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  const {user} = useContext(UserContext);
  return user;
};

export const useLoginControl = () => {
  const {fn} = useContext(UserContext);
  return fn;
};
export default UserContextProvider;
