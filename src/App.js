import React, { Component } from 'react';
import './App.css';

//components
import Footer from './Footer.js';
import StillLife from './StillLife';

// images
import Tulip from './assets/images/still_life/Tulip.JPG';
import lastunicorn from './assets/images/tlu2.jpg';
import logo from './assets/images/lillypiri.png';
import PixelBeach from './assets/images/pixelbeach.JPG';
import Lilly from './assets/images/profile.jpg';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 'panel'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Lilly} className="Wiggly" alt="Lilly Piri profile photo" /><br/>
          <img onClick={e => this.setState({currentPage: 'panel'})} src={logo} className="App-logo" alt="Lilly Piri signature" />
          <h3 className="App-title">
            artist x illustrator <span role="img" aria-label="palette emoji">🎨</span><br/>
            Developer <span role="img" aria-label="laptop emoji">💻</span><br/>
            Brisbane, Oz <span role="img" aria-label="koala emoji">🐨</span><br/>
            Lilly@LillyPiri.com<br/><br/>

            <a href="https://lillypiri.etsy.com/">Shop</a> &middot;{' '}
            <a href="https://instagram.com/lillypiri">Instagram</a> &middot;{' '}
            <a href="https://blog.lillypiri.com/">Blog</a> &middot;{' '}
            <a href="https://twitter.com/lillypiri">Twitter</a> &middot;{' '} 
            <a href="https://github.com/lillypiri">Github</a>
            </h3>
        </header>
        <p className="App-intro">
          { this.state.currentPage === 'panel' &&
          <div>
            <img src={PixelBeach} className="Images" alt="Pixel Beach - cover art painting by Lilly Piri"/>
            <p> Cover art for Pixel Beach. Acrylic in Moleskine. Node Knockout November 2017 with Nathan, Jaap & Ben. <a href="https://nodeknockout.herokuapp.com/">Play it here.</a> </p>
            <img onClick={e => this.setState({currentPage: 'stilllife'})} src={Tulip} className="Images" alt="Tulip - painting by Lilly Piri"/>
            <p> Die Tulpe im Honigglas. Acrylic on panel.</p>
            <img src={lastunicorn} className="Images" alt="The Last Unicorn - painting by Lilly Piri"/>
            <p> The Last Unicorn. Acrylic on canvas panel. Part of my 365 day painting challenge. <a href="https://www.instagram.com/explore/tags/lillypiripaints/">View them all here</a>, & read about the experience on <a href="https://blog.lillypiri.com/articles/365-days-of-daily-painting">my blog</a>. </p>
          </div>
          }
          
          { this.state.currentPage === 'stilllife' &&  
            <div>
              <StillLife/>
            </div>
          }
        </p>

        

        <Footer/>
      </div>

    
    );
  }
}

export default App;
