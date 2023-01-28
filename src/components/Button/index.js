import React from "react";
import Button from "react-bootstrap/Button";

const MyButton = ({ variant, text }) => {
  return <Button variant={variant}>{text}</Button>;
};

export default MyButton;
