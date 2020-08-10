import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';

import { useMediaQuery } from 'react-responsive';

class About extends Component {
  render() {
    const Desktop = ({ children }) => { const isDesktop = useMediaQuery({ minWidth: 1000 }); return isDesktop ? children : null }
    const Tablet = ({ children }) => { const isTablet = useMediaQuery({ minWidth: 751, maxWidth: 999 }); return isTablet ? children : null }
    const Mobile = ({ children }) => { const isMobile = useMediaQuery({ minWidth: 250, maxWidth: 750 }); return isMobile ? children : null }
    return (
      <div>
        <Desktop>
          <Header />
          <h1 style={{ color: '#000000', textAlign: 'center', fontWeight: 'bold', paddingTop: "250px" }}>About</h1>

          <div style={{ float: "left", width: "100%", padding: "50px" }}>
            <div style={{ float: "left", width: "30%" }}>
              <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>Subtitle</h2>
              <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
            </div>
            <div style={{ float: "left", width: "30%" }}>
              <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>Subtitle</h2>
              <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
            </div>
            <div style={{ float: "left", width: "30%" }}>
              <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>Subtitle</h2>
              <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
            </div>
          </div>

          <h1 style={{ color: '#000000', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>Mision and Vision</h1>
          <div style={{ float: "left", width: "100%", padding: "50px" }}>
            <div style={{ float: "left", width: "45%" }}>
              <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>Mision</h2>
              <h2 style={{ color: 'grey', textAlign: 'center', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
            </div>
            <div style={{ float: "left", width: "45%" }}>
              <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>Vision</h2>
              <h2 style={{ color: 'grey', textAlign: 'center', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
            </div>
          </div>
          <Footer />
        </Desktop>
        <Mobile>
          <Header />
          <br />
          <h1 style={{ color: '#000000', textAlign: 'center', fontWeight: 'bold' }}>About</h1>
          <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold' }}>Subtitle</h2>
          <br />
          <h3 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold' }}>explanation</h3>

          <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold' }}>Subtitle</h2>
          <br />
          <h3 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold' }}>explanation</h3>

          <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold' }}>Subtitle</h2>
          <br />
          <h3 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold' }}>explanation</h3>

          <br />
          <br />
          <h1 style={{ color: '#000000', textAlign: 'center', fontWeight: 'bold' }}>Mision and Vision</h1>
          <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold' }}>Mision</h2>
          <h3 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold' }}>explanation</h3>
          <br />
          <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold' }}>Vision</h2>
          <h3 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold' }}>explanation</h3>
          <br />
          <Footer />
        </Mobile>
        <Tablet>
        <Header />
          <h1 style={{ color: '#000000', textAlign: 'center', fontWeight: 'bold', paddingTop: "250px" }}>About</h1>

          <div style={{ float: "left", width: "100%", padding: "50px" }}>
            <div style={{ float: "left", width: "30%" }}>
              <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>Subtitle</h2>
              <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
            </div>
            <div style={{ float: "left", width: "30%" }}>
              <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>Subtitle</h2>
              <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
            </div>
            <div style={{ float: "left", width: "30%" }}>
              <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>Subtitle</h2>
              <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
            </div>
          </div>

          <h1 style={{ color: '#000000', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>Mision and Vision</h1>
          <div style={{ float: "left", width: "100%", padding: "50px" }}>
            <div style={{ float: "left", width: "45%" }}>
              <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>Mision</h2>
              <h2 style={{ color: 'grey', textAlign: 'center', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
            </div>
            <div style={{ float: "left", width: "45%" }}>
              <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>Vision</h2>
              <h2 style={{ color: 'grey', textAlign: 'center', fontWeight: 'bold', paddingLeft: "50px" }}>explanation</h2>
            </div>
          </div>
          <Footer />
        </Tablet>
      </div>
    )
  }
}

export default About;