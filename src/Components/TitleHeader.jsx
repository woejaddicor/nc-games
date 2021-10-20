import { Link } from "react-router-dom";

const TitleHeader = () => {
    return (
        <header className="Title">
            <h1><Link className="Title" to='/reviews'>NC-GAMES</Link></h1>
            </header>
    );
};

export default TitleHeader;