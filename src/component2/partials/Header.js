import React, { Component } from 'react';
class Header extends Component {
    render() {
       return (
        <div className="header">
        <div className="header-right">
          <div className="search-container">
            <form action="/action_page.php">
              <input type="text" placeholder="Search.." name="search"/>
              <button type="submit"><i className="fa fa-search"></i></button>
            </form>
          </div>
        </div>
    </div>
       );
    }
 }
 export default Header;