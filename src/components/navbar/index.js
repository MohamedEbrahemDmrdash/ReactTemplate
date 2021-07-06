import React from "react";
import { NavbarSection , Logo , LogoText , UlList , ListItem , Anchor , StyledLink } from './style.js'
const navbar = () =>{
    return (
        <NavbarSection>
            
        <div className="container">
            
            <Logo>
                <LogoText>Ultra Profile</LogoText>
            </Logo>
            
            <UlList>
                <ListItem><StyledLink className='anchor' to="/">Home</StyledLink></ListItem>
                <ListItem><Anchor href="#">Work</Anchor></ListItem>
                <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                <ListItem><Anchor href="#">About</Anchor></ListItem>
                <ListItem><StyledLink className='anchor' to="/contact">Contact</StyledLink></ListItem>
            </UlList>
            
        </div>
        
    </NavbarSection>
    )
}

export default navbar;