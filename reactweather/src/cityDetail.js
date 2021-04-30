import React from 'react';
import axios from 'axios';

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
                <h1>Preview</h1>
                <h2>{this.props.match.params.cityName}</h2>

                {this.state.info ? (
                    <div>
                        {this.state.info.list.map((day, i) => {
                            return (
                                <div key={i}>
                                    <p>Date : {
                                    new Date(day.dt* 1000).toLocaleString("en-US", {weekday: "long", day: "numeric", month: "long"}) }</p>
                                    <p>Température max :{day.temp.max}</p>
                                    <p>Température min :{day.temp.min}</p>
                                    <p>Weather :{day.weather[0].main}</p>
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
            console.log(this.state.info);
        }).catch(error => {
            console.log(error);
        });
    }
}

export default CityDetail;
