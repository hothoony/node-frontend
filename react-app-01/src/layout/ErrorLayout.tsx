import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function ErrorLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header className="fixed top-0 left-0 w-full" />
            <Nav />
            <div className="w-full bg-red-200">
                <Outlet />
            </div>
            <Footer className="fixed bottom-0 left-0 w-full" />
        </div>
    );
}