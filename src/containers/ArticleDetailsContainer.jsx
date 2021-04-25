import React from 'react';
import { connect } from 'react-redux';
import * as errorActions from '../store/action/errorActions';
import DetailsPage from '../components/DetailPage/DetailPage';
import axios from '../axios/axios-base';
import {withRouter} from 'react-router';

class ArticleDetailsContainer extends React.Component{

    state = {
        article:{}
    }

    fetchArticles = () => {
        
        this.props.dispatchHideError();
        const queryParams = '?orderBy="articleId"&equalTo="' + this.props.history.location.state.articleId + '"';
        axios.get('/articles.json/'+ this.props.history.location.state.articleId, {
            headers: {"Access-Control-Allow-Origin": "*"}
        })
        .then(response => {
            this.setState({
                article: response.data
            });
        })
        .catch(error => {
            this.props.dispatchShowError("Fetch Articles Failed!");
        });
    }

    componentDidMount(){
        this.fetchArticles();
    }
    
    render(){
        return <DetailsPage article={this.state.article}/>;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchShowError: (error) => dispatch({ type: errorActions.SHOW_ERROR, error: error }),
        dispatchHideError: (error) => dispatch({ type: errorActions.HIDE_ERROR})
    }
}

export default withRouter(connect(null, mapDispatchToProps)(ArticleDetailsContainer));