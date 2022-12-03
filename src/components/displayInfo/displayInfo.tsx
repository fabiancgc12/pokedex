import {usePokemonApi} from "../../context/PokeApi";
import styles from "./displayInfo.module.scss"
import React from "react";
import {LoadingInfo} from "../InfoSection/loadingInfo";
import {PokemonSpeciesType} from "../../context/PokemonSpeciesType";
import {PokemonType} from "../../context/PokemonType";
import {PokemonAbilities} from "./pokemonAbilities";
import {PokemonTypes} from "./pokemonTypes";
import {InfoLabel} from "./InfoLabel";
import {PokemonStats} from "./pokemonStats";
import {PokemonMoves} from "./pokemonMoves";

function formatPokemonDescription(species:PokemonSpeciesType){
    //debo encontrar el primer texto que este en ingles
    let element = species.flavor_text_entries?.find(element => element.language.name === "en");
    //quito caracteres especiales
    const formated = element?.flavor_text.replace(/[^\w\dé /\n.-]/g, '');
    return formated;
}

function formatPokemonHeight(height:number){
    return height / 10
}

function formatPokemonWeight(weight:number){
    return weight / 10
}

export function DisplayInfo(){
    const {isLoading,hasError,pokemon,pokemonSpecies} = usePokemonApi()
    if (isLoading || hasError)
        return (
            <div className={`${styles.wrapper} ${styles.loading}`}>
                <LoadingInfo/>
            </div>
        )
    if (pokemon && pokemonSpecies){
        const description = formatPokemonDescription(pokemonSpecies)
        const height = formatPokemonHeight(pokemon.height)
        const weight = formatPokemonWeight(pokemon.weight)
        return (
            <div className={styles.wrapper}>
                <h1 className={styles.pokemonName}>#{pokemon.id} - {pokemon.name}</h1>
                <p className={styles.pokemonEntry}>{description}</p>
                <div className={styles.generalInfo}>
                    <div>
                        <InfoLabel label={"Height"}/><span>{height}m</span>
                    </div>
                    <div>
                        <InfoLabel label={"weight"}/><span>{weight}Kg</span>
                    </div>
                    <PokemonAbilities pokemon={pokemon}/>
                    <PokemonTypes pokemon={pokemon}/>
                </div>
                <PokemonStats pokemon={pokemon}/>
                <PokemonMoves pokemon={pokemon}/>
            </div>
        )
    }
    else
        return (
            <div className={`${styles.wrapper} ${styles.loading}`}>
                <LoadingInfo/>
            </div>
        )
}

function getPokemonAbilities(pokemon:PokemonType){
    const abilities = pokemon.abilities.map(a => {
        const span = document.createElement("span")
        span.innerHTML = a.ability.name;
        span.className = "ability"
        return span
    })
    return abilities
}