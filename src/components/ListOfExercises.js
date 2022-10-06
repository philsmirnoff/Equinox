import React from 'react';
import classes from './Exercises.module.css';

function ListOfExercises(props) {
  const handleClick = () => {

    props.onSelectItem(props.exercise.id)
  }

  return (
    <div className={classes.exercise} onClick={handleClick}>
      <h2>{props.exercise.name}</h2>
    </div>
  )
}

export default ListOfExercises
