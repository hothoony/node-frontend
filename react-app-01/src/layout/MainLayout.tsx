import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function MainLayout() {
    return (
        <div className="">
            <Header />
            <Nav />
            <div className="w-full bg-red-200">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}