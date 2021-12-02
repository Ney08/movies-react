import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, HashRouter } from "react-router-dom";
import { useDarkMode } from "./hooks/useDarkMode";
import styles from "./App.module.css";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPages } from "./pages/LandingPages";
import { Button } from "./components/Button";

export function App() {
    const path = "/";
    const [darkMode, setDarkMode] = useDarkMode();
    return (
        <HashRouter>
            <header>
                <Link to={path}>
                    <h1 className={styles.title}>Movies</h1>
                </Link>
                <Button darkMode={darkMode} setDarkMode={setDarkMode} />
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
