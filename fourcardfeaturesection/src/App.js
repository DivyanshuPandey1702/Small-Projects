import React from "react";
import Heading from "./Heading";
import Card from "./Card";

function App() {
  return (
    <div>
      <Heading />
      <div class="centercontainer">
        <div class="container">
          <Card
            heading="Supervisor"
            text="Monitors activity to identify project roadblocks"
            img="./images/icon-supervisor.svg"
            col="hsl(180, 62%, 55%)"
          />
          <div>
            <Card
              heading="Team Builder"
              text="Scans our talent network to create the optimal team for your project"
              img="./images/icon-team-builder.svg"
              col="hsl(0, 78%, 62%)"
            />
            <Card
              heading="Karma"
              text="Regularly evaluates our talent to ensure quality"
              img="./images/icon-karma.svg"
              col="hsl(34, 97%, 64%)"
            />
          </div>
          <Card
            heading="Calculator"
            text="Uses data from past projects to provide better delivery estimates"
            img="./images/icon-calculator.svg"
            col="hsl(212, 86%, 64%)"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
