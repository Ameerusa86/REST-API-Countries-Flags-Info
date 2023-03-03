import React from "react";

const URL = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setCountries(data));
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
