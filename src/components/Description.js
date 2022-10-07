import React from 'react';


function Description(props) {
  return (
    <div>
      <h1>Details:</h1>
      <h1>{props.exercise.name}</h1>
      <h2>{props.exercise.description}</h2>
      <h2>Watch this exercise video from s3.amazon.aws</h2>
      <video width="320" height="325" controls autoPlay>
        <source src={props.exercise.video.url} key={props.exercise.id} type="video/mp4" />
      </video>
    </div>
  )
}

export default Description
