import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Site = () => {
  return (
    <div className={`w-screen min-h-screen flex flex-col items-start`}>
      <Header />

      {/* o outlet é a area onde vai ser renderizado o conteudo alterável
O que estiver fora do outlet não altera 
ou seja, todas rotas filhas da area do site, vão ser renderizadas dentro do outlet*/}
      <Outlet></Outlet>

      <Footer/>

    </div>
  )
}

export default Site

