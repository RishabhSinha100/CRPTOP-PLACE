import React, { useContext, useEffect, useState } from 'react'
import './coin.css'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext';
import Linechart from '../../components/Linechart/Linechart'


const coin = () => {


  const { coinId } = useParams();

  const [coinData, setCoindata] = useState();
  const [historicalData, sethistoricalData] = useState();

  const { currency } = useContext(CoinContext);

  const fetchcoindeta = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-M8K5Y126s5pjRdKKzzMZaFrF' }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(response => response.json())
      .then(response => setCoindata(response))
      .catch(err => console.error(err));
  }



  const fetchhistoricaldata = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-M8K5Y126s5pjRdKKzzMZaFrF' }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
      .then(response => response.json())
      .then(response => sethistoricalData(response))
      .catch(err => console.error(err));
  }



  useEffect(() => {
    fetchcoindeta();
    fetchhistoricaldata();
  }, [currency])
  if (coinData && historicalData) {
    return (
      <div className='coin'>

        <div className="coinname">
          <img src={coinData.image.large} alt="" />
          <p><b>{coinData.name}({coinData.symbol.toUpperCase()})</b></p>
          
        </div>
        <div className="coinchart">
          <Linechart historicalData={historicalData} />
        </div>
    <div className="pera">

          <p>{coinData.description.en.slice(0,500)}</p>
    </div>
        <div className="coin-info">

          <ul>
            <li>Crypto Market Rank</li>
            <li># {coinData.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Current price</li>
            <li>{currency.Symbol}{coinData.market_data.current_price[currency.name].toLocaleString()}</li>
          </ul>
          <ul>
            <li>Market cap</li>
            <li>{currency.Symbol}{coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
          </ul>
          <ul>
            <li>24 Hour high</li>
            <li>{currency.Symbol}{coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
          </ul>
          <ul>
            <li>24 Hour low</li>
            <li>{currency.Symbol}{coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
          </ul>
        </div>

      </div>
    )
  }
  else {
    return (
      <div className='spinner'>
        <div className="spin"></div>
      </div>
    )
  }

}

export default coin
