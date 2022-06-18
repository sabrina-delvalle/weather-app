import './App.css';
import NavBar from './Component/NavBar';
import Search from './Component/Search';
import Weather from './Component/Weather';
import React, { Component } from 'react';



class App extends Component {

    state = {        
      city: '',
      temp: 0,
      tempMin: 0,
      tempMax: 0,
      pressure: 0,
      humidity: 0,
      windSpeed: 0, 
      coordinates: {lon: -74.006, lat: 40.7143},
      date: 'Thursday, June 16, 2022 19:58:58',
      hour: '',
      weather: '',
      image: 'https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/partly-cloudy-day.svg'
    }

    setCityNameState = cityName => {
      const words = cityName.split(' ');
      const cityN =  words.map(word => {
        return word[0].toUpperCase() + word.substring(1);
      }).join(' ');

    //console.log(cityN);
         
      //const cityN = cityName.charAt(0).toUpperCase() + cityName.slice(1);
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

      if(this.state.city) {
        let lon = (this.state.coordinates.lon).toString(); 
        let lat = (this.state.coordinates.lat).toString();  
        const key = 'eeb35e5f10a645cca2cef0764c6e63c6';
        const url = `https://api.ipgeolocation.io/timezone?apiKey=${key}&lat=${lat}&long=${lon}`;
        fetch(url)  
          .then(result => result.json())
          .then(data => { 
            const weather = { ...this.state };
            const date = {date: data.date_time_txt, hour: data.time_24.slice(0, 2)};
            let dayTime = {image: ""};
            const clouds = this.state.weather;
            console.log(data);
            console.log(date.date);
            console.log(Number(date.hour));
            this.setState({...weather, ...date, ...dayTime});
/*             if(clouds === 'Clouds'){
              dayTime = {image: "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/cloudy.svg"};
              this.setState({...weather, ...date, ...dayTime});
            }else  */
            if( clouds ==="Haze" ){
              dayTime = {image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/mist.svg"};
              this.setState({...weather, ...date, ...dayTime});
            }else if( clouds ==="Rain" ){
              dayTime = {image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg"};
              this.setState({...weather, ...date, ...dayTime});
            }else if ( clouds === "Clear" ){
              if(Number(date.hour) <= 6 || Number(date.hour) >= 18){
                dayTime = {image: "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-night.svg"};
                this.setState({...weather, ...date, ...dayTime});
              }
            }else{
              if(Number(date.hour) >= 6 && Number(date.hour) <= 18) {
                if(clouds === "Clear" ){
                  dayTime = {image: "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-day.svg"};
                  this.setState({...weather, ...date, ...dayTime});
                }else if( clouds === 'Clouds'){
                  dayTime = {image: "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/partly-cloudy-day.svg"};
                  this.setState({...weather, ...date, ...dayTime});
                }else if( clouds === "Drizzle"){
                  dayTime = {image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-drizzle.svg"};
                  this.setState({...weather, ...date, ...dayTime});
                }
              }else{
                if(clouds === "Clear" ){
                  dayTime = {image: "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-night.svg"};
                  this.setState({...weather, ...date, ...dayTime});
                }else if( clouds === 'Clouds'){
                  dayTime = {image: "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/partly-cloudy-night.svg"};
                  this.setState({...weather, ...date, ...dayTime});
                }else if( clouds === "Drizzle"){
                  dayTime = {image: "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/partly-cloudy-night-drizzle.svg"};
                  this.setState({...weather, ...date, ...dayTime});
              }
            }
          }
        })
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
    <div className='fullApp'>     
      <NavBar />
      <Search citySearch={this.state.city}
              setCity = { this.setCityNameState }
              setValues = { this.setCityValues }
              dateCity = { this.selectWeather }
              temp = {this.state.temp}
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