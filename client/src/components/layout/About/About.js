import React, { Component } from "react";
import { Row, Col } from "react-materialize";
import { Link } from "react-router-dom";
import "./Style.css";


class Card extends Component {
render() {
    return(
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
   
<div className="landing-copy col s12 center-align">
<Col m={4} style={{textAlign: "justify"}} >
<Row>
            
<Card image="/assets/images/2-men-with-canes.png" content={<p><center>Walk Safe</center><br></br>Walk Safe is a valuable resource for testing walking safety in the older adult. It provides useful information to help an older or unsteady person get stronger and prevent falls. Walk Safe test determines a need for an assistive device and whether or a medical provider should be involved. The video library demonstrates assistive devices and proper use of rollators, canes and walkers. Most program exercises are done in a chair, on the floor or with a walker so you can follow along with ease. 
</p>} action="About Us" href="/videolibrary"/>
<Card image="/assets/images/senior-couple.jpg" content={<p><center>Big Facts</center><br></br>1. According to the CDC more than one 1 out of 4 older people falls each year. Many falls are while older adults are walking.<br></br>2. Walking alone does not significantly improve walking safety or prevent falls. Specific strength training does improve safety.<br></br> 3. The cost of older adult falls is expected to increase as the population ages reaching $67.7 billion by 2020.<br></br> 4. Every 19 minutes, an older adult dies from a fall.<br></br>5. Walking significantly lowers risk of heart disease.</p>} action="About Us" href="videolibrary"/>
<Card image="/assets/images/1-man-with-cane.png" content={<p><center>The Core 5</center><br></br>
What is the core 5? The core 5 exercise program is the key to safe walking that you can do at home. These exercises work the most common 5 muscle pairs physical therapists use in a home exercise program to produce safer walking and improved neck mobility for environmental scanning. Go to the strength library to find the core 5 videos - do them at least 3 times a week and retest to see if you aren’t walking safer and feeling stronger. You can track your test progress and log in core 5 in your dashboard. </p>} action="About Us" href="/videolibrary"/>


</Row>
</Col>
<div className="col s6">
            <Link
            to="/login"
            style={{
              width: "200px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginRight: 20,
                        }}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3 right" 
          >
            Login
          </Link>
          </div>
        </div>
 
   
)

}

}

export default About