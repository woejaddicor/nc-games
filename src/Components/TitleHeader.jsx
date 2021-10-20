import { Link } from "react-router-dom";
import styles from '../CSS-Components/TitleHeader.module.css'

const TitleHeader = () => {
    return (
        <header className={styles.Title}>
            <h1><Link className="Title" to='/reviews'>NC-GAMES</Link></h1>
            </header>
    );
};

export default TitleHeader;