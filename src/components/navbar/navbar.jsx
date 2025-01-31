// import { Link } from "react-router-dom";

// let NavBar = () => {

//     return (
//         <nav className="headNav">
//             <Link to="/react-examination/Home" className="navBar"><button>Home</button></Link>
//             <Link to="/react-examination/About" className="navBar"><button>About</button></Link>
//             <Link to="/react-examination/Projects" className="navBar"><button>Projects</button></Link>
//             <Link to="/react-examination/Contact" className="navBar"><button>Contact</button></Link>
//         </nav>
//     )
// }



// export default NavBar

import { Link } from "react-router-dom";
import { useState } from "react";

let NavBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <nav className="headNav">
            <Link to="/react-examination/Home" className="navBar"><button>Home</button></Link>
            <Link to="/react-examination/About" className="navBar"><button>About</button></Link>

            <div className="dropdown" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                <button className="navBar">Projects</button>
                {showDropdown && (
                    <ul className="dropdown-menu">
                        <li><Link to="/react-examination/Projects/Memory" className="navBar"><button>Memory</button></Link></li>
                        <li><Link to="/react-examination/Projects/Stopwatch" className="navBar"><button>Stopwatch</button></Link></li>
                        <li><Link to="/react-examination/Projects/TodoAll" className="navBar"><button>Todo-list</button></Link></li>
                        <li><Link to="/react-examination/Projects/Greeting" className="navBar"><button>Greeting</button></Link></li>
                    </ul>
                )}
            </div>

            <Link to="/react-examination/Contact" className="navBar"><button>Contact</button></Link>
        </nav>
    );
};

export default NavBar;
