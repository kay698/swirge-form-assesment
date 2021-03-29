import React, { useState } from "react";
import { RegisterationWrap } from "./styles";
import { FlexibleDiv } from "../../components/FlexBox/styles";
import Input from "../../components/CustomInput";
import Button from "../../components/CustomButton";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
};

const Register = ({}) => {
  const [hidePassword, setHidePassword] = useState(true);

  const handleSetHidePassword = () => setHidePassword(!hidePassword);
  return (
    <RegisterationWrap>
      <FlexibleDiv height="100%" flexDir="column" justifyContent="space-evenly">
        <h1>Register With Us</h1>
        <FlexibleDiv className="formWrap">
          <form>
            <FlexibleDiv flexDir="column" alignItems="center" height="100%">
              <Input
                type="text"
                name="fullName"
                placeholder="Enter full name"
                icon={<PersonIcon />}
              />
              <Input
                type="email"
                name="email"
                placeholder="Enter a valid email"
                icon={<EmailIcon />}
              />
              <Input
                type={hidePassword ? "password" : "text"}
                name="fullName"
                placeholder="Enter password"
                icon={
                  hidePassword ? (
                    <VisibilityOff
                      className="passwordIcon"
                      onClick={() => {
                        handleSetHidePassword();
                      }}
                    />
                  ) : (
                    <Visibility
                      className="passwordIcon"
                      onClick={() => {
                        handleSetHidePassword();
                      }}
                    />
                  )
                }
              />
              <Button type="submit" text="Submit" className="button" />
            </FlexibleDiv>
          </form>
        </FlexibleDiv>
      </FlexibleDiv>
    </RegisterationWrap>
  );
};

export default Register;
