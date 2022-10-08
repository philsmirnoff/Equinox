import React, { useState } from 'react';
import classes from './Exercises.module.css';
import data from '../data/Equinox_FE_exercises.json';
import ListOfExercises from './ListOfExercises';

function Exercises(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const dataComponent = data.filter((exercise) => {
    if (searchTerm === '') {
      return exercise;
      } else if (
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return exercise;
      }
  }).map((exercise) => (
    <ListOfExercises
      key={exercise.id}
      exercise={exercise}
      onSelectItem={props.onSelectItem}
    />
      ))

  return (
    <>
    <div className={classes['left-pane']}>
    <div className={classes.search}>
    <input
        type="text"
        placeholder="Search exercises by name..."
        onChange={(event) => {
          setSearchTerm(event.target.value)
        }} />

    </div>
    <div className={classes.list}>
    {/* <h1>Exercises:</h1> */}
      {dataComponent}
    </div>
    </div>
    </>
  )
}

export default Exercises


