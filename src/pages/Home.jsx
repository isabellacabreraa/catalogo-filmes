import {
  FiArrowRight,
  FiPlay,
  FiStar,
  FiFilm,
  FiHeart,
  FiSearch,
} from "react-icons/fi"

const Home = ({ setPage }) => {
  return (
    <main className="min-h-screen bg-[#08080a] text-zinc-100 selection:bg-red-600 selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden py-20">
        
        {/* Luzes Neon de Fundo */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/15 blur-[140px]" />
        <div className="pointer-events-none absolute right-10 top-10 h-[250px] w-[250px] rounded-full bg-rose-900/10 blur-[100px]" />

        <div className="relative mx-auto w-full max-w-5xl px-5 text-center sm:px-8">
          
          {/* Badge Futurista */}
          <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-red-500/30 bg-red-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-red-400 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <FiFilm className="text-red-500 animate-pulse" />
            O Universo do Cinema
          </div>

          {/* Título com Gradiente */}
          <h1 className="mx-auto max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Histórias que{" "}
            <span className="block bg-gradient-to-r from-red-500 via-rose-500 to-red-700 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(239,68,68,0.4)]">
              ficam com você.
            </span>
          </h1>

          {/* Subtítulo com Contraste Corrigido */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Descubra filmes, explore novos gêneros e encontre histórias imperdíveis marcadas para a sua próxima sessão.
          </p>

          {/* Botões Tecnológicos */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={() => setPage("catalogo")}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-800 px-8 py-4 text-sm font-bold text-white shadow-[0_0_25px_rgba(225,29,72,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(225,29,72,0.7)] active:scale-[0.98]"
            >
              <FiPlay className="fill-current" />
              Explorar Catálogo
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => setPage("sobre")}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-8 py-4 text-sm font-semibold text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-800/80 hover:text-white"
            >
              Conheça o CineVerse
            </button>
          </div>

          {/* Painel de Estatísticas (Glassmorphism) */}
          <div className="mx-auto mt-20 grid max-w-3xl grid-cols-3 divide-x divide-zinc-800/80 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6 backdrop-blur-xl shadow-2xl">
            <div>
              <strong className="block text-2xl font-extrabold text-white sm:text-3xl">100+</strong>
              <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-zinc-500 sm:text-sm">Filmes</span>
            </div>
            <div>
              <strong className="flex items-center justify-center gap-1.5 text-2xl font-extrabold text-white sm:text-3xl">
                <FiStar className="text-red-500 fill-red-500/20" />
                8.5
              </strong>
              <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-zinc-500 sm:text-sm">Avaliação</span>
            </div>
            <div>
              <strong className="block text-2xl font-extrabold text-white sm:text-3xl">10+</strong>
              <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-zinc-500 sm:text-sm">Gêneros</span>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative border-t border-zinc-800/50 bg-[#0b0b0e] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl">
          
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
              Feito para quem ama cinema
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Tudo para sua próxima sessão
            </h2>
          </div>

          {/* Cards Tecnológicos */}
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: FiSearch, title: "Encontre", desc: "Pesquise e filtre filmes rapidamente em tempo real." },
              { icon: FiHeart, title: "Salve", desc: "Crie sua seleção personalizada e guarde seus favoritos." },
              { icon: FiFilm, title: "Descubra", desc: "Explore histórias envolventes de múltiplos gêneros." },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-8 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-red-500/20 bg-red-950/30 text-red-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  )
}

export default Home