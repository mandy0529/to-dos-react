const TodoList = ({title, children}) => {
  return (
    <>
      <h1>{title}</h1>
      <ul>{children}</ul>
    </>
  );
};

export default TodoList;
