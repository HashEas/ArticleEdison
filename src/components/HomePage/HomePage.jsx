import React from 'react';
import { Link } from 'react-router-dom';
const HomePage = (props) => {
  return (
    <section className="d-flex text-center home_page_section">
      <div className="container d-flex justify-content-center">
          <div className="row align-items-center justify-content-center">
              <div className="text-white">
                  <h1 className="title">Article Edisons</h1>
                  <p className="subtitle">List of interesting Editions of Articles to Browse through</p>
                  <Link 
                      to="/login"
                      className="btn border-white text-white rounded-0 launch_btn">
                  Get Started</Link>
              </div>
          </div>
      </div>
    </section>
  );
}

export default HomePage;
