import { Link } from "react-router-dom";
import styles from '../CSS-Components/TitleHeader.module.css'

const TitleHeader = () => {
    return (
        <header className={styles.title}>
            <h1 className={styles.banner}><Link className={styles.title} to='/reviews'>NC-GAMES</Link></h1>
            <form className={styles.loginForm}>
                <label htmlFor="login">Login</label>
                    <input type="text" id="login" placeholder="Username"/>
                    <button type="submit">Log in!</button>
            </form>
            </header>
    );
};

export default TitleHeader;