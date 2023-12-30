import React from 'react';
import "./Style.css";
import { useState } from 'react';

function NavBar() {

    const [switchValue, changeSwitch] = useState(false);

    const toggleSwitch = () => {
        if (switchValue === true) {
            document.body.style.backgroundColor = "rgb(12, 25, 37)";
            changeSwitch(false);
        } else if (switchValue === false) {
            document.body.style.backgroundColor = "#F0FFFA";
            changeSwitch(true);
        }
    }

    return (
        <div>
            <div className="navbar">
                <h1>NavBar</h1>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleSwitch} />
                </div>
            </div>
        </div>
    )
}

export default NavBar;
