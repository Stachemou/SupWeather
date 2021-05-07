import React from 'react';
import axios from 'axios';
import { ReactComponent as DeleteIcon } from '../src/assets/x.svg';
import{ ReactComponent as DetailIcon } from '../src/assets/arrow-right-square-fill.svg';
import { Link } from 'react-router-dom';
import './info.css';


class CityInfo extends React.Component {
    state = {
      destroy: false,
      }

    componentDidMount() {
        this.getCity(this.props.name);
    }

    render(){
      if(this.state.destroy){
            return null;
      }
        return (
            <div className='card'>
            {this.state.city ? (
                <div>
                  <div onClick={this.deleteCity}>
                    <DeleteIcon/>
                  </div>
                <ul className='infoList'>
                  <h2>{this.state.city.name}</h2>
                  <li>Température : {this.state.city.main.temp}°C</li>
                  <li>Température max : {this.state.city.main.temp_max}°C</li>
                  <li>Température min : {this.state.city.main.temp_min}°C</li>
                  <li>Météo : {this.state.city.weather[0].main} : {this.state.city.weather[0].description}</li>
                </ul>
                <div className='linkButton' onClick={this.handleClick}>
                <Link to={{pathname: `/detail/${this.props.name}`, state: { user: this.props.user }}}><DetailIcon/></Link>
                  </div>
            </div>):(
                <div>
                <li>No city</li>
                </div>
            )}
            </div>
          )
    }

    getCity(name){
        const params = { q: name, appID: '936402657ed543414d5a08c36ba85176', units: 'metric' };
        axios.get('https://api.openweathermap.org/data/2.5/weather', { params }).then((res) => {
            const city = res.data;
            this.setState({city: city})
          }).catch( error => {
            console.log(error);
          } );
    }

    deleteCity= async ()=>{
      const params = { name: this.state.city.name, userid: this.props.userid, _id: this.props._id };
      axios.delete('http://localhost:3002/home/delete', { params }).then((res) => {
          this.setState({destroy: true})
        }).catch( error => {
          console.log(error);
        } );
    }
    
}

export default CityInfo;