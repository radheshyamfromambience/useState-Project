import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Counter from './Projects/Counterapp'
import Todo from './Projects/Todolistapp'
import PasswordToggle from './Projects/ShowHidePassword'
import DarkLightMode from './Projects/DarkLightMode'
import SimpleLoginForm from './Projects/SimpleLoginForm'
import FAQ from './Projects/FAQ'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/project1' element={<Counter/>}/>
      <Route path='/project2' element={<Todo/>}/>
      <Route path='/project3' element={<PasswordToggle/>}/>
      <Route path='/project4' element={<DarkLightMode/>}/>
      <Route path='/project5' element={<SimpleLoginForm/>}/>
      <Route path='/project6' element={<FAQ/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
