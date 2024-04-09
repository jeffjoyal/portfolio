import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useLocation} from "react-router-dom"
import "../styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';


function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false)

    //this var will reflect the location that the user is in in the website
    const location = useLocation()

    //this function will only run when the variable location changes (that's why its in square brackets after the function)
    useEffect(() => {
        setExpandNavbar(false)
    }, [location])

  return (

    <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton">
            <button onClick={() => { setExpandNavbar((prev) => !prev) }}>
                <ReorderIcon />
            </button>
        </div> 
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/experience"> Experience </Link>
        </div>
    </div>
  )
}

export default Navbar