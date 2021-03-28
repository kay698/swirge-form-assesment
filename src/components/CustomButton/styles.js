import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 90%;
  height: 50px;
  border-radius: 4px;
  outline: none;
  background-color: #3b5847;
  border: none;
  color: white;
  transition: all 0.3s ease;
  opacity: 1;
  font-size: 16px;
  text-transform: capitalize;
  font-weight: bold;

  :hover {
    opacity: 0.8;
  }

  .loader {
    height: 20px !important;
    color: white;
    width: 20px !important;
  }
`;
