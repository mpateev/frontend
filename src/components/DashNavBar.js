import React from "react";
import Nav from "react-bootstrap/Nav";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

export default function DashNavBar(props) {
  return (
    <Container>
      <Nav
        activeKey="/animals"
        // onSelect={(selectedKey) => alert(selectedKey)}
        className="justify-content-end p-2"
      >
        {/*<ButtonToolbar size="sm" className="custom-btn-toolbar">*/}
        <Nav.Item>
          <Nav.Link href="/animals">Animals</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="departures" href="/departures">
            Departures
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="members" href="/members">
            Members
          </Nav.Link>
        </Nav.Item>
        {/*</ButtonToolbar>*/}
      </Nav>
    </Container>
  );
}
