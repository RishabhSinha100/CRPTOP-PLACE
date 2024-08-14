import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

    const Homelinechart = ({historicalchartdata}) => {

   const [data , setData]=useState([["Date","Prices"]]);

    useEffect(()=>{
      let datacopy=[["Date","Prices"]];
       if(historicalchartdata.prices){
        historicalchartdata.prices.map((item)=>{
          datacopy.push([`${new Date(item[0]).toLocaleDateString()
          .slice(0,-5)}`,item[1]])
        })

        setData(datacopy);
       }
    },[historicalchartdata])
  return (
   <Chart
    chartType='LineChart'
    data={data}
    height="100%"
    legendToggle
   />
  )
}


export default Homelinechart

