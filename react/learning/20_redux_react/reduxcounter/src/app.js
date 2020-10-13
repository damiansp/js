import { connect } from 'react-redux';

import Counter from './counter';


function mapStateToProps(state) {
  return {countValue: state.count};
}

let increaseAction = {type: 'increase'};
let decreaseAction = {type: 'decrease'};

function mapDispatchToProps(dispatch) {
  return {increaseCount: function() { return dispatch(increaseAction); },
          decreaseCount: function() { return dispatch(decreaseAction); }};
}

let connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Counter);


export default connectedComponent;
