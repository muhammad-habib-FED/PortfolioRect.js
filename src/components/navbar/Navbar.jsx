import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

function Navbar() {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar />
            <div className="container">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="logo"
                >
                    Muhammad Habib
                </motion.span>
                <div className="social-links">
                    <a href="#" className="social-icon">
                        <img className="icon" src="./facebook.png" alt="icon" />
                    </a>
                    <a href="#" className="social-icon">
                        <img
                            className="icon"
                            src="./instagram.png"
                            alt="icon"
                        />
                    </a>
                    <a href="#" className="social-icon">
                        <img className="icon" src="./youtube.png" alt="icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
