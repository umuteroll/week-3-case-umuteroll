import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import Input from '../../components/input';
import Label from '../../components/label';
import SocialButton from '../../components/socialButtons';
import backgroundImage from '../../resources/backgroundImage.png';
import bigVespa from '../../resources/bigVespa.png';
import { useEffect, useState } from 'react';

function LoginPage() {
    // codelar burada
    const [form, setForm] = useState({ email: "", password: "" });
    const inputhandleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const [isClick, setIsClick] = useState(false) 
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
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
        return true;
    };
    useEffect(() => {
        fetch('https://61d9e7dfce86530017e3cc95.mockapi.io/users')
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
            }
          )
      }, [isClick]);

      useEffect(() => {
        const email  = items.filter(items => items.email === form.email);
        const password = items.filter(items => items.password === form.password);
          if(email&&password){
            alert("Login Successful");
            setIsClick(false);
            setIsLoaded(false);
            loginToApp();
          }
      }, [isLoaded]);
    
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
                        value={form.email}
                    />
                    <Label label="Password" />
                    <Input
                        label={"Password"}
                        type={"password"}
                        name='password'  //bura olmadan neden çalışmıyor? 
                        onChange={inputhandleChange}
                        value={form.password}
                    />
                    <Link to="/register">
                        <span className={styles.linkSpan}>Don't have an account yet? Register for free</span>
                    </Link>

                        <button className={styles.button} onClick={onClickRegister}>
                            <span className={styles.buttonText}>Sign In</span>
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
export default LoginPage;