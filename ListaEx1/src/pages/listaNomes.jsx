import { useState } from "react";
import styles from "./ListaNomes.module.css";

export function ListaNomes(){
    const nomes =[
        {id: 1, nome: "Gabriel"},
        {id: 2, nome: "Duda"},
        {id: 3, nome: "Miguel"},
        {id: 4, nome: "Justem"},
    ]

    //Hook da lista
    const [listaNomes, setListaNomes] = useState(nomes);
    //em teoria esse [e o Hook de pegar o bglh!]
    const [Nome, setNome] = useState('');

    function adicionarNome(){
        if(Nome.trim() !== ''){
            console.log('executou')
            const EntradaNome = {
                id: listaNomes.length + 1,
                nome : Nome,
            }
        
        //Agora ele seta aqui o novo nome e depois seta na Lista!
        setListaNomes([...listaNomes, EntradaNome]);
        setNome('');
        }
    }

    return(
        <div className={styles.ListaNomes}>
            <h1>Lista Nomes:</h1>
            <ul> 
                {listaNomes.map((nomes) => ( //por convenção tem que ter o id e nós usamos o map que é um tipo de 
                    <li key={nomes.id}> {nomes.nome} </li>
                )
                 )}
            </ul>
            <input
            type="text"
            value={Nome}
                                    //jeito de pegar a variável escrita ali!
            onChange={(e) => setNome(e.target.value)}
            placeholder="Adicionar um nome novo!"
            />
            <button onClick={adicionarNome}></button>
        </div>
    )
}