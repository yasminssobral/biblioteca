import { useState } from "react";
import styled from "styled-components";
import Input from "../Inputs";
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 470px;
  width: 100%;
`;
const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;
const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;
const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;
console.log(livros);

function Search() {
  // Declaração de um estado que armazena o resultado da pesquisa.
  // `livrosPesquisados` vai guardar a lista de livros filtrados,
  // enquanto `setLivrosPesquisados` é a função para atualizar este estado.
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  // Função responsável por filtrar a lista de livros com base no texto digitado
  function fazPesquisa(evento) {
    console.log(evento);
    // `evento.target.value` captura o valor atual do input (o que o usuário digitou).
    const textoDigitado = evento.target.value;

    // `livros.filter()` é usado para filtrar a lista de livros.
    // Ele percorre todos os livros e retorna apenas os que têm o nome
    // que inclui o texto digitado pelo usuário.
    const resultadoPesquisa = livros.filter((livro) =>
      livro.nome.includes(textoDigitado)
    );

    // Atualiza o estado `livrosPesquisados` com o resultado da pesquisa.
    setLivrosPesquisados(resultadoPesquisa);
  }
  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(evento) => fazPesquisa(evento)}
      />
      {livrosPesquisados.map((livro) => (
        <Resultado>
          <img src={livro.src} />
          <p>{livro.nome}</p>
        </Resultado>
      ))}
    </PesquisaContainer>
  );
}
export default Search;
