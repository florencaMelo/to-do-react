import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./Styles/Themes/default"
 
function App() {

  return (
    <div className="App">
      <BrowserRouter>
       {/* é para informar o navegador que estou usando rotas */}
        <ThemeProvider theme={defaultTheme}/>
        <Router/>
      </BrowserRouter>
    </div>
  )
}

export default App
