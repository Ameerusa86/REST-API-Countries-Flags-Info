import React from "react";
import "./Search.css";
import "../index.css";
import { Col, Row, Container } from "react-bootstrap";

const Search = () => {
  return (
    <section className="search">
      <Row>
        <Col xs={12} md={8}>
          <form className="control">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a country"
            />
          </form>
        </Col>
        <Col>
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
