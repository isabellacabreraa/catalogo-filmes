import { useState } from "react"
import { FaBars, FaTimes, FaFilm } from "react-icons/fa"

const Header = ({ setPage }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = (page) => {
    setPage(page)
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <button
          onClick={() => navigate("home")}
          className="flex items-center gap-3"
        >
          <FaFilm className="text-2xl text-red-600" />

          <span className="text-xl font-bold">
            Cine<span className="text-red-600">Verse</span>
          </span>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => navigate("home")}
            className="transition hover:text-red-500"
          >
            Início
          </button>

          <button
            onClick={() => navigate("catalogo")}
            className="transition hover:text-red-500"
          >
            Catálogo
          </button>

          <button
            onClick={() => navigate("sobre")}
            className="transition hover:text-red-500"
          >
            Sobre
          </button>

          <button
            onClick={() => navigate("contato")}
            className="transition hover:text-red-500"
          >
            Contato
          </button>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-xl md:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-zinc-800 px-6 py-5 md:hidden">
          <button onClick={() => navigate("home")}>
            Início
          </button>

          <button onClick={() => navigate("catalogo")}>
            Catálogo
          </button>

          <button onClick={() => navigate("sobre")}>
            Sobre
          </button>

          <button onClick={() => navigate("contato")}>
            Contato
          </button>
        </nav>
      )}
    </header>
  )
}

export default Header