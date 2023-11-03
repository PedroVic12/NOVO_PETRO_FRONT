import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => (
    <div>
        <h1>Home</h1>
    </div>
);

const About = ({ params }) => (
    <div>
        <h1>About {params.name}</h1>
    </div>
);

const Contact = () => (
    <div>
        <h1>Contact</h1>
    </div>
);

const MyApp = () => (
    <Router>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about/John">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/:name" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
);

export default MyApp;
