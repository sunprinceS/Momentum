// src/components/WorkoutLog.js
import React, { useState, useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';

function WorkoutLog() {
    const { workouts, addWorkout } = useContext(WorkoutContext);
    const [exercise, setExercise] = useState('');
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');
    const [sets, setSets] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newWorkout = { exercise, weight, reps, sets, date: new Date() };
        addWorkout(newWorkout);
        setExercise('');
        setWeight('');
        setReps('');
        setSets('');
    };

    return (
        <div>
            <h1>Workout Log / Tracking Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Exercise:</label>
                    <input
                        type="text"
                        value={exercise}
                        onChange={(e) => setExercise(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Weight:</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Reps:</label>
                    <input
                        type="number"
                        value={reps}
                        onChange={(e) => setReps(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Sets:</label>
                    <input
                        type="number"
                        value={sets}
                        onChange={(e) => setSets(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Log Workout</button>
            </form>
            <h2>Logged Workouts</h2>
            <ul>
                {workouts.map((workout, index) => (
                    <li key={index}>
                        {workout.exercise} - {workout.weight} kg - {workout.reps} reps - {workout.sets} sets
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WorkoutLog;