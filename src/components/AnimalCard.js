import React from 'react'

export default function AnimalCard({animal}) {
    const styleObj = {
        width:"100px", 
        height:"90px",
        marginTop:"150px",
        fontSize: "150px",
        color: "#e00",
        animation: `beat ${60/animal.heartrate}s infinite alternate`,
        transformOrigin: "center",
    }
    
    return (
    <section>
        <div className="animal-information">
            <h2>{animal.name}</h2>
            <img src={animal.image}/>
            <h3>{animal.heartrate} beats per minute</h3>
        </div>
        <div class="heart" style={styleObj}>
            &#x2665;
        </div>
    </section>
    )
}
