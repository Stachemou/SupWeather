import React from 'react';
import axios from 'axios';

class CityInfo extends React.Component {
    state = {

      }

    async componentDidMount() {
        await this.getCity(this.props.name);
        console.log('ICI', this.state.city);
    }

    render(){
        return (
            <div>
            {this.state.city ? (
                <div>
                <ul>
                  <li>Ville : {this.state.city.name}</li>
                  <li>Température : {this.state.city.main.temp}</li>
                  <li>Température max : {this.state.city.main.temp_max}</li>
                  <li>Température min : {this.state.city.main.temp_min}</li>
                  <li>Météo : {this.state.city.weather[0].main} : {this.state.city.weather[0].description}</li>
                </ul>
            </div>):(
                <div>
                <li>No city</li>
                </div>
            )}
            </div>
          )
    }

    getCity= async (name) =>{
        const params = { q: name, appID: '936402657ed543414d5a08c36ba85176', units: 'metric' };
        axios.get('https://api.openweathermap.org/data/2.5/weather', { params }).then((res) => {
            const city = res.data;
            this.setState({city: city})
            console.log('LA', this.state.city)
          }).catch( error => {
            console.log(error);
          } );
    }
}

export default CityInfo;