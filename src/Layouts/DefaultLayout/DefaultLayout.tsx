import Header from "../../Components/Header";
import { Outlet } from "react-router-dom"
import { LayoutContainer } from "./styles";

export function DefaultLayout () {
  return(
    <LayoutContainer>
      <Header/>
      <Outlet/>
      {/* outlet é a parte não estática de um layout */}
      
    </LayoutContainer>
  )
}