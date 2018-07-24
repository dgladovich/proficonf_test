import React, {Component} from 'react';
import {connect} from 'react-redux'
import queryString from 'query-string';
import {withRouter} from "react-router-dom";

import {loadAlbumsPage} from "../actions";
import AlbumsComponent from '../components/Albums/AlbumsComponent';


class Albums extends Component {
    constructor(props) {
        super(props);
        let {pagesCount, pageNumber} = props.pageInfo;
        this.state = {
            total: pagesCount,
            display: 5,
            number: pageNumber,
        };
    }

    componentDidMount() {
        let {history} = this.props;
        let page = +queryString.parse(history.location.search.split('?')[1]).page;
        page = page ? +page : 1;
        this.props.loadAlbumsPage(page);

    }

    componentDidUpdate(prevProps, prevState) {
        let {pagesCount, pageNumber} = this.props.pageInfo;

        if (prevProps.items !==  this.props.items) {
            this.setState({
                total: pagesCount,
                number: pageNumber
            });
        }
    }

    changePage(number) {
        this.props.history.push({pathname: '/albums', search: `?page=${number}`});
        this.props.loadAlbumsPage(number);
    }

    render() {
        return (
            <AlbumsComponent
                changePage={this.changePage.bind(this)}
                total={this.state.total}
                display={this.state.display}
                number={this.state.number}
                albums={this.props.items}
            />
        );
    }
}

function mapStateToProps(state) {
    return {...state.albumsReducer}
}

export default connect(mapStateToProps, {loadAlbumsPage})(withRouter(Albums));