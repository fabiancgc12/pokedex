import {usePokemonApi} from "../../context/PokeApi";

export function MultiplePokemon(){
    const {multiple:pokemons,searchPokemon} = usePokemonApi()
    return (
        <>
            {pokemons.map(([id,url],index) => {
                return <img
                    key={`pokemon-img-${id}`}
                    className={"pokemon-image"}
                    src={url}
                    onClick={() => searchPokemon(id.toString())}
                />
            })}
        </>
    )
}