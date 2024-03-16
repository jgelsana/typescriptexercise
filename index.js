"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.displaySearchResults = exports.searchCities = exports.displayCities = exports.addCity = void 0;
class City {
    constructor(cityName, country, population) {
        this.cityName = cityName;
        this.country = country;
        this.population = population;
    }
}
//let cityArray: CityInterface[] = [];
let cityArray = JSON.parse(localStorage.getItem('cities') || '[]');
const addCity = () => {
    const cityName = document.getElementById("cityName").value;
    const country = document.getElementById("country").value;
    const population = Number(document.getElementById("population").value);
    const newCity = {
        cityName: cityName,
        country: country,
        population: population
    };
    cityArray.push(newCity);
    (0, exports.displayCities)();
    localStorage.setItem('cities', JSON.stringify(cityArray));
};
exports.addCity = addCity;
(_a = document.getElementById("submit")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", exports.addCity);
const displayCities = () => {
    let list = document.getElementById("cityList");
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    cityArray.forEach(element => {
        let li = document.createElement("li");
        li.innerText = `{
            city: ${element.cityName},
            country: ${element.country},
            population: ${element.population}
        },`;
        if (list) {
            list.appendChild(li);
        }
    });
};
exports.displayCities = displayCities;
(0, exports.displayCities)();
const searchCities = () => {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const searchResults = cityArray.filter(city => {
        return city.cityName.toLowerCase().includes(searchInput) || city.country.toLowerCase().includes(searchInput);
    });
    (0, exports.displaySearchResults)(searchResults);
};
exports.searchCities = searchCities;
const displaySearchResults = (searchResults) => {
    let list = document.getElementById("cityList");
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    searchResults.forEach(element => {
        let li = document.createElement("li");
        li.innerText = `{
            city: ${element.cityName},
            country: ${element.country},
            population: ${element.population}
        },`;
        if (list) {
            list.appendChild(li);
        }
    });
};
exports.displaySearchResults = displaySearchResults;
