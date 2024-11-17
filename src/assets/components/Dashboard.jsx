import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="header">
        <div className="header-icon">🗒️</div>
        <button className="logout-button">Logout</button>
      </header>
      <div className="body">
        <div className="actions">
          <button className="add-task-button">Add Task</button>
        </div>

        <div className="search-sort">
          <label htmlFor="search-input" className="search-label">
            Search:
          </label>
          <input
            type="text"
            id="search-input"
            placeholder="Search..."
            className="search-input"
          />
          <select className="sort-select">
            <option value="recent">Sort By: Recent</option>
            <option value="oldest">Sort By: Oldest</option>
          </select>
        </div>

        <div className="task-columns">
          <div className="task-column">
            <h3 className="column-title">TODO</h3>
            <div className="task-card">
              <h4>Task 3</h4>
              <p>Description 3</p>
              <p>Created at: 01/09/2024, 05:30:00</p>
              <div className="task-actions">
                <button className="delete-button">Delete</button>
                <button className="edit-button">Edit</button>
                <button className="view-button">View Details</button>
              </div>
            </div>
          </div>

          <div className="task-column">
            <h3 className="column-title">IN PROGRESS</h3>
            <div className="task-card">
              <h4>Task 4</h4>
              <p>Description 4</p>
              <p>Created at: 01/09/2024, 05:30:00</p>
              <div className="task-actions">
                <button className="delete-button">Delete</button>
                <button className="edit-button">Edit</button>
                <button className="view-button">View Details</button>
              </div>
            </div>
          </div>

          <div className="task-column">
            <h3 className="column-title">DONE</h3>
            <div className="task-card">
              <h4>Task 6</h4>
              <p>Description 6</p>
              <p>Created at: 01/09/2021, 05:30:00</p>
              <div className="task-actions">
                <button className="delete-button">Delete</button>
                <button className="edit-button">Edit</button>
                <button className="view-button">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
