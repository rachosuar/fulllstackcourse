import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/search";
import Showlist from "./components/showlist";
import ShowCountry from "./components/showcountry";
import Weather from "./components/weather";

function App() {
  const api_key = process.env.REACT_APP_API_KEY;

  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState();
  const [filterValue, setFilterValue] = useState("");
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data))
      .catch((err) => alert(err.message));
  }, []);

  const handleSearch = (event) => {
    setFilterValue(event.target.value);
    setNewFilter(true);
  };
  const selectCountry = (event) => {
    event.preventDefault();
    setFilterValue(event.target.attributes.value.value);
  };

  const showCountries = setNewFilter
    ? countries.filter(
        (country) =>
          country.name.common.slice(0, filterValue.length).toLowerCase() ===
          filterValue.toLowerCase()
      )
    : countries;
  console.log(showCountries);
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <Showlist countries={showCountries} selectCountry={selectCountry} />
      {showCountries.length === 1 ? (
        <ShowCountry country={showCountries[0]} />
      ) : (
        ""
      )}
      {showCountries.length === 1 ? (
        <Weather
          city={showCountries[0].capital}
          appkey={api_key}
          promise={axios.get(
            `http://api.weatherstack.com/current?access_key=${api_key}&query=${showCountries[0].capital}`
          )}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
