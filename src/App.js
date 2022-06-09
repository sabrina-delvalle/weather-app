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
      city: '',
      temp: 5,
      tempMin: 10,
      tempMax: 20,
      pressure: 40,
      humidity: 50,
      windSpeed: 70
    }

    cityOnChange = () => {
      window.addEventListener("keydown",
        (event) => {
            // Enter
          if (event.key === 'Enter') {
            //call the function with the city inserted...

          } else {
            console.log('else!');
            this.setState = { city: this.state.city + event.key}
          }
        })
    }

render() { 
    return ( 
    <div>     
      <NavBar />
      <Search citySearch={this.state.city} onCitySelection={this.cityOnChange}/>
      <Weather 
          city={this.state.city}
          temp={this.state.temp}
          tempMin={this.state.tempMin}
          tempMax={this.state.tempMax}
          pressure={this.state.pressure}
          humidity={this.state.humidity}
          windSpeed={this.state.windSpeed}/>
    </div>
    );
  }
}
 
export default App;