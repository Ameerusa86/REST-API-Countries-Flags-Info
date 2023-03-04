import React, { useState, useEffect } from "react";
import "../index.css";
import { Col, Row } from "react-bootstrap";

const URL = "https://restcountries.com/v3.1/all";
const URL_SEARCH = "https://restcountries.com/v3.1/name/{name}";
const URL_REGION = "https://restcountries.com/v3.1/region/{region}";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");

  const regions = [
    { name: "Europe" },
    { name: "Asia" },
    { name: "Africa" },
    { name: "North America" },
    { name: "South America" },
  ];

  const searchCountry = async () => {
    const response = await fetch(URL_SEARCH.replace("{name}", name));
    const data = await response.json();
    console.log(data);
    setCountries(data);
  };

  const filterByRegion = async (region) => {
    const response = await fetch(URL_REGION.replace("{region}", region));
    const data = await response.json();
    console.log(data);
    setCountries(data);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchCountry();
  };

  const handleFilterRegion = (e) => {
    e.preventDefault();
    filterByRegion();
  };

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };

    getCountries();
  }, []);
  return (
    <>
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
          <form onSubmit={handleFilterRegion}>
            <Col className="selectorCol">
              <div className="selector">
                <select
                  name="select"
                  id="select"
                  className="select"
                  value={regions.name}
                  onChange={(e) => filterByRegion(e.target.value)}
                >
                  <option value="Asia">Select Region</option>
                  <option value="Asia">Asia</option>
                  <option value="Africa">Africa</option>
                  <option value="Europe">Europe</option>
                  <option value="North America">North America</option>
                  <option value="South America">South America</option>
                </select>
              </div>
            </Col>
          </form>
        </Row>
      </section>

      <section className="grid">
        {countries.map((country) => {
          const { id, name, population, flags, region, capital } = country;

          return (
            <article key={id} className="container">
              <div className="card">
                <img src={flags.png} alt={name} />
                <div className="info">
                  <h3 className="title">{name.common}</h3>
                  <h4>
                    <span>Population:</span> {population}
                  </h4>
                  <h4>
                    <span>Region:</span> {region}
                  </h4>
                  <h4>
                    <span>Capital:</span> {capital}
                  </h4>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
