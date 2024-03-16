interface CityInterface {
    cityName: string;
    country: string;
    population: number;
}

class City implements CityInterface {
    cityName: string;
    country: string;
    population: number;
    
    constructor(cityName: string, country: string, population: number) {
        this.cityName = cityName;
        this.country = country;
        this.population = population;
    }
}

//let cityArray: CityInterface[] = [];
let cityArray: CityInterface[] = JSON.parse(localStorage.getItem('cities') || '[]');

export const addCity = () => {
    const cityName = (<HTMLInputElement>document.getElementById("cityName")).value;
    const country = (<HTMLInputElement>document.getElementById("country")).value;
    const population = Number((<HTMLInputElement>document.getElementById("population")).value);

    const newCity: CityInterface = {
        cityName: cityName,
        country: country,
        population: population
    };

    cityArray.push(newCity);
    displayCities();

    localStorage.setItem('cities', JSON.stringify(cityArray));
}

document.getElementById("submit")?.addEventListener("click", addCity);

export const displayCities = () => {
    let list = document.getElementById("cityList");
    if(list) {
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
    })
}

displayCities();

export const searchCities = () => {
    const searchInput = (<HTMLInputElement>document.getElementById("searchInput")).value.toLowerCase();

    const searchResults = cityArray.filter(city => {
        return city.cityName.toLowerCase().includes(searchInput) || city.country.toLowerCase().includes(searchInput);
    });

    displaySearchResults(searchResults);
}

export const displaySearchResults = (searchResults: CityInterface[]) => {
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
}