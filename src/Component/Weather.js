import React, { Component } from "react";

class Weather extends Component {

  render() {
    const { city, temp, tempMin, tempMax, pressure, humidity, windSpeed } = this.props;
    return <div className="Weather-Info">
                <div className="weather-op"> Weather
                <br /><br />
                <p> city {city}</p>
                <p>temp: {temp}</p>
                <p>tempMin: {tempMin}</p>
                <p>tempMax: {tempMax}</p>
                <p>pressure: {pressure}</p>
                <p>humidity: {humidity}</p>
                <p>windSpeed: {windSpeed}</p>                
                </div>
                <div className="weather-op">Just a graphic</div>
            </div>;
  }
}

export default Weather;
