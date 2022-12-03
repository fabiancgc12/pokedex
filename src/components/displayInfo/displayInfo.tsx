import {usePokemonApi} from "../../context/PokeApi";
import styles from "./displayInfo.module.scss"
import React from "react";
import {LoadingInfo} from "../InfoSection/loadingInfo";
import {PokemonSpeciesType} from "../../context/PokemonSpeciesType";
import {PokemonType} from "../../context/PokemonType";
import {PokemonAbilities} from "./pokemonAbilities";
import {PokemonTypes} from "./pokemonTypes";
import {InfoLabel} from "./InfoLabel";

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
                <div className="pokemon-stats">
                    <div className="hp-stat stat">
                        <span className={styles.label}>hp</span>
                        <progress max="255" value="" id="hp-progress"></progress>
                        <div className="stat-info" id="hp-info"></div>
                    </div>
                    <div className="attack-stat stat">
                        <span className={styles.label}>attack</span>
                        <progress max="190" value="" id="attack-progress"></progress>
                        <div className="stat-info" id="attack-info"></div>
                    </div>
                    <div className="special-attack-stat stat">
                        <span className={styles.label}>sp. attack</span>
                        <progress max="180" value="" id="sp-attack-progress"></progress>
                        <div className="stat-info" id="sp-attack-info"></div>
                    </div>
                    <div className="defence-stat stat">
                        <span className={styles.label}>defense</span>
                        <progress max="230" value="" id="defense-progress"></progress>
                        <div className="stat-info" id="defense-info"></div>
                    </div>
                    <div className="special-defence-stat stat">
                        <span className={styles.label}>sp. defense</span>
                        <progress max="230" value="" id="sp-defense-progress"></progress>
                        <div className="stat-info " id="sp-defense-info"></div>
                    </div>
                    <div className="speed-stat stat ">
                        <span className={styles.label}>speed</span>
                        <progress max="200" value="" id="speed-progress"></progress>
                        <div className="stat-info" id="speed-info"></div>
                    </div>
                </div>
                <div className="pokemon-moves">
                    <h2 className={styles.label}>Moves</h2>
                    <div className="move-list" id="move-list"></div>
                </div>
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