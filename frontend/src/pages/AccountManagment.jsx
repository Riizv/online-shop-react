import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

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
import {
    MdUpdate,
    MdBrightnessMedium,
    MdTranslate,
    MdAccountCircle,
    MdMail,
  } from "react-icons/md";
import account_banner from "../assets/undraw_account_re_o7id.svg";
import { Grid } from "../containers";
import { GiArchiveRegister } from "react-icons/gi";



const StyledLink = styled(Link)`
  display: block;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadius / 1.5}rem;
  background: ${({ theme }) => theme.second};
  border: none;
  width: 100%;
  color: ${({ theme }) => theme.card.fontColor};
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;

  &:active,
  &:focus {
    outline: none;
  }
  > * {
    background: ${({ theme }) => theme.card.backgroundColor};
    color: ${({ theme }) => theme.card.fontColor};
  }
`

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


const AccountManagment = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const formMng = useRef();


  useEffect(() => {
    fetch("http://localhost/online-shop-react/backend/api/manage_account.php", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${localStorage.getItem("token")}`,
      },
    })
      .then((r) => r.json())
      .then((r) => setData(r));
    console.log(data);
  }, [value]);


  const manage = (e) => {
    e.preventDefault();
    const formData = new FormData(formMng.current);
    fetch("http://localhost/online-shop-react/backend/api/get_user.php", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${localStorage.getItem("token")}`,
        },
      })
        .then((r) => r.json())
        .then((r) => setData(r));
    console.log(data);
  };

  return (
    <div>
      <Helmet>
        <title>Account managment</title>
      </Helmet>
      <Logo> </Logo>
      <Img src={account_banner} padding={30} maxHeight={300} />
      <Grid>
        <Card>
          <CardHeader>
            <CardIcon>
             <MdMail />
            </CardIcon>
            <CardTitle>
           {t("Account Information")}
            </CardTitle>
          </CardHeader>
          <CardContent>
          <Form ref={formMng} onSubmit={manage}>
              <div>
                <label htmlFor="name">Name:</label>
                <Input type="text" name="name" placeholder={data?.user_name} />
              </div>
              <div>
                <label htmlFor="town">Town:</label>
                <Input type="text" name="town" placeholder={data?.user_town} />
              </div>
              <div>
                <label htmlFor="street">Street:</label>
                <Input type="text" name="street" placeholder={data?.user_street} />
              </div>
              <div>
                <label htmlFor="post_code">Post code:</label>
                <Input type="text" name="post_code" maxLength="6" placeholder={data?.user_post_code} />
              </div>
              <div>
                <label htmlFor="phone_number">Phone number:</label>
                <Input type="number" name="phone_number" maxLength="9" placeholder={data?.user_phone_number} />
              </div>
              <div>
                <label htmlFor="email">E-mail:</label>
                <Input type="email" name="email" placeholder={data?.user_email} />
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
                <label htmlFor="submit">Change Information!</label>
                <Input type="submit" name="submit" value="Change!" />
              </div>
            </Form>
          </CardContent>
        </Card>
       
      </Grid>
    </div>
  );
};

export default AccountManagment;