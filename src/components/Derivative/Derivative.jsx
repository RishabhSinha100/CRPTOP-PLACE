import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Derivative.css';
import { CoinContext } from '../../context/CoinContext';

const Derivative = () => {
  const [derivative, setDerivative] = useState([]);
  const { currency } = useContext(CoinContext);
  const [loading, setLoading] = useState(true); // Use only one loading state

  // Original API fetching function
  const fetdata = () => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    setLoading(true); // Start loading spinner before fetching data

    fetch('https://api.coingecko.com/api/v3/derivatives/exchanges', options)
      .then((response) => response.json())
      .then((data) => {
        setDerivative(data); // Corrected state name from setdervative to setDerivative
        setLoading(false); // Stop loading spinner after data is fetched
      })
      .catch((err) => {
        console.error('Error fetching derivatives:', err);
        setLoading(false); // Ensure loading is turned off in case of error
      });
  };

  // Ensure the useEffect has a dependency array to avoid infinite loop
  useEffect(() => {
    fetdata();
  }, []); // Empty array means this effect runs once when the component mounts
  
  if (loading) { // Show the spinner while loading
    return (
        <div className='spinner'>
            <div className="spin"></div>
        </div>
    );
}
  return (
    <>
      <div className='hero'>
        <h1>Join <br />The Future of Money</h1>
        <p>Stay Informed with Real-Time Updates on Bitcoin, Ethereum, and the Latest Altcoins at CryptoPlace</p>
      </div>

      <div className='Dhome'>
     
          <div className='Dcrpto-table'>
            <div className='Dtable-layout'>
              <p>#</p>
              <p>Exchange</p>
              <p>Top-Gainer</p>
              <p style={{ textAlign: "center" }}>24h Open Interest</p>
              <p className='Donehr'>Perpetuals</p>
              <p className='Dmarket-cap'>Futures</p>
            </div>
            {derivative.slice(0, 10).map((item, index) => (
              <Link to={`/coin/${item.id}`} className="Dtable-layout" key={index}>
                <p>{index + 1}</p> {/* Changed to index + 1 for correct numbering */}
                <div>
                  <p>{item.name}</p>
                </div>
                <div>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name + " - " + item.symbol}</p>
                </div>
                <p>{currency.Symbol} {item.trade_volume_24h_btc.toLocaleString()}</p>
                <p className='Donehr'>{item.number_of_perpetual_pairs.toLocaleString()}</p>
                <p className='Dmarket-cap'>{item.number_of_futures_pairs.toLocaleString()}</p>
              </Link>
            ))}
          </div>
      
      </div>
    </>
  );
};

export default Derivative;
