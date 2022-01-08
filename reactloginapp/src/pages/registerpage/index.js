import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import Input            from '../../components/input';
import Label            from '../../components/label';
import SocialButton     from '../../components/socialButtons';
import backgroundImage  from '../../resources/backgroundImage.png';
import bigVespa         from '../../resources/bigVespa.png';
import { useState }     from 'react';

function RegisterPage() {

    const [form, setForm] = useState({ email: "", password: "" ,passwordAgain: ""});
    const inputhandleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };





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
                        name='email'
                        onChange={inputhandleChange}

                    />
                    <Label label="Password" />
                    <Input
                        label={"Password"}
                        type={"password"}
                        name='password'
                        onChange={inputhandleChange}

                    />
                     <Label label="Password Again" />
                    <Input
                        label={"Password"}
                        type={"password"}
                        name='passwordAgain'
                        onChange={inputhandleChange}
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
                    <div>{JSON.stringify(form)}</div>
                </div>

            </div>
        </div>
    )
}
export default RegisterPage;