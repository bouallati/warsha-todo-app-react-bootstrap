import { useState } from "react";
import { PRIORITIES } from "./todoData";

export default function Form({ onAdd }) {
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !owner.trim()) return;

    onAdd({
      id: Date.now(),
      title,
      owner,
      status: "pending",
      priority,
      createdAt: new Date().toISOString().slice(0, 16),
    });
    setTitle("");
    setOwner("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-3 text-white rounded shadow-sm opacity-100"
    >
      <div className="row g-3">
        {/* العناوين في سطر واحد في الشاشات الكبيرة */}
        <div className="col-12 col-md-6">
          <input
            type="text"
            placeholder="Task title..."
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col-12 col-md-6">
          <input
            type="text"
            placeholder="Assign to (Owner)..."
            className="form-control"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        {/* الخيارات والزر */}
        <div className="col-12 col-md-8">
          <select
            // style={{all:"unset"}}
            className="form-select text-capitalize"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            {PRIORITIES.map((p) => (
              <option
                className="status"
                style={{ border: "#0d6efd" }}
                key={p}
                value={p}
              >
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 col-md-4">
          <button type="submit" className="btn btn-primary w-100">
            <i className="bi bi-plus-lg"></i> Add Task
          </button>
        </div>
      </div>
    </form>
  );
}
