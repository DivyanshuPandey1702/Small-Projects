import React from 'react'

function Card(props) {
    return (
        <div class="card" style={{borderColor: props.col}}>
            <h3 class="heading2">{props.heading}</h3>
            <p>{props.text}</p>
               <img class="img" src={props.img} />
        </div>
    )
}

export default Card