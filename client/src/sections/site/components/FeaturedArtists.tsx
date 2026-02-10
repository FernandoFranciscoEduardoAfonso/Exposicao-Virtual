import type { UsuarioDataProps } from "@/interfaces/replyInterface"
import FeaturedTitle from "@/sections/site/components/FeaturedTitle"
import SectionTitle from "@/sections/site/components/SectionTitle"

const members = [
    {
        name: 'Méschac Irung',
        role: 'Creator',
        avatar: 'https://avatars.githubusercontent.com/u/47919550?v=4',
    },
    {
        name: 'Théo Balick',
        role: 'Frontend Dev',
        avatar: 'https://avatars.githubusercontent.com/u/68236786?v=4',
    },
    {
        name: 'Glodie Lukose',
        role: 'Frontend Dev',
        avatar: 'https://avatars.githubusercontent.com/u/99137927?v=4',
    },
    {
        name: 'Bernard Ngandu',
        role: 'Backend Dev',
        avatar: 'https://avatars.githubusercontent.com/u/31113941?v=4',
    },
]

export default function FeaturedArtists() {
    return (
        <section className="relative w-full border-b">
            <div className="overflow-hidden absolute inset-0 isolate opacity-70 contain-strict">
                <div aria-hidden className="absolute inset-0 isolate contain-strict overflow-hidden">
                    {/* <!-- Gradientes radiais originais --> */}
                    <div className="h-320  absolute left-0 top-0 lg:w-80 w-80 -rotate-180 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(247,72%,80%,.20)_0,hsla(247,72%,50%,.10)_80%,transparent_100%)]"></div>
                    {/* Quadrados Azuis Claros (Tonalidade #432dd7) */}
                    {/* Mais opaco (50%) */}
                    <div className="absolute bottom-40 opacity-10 right-10 w-20 h-20 bg-(--tertiary-base)"></div>
                    <div className="absolute bottom-20 opacity-25 md:right-30 -right-10 w-20 h-20 bg-(--tertiary-base)"></div> {/* NOVO 2 */}

                </div>
            </div>
            <div className="relative mx-auto max-w-3xl px-8 lg:px-0">
                <div className="col-span-12">
                    <SectionTitle textoNormal=" em ascenção" textoDestaque='Artistas' posicaoDestaque='left' posicaoPadrao='center' />
                    {/* <FeaturedTitle text='Veja o que encontarás na Plataforma'></FeaturedTitle> */}
                </div>

                <div>
                    <h3 className="my-4">Nível 1 (acima 1.000 de alcances)</h3>
                    <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {members.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="my-4">Nível 1 (até 500 de alcances)</h3>
                    <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {members.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="my-4">Nível 1 (até 100 de alcances)</h3>
                    <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {members.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}

export const CardArtista = ({ artista }: { artista: UsuarioDataProps }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                <img className="aspect-square rounded-full object-cover" src={'https://avatars.githubusercontent.com/u/47919550?v=4'} alt={artista.nome} height="460" width="460" loading="lazy" />
            </div>
            <span className="mt-2 block text-sm">{artista.nome}</span>
            <span className="text-muted-foreground block text-xs">Artista</span>
        </div>
    )
}



