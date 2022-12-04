import styles from "./pokemonTypes.module.scss"
import {PokemonType} from "@/context/PokemonType";
import React from "react";
import {InfoLabel} from "./InfoLabel";

type props = {
    pokemon:PokemonType
}

export function PokemonTypes({pokemon}:props){
    return (
        <div className={styles.typesSection}>
            <InfoLabel label={"types"}/>
            <span className={styles.list}>
                {pokemon.types.map((t,i) => <span
                    className={`${styles.type} ${styles[`${t.type.name}Type`]}`}
                    key={`pokemon-${pokemon.id}-type-${t.type.name}`}
                >{t.type.name}</span>)}
            </span>
        </div>
    )
}