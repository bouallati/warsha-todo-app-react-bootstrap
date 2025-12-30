import Todo from "./Todo";
import { PRIORITIES, STATUSES } from "./todoData";

export default function TodoList({ todos, onChangeStatus, onDelete }) {
  const comparePriority = (a, b) => {
    return PRIORITIES.indexOf(b.priority) - PRIORITIES.indexOf(a.priority);
  };

  return (
    <div className="row m-auto opacity-100 ">
      {STATUSES.map((status) => {
        const todosByStatus = todos
          .filter((todo) => todo.status === status)
          .sort(comparePriority);

        return (
          <div
            key={status}
            className="col-12 col-md-6 col-xl-4 py-2 rounded-4 text-white shadow "
          >
            <h4 className="text-center text-capitalize text-md-start">
              {status} ({todosByStatus.length})
            </h4>
            {todosByStatus.length > 0 ? (
              todosByStatus.map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  onChangeStatus={onChangeStatus}
                  onDelete={onDelete}
                />
              ))
            ) : (
              <p className="text-center text-md-start text-white">
                This section is empty
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
