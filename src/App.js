import React from 'react'
import ButtonC from './components/ButtonC'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    
  )
}

export default App