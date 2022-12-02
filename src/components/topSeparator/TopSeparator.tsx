import styles from "./topSeparator.module.scss";

type props = {
    className?:string
}

export function TopSeparator({className}:props) {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <svg>
                <path className={styles.svgFiller} d="M 0 45
                           V 45
                           H 190
                           A 50 65, 0, 0, 1, 160 30
                           A 50 65, 0, 0, 0, 130 15
                           H -200
                           V 0
                           Z"></path>
                <path className={styles.svgLine} d="M 0 0
                           H 140
                           A 50 65, 0, 0, 1, 170 15
                           A 50 65, 0, 0, 0, 200 30
                           H 700
                           V 45
                           H 190
                           A 50 65, 0, 0, 1, 160 30
                           A 50 65, 0, 0, 0, 130 15
                           H -200
                           V 0
                           Z"></path>
            </svg>
        </div>
    )
}