import React from "react";
import {PokedexCase} from "./components/pokedex/pokedexCase";
import {PokeApi} from "./context/PokeApi";

function App() {
  return (
      <PokeApi>
        <PokedexCase/>
      </PokeApi>
  )
}

export default App
