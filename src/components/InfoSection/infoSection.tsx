import styles from "./infoSection.module.scss"
import {TopSeparator} from "../topSeparator/TopSeparator";
import pokedexStyles from "../pokedex/pokedex.module.scss"
import {RefObject} from "react";

export function InfoSection(){

    const clickOnBack = () => {
        document
            .querySelector(`.${pokedexStyles.pokedex}`)?.classList
            .remove(`${pokedexStyles.show}`)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.front}>
                <TopSeparator className={styles.separator}/>
                <button className={styles.backButton} onClick={clickOnBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                        <path
                            d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                    </svg>
                    Back
                </button>
            </div>

        </div>
    )
}