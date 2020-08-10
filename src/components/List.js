import React, { Component } from 'react'

import { useMediaQuery } from 'react-responsive';

class Price extends Component {
    render() {
        const Desktop = ({ children }) => { const isDesktop = useMediaQuery({ minWidth: 1000 }); return isDesktop ? children : null }
        const Tablet = ({ children }) => { const isTablet = useMediaQuery({ minWidth: 751, maxWidth: 999 }); return isTablet ? children : null }
        const Mobile = ({ children }) => { const isMobile = useMediaQuery({ minWidth: 250, maxWidth: 750 }); return isMobile ? children : null }
        return (
            <div >
                <Desktop>
                    <div style={{ color: "#37E8F4", backgroundColor: 'black' }}>
                        <div style={{ float: "left", width: "100%", color: "#37E8F4", backgroundColor: 'black' }}>
                            <br/>
                            <h1 style={{ color: '#37E8F4', textAlign: 'center', fontWeight: 'bold'}}>List</h1>
                            <div style={{ float: "left", width: "30%" }}>
                                <h2 style={{ color: '#a20444', textAlign: 'justify', fontWeight: 'bold', paddingTop: "50px" }}>Title</h2>
                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                            </div>
                            <div style={{ float: "left", width: "30%" }}>
                                <h2 style={{ color: '#a20444', textAlign: 'justify', fontWeight: 'bold', paddingTop: "50px" }}>Title</h2>
                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                            </div>
                            <div style={{ float: "left", width: "20%" }}>
                                <h2 style={{ color: '#a20444', textAlign: 'justify', fontWeight: 'bold', paddingTop: "50px" }}>Title</h2>
                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px"}}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px"}}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px"}}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px"}}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                            </div>
                            <div style={{ float: "left", width: "20%" }}>
                                <h2 style={{ color: '#a20444', textAlign: 'justify', fontWeight: 'bold', paddingTop: "50px" }}>Title</h2>
                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px"}}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                            </div>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                <div style={{ color: "#37E8F4", backgroundColor: 'black' }}>
                        <div style={{ float: "left", width: "100%", color: "#3f50b0", backgroundColor: 'black' }}>
                            <br/>
                            <h1 style={{ color: '#37E8F4', textAlign: 'center', fontWeight: 'bold'}}>List</h1>
                            <div style={{ float: "left", width: "70%" }}>
                                <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "25px" }}>Title</h2>
                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                            </div>
                            <div style={{ float: "left", width: "30%" }}>
                                <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "25px" }}>Title</h2>
                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px"}}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px"}}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px"}}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px"}}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "25px" }}>explanation</h2>
                            </div>
                        </div>
                    </div>
                </Mobile>
                <Tablet>
                <div style={{ color: "#37E8F4", backgroundColor: 'black' }}>
                        <div style={{ float: "left", width: "100%", color: "#37E8F4", backgroundColor: 'black' }}>
                            <br/>
                            <h1 style={{ color: '#37E8F4', textAlign: 'center', fontWeight: 'bold'}}>List</h1>
                            <div style={{ float: "left", width: "30%" }}>
                                <h2 style={{ color: '#a20444', textAlign: 'justify', fontWeight: 'bold', paddingTop: "50px" }}>Title</h2>
                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                            </div>
                            <div style={{ float: "left", width: "30%" }}>
                                <h2 style={{ color: '#a20444', textAlign: 'justify', fontWeight: 'bold', paddingTop: "50px" }}>Title</h2>
                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                            </div>
                            <div style={{ float: "left", width: "20%" }}>
                                <h2 style={{ color: '#a20444', textAlign: 'justify', fontWeight: 'bold', paddingTop: "50px" }}>Title</h2>
                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px"}}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px"}}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px"}}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px"}}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                            </div>
                            <div style={{ float: "left", width: "20%" }}>
                                <h2 style={{ color: '#a20444', textAlign: 'justify', fontWeight: 'bold', paddingTop: "50px" }}>Title</h2>
                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px"}}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>

                                <h2 style={{ color: '#37E8F4', textAlign: 'justify', fontWeight: 'bold'}}>Subtitle</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                                <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
                            </div>
                        </div>
                    </div>
                </Tablet>
            </div>
        )
    }
}

export default Price;