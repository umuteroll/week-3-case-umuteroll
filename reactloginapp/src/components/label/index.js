
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const Label = (props) => {
  
  return (
   <>
<div>
    <label className={styles.label}>{props.label}</label>
</div>
   </>
  );
};



export default Label;
