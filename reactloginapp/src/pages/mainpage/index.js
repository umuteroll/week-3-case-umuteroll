
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import vector from "../../resources/Vector.png";
import frame from "../../resources/Frame.png";

function MainPage() {
    return (
        <>
            <div className={styles.container}>
                <span className={styles.title}>Hello 👋</span>
                <p className={styles.mainP}> Welcome to the MAIN PAGE Your Name is : .
                <br /> <br /> 
              
                <br /> <br />
                </p>
                
                
            </div>
            <div className={styles.image}>
                <img src={frame} alt="Frame" />
            </div>     
        </>
    )
}

export default MainPage;
