/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import {
  CardColumns,
  // Col,
  Container,
  // Image,
} from 'react-bootstrap';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import DashCard from './DashCard';

export default function Home({ data }) {
console.log("Home -> data", data)

  if (!data.length) {
    return (
      <Container className="pt-5 text-secondary bg-gray">
        <h1> Loading data... </h1>
      </Container>
    );
  }

  const Cards = data.map((card) => <DashCard key={card.id} data={card} />);

  return (
    <Container className="p-4">

          <p>
            <strong>Russische Tiere in Not e.V. </strong>
            ist eine gemeinnützige
            Tierschutzorganisation, die sich für russische Straßentiere
            engagiert. Wir arbeinten seit 2011.
          </p>
          <p>
            Alle Mitglieder unseres Vereines arbeiten ehrenamtlich und
            freiwillig, der Verein wird ausschließlich durch Spenden finanziert.
            Unser Ziel ist es, den russischen Tierschützern bei der Rettung von
            Straßentieren mit Spenden, Sterilisation und Tiervermittlung in
            Deutschland zu helfen! Wir stehen in enger Zusammenarbeit mit dem
            Moskauer Tierheim, den Tierschützern in Moskau.
          </p>
      <CardColumns>{Cards}</CardColumns>
    </Container>
  );
}

Home.propTypes = {
  data: PropTypes.array,
};
