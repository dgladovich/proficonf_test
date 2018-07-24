import React, {Component} from 'react';
import {connect} from 'react-redux'
import queryString from 'query-string';
import {withRouter} from "react-router-dom";

import {loadAlbumsPage} from "../actions";
import AlbumsComponent from '../components/Albums/AlbumsComponent';


class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: props.pageInfo.pagesCount,
            display: 5,
            number: 1,
        };
    }

    componentDidMount() {
        let {history} = this.props;
        let page = +queryString.parse(history.location.search.split('?')[1]).page;
        page = page ? +page : 1;
        this.props.loadAlbumsPage(page);

    }
    shouldComponentUpdate(nextProps, state){
        console.log(nextProps, state)
    }

    changePage(page) {
        this.props.history.push({pathname: '/albums', search: `?page=${page}`});
        this.props.loadAlbumsPage(page);

    }

    render() {
        console.log(this.props)
        return (
            <AlbumsComponent
                changePage={this.changePage.bind(this)}

                total={this.state.total}
                display={this.state.display}
                number={this.state.number}
            />
        );
    }
}

function mapStateToProps(state) {
    return {...state.albumsReducer}
}

export default connect(mapStateToProps, {loadAlbumsPage})(withRouter(Albums));