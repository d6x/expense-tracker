import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
          <li className="register-button">
            <button>Register</button>
          </li>
        </ul>
      </nav>
      <h1>Welcome to the Productivity App!</h1>
      {/* Add the rest of your home page content here */}
    </div>
  );
}

export default HomePage;
