import React, { Component } from "react";
// import { Card } from "react-materialize";
import { Row, Col } from "react-materialize";

class Card extends Component {
render() {
    return(
    //     <Row>
    // <Col m={4} >
    //     <div className="card-image"> <img src={this.props.image} alt=""></img></div>
        

    //       <span class="card-title"></span>
        
    //     <div class="card-content">{this.props.content}
    //     </div>
    //     <div class="card-action">
    //       <a href={this.props.href}>{this.props.action}</a>
    //         </div>
    //               </Col>
    //                 </Row>
    <div className="col l4">
    <div className="card horizontal">
      <div className="card-stacked">
      <div className="card-image"> <img src={this.props.image} alt=""></img></div>
        <div className="card-content" style={{ padding:'10px', margin: '10px 0' }}> {this.props.content}
        </div>
        <div className="card-action">
          <a href={this.props.href}>{this.props.action}</a>
        </div>
      </div>
    </div>
  </div>
                   )
}
}

class About extends Component {
render() {
return (
   
<div className="container">
<Col m={4} style={{textAlign: "justify"}} >
<Row>
            
            <Card image="/assets/images/2-men-with-canes.png" content={<p><center>Walk Safe</center><br></br>What is Walk Safe? Walk Safe is a valuable resource for testing walking safety in the older adult. It provides useful information to help an older or unsteady person get stronger and prevent falls. It provides a test to determine need for an assistive device, what type, when to use and whether or not a medical provider should be involved.</p>} action="About Us" href="/strength"/>
<Card image="/assets/images/2-men-with-canes.png" content={<p><center>Big Facts</center><ol><li>According to the CDC more than one 1 out of 4 older people falls each year.</li><li>Falls are the leading cause of fatal injury among older adults.</li><li>The cost of older adult falls is expected to increase as the population ages reaching $67.7 billion by 2020.</li><li>Every 19 minutes, an older adult dies from a fall.</li></ol></p>} action="About Us" href="login"/>
<Card image="/assets/images/2-men-with-canes.png" content={<p><center>Video Library</center><br></br>The video library will help you research assistive devices. These videos will show you proper use of canes and walkers to walk safely. Watch the strength videos and do the core 5 exercise program to improve muscle strength specific to walking. Flexibility exercises are also provided to compliment the core 5 program. Many exercise are done in a chair, on the floor or with a walker so you can follow along.
</p>} action="About Us" href="/strength"/>

            {/* <Card image="/assets/images/2-men-with-canes.png" content="What is Walk Safe? " action="About Us" href="login"/>
            <Card image="/assets/images/2-men-with-canes.png" content="What is Walk Safe? " action="About Us" href="login"/>
            <Card image="/assets/images/2-men-with-canes.png" content="What is Walk Safe? " action="About Us" href="login"/> */}

</Row>
</Col>
</div>
 
   
)

}

}

export default About