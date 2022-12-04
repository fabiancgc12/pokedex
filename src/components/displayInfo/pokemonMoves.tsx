import React from "react";
import styles from "./pokemonMoves.module.scss";
import {PokemonType} from "@/context/PokemonType";

type props = {
    pokemon:PokemonType
}

export function PokemonMoves({pokemon}:props){
    return (
        <div>
            <h2 className={styles.title}>Moves</h2>
            <div className={styles.moves}>
                {pokemon.moves.map((m,i) => {
                    return <div className="move" key={`pokemon-${pokemon.id}-move-${i}`}>{m.move.name}</div>
                })}
            </div>
        </div>
    )
}