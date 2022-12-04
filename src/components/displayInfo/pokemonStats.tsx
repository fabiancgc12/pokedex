import styles from "./pokemonStats.module.scss"
import {PokemonType} from "@/context/PokemonType";
import React from "react";
import {InfoLabel} from "./InfoLabel";

type props = {
    pokemon:PokemonType
}

export function PokemonStats({pokemon}:props){
    return (
        <div className={styles.statsSection}>
            {pokemon.stats.map(st => {
                let name = st.stat.name;
                if (name.includes("-")){
                    const parts = name.split("-")
                    name = `sp. ${parts[1]}`
                }
                return (
                    <div className={`${styles.stat}`} key={`pokemon-${pokemon.id}-stat-${name}`}>
                        <InfoLabel label={name}/>
                        <progress max="190" value={st.base_stat}/>
                        <div className="stat-info" id="attack-info">{st.base_stat}</div>
                    </div>
                )
            })}
        </div>
    )
}