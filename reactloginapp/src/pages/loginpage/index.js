import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import Input            from '../../components/input';
import Label            from '../../components/label';
import SocialButton     from '../../components/socialButtons';
import backgroundImage  from '../../resources/backgroundImage.png';
import bigVespa         from '../../resources/bigVespa.png';

function LoginPage() {
    return (
        <div className={styles.container}>
            <img className={styles.backgroundImage} src={backgroundImage} alt="backAvatar" />

            <div className={styles.card}>
            <img className={styles.bigVespa} src={bigVespa} alt="backAvatar" />
                <div className={styles.form}>
                    <h3 className={styles.title}>Your Logo</h3>
                    <h1 className={styles.subTitle}>Login</h1>

                    <Label label="Email" />
                    <Input
                        label={"Email"}
                        type={"text"}

                    />
                    <Label label="Password" />
                    <Input
                        label={"Password"}
                        type={"password"}

                    />
                    <Link to="/register">
                        <span className={styles.linkSpan}>Don't have an account yet? Register from here</span>
                    </Link>

                    <Link to="/login">
                        <button className={styles.button}>
                            <span className={styles.buttonText}>Sign In</span>
                        </button>
                    </Link>
                    <span className={styles.span}>Or continue with it</span>
                    <div className={styles.socials}>
                        <SocialButton />
                    </div>

                </div>

            </div>
        </div>
    )
}
export default LoginPage;