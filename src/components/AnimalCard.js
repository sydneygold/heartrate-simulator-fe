import React from 'react'

export default function AnimalCard({animal}) {
    return (
        <div>
            <h2>{animal.name}</h2>
            <img src={animal.image}/>
            <h3>{animal.heartrate} beats per minute</h3>
        </div>
    )
}
