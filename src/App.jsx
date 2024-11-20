import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Summary  from './Summary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Summary/>
    </>
  )
}

export default App
