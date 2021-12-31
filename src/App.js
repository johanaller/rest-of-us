import './App.css';
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import LikeArea from './components/LikeArea'
import TimeArea from './components/TimeArea'


function App() {
  const [pets, setPets] = useState([])
  
  // only run the first time the component is rendered
  useEffect(() => {
    if(localStorage.getItem('examplePetData')) {
      setPets(JSON.parse(localStorage.getItem('examplePetData')))
    }
  }, [])


  // run every time the pet array changes (pet is added or deleted)
  useEffect(() => {
    localStorage.setItem("examplePetData", JSON.stringify(pets))
  }, [pets])


  
  const AddPetForm = () => {
    const [name, setName] = useState()
    const [species, setSpecies] = useState()
    const [age, setAge] = useState()
    
    const onSubmitHandler = (event) => {
      event.preventDefault();
      setPets(pets.concat({name, species, age, id: Date.now()}))
    }


    return (
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <legend>Add New Pet</legend>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Name"/>
          <input value={species} onChange={e => setSpecies(e.target.value)} placeholder="species" />
          <input value={age} onChange={e => setAge(e.target.value)} placeholder="age in years" />
          <button>Add Pet</button>
        </fieldset>
      </form>
    )
  }

    const Pet = ({ name, species, age, id, setPets }) => {
      const deleteHandler = () => {
      setPets(prev => prev.filter(pet => pet.id !== id))
      }

    return (
      <li>
        {name} is {species} and is {age} years old
        <button onClick={deleteHandler}>Delete</button>
      </li>
    );
  };

  return (
    <div>
      <Header />
      <LikeArea />
      <TimeArea />
      <AddPetForm />
      <ul>
        {pets.map((pet) => (
          <Pet
            setPets={setPets}
            id={pet.id}
            name={pet.name}
            species={pet.species}
            age={pet.age}
            key={pet.id}
          />
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default App;
