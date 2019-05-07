import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";


 
class Flexibility extends Component {
    render() {
        return (
          <div id="ad-library">
          <p style={{width: "65%",
      display: "block",
      textAlign: "center",
      // boxSizing: "border-box",
      // border: "1px solid black",
      justifyContent: "center",
      margin: "0 auto", marginBottom: "20"}}><h5> Did you take the test? These flexibility exercises target muscle groups which are commonly tight and impact walking. Add these into your program as tolerated.</h5></p>
          <div id="carousel-container">
            <Carousel>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/VoIE0dTsb2A" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/VoIE0dTsb2A/hqdefault.jpg" alt="" />
                <p className="legend">Gastrocnemius Stretch</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/n8e44a53iEs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/n8e44a53iEs/hqdefault.jpg" alt="" />
                <p className="legend">Gluteal Stretch</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/oKy9JuDsVv0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen title="video-6"></iframe>                
                <img src="http://i3.ytimg.com/vi/oKy9JuDsVv0/hqdefault.jpg" alt="" />
                <p className="legend">Hamstring Stretch</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/F3QhJIeqsGc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/F3QhJIeqsGc/hqdefault.jpg" alt="" />
                <p className="legend">Hip Adduction Stretch</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/jAFv87w1O2g" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/jAFv87w1O2g/hqdefault.jpg" alt="" />
                <p className="legend">Illipsoas Stretch</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/-gFqz2bduRE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/-gFqz2bduRE/hqdefault.jpg" alt="" />
                <p className="legend">Lumbar Rotation Stretch</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/9c4Tpq9rwps" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/9c4Tpq9rwps/hqdefault.jpg" alt="" />
                <p className="legend">Upper Trapezius Stretch</p>
              </div>
              
            </Carousel>
          </div>
          <div className="Dashboard"><p style={{width: "65%",
      display: "block",
      textAlign: "center",
      // boxSizing: "border-box",
      // border: "1px solid black",
      justifyContent: "center",
      margin: "0 auto", marginBottom: "50", marginTop: "50"}}><h3><Link to="/Dashboard">Dashboard</Link></h3></p></div>          

          </div>

        );
    }
}

export default Flexibility


