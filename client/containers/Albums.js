import React, { Component } from 'react';
import { connect } from 'react-redux'
import {loadAlbumsPage} from "../actions";

class Albums extends Component {
    componentWillMount(){
        this.props.loadAlbumsPage();

    }
    render() {
        return (
            <div className="App">
              Albums
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {...state.albumsReducer}

}

export default connect(mapStateToProps, {loadAlbumsPage})(Albums);