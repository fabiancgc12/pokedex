import styles from "./displayPokemon.module.scss"
import {usePokemonApi} from "../../context/PokeApi";
import missignoImg from "../../assets/MissingNo.png"
import loadingImg from "../../assets/loading.gif"

export function DisplayPokemon() {
    return (
        <div className={styles.displayPokemon}>
            <div>
                <Display/>
            </div>
        </div>
    )
}

function Display(){
    const {isLoading,hasError,isMultiple,pokemon} = usePokemonApi()
    if (hasError)
        return (
            <div className={styles.errorMessage}>
                <h2>ERROR</h2>
                <p>El pokemon que busca no existe</p>
                <div className={styles.missigno}>
                    <img src={missignoImg}/>
                </div>
            </div>
        )
    if (isLoading)
        return <img src={loadingImg} className="pokemon-image"/>
    console.log(pokemon)
    if (pokemon)
        { // @ts-ignore
            return <img src={pokemon.sprites.other["official-artwork"].front_default} className="pokemon-image"/>
        }

    return (
        <div className={styles.errorMessage}>
            <h2>ERROR</h2>
            <p>El pokemon que busca no existe</p>
            <div className={styles.missigno}>
                <img src={missignoImg}/>
            </div>
        </div>
    )
}