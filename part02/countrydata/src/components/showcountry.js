import React from "react";

const ShowCountry = ({ country }) => {
  const languages = Object.values(country.languages);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <h4>capital: {country.capital}</h4>
      <h4>population: {country.population}</h4>

      <h2>Languages</h2>
      <ul>
        {languages.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.svg} width="300px" height="200px" />
    </div>
  );
};

export default ShowCountry;
