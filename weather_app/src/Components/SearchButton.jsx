import React, { useState } from 'react'
import axios from 'axios'

const SearchButton = (props) => {
    const clickHandler=async()=>{
        try{
            const res=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${props.input_data}&appid=63cde08641f074c4d418c8034f889f95&units=metric`)
            if(!res.statusText)return;
            props.onChildClick1(res.data)
            props.onChildClick2(true)
        }
        catch(error){
            props.onChildClick1({})
            props.onChildClick2(false);
        }
    }
  return (
    <>
        <button onClick={clickHandler}>Search</button>
    </>
  )
}

export default SearchButton
