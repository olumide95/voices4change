import React, { Component } from "react";

import { Link } from "react-router-dom";
export default class AboutBox extends Component {
  constructor(props) {
    super(props);

    if (this.props.location.pathname !== "/") {
      document.getElementsByTagName("body")[0].style =
        "background-position: center;";
    } else {
      document.getElementsByTagName("body")[0].style =
        "background-position: unset;";
    }
  }
  render() {
    return (
      <div className="about box form-box ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 form about-box">
              <h2 className="about-head">Background</h2>
              <p>
                The death of Mr George Floyd, a black American man, on an
                obscure Minneapolis street corner, under the knee of a white
                police officer triggered the most spontaneous and contagious
                protests the United States have witnessed in decades. As the
                coronavirus pandemic rage, the world watches as large swaths of
                people across the country sacrificed social distancing at the
                alter of a cry in unison for social justice. Reverberating
                energy, resounding consciousness and explicit sense of
                conviction seemed to have fueled these protests, keeping them
                going and growing in the US for eighteen days now. Notably, the
                protests have spread to over 60 countries representing every
                continent, except Antarctica. George Floyd assumed fame, and
                some say martyrdom in death. Without question, the death of this
                man has sparked off a global civil right movement which we
                believe inspire the preservation of the message, sentiments,
                motives, drive, energy, purpose and clarion cries for social
                reform that defines this moment. The energy inherent in this
                movement must not be frittered but rather harvested to drive
                real change. We established this site to capture and memorialize
                the sentiments of the millions of protesters as projected in
                their numerous written messaging on posters, placards, items of
                clothing and general merchandise on display at various rallies
                across the globe over the past couple of weeks."
              </p>
              <br />
              <h2 className="about-head">Let your voice affect change</h2>
              <p>
                We invite every citizen, leader and corporate whose conviction
                of an endemically broken social contract in society, motivated
                them to participate in any of the protests, to opt-in to this
                community of consciousness. We implore you to please take a
                moment and publish your unique message on this platform. The
                community of consciousness offers you the opportunity to
                transfer your words and thoughts from the signs you created or
                seen at protests and rallies by filling out a simple form. We
                intend this site to be that platform where your contributions
                will enable the realization of a positive social multiplier
                effect, where the fusion of individual convictions and yearnings
                is synthesized with the abundance and forward transfer of
                positive energy and then unleashed for a common purpose - the
                achievement of a more just society.
                <br /> If you haven’t attended a rally in your city you can
                still contribute by typing your thoughts and comments about the
                current issues of the day such as the serial police brutality
                and unjust killings in the American society -{" "}
                <Link to="/speak">Speak up</Link>; your voice will be amplified
                to affect change!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
