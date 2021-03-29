import styled from "styled-components";

export const InputWrap = styled.div`
  width: 100%;
  height: 50px;
  background-color: inherit;
  border-bottom: 1px solid #282828;
  transition: all 0.3s ease;
  margin: 20px 0;
  :hover {
    border-bottom: 1px solid #777777;
  }

  input {
    width: 90%;
    height: 100%;
    border: none;
    background-color: transparent;
    transition: all 0.3s ease;
    color: #777777;
    font-size: 14px;
    outline: none;
    /* padding-left: 10px; */

  }
  svg {
    font-size: 16px;
    color: #bbb;
  }
`;
