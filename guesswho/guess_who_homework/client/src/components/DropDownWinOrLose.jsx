var React = require('react');

var DropDownWinOrLose = React.createClass({

  handleClick: function() {
    location.reload()
  },

  render: function() {
  if (this.props.suspect === null) {
    return(<h2>Please select a suspect!</h2>)
  }
  else if(this.props.suspect != this.props.CPUSuspect) {
    return(<h2 className='red'>Oh dear thats not right...guess again!</h2>)
    }
  else if (this.props.suspect === this.props.CPUSuspect) {
    return(
      <div>
      <h2 className='green'>Congratulations, You WIN! Reload to try again!</h2>
      <button className='reload' onClick={this.handleClick}>Reload!</button>
      </div>
      )
    }
  }
})

module.exports = DropDownWinOrLose;