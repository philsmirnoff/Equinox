import React from 'react';
import classes from './Description.module.css';

function Description(props) {
  return (
    <div className={classes['right-pane']}>
      <h1>Details:</h1>
      <h1>{props.exercise.name}</h1>
      <h2>{props.exercise.description}</h2>
      <video src={props.exercise.video} />
    </div>
  )
}

export default Description
