import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Link} from 'react-router-dom';
import Pagination from 'material-ui-pagination';
import AlbumsList from './AlbumsList';
class Albums extends Component {
    constructor(props) {
        super(props);

    }
    render() {

        return (
            <div className="App">
                <Link to={'/albumscreate'}>Create album</Link>
                <AlbumsList albums={this.props.albums} />
                <Pagination
                    total = { this.props.total }
                    current = { this.props.number }
                    display = { this.props.display }
                    onChange = { this.props.changePage }
                />
            </div>
        );
    }
}


export default Albums;