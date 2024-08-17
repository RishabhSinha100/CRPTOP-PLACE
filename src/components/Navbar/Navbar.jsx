import React, { useContext } from 'react'
 import './Navbar.css'
  import logo from '../../assets/logo.png'
  import home from '../../assets/home.png'
  import contact from '../../assets/contact.png'
  import blog from '../../assets/blog.png'
  import feature from '../../assets/feature.png'


   import  arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {setCurrency}=useContext(CoinContext)
   const currencyHandler=(event)=>{
        switch(event.target.value){
          case"usd":{
            setCurrency({name:"usd",Symbol:"$"});
            break;
          }
          case"eur":{
            setCurrency({name:"eur",Symbol:"€"});
            break;
          } case"inr":{
            setCurrency({name:"inr",Symbol:"₹"});
            break;
          }
          default:{
            setCurrency({name:"usd",Symbol:"$"});
            break;
          }
        } 
   }
  return (
    <div className='navbar'>
      <Link to={`/`}>
      <h2>Crypto-place</h2>
      </Link> 
       <ul>
        {/* <div className="navs"> */}

       <Link to={`/`}>
       <img src={home} alt="cat" className='homepng' />
       <li>Home</li>
       </Link>
        
       <Link  to={`/Features`}>
       <img src={feature} alt="cat" className='featurepng' />  
       <li>Features</li>
       </Link>


       <Link  to={`/Contacts`}>
       <img src={contact} alt="cat" className='contactpng' />
       <li >Contact</li>
       </Link>


       <Link  to={`/Blogs`}>
       <img src={blog} alt="cat" className='blogpng' />
       <li>Blog</li>
       
       </Link>
       {/* </div> */}


     
    
       </ul>

       <div className='nav-right'>
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>

            <button>Sing up<img src={arrow_icon} alt=""/></button>
       </div>

    </div>
  )
}

export default Navbar
