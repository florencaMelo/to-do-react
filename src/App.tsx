import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
 
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Router/>
      {/* é para informar o navegador que estou usando rotas */}
      </BrowserRouter>
    </div>
  )
}

export default App
