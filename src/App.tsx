import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './components/ActionAreaCard.tsx';
import ActionAreaCard from './components/ActionAreaCard';
import CardContainer from './components/CardContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <CardContainer />
    </div>
  )
}

export default App
