import React from "react";
import { Link } from "react-router-dom";
import waveicon2 from '../../../src/assets/images/waveicon2.png';
import { useHistory } from "react-router-dom";

const nameLinks = [{
                  path: '/',
                  title: 'Home',
                }, {
                  path: '/contact-us',
                  title: 'Contact',
                }, {
                  path: '/Task-1',
                  title: 'Task 1',
                }, {
                  path: '/Task-2',
                  title: 'Task 2',
                },
                {
                  path: '/Task-3',
                  title: 'Task 3',
                },
                {
                  path: '/Task-4',
                  title: 'Task 4',
                },
                {
                  path: '/Task-5',
                  title: 'Task 5',
                }
              ];

function Header(props) {
      const history = useHistory();

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
                    {
                      nameLinks.map(({path, title}, key) => {
                        return (
                                <li key={key}>
                                  <Link className="nav-link text-uppercase"
                                        to={{
                                              pathname:`${path}`
                                              }}>
                                    {title}
                                  </Link>
                                </li>
                              )
                        })
                    }
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
