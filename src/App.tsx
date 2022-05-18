import { Input } from "./components/Input";
import React from "react";
import axios from 'axios'
import {useState, useEffect} from 'react'




const App: React.FC = () => {

  // console.log(new Date().toLocaleString()) 
  //drois ganaxleba yovel wamshi tbilisis droit !
  const [time, setTime] = useState(new Date().toLocaleString())

  const timeUpdateInEverySeconds = () => {
      setInterval(() => {
       setTime(new Date().toLocaleString())
      }, 1000)
  } 

  useEffect(() => {
    timeUpdateInEverySeconds()
  }, [time])
 
  const [degrees, setDegrees] = useState(null)
  const [location, setLocation] = useState(null)
  const [userLocation, setUserLocation] = useState("")
  const [description, setDescription] = useState("")
  const [icon, setIcon] = useState("")
  const [humidity, setHumidity] = useState(null)
  const [wind, setWind] = useState(null)
  const [country, setCountry] = useState("")
  const [dataFetched, setDataFetched] = useState(false)


  const fetchData = async(e: any) => {
    e.preventDefault()
      
    try {

      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      const data = await res.data
   
      setDegrees(data.main.temp)
      setLocation(data.name)
      setDescription(data.weather[0].description)
      setIcon(data.weather[0].icon)
      setHumidity(data.main.humidity)
      setWind(data.wind.speed)
      setCountry(data.sys.country)
      setDataFetched(true)
  
    }catch(err) {
        alert("გთხოვთ სწორად მიუთითოდ ლოკაცია :)")
    }
   
  }

  const defaultDataFetched = async() => {
    if(!dataFetched) {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=tbilisi&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      const data = await res.data
   
      setDegrees(data.main.temp)
      setLocation(data.name)
      setDescription(data.weather[0].description)
      setIcon(data.weather[0].icon)
      setHumidity(data.main.humidity)
      setWind(data.wind.speed)
      setCountry(data.sys.country)
    }
}

useEffect(() => {
  defaultDataFetched()
})


  return (
    <div className="App">
      <div className="weather">
         <Input 
         text={(e: any) => setUserLocation(e.target.value)}
         submit={fetchData}
         func={fetchData}
         />
      <div className="weather_display">
        <h3 className="weather_location">Weather in {location}</h3>
        <div>
          <h1 className="weather_degrees">{degrees} °C</h1>
        </div>
        <div className="weather_description">
          <div>
            <div className="weather_description_head">
             <span className="weather_icon">
               <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather-icon" />
             </span>
             <h3>{description}</h3>
            </div>
            <h3>Humidity: {humidity}%</h3>
            <h3>Wind speed: {wind} m/s</h3>
          </div>
          <div className="weather_country">
            <h3>{country}</h3>
            <h1 className="weather_date">{time}</h1>
          </div>
        </div>
      </div>
      </div>
    </div>
  );

}

export default App;

