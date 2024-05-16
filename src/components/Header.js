import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { DarkModeIcon, HeaderWrapper, LightModeIcon } from './Header.styled'
import { ReactComponent as Logo } from "../assests/Logo.svg/tic-tac-toe.svg"
import { useNavigate } from 'react-router-dom'
import { SfxContext } from '../contexts/SfxContext'


const Header = () => {

    const { theme, toggleTheme} = useContext(ThemeContext)
    const hoverSfx = useContext(SfxContext)
    const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <Logo className="logo" onClick={() => navigate("/")} onmouseenter={() => hoverSfx()}/>

      <span onClick={() => toggleTheme()}>{theme === "dark" ? <LightModeIcon/> : <DarkModeIcon/> }
      </span>
    
        {/* <button onClick={() => toggleTheme()}>Toggle theme</button> */}
    </HeaderWrapper>
  )
}

export default Header