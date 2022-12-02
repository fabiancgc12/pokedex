import styles from "./frontside.module.scss"
import {ThemeSelector} from "./themeSelector";

export function FrontSide(){
    return (
        <div className={styles.wrapper}>
            <div className={styles.topSection}>
                <div className={styles.nav}>
                    <div className={`${styles.blueCircle} circle`}>
                        <div className={`${styles.whiteCircle} circle`}></div>
                    </div>
                    <ThemeSelector/>
                </div>
            </div>
        </div>
    )
}