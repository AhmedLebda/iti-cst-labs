import { getCountryData, getNeighborData } from "./api/api.js";

renderCountryCards("egypt");

async function renderCountryCards(countryName) {
	const countryData = await getCountryData(countryName);
	const neighborCountryData = await getNeighborData(countryData.borders[1]);
	const { flag, name, region, population, languages, currencies } =
		countryData;
	const {
		flag: nFlag,
		name: nName,
		region: nRegion,
		population: nPopulation,
		languages: nLanguages,
		currencies: nCurrencies,
	} = neighborCountryData;

	const countryCard = createCountryCard(
		flag,
		name,
		region,
		population,
		languages,
		currencies
	);
	const NeighborCountryCard = createCountryCard(
		nFlag,
		nName,
		nRegion,
		nPopulation,
		nLanguages,
		nCurrencies
	);

	document.querySelector("#result").appendChild(countryCard);
	document.querySelector("#result").appendChild(NeighborCountryCard);
}

// Creates a country card
function createCountryCard(flagSrc, name, region, population, lang, curr) {
	const countryCard = document.createElement("div");
	countryCard.classList.add("country-card");

	const countryFlag = document.createElement("img");
	countryFlag.src = flagSrc;

	const countryName = document.createElement("h2");
	countryName.textContent = name;

	const regionElement = document.createElement("span");
	regionElement.textContent = region;

	const populationElement = document.createElement("p");
	populationElement.textContent = `${population} People`;
	const language = document.createElement("p");
	language.textContent = `Language: ${lang[0].name}`;
	const currency = document.createElement("p");
	currency.textContent = `Currency: ${curr[0].name}`;

	countryCard.appendChild(countryFlag);
	countryCard.appendChild(countryName);
	countryCard.appendChild(regionElement);
	countryCard.appendChild(populationElement);
	countryCard.appendChild(language);
	countryCard.appendChild(currency);

	return countryCard;
}
