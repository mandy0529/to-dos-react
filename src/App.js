// import TranslateProvider from './TransContext';
// import translation from './Translation';
// import TransScreen from './TransScreen';
import React, {useReducer, useState} from 'react';

const ADD = 'add';

const initialState = {
  toDos: [],
};

const addToDo = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        toDos: [[...state.toDos], {text: action.payload}],
      };
    default:
      return;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(addToDo, initialState);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({type: ADD, payload: newTodo});
  };
  const handleChange = (event) => {
    const {value} = event.target;
    console.log(value);
    setNewTodo(value);
  };

  return (
    <>
      <h1>add to do</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={newTodo}
            placeholder="write a to do"
          ></input>
          <button onClick={() => dispatch(ADD)}>+</button>
        </form>
      </div>
      <ul>
        <h2>To Dos</h2>
        {state.toDos.map((toDo, index) => (
          <li key={index}>{toDo.text}</li>
        ))}
      </ul>
    </>
    // <TranslateProvider defaultLang="en" translation={translation}>
    //   <TransScreen />
    // </TranslateProvider>
  );
};

export default App;
