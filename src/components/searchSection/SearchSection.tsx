import styles from "./searchSection.module.scss"
import {ThemeSelector} from "./themeSelector";
import {TopSeparator} from "../topSeparator/TopSeparator";
import {SearchForm} from "../searhForm/searchForm";
import {DisplayPokemon} from "../displayPokemon/displayPokemon";
import {Controls} from "../controls/controls";

export function SearchSection(){
    return (
        <div className={styles.wrapper}>
            <div className={styles.topSection}>
                <div className={styles.nav}>
                    <div className={`${styles.blueCircle} circle`}>
                        <div className={`${styles.whiteCircle} circle`}></div>
                    </div>
                    <ThemeSelector/>
                </div>
                <TopSeparator className={"rotateY"}/>
            </div>
            <div className={styles.searchSection}>
                <DisplayPokemon/>
                <SearchForm/>
                <Controls/>
            </div>
        </div>
    )
}