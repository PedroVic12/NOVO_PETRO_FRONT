// Routes.js
import React from "react";
import { Router, Route } from "wouter";

const Routes = () => {
    return (
        <Router>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
        </Router>
    );
};

function Home() {
    return (
        <>
            <h1>Home</h1>
        </>
    );
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export default Routes;
