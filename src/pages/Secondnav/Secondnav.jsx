
// import React from 'react';
// import './Secondnav.css';
// import { Link } from 'react-router-dom'
// import { useState } from 'react';
// import category from '../../assets/category.png';



// const Secondnav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="Secondnavbar">
//       <div className="Secondnavbar-container">
//         <div className="Secondnavbar-logo">

//         </div>
//         <div className="Secondnavbar-toggle" onClick={handleToggle}>
//           ☰
//         </div>
//         <ul className={`Secondnavbar-menu ${isMenuOpen ? 'active' : ''}`}>
//           <li className="Secondnavbar-item">
//             <Link to={`/Categories`} className='link-container'>
//               <div className='icon-text-container'>
//                 <img src={category} alt="cat" className='categoryimg' />
//                 <p className="Secondnavbar-link">Categories</p>
//               </div>
//             </Link>

//           </li>
//           <li className="Secondnavbar-item">

//             <Link to={`/Derivative`}> <p className="Secondnavbar-link">Derivative</p></Link>


//           </li>
//           <li className="Secondnavbar-item">

//             {/* <Link to={`/Exchanges`}> <p className="Secondnavbar-link">Exchanges</p></Link> */}


//           </li>
//         </ul>
       
//       </div>
//     </nav>
//   );
// };

// export default Secondnav;

// .................................

// Secondnav.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Secondnav.css';
import category from '../../assets/category.png';
import LiveClock from '../clock/LiveClock';
 import clock from '../../assets/clock.png';

const Secondnav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="Secondnavbar">
      <div className="Secondnavbar-container">
        <div className="Secondnavbar-logo">
          {/* Logo can go here */}
        </div>
        <div className="Secondnavbar-toggle" onClick={handleToggle}>
          ☰
        </div>
        <ul className={`Secondnavbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="Secondnavbar-item">
            <Link to={`/Categories`} className='link-container'>
              <div className='icon-text-container'>
                <img src={category} alt="cat" className='categoryimg' />
                <p className="Secondnavbar-link">Categories</p>
              </div>
            </Link>
          </li>
          <li className="Secondnavbar-item">
            <Link to={`/Derivative`}><p className="Secondnavbar-link">Derivative</p></Link>
          </li>
          <li className="Secondnavbar-item">
            {/* Uncomment and add link if needed */}
            {/* <Link to={`/Exchanges`}><p className="Secondnavbar-link">Exchanges</p></Link> */}
          </li>
        </ul>
        <div className="Secondnavbar-clock">
          <LiveClock />
          <img src={clock} alt="clock" className='clockimg' />
          
        </div>
      </div>
    </nav>
  );
};

export default Secondnav;




