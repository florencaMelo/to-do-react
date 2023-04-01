import { Timer, Scroll } from "phosphor-react"
import { NavLink } from "react-router-dom"
import igniteLogo  from "../../assets/Ignite-logo.svg"
import { HeaderContainer } from "./styles"

const Header = () => {
  return(
    <HeaderContainer>
      <span><img src={igniteLogo}/></span>
      <nav>
        <NavLink to="/"><Timer size={24}/></NavLink>
        <NavLink to="/history"><Scroll size={24}/></NavLink>
        {/* Navlink é como se fosse o "a" do html */}
      </nav>
    </HeaderContainer>
  // Componente retorna um HTML e é escrito com letra maiúscula 
  )
}

export default Header