/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import FooterBar from '../FooterBar/FooterBar';
import HeaderBar from '../HeaderBar/HeaderBar';
import ArticleJPG from '../../assets/article2.jpg'
import { Link } from 'react-router-dom';

const DetailsPage = (props) => {
  return (
    <>
    <HeaderBar />
        <section className="d-flex text-center bg-color-ff home_page_section">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 col-md-12 col-xl-12">
                        <h2>Silambarasan okays a six-minute scene for Maanaadu in a single take</h2>
                    </div>
                </div>
                <div className="row border-top">
                    <div className="col-12 col-md-12 col-xl-12">
                        <div className="mt-1 mb-4 mr-4 float-right">posted by: <strong>Hari Easvaran</strong></div>
                    </div>
                </div>
                <div className="row border-bottom">
                    <div className="col-12 col-md-6 col-xl-6">
                        <div className="bg-white d-flex align-items-center justify-content-center h2 ml-3">
                            <a className="d-flex flex-column align-items-end block fill" href="">
                            <img src={ArticleJPG} alt="articleImage"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-9 col-xl-9 mt-3 mb-3">
                    <p className="text-left">
                        Be it romance, dance, drama, action, or sentimental scene, Silambarasan TR is one actor who always manages to ace it all. Then, it’s no wonder that the actor okayed a six-minute scene in Venkat Prabhu’s Maanaadu in a single take, leaving the makers impressed.
                        A source says, “The team of Maanaadu — a film set in the political backdrop in which Simbu will be playing Abdul Khaaliq — has been shooting in and around Chennai. A couple of days ago, they filmed a sequence featuring the actor, Kalyani Priyadarshan, SJ Suryah, Premgi, and Karunakaran. Simbu, who had an important scene in it, finished it in just one single take. The entire cast and crew, who were present on the spot, were mighty impressed with the conviction with which he performed and burst into applause the minute Venkat Prabhu called for a ‘cut’.”
                    </p>
                </div>

                <div className="row border-bottom">
                    <div className="col-12 col-md-12 col-xl-12">
                        <div className="mt-1 mb-4 mr-4">
                            <Link 
                                to="/"
                                className="btn rounded-0 launch_btn btn-dark" type="submit">
                                Browse others
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <FooterBar />
    </>
  );
}

export default DetailsPage;
