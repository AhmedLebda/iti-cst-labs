const baseCountryURL = "https://restcountries.com/v2/name";
const baseNeighborURL = "https://restcountries.com/v2/alpha";

// Gets country data (by name)
export async function getCountryData(countryName) {
	const response = await fetch(`${baseCountryURL}/${countryName}`);
	const data = await response.json();
	return data[0];
}

// Gets Neighbor Country data (by abbreviation)
export async function getNeighborData(neighborName) {
	const response = await fetch(`${baseNeighborURL}/${neighborName}`);
	const data = await response.json();
	return data;
}
