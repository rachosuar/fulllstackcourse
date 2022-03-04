import { selectOptions } from "@testing-library/user-event/dist/select-options";
import React from "react";

const Showlist = ({ countries, selectCountry, country }) => {
  return (
    <div>
      {countries.length > 10 ? (
        <h3>too many matches, specify another filter</h3>
      ) : (
        countries.map((country) => (
          <div key={country.name.common}>
            <h3>{country.name.common}</h3>
            <button onClick={selectCountry} value={country.name.common}>
              SHOW
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Showlist;
