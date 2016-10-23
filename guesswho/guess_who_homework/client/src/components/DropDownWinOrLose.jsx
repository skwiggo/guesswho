var React = require('react');

var DropDownWinOrLose = function(props) {
  if(props.suspect != props.CPUSuspect) {
    return(<h2>Nope! Try Again!</h2>)
    }
  else if (props.suspect === props.CPUSuspect) {
    return(<h2>Congratulations, You WIN! Reload to try again!</h2>)
  }
}

module.exports = DropDownWinOrLose;