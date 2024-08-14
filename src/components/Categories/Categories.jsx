import React, { useState, useContext, useEffect } from 'react'
import { CoinContext } from '../../context/CoinContext'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'



import './Categories.css'

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { currency } = useContext(CoinContext);
 const [isLoading, setIsLoading] = useState(true); 

// This is my orignal api fetching --------------->
  const fetchCategories = async () => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    fetch('https://api.coingecko.com/api/v3/coins/categories', options)
      .then(response => response.json())
      .then(response => setCategories(response))
      .catch(err => console.error(err));
  }





 //This is my Second fetching api for reloading
//  const fetchCategories = async () => {
//   try {
//     const options = { method: 'GET', headers: { accept: 'application/json' } };
//     setIsLoading(true); // Start loading spinner
//     const response = await fetch('https://api.coingecko.com/api/v3/coins/categories', options);
//     const data = await response.json();
//     setCategories(data);
//     setIsLoading(false); // Turn off loading spinner after data is fetched
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//     setIsLoading(false); // Ensure loading is turned off in case of error
//   }
// };

  useEffect(() => {
    fetchCategories();

  }, [currency])

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleString(); // You can customize the format further if needed
};



// if (isLoading) {
//   return (
//     <div className='spinner'>
//       <div className="spin"></div>
//     </div>
//   );
// }
  return (
    <div className='CThome'>
      <div className='CTcrpto-table'>
        <div className='CTtable-layout'>
          <p>#</p>
          <p>Category</p>
          <p>Top-Ganirs</p>
          <p style={{ textAlign: "center" }}>24h</p>
          <p className='CTonehr'>24h Volume</p>
          <p className='CTmarket-cap'>Market Cap</p>
  
        </div>
        {
          categories.slice(0, 100).map((item, index) => (

            <Link to={`/coin/${item.id}`} className="CTtable-layout" key={index}>
              <p>{index}</p>
              <div>
                <p>{item.name}</p>
              </div>
              <div>
              {item.top_3_coins.map((coinUrl, index) => (
                  <img key={index} src={coinUrl} alt={`coin-${index}`} />
                ))}
              </div>
              <p className={item.market_cap_change_24h > 0 ? "green" : "red"}>{Math.floor(item.market_cap_change_24h * 100) / 100}%</p>

              <p className='CTonehr'>{currency.Symbol} {item.volume_24h.toLocaleString()}</p>
              <p className='CTmarket-cap'>{currency.Symbol}{item.market_cap.toLocaleString()}</p>
            



            </Link>

          ))
        }
      </div>
    </div>
  )
}


export default Categories
