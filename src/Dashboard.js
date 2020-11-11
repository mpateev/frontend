import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import { Container, CardColumns, Jumbotron } from "react-bootstrap";

import { FontAwesomeIcon as FAI } from "@fortawesome/react-fontawesome";
import {
  faCat,
  faDog,
  faEye,
  faEyeSlash,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";

import DashNavBar from "./components/DashNavBar";
import DashCard from "./components/DashCard";
import "./dashboard.css";

export default function Dashboard() {
  const url = "http://localhost/animal";
  //   const url = "http://api.murrik.com/animal";
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  //* data loading on the initial load
  //
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(url)
        .then((response) => {
          console.log("fetchData: response =>", response.data);
          if (response.data.hasOwnProperty("animal")) {
            setData(response.data.animal);
          } else {
            setData([response.data]);
          }
        })
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log("useEffect: data changed", data);
  }, [data]);

  if (!data)
    return (
      <Container>
        <h1> Loading data... </h1>
      </Container>
    );

  const Cards = data.map((cont) => <DashCard data={cont} />);
  return (
    <Router>
      <DashNavBar />
      <Container>
        <FAI icon={faPaw} />
        {/* <Row> */}
        <CardColumns>{Cards}</CardColumns>
      </Container>
    </Router>
  );
}
