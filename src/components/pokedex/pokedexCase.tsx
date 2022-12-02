import styles from "./pokedex.module.scss"
import {FrontSide} from "../frontSide/FrontSide";

export function PokedexCase(){
    return (
        <div className={styles.pokedex}>
            <FrontSide/>
            <div className="pokedex-info-wrapper">back</div>
        </div>
    )
}