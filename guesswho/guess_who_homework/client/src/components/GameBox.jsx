var React = require('react');
var DropDownSuspects = require('./DropDownSuspects');
var DropDownWinOrLose = require('./DropDownWinOrLose');

var GameBox = React.createClass({

  getInitialState: function() {
    return {suspects: ["Rod", "Jane", "Freddy", "Zippy", "Bungle", "George", "Geoffrey"], CPUSuspect: null, focusSuspect: null}
  },

  setFocusSuspect: function(index){
    var newEntry = this.state.suspects[index];
    this.setState({focusSuspect: newEntry});
  },

  setCPUSuspect: function() {
    var randomSuspect = this.state.suspects[Math.floor(Math.random() * this.state.suspects.length)];
    this.setState({CPUSuspect: randomSuspect})
   },

   componentDidMount: function() {
    this.setCPUSuspect();
   },
  
   render: function() {
    return(
      <div>
        <h2 className="rainbow">Guess Rainbow!</h2>
        <h4>Guess which member of the Rainbow cast has stolen the last piece of cake?</h4>
        <img src='http://i.dailymail.co.uk/i/pix/2014/10/19/1413724438287_wps_71_B3JXC6_RAINBOW_1970s_UK_T.jpg' width="500px" height="300px"></img><br />
        <DropDownSuspects suspects = {this.state.suspects} selectSuspect = {this.setFocusSuspect}></DropDownSuspects>
        <DropDownWinOrLose suspect = {this.state.focusSuspect} CPUSuspect = {this.state.CPUSuspect}>Please select a d</DropDownWinOrLose>
      </div>
    )
  }

})

module.exports = GameBox;
