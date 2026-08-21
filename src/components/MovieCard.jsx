import {
  FiHeart,
  FiStar,
  FiClock,
} from "react-icons/fi"

const MovieCard = ({
  movie,
  isFavorite,
  onFavorite,
  onDetails,
}) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-[#111113] transition duration-300 hover:-translate-y-1 hover:border-red-900">

      <div className="relative aspect-[2/3] overflow-hidden">

        <img
          src={movie.image}
          alt={`Capa do filme ${movie.title}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        <button
          onClick={() => onFavorite(movie.id)}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 backdrop-blur transition hover:bg-red-800"
        >
          <FiHeart
            size={17}
            className={
              isFavorite
                ? "fill-red-600 text-red-600"
                : "text-white"
            }
          />
        </button>

        <span className="absolute bottom-3 left-3 rounded-md bg-black/70 px-2.5 py-1 text-[11px] font-medium text-zinc-300 backdrop-blur">
          {movie.genre}
        </span>

      </div>

      <div className="p-4">

        <h3 className="truncate font-bold text-zinc-100">
          {movie.title}
        </h3>

        <div className="mt-2 flex items-center justify-between text-xs text-zinc-500">

          <span>
            {movie.year}
          </span>

          <span className="flex items-center gap-1 text-zinc-300">
            <FiStar className="text-red-600" />
            {movie.rating}
          </span>

          <span className="flex items-center gap-1">
            <FiClock />
            {movie.duration}
          </span>

        </div>

        <button
          onClick={() => onDetails(movie)}
          className="mt-4 w-full rounded-lg border border-zinc-700 py-2.5 text-xs font-semibold text-zinc-300 transition hover:border-red-800 hover:bg-red-900/20 hover:text-white"
        >
          Ver detalhes
        </button>

      </div>

    </article>
  )
}

export default MovieCard