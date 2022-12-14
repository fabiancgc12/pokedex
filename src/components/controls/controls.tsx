import styles from "./controls.module.scss"
import buttonsControllers from "@/assets/buttons controller.png"
import {generateMiniSpriteLink, usePokemonApi} from "@/context/PokeApi";

export function Controls(){
    return (
        <div className={styles.controls}>
            <div className={styles.buttons}>
                <img src={buttonsControllers} alt=""/>
            </div>
            <div className={styles.controlDirections}>
                <div className={styles.toparrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-caret-up-square-fill" viewBox="0 0 16 16">
                        <path
                            d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 9h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5A.5.5 0 0 0 4 11z"/>
                    </svg>
                </div>
                <Left/>
                <div className={styles.center}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-square-fill" viewBox="0 0 16 16">
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"/>
                    </svg>
                </div>
                <Right/>
                <div className={styles.bottomarrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-caret-down-square-fill" viewBox="0 0 16 16">
                        <path
                            d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6H4z"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

function Left(){
    const {pokemon,searchPokemon} = usePokemonApi()

    const onClick = () => {
        let id = pokemon?.id
        if (!id || id == 1) return
        searchPokemon((id - 1).toString())
    }
    let url = ""
    if (pokemon?.id && pokemon.id > 1)
        url = generateMiniSpriteLink(pokemon?.id - 1)

    return (
        <>
            <div className={styles.leftarrow} onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-caret-left-square-fill" viewBox="0 0 16 16">
                    <path
                        d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12z"/>
                </svg>
            </div>
            <div className={styles.leftsprite} onClick={onClick}>
                <img src={url}/>
            </div>
        </>
    )
}

function Right(){
    const {pokemon,searchPokemon} = usePokemonApi()

    const onClick = () => {
        let id = pokemon?.id
        if (!id) return
        searchPokemon((id + 1).toString())
    }
    let url = ""
    if (pokemon?.id)
        url = generateMiniSpriteLink(pokemon?.id + 1)
    return (
        <>
            <div className={styles.rightarrow} onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
                    <path
                        d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"/>
                </svg>
            </div>
            <div className={styles.rightsprite} onClick={onClick}>
                <img src={url}/>
            </div>
        </>
    )
}