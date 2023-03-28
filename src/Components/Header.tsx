import { Timer, Scroll } from "phosphor-react"
import { NavLink } from "react-router-dom"
import igniteLogo from "../assets/Ignite-logo.svg"

const Header = () => {
  return(
    <header>
      <span><img src={igniteLogo}/></span>
      <nav>
        <NavLink to="/"><Timer size={24}/></NavLink>
        <NavLink to="/history"><Scroll size={24}/></NavLink>
        {/* Navlink é como se fosse o "a" do html */}
      </nav>
    </header>
   
  )
}

export default Header