import styled from "styled-components";
import Bg from "../../assets/bg.jpeg";

export const RegisterationWrap = styled.div`
  width: 100%;
  height: 100vh;
  background: #282828;
  background-image: linear-gradient(to right, #00000099, #00000099), url(${Bg});
  /* background-position: cover; */
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  transition: all 0.3s ease;

  h1 {
    color: #bbb;
    /* font-weight: 300; */
    font-size: 30px;
  }

  .formWrap {
    width: 550px;
    height: 60%;
    transition: all 0.3s ease;
    background-color: black;
    border-radius: 10px;
    padding: 20px 0;
    margin-bottom: 50px;
    animation: show 1s ease 1;

    form {
      position: relative;
      width: 100%;
      height: 100%;

      .passwordIcon {
        transition: all 0.3s ease;
        cursor: pointer;
        :hover {
          opacity: 0.7;
        }
      }
    }

    @media (max-width: 600px) {
      width: 90%;
    }
  }

  @keyframes show {
    from {
      margin-bottom: 0;
      opacity: 0.5;
    }
    to {
      margin-bottom: 50px;
      opacity: 1;
    }
  }
`;
