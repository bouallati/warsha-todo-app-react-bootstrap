import { Footer, Form, Stats, todoData, TodoList, useTodo } from "./components";

function App() {
  const { todos, addTodo, changeStatus, deleteTodo } = useTodo(todoData);

  return (
    <div className="app container my-4 ">
      <h1 className="mb-4 text-center text-white">Todo App</h1>
      <div className="container opacity-75 row g-4 align-items-center py-4 px-2 m-auto my-3 shadow  rounded-4 todo-section">
        <div className="col-12 col-lg-7 ">
          <Form onAdd={addTodo} />
        </div>
        <div className="col-12 col-lg-5  bg- m-auto">
          <Stats todos={todos} />
        </div>
      </div>
      <div className="mt-3 opacity-75 todo-section rounded-4 ">
        <TodoList
          todos={todos}
          onChangeStatus={changeStatus}
          onDelete={deleteTodo}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
