import CustomBadge from "@/sections/shared/components/CustomBadge";
import { Dropdown, type GroupDropdown } from "@/sections/shared/components/Dropdown";

const CardLeilao = ({ direction }: { direction: "vertical" | "horizontal" }) => {
  const groups: GroupDropdown[] = [
    {
      index: 0,
      items: [
        {
          text: "Ver reações",
          link: "/obras/34",
        },
      ]
    },
    {
      index: 1,
      items: [
        {
          text: "Editar",
          link: "nova",
        },
        {
          text: "Eliminar",
          color: "red",
          onClick: () => { },
        }
      ]
    }
  ]
  return (
    <div className={`flex gap-3 group ${direction === 'vertical' ? 'flex-col' : 'flex-row'}`}>
      <div
        className={` ${direction === 'horizontal' ? 'shrink-0 xl:h-35 xl:w-35 lg:h-25 lg:w-25 h-25 w-25 ' : ''}
          relative aspect-square bg-[#e7e7f3] dark:bg-[#2a2a4a] rounded-xl overflow-hidden shadow-sm group-hover:shadow-lg transition-all duration-300`}>
        <div className="absolute inset-0 bg-center bg-no-repeat bg-cover transform group-hover:scale-105 transition-transform duration-500"
          data-alt="Modern abstract painting with blue and gold tones"
          style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB0IEwdcVEWzIrXsKK36LHLTIwIdedUbxao4F1-CU8yNTAkfiOjePTOivozEvcAnb4RaeQGREnuL7WrM9KoVaW7iWspdFVs8eAA5TGfTc3KqU6rL6YqhB8O36k5hNH8mbKfxTzEFE6MOrh5oJ_h_x6hkzIf1G8O5jmbEReZ6povgYIT1KYauyayLuKRnfOfZhemlF9BfUfDetl_ET-yJRDfZ-92Au_S63C04Z56HRjUjtRqHRTp9hdknaj_DGDs3ayzmzHhoylgG7pb")` }}  >
        </div>
      </div>
      <div className="px-1 w-full">
        <div className="flex justify-between">
          <div>
            <p className="text-foreground text-base font-bold leading-normal">
              El mundo ciego
            </p>
          <p className="text-muted-foreground text-sm">12 Propostas</p>
          </div>
          <Dropdown
            alignContent="end"
            direccion="vertical"
            groups={groups}
          />
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <p className="text-muted-foreground text-sm">Maior Proposta: 120.000,00 kzs</p>
          <CustomBadge type="success" text="Activo" />
        </div>
      </div>
    </div>
  )
}
export default CardLeilao