import styles from "./frontside.module.scss"
import {ThemeSelector} from "./themeSelector";
import {TopSeparator} from "../topSeparator/TopSeparator";
import {SearchForm} from "../searhForm/searchForm";

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
                <TopSeparator className={"rotateY"}/>
            </div>
            <div className={styles.searchSection}>
                <div className="display-pokemon ">
                    <div>
                        <div className="errorMessage">
                            <h2>ERROR</h2>
                            <p>El pokemon que busca no existe</p>
                            <div className="missigno">
                                <img src="./src/MissingNo.png"/>
                            </div>
                        </div>
                        <img id="pokemon-img" src="./src/loading.gif" className="pokemon-image"/>
                    </div>
                </div>
                <SearchForm/>
                <div className="controls">
                    <div className="control-buttons">
                        <img src="./src/buttons%20controller.png" alt=""/>
                    </div>
                    <div className="control-directions">
                        <div className="toparrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-caret-up-square-fill" viewBox="0 0 16 16">
                                <path
                                    d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 9h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5A.5.5 0 0 0 4 11z"/>
                            </svg>
                        </div>
                        <div className="leftarrow" id="left-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-caret-left-square-fill" viewBox="0 0 16 16">
                                <path
                                    d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12z"/>
                            </svg>
                        </div>
                        <div className="leftsprite">
                            <img alt="" id="left-sprite"/>
                        </div>
                        <div className="centerarrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-square-fill" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"/>
                            </svg>
                        </div>
                        <div className="rightarrow" id="right-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
                                <path
                                    d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"/>
                            </svg>
                        </div>
                        <div className="rightsprite">
                            <img alt="" id="right-sprite"/>
                        </div>
                        <div className="bottomarrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-caret-down-square-fill" viewBox="0 0 16 16">
                                <path
                                    d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6H4z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}