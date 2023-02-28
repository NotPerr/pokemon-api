
import { useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {

  // ---------------- set search value ---------------- 
  const [search,setSearch] = useState('')
  const [hasSearch,setHasSearch] = useState(null)

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
    console.log('search:',search)
  }

  // ---------------- set pokemon ---------------- 
  const [pokemon,setPokemon] = useState({});

  // ---------------- fetch api data ---------------- 
  
  
  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${search}/`)
      .then(
        (response) => {
          console.log(response)
          setPokemon(response.data)
          setHasSearch(true)
        }
      )
  }

  const Display = () => {
    return (
      <div className='card'>
        <div className='pic'>
          <img src={`https://img.pokemondb.net/sprites/scarlet-violet/normal/${pokemon.name}.png`} alt={pokemon.name}/>
        </div>
        <h3>{pokemon.name}</h3>
        <div className='content'>
          
          <div className='info'>
            <p className='title'>type: </p>
            <p>{pokemon.types[0].type.name}</p>
          </div>
          <div className='info'>
            <p className='title'>hp: </p>
            <p>{pokemon.stats[0].base_stat}</p>
          </div>
          <div className='info'>
            <p className='title'>attack: </p>
            <p>{pokemon.stats[1].base_stat}</p>
          </div>
          <div className='info'>
            <p className='title'>defense: </p>
            <p>{pokemon.stats[2].base_stat}</p>
          </div>
          <div className='info'>
            <p className='title'>speed: </p>
            <p>{pokemon.stats[5].base_stat}</p>
          </div>
        </div>
        
      </div>
    )
  }
  

  return (
    <div className='container'>
      
      <div className='input'>
        <h1>search pokemon: </h1>
        <div className='form'>
          <input value={search} onChange={handleSearchChange}/>
          <button className='btn' onClick={searchPokemon}>search</button>
        </div>
      </div>
      
      
      {hasSearch ? 
        <Display />
        : <>search a pokemon</>
        }
      
    </div>
  );
}

export default App;
