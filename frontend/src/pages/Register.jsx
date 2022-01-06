import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { useNavigate, Link, Navigate } from "react-router-dom";

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
import register_img from "../assets/undraw_access_account_re_8spm.svg";
import { Grid } from "../containers";
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
  const formRef = useRef();
  const formRef2 = useRef();
  const login = ()=>{setRedirect(true)}

  const [redirect, setRedirect] = useState(false)


  const register = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    fetch("http://localhost/online-shop-react/backend/api/register.php", {
      method: "POST",
      body: formData,
    })
      .then((r) => r.text())
      .then((r) => console.log(r));
  };

  const sigin = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef2.current);
    fetch("http://localhost/online-shop-react/backend/api/signin.php", {
      method: "POST",
      body: formData,
    })
      .then((r) => r.json())
      .then(r => {
        localStorage.setItem('token', r.token)
      })
  };

  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Logo> {t("Register")}</Logo>
      <Img src={register_img} padding={30} maxHeight={300} />
      <Grid>
        <Card>
          <CardHeader>
            <CardIcon>
              <GiArchiveRegister />
            </CardIcon>
            <CardTitle>Sign up:</CardTitle>
          </CardHeader>
          <CardContent>
            <Form ref={formRef} onSubmit={register}>
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
                <Input type="number" name="phone_number" maxLength="9" />
              </div>
              <div>
                <label htmlFor="email">E-mail:</label>
                <Input type="email" name="email" />
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
                <label htmlFor="submit">Sign up!</label>
                <Input type="submit" name="submit" value="Sign up!" />
              </div>
            </Form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardIcon>
              <GiArchiveRegister />
            </CardIcon>
            <CardTitle>Sign in:</CardTitle>
          </CardHeader>
          <CardContent>
            <Form ref={formRef2} onSubmit={sigin}>
              <div>
                <label htmlFor="signin_email">E-mail:</label>
                <Input type="email" name="signin_email" />
              </div>
              <div>
                <label htmlFor="signin_password">Password:</label>
                <Input type="password" name="signin_password" minLength="8" />
              </div>
              <div>
                <label htmlFor="submit">Sign in!</label>
                <Input type="submit" name="submit" value="Sign in!"  />
              </div>
            </Form>
            {redirect && <Navigate to={'/'}/>}
            <p></p>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Register;