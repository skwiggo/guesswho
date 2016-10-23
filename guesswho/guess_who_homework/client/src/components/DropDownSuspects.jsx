var React = require('react');

var DropDownSuspects = React.createClass({

  handleChange: function(event){
    var newIndex = event.target.value;
    console.log(newIndex);
    //send info back 
    this.props.suspects(newIndex);
  },

  render: function(){
    var options = this.props.suspects.map(function(suspect, index){
        return <option key={index} value={index}>{suspect}</option>
    })    

    return(
      <select id="suspects" onChange={this.handleChange}>
        {options}
        <option value="Select Suspect">Select Suspect</option>
      </select>
    )
  }
})

module.exports = DropDownSuspects;