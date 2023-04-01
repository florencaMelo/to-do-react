import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./Styles/Themes/default"
import { GlobalStyle } from "./Styles/global"
 
function App() {

  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
        {/* é para informar o navegador que estou usando rotas */}
          <Router/>
        </BrowserRouter>
        <GlobalStyle/>
      </ThemeProvider>
    </div>
  )
}

export default App
