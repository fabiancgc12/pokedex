import styles from "./displayInfo.module.scss"
import React from "react";

type props = {
    label:string
}

export function InfoLabel({label}:props){
    return <span className={styles.label}>{label}: </span>
}