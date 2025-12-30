import { STATUSES } from "./todoData";

export default function Stats({ todos }) {
  const allCount = todos.length;

  return (
    <div className="my-3 text-white ">
      <div className="row ">
        {STATUSES.map((status) => {
          const count = todos.filter((todo) => todo.status === status).length;
          return (
            <div key={status} className="col-12 col-md-6 ">
              <div
                className={`p-2 p-sm-1 my-1 p-md-2 rounded-3 d-flex d-sm-block text-sm-center status `}
              >
                <div className="col fs-5 mb-md-3 d-flex justify-content-sm-center align-items-center">
                  {status}:
                </div>
                <div className="col  px-3 px-sm-0 fw-bold d-flex justify-content-end justify-content-sm-center align-items-center">
                  {count}
                </div>
              </div>
            </div>
          );
        })}

        {/* كل المهام */}
        <div className="col-12  col-md-6">
          <div className="p-2 p-sm-1 my-1 p-md-2 rounded-3 d-flex d-sm-block text-sm-center status">
            <div className="col fs-5  mb-md-3 d-flex d-flex justify-content-sm-center align-items-center">
              all:
            </div>
            <div className="col px-3 px-sm-0 fw-bold d-flex justify-content-end justify-content-sm-center align-items-center">
              {allCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
