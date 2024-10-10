import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './ui/App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { dependencies, DependenciesContext } from './dependencies.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <DependenciesContext.Provider value={dependencies}>
          <App />
        </DependenciesContext.Provider>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
)
