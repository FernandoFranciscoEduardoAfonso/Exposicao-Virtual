import Logotipo from "@/sections/site/components/Logotipo"

const ElementError = () => {
  return (
     <main className="bg-background  fixed overflow-hidden grid h-[100vh] w-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <div className="bg-muted p-4 rounded-sm flex place-content-center mb-20">
          <Logotipo />
        </div>
        <p className="sm:text-7xl text-6xl font-semibold text-blue-600">500</p>
        <h1 className="mt-4 sm:text-5xl text-4xl font-semibold tracking-tight text-balance text-foreground"> Erro interno do servidor </h1>
        <p className="mt-6 md:text-lg text-base font-medium text-pretty text-gray-400">Atualize a página ou tente novamente mais tarde</p>
      </div>
    </main>
  )
}

export default ElementError
