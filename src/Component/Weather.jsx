import React, { Component } from "react";

class Weather extends Component {

  render() {
    const { city, temp, tempMin, tempMax, pressure, humidity, windSpeed, coords } = this.props;
    return <div className="Weather-Info">
                <div className="weather-op"> <strong className="titleW"> Weather </strong>
                <br /><br />
                <div className="twoColumns">
                  <div>
                      <p>City: <span className="result">{city}</span></p>
                      <p>Temp: <span className="result">{temp} ºC</span></p>
                      <p>Temp-Min: <span className="result">{tempMin} ºC</span></p>
                      <p>Temp-Max: <span className="result">{tempMax} ºC</span></p>
                  </div>
                  <div>
                      <p>Pressure: <span className="result">{pressure} mbar</span></p>
                      <p>Humidity: <span className="result">{humidity} %</span></p>
                      <p>Wind Speed: <span className="result">{windSpeed}  km/h</span></p>    
                  </div>
                </div>
                </div>
                <div className="weather-op2">< br />
                  <img src={this.selectWeather(city, coords)} alt="weather" className="imgWeather" />
                  <p className="timeW">17:33 14Jun-Mon</p>
                </div>
            </div>;
  }

  selectWeather(city, coords){
    let lon = (coords.lon).toString(); 
    let lat = (coords.lat).toString();  
    const key = 'eeb35e5f10a645cca2cef0764c6e63c6';
    const url = `https://api.ipgeolocation.io/timezone?apiKey=${key}&lat=${lat}&long=${lon}`;
    if(city  && city !=='New York') {
      fetch(url)  
        .then(result => result.json())
        .then(data => {
          console.log(data);
        })
    }
    if(Math.random() < 0.5)
    return('https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-day.svg');
    else{
      return('https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-night.svg')
    }
  }

/*   selectTime(city, coords){ 
      let lon = (coords.lon).toString(); 
      let lat = (coords.lat).toString();  
      //console.log(lon);
      //console.log(lat);
      const key = 'eeb35e5f10a645cca2cef0764c6e63c6';
      const url = `https://api.ipgeolocation.io/timezone?apiKey=${key}&lat=${lat}&long=${lon}`;
      if(city  && city !=='New York') {
      let time = fetch(url)  
          .then(result => result.json())
          .then(data => {
            console.log(data)
            console.log(data.time_24)
            return data.time_24;
            }) 
            return(time);
      }
    } */

}

export default Weather;
