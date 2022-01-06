import React, { useRef, useEffect } from "react";
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
import account_banner from "../assets/undraw_time_management_re_tk5w.svg";
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


const Account = () => {
  const { t } = useTranslation();
//   const formRef = useRef();
//   const formRef2 = useRef();

//   const register = (e) => {
//     e.preventDefault();
//     const formData = new FormData(formRef.current);
//     fetch("http://localhost/online-shop-react/backend/api/register.php", {
//       method: "POST",
//       body: formData,
//     })
//       .then((r) => r.text())
//       .then((r) => console.log(r));
//   };

//   const sigin = (e) => {
//     e.preventDefault();
//     const formData = new FormData(formRef2.current);
//     fetch("http://localhost/online-shop-react/backend/api/signin.php", {
//       method: "POST",
//       body: formData,
//     })
//       .then((r) => r.text())
//       .then((r) => console.log(r));
//   };

  return (
    <div>
      <Helmet>
        <title>Account</title>
      </Helmet>
      <Logo> </Logo>
      <Img src={account_banner} padding={30} maxHeight={300} />
      <Grid>
        <Card>
          <CardHeader>
            <CardIcon>
             <MdAccountCircle />
            </CardIcon>
            <CardTitle>
           {t("Account Information")}
            </CardTitle>
          </CardHeader>
          <CardContent>
           <p>
             {t("Name: ")}
           </p>
           <p>
             {t("Last name: ")} 
           </p>
           <p>
             {t("Join date: ")}
           </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardIcon>
             <MdMail />
            </CardIcon>
            <CardTitle>
           {t("Contact Information")}
            </CardTitle>
          </CardHeader>
          <CardContent>
           <p>
             {t("Town: ")}
           </p>
           <p>
             {t("Street: ")}
           </p>
           <p>
             {t("Post code: ")} 
           </p>
           <p>
             {t("Phone number: ")}
           </p>
           <p>
             {t("E-mail: ")}
           </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardIcon>
             <MdMail />
            </CardIcon>
            <CardTitle>
           {t("Account management")}
            </CardTitle>
          </CardHeader>
          <CardContent>
          <StyledLink  to='/account_managment/'>Manage account!</StyledLink>
          </CardContent>
        </Card>
       
      </Grid>
    </div>
  );
};

export default Account;