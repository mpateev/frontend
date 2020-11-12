import React from 'react'
import PropTypes from 'prop-types'

import DashCard from './DashCard'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function Home (props) {
  const { data } = props
  if (!data) {
    return (
      <Container>
        <h1> Loading data... </h1>
      </Container>
    )
  }

  const Cards = props.data.map((dat) => <DashCard key={dat.id} data={dat} />)

  return (
    <Container>
      <Jumbotron>
        <p><strong>Russische Tiere in Not e.V.</strong> ist eine gemeinnützige Tierschutzorganisation, die sich für russische Straßentiere engagiert. Wir arbeinten seit 2011.</p>
        <p>Alle Mitglieder unseres Vereines arbeiten ehrenamtlich und freiwillig, der Verein wird ausschließlich durch Spenden finanziert. Unser Ziel ist es, den russischen Tierschützern bei der Rettung von Straßentieren mit Spenden, Sterilisation und Tiervermittlung in Deutschland zu helfen! Wir stehen in enger Zusammenarbeit mit dem Moskauer Tierheim, den Tierschützern in Moskau.</p>
      </Jumbotron>
      <CardColumns>
        {Cards}
      </CardColumns>
    </Container>
  )
}

Home.propTypes = {
  data: PropTypes.node
}
