import React from "react";

const Search = ({ setSearch }) => {
  return (
    <div>
      <label>Search for a Movie : </label>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
};

export default Search;
