import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Dropdown, Button} from "react-materialize";
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



class DropContainer extends Component {
      constructor() {
        super();
        this.state = {
          testscore: '',
          corefive: '',
          otherexercise: ''
        }
      }

      updateUserdata = () => {
        axios
          .post("/api/userdata/update", this.state)
          .catch(err => console.log(err));
        document.getElementsByClassName('wed')[0].innerHTML =this.state.testscore;
        document.getElementsByClassName('wed')[1].innerHTML =this.state.corefive;
        document.getElementsByClassName('wed')[2].innerHTML =this.state.otherexercise;
      }
    
      handleInputChange = event => {
        const { name, text } = event.target;
        this.setState({
          [name]: text
        }, this.updateUserdata);
      };

    render() {
        return(
          <div className="row">
           <div className="col 4 left align" style={{marginLeft: 450}}><Drop handleChange={this.handleInputChange} name="testscore" text="Log Test Score" text1="1" text2="2" text3="3" text4="4" text5="5" text6="6" text7="7" text8="8" text9="9" text10="10"/></div>
            <div className="col 4 center align"><Drop handleChange={this.handleInputChange} name="corefive" text="I did the Core 5" text1="Yes" text2="No"/></div>
            <div className="col 4 right align"><Drop handleChange={this.handleInputChange} name="otherexercise" text="I did 2 other Exercise" text1="Yes" text2="No"  />
          </div>
          </div>
        )
    }
}
class Drop extends Component {
    render() {
        return(
<div className="div1" style={{marginTop: "75px", marginBottom: "50px", marginLeft: "120px"}}>

<Dropdown trigger={<Button style={{background: "#2196F3"}}>{this.props.text}</Button>}>
<a href={this.props.href} name={this.props.name} onClick={this.props.handleChange}>
{this.props.text1}
</a>
<a href={this.props.href} name={this.props.name} onClick={this.props.handleChange}>
{this.props.text2}
</a>
<a href={this.props.href} name={this.props.name} onClick={this.props.handleChange}>
{this.props.text3}

</a>
<a href={this.props.href} name={this.props.name} onClick={this.props.handleChange}>
{this.props.text4}
</a>
<a href={this.props.href} name={this.props.name} onClick={this.props.handleChange}>
{this.props.text5}

</a>
<a href={this.props.href} name={this.props.name} onClick={this.props.handleChange}>
{this.props.text6}

</a>
<a href={this.props.href} name={this.props.name} onClick={this.props.handleChange}>
{this.props.text7}
</a>
<a href={this.props.href} name={this.props.name} onClick={this.props.handleChange}>
{this.props.text8}

</a>
<a href={this.props.href} name={this.props.name} onClick={this.props.handleChange}>
{this.props.text9}

</a>
<a href={this.props.href} name={this.props.name} onClick={this.props.handleChange}>
{this.props.text10}

</a>


</Dropdown></div>

        )
    }
}


const styles = theme => ({
  root: {
    width: '67%',
    // marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    marginTop: 50,
    marginBottom: 100,
    float: "right",
    marginRight: 10

    
  },
  table: {
    minWidth: 700,
    justifyContent:'center', textAlign:'center',
   
  },
});

let id = 0;
function createData(Weekly, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday) {
  id += 1;
  return { id, Weekly, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, };
}

const rows = [
  createData("My Test Scores", 10, "", "", 9, "", 9, ""),
  createData('Core 5', "Yes", "", "", "Yes", "No", "", "Yes"),
  createData("Other Exercise", "Yes", "", "", "Yes", "No", "", "Yes"),
];

function SimpleTable(props) {
  const { classes } = props;

  return (

<div className="row">    
  <DropContainer />
    <div className="datatable" style={{marginTop: "100", marginBottom: "100"}}>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Weekly</TableCell>
            <TableCell align="right">Monday</TableCell>
            <TableCell align="right">Tueday</TableCell>
            <TableCell align="right">Wednesday</TableCell>
            <TableCell align="right">Thursday</TableCell>
            <TableCell align="right">Friday</TableCell>
            <TableCell align="right">Saturday</TableCell>
            <TableCell align="right">Sunday</TableCell>



          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.Weekly}
              </TableCell>
              <TableCell align="right">{row.Monday}</TableCell>
              <TableCell align="right">{row.Tuesday}</TableCell>
              <TableCell align="right" className="wed">{row.Wednesday}</TableCell>
              <TableCell align="right">{row.Thursday}</TableCell>
              <TableCell align="right">{row.Friday}</TableCell>
              <TableCell align="right">{row.Saturday}</TableCell>
              <TableCell align="right">{row.Sunday}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
    <div><Link
    to="/dashboard"
    style={{
      width: "200px",
      borderRadius: "3px",
      letterSpacing: "1.5px",
      marginLeft: 400,  
      marginRight: 10
          }}
    className="btn btn-large waves-effect waves-light hoverable blue accent-3 right" 
  >
    Dashboard
  </Link></div>
  </div>

  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(SimpleTable);
