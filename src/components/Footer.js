import React, { Component } from 'react';
import emblem from '../images/emblem.jpg';
import { contactNumber, email, address, postNumber } from '../Text';

import { useMediaQuery } from 'react-responsive';

class Footer extends Component {
    render() {
        const Desktop = ({ children }) => { const isDesktop = useMediaQuery({ minWidth: 1000 }); return isDesktop ? children : null }
        const Tablet = ({ children }) => { const isTablet = useMediaQuery({ minWidth: 751, maxWidth: 999 }); return isTablet ? children : null }
        const Mobile = ({ children }) => { const isMobile = useMediaQuery({ minWidth: 250, maxWidth: 750 }); return isMobile ? children : null }
        return (
            <div>
                <Desktop>
                    <div style={{ float: "left", width: "100%", padding: "50px", backgroundColor: 'black' }}> 
                        <div style={{ float: "left", width: "34%", backgroundColor: 'black' }}>
                            <img src={emblem} alt={"emblem"} />
                        </div>
                        <div style={{ float: "left", width: "33%", backgroundColor: 'black' }}>
                            <p style={{ color: "#37E8F4", fontSize: "20px", fontWeight: "bold" }}>Contact number</p>
                            <p style={{ color: "#37E8F4", fontSize: "20px", fontWeight: "bold" }}>E-mail address</p>
                            <p style={{ color: "#37E8F4", fontSize: "20px", fontWeight: "bold" }}>Address</p>
                            <p style={{ color: "#37E8F4", fontSize: "20px", fontWeight: "bold" }}>Post number</p>
                        </div>
                        <div  style={{ float: "left", width: "33%", backgroundColor: 'black' }}>
                            <p style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>{contactNumber}</p>
                            <p style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>{email}</p>
                            <p style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>{address}</p>
                            <p style={{ color: "white", fontSize: "20px",  fontWeight: "bold" }}>{postNumber}</p>
                        </div>
                    </div>
                </Desktop>
                <Tablet>
                    <div style={{ float: "left", width: "100%", padding: "40px", backgroundColor: 'black' }}> 
                        <div style={{ float: "left", width: "34%", backgroundColor: 'black' }}>
                            <img src={emblem} alt={"emblem"} />
                        </div>
                        <div style={{ float: "left", width: "33%", backgroundColor: 'black' }}>
                            <p style={{ color: "#37E8F4", fontSize: "18px", fontWeight: "bold" }}>Contact number</p>
                            <p style={{ color: "#37E8F4", fontSize: "18px", fontWeight: "bold" }}>E-mail address</p>
                            <p style={{ color: "#37E8F4", fontSize: "18px", fontWeight: "bold" }}>Address</p>
                            <p style={{ color: "#37E8F4", fontSize: "18px", fontWeight: "bold" }}>Post number</p>
                        </div>
                        <div  style={{ float: "left", width: "33%", backgroundColor: 'black' }}>
                            <p style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>{contactNumber}</p>
                            <p style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>{email}</p>
                            <p style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>{address}</p>
                            <p style={{ color: "white", fontSize: "18px",  fontWeight: "bold" }}>{postNumber}</p>
                        </div>
                    </div>
                </Tablet>
                <Mobile>
                <div style={{ float: "left", width: "100%", padding: "25px", backgroundColor: '#3f50b0' }}> 
                        <div style={{ float: "left", width: "50%" }}>
                            <p style={{ color: "black", fontSize: "18px", fontWeight: "bold" }}>Contact number</p>
                            <p style={{ color: "black", fontSize: "18px", fontWeight: "bold" }}>E-mail address</p>
                            <p style={{ color: "black", fontSize: "18px", fontWeight: "bold" }}>Address</p>
                            <p style={{ color: "black", fontSize: "18px", fontWeight: "bold" }}>Post number</p>
                        </div>
                        <div  style={{ float: "left", width: "50%" }}>
                            <p style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>{contactNumber}</p>
                            <p style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>{email}</p>
                            <p style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>{address}</p>
                            <p style={{ color: "white", fontSize: "18px",  fontWeight: "bold" }}>{postNumber}</p>
                        </div>
                    </div>
                </Mobile>
            </div>
        );
    }
}

export default Footer;