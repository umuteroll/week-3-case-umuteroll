
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import GoogleIcon from "../../resources/icons/GoogleIcon";
import GithubIcon from "../../resources/icons/GithubIcon";
import FacebookIcon from "../../resources/icons/FacebookIcon";

const SocialButton = (props) => {

    return (
        <>
            <div className={styles.button}>
               <GoogleIcon/> 
            </div>
            <div className={styles.button}>
                <GithubIcon/>
            </div>
            <div className={styles.button}>
                <FacebookIcon/>
            </div>
        </>
    );
};



export default SocialButton;
