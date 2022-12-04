import styles from "./displayPokemon.module.scss";
import missignoImg from "../../assets/MissingNo.png";

type props = {
    msg:string
}

export function ErrorMessage({msg}:props){
    return (
        <div className={styles.errorMessage}>
            <h2>ERROR</h2>
            <p>{msg}</p>
            <div className={styles.missigno}>
                <img src={missignoImg}/>
            </div>
        </div>
    )
}