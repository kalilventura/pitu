import React from 'react';
import { HeaderContainer, Logo } from './styles';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    return (
        <>
            <HeaderContainer>
                <Logo src={faLink} alt="Pitu - Encurtador de URL" />
                <h1>Pitu</h1>
                <p>{props.children}</p>
            </HeaderContainer>
        </>
    )
}

export default Header;