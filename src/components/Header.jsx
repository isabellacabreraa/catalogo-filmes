import { useState } from "react"
import { FiFilm, FiMenu, FiX, FiHome, FiGrid, FiInfo, FiMail } from "react-icons/fi"

const Header = ({ setPage, currentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = (page) => {
    setPage(page)
    setMenuOpen(false)
  }

  const navItems = [
    { id: "home", label: "Início", icon: FiHome },
    { id: "catalogo", label: "Catálogo", icon: FiGrid },
    { id: "sobre", label: "Sobre", icon: FiInfo },
    { id: "contato", label: "Contato", icon: FiMail },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#08080a]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
       
        {/* LOGO REDESENHADA */}
        <button
          onClick={() => navigate("home")}
          className="group flex items-center gap-3 transition-transform duration-200 active:scale-95"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/30 bg-red-950/40 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all duration-300 group-hover:border-red-500/60 group-hover:shadow-[0_0_25px_rgba(239,68,68,0.5)]">
            <FiFilm className="text-xl animate-pulse" />
          </div>
          <span className="text-xl font-black tracking-tight text-white">
            Cine<span className="bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(239,68,68,0.4)]">Verse</span>
          </span>
        </button>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                currentPage === item.id
                  ? "border border-red-500/40 bg-red-950/40 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                  : "text-zinc-400 hover:bg-zinc-900/60 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* BOTÃO MENU MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-300 transition-all hover:border-zinc-700 hover:text-white md:hidden"
          aria-label="Abrir Menu"
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <nav className="flex flex-col gap-2 border-t border-zinc-800/80 bg-[#08080a]/95 px-6 py-4 backdrop-blur-2xl md:hidden">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-xs font-semibold uppercase tracking-wider transition-all ${
                  currentPage === item.id
                    ? "border-red-500/40 bg-red-950/40 text-red-400"
                    : "border-zinc-800/60 bg-zinc-900/30 text-zinc-400 hover:border-zinc-700 hover:text-white"
                }`}
              >
                <Icon className="text-red-500" />
                {item.label}
              </button>
            )
          })}
        </nav>
      )}
    </header>
  )
}

export default Header