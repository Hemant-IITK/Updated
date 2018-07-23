// All Dependencies are in React_node_modules
// Or You Can Install All Dependencies by "npm install" in relevant directory where package.json is.

import React, { Component } from 'react';
import './App.css';
import { Wave } from 'react-animated-text';
import Particles from 'react-particles-js';
import internshala from './intern.png';

class App extends Component {
  state = {
    UserData: null
  }

  componentWillMount() {
    if (sessionStorage.getItem("UserData") !== null) {
      this.setState({ UserData: JSON.parse(sessionStorage.getItem("UserData")) })
    }
  }

  render() {

    if (sessionStorage.getItem('UserData') === null) {
      return (
        <div className='OuterDiv1'>
          <div className='LinkedInCard'>
            <p style={{ fontSize: '35px' }}>Demo App</p>
            <div className='Separator2'>
            </div>
            <img src={internshala} alt='Internshala' style={{ width: "100%", height: "200px", marginTop: '15px', marginBottom: '15px' }} />
            <div className='Separator3'>
            </div>
            <script type="in/Login"></script>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className='OuterDiv2'>

          <Particles className='Particle' params={{
            "particles": {
              "number": {
                "value": 80,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#000000"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 1,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }} />

          <div className='card'>

            <img src={this.state.UserData.pictureUrl}
              alt={this.state.UserData.firstName + " " + this.state.UserData.lastName}
              style={{ width: "100%", borderRadius: "50%", border: "1px solid green" }} />

            <div className='Separator'></div>

            <div className='Name'><Wave delay={2.0} text={this.state.UserData.firstName + " " + this.state.UserData.lastName} /></div>

            <div className='EmailAddress'><p className='Email'>{this.state.UserData.emailAddress}</p></div>

            <div className='GrowNetwork'><i className="fa fa-users" style={{ fontSize: '40px', marginTop: '20px' }}></i><Wave
              text="Grow Your Network"
              effect="verticalFadeIn"
              effectChange={2}
              delay={2}
              effectDirection='down'
              iterations={'infinite'}
              paused={false}
            /></div>
            <div className='SocialMedia' >

              <a href="https://www.dribbble.com"><i className="fa fa-dribbble" style={{ color: "black" }}></i></a>
              <a href="https://www.twitter.com"><i className="fa fa-twitter" style={{ color: "black" }}></i></a>
              <a href={this.state.UserData.publicProfileUrl}><i className="fa fa-linkedin" style={{ color: "black" }}></i></a>
              <a href="https://www.instagram.com"><i className="fa fa-instagram" style={{ color: "black" }}></i></a>
              <a href="https://www.facebook.com"><i className="fa fa-facebook" style={{ color: "black" }}></i></a>

            </div>

            <button className='LogoutButton' onClick={window.fun}>
              Log Out
      </button>

          </div>
        </div>
      )
    }

  }
}

export default App;
