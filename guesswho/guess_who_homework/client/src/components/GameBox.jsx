var React = require('react');

var GameBox = React.createclass({

  getInitialState: function() {
    return {suspects: ["Rod", "Jane", "Freddy", "Zippy", "Bungle", "George", "Geoffrey"], CPUSuspect: []}
  }

  getCPUSuspect: function() {
    var randomSuspect = this.state.suspects[Math.floor(Math.random() * this.state.suspects.length)];
    this.state.CPUSuspect.push(randomSuspect);
    return this.state.CPUSuspect;
   }
  
   componentDidMount: function() {
    var newSuspect = this.getCPUSuspect()
    this.setState = {CPUSuspect: newSuspect}
   }

   render: function() {
    return({
      <div>
      <h2>Guess Rainbow!</h2>
      <h4>Guess who has stolen the last piece of cake?</h4>
      <DropDownSuspects></DropDownSuspects>
      <DropDownWinOrLose></DropDownWinOrLose>
      </div>
    })
   }











})

module.exports = GameBox;
