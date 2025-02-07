import { Link } from "react-router-dom";
import { useState } from "react";
import ChangeBackgroundImage from "../ChangeBackground/Changebackground";

let NavBar = () => {
    const [showDropdown, setShowDropdown] = useState(false); //Dropdownlistan ska inte synas i början, därför sätter vi state false.

    const handleDropdownClick = () => {
        setShowDropdown(false); // Stänger dropdownlistan när en länk klickas
    };
    //Vi ordnar med alla länkar som ska användas av vår NavBar och bäddar in länkar till projekten i en ul som fungerar som en dropdownlista som syns och döljs om vi hovrar med musen eller inte.
    return (
        <nav className="headNav">
            <Link to="/" className="navBar"><button>Home</button></Link>
            <Link to="/About" className="navBar"><button>About</button></Link>

            <div className="dropdown" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                <button className="navBar">Projects</button>
                {showDropdown && (
                    <ul className="dropdown-menu">
                        <li><Link to="/Projects/Greeting" className="navBar" onClick={handleDropdownClick}><button>Greeting</button></Link></li>
                        <li><Link to="/Projects/Stopwatch" className="navBar" onClick={handleDropdownClick}><button>Stopwatch</button></Link></li>
                        <li><Link to="/Projects/Memory" className="navBar" onClick={handleDropdownClick}><button>Memory</button></Link></li>
                        <li><Link to="/Projects/TodoAll" className="navBar" onClick={handleDropdownClick}><button>Todo-list</button></Link></li>
                        <li><Link to="/Projects/MovieSearch" className="navBar" onClick={handleDropdownClick}><button>MovieSearch</button></Link></li>
                    </ul>
                )}
            </div>

            <Link to="/Contact" className="navBar"><button>Contact</button></Link>

        </nav>
    );
};

export default NavBar;
