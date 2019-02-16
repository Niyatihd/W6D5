import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp:0
    }

    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather(lat, lon) {
    return $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`,
      type: 'GET',

    }).then(res => console.log(res));
  }


  getCoord() {
    var options = {
      enableHighAccuracy: true,
      timeout: 7000,
      maximumAge: 0
    };

    function success(pos) {
      let that = this;
      var crd = pos.coords;
      // console.log(crd.latitude);
      let lat = Math.floor(crd.latitude);
      let lon = Math.floor(crd.longitude);

      return $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=f816d7f39052e3a98b21952097a43076`,
        type: 'GET',

      }).then(res => that.setState({temp: res.main.temp}));
      // this.fetchWeather(Math.floor(crd.latitude), Math.floor(crd.longitude));
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options); }

  
  componentDidMount(){
    // this.fetchWeather();
    this.getCoord();
  }

  render() {
    return (
      <h1>{this.state.temp}</h1>
    )
  }
}
export default Weather;