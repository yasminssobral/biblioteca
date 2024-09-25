// import './style.css'
import styled from 'styled-components'

const ListaStyle = styled.li`
font-size:16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`
const UlStyle = styled.ul`
display: flex;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <UlStyle>
            {textoOpcoes.map((texto) => (
                <ListaStyle className='opcao'><p>{texto}</p></ListaStyle>
            ))}
        </UlStyle>
    )
}

export default OpcoesHeader