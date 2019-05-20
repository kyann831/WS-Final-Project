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

class DropContainer extends Component {
      constructor() {
        super();
        axios
          .post("/api/userdata/get")
          .then(resp => {
            this.state = {
              testscore: resp.data.testscore || '',
              corefive: resp.data.corefive || '',
              otherexercise: resp.data.otherexercise || ''
            }
          })
          .catch(err => console.log(err));
      }

      updateUserdata = () => {
        axios
          .post("/api/userdata/update", this.state)
          .catch(err => console.log(err));
      }
    
      handleInputChange = event => {
        const { name, text } = event.target;
        this.setState({
          [name]: text
        }, this.updateUserdata);
      };

    render() {
        return(
            <div><div className="col s4 .left-align"><Drop handleChange={this.handleInputChange} name="testscore" text="Log Test Score" text1="1" text2="2" text3="3" text4="4" text5="5" text6="6" text7="7" text8="8" text9="9" text10="10" /> </div>  
    <div className="col s4 .center-align"> <Drop handleChange={this.handleInputChange} name="corefive" text="I did the Core 5" text1="Yes" text2="No"  /></div>
    <div className="col s4 .right-align"> <Drop handleChange={this.handleInputChange} name="otherexercise" text="I did 2 other Exercise" text1="Yes" text2="No"  /></div>
    </div>
        )
    }
}
class Drop extends Component {
    render() {
        return(
<div className="div1" style={{marginTop: "50px", marginBottom: "50px", marginLeft: "120px"}}>

<Dropdown trigger={<Button>{this.props.text}</Button>}>
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
    width: '75%',
    // marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    marginLeft: 150,
    marginTop: 100,
    marginBottom: 100

    
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
              <TableCell align="right">{row.Wednesday}</TableCell>
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
    </div>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
