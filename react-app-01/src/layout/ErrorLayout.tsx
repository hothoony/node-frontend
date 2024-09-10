import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function ErrorLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header className="fixed top-0 left-0 w-full" />
            <div className="flex flex-1">
                <Nav className="fixed top-16 left-0 w-32 h-full z-40" />
                <main className="fixed w-full h-full bg-red-200 top-16 left-[130px]">
                    <Outlet />
                </main>
            </div>
            <Footer className="fixed bottom-0 left-[130px] w-full" />
        </div>
    );
}