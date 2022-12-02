import styles from "./pokedex.module.scss"

export function PokedexCase(){
    return (
        <div className={styles.pokedex}>
            <div className="pokedex-search-wrapper">front</div>
            <div className="pokedex-info-wrapper">back</div>
        </div>
    )
}