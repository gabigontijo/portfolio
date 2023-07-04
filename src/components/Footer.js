import React from 'react';
import '../style/Footer.css';
import {useLocation} from 'react-router-dom'


function Footer() {
    const newDate = new Date();
    const year = newDate.getFullYear();
    const location = useLocation()

    return (
        <>
            {location.pathname.includes('dev') ?
            ( <footer className="Footer_dev">
            <div className="Footer_div_dev">
                <p>{year} &copy; Gabriela Gontijo. All rights reserved.</p>
            </div>
            </footer>)
            : (  <footer className="Footer_home">
                <div className="Footer_div_home">
                <p>{year} &copy; GabiGontijo | dev</p>
            </div>
            </footer>
            )
                }
        </>);

  };

  export default Footer;
