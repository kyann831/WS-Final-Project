import React, { Component } from "react";
import { Row, Col } from "react-materialize";
import { Link } from "react-router-dom";

class Card extends Component {
    render() {
        return(
        <div className="col l4">
        <div className="card">
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
    
    class Safety extends Component {
    render() {
    return (
        <div className="landing-copy col s12 center-align">
    <Col m={4} style={{textAlign: "justify"}} >
    <Row>
                
                <Card image="/assets/images/elderly-exercise (1).png" content={<p><center>Always Wear Proper Footwear</center><br></br>Wear closed toed, lace up shoes for optimal foot and ankle support. Velcro shoes are acceptable for those who have trouble with laces. This type of footwear also better protects you from cuts and scrapes which can lead infections or wounds that are difficult to heal especially in diabetics. Stay away from flip flops and sandals. Loose footwear makes for tripping and falls.  
                </p>} action="About Us" href="/videolibrary"/>
                <Card image="/assets/images/senior-couple.jpg" content={<p><center>Remember the Buddy System</center><br></br>Remember the buddy system? It worked in Kindergarten and it still works today! A buddy helps pass the time walking and can provide help if needed. Walk with your buddy during the daytime and be aware of your surroundings. If a friendly pet is coming toward you, you will seem him and be ready. Make sure you and your buddy walk in a safe area. Walk safe!
                </p>} action="About Us" href="videolibrary"/>
                <Card image="/assets/images/jousting-on-walker.png" content={<p><center>Use Your Cane or Walker When You Need It</center><br></br>Many devices are available to maximize your stability. You might just need a cane around the house for extra support but you might need a walker if you fatigue easily or your balance is compromised. Take the walk safe test to see what benefits you most. Avoid hanging on to loved ones because then everybody goes down during a fall. Use your device! 
                </p>} action="About Us" href="/videolibrary"/>
                
                
                </Row>
    {/* <Row>
                
    <Card image="/assets/images/2-men-with-canes.png" content={<p><center>Grab Bars, Shower Seats, Toilets Oh My</center><br></br>Bathrooms are the number one place in the house people fall. While no one knows why for sure, we know that they’re slippery when wet, there’s those darn throw rugs and then of course, you may be rushing to the throne. Improve bathroom safety with simple pieces of equipment. Elevated toilet seats, shower and bath seats, anti-slip mats and grab bars make a big difference preventing falls. 
    </p>} action="About Us" href="/videolibrary"/>
    <Card image="/assets/images/senior-couple.jpg" content={<p><center>Get Rid of Throw Rugs</center><br></br>Yeah I said it. We love hanging onto those old rugs but uneven flooring makes for tripping hazards when our legs don’t lift like they used to. Not to mention they hold dust, dirt and allergens that can make us sick! Look for the offending throw rugs in living rooms, near the kitchen sink and my nemesis throw rug, the one in the bathroom! Look for uneven surfaces throughout the house and use extra support when moving up and down a step.

    </p>} action="About Us" href="videolibrary"/>
    <Card image="/assets/images/1-man-with-cane.png" content={<p><center>Lights On, Glasses Clean</center><br></br>Surprise! Our eyeballs age with the rest of our bodies. If we can’t see the hazards around us we are apt to trip over those shoes someone left in the middle of the floor. Use a nightlight if turning all the lights on isn’t possible. On clever person I know taped a flashlight onto his walker for night trips the the potty. Finally, make sure you are cleaning your glasses, you might be shocked at how quickly they get dirty and are limiting your vision.
   
 </p>} action="About Us" href="/videolibrary"/>
    
    
    </Row>
    <Row>
                
    <Card image="/assets/images/2-men-with-canes.png" content={<p><center>Grab Bars, Shower Seats, Toilets Oh My</center><br></br>Bathrooms are the number one place in the house people fall. While no one knows why for sure, we know that they’re slippery when wet, there’s those darn throw rugs and then of course, you may be rushing to the throne. Improve bathroom safety with simple pieces of equipment. Elevated toilet seats, shower and bath seats, anti-slip mats and grab bars make a big difference preventing falls. 
    </p>} action="About Us" href="/videolibrary"/>
    <Card image="/assets/images/senior-couple.jpg" content={<p><center>Get Rid of Throw Rugs</center><br></br>Yeah I said it. We love hanging onto those old rugs but uneven flooring makes for tripping hazards when our legs don’t lift like they used to. Not to mention they hold dust, dirt and allergens that can make us sick! Look for the offending throw rugs in living rooms, near the kitchen sink and my nemesis throw rug, the one in the bathroom! Look for uneven surfaces throughout the house and use extra support when moving up and down a step.

    </p>} action="About Us" href="videolibrary"/>
    <Card image="/assets/images/1-man-with-cane.png" content={<p><center>Lights On, Glasses Clean</center><br></br>Surprise! Our eyeballs age with the rest of our bodies. If we can’t see the hazards around us we are apt to trip over those shoes someone left in the middle of the floor. Use a nightlight if turning all the lights on isn’t possible. On clever person I know taped a flashlight onto his walker for night trips the the potty. Finally, make sure you are cleaning your glasses, you might be shocked at how quickly they get dirty and are limiting your vision.
   
 </p>} action="About Us" href="/videolibrary"/>
    
    
    </Row>     */}
    </Col>
    <div className="col s6">
    <Link
    to="/dashboard"
    style={{
      width: "200px",
      borderRadius: "3px",
      letterSpacing: "1.5px",
      marginRight: 20,
                }}
    className="btn btn-large waves-effect waves-light hoverable blue accent-3 right" 
  >
    Dashboard
  </Link>
  </div>
  </div>
    
     
       
    )
    
    }
    
    }
    
    export default Safety