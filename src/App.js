import React, {useReducer, useState} from 'react';
import addToDo, {ADD, COM, DEL, initialState, UNCOM} from './reducer';

const App = () => {
  const [state, dispatch] = useReducer(addToDo, initialState);
  const [newTodoArray, setNewTodoArray] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({type: ADD, actionSubmit: newTodoArray, completed: false});
    setNewTodoArray('');
  };
  const handleChange = (event) => {
    const {value} = event.target;
    setNewTodoArray(value);
  };

  const handleDispatch = (toDo) => {
    if (toDo.completed) {
      dispatch({
        type: UNCOM,
        completeItem: toDo.id,
      });
    } else {
      dispatch({
        type: COM,
        completeItem: toDo.id,
      });
    }
  };
  console.log(state.todoArray, 'state');
  return (
    <>
      <h1>add to do</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={newTodoArray}
            placeholder="write a to do"
            type="text"
          ></input>
          <button>+</button>
        </form>
      </div>
      <ul>
        {state.todoArray.length !== 0 && (
          <>
            <h2>To Dos</h2>
            {state.todoArray.map(
              (toDo, index) =>
                toDo.text && (
                  <li
                    style={{
                      textDecoration: toDo.completed ? 'line-through' : '',
                    }}
                    key={toDo.id}
                  >
                    <span> {toDo.text} </span>
                    <button
                      onClick={() => dispatch({type: DEL, deleteItem: toDo.id})}
                    >
                      −
                    </button>
                    <button onClick={() => handleDispatch(toDo)}>✓</button>
                  </li>
                )
            )}
          </>
        )}
      </ul>
    </>
  );
};

export default App;
