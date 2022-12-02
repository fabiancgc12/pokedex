import styles from "./pokedex.module.scss"
import {SearchSection} from "../searchSection/SearchSection";

export function PokedexCase(){
    return (
        <div className={styles.pokedex}>
            <SearchSection/>
            <div className="pokedex-info-wrapper">back</div>
        </div>
    )
}