import React, { Component } from 'react'
import AnimalCard from './AnimalCard'

const baseUrl = 'http://localhost:3000/animals'

export default class SearchContainer extends Component {

    state = {
        animals: [],
        currentAnimal: []
    }

    componentDidMount(){
        fetch(baseUrl)
            .then(response => response.json())
            .then(results => this.setState({animals: results}))
    }

    listOptions = () => {
        let {animals} = this.state
        return animals.map(animal => {
            return <option 
                value={animal.id} 
                key={animal.id}
                name={animal.name}
            > {animal.name}
            </option>
        })
    }

    handleChange = (event) => {
        event.preventDefault()
        let newAnimal = this.state.animals.find(animal => {
            console.log(typeof animal.id)
            return animal.id === +event.target.value
        })
        console.log(typeof event.target.value)
        this.setState({currentAnimal: newAnimal})
    }


    render() {
        return (
            <div>
                <h1>What Animal Heart Rate Are You Curious About?</h1>
                <form className="form">
                    <label>Animal Name:</label>
                    <select onChange={this.handleChange}>
                        {this.listOptions()}
                    </select>
                </form>
            </div>
        )
    }
}
