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
              <h1 className="about-head">Modesola Bassir Educational Foundation (MBEF)</h1>
              <p>
              The Modesola, Bassir Educational Frendation is a non-profit organization established in 2023 to continue the legary ep Mrs Modersta Bassir of blessed memory her lifelong commitment to education and the Sustainable development human Capacity within Communities In Nigeria.
              </p>
            </div>
          </div>
          
         <div class="row">
          <div className="col-lg-6 col-12 form about-box">
          <img src="https://scx2.b-cdn.net/gfx/news/hires/2022/black-community.jpg" style={{width: 'inherit'}} alt="children reading a book"></img>
          </div>
            <div className="col-lg-6 col-12 form about-box">
                  <h2 className="about-head">WE ENVISION A SOCIETY WHERE EVERY CHILD...</h2>
                  <p>
                  has access to educational opportunities that will enable them be competitive with any of their peers globally. Education helps create strong leaders and stable communities. We partner with organisations and individuals who share our mission of providing developmental opportunities to Nigerian youth.
                  </p>
            </div>

            <div className="col-md-12 form about-box"> 
            <h3 className="about-head">CHARTER</h3>
            <p>
            The MBEF was established with the  

              objective of: 
              <br></br><br></br>
              [i] Embarking on socially  

              responsible, impact-driven initiatives and  

              projects, underpinned by sustainability, with  

              the aim of fostering the education and socio-economic  

              development of select, indigent students in society.  

              <br></br><br></br>

              [ii] Developing the next generation of future leaders by  

              providing mentorship, empowerment and  

              developmental opportunities to the youth
              </p>

              <h3 className="about-head">PROGRAMS</h3>
            <p>
            The MBEF was established with the  

              </p>

              <h3 className="about-head">CHARTER</h3>
            <p>
            The MBEF was established with the  

              objective of: 
              <br></br><br></br>
              [i] Embarking on socially  

              responsible, impact-driven initiatives and  

              projects, underpinned by sustainability, with  

              the aim of fostering the education and socio-economic  

              development of select, indigent students in society.  

              <br></br><br></br>

              [ii] Developing the next generation of future leaders by  

              providing mentorship, empowerment and  

              developmental opportunities to the youth
              </p>

              <h3 className="about-head">PROGRAMS</h3>
                <p> The Following are some of our programs:   </p>
           
                <ol>
                  <li> Modesola Bassir Educational Foundation Scholarship ( MBEFS) <br></br> 
                  This program will provide educational scholarships to competitively selected and self-motivated students in secondary schools in Lagos and Oyo states. 
                  </li>
                  <li>Modesola Bassir Enterprenural and Skill Acquisition Program (MBESAP)</li>
                  <li> Modesola Bassir Educational Foundation Literacy Initiative (MBEFLI) <br></br>  
                  This program will help in creating libraries in schools within the community and improving the quality of learning through the improvement of existing infrastructures. 
                  </li>
                </ol> 


                <h3 className="about-head">BOARD OF TRUSTEES</h3>
                <ol>
                  <li> Mrs. Morenike Taire </li>
                  <li> Mr Oluseye Bassir</li>
                  <li> Rep GCIOBA (TBD) </li>
                  <li> RRep QCOGA (TBD) </li>
                  <li> Rep Okitipupa (TBD)  </li>
                </ol>   

                <h3 className="about-head">OFFICE ADDRESS</h3>
                <p>26 Olumbe Bassir Drive, Bodija, Ibadan, Oyo state.</p>                    
            </div>
          </div>
        </div>
      </div>
    );
  }
}