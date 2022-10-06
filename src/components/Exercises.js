import React from 'react';
import classes from './Exercises.module.css';
import data from '../data/Equinox_FE_exercises.json';

function Exercises() {
  return (
    <>
    <div className={classes['left-pane']}>
    <div>
    <h1>Search Bar</h1>
    </div>
    <div>
    <h1>Exercises</h1>
      {data.map((exercise) => (
        <div className={classes.exercise} key={exercise.id}>
          <h2>{exercise.name}</h2>
         </div>
      ))}
    </div>
    </div>
    </>
  )
}

export default Exercises
