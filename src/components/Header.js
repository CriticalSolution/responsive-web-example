import React from 'react';
import emblem from '../images/emblem.jpg';
import { withRouter, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const Desktop = ({ children }) => { const isDesktop = useMediaQuery({ minWidth: 1000 }); return isDesktop ? children : null }
    const Tablet = ({ children }) => { const isTablet = useMediaQuery({ minWidth: 751, maxWidth: 999 }); return isTablet ? children : null }
    const Mobile = ({ children }) => { const isMobile = useMediaQuery({ minWidth: 250, maxWidth: 750 }); return isMobile ? children : null }

    return (
        <div>
            <Tablet>
                <div style={{ float: "left", width: "100%", padding: "10px", backgroundColor: 'black' }}>
                    <div style={{ float: "left", width: "60%", backgroundColor: 'black' }}>
                        <img src={emblem} alt={"emblem"} />
                    </div>
                    <div style={{ float: "left", width: "40%", backgroundColor: 'black', paddingTop: "80px" }}>
                        <Link to="/Home" style={{ color: "#37E8F4", fontSize: "20px", paddingLeft: "30px", fontWeight: "bold" }}>Home</Link>
                        <Link to="/Services" style={{ color: "#37E8F4", fontSize: "20px", paddingLeft: "30px", fontWeight: "bold" }}>Services</Link>
                        <Link to="/ListPage" style={{ color: "#37E8F4", fontSize: "20px", paddingLeft: "30px", fontWeight: "bold" }}>ListPage</Link>
                        <Link to="/About" style={{ color: "#37E8F4", fontSize: "20px", paddingLeft: "30px", fontWeight: "bold" }}>About</Link>
                        <Link to="/Contact" style={{ color: "#37E8F4", fontSize: "20px", paddingLeft: "30px", fontWeight: "bold" }}>Contact</Link>
                    </div>
                </div>
            </Tablet>
            <Mobile>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                            <MenuIcon />
                            <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)}>
                                <MenuItem><Link to="/Services" style={{ color: "black" }}>Services</Link></MenuItem>
                                <MenuItem><Link to="/ListPage" style={{ color: "black" }}>ListPage</Link></MenuItem>
                                <MenuItem><Link to="/About" style={{ color: "black" }}>About</Link></MenuItem>
                                <MenuItem><Link to="/Contact" style={{ color: "black" }}>Contact</Link></MenuItem>
                            </Menu>
                        </IconButton>
                        <Typography variant="h6" >WEBSITE NAME</Typography>
                        <Button color="inherit" style={{ position: "absolute", right: 0 }}><MenuItem><Link to="/Home" style={{ color: "white" }}>Home</Link></MenuItem></Button>
                    </Toolbar>
                </AppBar>
            </Mobile>
            <Desktop>
                <div style={{ float: "left", width: "100%", padding: "10px", backgroundColor: 'black' }}>
                    <div style={{ float: "left", width: "60%", backgroundColor: 'black' }}>
                        <img src={emblem} alt={"emblem"} />
                    </div>
                    <div style={{ float: "left", width: "40%", backgroundColor: 'black', paddingTop: "80px" }}>
                        <Link to="/Home" style={{ color: "#37E8F4", fontSize: "24px", paddingLeft: "35px", fontWeight: "bold" }}>Home</Link>
                        <Link to="/Services" style={{ color: "#37E8F4", fontSize: "24px", paddingLeft: "35px", fontWeight: "bold" }}>Services</Link>
                        <Link to="/ListPage" style={{ color: "#37E8F4", fontSize: "24px", paddingLeft: "35px", fontWeight: "bold" }}>ListPage</Link>
                        <Link to="/About" style={{ color: "#37E8F4", fontSize: "24px", paddingLeft: "35px", fontWeight: "bold" }}>About</Link>
                        <Link to="/Contact" style={{ color: "#37E8F4", fontSize: "24px", paddingLeft: "35px", fontWeight: "bold" }}>Contact</Link>
                    </div>
                </div>
            </Desktop>
        </div>
    );
}

export default withRouter(Header);