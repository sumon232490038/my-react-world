import { useEffect, useState } from "react";
import Country from "../../Country/Country";
import "./Countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedcountries, setVisitedcountries] = useState([]);
  const [visitedflags, setVisitedFlags] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const visitedCountry = (country) => {
    const newVisitedCountries = [...visitedcountries, country];
    setVisitedcountries(newVisitedCountries);
  };
  const visitedflag = (flag) => {
    console.log("flag visied");
    const newFlag = [...visitedflags, flag];
    setVisitedFlags(newFlag);
  };
  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <div className="flagscss">
        {visitedflags.map((flag, idx) => (
          <img key={idx} src={flag}></img>
        ))}
      </div>
      <div>
        <h3>Visited countries: {visitedcountries.length}</h3>
        <ul>
          {visitedcountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className={`countriescss `}>
        {countries.map((country) => (
          <Country
            key={country.cca3}
            visitedCountry={visitedCountry}
            visitedflag={visitedflag}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
