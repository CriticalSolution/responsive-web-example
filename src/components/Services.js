import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import image from '../images/image.jpg';

import { useMediaQuery } from 'react-responsive';

class Services extends Component {
  render() {
    const Desktop = ({ children }) => { const isDesktop = useMediaQuery({ minWidth: 1000 }); return isDesktop ? children : null }
    const Tablet = ({ children }) => { const isTablet = useMediaQuery({ minWidth: 751, maxWidth: 999 }); return isTablet ? children : null }
    const Mobile = ({ children }) => { const isMobile = useMediaQuery({ minWidth: 250, maxWidth: 750 }); return isMobile ? children : null }
    return (
      <div>
        <Desktop>
          <Header />
          <br />
          <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "250px" }}>header-1</h1>
          <h2 style={{ color: 'grey', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>header-2</h2>

          <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
          <div style={{ float: "left", width: "100%", padding: "50px" }}>
            <div style={{ float: "left", width: "50%" }}>
              <center><img src={image} alt="imageInfo" style={{ width: 400 }} /></center>
            </div>
            <div style={{ float: "left", width: "50%" }}>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
            </div>
          </div>

          <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
          <div style={{ float: "left", width: "100%", padding: "50px" }}>
            <div style={{ float: "left", width: "50%" }}>
              <center><img src={image} alt="imageInfo" style={{ width: 400 }} /></center>
            </div>
            <div style={{ float: "left", width: "50%" }}>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
            </div>
          </div>

          <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
          <div style={{ float: "left", width: "100%", padding: "50px" }}>
            <div style={{ float: "left", width: "50%" }}>
              <center><img src={image} alt="imageInfo" style={{ width: 400 }} /></center>
            </div>
            <div style={{ float: "left", width: "50%" }}>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
            </div>
          </div>

          <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
          <div style={{ float: "left", width: "100%", padding: "50px" }}>
            <div style={{ float: "left", width: "50%" }}>
              <center><img src={image} alt="imageInfo" style={{ width: 400 }} /></center>
            </div>
            <div style={{ float: "left", width: "50%" }}>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
            </div>
          </div>

          <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
          <div style={{ float: "left", width: "100%", padding: "50px" }}>
            <div style={{ float: "left", width: "50%" }}>
              <center><img src={image} alt="imageInfo" style={{ width: 400 }} /></center>
            </div>
            <div style={{ float: "left", width: "50%" }}>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
            </div>
          </div>

          <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
          <div style={{ float: "left", width: "100%", padding: "50px" }}>
            <div style={{ float: "left", width: "50%" }}>
              <center><img src={image} alt="imageInfo" style={{ width: 400 }} /></center>
            </div>
            <div style={{ float: "left", width: "50%" }}>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
            </div>
          </div>
          <Footer />
        </Desktop>
        <Mobile>
          <Header />
          <br /><br /><br />
          <h1 style={{ color: '#000000', textAlign: 'center', fontWeight: 'bold' }}>header-1</h1>
          <br />
          <h2 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold' }}>header-2</h2>
          <br />
          <center><h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold' }}>subtitle</h2></center>
          <img src={image} alt="imageInfo" style={{ width: 300 }} />
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation </h2>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>

          <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold' }}>subtitle</h2>
          <center><img src={image} alt="imageInfo" style={{ width: 300 }} /></center>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>

          <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold' }}>subtitle</h2>
          <center><img src={image} alt="imageInfo" style={{ width: 300 }} /></center>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation </h2>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation </h2>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>

          <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold' }}>subtitler</h2>
          <center><img src={image} alt="imageInfo" style={{ width: 300 }} /></center>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>

          <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold' }}>subtitle</h2>
          <center><img src={image} alt="imageInfo" style={{ width: 300 }} /></center>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>

          <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold' }}>subtitle</h2>
          <center><img src={image} alt="imageInfo" style={{ width: 300 }} /></center>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>
          <h2 style={{ color: "grey", backgroundColor: "white", marginLeft: '5em' }}>explanation</h2>
          <br />
          <Footer />
        </Mobile>
        <Tablet>
          <Header />
          <br />
          <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "250px" }}>header-1</h1>
          <h2 style={{ color: 'grey', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>header-2</h2>

          <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
          <div style={{ float: "left", width: "100%", padding: "50px" }}>
            <div style={{ float: "left", width: "50%" }}>
              <center><img src={image} alt="imageInfo" style={{ width: 400 }} /></center>
            </div>
            <div style={{ float: "left", width: "50%" }}>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
            </div>
          </div>

          <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
          <div style={{ float: "left", width: "100%", padding: "50px" }}>
            <div style={{ float: "left", width: "50%" }}>
              <center><img src={image} alt="imageInfo" style={{ width: 400 }} /></center>
            </div>
            <div style={{ float: "left", width: "50%" }}>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
            </div>
          </div>

          <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
          <div style={{ float: "left", width: "100%", padding: "50px" }}>
            <div style={{ float: "left", width: "50%" }}>
              <center><img src={image} alt="imageInfo" style={{ width: 400 }} /></center>
            </div>
            <div style={{ float: "left", width: "50%" }}>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
            </div>
          </div>

          <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
          <div style={{ float: "left", width: "100%", padding: "50px" }}>
            <div style={{ float: "left", width: "50%" }}>
              <center><img src={image} alt="imageInfo" style={{ width: 400 }} /></center>
            </div>
            <div style={{ float: "left", width: "50%" }}>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
            </div>
          </div>

          <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
          <div style={{ float: "left", width: "100%", padding: "50px" }}>
            <div style={{ float: "left", width: "50%" }}>
              <center><img src={image} alt="imageInfo" style={{ width: 400 }} /></center>
            </div>
            <div style={{ float: "left", width: "50%" }}>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
            </div>
          </div>

          <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>subtitle</h1>
          <div style={{ float: "left", width: "100%", padding: "50px" }}>
            <div style={{ float: "left", width: "50%" }}>
              <center><img src={image} alt="imageInfo" style={{ width: 400 }} /></center>
            </div>
            <div style={{ float: "left", width: "50%" }}>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
              <h2 style={{ color: 'grey', textAlign: 'left', fontWeight: 'bold' }}>explanation</h2>
            </div>
          </div>
          <Footer />
        </Tablet>
      </div>
    )
  }
}

export default Services;