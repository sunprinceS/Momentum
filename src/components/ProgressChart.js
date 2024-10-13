// src/components/ProgressChart.js
import React, { useContext, useEffect } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ProgressChart = () => {
    const { workouts } = useContext(WorkoutContext);

    // Filter and format data for a specific exercise, e.g., "Squat"
    const exerciseData = workouts
        .filter(workout => workout.exercise === 'deadlift')
        .map(workout => ({
            date: workout.date.toLocaleDateString(),
            weight: workout.weight,
        }));

    // Debugging: Log the exercise data
    useEffect(() => {
        console.log('Exercise Data:', exerciseData);
    }, [exerciseData]);

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={exerciseData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default ProgressChart;