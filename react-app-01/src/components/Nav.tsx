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
                <li><Link to="/error404">404</Link></li>
                <li><Link to="/member/add">MemberAdd</Link></li>
                <li><Link to="/member">MemberList</Link></li>
                <li><Link to="/member/detail">MemberDetail</Link></li>
                <li><Link to="/member/modify">MemberModify</Link></li>
                <li><Link to="/member/delete">MemberDelete</Link></li>
            </ul>
        </div>
    );
}
