import React from 'react';
const FooterBar = (props) => {
    return (
        <footer className="nav-top p-3">
            <div className="container-fluid d-flex align-items-center pad-0 text-white">
                <ul className="d-flex list-unstyled list ml-auto m-0">
                    <li>powered by <span className="subtitle">ReactJS</span></li>
                </ul>
            </div>
        </footer>
    );
}

export default FooterBar;
