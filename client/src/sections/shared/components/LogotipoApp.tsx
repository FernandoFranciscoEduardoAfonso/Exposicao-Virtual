
import logotipoSite from '@/sections/shared/assets/images/Logos/Logo_Oficial_Sem_Fundo.png'

const LogotipoApp = () => {
  return (
    <img src={logotipoSite} aria-label="Logotipo" alt="logotipo" className='md:w-36 w-30 h-auto object-cover' />
  )
}

export default LogotipoApp
