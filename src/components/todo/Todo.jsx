import { PRIORITY_CLASSES } from "./todoData";

export default function Todo({ todo, onChangeStatus, onDelete }) {
  return (
    <div className="container opacity-100 shadow todo-card mb-2 status rounded">
      <div
        className={` p-2 ${
          PRIORITY_CLASSES[todo.priority]
        } d-flex justify-content-between align-item-center`}
      >
        <span
          className={`px-3 badge rounded-pill ${
            PRIORITY_CLASSES[todo.priority]
          } text-bg-${PRIORITY_CLASSES[todo.priority]}`}
        >
          {todo.priority}
        </span>
        <small>{todo.createdAt} </small>
        {/* <p className="m-0 fs-6 fw-lighter"></p> */}
      </div>
      <hr />
      <div className="p-2">
        <h6 className="mb-0">{todo.title}</h6>
        {/* <p>Owner: {todo.owner}</p> */}
        {/* <p>Status: {todo.status}</p> */}
        {/* <p>Priority: {todo.priority}</p> */}
        {/* <p>Started At: {todo.startedAt || "-"}</p> */}
        {/* <p>Finished At: {todo.finishedAt || "-"}</p> */}

        <div className="d-flex justify-content-between align-items-center gap-2 ">
          <p className="mb-0 ">ID: {todo.id}</p>
          {todo.status !== "done" && (
            <button
              className="btn btn-sm btn-primary "
              onClick={() => onChangeStatus(todo.id)}
            >
              Next Status
            </button>
          )}
          {todo.status === "done" && (
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => onDelete(todo.id)}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
