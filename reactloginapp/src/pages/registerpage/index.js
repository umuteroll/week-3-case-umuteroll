import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import Input            from '../../components/input';
import Label            from '../../components/label';
import SocialButton     from '../../components/socialButtons';
import backgroundImage  from '../../resources/backgroundImage.png';
import bigVespa         from '../../resources/bigVespa.png';

function RegisterPage() {
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
                     <Label label="Password Again" />
                    <Input
                        label={"Password"}
                        type={"password"}

                    />
                    <Link to="/login">
                        <span className={styles.linkSpan}>Do you have an account? Sign In</span>
                    </Link>

                    <Link to="/main">
                        <button className={styles.button}>
                            <span className={styles.buttonText}>Register</span>
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
export default RegisterPage;