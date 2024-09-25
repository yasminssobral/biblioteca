import './style.css'
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'

import styled from 'styled-components'

const ContainerStyle = styled.div`
background-color: #FFF;
display: flex;
justify-content: center;
`

function Header() {
    return (
        <ContainerStyle>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </ContainerStyle>
    )
}

export default Header