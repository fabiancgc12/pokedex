import styles from "./displayPokemon.module.scss"
import {usePokemonApi} from "../../context/PokeApi";
import missignoImg from "../../assets/MissingNo.png"
import loadingImg from "../../assets/loading.gif"
import React from "react";
import {ErrorMessage} from "./errorMessage";
import {MultiplePokemon} from "./multiplePokemon";

export function DisplayPokemon() {
    const {isMultiple} = usePokemonApi()
    return (
        <div className={styles.displayPokemon}>
            <div className={isMultiple ? styles.multiplePokemons : ""}>
                <Display/>
            </div>
        </div>
    )
}

function Display(){
    const {isLoading,hasError,isMultiple,multiple,pokemon} = usePokemonApi()
    if (hasError)
        return <ErrorMessage msg="El pokemon que busca no existe"/>
    if (isLoading)
        return <img src={loadingImg} className="pokemon-image"/>
    if (isMultiple)
        return <MultiplePokemon/>
    if (pokemon)
        { // @ts-ignore
            return <img src={pokemon.sprites.other["official-artwork"].front_default} className="pokemon-image"/>
        }
    return (
        <ErrorMessage msg="Ha ocurrido un error inesperado"/>
    )
}