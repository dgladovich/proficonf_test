import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadPhotosPage} from "../actions";

class Photos extends Component {
    componentWillMount(){
        this.props.loadPhotosPage();

    }
    render() {
        return (
            <div className="App">
                Photos
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {...state.albumsReducer}

}

export default connect(mapStateToProps, {loadPhotosPage})(Photos);