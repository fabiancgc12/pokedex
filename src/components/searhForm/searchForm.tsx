import styles from "./searchForm.module.scss"
import {RefObject, useRef} from "react";
import {usePokemonApi} from "../../context/PokeApi";
import pokedexStyles from "../pokedex/pokedex.module.scss";

export function SearchForm(){
    const inputRef = useRef<HTMLInputElement>(null);
    const {pokemon,searchPokemon} = usePokemonApi()

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const value = inputRef.current?.value.trim().toLowerCase();
        if (!value) return
        searchPokemon(value)
    }

    const onClickMore = () => {
        document
            .querySelector(`.${pokedexStyles.pokedex}`)?.classList
            .toggle(`${pokedexStyles.show}`)
    }

    return (
        <div className={styles.searchBox}>
            <form id="searchForm" onSubmit={submit}>
                <input ref={inputRef} type="text" name="search" className={styles.searchInput}/>
                <button className={styles.submitButton} id="submit-button" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-search" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
            </form>
            <div className={styles.moreInfo}>
                <button disabled={!pokemon} onClick={onClickMore}>More Info</button>
            </div>
        </div>
    )
}