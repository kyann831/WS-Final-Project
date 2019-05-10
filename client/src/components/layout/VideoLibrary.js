import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
        return (
          <div id="ad-library">
          <p style={{width: "65%",
      display: "block",
      textAlign: "center",
      // boxSizing: "border-box",
      // border: "1px solid black",
      justifyContent: "center",
      margin: "0 auto", marginBottom: "20"}}><h5> Watch videos to know what devices can help you Walk Safe! Below are videos showing common devices to make walking safe.</h5></p>
          <div id="carousel-container"  style={{marginTop: 20}}>
            <Carousel>
              <div>
                {/* <video src="https://www.youtube.com/embed/YCGPX8URA-Q" style={{ width:"640px",height:"480px" }} controls></video> */}
                <iframe width="600" height="400" src="https://www.youtube.com/embed/YCGPX8URA-Q?rel=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
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
              <iframe width="600" height="400" src="https://www.youtube.com/embed/q89_gps3RNw?start=9" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-6"></iframe>                
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
          </div>

        );
    }
}

export default DemoCarousel

// import React from "react";
// import { Carousel } from "react-responsive-carousel";

// export default () => (
//   <Carousel autoPlay>
//     <div>
//     <iframe title="rollator" width="560" height="315" src="https://www.youtube.com/embed/YCGPX8URA-Q" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
//       <p className="legend">Legend 1</p>
//     </div>
//     <div>
//     <iframe title="2wwalker" width="560" height="315" src="https://www.youtube.com/embed/2nJFWhwyFd0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
//       <p className="legend">Legend 2</p>
//     </div>
//     <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" alt="" />
//       <p className="legend">Legend 2</p>
//     <div>
//     <iframe title="quadcane" width="560" height="315" src="https://www.youtube.com/embed/ULSYlN_CLtU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
//       <p className="legend">Legend 3</p>
//     </div>
//     <div>
//     <iframe title="singlepointcane" width="560" height="315" src="https://www.youtube.com/embed/v3kn072fNII" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
//       <p className="legend">Legend 4</p>
//     </div>
    

//   </Carousel>
// );



// import React, { Component } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
 
// class DemoCarousel extends Component {
//     render() {
//         return (
//             <Carousel>
//                 <div className="carousel-item">
//                 <iframe title="quadcane" width="560" height="315" src="https://www.youtube.com/embed/ULSYlN_CLtU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                    <p className="legend">Quad Cane</p>
//                 </div>
//                 <div className="carousel-item">
//                 <iframe title="quadcane" width="560" height="315" src="https://www.youtube.com/embed/ULSYlN_CLtU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                    <p className="legend">Quad Cane</p>
//                 </div>
//                 {/* <div>
//                 <iframe title="4prongedwalker"  width="560" height="315" src="https://www.youtube.com/embed/FWAzyhZldfw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    <p className="legend">4 Pronged Walker</p>
//                 </div>
//                 <div>
//                 <iframe title="twowheeledwalker"  width="560" height="315" src="https://www.youtube.com/embed/2nJFWhwyFd0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    <p className="legend">2 Wheeled Walker</p>
//                 </div> */}
//                 {/* <div>
//                 <iframe title="4wheeledrollator"  width="560" height="315" src="https://www.youtube.com/embed/YCGPX8URA-Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    <p className="legend">4 Wheeled Rollator</p>
//                 </div> */}
//             </Carousel>
//         );
//     }
// }

