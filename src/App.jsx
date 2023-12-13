import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Podcasts from './pages/Podcasts/Podcasts'
import Host from './pages/Host/Host'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import Header from './components/Header/Header'

function App() {

  return (
    <div>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/podcasts' element={<Podcasts />} />
          <Route path='/host' element={<Host />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contack' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App