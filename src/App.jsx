import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, HashRouter } from "react-router-dom";

import styles from "./App.module.css";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPages } from "./pages/LandingPages";

export function App() {
    const path = "/";
    return (
        <HashRouter>
            <header>
                <Link to={path}>
                    <h1 className={styles.title}>Movies</h1>
                </Link>
            </header>
            <main>
                <Routes>
                    <Route
                        exact
                        path={path+"movies/:movieId"}
                        element={<MovieDetails />}
                    ></Route>
                    <Route path={path} element={<LandingPages />}></Route>
                </Routes>
            </main>
        </HashRouter>
    );
}
