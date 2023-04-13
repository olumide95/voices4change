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
        this.setState({ data: 'Mr. Adetayo Koleosho, Mr. and Mrs Tope and Sammy Ojofeitimi, Mr. Chris Ayadiuno, Mr. Gbeke Oyede, Mr. Dimeji Allen-Taylor, Mr. Samson Lawal, Dr. Adeyinka Adenekan, Dr. Adetokunbo Oyetunji, Mr. Sonny Ogunseye, Mr. Ayo Jibowu, Mr. Lanre Anibaba, Mr. Tunde Adegbenro'.split(', ') });
        let marquee = $(".marquee");
        let marqueeLength = marquee.width() - 150;
        let counter = parseInt($(".marquee").css("marginLeft"));

        this.dx = setInterval(() => {
          if (counter + marqueeLength <= 2) {
            counter = 100;
          }
          $(".marquee").animate({ marginLeft: counter }, 100);
          counter -= 5;
        }, 101);
      })
      .catch((err) => {
        this.setState({ data: 'Mr. Adetayo Koleosho, Mr. and Mrs Tope and Sammy Ojofeitimi, Mr. Chris Ayadiuno, Mr. Gbeke Oyede, Mr. Dimeji Allen-Taylor, Mr. Samson Lawal, Dr. Adeyinka Adenekan, Dr. Adetokunbo Oyetunji, Mr. Sonny Ogunseye, Mr. Ayo Jibowu, Mr. Lanre Anibaba, Mr. Tunde Adegbenro, Dr Femi Omotobora, Dr Victor Adenaike, Mr Femi Adejumo, Mr Akin Olajide, Mr Eyo Ani, Dr. George Akingba, Adebajo Family, Akindele and Ayo Akinseye, Mr Bolanle Olaiya, Mr Tunji Ogundeji, Mr Niyi Abiola, Mr Akeem Adeleke, Mr Biola Iyiola, Mr Sola Falodun,Mr Biodun Oni, Mr Yakubu Belgore, Mr Adeola Ojuri, Mr Tomi Olotu, Mr Lekan Seweje, Mr Michael Idowu, Mr Babajide Olumide, Mr Francis Oganya, Mr Toyin Ariyibi, Mr Jide Odewale, Mr Tayo Egunjobi, Mr Sanya Otuyalo, Mr George Osawaye, Mr Joe Osawaye, Dr Debo Adewole,  Mr Yemi Olagbegi, Mr Dipo Olagbegi, Mr Akinlolu Ajayi-Obe, Mr Soji Adeyemi, Alhaji Taofeek Gbadamosi, Mr Jide Taiwo, Soji Fadeyi'.split(', ') });
        
        let marquee = $(".marquee");
        let marqueeLength = marquee.width() - 150;
        let counter = parseInt($(".marquee").css("marginLeft"));
    
        this.dx = setInterval(() => {
          if (counter + marqueeLength <= 2) {
            counter = 100;
          }
          $(".marquee").animate({ marginLeft: counter }, 100);
          counter -= 5;
        }, 101);
        console.log(err);
      });
  }

  componentWillUnmount() {
    if (this.dx) {
      clearInterval(this.dx);
    }
  }

  render() {
    const submissions = this.state.data.map((item, index) => {
      return (
        <div className="add" key={index}>
          <div className="text">
            <li>
              {item}
            </li>
          </div>
        </div>
      );
    });

    return (
      <div className="breaking-news-ticker" id="example">
        <div className="bn-label">DONORS</div>
        <div className="bn-news">
          <div id="domer" className="marquee">
            {submissions.length ? (
              submissions
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    );
  }
}
