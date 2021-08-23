import uuid from 'uuid/v4';
import {ADD, COM, DEL, UNCOM} from './components/action';

export const initialState = {
  todoArray: [],
  completed: false,
};

const addToDo = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todoArray: [
          ...state.todoArray,
          {text: action.actionSubmit, id: uuid(), completed: false},
        ],
      };
    case DEL:
      return {
        ...state,
        todoArray: state.todoArray.filter(
          (item) => item.id !== action.deleteItem
        ),
      };
    case COM:
      const newList = state.todoArray.map((item) => {
        return item.id === action.completeItem
          ? {...item, completed: true}
          : item;
      });
      console.log(newList);
      return {
        ...state,
        todoArray: newList,
      };
    case UNCOM:
      const cancleList = state.todoArray.map((item) => {
        return item.id === action.completeItem
          ? {...item, completed: false}
          : item;
      });
      console.log(cancleList, 'canclelist');
      return {
        ...state,
        todoArray: cancleList,
      };

    default:
      return;
  }
};
export default addToDo;
