import React, { useState } from 'react'

function Card(props) {
    return (
        <div className="card my-3" style={{ height: "26rem" }}>
            <img src={props.image} className="card-img-top" style={{ height: "15rem" }} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}...</h5>
                <p className="card-text">{props.des}...</p>
                <a href={props.url} className="btn btn-primary" >Read More</a>
            </div>
        </div>
    )
}
export default Card