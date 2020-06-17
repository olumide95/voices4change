import React, { Component } from "react";
import "../marquee.css";
import $ from "jquery";
import axios from "axios";
export default class Marquee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/submissions`).then((res) => {
      console.log(res.data.data);
      this.setState({ data: res.data.data });
      let marquee = $(".marquee");
      let marqueeLength = marquee.width() - 200;
      let counter = parseInt($(".marquee").css("marginLeft"));

      this.dx = setInterval(() => {
        if (counter + marqueeLength <= 2) {
          counter = 100;
        }
        $(".marquee").animate({ marginLeft: counter }, 100);
        counter -= 5;
      }, 101);
    });
  }

  render() {
    const submissions = this.state.data.map((item) => {
      return (
        <div className="add" key={item.id}>
          <div className="text">
            <li>
              {item.name + " (" + item.country + ")"} -{" "}
              {item.message ?? item.comment}
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
            {submissions}
          </div>
        </div>
      </div>
    );
  }
}
