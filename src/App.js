import './App.css';
import NavBar from './Component/NavBar';
import Search from './Component/Search';
import Weather from './Component/Weather';
import React, { Component } from 'react';



class App extends Component {

/*   constructor(props) {
    super(props);
      this.state = { 
        city: '',
        temp: 5,
        tempMin: 10,
        tempMax: 20,
        pressure: 40,
        humidity: 50,
        windSpeed: 70
      }
    } */

    state = {        
      city: 'New York',
      temp: 0,
      tempMin: 0,
      tempMax: 0,
      pressure: 0,
      humidity: 0,
      windSpeed: 0, 
      coordinates: {lon: 0, lat: 0},
      weather: ''
    }

    setCityNameState = cityName => {
      const cityN = cityName.charAt(0).toUpperCase() + cityName.slice(1);
      this.setState( { city: cityN } );
    }

    setCityValues = (cityValues) => {
      const weather = {...this.state};
      //console.log(weather);
      //console.log('here in cityValues', cityValues);
      const w2 = {...weather, ...cityValues};
      console.log(w2);
      this.setState ( { ...weather, ...cityValues } )
    }



render() { 
    return ( 
    <div>     
      <NavBar />
      <Search citySearch={this.state.city}
              setCity = { this.setCityNameState }
              setValues = { this.setCityValues }
      />
      <Weather 
          city={this.state.city}
          temp={this.state.temp}
          tempMin={this.state.tempMin}
          tempMax={this.state.tempMax}
          pressure={this.state.pressure}
          humidity={this.state.humidity}
          windSpeed={this.state.windSpeed}
          coords={this.state.coordinates}
          sense={this.state.weather}
          />
    </div>
    );
  }
}
 
export default App;