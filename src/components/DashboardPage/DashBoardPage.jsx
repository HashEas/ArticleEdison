/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import FooterBar from '../FooterBar/FooterBar';
import HeaderBar from '../HeaderBar/HeaderBar';
import ArticleJPG from '../../assets/article1.jpg'

const ArticlesPage = (props) => {
    return (
        <div className="col-12 col-md-6 col-xl-6 text-white">
            <div className="bg-white d-flex align-items-center justify-content-center h2 block">
                <div className="description row align-items-center justify-content-center">
                    <div className="col-12 col-md-12 col-xl-12">
                        The new common language will be more simple and regular than the existing European languages.
                    </div>
                </div>
                <a className="d-flex flex-column align-items-end block fill" href="">
                    <img src={"data:image/png;base64," + props.article.img} alt="articleImage"/>
                </a>
            </div>
        </div>
    );
}

const DashBoardPage = (props) => {

  return (
    <>
        <HeaderBar />
        <section className="d-flex text-center home_page_section">
            <div className="container mt-4">
                <div className="row">
                    {
                        props.articles && Object.keys(props.articles).map((articleKey) => {
                            return <ArticlesPage key={articleKey} article={props.articles[articleKey]}/>
                        })
                    }
                </div>
            </div>
        </section>
        <FooterBar />
    </>
  );
}

export default DashBoardPage;
