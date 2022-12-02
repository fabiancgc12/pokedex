import {createContext, ReactNode, useContext, useState} from "react";
import {PokemonSpeciesType} from "./PokemonSpeciesType";
import {PokemonType} from "./PokemonType";

export const PokemonContext = createContext({} as context)

type context = { searchPokemon: (value: string) => void; isMultiple: boolean; pokemon?: PokemonType; pokemonSpecies?: PokemonSpeciesType; hasError: boolean; isLoading: boolean; }

type props = {
    children:ReactNode
}

function generateMiniSpriteLink(id:number){
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
        setMultiples([]);
        setHasError(false)
        setIsLoading(true)
    }

    function displayError(){
        setMultiples([]);
        setHasError(true)
        setIsLoading(true)
    }

    async function searchPokemonByName(pokemonName:string){
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
        } catch (e) {
            console.log(e)
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
        // imagesUrls.forEach(([id,url],index) => {
        //     if (index == 0){
        //         pokemonImg.src = url
        //         pokemonImg.onclick = () => {
        //             searchPokemonByName(id)
        //         }
        //     } else {
        //         const img = document.createElement("img")
        //         img.className = "pokemon-image";
        //         img.src = url;
        //         img.onclick = () => {
        //             searchPokemonByName(id)
        //         }
        //         displayPokemonInner.appendChild(img)
        //     }
        // })
        setMultiples(imagesUrls)
        setHasError(false)
    }


    const searchPokemon = (value:string) => {
        console.log("aqui")
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