import React from 'react'
import Description from './Description';
import classes from './InfoOfData.module.css';

function InfoOfData(props) {
  return (
    <div className={classes['right-pane']}>
      <Description exercise={props.exercise} />
    </div>
  )
}

export default InfoOfData
