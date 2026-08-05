import React from 'react'

const card = (props) => {
  console.log(props);
  return (
    <div className="card">
          <img src={props.img}></img>
          <h1>{props.user},{props.age}</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, vel.</p>
          <button>View Profile</button>
    </div>
         

         
  )
}

export default card
