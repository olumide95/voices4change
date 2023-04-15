import React, { Component } from "react";
export default class AboutBox extends Component {
  constructor(props) {
    super(props);

    if (this.props.location.pathname !== "/") {
      document.getElementsByTagName("body")[0].style =
        "background-size: 100% 310px; background-repeat: no-repeat; background-image: url(/about.jpg);";
        
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
              The Modesola Bassir Educational Foundation is a non-profit organization established in 2023 to continue the legacy of Mrs Modesola Bassir of blessed memory, foster her lifelong commitment to education, and drive the sustainable development of human capacity within communities in Nigeria.
              </p>
            </div>
          </div>
          
         <div className="row">
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
            <h3 className="about-head">MBEF CHARTER</h3>
            
            The MBEF was established with the objectives of: 
              <br></br>

              <ul>
                  <li> Embarking on socially responsible, impact-driven initiatives and projects, underpinned by sustainability, and aimed at fostering the education and socio-economic development of select, indigent students in society.
                  </li>
                  <li>Developing the next generation of leaders by providing mentorship, empowerment and developmental opportunities to Nigerian students and youth. </li>
                </ul> 
            

              <h3 className="about-head">PROGRAMS</h3>
                <p> The Following are some of our programs:   </p>
           
                <ol>
                  <li> <b>Modesola Bassir Educational Foundation Scholarship ( MBEFS) </b><br></br> 
                  This program will provide educational scholarships to competitively selected and self-motivated students in secondary schools in Lagos and Oyo states. 
                  </li>
                  <li><b>Modesola Bassir Enterprenural and Skill Acquisition Program (MBESAP)</b></li>
                  <li><b> Modesola Bassir Educational Foundation Literacy Initiative (MBEFLI) </b><br></br>  
                  This program will help in creating libraries in schools within the community and improving the quality of learning through the improvement of existing infrastructures.
                  </li>
                  <li> <b>Modesola Bassir Teacher Adoption and Sponsorship Scheme </b><br></br>  
                  This program will adopt Teachers and take responsibility for paying their salaries in schools struggling to attract and retain qualified and competent teachers.
                  </li>
                </ol> 


                <h3 className="about-head">BOARD OF TRUSTEES</h3>
                <p> To be Announced.</p>

                <h3 className="about-head">OFFICE ADDRESS</h3>
                <p>26 Olumbe Bassir Drive, Bodija, Ibadan, Oyo state.</p>                    
            </div>
          </div>
        </div>
      </div>
    );
  }
}