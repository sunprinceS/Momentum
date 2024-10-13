// src/context/WorkoutContext.js
import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
    const [workouts, setWorkouts] = useState([]);

    const addWorkout = (workout) => {
        setWorkouts([...workouts, workout]);
    };

    return (
        <WorkoutContext.Provider value={{ workouts, addWorkout }}>
            {children}
        </WorkoutContext.Provider>
    );
};