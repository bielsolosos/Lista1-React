import styles from "./Texto.module.css";

export function Texto({conteudo}){

    return(
        <>
        <h3>Nos passe seu feedback!</h3>
        <input type="text"
        placeholder="Nos diga o que achou de nosso serviço!"
        className={styles.Texto}
        onChange={conteudo}
         />
        </>
    )
}