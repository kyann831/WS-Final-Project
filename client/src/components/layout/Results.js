import React, { Component } from 'react';


class Card extends Component {

render() {
  return(
    
    <div className="col m4">
    <div className="card horizontal">
      <div className="card-stacked">
        <div className="card-content" style={{ width: "75%",
      display: "block",
      textAlign: "left",
      boxSizing: "border-box",
      margin: "0 auto",  }}> {this.props.content}
        </div>
        <div className="card-action" style={{textAlign: "left",
      boxSizing: "border-box",
      margin: "0 auto",}}>
          <a class="black-text left" href={this.props.href}>{this.props.action}</a>
        </div>
      </div>
    </div>
  </div>)
}
    }
class Results extends Component {
    render() {
        return (
            <div>
            <Card content={<h5><p>0-2</p>    <p>--------------------------------------------------------------------------------------</p>
<p>NO. However consider a cane for outings outside the home to maximize safety.</p></h5>}              href="/dashboard" />
            <Card content={<h5><p>3-6</p><p>--------------------------------------------------------------------------------------</p><p>YES. You will benefit from a walker especially in these situations:</p>
                    <p>1. Walking outside the home. (Incline/decline surfaces, hills).</p>
                    <p>2. Walking in areas with debris and variable surfaces. (leaves, slippery areas and uneven pavement).</p>
                    <p>3. Walking around environmental obstacles. (small children, pets, unpredictable sports enthusiasts, people on phones etc).</p>
                    <p>4. Walking in dark or poorly lit areas.</p>
                   <p> 5. Walking when fatigued sick or after having walked a prolonged period of time.</p></h5>} href="/dashboard"/>
            <Card content={<h5><p>7-10</p><p>--------------------------------------------------------------------------------------</p><p>YES. You need a walker for maximum safety when walking and you will benefit from a mobility assessment by a professional. Talk to your doctor and consult a physical therapist specialized in fall prevention.</p></h5>} href="/dashboard" />
            <Card content={<h5>Return to Dashboard</h5>} action="Dashboard" href="/dashboard" />

            </div>
        )

    }

}

export default Results
