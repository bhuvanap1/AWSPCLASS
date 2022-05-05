
import React, {useState} from 'react';
//import { RouterLink } from "vue-router";
//import LoginBadge from './LoginBadge.vue';
//import Messages from './Messages.vue';
  const NavLink=(props)=><a {...props}>{props.children}</a>;
  const LoginBadge=()=><></>;
  const Messages=()=><></>;
  
  
  function Nav() {
    const [isOpen, setIsOpen] = useState(true);


    return (
<nav className="navbar is-info" role="navigation" aria-label="main navigation">

        <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
              </a>
              {/*:className="{ 'is-active': isOpen }" click="isOpen = !isOpen"*/}
              <a role="button" className={`navbar-burger ${isOpen ? 'is-active':''}`} onClick={()=> setIsOpen(!isOpen) } aria-label="menu" aria-expanded="false" >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            {/*:className="{ 'is-active': isOpen }"*/}
            <div className={`navbar-menu ${isOpen && 'is-active'}`}  >
              <div className="navbar-start">
                <NavLink className="navbar-item" to="/">
                  Home
                </NavLink>
                <NavLink className="navbar-item" to="/Wall">
                  Wall
                </NavLink>
                <NavLink className="navbar-item" to="/weather">
                  Weather
                </NavLink>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">
                    More
                  </a>
                  <div className="navbar-dropdown">
                    <NavLink className="navbar-item" to="/about">
                      About
                    </NavLink>
                    <a className="navbar-item">
                      Jobs
                    </a>
                    <NavLink className="navbar-item" to="/contact">
                      Contact
                    </NavLink>
                    <hr className="navbar-divider" />
                    <a className="navbar-item">
                      Report an issue
                    </a>
                  </div>
                </div>
              </div>
              <div className="navbar-end">

            
                <div className="navbar-item">
                    <login-badge />
                </div>

                <messages />

                <div className="navbar-item">
                        <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                          <span className="icon">
                            <i className="fab fa-twitter"></i>
                          </span>
                          <span>
                            Tweet
                          </span>
                        </a>

                </div>
              </div>

            </div>
        </div>
      </nav>
   );
  }
  
  export default Nav;
  



