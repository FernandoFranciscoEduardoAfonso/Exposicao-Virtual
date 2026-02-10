import image2 from "@/sections/site/assets/images/banner2.jpg"
import SectionTitle from '../components/SectionTitle';
import FeaturedTitle from '../components/FeaturedTitle';
import CardLeilao from '@/sections/shared/components/CardLeilao';
import PageTitle from "../components/PageTitle";


const Leiloes = () => {
    return (
        <section className='site-padding-x w-full site-padding-y'>
            <div className='w-full'>
                {/* Section Header */}

               <PageTitle image={image2} title="Secção de Leilões" description=""></PageTitle>

                {/* Portfolio Content */}
                <section className="">
                    <div>
                        <SectionTitle textoNormal="Leilões " textoDestaque='em curso' posicaoDestaque='right' posicaoPadrao='center' />
                        <FeaturedTitle text='Explore as obras mais curtidas e analisadas na Plataforma'></FeaturedTitle>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 w-full bg-transparent">
                        {
                            Array.from({ length: 60 }).map((_, index) => (
                                <CardLeilao key={index} />
                            ))
                        }
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Leiloes
