import React, { useState, useEffect } from 'react';
import logo1 from "../public/logo1.png";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect( () => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
  return (
    <div>
        <div className={`nav ${show && "nav_black"}`}>
            <img 
                className="nav_logo"
                src={logo1}
                alt="Logo"
            />
        </div>
    </div>
  )
}

export default Nav