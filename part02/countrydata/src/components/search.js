import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <div>
      <form>
        find countries: <input type="text" onChange={handleSearch} />
      </form>
    </div>
  );
};

export default Search;
