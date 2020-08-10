import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import image from '../images/image.jpg';

import { useStyles } from '../Utils';
import { withStyles } from '@material-ui/core/styles';

import { useMediaQuery } from 'react-responsive';

class Home extends Component {
  render() {
    const Desktop = ({ children }) => { const isDesktop = useMediaQuery({ minWidth: 1000 }); return isDesktop ? children : null }
    const Tablet = ({ children }) => { const isTablet = useMediaQuery({ minWidth: 751, maxWidth: 999 }); return isTablet ? children : null }
    const Mobile = ({ children }) => { const isMobile = useMediaQuery({ minWidth: 250, maxWidth: 750 }); return isMobile ? children : null }
    return (
      <div>
        <Desktop>
          <Header />
          <h1 style={{ color: '#000000', textAlign: 'center', fontWeight: 'bold', paddingTop: "250px" }}>Header-1</h1>
          <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>Header-2</h2>
          <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h2>

          <div style={{ float: "left", width: "100%", padding: "50px" }}>
            <div style={{ float: "left", width: "50%" }}>
              <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
              <center><img src={image} alt="imageInfo" style={{ width: 400 }} /></center>
              <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
              <center><img src={image} alt="imageInfo" style={{ width: 400 }} /></center>
              <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
              <center><img src={image} alt="imageInfo" style={{ width: 400, height: 300 }} /></center>
            </div>
            <div style={{ float: "left", width: "50%" }}>
              <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
              <center><img src={image} alt="imageInfo" style={{ width: 400 }} /></center>
              <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
              <center><img src={image} alt="imageInfo" style={{ width: 400 }} /></center>
              <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
              <center><img src={image} alt="imageInfo" style={{ width: 400 }} /></center>
            </div>
          </div>
          <br /><br /><br />
          <Footer />
        </Desktop>
        <Mobile>
          <Header />
          <br />
          <h1 style={{ color: '#000000', textAlign: 'center', fontWeight: 'bold' }}>Header-1</h1>
          <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold' }}>Header-2</h2>
          <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold' }}>subtitle</h2>
          <br />
          <center>
            <h2 style={{ color: '#000000', textAlign: 'center', fontWeight: 'bold' }}>subtitle</h2>
            <img src={image} alt="Netside info" style={{ width: 300 }} />
            <h2 style={{ color: '#000000', textAlign: 'center', fontWeight: 'bold' }}>subtitle</h2>
            <img src={image} alt="imageInfo" style={{ width: 300 }} />
            <h2 style={{ color: '#000000', textAlign: 'center', fontWeight: 'bold' }}>subtitle</h2>
            <img src={image} alt="imageInfo" style={{ width: 300 }} />
            <h2 style={{ color: '#000000', textAlign: 'center', fontWeight: 'bold' }}>subtitle</h2>
            <img src={image} alt="imageInfo" style={{ width: 300 }} />
            <h2 style={{ color: '#000000', textAlign: 'center', fontWeight: 'bold' }}>subtitle</h2>
            <img src={image} alt="imageInfo" style={{ width: 300 }} />
            <h2 style={{ color: '#000000', textAlign: 'center', fontWeight: 'bold' }}>subtitle</h2>
            <img src={image} alt="imageInfo" style={{ width: 300 }} />
          </center>
          <br /><br /><br />
          <Footer />
        </Mobile>
        <Tablet>
          <Header />
          <h1 style={{ color: '#000000', textAlign: 'center', fontWeight: 'bold', paddingTop: "250px" }}>Header-1</h1>
          <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>Header-2</h2>
          <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h2>

          <div style={{ float: "left", width: "100%", padding: "50px" }}>
            <div style={{ float: "left", width: "50%" }}>
              <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
              <center><img src={image} alt="imageInfo" style={{ width: 400 }} /></center>
              <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
              <center><img src={image} alt="imageInfo" style={{ width: 400 }} /></center>
              <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
              <center><img src={image} alt="imageInfo" style={{ width: 400, height: 300 }} /></center>
            </div>
            <div style={{ float: "left", width: "50%" }}>
              <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
              <center><img src={image} alt="imageInfo" style={{ width: 400 }} /></center>
              <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
              <center><img src={image} alt="imageInfo" style={{ width: 400 }} /></center>
              <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
              <center><img src={image} alt="imageInfo" style={{ width: 400 }} /></center>
            </div>
          </div>
          <br /><br /><br />
          <Footer />
        </Tablet>
      </div>
    );
  }
}
export default withStyles(useStyles, { withTheme: true })(Home);
