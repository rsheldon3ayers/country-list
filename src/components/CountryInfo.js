import { useState, useEffect } from "react";
import '../styles/nprogress.scss'
import nProgress from "nprogress";
import { Link, useParams } from 'react-router-dom';


export default function CountryInfo() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [country, setCountry] = useState([]);

    const { name } = useParams();
    console.log(name);
    useEffect(() => {
      fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            console.log('NEW RESULT', result);
            setCountry(result[0]);
          },

          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

   

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        nProgress.start()
    } else {
      return (
        
        nProgress.done(),
        <div className="app-container">
           
        <div className="internal-list-container">
            
          {
            
            <div className="internal-country-card" key={country.name.common}>
                <h1>{country.name.common}</h1>
              <div className="card-image">
                <img src={country.flags.png} alt="flag" />
              </div>
              <div className="country-information">
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Subregion: {country.subregion}</p>
              </div>
              <Link to={`/`}>Back to list</Link>
            </div>
            
              }
        </div>
   </div>
      );
    }
  }