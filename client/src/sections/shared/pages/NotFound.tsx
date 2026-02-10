import Logotipo from "@/sections/site/components/Logotipo"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <main className="bg-background  fixed overflow-hidden grid h-[100vh] w-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <div className="bg-muted p-4 rounded-sm flex place-content-center mb-20">
          <Logotipo />
        </div>
        <p className="sm:text-7xl text-6xl font-semibold text-blue-600">404</p>
        <h1 className="mt-4 sm:text-5xl text-4xl font-semibold tracking-tight text-balance text-foreground"> Página não encontrada </h1>
        <p className="mt-6 md:text-lg text-base font-medium text-pretty text-gray-400"> Desculpe, não conseguimos encontrar a página que você está procurando</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/" className="underline text-gray-500 hover:text-gray-400 md:text-lg text-base" > Voltar a Página inicial </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound

