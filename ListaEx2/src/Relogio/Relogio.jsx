import { useEffect, useState } from "react"
import styles from "./Relogio.module.css"

export function Relogio(){

    const [data, setData] = useState(new Date());

    //UseEffect 
    useEffect(() => {
        const timeId = setInterval(() => {setData(new Date()); }, 1000);
    })

    return(
        <>
        <h1>Olha a hora!!!</h1>
        <p className={styles.relogio}>{data.toLocaleTimeString()}</p>
        </>
    )
}