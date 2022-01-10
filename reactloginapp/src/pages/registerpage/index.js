import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import Input from '../../components/input';
import Label from '../../components/label';
import SocialButton from '../../components/socialButtons';
import backgroundImage from '../../resources/backgroundImage.png';
import bigVespa from '../../resources/bigVespa.png';
import { useState } from 'react';
import { useEffect } from 'react';

function RegisterPage() {

    const [form, setForm] = useState({ email: "", password: "", passwordAgain: "" });
    const inputhandleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };
    const [isClick, setIsClick] = useState(false) 
    
    const onClickRegister = () => {
        if (!validateForm()) {
            alert("Please fill all fields");
            return;
        }

        setIsClick(true);
    };
    const validateForm = () => {
        if (form.password === "" || form.email === "" || form.password === undefined || form.email === undefined) {
            return false;
        }
        if (form.password !== form.passwordAgain) {
            alert("Password and password again must be same!");
            return false;
        }
        loginToApp();
        return true;
    };
    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: form.email, password: form.password })
        };
        fetch('https://61d9e7dfce86530017e3cc95.mockapi.io/users', requestOptions)
            .then(response => response.json())

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [isClick]);

    const loginToApp = () => {
        <Link to="/main">   
         </Link>
    }


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

                        <button className={styles.button} onClick={onClickRegister}>
                            <span className={styles.buttonText}>Register</span>
                        </button>
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