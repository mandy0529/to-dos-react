import AddTodo from './AddTodo';
import TodoList from './TodoList';
import {useState} from '../TodosContext';
import TodoArray from './TodoArray';

const App = () => {
  const {todoArray} = useState();

  return (
    <>
      <AddTodo />
      <TodoList title={todoArray.length !== 0 ? 'to dos' : ''}>
        {todoArray.map(
          (toDo) =>
            toDo.text && (
              <TodoArray
                key={toDo.id}
                id={toDo.id}
                text={toDo.text}
                completed={toDo.completed}
              />
            )
        )}
      </TodoList>
    </>
  );
};

export default App;
