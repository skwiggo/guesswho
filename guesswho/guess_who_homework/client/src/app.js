var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./components/GameBox.jsx');

window.onload = function(){
  ReactDOM.render(
    <GameBox/>,
    document.getElementById('app')
  );
}
