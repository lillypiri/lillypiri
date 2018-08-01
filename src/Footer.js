import React, { Component } from 'react';
import './App.css';

class Footer extends Component {

    render() {
        let d = new Date();
        let n = d.getFullYear();
      return (
        <div className="Footer">
            © Lilly Piri {n}
        </div>
      );
    }
  }
  
  export default Footer;