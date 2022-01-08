
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const Input = (props) => {
  const { type, placeholder, ...args } = props;
  const [inputType, setInputType] = useState(type);

  const handleShowPasswordIconClick = () => {
    if (inputType === "text") {
      setInputType("password");
    } else {
      setInputType("text");
    }
  };
  return (
    <div className={styles.container}>
      <input
        type={inputType}
        placeholder={placeholder}
        className={styles.input}
        {...args}
      />
      {type === "password" && (
        <i className={styles.icon} onClick={handleShowPasswordIconClick}>  </i>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "password"]),
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  placeholder: "Placeholder",
};

export default Input;
