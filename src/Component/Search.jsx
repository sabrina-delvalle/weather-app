import React, { useState } from "react";

function Search (props) {

  const [ cityName, setCityName ] = useState('');

   function searchCity(c) {
    let city = c;
    const apiKey = '00860ec2ddb411cea1101d789c035f8d';
    let valuesId = {};
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(url)
      .then(response => response.json())
      .then(data => { 
        valuesId = { temp: Math.floor(data.main.temp - 273.15), tempMin: Math.floor(data.main.temp_min - 273.15), tempMax: Math.floor(data.main.temp_max - 273.15), pressure: data.main.pressure, humidity: data.main.humidity, windSpeed: data.wind.speed, coordinates: data.coord, weather: data.weather[0].main};
        console.log(data);
        props.setValues(valuesId);
        props.dateCity();    //coords of city to wait
        city = '';
        return city;
      });
    }

  function handleChange(event) {
    //console.log(event.target.value);
    // console.log(event);
    // console.log(event.key);
    if (event.key === 'Enter') {
      //console.log(cityName);

      props.setCity(event.target.value);

      searchCity(cityName);
      setCityName ( '' );
      event.target.value = '';

    } else if (event.key === 'Backspace') {
      setCityName( cityName.slice(0, cityName.length - 1) );
    } else if (event.key === 'Shift' || event.key === 'Control' || event.key === 'Alt') {
      setCityName( cityName );
    } else {
      setCityName( cityName + event.key );
    }
  }

  return <div><div className="search-line"><div></div>
  <input name="search-bar-principal" type='text' placeholder="search here!" className="bar-finder" onKeyDown={handleChange}></input>
  </div>
  <h2 className="cityPrev">here the city: <span className="cityPrint">{props.citySearch}</span></h2>
  </div>
}

export default Search;