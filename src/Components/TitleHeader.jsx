import { Link } from "react-router-dom";
import styles from '../CSS-Components/TitleHeader.module.css'
import { useState } from "react";

const TitleHeader = ({logIn, user}) => {
    const [loginValue, setLoginValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        logIn(loginValue)
    }

    return (
        <header className={styles.title}>
            <h1 className={styles.banner}><Link className={styles.title} to='/reviews'>NC-GAMES</Link></h1>
            </header>
    );
};

export default TitleHeader;