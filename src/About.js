import "./About.css";
import "./Hero.css";

import React from "react";

function About() {
  return (
    <div className="container">
      <div className="row align-items-center h-100">
        <div className="col-sm-4">
          <div className="sub-header">Vilka vi är</div>
          <div className="divider-sh-wh-no-mrg"></div>
          <div className="bread-drk">
            Hej hej ändring 1 ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent nec est rutrum, congue libero eu, faucibus elit. Phasellus
            et libero eget erat tincidunt malesuada malesuada.
          </div>
        </div>
        <div className="col-sm-4">
          <div className="sub-header">Vad vi gör</div>
          <div className="divider-sh-wh-no-mrg"></div>
          <div className="bread-drk">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nec est rutrum, congue libero eu, faucibus elit. Phasellus et libero
            eget erat tincidunt malesuada malesuada.
          </div>
        </div>
        <div className="col-sm-4">
          <div className="sub-header">Hur vi arbetar</div>
          <div className="divider-sh-wh-no-mrg"></div>
          <div className="bread-drk">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nec est rutrum, congue libero eu, faucibus elit. Phasellus et libero
            eget erat tincidunt malesuada malesuada.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
