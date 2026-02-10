import ButtonAction from "@/sections/shared/components/ButtonAction";
import { DataTable } from "@/sections/shared/components/DataTable";
import SectionTitlePage from "@/sections/shared/components/SectionTitlePage";
import image from "@/sections/site/assets/images/bebe.jpg";
import { Plus } from "lucide-react";
import { useState } from "react";
import { columns, type Exposition } from "./columns";


function getData(): Exposition[] {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      imagem: <img src={image} alt="Imagem de capa da exposição" className="h-20 min-w-20 lg:h-25 aspect-square object-cover rounded-sm" />,
      nome: "Sala SDRF-45",
      status: "Aberto",
      acesso: "Privado",
      inscritos: "2345 mil"
    },
    {
      id: "878732hj",
      imagem: <img src={image} alt="Imagem de capa da exposição" className="h-20 min-w-20 lg:h-25 aspect-square object-cover rounded-sm" />,
      nome: "Sala hjds-56",
      status: "Fechado",
      acesso: "Público",
      inscritos: "1 M"
    },
  ]
}

const Exposicoes = () => {
  const [search, setSearch] = useState<string>("")
  const data = getData()

  return (
    <main className="flex flex-col gap-4 card-container card-border">
      <div className="flex flex-wrap md:items-center md:justify-between gap-2 -mb-4">
        <SectionTitlePage title="Minhas Exposições" description="Explore as obras da exposição virtual." />
        <ButtonAction text="Criar exposição" icon={<Plus />} to="nova" isPrimary />
      </div>


      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <CardExposicao isAutor />
      </div> */}
      <div className="container">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  )
}



export default Exposicoes
