import styles from "./pokedex.module.scss"
import {SearchSection} from "../searchSection/SearchSection";
import {InfoSection} from "../InfoSection/infoSection";
import React, {MutableRefObject, useRef} from "react";

export function PokedexCase(){
    return (
        <div className={styles.pokedex} >
            <SearchSection />
            <InfoSection />
        </div>
    )
}