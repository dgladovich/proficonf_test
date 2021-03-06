import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './components/App/App'
import AlbumsContainer from './containers/Albums';
import PhotosContainer from './containers/Photos';
import PhotoContainer from './containers/Photos';
import AlbumsEditor from './components/Albums/AlbumEditor';




const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <App>
                <Route exact path="/" component={AlbumsContainer}/>
                <Route exact path="/albums" component={AlbumsContainer}/>
                <Route exact path="/albumscreate" component={AlbumsEditor}/>
                <Route path="/albums/:albumId" component={PhotosContainer}/>
                <Route path="/photos/:photoId" component={PhotoContainer}/>
            </App>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root