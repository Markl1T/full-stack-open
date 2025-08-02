import axios from 'axios'

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY

const getWeather = (city) => {
  return axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => response.data)
}

export default {getWeather}