import React, { useState } from "react";
import "./Search.css";
import "../index.css";
import { Col, Row } from "react-bootstrap";

const URL_SEARCH = "https://restcountries.com/v3.1/name/{name}";

const Search = ({ setCountries }) => {
  const [name, setName] = useState("");

  const searchCountry = async () => {
    const response = await fetch(URL_SEARCH.replace("{name}", name));
    const data = await response.json();
    console.log(data);
    setCountries(data);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchCountry();
  };

  return (
    <section className="search">
      <Row md={4}>
        <Col xs={12} md={8}>
          <form className="control" onSubmit={handleSearch}>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a country"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </form>
        </Col>
        <Col className="selectorCol">
          <div className="selector">
            <select name="select" id="select" className="select">
              <option value="Asia">Select Region</option>
              <option value="Asia">Asia</option>
              <option value="Africa">Africa</option>
              <option value="Europe">Europe</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
            </select>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Search;
