import React from "react";
import { useTranslation } from "react-i18next";
// import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from "react-helmet";
import styled from "styled-components";

import {
  Img,
  Logo,
  Input,
  Card,
  CardHeader,
  CardIcon,
  CardContent,
  CardTitle,
} from "../components";
import register from "../assets/undraw_access_account_re_8spm.svg";
import { Grid } from "../containers";
import { FaCloudMoonRain } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-direction: column;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Register = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Logo> {t("Register")}</Logo>
      <Img src={register} padding={30} maxHeight={300} />
      <Grid>
        <Card>
          <CardHeader>
            <CardIcon>
              <GiArchiveRegister />
            </CardIcon>
            <CardTitle>Register data:</CardTitle>
          </CardHeader>
          <CardContent>
            <Form onSubmit={register}>
              <div>
                <label htmlFor="name">Name:</label>
                <Input type="text" name="name" />
              </div>
              <div>
                <label htmlFor="last_name">Last name:</label>
                <Input type="text" name="last_name" />
              </div>
              <div>
                <label htmlFor="town">Town:</label>
                <Input type="text" name="town" />
              </div>
              <div>
                <label htmlFor="street">Street:</label>
                <Input type="text" name="street" />
              </div>
              <div>
                <label htmlFor="post_code">Post code:</label>
                <Input type="text" name="post_code" maxLength="6" />
              </div>
              <div>
                <label htmlFor="phone_number">Phone number:</label>
                <Input type="number" name="phone_numer" maxLength="9" />
              </div>
              <div>
                <label htmlFor="email">E-mail:</label>
                <Input type="text" name="email" />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <Input type="password" name="password" minLength="8" />
              </div>
              <div>
                <label htmlFor="password2">Retype password:</label>
                <Input type="password" name="password2" minLength="8" />
              </div>
              <div>
                <label htmlFor="submit">Join us!</label>
                <Input type="submit" name="submit" value="Create" />
              </div>
            </Form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardIcon>
            <GiArchiveRegister />
            </CardIcon>
            <CardTitle>Kacper</CardTitle>
          </CardHeader>
          <CardContent>
            <a href="https://kcpru.com">Idż do kacpra</a>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Register;
