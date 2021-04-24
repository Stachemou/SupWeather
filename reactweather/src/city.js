import React from 'react';
import axios from 'axios';

class CityContainer extends React.Component {
    state = {
        city: null,
      }

    componentDidMount() {
        const params = { q: 'Paris', appID: '936402657ed543414d5a08c36ba85176', units: 'metric' };
        axios.get('https://api.openweathermap.org/data/2.5/weather', { params }).then((res) => {
            const city = res.data;
            this.setState({ city });
            console.log(city);
          }).catch(function (res) {
            console.log(res);
          });
    }

    render(){
        return (
            <ul>
            {this.state.city ? (
            <div>
                <li>{this.state.city.name}</li>
                <li>{this.state.city.weather[0].main}</li>
                <li>{this.state.city.main.temp}</li>
                </div>
                ):(
                <div>
                    <li>PUTAIN DE SA RACE</li>
                    </div>)}

            </ul>
          )
    }
}

export default CityContainer;