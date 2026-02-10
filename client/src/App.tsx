import './index.css'
import { Outlet } from 'react-router-dom'

import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { ThemeProvider } from './components/ui/theme-provider'
import { getUserData } from './utils/SessionData'
const queryClient = new QueryClient()
import UserData from '@/contexts/UserData';
import { useEffect, useState } from 'react'

function App() {
  const [userData, setUserData] = useState<any>(null);

  const { data: usuario } = useQuery({
    queryKey: ['getUserData'],
    queryFn: async () => {
      try {
        const responseData = await getUserData()
        if (!responseData || [401, 403, 500].includes(responseData.status)) {
          return null;
        } else {
          const usuario = responseData.data
          console.log('User Data:', usuario)
          return usuario
        }
      } catch (error) {
        console.log(error)
        return null;
      }
    }
  })

  useEffect(() => {
    if (usuario) {
      setUserData(usuario);
    }
  }, [usuario])

  return (
    <div className={`w-full h-full`}>
      {/* o outlet é a area onde vai ser renderizado o conteudo alterável
      O que estiver fora do outlet não altera */}
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <QueryClientProvider client={queryClient}>
          <UserData.Provider value={{ userData: userData, setUserData: setUserData }}>
            <Outlet></Outlet>
          </UserData.Provider>
        </QueryClientProvider>
      </ThemeProvider>

    </div>
  )
}


export default App
