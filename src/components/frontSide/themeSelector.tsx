import styles from "./themeSelector.module.scss"

export function ThemeSelector(){
    const selectTheme = (theme:string) => {
        document.body.className = theme
    }
    return (
        <div className={styles.themeSelector}>
            <button className={styles.redTheme} onClick={() => selectTheme("red")}></button>
            <button className={styles.blueTheme} onClick={() => selectTheme("blue")}></button>
            <button className={styles.greenTheme} onClick={() => selectTheme("green")}></button>
        </div>
    )
}