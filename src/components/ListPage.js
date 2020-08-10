import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import List from './List';

import { useMediaQuery } from 'react-responsive';

class ListPage extends Component {
  render() {
    const Desktop = ({ children }) => { const isDesktop = useMediaQuery({ minWidth: 1000 }); return isDesktop ? children : null }
    const Tablet = ({ children }) => { const isTablet = useMediaQuery({ minWidth: 751, maxWidth: 999 }); return isTablet ? children : null }
    const Mobile = ({ children }) => { const isMobile = useMediaQuery({ minWidth: 250, maxWidth: 750 }); return isMobile ? children : null }
    return (
      <div>
        <Desktop>
          <Header />
          <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "250px" }}>Title</h1>
          <h2 style={{ color: 'grey', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>Subtitle</h2>
          <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>explanation</h1>
          <List />
          <h2 style={{ color: '#a20444', textAlign: 'center', paddingTop: "50px"  }}>explanation</h2>
          <br /><br /><br />
          <Footer />
        </Desktop>
        <Mobile>
          <Header />
          <br />
          <h1 style={{ color: '#000000', textAlign: 'center', fontWeight: 'bold' }}>Title</h1>
          <br />
          <h3 style={{ color: 'grey', textAlign: 'justify', fontWeight: 'bold' }}>Subtitle</h3>
          <br />
          <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold' }}>explanation</h2>
          <br />
          <List />
          <br /><br /><br />
          <h2 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold' }}>explanation</h2>
          <br /><br /><br />
          <Footer />
        </Mobile>
        <Tablet>
          <Header />
          <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "250px" }}>Title</h1>
          <h2 style={{ color: 'grey', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>Subtitle</h2>
          <h1 style={{ color: '#a20444', textAlign: 'center', fontWeight: 'bold', paddingTop: "50px" }}>explanation</h1>
          <List />
          <h2 style={{ color: '#a20444', textAlign: 'center', paddingTop: "50px"  }}>explanation</h2>
          <br /><br /><br />
          <Footer />
        </Tablet>
      </div>
    )
  }
}

export default ListPage;