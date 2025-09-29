import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="sm:text-7xl text-5xl font-semibold text-terciary-base-color">404</p>
        <h1 className="mt-4 sm:text-7xl text-5xl font-semibold tracking-tight text-balance text-gray-900"> Página não encontrada </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"> Desculpe, não conseguimos encontrar a página que você está procurando</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/" className="rounded-md bg-terciary-base-color px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-terciary-base-color focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" > Voltar a Página inicial </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound

