import React from 'react'
import Navbar from './components/Navbar/Navbar'
 import Secondnav from './pages/Secondnav/Secondnav'
 import { Routes,Route } from 'react-router-dom'
  import Home from './pages/Home/Home'
   import Coin from './pages/Coin/coin'
import Footer from './components/Footer/Footer'
import Features from './components/Features/Features'
 import Contacts from './components/Contacts/Contacts'
 import Blogs from './components/Blogs/Blogs'
  import Categories from './components/Categories/Categories'
   import Exchanges from './components/Exchanges/Exchanges'
    import Derivative from './components/Derivative/Derivative'
const App = () => {
  return (
    <div className='app'>
    <Navbar/>
     <Secondnav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/coin/:coinId' element={<Coin/>}/>
      <Route path='/Features' element={<Features/>}/>
      <Route path='/Contacts' element={<Contacts/>}/>
      <Route path='/Blogs' element={<Blogs/>}/>
      <Route path='/Categories' element={<Categories/>}/>
      <Route path='/Exchanges' element={<Exchanges/>}/>
      <Route path='/Derivative' element={<Derivative/>}/>

     
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
