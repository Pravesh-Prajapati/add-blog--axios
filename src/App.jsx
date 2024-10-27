import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './components/Pages/Form'
import Blogdetail from './components/Blogdetail'
// import CategoryForm from './components/Pages/CategoryForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/form' element={<Form/>} />
          <Route path='/blogdetail/:id' element={<Blogdetail/>}/>
          {/* <Route path='/categoryform' element={<CategoryForm/>} /> */}
        </Routes>
      </BrowserRouter>

     
    </>
  )
}

export default App
