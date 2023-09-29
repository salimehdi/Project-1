import './App.css'
import Nav from './components/Nav'
import Landing from './components/Landing'
import Login from './components/Login'
import Signup from './components/Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <>
     <BrowserRouter>
     <Nav />
     
     
     <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
