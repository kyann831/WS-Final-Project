import React, { Component } from 'react';
import { Link } from "react-router-dom";



class Quiz extends Component {
    constructor(props) {
      super(props)
      
      var dataSet = [
        {
          question: "1. I have skipped one or more outings in the last 6 months because I was afraid I might fall or be unable to keep up with the group.",
          answers: [
            "Yes",
            "No",
          ],
          correct: 0
        },
        {
          question: "2. I hold onto furniture when I walk through the house.",
              answers: [
                "Yes",
                "No",
               
              ],
              correct: 0
        },
        {
            question: "3. I hold onto a loved ones arm when I leave the house.",
                answers: [
                  "Yes",
                  "No",
                 
                ],
                correct: 0
          },
            {
              question: "4. I have pain in one or all of the following body parts, (Back, Hip, Knee, Foot) that I would rate a 7 or higher. *(On a 0-10 scale 0 is no pain and 10 is the most awful pain imaginable).",
              answers: [
                "Yes",
                "No",
               
              ],
              correct: 0
            },
            {
              question: "5. I have been diagnosed with peripheral neuropathy and I cannot feel the bottom of my feet very well.",
              answers: [
                "Yes",
                "No",
              ],
              correct: 0
            },
            {
              question: "6. I cannot stand and turn in place without falling. (Try this before you answer so you really know!)",
              answers: [
                "Yes",
                "No",
              ],
              correct: 0
            },
            {
              question: "7. I have already had a fall in the last 6 months.",
              answers: [
                "Yes",
                "No",
              ],
              correct: 0
            },
            {
              question: "8. I avoid curbs and any steps because I am too weak to do them or am afraid I might fall. *You must perform the task to obtain the correct answer. Find a small step in the home or a curb in the community and see how you do. If you can step up without wobbles or sway then your answer stays NO. If you wobble or sway, then it’s really a YES.",
              answers: [
                "Yes",
                "No",
              ],
              correct: 0
            },
            {
              question: "9. I take more than 4 medications.",
              answers: [
                "Yes",
                "No",
              ],
              correct: 0
            },
            {
              question: "10. I already think I might need a walker or a cane.",
              answers: [
                "Yes",
                "No",
              ],
              correct: 0
            },
            {
              question: "Your total score is as above. Click below to understand test results.",
              answers: [
                "Yes",
                "No",
              ],
              correct: 0
            },
      ];
      
      this.state = {current:0, dataSet:dataSet, correct:0, incorrect:0}
      this.handleClick = this.handleClick.bind(this)
      
    } // end constructor
    
    handleClick(choice) {
      if (choice === this.state.dataSet[this.state.current].correct) {
        this.setState({correct: this.state.correct + 1})
      } else {
        this.setState({incorrect: this.state.incorrect + 1})
      }

      if(this.state.current === 9) {
        alert("Click yes to test again.");
       
      }
      
      if (this.state.current === 10) {
        this.setState({current: 0})
        this.setState({incorrect: 0})
        this.setState({correct: 0})
      } 
      else {
           this.setState({current: this.state.current + 1}) 
      }
    }
    
    render() {
      return(
        <div>
          <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />
          <QuizArea 
            handleClick={this.handleClick} 
            dataSet={this.state.dataSet[this.state.current]}
            finished={this.state.current === 10} 
          />
          <div className="col s6">
            <Link
            to="/dashboard"
            style={{
              width: "200px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginLeft: 380,
              marginTop: 20,
              marginRight: 40
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
  
  function Question(props) {
    var style = {
      color: "black",
    }
    return (
      <h4 style={style}>{props.dataSet.question}</h4>
    )
  }
  
  function Answer(props) {
    var style = {
      width: "100%",
      float: "right",
      height: 50,
      color: "blue",
      backgroundColor: "white"
    }
    return(
      <div>
        <button style={style} onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
      </div>
    )
  }
  
  function AnswerList(props) {
    var answers = []
    for (let i = 0; i < props.dataSet.answers.length; i++) {
      answers.push(<Answer choice={i} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
    }
    return(
      <div>
        {answers}
      </div>
    )
  }
  
  function QuizArea(props) {
    var style = {
      width: "60%",
      float: "right",
      display: "block",
      textAlign: "center",
      boxSizing: "border-box",
      border: "1px solid black",
      justifyContent: "center",
      marginRight: 40
    }
            
    return(
      <div style={style}>
        <Question dataSet={props.dataSet} />
        <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
        <RenderLink finished={props.finished} />
      </div>
    )
  }

  function RenderLink(props) {
    if (props.finished) {
      return (
        <div className="col s6">
        <Link to="/results"
          style={{
            width: "400px",
            borderRadius: "3px",
            color: "black",
            letterSpacing: "1.5px"
          }}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          I want to understand my result
        </Link>
      </div>
      )
    } else {
      return null
    }
  }
  
  function TotalCorrect(props) {
      var style = {
      display: "inline-block",
      padding: "1em",
      background: "#eee",
      margin: "0 1em 0 0"
    }
    return(
      <h4 style={style}>My Score: {props.correct}</h4>
    )
  }
  
  function ScoreArea(props) {
    var style = {
      width: "100%",
      display: "block",
      textAlign: "center",
      margin: "0 auto",
      padding: "2em"
    }
    return(
      <div style={style} >
        <TotalCorrect correct={props.correct} />
      </div>
    )
    
  }
  
  export default Quiz