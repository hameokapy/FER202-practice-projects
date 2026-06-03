import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Welcome from './App.jsx'
import Welcome1 from './components/DemoFunc.jsx'
import Counter from './components/Counter.jsx'
import CounterFunc from './components/CounterFunc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Welcome name="Hehe" age="13"/>
    <Welcome1 name="Hoho" age="50"/>
    <Counter />
    <CounterFunc/>
  </StrictMode>,
)
