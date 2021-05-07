import React from 'react';
import axios from 'axios';
import CityInfo from './cityInfo';
import './info.css';


class CityContainer extends React.Component {
    state = {
        cities: [],
      }

    async componentDidMount() {
      await this.loadAllCity(this.props.user._id);
    }

    render(){
        return (
          <div>
            {this.state.cities.length > 0 ? (
              <div className='containe'>{this.state.cities.map((city, i) => {
                    return <CityInfo key= {i} name={city.name} userid={this.props.user._id} user={this.props.user} _id={city._id}/>
                  })
                    }

                  </div>
                ):(
                <div>
                    <li>No city</li>
                    </div>)}
            <form id="addCity" onSubmit={this.addNewCity}>
              <input onChange={e => this.setState({newCity: e.target.value})} type="text" id="cityName" name="cityName" required size="10"/>
              <input type="submit" value="Add new city"></input>
            </form>
            </div>
          )
    }

    addNewCity= async (event)=>{
      event.preventDefault();
      const city = this.escapeHtml(this.state.newCity);
      const info = await this.getCity(city);
      if(info){
        const params = { name: info.name, temp: info.main.temp, userid: this.props.user._id };
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
            const city = res.data;
            resolve(city);
          }).catch( error => {
            console.log(error);
            reject(error);
          } );
      })
    }

    loadAllCity= async (id)=>{
        const params = { userid: id };
        axios.get('http://localhost:3002/home/all', { params }).then((res) => {
            const cities = res.data;
            this.setState({cities: cities});
          }).catch(function (res) {
            console.log(res);
          });
    }

    escapeHtml(text) {
      var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      };
      
      return text.replace(/[&<>"']/g, function(m) { return map[m]; });
    }
}

export default CityContainer;