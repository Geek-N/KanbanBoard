import React from 'react';
import { Link } from 'react-router-dom';

const App = () => (
  <div className="home">
    <h1>Krazy Kanban</h1>
    <p>Track your workflow in style</p>
    <Link to="/login">Login</Link>
  </div>
);

export default App;
