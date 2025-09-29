import './index.css'
import { Outlet } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

function App() {

  return (
    <div className={`w-full h-screen`}>
      {/* o outlet é a area onde vai ser renderizado o conteudo alterável
      O que estiver fora do outlet não altera */}
      <QueryClientProvider client={queryClient}>
        <Outlet></Outlet>
      </QueryClientProvider>

    </div>
  )
}


export default App
