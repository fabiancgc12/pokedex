import styles from "./displayInfo.module.scss"
import {PokemonType} from "../../context/PokemonType";
import React from "react";
import {InfoLabel} from "./InfoLabel";

type props = {
    pokemon:PokemonType
}

export function PokemonAbilities({pokemon}:props){
    return (
        <div className={styles.centerAbilities}>
            <InfoLabel label={"Abilities"}/>
            <span className={styles.centerAbilities}>
                {pokemon.abilities.map((ab,i) => <span className={styles.ability} key={`pokemon-${pokemon.id}-${i}`}>{ab.ability.name}</span>)}
            </span>
        </div>
    )
}