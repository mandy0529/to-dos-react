import uuid from 'uuid/v4';

export const ADD = 'add';
export const DEL = 'delete';
export const COM = 'compelete';
export const UNCOM = 'uncompelete';

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

    //   const target = state.todoArray.find(
    //     (item) => item.id === action.completeItem
    //   );
    //   console.log(target);
    //   const completedTarget = {...target, completed: true};
    //   console.log(completedTarget, '나올까?');
    //   const targetIndex = state.todoArray.indexOf(target);
    //   console.log(targetIndex, '타겟');
    //   return {
    //     ...state,
    //     todoArray: [...state.todoArray,{}],
    //   };

    default:
      return;
  }
};
export default addToDo;
