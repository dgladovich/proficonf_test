import React, { Component } from 'react';
import { connect } from 'react-redux'
import {loadAlbumsPage} from "../actions";
import AlbumsComponent from '../components/Albums/AlbumsComponent';


class Albums extends Component {
    componentDidMount(){
        this.props.loadAlbumsPage(1);

    }
    render() {

        return (
            <AlbumsComponent {...this.props} />
        );
    }
}

function mapStateToProps(state) {
    return {...state.albumsReducer}

}

export default connect(mapStateToProps, {loadAlbumsPage})(Albums);