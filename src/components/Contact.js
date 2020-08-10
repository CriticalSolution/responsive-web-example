import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import { Mailbox, Telephone, Compass, Clock, Envelope } from 'react-bootstrap-icons';
import address from '../images/address.jpg';

import { useMediaQuery } from 'react-responsive';

class Contact extends Component {
  render() {
    const Desktop = ({ children }) => { const isDesktop = useMediaQuery({ minWidth: 1000 }); return isDesktop ? children : null }
    const Tablet = ({ children }) => { const isTablet = useMediaQuery({ minWidth: 751, maxWidth: 999 }); return isTablet ? children : null }
    const Mobile = ({ children }) => { const isMobile = useMediaQuery({ minWidth: 250, maxWidth: 750 }); return isMobile ? children : null }
    return (
      <div>
        <Desktop>
            <Header />
            <br />
            <div style={{ float: "left", width: "100%", padding: "50px" }}>
              <div style={{ float: "left", width: "50%" }}>
                <center><img src={address} alt={"contact"} style={{ width: 400 }} /></center>
              </div>
              <div style={{ float: "left", width: "10%"}}>
                <Telephone color="royalblue" size={48} /><br/>
                <Envelope color="royalblue" size={48} /><br/>
                <Mailbox color="royalblue" size={48} /><br/>
                <Compass color="royalblue" size={48} /><br/>
                <Clock color="royalblue" size={48} />
              </div>
              <div style={{ float: "left", width: "40%"}}>
                <p style={{ color: "black", fontSize: "20px", paddingTop: "5px", fontWeight: "bold" }}>000-000-000</p>
                <p style={{ color: "black", fontSize: "20px", paddingTop: "5px", fontWeight: "bold" }}>example@example.example</p>
                <p style={{ color: "black", fontSize: "20px", paddingTop: "5px", fontWeight: "bold" }}>0000</p>
                <p style={{ color: "black", fontSize: "20px", paddingTop: "5px", fontWeight: "bold" }}>example</p>
                <p style={{ color: "black", fontSize: "20px", paddingTop: "5px", fontWeight: "bold" }}>Monday-Saturday : from 08.00 til 15.00</p>
              </div>
            </div>
            <Footer />
        </Desktop>
        <Mobile>
            <Header />
            <br />
            <center><img src={address} alt={"contact"} style={{ width: 300 }} /></center>
            <div style={{ float: "left", width: "100%", padding: "50px", backgroundColor: "white" }}>
              <div style={{ float: "left", width: "30%"}}>
                <Telephone color="royalblue" size={48} /><br/>
                <Envelope color="royalblue" size={48} /><br/>
                <Mailbox color="royalblue" size={48} /><br/>
                <Compass color="royalblue" size={48} /><br/>
                <Clock color="royalblue" size={48} />
              </div>
              <div style={{ float: "left", width: "70%"}}>
                <p style={{ color: "black", fontSize: "20px", paddingTop: "5px", fontWeight: "bold" }}>000-000-000</p>
                <p style={{ color: "black", fontSize: "20px", paddingTop: "5px", fontWeight: "bold" }}>example@example.example</p>
                <p style={{ color: "black", fontSize: "20px", paddingTop: "5px", fontWeight: "bold" }}>0000</p>
                <p style={{ color: "black", fontSize: "20px", paddingTop: "5px", fontWeight: "bold" }}>example</p>
                <p style={{ color: "black", fontSize: "20px", paddingTop: "5px", fontWeight: "bold" }}>Monday-Saturday : from 08.00 til 15.00</p>
              </div>
            </div>
            <br />
            <Footer />
        </Mobile>
        <Tablet>
        <Header />
            <br />
            <div style={{ float: "left", width: "100%", padding: "50px" }}>
              <div style={{ float: "left", width: "50%" }}>
                <center><img src={address} alt={"Kontakt"} style={{ width: 400 }} /></center>
              </div>
              <div style={{ float: "left", width: "10%"}}>
                <Telephone color="royalblue" size={48} /><br/>
                <Envelope color="royalblue" size={48} /><br/>
                <Mailbox color="royalblue" size={48} /><br/>
                <Compass color="royalblue" size={48} /><br/>
                <Clock color="royalblue" size={48} />
              </div>
              <div style={{ float: "left", width: "40%"}}>
                <p style={{ color: "black", fontSize: "20px", paddingTop: "5px", fontWeight: "bold" }}>000-000-000</p>
                <p style={{ color: "black", fontSize: "20px", paddingTop: "5px", fontWeight: "bold" }}>example@example.example</p>
                <p style={{ color: "black", fontSize: "20px", paddingTop: "5px", fontWeight: "bold" }}>0000</p>
                <p style={{ color: "black", fontSize: "20px", paddingTop: "5px", fontWeight: "bold" }}>example</p>
                <p style={{ color: "black", fontSize: "20px", paddingTop: "5px", fontWeight: "bold" }}>Monday-Saturday : from 08.00 til 15.00</p>
              </div>
            </div>
            <Footer />
        </Tablet>
      </div>
    )
  }
}

export default Contact;