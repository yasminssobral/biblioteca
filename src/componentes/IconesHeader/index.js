// import './style.css'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'


const ContainerStyle = styled.ul`
display: flex;
align-items: center;
`

const ListaStyle = styled.li`
margin-right: 40px;
    width: 25px;
    list-style-type: none;

`
const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <ContainerStyle className='icones'>
            {icones.map((icone) => (
                <ListaStyle className='icone'><img src={icone} alt='opcoes'/></ListaStyle>
            ))}
        </ContainerStyle>
    )
}

export default IconesHeader