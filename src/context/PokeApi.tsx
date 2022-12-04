import {createContext, ReactNode, useContext, useState} from "react";
import {PokemonSpeciesType} from "./PokemonSpeciesType";
import {PokemonType} from "./PokemonType";

export const PokemonContext = createContext({} as context)

type context = { searchPokemon: (value: string) => void; multiple: [id: number, url: string][]; isMultiple: boolean; pokemon: PokemonType | undefined; pokemonSpecies: PokemonSpeciesType | undefined; hasError: boolean; isLoading: boolean; }

type props = {
    children:ReactNode
}

export function generateMiniSpriteLink(id:number){
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${id}.png`;
    //cheking if id is fom gen 8, a lot of the mini sprite look better in gen 7
    if (id >= 810)
        url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${id}.png`;
    return url
}

export function PokeApi({children}:props) {
    const [isLoading,setIsLoading] = useState(true);
    const [multiple,setMultiples] = useState<[id:number,url:string][]>([])
    const [hasError,setHasError] = useState(false)
    const [pokemon,setPokemon] = useState<PokemonType | undefined>(undefined)
    const [pokemonSpecies,setPokemonSpecies] = useState<PokemonSpeciesType | undefined>(undefined)

    function clearDisplay(){
        setPokemonSpecies(undefined)
        setPokemon(undefined)
        setMultiples([]);
        setHasError(false)
        setIsLoading(true)
    }

    function displayError(){
        setPokemonSpecies(undefined)
        setPokemon(undefined)
        setMultiples([]);
        setHasError(true)
        setIsLoading(true)
    }

    async function searchPokemonByName(pokemonName:string){
        // dont search if its the same
        if (pokemonName == pokemon?.id.toString() || pokemonName == pokemon?.name) return
        try {
            clearDisplay()
            const pokemonFetch = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            const pokemonSpeciesFetch = fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
            const [pokemon,species] = await Promise.all([pokemonFetch,pokemonSpeciesFetch])
            // searchInput.value = pokemonName
            // showPokemon(pokemon,species)
            setPokemon(await pokemon.json() )
            setPokemonSpecies(await species.json())
            setHasError(false)
            setIsLoading(false)
            setMultiples([])
        } catch (e) {
            displayError()
        }
    }

    function searchMultiplePokemons(firstId:number,lastId:number){
        clearDisplay()
        if (firstId > lastId){
            displayError();
            return
        }
        const imagesUrls:[number,string][] = [];
        for (let i = firstId;i <= lastId;i++){
            const imageUrl = generateMiniSpriteLink(i);
            imagesUrls.push([i,imageUrl])
        };
        setPokemon(undefined)
        setPokemonSpecies(undefined)
        setIsLoading(false)
        setMultiples(imagesUrls)
        setHasError(false)
    }


    const searchPokemon = (value:string) => {
        if (value.match(/\d-\d/g)) {
            const [firstId, lastId] = value.split("-");
            searchMultiplePokemons(Number(firstId),Number(lastId))
        }
        else
            searchPokemonByName(value)
    }

    const isMultiple = multiple.length != 0
    return (
        <PokemonContext.Provider value={{
            searchPokemon,
            multiple,
            isMultiple,
            pokemon,
            pokemonSpecies,
            hasError,
            isLoading
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

export const usePokemonApi = () => useContext(PokemonContext)