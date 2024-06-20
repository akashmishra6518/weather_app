import React from 'react'

const WeatherDeatilsOfCity = (props) => {
    const{main,name}=props.details
  return (
    <>
        <table border={1} style={{height:"100px",width:"500px", marginTop:"7px"}}>
            <thead>
                <tr>
                    <th colSpan={2}>Weather Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>City name</td>
                    <td>{name}</td>
                </tr>
                <tr>
                    <td>Max Temp</td>
                    <td>{main.temp_max}</td>
                </tr>
                <tr>
                    <td>Min Temp</td>
                    <td>{main.temp_min}</td>
                </tr>
                <tr>
                    <td>Pressure</td>
                    <td>{main.pressure}</td>
                </tr>
                <tr>
                    <td>Humidity</td>
                    <td>{main.humidity}</td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default WeatherDeatilsOfCity
