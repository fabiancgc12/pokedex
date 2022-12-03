import {usePokemonApi} from "../../context/PokeApi";
import styles from "./displayInfo.module.scss"
import React from "react";
import {LoadingInfo} from "../InfoSection/loadingInfo";

export function DisplayInfo(){
    const {isLoading,hasError} = usePokemonApi()
    if (isLoading || hasError)
        return (
            <div className={`${styles.wrapper} ${styles.loading}`}>
                <LoadingInfo/>
            </div>
        )
    return (
        <></>
    )
}