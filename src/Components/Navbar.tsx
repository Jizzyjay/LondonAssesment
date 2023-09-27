import React from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    background-color: var(--BackgroundColor);
    // color: #fff;
    padding: 0 2rem;
`

const StyledLogo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    `
    const StyledParagraph = styled.p`
    font-size: 0.8rem;
    font-weight: 400;
    padding: 0.5rem 0;
    `

const StyledLogoText = styled.div`
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--PrimaryColor);
`

function Navbar() {
  return (
    <StyledNavbar>
        <StyledLogo>
        <StyledLogoText>London Internship Program</StyledLogoText>
        <StyledParagraph>London</StyledParagraph>
        </StyledLogo>

        <div>
            <input type="text" placeholder="Search" />
        </div>

        <div>
            <button>Move to Video interview |</button>
            </div>
            
        
    </StyledNavbar>
  )
}

export default Navbar