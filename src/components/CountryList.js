import { useState, useEffect } from "react";
import '../styles/nprogress.scss'
import nProgress from "nprogress";
import { Link } from "react-router-dom";

export default function CountryList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [countries, setCountry] = useState([]);
    const [searchItem, setSearchItem] = useState([]);

    useEffect(() => {
      fetch("https://restcountries.com/v2/all")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setCountry(result);
          },

          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    function searchCountries(countries) {
        console.log(countries[0].name, searchItem);
        let newItem = countries.filter(country => country.name.toLowerCase().includes(searchItem));
        console.log(newItem);
        return newItem;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        nProgress.start()
    } else {
      return (
        nProgress.done(),
        <div className="app-container">
            <input type="search" className="search-input" placeholder="Search Country Name..." onChange={(e) => {
                setSearchItem(e.target.value.toLowerCase());
            }}/>
        <div className="list-container">
            
          {searchCountries(countries).map(item => (
            <Link to={`/${item.name}`}>
            <div className="country-card" key={item.name}>
              <div className="card-image">
                <img src={item.flag} alt="flag" />
              </div>
              <div className="country-info">
                <h3>{item.name}</h3>
                <p>Capital: {item.capital}</p>
                <p>Population: {item.population}</p>
                <p>Region: {item.region}</p>
                <p>Subregion: {item.subregion}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
   </div>
      );
    }
  }