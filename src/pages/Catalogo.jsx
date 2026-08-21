import { useMemo, useState } from "react"
import { FaHeart, FaFilter, FaStar, FaTimes } from "react-icons/fa"
import { FiFilm } from "react-icons/fi"
import { movies } from "../data/movies"
import MovieCard from "../components/MovieCard"
import SearchBar from "../components/SearchBar"

const Catalogo = ({ favorites, setFavorites }) => {
  const [search, setSearch] = useState("")
  const [genre, setGenre] = useState("Todos")
  const [selectedMovie, setSelectedMovie] = useState(null)

  const genres = [
    "Todos",
    ...new Set(movies.map((movie) => movie.genre)),
  ]

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchesGenre =
        genre === "Todos" || movie.genre === genre

      return matchesSearch && matchesGenre
    })
  }, [search, genre])

  const toggleFavorite = (id) => {
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(id)) {
        return currentFavorites.filter((movieId) => movieId !== id)
      }

      return [...currentFavorites, id]
    })
  }

  const favoriteMovies = movies.filter((movie) =>
    favorites.includes(movie.id)
  )

  const totalRatings = movies.reduce(
    (total, movie) => total + movie.rating,
    0
  )

  const averageRating = (
    totalRatings / movies.length
  ).toFixed(1)

  return (
    <main className="relative min-h-screen bg-[#08080a] text-zinc-100 selection:bg-red-600 selection:text-white pb-24">
      
      {/* Luz Neon do Topo */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-16 sm:px-8">
        
        {/* CABEÇALHO DA PÁGINA */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-red-500/30 bg-red-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-red-400 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <FiFilm className="text-red-500 animate-pulse" />
            Explore nossa seleção
          </div>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            Catálogo de{" "}
            <span className="bg-gradient-to-r from-red-500 via-rose-500 to-red-700 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(239,68,68,0.4)]">
              filmes
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Pesquise, filtre e encontre a obra perfeita para sua próxima sessão de cinema.
          </p>
        </div>

        {/* CONTROLES (BUSCA E FILTRO) */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          
          <div className="lg:col-span-2">
            <SearchBar value={search} onChange={setSearch} />
          </div>

          {/* Select de Gênero Estilizado */}
          <div className="relative">
            <FaFilter className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <select
              value={genre}
              onChange={(event) => setGenre(event.target.value)}
              className="w-full appearance-none rounded-xl border border-zinc-800 bg-zinc-900/60 py-3.5 pl-11 pr-10 text-sm font-medium text-zinc-200 outline-none backdrop-blur-md transition-all duration-300 focus:border-red-500/80 focus:bg-zinc-900/90 focus:ring-1 focus:ring-red-500"
            >
              {genres.map((item) => (
                <option key={item} value={item} className="bg-zinc-950 text-zinc-200">
                  Gênero: {item}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 border-x-4 border-t-4 border-x-transparent border-t-zinc-400" />
          </div>

        </div>

        {/* ESTATÍSTICAS DO CATÁLOGO (GLASSMORPHISM) */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-5 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-zinc-700">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Filmes encontrados
            </p>
            <strong className="mt-2 block text-2xl font-black text-white sm:text-3xl">
              {filteredMovies.length}
            </strong>
          </div>

          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-5 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-zinc-700">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Favoritos
            </p>
            <strong className="mt-2 flex items-center gap-2 text-2xl font-black text-white sm:text-3xl">
              <FaHeart className="text-red-500 fill-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
              {favoriteMovies.length}
            </strong>
          </div>

          <div className="col-span-2 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-5 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-zinc-700 md:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Avaliação média
            </p>
            <strong className="mt-2 flex items-center gap-2 text-2xl font-black text-white sm:text-3xl">
              <FaStar className="text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]" />
              {averageRating}
            </strong>
          </div>

        </div>

        {/* GRID DE FILMES */}
        {filteredMovies.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isFavorite={favorites.includes(movie.id)}
                onFavorite={toggleFavorite}
                onDetails={setSelectedMovie}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-12 text-center backdrop-blur-md shadow-2xl">
            <h2 className="text-2xl font-bold text-white">
              Nenhum filme encontrado
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Tente pesquisar por outro título ou alterar o filtro de gênero.
            </p>
          </div>
        )}

        {/* MODAL DE DETALHES (CYBERPUNK GLASS) */}
        {selectedMovie && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 animate-fadeIn">
            <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-red-900/40 bg-zinc-950/90 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_50px_rgba(239,68,68,0.15)]">
              
              {/* Botão Fechar */}
              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedMovie(null)}
                  className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/80 px-3.5 py-1.5 text-xs font-semibold text-zinc-300 transition-all hover:border-red-500/50 hover:bg-red-950/40 hover:text-white"
                >
                  <FaTimes /> Fechar
                </button>
              </div>

              {/* Poster */}
              <div className="relative mt-2 overflow-hidden rounded-xl border border-zinc-800">
                <img
                  src={selectedMovie.image}
                  alt={selectedMovie.title}
                  className="mx-auto h-80 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              </div>

              {/* Informações */}
              <h2 className="mt-6 text-3xl font-black text-white">
                {selectedMovie.title}
              </h2>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-semibold text-zinc-400">
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-zinc-300">{selectedMovie.year}</span>
                <span className="rounded-md border border-red-950 bg-red-950/40 px-2.5 py-1 text-red-400">{selectedMovie.genre}</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-zinc-300">{selectedMovie.duration}</span>
                <span className="flex items-center gap-1 rounded-md border border-amber-500/30 bg-amber-950/30 px-2.5 py-1 text-amber-400">
                  <FaStar className="fill-current" /> {selectedMovie.rating}
                </span>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-zinc-300">
                {selectedMovie.description}
              </p>

            </div>
          </div>
        )}

      </div>
    </main>
  )
}

export default Catalogo