import React from "react";
import "./Search.css";
import "../index.css";

const Search = () => {
  return (
    <section className="search">
      <form className="control">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search a country"
        />
      </form>
      <div className="selector">
        <select name="select" id="select" className="select">
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
        </select>
      </div>
    </section>
  );
};

export default Search;
