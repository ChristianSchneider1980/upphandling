import React from "react";
import "./Hero.css";
import { ButtonToolbar } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Hem() {
  return (
    <div className="bghem">
      <div className="dark-overlay">
        <div className="vertical-center">
          <h1 className="h1-light">Upphandlingskonsult.</h1>
          <div className="divider-sh-wh"></div>
          <div className="sub-hero-header">
            <div className="bread-wh">
              Välkommen till AB Din Upphandlare Sverige. Vi är en byrå som
              specialiserar oss på offentlig upphandling och
              upphandlingskonsulter.
            </div>
          </div>
          <div className="hero-cta">
            <Button className="trans-btn">Tjänster</Button>{" "}
            <Button className="fill-btn">Kontakt</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hem;
