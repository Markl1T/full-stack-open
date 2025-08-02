import Country from './Country'

const Countries = ({countriesToShow, setSearch}) => {
	if(countriesToShow) {
		if(countriesToShow.length > 10) {
			return <div>Too many matches, specify another filter</div>
		}
		if(countriesToShow.length === 1) {
			return (
				<div>
					<Country country={countriesToShow[0]} />
				</div>
			)
		}
		return (
			<div>
				{ countriesToShow.map(c => <div key={c.name.common}>{c.name.common} 
					<button onClick={() => setSearch(c.name.common)}>show</button></div>) }
			</div>
		)
	}
}

export default Countries