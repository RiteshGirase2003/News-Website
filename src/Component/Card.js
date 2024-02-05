import React from 'react';
import style from './Card.module.css';
function Card({postData}) {
  return (
    <div className={style.container}>
        <h1>{postData.name}</h1>
        <p>{postData.description} <a href={postData.url} target='blank'><h3>Read More</h3></a></p>
        
    </div>
  )
}

export default Card