import styles from "./pokedex.module.scss"
import {SearchSection} from "@/components/searchSection/SearchSection";
import {InfoSection} from "@/components/InfoSection/infoSection";
import React from "react";

export function PokedexCase(){
    return (
        <div className={styles.pokedex} >
            <SearchSection />
            <InfoSection />
        </div>
    )
}