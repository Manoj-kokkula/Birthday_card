import { useState } from 'react'
import './App.css'
import { Box, ThemeProvider, createTheme } from '@mui/material'
import CustomCard from './component/CustomCard'

function App() {
  const [count, setCount] = useState(0)

  const darkTheme = createTheme({
    palette: {
      mode: "dark"
    }
  })

  return (
    <>
    <ThemeProvider theme={darkTheme}>
        <CustomCard/>
    </ThemeProvider>
    </>
  )
}

export default App
