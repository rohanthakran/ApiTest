import React from 'react'
import "./Card.css"
const Card = (props) => {
    return (
        <React.Fragment>
            <div className="note">
            <img src={props.url} alt="my"></img>
            <button className="button" onClick={() => {props.deleteItme(props.id)}}>Delete</button>
            <h1 >{props.title}</h1>
            </div>
              
        </React.Fragment>
    )
}

export default Card
