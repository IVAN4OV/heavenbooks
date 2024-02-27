import { Outlet, Link } from 'react-router-dom';

import styles from "./DefaultLayout.module.css";

export function DefaultLayout() {

    return (
        <nav className={styles.nav}>
            <header className={styles.header}>
                <div>logo</div>
                <div className={styles.headerNav}>
                    <Link to="/">MainPage</Link>
                    <Link to="/about">AboutPage</Link>
                </div>
                <div>buttons</div>
            </header>

            <div className="container">
                <Outlet/>
            </div>

            <footer className={styles.header}>
                <div>footer</div>
            </footer>
        </nav>
    )
}