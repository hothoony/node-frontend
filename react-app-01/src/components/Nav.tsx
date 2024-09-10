import { Link } from "react-router-dom";

export default function Nav() {

    return (
        <div>
            
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

        </div>
    );
}
