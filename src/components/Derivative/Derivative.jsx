import React, { useState, useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'
import './Derivative.css'
import { CoinContext } from '../../context/CoinContext'

const Derivative = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [derivative, setdervative] = useState([]);
  const { currency } = useContext(CoinContext);

  // This is my orignal api 
  const fetdata = async () => {

    const options = { method: 'GET', headers: { accept: 'application/json' } };
    fetch('https://api.coingecko.com/api/v3/derivatives/exchanges', options)
      .then(response => response.json())
      .then(response => setdervative(response))
      .catch(err => console.error(err));
  };
  //  This is my second fetching api for reloading 
  //  const fetdata = async () => {
  //   try {
  //     const options = { method: 'GET', headers: { accept: 'application/json' } };
  //     setIsLoading(true); // Start loading spinner
  //     const response = await  fetch('https://api.coingecko.com/api/v3/derivatives/exchanges', options);
  //     const data = await response.json();
  //     console.log(data);
  //     setIsLoading(false); // Turn off loading spinner after data is fetched
  //   } catch (error) {
  //     console.error('Error fetching categories:', error);
  //     setIsLoading(false); // Ensure loading is turned off in case of error
  //   }
  // };

  useEffect(() => {
    fetdata();

  })

  // if (isLoading) {
  //   return (
  //     <div className='spinner'>
  //       <div className="spin"></div>
  //     </div>
  //   );
  // }
  return (
    <div className='Dhome'>
      <div className='Dcrpto-table'>
        <div className='Dtable-layout'>
          <p>#</p>
          <p>Exchange</p>
          <p>Top-Ganer</p>
          <p style={{ textAlign: "center" }}> 24h Open Interest</p>
          <p className='Donehr'>Perpetuals</p>
          <p className='Dmarket-cap'>Futures</p>

        </div>
        {
          derivative.slice(0, 10).map((item, index) => (

            <Link to={`/coin/${item.id}`} className="Dtable-layout" key={index}>
              <p>{index}</p>
              <div>
                <p>{item.name}</p>
              </div>
              <div>
                <img src={item.image} alt="" />
                <p>{item.name + " - " + item.symbol}</p>
              </div>

              <p>{currency.Symbol} {item.trade_volume_24h_btc.toLocaleString()}</p>
              <p className='Donehr'>{item.number_of_perpetual_pairs.toLocaleString()}</p>
              <p className='market-cap'>{item.number_of_futures_pairs.toLocaleString()}</p>

              {/* <p className={item.market_cap_change_24h > 0 ? "green" : "red"}>{Math.floor(item.market_cap_change_24h * 100) / 100}%</p> */}


            </Link>

          ))
        }
      </div>
    </div>
  )
}


export default Derivative
