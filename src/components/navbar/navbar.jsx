import { Link } from "react-router-dom";
import { useState } from "react";
import ChangeBackgroundImage from "../ChangeBackground/Changebackground";

let NavBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownClick = () => {
        setShowDropdown(false); // Stänger dropdown när en länk klickas
    };

    return (
        <nav className="headNav">
            <Link to="/" className="navBar"><button>Home</button></Link>
            <Link to="/About" className="navBar"><button>About</button></Link>

            <div className="dropdown" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                <button className="navBar">Projects</button>
                {showDropdown && (
                    <ul className="dropdown-menu">
                        <li><Link to="/Projects/Memory" className="navBar" onClick={handleDropdownClick}><button>Memory</button></Link></li>
                        <li><Link to="/Projects/Stopwatch" className="navBar" onClick={handleDropdownClick}><button>Stopwatch</button></Link></li>
                        <li><Link to="/Projects/TodoAll" className="navBar" onClick={handleDropdownClick}><button>Todo-list</button></Link></li>
                        <li><Link to="/Projects/Greeting" className="navBar" onClick={handleDropdownClick}><button>Greeting</button></Link></li>
                    </ul>
                )}
            </div>

            <Link to="/Contact" className="navBar"><button>Contact</button></Link>

        </nav>
    );
};

export default NavBar;
