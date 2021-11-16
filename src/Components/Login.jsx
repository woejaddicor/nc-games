import styles from '../CSS-Components/Login.module.css'


const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
    }

    return (
        <section className={styles.loginPage}>
            <form onSubmit={handleLogin} className={styles.loginForm}>
                <label className={styles.label} htmlFor="login">Login</label>
                    <input required className={styles.usernameBar} type="text" id="login" placeholder="Username"/>
                    <button className={styles.loginButton} type="submit">Log in!</button>
            </form>
        </section>
    )
}

export default Login;
