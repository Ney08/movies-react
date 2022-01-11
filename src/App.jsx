import React from "react";
import {
    //BrowserRouter as Router,
    Routes,
    Route,
    Link,
    HashRouter,
    Navigate,
} from "react-router-dom";
import { useDarkMode } from "./hooks/useDarkMode";
import styles from "./App.module.css";
import { LandingPages } from "./pages/LandingPages";
import { Button } from "./components/Button";
import { MovieDetailsSearch } from "./pages/MovieDetailsSearch";

export function App() {
    const [darkMode, setDarkMode] = useDarkMode();
    return (
        <div>
            <HashRouter>
                <header>
                    <h1 className={styles.title}>
                        <Link to="/">Movies</Link>
                    </h1>
                    <Button darkMode={darkMode} setDarkMode={setDarkMode} />
                </header>

                <main>
                    <Routes>
                        <Route
                            path="/movies/:movieId"
                            element={<MovieDetailsSearch />}
                        />
                        <Route path="/" element={<LandingPages />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>
            </HashRouter>
        </div>
    );
}
