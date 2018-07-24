import React, { Component } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
import Pagination from 'material-ui-pagination';

class Albums extends Component {
    constructor(props) {
        super(props);
        console.log(props)

    }
    changePage(){
        this.props.changePage(this.state.number)
    }
    render() {
       // console.log(this.props)
        return (
            <div className="App">
                <button onClick={this.changePage.bind(this)}>next page</button>
                <Pagination
                    total = { this.props.total }
                    current = { this.props.number }
                    display = { this.props.display }
                    /*onChange = { number => this.setState({ number }) }*/
                />
            </div>
        );
    }
}


export default Albums;