import { useState } from "react"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Catalogo from "./pages/Catalogo"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"

const App = () => {

  const [page, setPage] = useState("home")
  const [favorites, setFavorites] = useState([])

  const renderPage = () => {

    switch (page) {

      case "catalogo":
        return (
          <Catalogo
            favorites={favorites}
            setFavorites={setFavorites}
          />
        )

      case "sobre":
        return <Sobre />

      case "contato":
        return <Contato />

      default:
        return <Home setPage={setPage} />
    }
  }

  return (
    <div className="flex min-h-screen flex-col">

      <Header setPage={setPage} />

      <div className="flex-1">
        {renderPage()}
      </div>

      <Footer />

    </div>
  )
}

export default App