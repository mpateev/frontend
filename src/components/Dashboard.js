import React, { useState } from "react";

import { Button, ButtonGroup, Container } from "react-bootstrap";

import { FontAwesomeIcon as FAI } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

import './dashboard.css'
import AddAnimal from "./AddAnimal";

export default function Dashboard() {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <Container>
      <h1>This is a Dashboard</h1>
      <AddAnimal show={showAdd} onHide={() => setShowAdd(false)} />
      <ButtonGroup aria-label="Animal">
        <Button variant="secondary" onClick={() => setShowAdd(true)}>
          <FAI icon={faPlusSquare} /> Add
        </Button>
      </ButtonGroup>
    </Container>
  );
}
