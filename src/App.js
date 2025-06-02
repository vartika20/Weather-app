import React from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = React.useState({});
  const [location, setLocation] = React.useState('Delhi');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=5087ca3e63ab06595c77836942c0873e`;
  
  const searchLoctaion = (event) => {
    if(event.key === 'Enter'){
      axios.get(url).then((response) =>{
        setData(response.data);
        console.log(response.data);
      })
      setLocation('');
    }
  }

  return (
  <div className="app">
    <div className="search">
      <input 
        type="text" 
        placeholder="Enter Location" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={(e) => searchLoctaion(e)} 
      />
      </div>
    <div className="container">
      <div className="top">
        <div className="location">
          <p>{data.name}</p>
        </div>
        {data.main && <div className="temp">
          <h1>{data.main.temp.toFixed()}°F</h1> 
         </div>}
        <div className="description">
         {data.weather &&  <p>{data.weather[0].description}</p>}
          </div>
      </div>
     {data.name !== undefined &&  <div className='bottom'>
        <div className="feels">
          {data.main && <p className='bold'>{data.main.feels_like.toFixed()}°F</p>}
          <p>Feels Like</p>
        </div>
        <div className="humidity">
          {data.main && <p className='bold'>{data.main.humidity.toFixed()}%</p>}
          <p>Humidity</p>
        </div>
        <div className="wind">
          {data.wind && <p className='bold'>{data.wind.speed.toFixed()} mph</p>}
          <p>Wind Speed</p>
        </div>  
      </div>}
      </div>
   
  </div>
  );
}

export default App;
