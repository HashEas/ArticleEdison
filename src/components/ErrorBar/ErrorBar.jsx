import React from 'react';
import { connect } from 'react-redux';
const ErrorBar = (props) => {
  if(props.error)
    return (
      <section className="d-flex text-center error_bar">
        {props.error}
      </section>
    );
  return null;
}

const mapStateToProps = state => {
  return {
      error: state.errorState.error
  };
}


export default connect(mapStateToProps, null)(ErrorBar);
