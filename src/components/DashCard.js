/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Collapse from 'react-bootstrap/Collapse'
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome'
import {
  faAngry,
  faArrowAltCircleDown,
  faArrowAltCircleUp,
  faBone,
  faCat,
  faDog,
  faEye,
  faEyeSlash,
  faHotdog,
  faPaw,
  faGlasses,
} from '@fortawesome/free-solid-svg-icons'

import './dashcard.css'
// card in the dashboard
export default function DashCard (props) {
  // <DashCard id=number header="string" title="string" summary="string" text="string" />
  const [showText, setShowText] = useState(false)

  if (!props) {
    return <></>
  }

  const cardId = props.data.id
  const cardHeader = props.data.name
  const cardTitle = props.data.title
  const cardImage = props.data.image
  const cardSummary = props.data.summary
  const cardUpdate = props.data.updated_at
  const cardText = props.data.text
  const cardType = props.data.type
  const cardCollapse = 'collapse-' + cardId

  return (
    <div>
      <Card>
        <Card.Header>
          <span className="float-right text-secondary">
            {cardType === '1' ? (
              <FAI icon={faCat} />
            )
              : cardType === '2' ? (
              <FAI icon={faDog} />
              )
                : (
              <FAI icon={faPaw} />
                  )}
          </span>
          <span className="card-title">{cardHeader}</span>
        </Card.Header>
        <Card.Img variant="top" src={cardImage} />
        <Card.Body className="h-50">
          <Card.Text>
            <Card.Title>{cardTitle}</Card.Title>
            <div className=""></div>
            <Collapse in={showText}>
              <div id={cardCollapse}>
                <div className="summary">{cardSummary}</div>
                <div className="description">{cardText}</div>
              </div>
            </Collapse>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <span
            className="text-secondary card-footer-open"
            onClick={() => setShowText(!showText)}
            aria-controls={cardCollapse}
            aria-expanded={showText}
          >
            {showText ? (
              <FAI icon={faArrowAltCircleUp} />
            ) : (
              <FAI icon={faArrowAltCircleDown} />
            )}
          </span>
          <span className="float-right">{cardUpdate}</span>
        </Card.Footer>
      </Card>
    </div>
  )
}
