import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  FiUser,
  FiMail,
  FiPhone,
  FiGlobe,
  FiFilm,
  FiList,
  FiMessageSquare,
  FiCheckCircle,
  FiAlertCircle,
  FiRotateCcw,
  FiSend,
  FiHeart,
} from "react-icons/fi"

import { formSchema } from "../schemas/formSchema"

const Contato = () => {
  const [submittedData, setSubmittedData] = useState(null)
  const [isSubmittingSuccess, setIsSubmittingSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      gender: "",
      genres: [],
      url: "",
      choice: "",
      about: "",
    },
  })

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSubmittedData(data)
    setIsSubmittingSuccess(true)
  }

  const handleReset = () => {
    reset()
    setSubmittedData(null)
    setIsSubmittingSuccess(false)
  }

  const InputError = ({ message }) => {
    if (!message) return null
    return (
      <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-400">
        <FiAlertCircle size={14} />
        <span>{message}</span>
      </p>
    )
  }

  return (
    <main className="relative min-h-screen bg-[#08080a] text-zinc-100 selection:bg-red-600 selection:text-white pb-24">
      
      {/* Luz Neon de Fundo */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-5xl px-5 pt-16 sm:px-8">
        
        {/* CABEÇALHO */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-red-500/30 bg-red-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-red-400 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <FiFilm className="text-red-500 animate-pulse" />
            CineVerse
          </div>

          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            Conte para nós o que você{" "}
            <span className="bg-gradient-to-r from-red-500 via-rose-500 to-red-700 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(239,68,68,0.4)]">
              gosta de assistir
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Preencha o formulário abaixo e compartilhe seus gostos cinematográficos com a gente.
          </p>
        </div>

        {/* CARD GLASSMORPHISM */}
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6 sm:p-10 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          {isSubmittingSuccess && submittedData ? (
            
            /* ================= SUCESSO ================= */
            <div className="py-8 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-red-500/30 bg-red-950/40 text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                <FiCheckCircle size={42} />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                Formulário enviado!
              </h2>

              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-zinc-400">
                Suas informações foram validadas com sucesso utilizando Zod.
              </p>

              <div className="mx-auto mt-8 max-w-2xl overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950/80 p-5 text-left backdrop-blur-md">
                <pre className="font-mono text-xs leading-6 text-zinc-300">
                  {JSON.stringify(submittedData, null, 2)}
                </pre>
              </div>

              <button
                onClick={handleReset}
                type="button"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-7 py-3.5 text-xs font-semibold text-zinc-300 transition-all hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
              >
                <FiRotateCcw />
                Preencher novamente
              </button>
            </div>
          ) : (
            
            /* ================= FORM ================= */
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
              <div className="grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
                
                {/* COLUNA 1 */}
                <div className="space-y-6">
                  
                  {/* NOME */}
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      <FiUser className="text-red-500" /> Nome
                    </label>
                    <input
                      {...register("firstName")}
                      type="text"
                      placeholder="Digite seu nome"
                      className={`w-full rounded-xl border bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-all duration-300 focus:bg-zinc-900/90 ${
                        errors.firstName
                          ? "border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                          : "border-zinc-800 focus:border-red-500/80 focus:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                      }`}
                    />
                    <InputError message={errors.firstName?.message} />
                  </div>

                  {/* SOBRENOME */}
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      <FiUser className="text-red-500" /> Sobrenome
                    </label>
                    <input
                      {...register("lastName")}
                      type="text"
                      placeholder="Digite seu sobrenome"
                      className={`w-full rounded-xl border bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-all duration-300 focus:bg-zinc-900/90 ${
                        errors.lastName
                          ? "border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                          : "border-zinc-800 focus:border-red-500/80 focus:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                      }`}
                    />
                    <InputError message={errors.lastName?.message} />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      <FiMail className="text-red-500" /> E-mail
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" />
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="seuemail@email.com"
                        className={`w-full rounded-xl border bg-zinc-950/60 py-3 pl-11 pr-4 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-all duration-300 focus:bg-zinc-900/90 ${
                          errors.email
                            ? "border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                            : "border-zinc-800 focus:border-red-500/80 focus:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                        }`}
                      />
                    </div>
                    <InputError message={errors.email?.message} />
                  </div>

                  {/* TELEFONE */}
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      <FiPhone className="text-red-500" /> Celular
                    </label>
                    <div className="relative">
                      <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" />
                      <input
                        {...register("contact")}
                        type="tel"
                        placeholder="(11) 98765-4321"
                        className={`w-full rounded-xl border bg-zinc-950/60 py-3 pl-11 pr-4 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-all duration-300 focus:bg-zinc-900/90 ${
                          errors.contact
                            ? "border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                            : "border-zinc-800 focus:border-red-500/80 focus:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                        }`}
                      />
                    </div>
                    <InputError message={errors.contact?.message} />
                  </div>

                  {/* GÊNERO */}
                  <div>
                    <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      Gênero
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { id: "male", label: "Masculino" },
                        { id: "female", label: "Feminino" },
                        { id: "other", label: "Outro" },
                      ].map((item) => (
                        <label
                          key={item.id}
                          className="flex cursor-pointer items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-2.5 text-xs font-semibold text-zinc-300 transition-all hover:border-zinc-700 hover:text-white"
                        >
                          <input
                            {...register("gender")}
                            type="radio"
                            value={item.id}
                            className="accent-red-600"
                          />
                          {item.label}
                        </label>
                      ))}
                    </div>
                    <InputError message={errors.gender?.message} />
                  </div>

                </div>

                {/* COLUNA 2 */}
                <div className="space-y-6">
                  
                  {/* GÊNEROS FAVORITOS */}
                  <div>
                    <label className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      <FiHeart className="text-red-500" /> Gêneros favoritos
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        "Ação",
                        "Comédia",
                        "Drama",
                        "Terror",
                        "Romance",
                        "Ficção Científica",
                      ].map((genre) => (
                        <label
                          key={genre}
                          className="flex cursor-pointer items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/40 px-3.5 py-2.5 text-xs font-semibold text-zinc-400 transition-all hover:border-zinc-700 hover:text-zinc-200"
                        >
                          <input
                            {...register("genres")}
                            type="checkbox"
                            value={genre}
                            className="h-4 w-4 rounded accent-red-600"
                          />
                          {genre}
                        </label>
                      ))}
                    </div>
                    <InputError message={errors.genres?.message} />
                  </div>

                  {/* LINK */}
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      <FiGlobe className="text-red-500" /> Seu perfil de filmes
                    </label>
                    <div className="relative">
                      <FiGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" />
                      <input
                        {...register("url")}
                        type="url"
                        placeholder="https://..."
                        className={`w-full rounded-xl border bg-zinc-950/60 py-3 pl-11 pr-4 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-all duration-300 focus:bg-zinc-900/90 ${
                          errors.url
                            ? "border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                            : "border-zinc-800 focus:border-red-500/80 focus:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                        }`}
                      />
                    </div>
                    <InputError message={errors.url?.message} />
                  </div>

                  {/* ESCOLHA */}
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      <FiList className="text-red-500" /> O que você procura?
                    </label>
                    <select
                      {...register("choice")}
                      className={`w-full rounded-xl border bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 outline-none transition-all duration-300 focus:bg-zinc-900/90 ${
                        errors.choice
                          ? "border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                          : "border-zinc-800 focus:border-red-500/80 focus:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                      }`}
                    >
                      <option value="" className="bg-zinc-950 text-zinc-500">
                        Selecione uma opção
                      </option>
                      <option value="discover" className="bg-zinc-950 text-zinc-200">
                        Descobrir novos filmes
                      </option>
                      <option value="favorites" className="bg-zinc-950 text-zinc-200">
                        Organizar favoritos
                      </option>
                      <option value="genres" className="bg-zinc-950 text-zinc-200">
                        Explorar gêneros
                      </option>
                    </select>
                    <InputError message={errors.choice?.message} />
                  </div>

                  {/* SOBRE */}
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      <FiMessageSquare className="text-red-500" /> Sobre seus gostos
                    </label>
                    <textarea
                      {...register("about")}
                      rows={4}
                      placeholder="Conte um pouco sobre seus filmes favoritos..."
                      className={`w-full resize-none rounded-xl border bg-zinc-950/60 p-4 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-all duration-300 focus:bg-zinc-900/90 ${
                        errors.about
                          ? "border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                          : "border-zinc-800 focus:border-red-500/80 focus:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                      }`}
                    />
                    <InputError message={errors.about?.message} />
                  </div>

                </div>

              </div>

              {/* BOTÕES */}
              <div className="flex flex-col-reverse gap-3 border-t border-zinc-800/80 pt-6 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-6 py-3.5 text-xs font-semibold text-zinc-300 transition-all hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
                >
                  <FiRotateCcw />
                  Limpar
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-800 px-8 py-3.5 text-xs font-bold text-white shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(225,29,72,0.7)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <FiSend />
                      Enviar formulário
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </main>
  )
}

export default Contato