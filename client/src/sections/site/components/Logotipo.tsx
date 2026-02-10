
import logotipoSite from '@/sections/shared/assets/images/Logos/Logo_Oficial_Sem_Fundo.png'

const Logotipo = () => {
  return (
    <img src={logotipoSite} aria-label="Logotipo" alt="logotipo" className='xl:w-56 md:w-46 w-36 h-auto object-cover' />
  )
}

export default Logotipo
