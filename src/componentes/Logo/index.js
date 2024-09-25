// import './style.css'
import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const ContainerStyle = styled.div`
display: flex;
font-size: 30px;
`
const LogoStyle = styled.img`
margin-right: 10px;
`

function Logo() {
    return (
        <ContainerStyle>
            <LogoStyle src={logo} alt='logo' className='logo-img' />
            <p><strong>Store</strong>Books</p>
        </ContainerStyle>
    )
}

export default Logo