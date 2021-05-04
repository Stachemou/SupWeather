import React from 'react';
import axios from 'axios';
import './detail.css';
import NavBar from './navBar';

class CityDetail extends React.Component {
    state = {
        info: null,
    }

    componentDidMount() {
        this.getCity(this.props.match.params.cityName);
    }

    render() {
        console.log(this);
        return (
            <div>
                <NavBar user={this.props.location.state.user} />
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
