import React from "react";
import { connect } from "react-redux";

import * as actions from "../store/numbers-actions.js";

function Numbers(props) {
  return <div onClick={props.handleReset}>{props.numbers.currentNumber}</div>;
}

const mapStateToProps = state => ({
  numbers: state.numbers
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleReset: () => dispatch(actions.numberChanger())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Numbers);
