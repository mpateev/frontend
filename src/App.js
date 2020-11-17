import React, { useState, useEffect } from 'react';

// we use 'axios' library for async data retieval
import axios from 'axios';

// import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  NavLink,
} from 'react-router-dom';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';

import About from './components/About';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

import logoImage from "./rtin_logo.png";

export default function App() {
  // set the url of the backend api server
  const url = "http://localhost/animal";
  //  'data' state holds the animal data loaded from the api
  const [data, setData] = useState([]); // api from local server
  // const url = "http://api.murrik.com/animal"; // api server on strato server

  //* data loading on the initial load
  //
  useEffect(() => {
    const holdTime = 1000;

    async function fetchData() {
      await axios
        .get(url, { headers: { "Content-Type": "application/json" } })
        .then((response) => {
          // console.log('fetchData: response =>', response.data);
          if (Object.prototype.hasOwnProperty.call(response.data, "animal")) {
            setData(response.data.animal);
          } else {
            setData([response.data]);
          }
        })
        .catch((err) => console.log(err));
    }
    setTimeout(fetchData, holdTime);
  }, []);

  useEffect(() => {
    // console.log('useEffect: data changed', data);
  }, [data]);

  return (
    <Router>
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
          <Navbar.Brand href="/">
            <Image src={logoImage} height="40px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/dashboard" className="nav-link">
                  Dashboard
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>

      <Switch>
        <Route exact path="/">
          <Home data={data} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}
