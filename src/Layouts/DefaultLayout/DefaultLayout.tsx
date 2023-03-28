import Header from "../../Components/Header";
import { Outlet } from "react-router-dom"

export function DefaultLayout () {
  return(
    <div>
      <Header/>
      <Outlet/>
      {/* outlet é a parte não estática de um layout */}
      
    </div>
  )
}