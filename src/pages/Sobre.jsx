import {
  FaFilm,
  FaHeart,
  FaSearch,
  FaUsers,
} from "react-icons/fa"
import { FiFilm } from "react-icons/fi"

const Sobre = () => {
  const techStack = ["React", "JavaScript", "Tailwind CSS", "React Icons", "Zod"]

  const features = [
    {
      icon: FaFilm,
      title: "Catálogo",
      desc: "Diversos filmes organizados e categorizados por gênero.",
    },
    {
      icon: FaHeart,
      title: "Favoritos",
      desc: "Salve seus filmes preferidos em tempo real na sua lista.",
    },
    {
      icon: FaSearch,
      title: "Pesquisa",
      desc: "Busca instantânea e filtros dinâmicos por categorias.",
    },
    {
      icon: FaUsers,
      title: "Experiência",
      desc: "Interface moderna, responsiva e centrada na usabilidade.",
    },
  ]

  return (
    <main className="relative min-h-screen bg-[#08080a] text-zinc-100 selection:bg-red-600 selection:text-white pb-24">
      
      {/* Luz Neon de Fundo */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-16 sm:px-8">
        
        {/* CABEÇALHO CENTRALIZADO */}
        <div className="mx-auto max-w-3xl text-center">
          
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-red-500/30 bg-red-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-red-400 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <FiFilm className="text-red-500 animate-pulse" />
            Sobre o projeto
          </div>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            Cinema em um só{" "}
            <span className="bg-gradient-to-r from-red-500 via-rose-500 to-red-700 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(239,68,68,0.4)]">
              lugar.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            O <strong className="text-zinc-200">CineVerse</strong> foi desenvolvido como uma aplicação web moderna para facilitar a descoberta e organização de filmes, combinando alta performance com uma experiência imersiva.
          </p>

          {/* BADGES DAS TECNOLOGIAS CENTRALIZADAS */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-zinc-800/80 bg-zinc-900/60 px-3.5 py-1.5 text-xs font-semibold text-zinc-300 backdrop-blur-md transition-all hover:border-red-500/50 hover:text-white hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* CARDS DE RECURSOS (GLASSMORPHISM) */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-8 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] text-center"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-red-500/20 bg-red-950/40 text-red-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
                <item.icon size={24} />
              </div>

              <h2 className="text-lg font-bold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>

    </main>
  )
}

export default Sobre