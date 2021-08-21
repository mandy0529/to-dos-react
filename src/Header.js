import {useLoginControl, useUser} from './Context';

const Header = () => {
  const {name, loggedIn} = useUser();
  const {loggedUser, loggedOutUser} = useLoginControl();
  const handleLoginControl = (event) => {
    console.log(event);
    if (event.target.innerText === 'login') {
      loggedUser();
    } else {
      loggedOutUser();
    }
  };
  return (
    <>
      <h1>
        " hello, {name} ! you are the {loggedIn ? 'logged In' : 'not logged in'}
        "
      </h1>
      <button onClick={handleLoginControl}>
        {loggedIn ? 'logout' : 'login'}
      </button>
    </>
  );
};

export default Header;
