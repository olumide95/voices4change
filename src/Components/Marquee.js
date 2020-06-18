import React, { Component } from "react";
import "../marquee.css";
import $ from "jquery";
import { ApiService } from "../Services/Api.service";
export default class Marquee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    ApiService.getSubmissions()
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
    let marquee = $(".marquee");
    let marqueeLength = marquee.width() - 200;
    let counter = parseInt($(".marquee").css("marginLeft"));

    this.dx = setInterval(() => {
      if (counter + marqueeLength <= 2) {
        counter = 150;
      }
      $(".marquee").animate({ marginLeft: counter }, 150);
      counter -= 5;
    }, 101);
  }

  render() {
    const submissions = this.state.data.map((item) => {
      return (
        <div className="add" key={item.id}>
          <div className="text">
            <li>
              {item.name + " (" + item.country + ")"} -{" "}
              {item.message ? item.message : item.comment}
              {""}
            </li>
          </div>
        </div>
      );
    });

    return (
      <div className="breaking-news-ticker" id="example">
        <div className="bn-label">Voices4Change</div>
        <div className="bn-news">
          <div id="domer" className="marquee">
            {submissions.length ? (
              submissions
            ) : (
              <div className="add">
                <div className="text">
                  <h5 style={{ color: "#4b9bef" }}>
                    AMPLIFYING THE VOICES OF CHANGE...
                  </h5>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
