import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';



const NavBarComponent = (props) => {
    const isActive = path => {
        if (props.match.path === path) {
            return { color: '#000' };
        } else {
            return { color: '#fff' };
        }
    };
    
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
    
    
        },
        menuButton: {
            marginRight: theme.spacing(4),
        },
        navLayout: {
            display: 'flex',
            justifyContent: 'flex-start'
        },
        title: {
            flexGrow: 0.3,
            fontSize: '15px'
        },
    }));
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.navLayout}>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className="nav-link" style={isActive('/')}>
                            Reciepes
                </Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/mylist" className="nav-link" style={isActive('/mylist')}>
                            Favourites
                </Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/search" className="nav-link" style={isActive('/search')}>
                            Search Reciepies
                </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default NavBarComponent