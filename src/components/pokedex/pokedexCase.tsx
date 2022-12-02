import styles from "./pokedex.module.scss"
import {FrontSide} from "./FrontSide";

export function PokedexCase(){
    return (
        <div className={styles.pokedex}>
            <FrontSide/>
            <div className="pokedex-info-wrapper">back</div>
        </div>
    )
}