import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LoadingTop from '@/sections/shared/components/LoadingTop'
import { createContext, useContext, useState, type Dispatch, type SetStateAction } from 'react'
import UserData from '@/contexts/UserData'

type menuStateContextProps = {
  menuState: Boolean,
  setMenuState: Dispatch<SetStateAction<boolean>> //indica que é uma função que retorna Boolean
}

export const MenuStateContext = createContext({
  menuState: false,
  setMenuState: () => false
} as menuStateContextProps)

const Site = () => {
  const [menuState, setMenuState] = useState(false)
  const { userData } = useContext(UserData);

  return (
    <MenuStateContext value={{ menuState: menuState, setMenuState: setMenuState }}>
      <div className={`w-screen min-h-screen flex flex-col items-start bg-background text-foreground`}>
        <LoadingTop />

        <Header userData={userData} />

        {/* o outlet é a area onde vai ser renderizado o conteudo alterável
O que estiver fora do outlet não altera 
ou seja, todas rotas filhas da area do site, vão ser renderizadas dentro do outlet*/}
        <Outlet></Outlet>

        <Footer />

      </div>
    </MenuStateContext>
  )
}

export default Site

