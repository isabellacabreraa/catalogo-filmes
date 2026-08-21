import {
  FaInstagram,
  FaGithub,
  FaFilm,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">

        <div>
          <div className="mb-2 flex items-center gap-2">
            <FaFilm className="text-red-600" />

            <span className="font-bold">
              Cine<span className="text-red-600">Verse</span>
            </span>
          </div>

          <p className="text-sm text-zinc-500">
            Seu catálogo de filmes em um só lugar.
          </p>
        </div>

        <div className="flex gap-4 text-xl">
          <a
            href="#"
            className="transition hover:text-red-500"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="transition hover:text-red-500"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="border-t border-zinc-800 py-5 text-center text-sm text-zinc-600">
        © 2026 CineVerse. Projeto acadêmico.
      </div>
    </footer>
  )
}

export default Footer
