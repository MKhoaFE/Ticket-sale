import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

export default class Home extends Component {
  render() {
    return (
      <div className="container" style={{height:"100%"}}>
        <h1>Home</h1>
        <p>This is home.</p>
        <h1>
          Example heading
          <Badge bg="secondary" as={Button}>
            New
          </Badge>
        </h1>
      </div>
    );
  }
}
