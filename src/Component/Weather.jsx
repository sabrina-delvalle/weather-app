import React, { Component } from "react";

class Weather extends Component {

  render() {
    const { city, temp, tempMin, tempMax, pressure, humidity, windSpeed, date, img } = this.props;
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
                  <img src={img} alt="weather img" className="imgW"></img>
                  <p className="cityPrint">{temp} ºC</p>
                  <p className="timeW">{date}</p>

                </div>
            </div>;
  }
}

export default Weather;
