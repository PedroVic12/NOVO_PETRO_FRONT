// App.js
import React, { useState } from "react";
import Link from './app/src/controllers/navigation/Link'
import Routes from './app/src/controllers/navigation/Routes'


const App = () => {
  const [pathname, setPathname] = useState("/");

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    setPathname(path);
  };

  return (
    <div>
      <nav>
        <Link to="/" onClick={(e) => handleLinkClick(e, "/")}>
          Home
        </Link>
        <Link to="/about" onClick={(e) => handleLinkClick(e, "/about")}>
          About
        </Link>
        <Link to="/users" onClick={(e) => handleLinkClick(e, "/users")}>
          Users
        </Link>
      </nav>
      <Routes pathname={pathname}>
        <Home path="/" />
        <About path="/about" />
      </Routes>
    </div>
  );
};

export default App;


const Home = () => {
  return <h2>Home</h2>;
};

const About = () => {
  return <h2>OLA MUNDO</h2>;
};
