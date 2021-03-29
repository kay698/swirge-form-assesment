import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 80%;
  height: 70px;
  border-radius: 4px;
  outline: none;
  background-color: #3b5847;
  border: none;
  color: #bbb;
  transition: all 0.3s ease;
  opacity: 1;
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 400;
  position: absolute;
  bottom: -50px;
  z-index: 1000000;

  :hover {
    width: 70%;
  }

  .loader {
    height: 20px !important;
    color: white;
    width: 20px !important;
  }
`;
