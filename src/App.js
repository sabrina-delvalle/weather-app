import './App.css';
import NavBar from './Component/NavBar';
import Search from './Component/Search';
import Weather from './Component/Weather';
import React, { Component } from 'react';



class App extends Component {

    state = {        
      city: 'New York',
      temp: 0,
      tempMin: 0,
      tempMax: 0,
      pressure: 0,
      humidity: 0,
      windSpeed: 0, 
      coordinates: {lon: 0, lat: 0},
      date: 'Thursday, June 16, 2022 19:58:58',
      image: 'https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-day.svg'
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

    selectWeather = () => {
      let lon = (this.state.coordinates.lon).toString(); 
      let lat = (this.state.coordinates.lat).toString();  
      const key = 'eeb35e5f10a645cca2cef0764c6e63c6';
      const url = `https://api.ipgeolocation.io/timezone?apiKey=${key}&lat=${lat}&long=${lon}`;
      if(this.state.city && this.state.city !=='New York') {
        fetch(url)  
          .then(result => result.json())
          .then(data => { 
            const weather = { ...this.state };
            const date = {date: data.date_time_txt};

            console.log(data);
            console.log(date.date);
            this.setState( {...weather, ...date} );
          })
      }
      // TOMORROW ADJUST TIME BASED WEATHER - AND A DEFAULT!
      if(Math.random() < 0.5)
      return('https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-day.svg');
      else{
        return('https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-night.svg')
      }
    }

    getDate = (newDate) => {
      const weather = {...this.state};
      const w2 = {...weather, ...newDate};
      console.log(w2);
      this.setState( {...weather, ...newDate} )
    }


render() { 
    return ( 
    <div>     
      <NavBar />
      <Search citySearch={this.state.city}
              setCity = { this.setCityNameState }
              setValues = { this.setCityValues }
              dateCity = { this.selectWeather }
      />
      <Weather 
          city={this.state.city}
          temp={this.state.temp}
          tempMin={this.state.tempMin}
          tempMax={this.state.tempMax}
          pressure={this.state.pressure}
          humidity={this.state.humidity}
          windSpeed={this.state.windSpeed}
          date={this.state.date}
          img={this.state.image}
          />
    </div>
    );
  }
}
 
export default App;