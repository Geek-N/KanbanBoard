import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Kanban = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return window.location.href = '/login';

    axios.get('/api/kanban', {
      headers: { Authorization: 'Bearer ' + token }
    }).then(res => {
      setTasks(res.data);
    }).catch(() => {
      localStorage.removeItem('token');
      window.location.href = '/login';
    });
  }, []);

  const columns = ['todo', 'in-progress', 'done'];

  return (
    <div className="kanban">
      <h2>Kanban Board</h2>
      <div className="columns">
        {columns.map(col => (
          <div key={col} className="column">
            <h3>{col.toUpperCase()}</h3>
            {tasks.filter(t => t.status === col).map(task => (
              <div key={task.id} className="task">{task.title}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kanban;
