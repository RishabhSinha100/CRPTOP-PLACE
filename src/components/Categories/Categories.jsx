// import React, { useState, useContext, useEffect } from 'react';
// import { CoinContext } from '../../context/CoinContext';
// import { Link } from 'react-router-dom';
// import './Categories.css';

// const Categories = () => {
//   const [categories, setCategories] = useState([]);
//   const { currency } = useContext(CoinContext);
//   const [loading, setLoading] = useState(true);

//   const fetchCategories = () => {
//     const options = { method: 'GET', headers: { accept: 'application/json' } };
//     setLoading(true); // Start loading spinner before fetching data

//     fetch('https://api.coingecko.com/api/v3/coins/categories', options)
//       .then((response) => response.json())
//       .then((data) => {
//         setCategories(data);
//         setLoading(false); // Stop loading spinner after data is fetched
//       })
//       .catch((err) => {
//         console.error('Error fetching categories:', err);
//         setLoading(false); // Ensure loading is turned off in case of error
//       });
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, [currency]); // Re-fetch when 'currency' changes
//   if (loading) { // Show the spinner while loading
//     return (
//         <div className='spinner'>
//             <div className="spin"></div>
//         </div>
//     );
// }
//   return (
//     <>
//       <div className='hero'>
//         <h1>Join <br />The Future of Money</h1>
//         <p>Stay Informed with Real-Time Updates on Bitcoin, Ethereum, and the Latest Altcoins at CryptoPlace</p>
//       </div>

//       <div className='CThome'>
      
//           <div className='CTcrpto-table'>
//             <div className='CTtable-layout'>
//               <p>#</p>
//               <p>Category</p>
//               <p>Top-Gainers</p>
//               <p style={{ textAlign: "center" }}>24h</p>
//               <p className='CTonehr'>24h Volume</p>
//               <p className='CTmarket-cap'>Market Cap</p>
//             </div>
//             {categories.slice(0, 100).map((item, index) => (
//               <Link to={`/coin/${item.id || item.name}`} className="CTtable-layout" key={index}>
//                 <p>{index + 1}</p>
//                 <div>
//                   <p>{item.name}</p>
//                 </div>
//                 <div>
//                   {item.top_3_coins && item.top_3_coins.map((coinUrl, idx) => (
//                     <img key={idx} src={coinUrl} alt={`coin-${idx}`} />
//                   ))}
//                 </div>
//                 <p className={item.market_cap_change_24h > 0 ? "green" : "red"}>
//                   {Math.floor(item.market_cap_change_24h * 100) / 100}%
//                 </p>
//                 <p className='CTonehr'>{currency?.symbol || '$'} {item.volume_24h.toLocaleString()}</p>
//                 <p className='CTmarket-cap'>{currency?.symbol || '$'} {item.market_cap.toLocaleString()}</p>
//               </Link>
//             ))}
//           </div>
      
//       </div>
//     </>
//   );
// };

// export default Categories;
//////////////////////////////////////////////

import React, { useState, useContext, useEffect } from 'react';
import { CoinContext } from '../../context/CoinContext'
// import { CoinContext } from '../../../context/CoinContext';

import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { currency } = useContext(CoinContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(''); // State to handle error messages

  const fetchCategories = () => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    setLoading(true); // Start loading spinner before fetching data
    setError(''); // Reset any previous error

    fetch('https://api.coingecko.com/api/v3/coins/categories', options)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setLoading(false); // Stop loading spinner after data is fetched
      })
      .catch((err) => {
        console.error('Error fetching categories:', err);
        setError('Server problem, please try again after some time.'); // Set error message
        setLoading(false); // Ensure loading is turned off in case of error
      });
  };

  useEffect(() => {
    fetchCategories();
  }, [currency]); // Re-fetch when 'currency' changes

  // Show the spinner while loading
  if (loading) { 
    return (
      <div className='spinner'>
        <div className="spin"></div>
      </div>
    );
  }

  // Show error message if there is an error
  if (error) {
    return (
      <div className='error-message'>
        {error}
      </div>
    );
  }

  return (
    <>
      <div className='hero'>
        <h1>Join <br />The Future of Money</h1>
        <p>Stay Informed with Real-Time Updates on Bitcoin, Ethereum, and the Latest Altcoins at CryptoPlace</p>
      </div>

      <div className='CThome'>
        <div className='CTcrpto-table'>
          <div className='CTtable-layout'>
            <p>#</p>
            <p>Category</p>
            <p>Top-Gainers</p>
            <p style={{ textAlign: "center" }}>24h</p>
            <p className='CTonehr'>24h Volume</p>
            <p className='CTmarket-cap'>Market Cap</p>
          </div>
          {categories.slice(0, 100).map((item, index) => (
            <Link to={`/coin/${item.id || item.name}`} className="CTtable-layout" key={index}>
              <p>{index + 1}</p>
              <div>
                <p>{item.name}</p>
              </div>
              <div>
                {item.top_3_coins && item.top_3_coins.map((coinUrl, idx) => (
                  <img key={idx} src={coinUrl} alt={`coin-${idx}`} />
                ))}
              </div>
              <p className={item.market_cap_change_24h > 0 ? "green" : "red"}>
                {Math.floor(item.market_cap_change_24h * 100) / 100}%
              </p>
              <p className='CTonehr'>{currency?.symbol || '$'} {item.volume_24h.toLocaleString()}</p>
              <p className='CTmarket-cap'>{currency?.symbol || '$'} {item.market_cap.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
