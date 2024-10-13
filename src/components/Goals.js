// src/components/Goals.js
import React, { useState } from 'react';

function Goals() {
    const [goals, setGoals] = useState([]);
    const [description, setDescription] = useState('');
    const [exercise, setExercise] = useState('');
    const [targetWeight, setTargetWeight] = useState('');
    const [targetDate, setTargetDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newGoal = { description, exercise, targetWeight, targetDate };
        setGoals([...goals, newGoal]);
        setDescription('');
        setExercise('');
        setTargetWeight('');
        setTargetDate('');
    };

    return (
        <div>
            <h1>Goals & Achievements</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
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
                    <label>Target Weight:</label>
                    <input
                        type="number"
                        value={targetWeight}
                        onChange={(e) => setTargetWeight(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Target Date:</label>
                    <input
                        type="date"
                        value={targetDate}
                        onChange={(e) => setTargetDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Set Goal</button>
            </form>
            <h2>Set Goals</h2>
            <ul>
                {goals.map((goal, index) => (
                    <li key={index}>
                        {goal.description} - {goal.exercise} - {goal.targetWeight} kg by {goal.targetDate}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Goals;