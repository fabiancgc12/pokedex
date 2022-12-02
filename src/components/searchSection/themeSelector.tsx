import styles from "./themeSelector.module.scss"
import {useEffect} from "react";

export function ThemeSelector(){
    const selectTheme = (theme:string) => {
        document.body.className = theme
        localStorage.setItem("theme",theme)
    }

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme)
            document.body.className = theme
    },[])

    return (
        <div className={styles.themeSelector}>
            <button className={styles.redTheme} onClick={() => selectTheme("red")}></button>
            <button className={styles.blueTheme} onClick={() => selectTheme("blue")}></button>
            <button className={styles.greenTheme} onClick={() => selectTheme("green")}></button>
        </div>
    )
}