import React from 'react';
import classes from './Description.module.css';



function Description(props) {

  return (
    <div className={classes.container}>
      <h1>DESCRIPTION:</h1>
      <div className={classes.details}>
        <video key={props.exercise.id} width="320" height="325" controls autoPlay >
          <source src={props.exercise.video.url}  type="video/mp4" />
        </video>
        <div className={classes['col-right']}>
          <h2>{props.exercise.name}</h2>
          <h2>{props.exercise.description}</h2>
        </div>
      </div>
     </div>
  )
}

export default Description
