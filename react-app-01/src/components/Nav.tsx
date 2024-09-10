import { Link, NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            Nav
            <div>
                <h3>Menu - Link 사용</h3>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/member">Member</Link></li>
                <li><Link to="/error404">404</Link></li>
                </ul>
            </div>

            <div>
                <h3>Menu - NavLink 사용</h3>
                <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/error404">404</NavLink></li>
                </ul>
            </div>
        </div>
    );
}
