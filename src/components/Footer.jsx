import { FiFilm, FiInstagram, FiGithub, FiHeart } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="relative border-t border-zinc-800/80 bg-[#08080a] text-zinc-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
       
        {/* LOGO E DESCRICAO */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <div className="mb-2 flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-red-500/30 bg-red-950/40 text-red-500 shadow-[0_0_12px_rgba(239,68,68,0.2)]">
              <FiFilm size={18} />
            </div>
            <span className="text-lg font-black tracking-tight text-white">
              Cine<span className="bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent">Verse</span>
            </span>
          </div>
          <p className="text-xs text-zinc-500">
            Seu catálogo cinematográfico definitivo em um só lugar.
          </p>
        </div>

        {/* REDES SOCIAIS COM EFEITO NEON */}
        <div className="flex items-center gap-3">
          {[
            { icon: FiInstagram, href: "#", label: "Instagram" },
            { icon: FiGithub, href: "#", label: "GitHub" },
          ].map((social, index) => {
            const Icon = social.icon
            return (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-all duration-300 hover:border-red-500/50 hover:bg-red-950/30 hover:text-red-400 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
              >
                <Icon size={18} />
              </a>
            )
          })}
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-zinc-800/60 py-4 text-center text-xs text-zinc-600">
        <p className="flex items-center justify-center gap-1">
          © 2026 CineVerse. Desenvolvido com <FiHeart className="inline text-red-500" size={12} /> como projeto acadêmico.
        </p>
      </div>
    </footer>
  )
}

export default Footer