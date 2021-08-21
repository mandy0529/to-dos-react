// import TranslateProvider from './TransContext';
// import translation from './Translation';
// import TransScreen from './TransScreen';
import React, {useReducer} from 'react';

const ADD = 'add';
const MINUS = 'Minus';

const reducer = (state, action) => {
  switch (action) {
    case ADD:
      return {count: state.count + 1};
    default:
      return;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  return (
    <>
      <h1>to dos</h1>
      <div>
        <form>
          <input placeholder="write a to do"></input>
        </form>
        <button onClick={() => dispatch(ADD)}>+</button>
      </div>
    </>
    // <TranslateProvider defaultLang="en" translation={translation}>
    //   <TransScreen />
    // </TranslateProvider>
  );
};

export default App;
