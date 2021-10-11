import React from "react";
import { Link } from "react-router-dom";
import waveicon2 from '../../../src/assets/images/waveicon2.png';
import { useHistory } from "react-router-dom";

function Header(props) {
      const history = useHistory();

      function handleClick(e ) {
        e.preventDefault();
        console.log('You clicked Link site map.', e);
      };

      const redirect = () => {
        let path = `/side-bar-1`;

        // history.push(path);
        // history.push(path);
        // history.goBack();
    }


    return (
        <>
          <div className="">
            <header className="header">
              <nav className="navbar navbar-expand-lg fixed-top py-3">
                <div className="container">
                  <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </button>

                  <div id="navbarSupportedContent" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link to="/" className="nav-link">HOME <span className="sr-only">(current)</span> </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/contact-us" className="nav-link" >CONTACT</Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/Task-1" className="nav-link text-uppercase"
                              onClick={redirect}>
                              Task 1
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/Task-2" className="nav-link text-uppercase">Task 2</Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/Task-3" className="nav-link text-uppercase">Task 3</Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/Task-4" className="nav-link text-uppercase" >Task 4</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>
          </div>
        </>
    );
}

export default Header;
