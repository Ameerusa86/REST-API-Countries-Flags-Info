import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Country() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  const URL_SEARCH = "https://restcountries.com/v3.1/name/{name}";

  useEffect(() => {
    const getSingleCountry = async () => {
      const response = await fetch(URL_SEARCH.replace("{name}", name));
      const data = await response.json();
      setCountry(data);
    };
    getSingleCountry();
  }, [name]);

  useEffect(() => {
    document.title = `${name}`;
  }, [name]);

  return (
    <>
      {country.map((country) => {
        const { id, name, population, flags, region, capital } = country;
        return (
          <div>
            <Link to={`/${name.common}`}>
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
            </Link>
            <br />
            <Link to="/">
              <button className="badge">Back</button>
            </Link>
          </div>
        );
      })}
    </>
  );
}
