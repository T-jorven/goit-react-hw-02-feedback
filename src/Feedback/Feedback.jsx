import PropTypes from "prop-types";
import s from "../Feedback/Feedback.module.css";
import React, { Component } from "react";

class Feedback extends Component {
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          {this.props.options.map((btn) => (
            <button
              value={btn}
              key={btn}
              type="button"
              onClick={(e) => this.props.onLeaveFeedback(e)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    );
  }
}


export default Feedback;