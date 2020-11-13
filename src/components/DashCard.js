/* eslint-disable eqeqeq */
/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import PropTypes from "prop-types";

import { Card, Collapse } from "react-bootstrap";

import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome'
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";

import './dashcard.css'
// card in the dashboard
export default function DashCard({ data }) {
  // <DashCard id=number header="string" title="string" summary="string" text="string" />
  const [showText, setShowText] = useState(false);

  if (!data) {
    return <></>;
  }

  const cardCollapse = `collapse-${data.id}`;

  return (
    <div>
      <Card border="secondary">
        <Card.Header>
          <Card.Title>
            <span className="text-secondary mr-2">{data.name}</span>
            <span className="card-title"></span>
            <span className="float-right text-secondary">
              {/* {data.type == 1 ? <FAI icon={faCat} /> : <FAI icon={faPaw} />} */}
              {data.female ? <FAI icon={faVenus} /> : <FAI icon={faMars} />}
            </span>
          </Card.Title>
        </Card.Header>
        <Card.Img
          variant="top"
          src={data.image}
          onClick={() => setShowText(!showText)}
          onKeyPress={() => setShowText(!showText)}
          role="button"
          tabIndex={0}
          aria-controls={cardCollapse}
          aria-expanded={showText}
        />
        {/* <div className="" /> */}
        <Collapse in={showText}>
          <Card.Body className="h-50">
            <Card.Title>
              <div>{data.title}</div>
            </Card.Title>
            <Card.Text>
              <div id={cardCollapse}>
                <div className="summary">{data.summary}</div>
                <div className="description">{data.text}</div>
                <p>
                  <span className="float-right">
                    Last updated: {data.updated_at}
                  </span>
                </p>
              </div>
            </Card.Text>
          </Card.Body>
        </Collapse>
        {/* <Card.Footer></Card.Footer> */}
      </Card>
    </div>
  );
}

DashCard.propTypes = {
  data: PropTypes.object.isRequired,
};

// {showText ? (<FAI icon={faArrowAltCircleUp} />) : (<FAI icon={faArrowAltCircleDown} />)}
