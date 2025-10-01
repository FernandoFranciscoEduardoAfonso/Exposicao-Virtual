{/* <img decoding="auto" width="1728" height="1312" sizes="316.9061px" srcset="https://framerusercontent.com/images/vDPh1a5K8J5s2ne81ATg4pJoM.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/vDPh1a5K8J5s2ne81ATg4pJoM.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/vDPh1a5K8J5s2ne81ATg4pJoM.jpg 1728w" src="https://framerusercontent.com/images/vDPh1a5K8J5s2ne81ATg4pJoM.jpg" alt="" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover;" /> */ }
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import image from '@/sections/site/assets/images/bebe.jpg'
import { ChevronRight, CircleCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import FeaturedTitle from './FeaturedTitle'

const FeaturedArts = () => {
    return (
        <section className='site-padding-x container-melhores-obras w-full border'>

            <div className='flex flex-col gap-y-4 w-full'>
                <div>
                    <SectionTitle textoNormal="Obras Mais " textoDestaque='Populares' posicaoDestaque='right' posicaoPadrao='center' />
                    <FeaturedTitle text='Explore as obras mais curtidas e analisadas na Plataforma'></FeaturedTitle>
                </div>

                <InfiniteSlider className=''
                    speedOnHover={20}
                    speed={70}
                    gap={10}>

                    <CardFeaturedArt />

                </InfiniteSlider>
            </div>

        </section>
    )
}


const CardFeaturedArt = () => {
    return (
        <Link to={"#"} className='shrink-0 rounded-2xl opacity-[1] group relative'>
            <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                <Link
                    to="/"
                    className="block text-[12px] lg:text-sm duration-150 bg-white px-4 py-2 rounded-2xl">
                    <span>Ver mais sobre a obra</span>
                    <ChevronRight className="ml-1 inline-block size-3" />
                </Link>
            </div>
            <div className='overflow-hidden rounded-[inherit] inset-0 group-hover:blur-none transition-all duration-500 group-hover:opacity-50'>
                <img decoding="auto" src={image} alt="Imagem_Obra" className="aspect-[1/2] block w-[220px] h-[180px] md:w-[260px] md:h-[220px] xl:w-[300px] xl:h-[260px] rounded-[inherit] object-center object-cover group-hover:scale-105 transition-all" />
            </div>
            <div className='flex flex-col gap-1 px-2 py-1'>
                <h6 className='text-ellipsis overflow-hidden whitespace-nowrap text-sm'>A Água Fresca</h6>
                <div className='flex gap-2 items-center'>
                    <CircleCheck size={18} className='text-indigo-700'></CircleCheck>
                    <span className='text-gray-600 text-[12.5px] lg:text-[0.8rem]'>Pintura</span>
                </div>
            </div>
        </Link>
    )
}
export default FeaturedArts
