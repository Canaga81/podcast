import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Podcasts from './pages/Podcasts/Podcasts';
import Host from './pages/Host/Host';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Header';
import Sponsors from './components/Sponsors/Sponsors';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';
import InCard from './pages/InCard/InCard';
import AllBlogItem from './pages/AllBlogItem/AllBlogItem';

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
          <Route path='/incard' element={<InCard />}>
            <Route path=':incardId' element={<InCard />} />
          </Route>
          <Route path='/allblogitem' element={<AllBlogItem />}>
            <Route path=':allblogitemId' element={<AllBlogItem />} />
          </Route>
          
        </Routes>

        <Sponsors />
        <Footer />
        <Copyright />

      </BrowserRouter>

    </div>

  )

}

export default App