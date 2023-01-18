import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './components/ActionAreaCard.tsx';
import ActionAreaCard from './components/ActionAreaCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <ActionAreaCard />
    </div>
  )
}

export default App
