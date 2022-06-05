import React from "react";

function Search() {

  function searchCity() {
    const city = 'Caracas';
    const apiKey = '00860ec2ddb411cea1101d789c035f8d';
    let temp = 0;
    let tempMin = 0;
    let tempMax = 0;
    let pressure = 0;
    let humidity = 0;
    let windSpeed = 0;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(url)
      .then(response => response.json())
      .then(data => { 
        console.log(data);
        temp = Math.floor(data.main.temp - 273);
        tempMin = Math.floor(data.main.temp_min - 273);
        tempMax = Math.floor(data.main.temp_max - 273);
        pressure = data.main.pressure;
        humidity = data.main.humidity;
        windSpeed = data.wind.speed;
        console.log('temp ', temp);
        console.log('temp-min: ', tempMin);
        console.log('temp-max: ', tempMax);
        console.log('pressure: ', pressure);
        console.log('humidity: ', humidity);
        console.log('wind speed: ', windSpeed);
        return <p>temp</p>;
      });

  }

  return <div className="search-line">
            <input name="search-bar-principal" type='text' placeholder="search" className="bar-finder"></input>
            <h2>{searchCity()}</h2>
        </div>
}

export default Search;