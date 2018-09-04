import React, {Component} from 'react';
import {Firebase} from '../../firebase/config';
import {Link} from 'react-router-dom'
import {homeConnector} from '../../connectors';

class Header extends Component{

  signOut = (e) => {
    e.preventDefault();
    Firebase.auth.signOut();
    this.props.signOut();
  }

  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Rental Service</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          {
            this.props.user
            ?  <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.signOut}>Sign Out</button>
            :  <Link to='/signin'>Sign  In</Link>
          }

        </form>
      </div>
    </nav>
    )
  }
}

export default homeConnector(Header)
