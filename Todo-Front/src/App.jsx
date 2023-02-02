import Header from "./component/Header"
import { Routes, Route } from "react-router-dom"
import MainPage from "./page/MainPage"
import Todos from "./component/Todos"
function App() {

  return (
    <div className="App">
      <Header /> 
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="todos" element={<Todos />} />
      </Routes>
    </div>
  )
}

export default App
