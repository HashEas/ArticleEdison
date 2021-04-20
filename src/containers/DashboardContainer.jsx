import React from 'react';
import DashBoardPage from '../components/DashboardPage/DashBoardPage';
import axios from '../axios/axios-base';
import { connect } from 'react-redux';
import * as errorActions from '../store/action/errorActions';

class DashBoardContainer extends React.Component{

    state = {
        articles:[]
    }

    fetchArticles = () => {
        this.props.dispatchHideError();
        axios.get( '/articles.json' )
        .then(response => {
            this.setState({
                articles: response.data
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
        return <DashBoardPage articles={this.state.articles}/>;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchShowError: (error) => dispatch({ type: errorActions.SHOW_ERROR, error: error }),
        dispatchHideError: (error) => dispatch({ type: errorActions.HIDE_ERROR})
    }
}

export default connect(null, mapDispatchToProps)(DashBoardContainer);