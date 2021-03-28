import React from "react";
import { InputWrap } from "./styles";
import { FlexibleDiv } from "../FlexBox/styles";

const Input = ({
  icon,
  type,
  name,
  handleChange,
  placeholder,
  value,
  errorText,
}) => {
  // custom input with icons. inputWrap is a div enclosing the input and icon
  return (
    <FlexibleDiv flexDir="column" width="90%">
      <InputWrap>
        <FlexibleDiv height="100%" justifyContents="space-between">
          <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            required
            onChange={handleChange}
          />
          <FlexibleDiv width="20px">{icon}</FlexibleDiv>
        </FlexibleDiv>
      </InputWrap>
      {errorText && <span style={{fontSize="10px", width="100%", color="blue", margin="20px 0"}}>{errorText}</span>}
    </FlexibleDiv>
  );I
};

export default Input;
