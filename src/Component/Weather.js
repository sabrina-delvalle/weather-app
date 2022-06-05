import React, { Component } from "react";

class Weather extends Component {

  constructor(props){
    super(props);
    this.state = { 
      temp: 0,
      tempMin: 0,
      tempMax: 0,
      pressure: 0,
      humidity: 0,
      windSpeed: 0
    }
  }

  render() {
    return <div className="Weather-Info">
                <div className="weather-op"> Weather
                <br /><br />
                <p>temp: {this.state.temp}</p>
                <p>tempMin: {this.state.tempMin}</p>
                <p>tempMax: {this.state.tempMax}</p>
                <p>pressure: {this.state.pressure}</p>
                <p>humidity: {this.state.humidity}</p>
                <p>windSpeed: {this.state.windSpeed}</p>                
                </div>
                <div className="weather-op">Just a graphic</div>
            </div>;
  }
}

export default Weather;
