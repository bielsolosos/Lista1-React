import { useState } from "react";
import { Botao } from "../Components/Botão/Botao";
import { Texto } from "../Components/input/Texto";

export function Formulario() {
    const [conteudoTexto, SetConteudoTexto] = useState('');
  
    function getarForm() {
      console.log(conteudoTexto);
      alert(conteudoTexto);

    }
  
    return (
      <>
        <Texto conteudo={(event) => SetConteudoTexto(event.target.value)} />
        <br />
        <Botao 
          conteudo={"Enviar"}
          titulo={"tá procurando demais amigo"}
          onclick={getarForm}
        />
      </>
    );
  }