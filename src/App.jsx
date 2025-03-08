import './App.css'
import Header from './components/Header'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/Login'
import Eventfrom from './components/Eventfrom'
import Event from './components/Event'
function App() {


  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/event' element={<Event/>}/>
          <Route path='/eventform' element={<Eventfrom/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
