import React, { useState, useEffect } from 'react'

import axios from 'axios'

import About from './components/About'
import Home from './components/Home'
import Dashboard from './components/Dashboard'

import Nav from 'react-bootstrap/Nav'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  NavLink
} from 'react-router-dom'

import { Container } from 'react-bootstrap'

export default function App () {
  const url = 'http://localhost/animal'
  //   const url = "http://api.murrik.com/animal";
  const [data, setData] = useState([])
  // const [show, setShow] = useState(false)

  //* data loading on the initial load
  //
  useEffect(() => {
    async function fetchData () {
      await axios
        .get(url, { headers: { 'Content-Type': 'application/json' } })
        .then((response) => {
          console.log('fetchData: response =>', response.data)
          if (Object.prototype.hasOwnProperty.call(response.data, 'animal')) {
            setData(response.data.animal)
          } else {
            setData([response.data])
          }
        })
        .catch((err) => console.log(err))
    }
    fetchData()
  }, [])

  useEffect(() => {
    console.log('useEffect: data changed', data)
  }, [data])

  return (
    <Router>
      <Container>
      <Nav className="navbar justify-content-end p-4">
        {/* <Nav.Item className="mr-4"> */}
            <NavLink to="/">Home</NavLink>
        {/* </Nav.Item>
        <Nav.Item className="mr-4"> */}
            <NavLink to="/about">About</NavLink>
        {/* </Nav.Item>
        <Nav.Item className="mr-2"> */}
            <NavLink to="/dashboard">Dashboard</NavLink>
        {/* </Nav.Item> */}
      </Nav>
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
  )
}
