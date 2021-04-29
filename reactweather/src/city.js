import React from 'react';
import axios from 'axios';
import CityInfo from './cityInfo';


class CityContainer extends React.Component {
    state = {
        cities: [],
      }

    async componentDidMount() {
      const user = 'test';
      await this.loadAllCity(user);
      //const yo = await this.getCity('Paris')
      //console.log('testsd', yo.name, yo.main.temp, yo.weather[0].main);
    }

    render(){
        return (
          <div>
            {this.state.cities.length > 0 ? (
              <div>{this.state.cities.map((city, i) => {
                    return <CityInfo key= {i} name={city.name} userid={'test'}/>
                  })
                    }

                  </div>
                ):(
                <div>
                    <li>No city</li>
                    </div>)}
            <form onSubmit={this.addNewCity}>
              <input onChange={e => this.setState({newCity: e.target.value})} type="text" id="cityName" name="cityName" required size="10"/>
              <input type="submit" value="PostCity"></input>
            </form>
            </div>
          )
    }

    addNewCity= async (event)=>{
      event.preventDefault();
      const info = await this.getCity(this.state.newCity);
      if(info){
        const params = { name: info.name, temp: info.main.temp, userid: 'test' }; //info.weather[0].main
        axios.post('http://localhost:3002/home/addcity', params ).then((res) => {
            const city = res.data;
            const cities = this.state.cities;
            cities.push(city);
            this.setState({cities});
          }).catch(function (res) {
            console.log(res);
          });
      }
    }

    getCity(name){
      return new Promise((resolve, reject) =>{
        const params = { q: name, appID: '936402657ed543414d5a08c36ba85176', units: 'metric' };
        axios.get('https://pro.openweathermap.org/data/2.5/weather', { params }).then((res) => {
          console.log('l, xv');
            const city = res.data;
            resolve(city);
          }).catch( error => {
            console.log(error);
            reject(error);
          } );
      })
    }

    loadAllCity= async (user)=>{
        const params = { userid: user };
        axios.get('http://localhost:3002/home/all', { params }).then((res) => {
            const cities = res.data;
            this.setState({cities: cities});
          }).catch(function (res) {
            console.log(res);
          });
    }
}

export default CityContainer;