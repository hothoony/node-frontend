import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function ErrorLayout() {
    return (
        <div>
            <Header />
            {/* <Nav /> */}
            <Outlet />
            <Footer />
        </div>
    );
}