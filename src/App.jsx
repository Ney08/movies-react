import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import styles from "./App.module.css";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPages } from "./pages/LandingPages";

export function App() {
    const host = "/movies-react/";
    return (
        <Router>
            <header>
                <Link to={host}>
                    <h1 className={styles.title}>Movies</h1>
                </Link>
            </header>
            <main>
                <Routes>
                    <Route
                        exact
                        path="/movies/:movieId"
                        element={<MovieDetails />}
                    ></Route>
                    <Route path="/movies-react/" element={<LandingPages />}></Route>
                </Routes>
            </main>
        </Router>
    );
}
