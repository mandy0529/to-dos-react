import {useDispatch} from '../TodosContext';
import {COM, DEL, UNCOM} from './action';

const TodoArray = ({text, id, completed}) => {
  const dispatch = useDispatch();
  return (
    <li
      style={{
        textDecoration: completed ? 'line-through' : '',
      }}
      key={id}
    >
      <span> {text} </span>
      <button onClick={() => dispatch({type: DEL, deleteItem: id})}>−</button>
      <button
        onClick={() =>
          dispatch({type: completed ? UNCOM : COM, completeItem: id})
        }
      >
        ✓
      </button>
    </li>
  );
};

export default TodoArray;
