import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { QueryClient } from '@tanstack/react-query'
const queryClient = new QueryClient()

import { QueryClientProvider } from '@tanstack/react-query'

import { RouterProvider, } from 'react-router-dom'

import { router } from './routes/router.tsx'
import { HeroUIProvider } from "@heroui/react";

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode >
    <QueryClientProvider client={queryClient}>
      <HeroUIProvider>
        <RouterProvider router={router}/>
      </HeroUIProvider>
    </QueryClientProvider>
  </StrictMode>,
)
