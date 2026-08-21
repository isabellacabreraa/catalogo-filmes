const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-lg bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700 active:scale-95"
    >
      {children}
    </button>
  )
}

export default Button