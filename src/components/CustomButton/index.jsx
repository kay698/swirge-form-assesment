import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ButtonStyle } from "./styles";
import { FlexibleDiv } from "../FlexBox/styles";

const Button = ({ text, type, click, loading, disabled, ...otherProps }) => {
  // custom button styled with styled-components and loader component from material ui
  return (
    <ButtonStyle type={type} onClick={click} disabled={disabled}>
      <FlexibleDiv height="100%">
        {loading ? <CircularProgress className="loader" /> : text}
      </FlexibleDiv>
    </ButtonStyle>
  );
};

export default Button;
