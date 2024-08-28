// import React, { useContext, useEffect, useState } from 'react'
// import './Home.css'
// import { CoinContext } from '../../context/CoinContext'
// import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
// import Chart from 'react-google-charts'
// import Homelinechart from '../../components/Homelinechart/Homelinechart'
 


// const Home = () => {




//     const{allCoin,currency}=useContext(CoinContext)
//     const [displayCoin,setdsiplayCoin]=useState([]);
//     const [input,setInput]=useState('');
    


//     const InputHandler=(event)=>{
//     setInput(event.target.value);
//     if(event.target.value===""){
//         setdsiplayCoin(allCoin)
//     }
//     }

//      const searchHandler=async(event)=>{
//              event.preventDefault();
//             const coins =await allCoin.filter((item)=>{
//               return   item.name.toLowerCase().includes(input.toLowerCase())
//              })
//              setdsiplayCoin(coins);
//      }

//     useEffect(()=>{
//     setdsiplayCoin(allCoin);
//     },[allCoin])
//      if(allCoin){
//     return (
//         <div className='home'>
//             <div className='hero'>
//                 <h1>Largest<br />Crypto Marketplace</h1>
//                 <p>Welcome to the World's largest cryptocurrency marketplace. Sign up to explore more about cryptro.</p>

//                 <form onSubmit={searchHandler}>
//                     <input onChange={InputHandler} list='coinlist' value={input} type="text" placeholder='Search crypto..'required />

//                     <datalist id='coinlist'>
//                         {allCoin.map((item,index)=>(<option key={index} value={item.name}/>))}
//                     </datalist>
//                     <button type='submit'>Search</button>
//                 </form>
//             </div>

//             <div className='crpto-table'>
//                 <div className='table-layout'>
//                     <p>#</p>
//                     <p>coins</p>
//                     <p>Price</p>
//                     <p style={{textAlign:"center"}}>24h</p>
//                      <p className='onehr'>24h Volume</p>
//                      <p className='market-cap'>Market Cap</p>
//                      {/* <p className='market-cap'>Market Cap</p> */}




//                 </div>
//                       {
//                         displayCoin.slice(0,20).map((item,index)=>(

//                             <Link to={`/coin/${item.id}`}className="table-layout" key={index}>
//                                 <p>{item.market_cap_rank}</p>
//                                 <div>
//                                     <img src={item.image} alt=""/>
//                                     <p>{item.name + " - " +item.symbol}</p> 
//                                 </div>
//                                 <p>{currency.Symbol} {item.current_price.toLocaleString()}</p>
//                                 <p className={item.price_change_percentage_24h>0?"green":"red"}>{Math.floor(item.price_change_percentage_24h*100)/100}%</p>

//                                 <p className='onehr'>{currency.Symbol} {item.total_volume.toLocaleString()}</p>
//                                 <p className='market-cap'>{currency.Symbol}{item.market_cap.toLocaleString()}</p>
      
                              
                                
//                             </Link>
                           
//                         ))
//                       }
//             </div>
//         </div>
//     )
// }
// else{
//     return (
//         <div className='spinner'>
//           <div className="spin"></div>
//         </div>
//       )
// }
// }

// export default Home

// ****************************************** after adding the realod in home.jsx***************************************************************

import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Home = () => {
    const { allCoin, currency } = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(true); // Added loading state

    const InputHandler = (event) => {
        setInput(event.target.value);
        if (event.target.value === "") {
            setDisplayCoin(allCoin);
        }
    }

    const searchHandler = async (event) => {
        event.preventDefault();
        const coins = await allCoin.filter((item) => {
            return item.name.toLowerCase().includes(input.toLowerCase());
        });
        setDisplayCoin(coins);
    }

    useEffect(() => {
        if (allCoin.length > 0) { // Check if allCoin is populated
            setLoading(false); // Stop the spinner
        }
        setDisplayCoin(allCoin);
    }, [allCoin]);

    if (loading) { // Show the spinner while loading
        return (
            <div className='spinner'>
                <div className="spin"></div>
            </div>
        );
    }

    return (
        <div className='home'>
            <div className='hero'>
                <h1>Largest<br />Crypto Marketplace</h1>
                <p>Welcome to the World's largest cryptocurrency marketplace. Sign up to explore more about crypto.</p>

                <form onSubmit={searchHandler}>
                    <input onChange={InputHandler} list='coinlist' value={input} type="text" placeholder='Search crypto..' required />
                    <datalist id='coinlist'>
                        {allCoin.map((item, index) => (<option key={index} value={item.name} />))}
                    </datalist>
                    <button type='submit'>Search</button>
                </form>
            </div>

            <div className='crpto-table'>
                <div className='table-layout'>
                    <p>#</p>
                    <p>coins</p>
                    <p>Price</p>
                    <p style={{ textAlign: "center" }}>24h</p>
                    <p className='onehr'>24h Volume</p>
                    <p className='market-cap'>Market Cap</p>
                </div>
                {
                    displayCoin.slice(0, 20).map((item, index) => (
                        <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
                            <p>{item.market_cap_rank}</p>
                            <div>
                                <img src={item.image} alt="" />
                                <p>{item.name + " - " + item.symbol}</p>
                            </div>
                            <p>{currency.Symbol} {item.current_price.toLocaleString()}</p>
                            <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>{Math.floor(item.price_change_percentage_24h * 100) / 100}%</p>
                            <p className='onehr'>{currency.Symbol} {item.total_volume.toLocaleString()}</p>
                            <p className='market-cap'>{currency.Symbol}{item.market_cap.toLocaleString()}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;

