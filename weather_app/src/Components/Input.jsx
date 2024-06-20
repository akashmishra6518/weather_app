import React, { useState } from 'react'
import SearchButton from './SearchButton';
import WeatherDeatilsOfCity from './WeatherDeatilsOfCity';

const Input = () => {
    const[input_data,setInput_data]=useState("");
    const[details,setDetails]=useState({});
    const [flag,setFlag]=useState(true);
    const fetchDataFromChildComponent=(res)=>setDetails(res)
    const checkFirstTime=(res)=>setFlag(res)
  return (
    <>
        <input type="text"
            placeholder='enterr your city  name'
            onChange={e=>setInput_data(e.target.value)}
        />
        <SearchButton input_data={input_data} onChildClick1={fetchDataFromChildComponent}
        onChildClick2={checkFirstTime}/>
        {
            Object.keys(details).length!=0 ? <WeatherDeatilsOfCity details={details}/> :!flag && <p>Not data found</p>
        }
    </>
  )
}

export default Input
