import { Link } from "react-router-dom";
import styles from '../CSS-Components/TitleHeader.module.css'

const TitleHeader = () => {
    return (
        <header className={styles.banner}>
            <h1 className={styles.banner}><Link className={styles.title} to='/reviews'>NC-GAMES</Link></h1>
        </header>
    );
};

export default TitleHeader;