// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import WorkoutLog from './components/WorkoutLog';
import ExerciseLibrary from './components/ExerciseLibrary';
import Progress from './components/Progress';
import Goals from './components/Goals';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/workout-log">Workout Log</Link></li>
            <li><Link to="/exercise-library">Exercise Library</Link></li>
            <li><Link to="/progress">Progress</Link></li>
            <li><Link to="/goals">Goals</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workout-log" element={<WorkoutLog />} />
          <Route path="/exercise-library" element={<ExerciseLibrary />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;