import { useState } from 'react'
import './styles/App.css'
import Intro from './Intro'
import Lenguajes from './Lenguajes'

function App() {
  return (
    <div className="general-container">
      <Intro />
      <Lenguajes />
    </div>
  )
}

export default App
