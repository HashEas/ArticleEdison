import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const HeaderBar = (props) => {
    return (
        <nav className="nav-top p-3">
            <div className="container-fluid d-flex align-items-center pad-0 text-white">
                <h2 className="m-0 letter_space_10x text-uppercase">ArtEd</h2>
                <ul className="d-flex list-unstyled list ml-auto m-0">
                    <li><Link to="/">Settings</Link></li>
                    <li><Link to="/">MyArts</Link></li>
                    <li><Link to="/">{props.activeUser}</Link></li>
                </ul>
            </div>
        </nav>
    );
}


const mapStateToProps = state => {
  return {
      activeUser: state.authState.activeUser
  };
}
export default connect(mapStateToProps, null)(HeaderBar);
