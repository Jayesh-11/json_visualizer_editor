import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Homepage from './components/homepage/Homepage'

function App() {

  return (
    <ChakraProvider>
      <Homepage />
    </ChakraProvider>
  )
}

export default App
