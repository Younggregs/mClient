import React, { Component } from 'react';
import logo from '../../assets/images/m++.png';
import {Dropdown, Icon} from "semantic-ui-react";
import { Link
} from 'react-router-dom';
//import './App.css';

class Navbar extends Component {

  constructor(props){
    super(props)

    this.state = {
      searchValue: null
    }
  }

  render() {
    const trigger = (
      <span className="uk-text-capitalize">
        <span className="ui red circular label uk-margin-small-left uk-badge">
          1
        </span>
        Inbox
      </span>
    );
  
    const options = [
      {
        key: 'user',
        text: (
          <span>
        Signed in as <strong>Bob Smith</strong>
      </span>
        ),
        disabled: true,
      },
      { key: 'profile', text: 'Your Profile' },
    ]
    const trigger1 = (
      <span>
        <Icon name='user' /> Hello, Bob
      </span>
        );
  
    const options1 = [
      {
        key: 'user',
        text: (
          <span>
            Signed in as <strong>Bob Smith</strong>
          </span>
        ),
        disabled: true,
      },
      { key: 'profile', text: 'Your Profile' },
      { key: 'settings', text: 'Settings' },
      { key: 'sign-out', text: 'Sign Out' },
    ]

    return (
      <div id="nav" className="border-bottom uk-padding-small uk-padding-remove-bottom uk-padding-remove-horizontal uk-section-muted uk-box-shadow-small">
        <nav className="container uk-navbar-container uk-flex-wrap  uk-navbar">
        <div className="data-uk-flex-between data-uk-margin-remove data-uk-width-1-1@s" data-uk-grid>
        <img className="logo" src={logo} alt=""/>
          <div className="uk-navbar-right">
            <div>
              <a  className="uk-navbar-toggle"><span className="uk-margin-small-right">Search </span><Icon name='search' /></a>
              <div className="uk-drop" uk-drop="mode: click; pos: left-center; offset: 0.1">
                <form className="uk-search uk-search-navbar uk-width-1-1">
                  <input 
                    className="uk-search-input" 
                    type="search" 
                    placeholder="Search..." 
                    autoFocus
                    onChange={(e) => this.setState({...this.state, searchValue: e.target.value})}
                    />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav ">
            <li className="uk-active"><Link to="/" className="uk-text-capitalize"><Icon name='home' size='small' />Home</Link></li>
            <li>
              <a>
                <Dropdown trigger={trigger} options={options} />
              </a>
            </li>
          </ul>
        </div>

        <div className="uk-navbar-center">
          <ul className="uk-navbar-nav ">
            <li>
              <a>
                <Dropdown trigger={trigger1} options={options1} />
              </a>
            </li>
          </ul>
        </div>
        </nav>
      </div>
    );
  }
}


export default Navbar;
