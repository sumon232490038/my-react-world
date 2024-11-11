import { useState } from "react";
import "./Country.css";
const Country = ({ country, visitedCountry, visitedflag }) => {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  const { name, flags, population, area, cca3 } = country;
  return (
    <div className={`country ${visited && "visited"}`}>
      <h3>Name: {name.common}</h3>
      <img src={flags.png} alt="" />
      <h3>Population: {population}</h3>
      <h3>Area: {area}</h3>
      <small>code: {cca3}</small>
      <br />
      <button onClick={() => visitedflag(country.flags.png)}>Add flag</button>
      <br />
      <button onClick={() => visitedCountry(country)}>Mark visited</button>
      <br />
      <button onClick={handleVisited}> {visited ? "Visited" : "Going"}</button>
      {visited ? " this courtry is visited" : "  not visited"}
    </div>
  );
};

export default Country;
