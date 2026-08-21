import { FaSearch } from "react-icons/fa"

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full">
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Pesquisar filme..."
        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 py-3 pl-11 pr-4 outline-none transition focus:border-red-600"
      />
    </div>
  )
}

export default SearchBar