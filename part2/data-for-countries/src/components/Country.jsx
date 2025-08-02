import {useState, useEffect} from 'react'
import weatherService from '../services/weather'

const Country = ({country}) => {
	const [weather, setWeather] = useState(null)

	useEffect(() => {
		weatherService
			.getWeather(country.capital)
			.then(data => setWeather(data))
	}, [country])
	
	let weatherSection = null
	if(weather) {
		weatherSection = (
			<div>
				<h2>Weather in {country.capital}</h2>
				<p>Temperature {weather.main.temp} Celsius</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        />
				<p>Wind: {weather.wind.speed} m/s</p>
			</div>
		)
	}

	return (
		<div>
			<h1>{country.name.common}</h1>
			Capital {country.capital} <br />
			Area {country.area}
			<h2>Languages</h2>
			<ul>
				{ Object.values(country.languages).map((lang, i) => (
				<li key={i}>{lang}</li>
				))}
			</ul>
			<img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
			{weatherSection}
		</div>
	)
}

export default Country