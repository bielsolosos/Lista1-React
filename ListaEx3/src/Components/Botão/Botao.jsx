import styles from "./Botao.module.css"

export function Botao({conteudo, onclick, titulo}){

    return(
        <>
        <button 
        className={styles.botao}
        onClick={onclick}
        title={titulo}
        > 
        {conteudo} 
        </button>
        </>
    )
}