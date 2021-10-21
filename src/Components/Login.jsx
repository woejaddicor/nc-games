import styles from '../CSS-Components/Login.module.css'

const Login = () => {
    return (
        <section className={styles.loginPage}>
            <form className={styles.loginForm}>
                <label className={styles.label} htmlFor="login">Login</label>
                    <input className={styles.usernameBar} type="text" id="login" placeholder="Username"/>
                    <button className={styles.loginButton} type="submit">Log in!</button>
            </form>
        </section>
    )
}

export default Login;
