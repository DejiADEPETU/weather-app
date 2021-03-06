import React from 'react';
import './App.css';
import axios from 'axios';
import Weather from './components/Weather';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: null,
    }
  }

  componentDidMount() {
    // this.getWeatherData();
  }

  // async getWeatherData() {
  //   try {
  //     const response = await axios.get('');
      
  //     this.setState({ weather: response.data });
  //   } catch(error) {
  //     console.error(error);
  //   }
  // }

  getWeatherData() {
    axios.get('')
    .then(response => {
      // console.log(response.data);
      this.setState({ weather: response.data });
    }).catch(error => console.error(error));
  }

  nullcheck() {
    if(this.state.weather === null) {
      return <h2>no information</h2>
    } else {
      this.state.weather.list.map(listItem => <Weather />);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            this.nullcheck()
          }
        </header>
      </div>
    );
  }
}

export default App;