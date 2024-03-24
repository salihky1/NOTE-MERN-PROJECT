import {BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import Home from './routes/Home/home'
import About from './routes/About/about'
import UpdateNote from "./routes/Home/update-note"
import Header from './components/Header'
import AddNotes from './routes/Home/add-note'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
    
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add-note" element={<AddNotes/>}/>
        <Route path="/note/:id" element={<UpdateNote/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
