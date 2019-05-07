import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";


 
class Strength extends Component {
    render() {
        return (
          <div id="ad-library">
          <p style={{width: "65%",
      display: "block",
      textAlign: "center",
      // boxSizing: "border-box",
      // border: "1px solid black",
      justifyContent: "center",
      margin: "0 auto", marginBottom: "20"}}><h5> Did you take the test? Now do the exercises to get stronger and Walk Safe. Try the core 5 and when you're feeling ambitious add in a few more!</h5></p>
          <div id="carousel-container">
            <Carousel>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/dD8T9_M1thk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/dD8T9_M1thk/hqdefault.jpg" alt="" />
                <p className="legend">Abduction Squat on Walker</p>
              </div>
              {/* <div>
                <iframe width="600" height="400" src="https://www.youtube.com/embed/Nd8K4MFojos" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="AA Shoulder Flexion"></iframe>
                <img src="http://i3.ytimg.com/vi/Nd8K4MFojos/hqdefault.jpg" alt="" />
                <p className="legend">AA Shoulder Flexion</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/ouVKsOmNZW0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/ouVKsOmNZW0/hqdefault.jpg" alt="" />
                <p className="legend">Biceps</p>
              </div> */}
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/MV6gdcEeVv0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/MV6gdcEeVv0/hqdefault.jpg" alt="" />
                <p className="legend">Bridging</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/4ihuAe-D8-k" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/4ihuAe-D8-k/hqdefault.jpg" alt="" />
                <p className="legend">Crunch</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/dqiPlz7VbBE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen title="video-6"></iframe>                
                <img src="http://i3.ytimg.com/vi/dqiPlz7VbBE/hqdefault.jpg" alt="" />
                <p className="legend">Front Reach</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/mw5f55q2BYU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/mw5f55q2BYU/hqdefault.jpg" alt="" />
                <p className="legend">Hamstring Curl</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/Ve33ySR1hJM?start=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/Ve33ySR1hJM/hqdefault.jpg" alt="" />
                <p className="legend">Heel Raise</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/87rJGTtiGyo?start=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/87rJGTtiGyo/hqdefault.jpg" alt="" />
                <p className="legend">Hip Adduction on Walker</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/jbPthqRNY1A?start=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/87rJGTtiGyo/hqdefault.jpg" alt="" />
                <p className="legend">Hip Abduction on Walker</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/5dfcmmwcz2g?start=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/5dfcmmwcz2g/hqdefault.jpg" alt="" />
                <p className="legend">Hip Flexion on Walker</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/Wq6L3EcBzEk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/Wq6L3EcBzEk/hqdefault.jpg" alt="" />
                <p className="legend">Toe Raises</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/_V5AVFbhmpg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/_V5AVFbhmpg/hqdefault.jpg" alt="" />
                <p className="legend">Hip Extension</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/dQp6nh4Y_M4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/dQp6nh4Y_M4/hqdefault.jpg" alt="" />
                <p className="legend">Knee Extension</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/FWz8IhivXPQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/FWz8IhivXPQ/hqdefault.jpg" alt="" />
                <p className="legend">Sit to Stand</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/IydQdYSX3ys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/IydQdYSX3ys/hqdefault.jpg" alt="" />
                <p className="legend">Squats on Walker</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/DHPTQ_g3exY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/DHPTQ_g3exY/hqdefault.jpg" alt="" />
                <p className="legend">Neck Retractions</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/JZS1E1sm7MM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/JZS1E1sm7MM/hqdefault.jpg" alt="" />
                <p className="legend">Neck Rotation</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/YGXWyTzBg-8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/YGXWyTzBg-8/hqdefault.jpg" alt="" />
                <p className="legend">Neck Flexion Extenstion</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/prVOFgucO2U" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/prVOFgucO2U/hqdefault.jpg" alt="" />
                <p className="legend">Neck Rotation</p>
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

export default Strength


