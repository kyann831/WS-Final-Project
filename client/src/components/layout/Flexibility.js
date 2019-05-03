import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class Flexibility extends Component {
    render() {
        return (
          <div id="carousel-container">
            <Carousel>
              <div>
                {/* <video src="https://www.youtube.com/embed/YCGPX8URA-Q" style={{ width:"640px",height:"480px" }} controls></video> */}
                <iframe width="600" height="400" src="https://www.youtube.com/embed/YCGPX8URA-Q" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/YCGPX8URA-Q/hqdefault.jpg" alt="" />
                <p className="legend">4 Wheeled Rollator</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/FWAzyhZldfw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/FWAzyhZldfw/hqdefault.jpg" alt="" />
                <p className="legend">4 Pronged Walker</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/tl2GRbCHKp8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/tl2GRbCHKp8/hqdefault.jpg" alt="" />
                <p className="legend">Two Wheeled Walker</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/ULSYlN_CLtU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/ULSYlN_CLtU/hqdefault.jpg" alt="" />
                <p className="legend">Quad Cane</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/v3kn072fNII" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/v3kn072fNII/hqdefault.jpg" alt="" />
                <p className="legend">Single Point Cane</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/q89_gps3RNw?start=9" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen title="video-6"></iframe>                
                <img src="http://i3.ytimg.com/vi/q89_gps3RNw/hqdefault.jpg" alt="" />
                <p className="legend">Single Point Cane</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/v3kn072fNII" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://i3.ytimg.com/vi/v3kn072fNII/hqdefault.jpg" alt="" />
                <p className="legend">Single Point Cane</p>
              </div>
            </Carousel>
          </div>
        );
    }
}

export default Flexibility


