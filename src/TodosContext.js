import {createContext, useContext, useReducer} from 'react';
import addToDo, {initialState} from './reducer';

const TodosContext = createContext();

const TodoProvider = ({children}) => {
  const [state, dispatch] = useReducer(addToDo, initialState);
  return (
    <TodosContext.Provider value={{state, dispatch}}>
      {children}
    </TodosContext.Provider>
  );
};
export const useDispatch = () => {
  const {dispatch} = useContext(TodosContext);
  return dispatch;
};
export const useState = () => {
  const {state} = useContext(TodosContext);
  return state;
};
export default TodoProvider;
