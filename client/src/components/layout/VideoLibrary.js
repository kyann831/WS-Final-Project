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

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
        return (
          <div id="carousel-container">
            <Carousel>
              <div>
                {/* <video src="https://www.youtube.com/embed/YCGPX8URA-Q" style={{ width:"640px",height:"480px" }} controls></video> */}
                <iframe width="600" height="400" src="https://www.youtube.com/embed/YCGPX8URA-Q" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" alt="" />
                <p className="legend">Legend 1</p>
              </div>
              <div>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/FWAzyhZldfw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video-1"></iframe>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" alt="" />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" alt="" />
                <p className="legend">Legend 3</p>
              </div>
            </Carousel>
          </div>
        );
    }
}

export default DemoCarousel