import { Label } from "@/components/ui/label"
import FormGroup from "@/sections/shared/components/FormGroup"
import SectionTitlePage from "@/sections/shared/components/SectionTitlePage"
// import { Input } from "@/components/ui/input"
import ButtonAction from "@/sections/shared/components/ButtonAction"
import ViewImage from "@/sections/shared/components/ViewImage"
import image from "@/sections/site/assets/images/bebe.jpg"
import { Input, Select, SelectItem, Textarea } from "@heroui/react"
import { Plus } from "lucide-react"

const NovaObra = () => {
    return (
        <main className="flex flex-col card-container">
            <SectionTitlePage title="Nova Obra" description="Explore as obras da exposição virtual." />

            <article className="grid grid-cols-12 gap-4">
                <section className="lg:col-span-8 col-span-12 flex flex-col gap-4">
                    <FormGroup title="Informações da Obra" children={
                        <div className="grid grid-cols-2 gap-x-2 gap-y-4">
                            <div className='space-y-1 col-span-2'>
                                <Label htmlFor='titulo' className='leading-5'>
                                    Tema <span className="text-red-500">*</span>
                                </Label>
                                <Input type='text' id='titulo' placeholder='Digite o tema da obra' inputMode="text" required />
                            </div>
                            <div className='space-y-1'>
                                <Label htmlFor='titulo' className='leading-5'>
                                    Categoria <span className="text-red-500">*</span>
                                </Label>
                                <Select id='titulo' placeholder='Escolha uma categoria' inputMode="text" required >
                                    <SelectItem >Fotografia</SelectItem>
                                    <SelectItem >Realismo</SelectItem>
                                </Select>
                            </div>
                            <div className='space-y-1'>
                                <Label htmlFor='titulo' className='leading-5'>
                                    Ano de conclusão <span className="text-red-500">*</span>
                                </Label>
                                <Input type='text' id='titulo' placeholder='Digite o ano de conclusão' inputMode="text" required />
                            </div>
                            <div className='space-y-1 col-span-2'>
                                <Label htmlFor='titulo' className='leading-5'>
                                    Descrição
                                </Label>
                                <Textarea id='titulo' placeholder='Adicione uma descrição' inputMode="text" required maxRows={5} />
                            </div>
                        </div>
                    } />

                    <FormGroup title="Informações adicionais" children={
                        <div className="grid grid-cols-2 gap-x-2 gap-y-4">
                            <div className='space-y-1'>
                                <Label htmlFor='preco' className='leading-5'>
                                    Preço
                                </Label>
                                <Input type='number' id='preco' placeholder='Digite o preço em Kzs' inputMode="numeric" />
                            </div>
                            <div className='space-y-1'>
                                <Label htmlFor='titulo' className='leading-5'>
                                    Visibilidade da obra
                                </Label>
                                <Select id='titulo' placeholder='Escolha uma categoria' inputMode="text" required >
                                    <SelectItem >Público</SelectItem>
                                    <SelectItem >Privado</SelectItem>
                                </Select>
                            </div>
                            <div className='space-y-1 col-span-2'>
                                <Label htmlFor='dimensao' className='leading-5'>
                                    Dimensão
                                </Label>
                                <Input type='text' id='dimensao' placeholder='Digite a dimensão Ex: 10 x 10 cm' inputMode="text" />
                            </div>
                            <div className='space-y-1 col-span-2 flex justify-end'>
                                <ButtonAction text="Salvar" isPrimary/>
                            </div>

                        </div>
                    } />

                </section>
                <section className="lg:col-span-4 sm:col-span-6 col-span-12">
                    <FormGroup title="Imagens da Obra" children={
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-end">
                                <ButtonAction text="Adicionar imagem" icon={<Plus />} variant={'bordered'} />
                            </div>
                            <div>
                                <ViewImage image={image} />
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <ViewImage image={image} />
                                <ViewImage image={image} />
                                <ViewImage image={image} />
                            </div>
                        </div>
                    } />

                </section>
            </article>
        </main>
    )
}

export default NovaObra
