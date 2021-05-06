import React from 'react';
import axios from 'axios';
import './detail.css';
import NavBar from './navBar';
import { Link } from 'react-router-dom';

import cloudy from './assets/cloudy_light.png';
import snow from './assets/snow.png';
import storm from './assets/storm.png';
import mist from './assets/mist.png';
import rain from './assets/rain.png';
import showerRain from './assets/shower_rain.png';
import brokenCloud from './assets/broken_cloud.png';

import sunny from './assets/sunny.png'

const assets = {'01d': sunny, '02d': cloudy, '03d': brokenCloud, '04d': brokenCloud, '09d': showerRain, '10d': rain, '11d': storm, '13d': snow, '50d': mist};

class CityDetail extends React.Component {
    state = {
        info: null,
    }

    componentDidMount() {

        this.getCity(this.props.match.params.cityName);
    }

    render() {
        return (
            <div>
                <NavBar user={this.props.location.state.user} />
                <Link to={{pathname: `/`}}>Back</Link>
                <h1>Preview</h1>
                <h2>{this.props.match.params.cityName}</h2>
                {this.state.info ? (
                    <div className='container'>
                        {this.state.info.list.map((day, i) => {
                            return (
                                <div key={i} className='forecastContainer'>
                                    <h3>{
                                        new Date(day.dt * 1000).toLocaleString("en-US", { weekday: "long", day: "numeric", month: "long" })}
                                    </h3>
                                    <div>
                                    <img src={assets[day.weather[0].icon]} alt={day.weather[0].icon} width={'200px'}/>
                                        <p>{day.weather[0].main}</p>
                                        <p>{day.weather[0].description}</p>
                                    </div>
                                    <div className='temp'>
                                        <div className='blockInfo'>
                                            <p><strong>Morning : </strong>{day.temp.morn.toFixed(0)} °C</p>
                                            <p><strong>Day : </strong>{day.temp.day.toFixed(0)}°C</p>
                                        </div>
                                        <div className='blockInfo'>
                                            <p><strong>Feels like : </strong>{day.feels_like.morn.toFixed(0)}°C</p>
                                            <p><strong>Feels like: </strong>{day.feels_like.day.toFixed(0)}°C</p>
                                        </div>
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Press: {day.pressure} hPA</td>
                                                <td>Humidity: {day.humidity} %</td>
                                            </tr>
                                            <tr>
                                                <td>Wind: {(day.speed * 3.6).toFixed(1)} km/h</td>
                                                <td>Orientation: {day.deg + 180}°</td>
                                            </tr>
                                            <tr>
                                                <td>Sunrise: {new Date(day.sunrise * 1000).toLocaleString("en-US", { hour: "numeric", minute: "numeric" })}</td>
                                                <td>Sunset: {new Date(day.sunset * 1000).toLocaleString("en-US", { hour: "numeric", minute: "numeric" })}</td>
                                            </tr>
                                        </tbody>
                                    </table>                   
                                </div>
                            )
                        })
                        }
                    </div>
                ) : (<p></p>)}
            </div>
        )
    }

    getCity(name) {
        const params = { q: name, appID: '936402657ed543414d5a08c36ba85176', units: 'metric', cnt: 7 };
        axios.get('https://pro.openweathermap.org/data/2.5/forecast/daily', { params }).then((res) => {
            const infos = res.data;
            this.setState({ info: infos });
        }).catch(error => {
            console.log(error);
        });
    }
}

export default CityDetail;
