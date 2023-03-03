import React, { useState, useEffect } from "react";

const URL = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

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
