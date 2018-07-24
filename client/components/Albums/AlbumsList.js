import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 600,
        // height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});


class TitlebarGridList extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <GridList cellHeight={180} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={3} style={{height: 'auto'}}>
                        <ListSubheader component="div">December</ListSubheader>
                    </GridListTile>
                    {this.props.albums.map(tile => (
                        <GridListTile key={tile.id}>
                            <img src={tile.img} alt={tile.name}/>
                            <GridListTileBar
                                title={tile.name}
                                subtitle={<span>{tile.description}</span>}
                                actionIcon={
                                    <IconButton className={classes.icon}>
                                        <InfoIcon/>
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

TitlebarGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
