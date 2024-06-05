import { useEffect, useState } from "react";

export function ListaPesquisa() {
  //Array com as paradas!
  const lista = [
    { id: 1, nome: "Chikorita" },
    { id: 2, nome: "Cyndaquill" },
    { id: 3, nome: "Totodile" },
  ];

  const [pesquisa, setPesquisa] = useState('');

  const pesquisar = lista.filter((filtrado) =>
    filtrado.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  
  return (
    <>
      <h1>Escolha seu pokémon!</h1>
      <input
       type="text"
       value={pesquisa}
       onChange={(e) => setPesquisa(e.target.value)}
       placeholder="Pesquise seu Pokémon"
      />
     <button onClick={() => pesquisar} title={"tenta a sorte"}>
        Pesquisar
      </button>


      <ul>
      {pesquisar.map((i) => (
          <li key={i.id}>{i.nome}</li>
        ))}
      </ul>
    </>
  );
}
