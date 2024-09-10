import { Link } from "react-router-dom";

interface Props {
    className?: string;
}

export default function Nav({className}: Props) {

    return (
        <div className={`bg-sky-200 top-0 ${className}`}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/member">Member</Link></li>
                <li><Link to="/error404">404</Link></li>
            </ul>
        </div>
    );
}
