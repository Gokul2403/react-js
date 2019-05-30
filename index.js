import React from "react";
import ReactDOM from "react-dom";
import createReactClass from 'create-react-class';

import "./style.css";

var Appcomp = createReactClass({
  getDefaultProps : function(){
    return{
      element1 : "hello",
      element2 :"world",
    };
  },

   render: function() {
    return(
      <div>
      <h1>{this.props.element1}{this.props.element2}</h1>
      </div>
    )
  }
});

ReactDOM.render(<Appcomp>element2 ={"hello"}</Appcomp>, document.getElementById("root"));