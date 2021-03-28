import styled from "styled-components";

export const InputWrap = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: inherit;
  border: 2px solid #bbb;
  transition: all 0.3s ease;
  :hover {
    height: 55px;
  }

  input {
    width: 94%;
    height: 100%;
    border: none;
    background-color: inherit;
    transition: all 0.3s ease;
    color: #777777;
    font-size: 16px;
    outline: none;
    padding-left: 10px;
  }
  svg {
    font-size: 14px;
    cursor: pointer;
    color: #bbb;
    transition: all 0.3s ease;

    :hover {
      font-size: 12px;
    }
  }
`;
