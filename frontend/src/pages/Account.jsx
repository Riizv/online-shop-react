import React, { useState, useEffect } from "react";
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
  Button,
} from "../components";
import {
  MdUpdate,
  MdBrightnessMedium,
  MdTranslate,
  MdAccountCircle,
  MdMail,
  MdLogout,
} from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
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
`;

const Account = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const logout = () => {
    localStorage.removeItem("token");
    setRedirect(true);
  };

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch("http://localhost/online-shop-react/backend/api/get_user.php", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((r) => r.json())
      .then((r) => setData(r));
    console.log(data);
  }, [value]);

  const isAdmin = data?.user_type == 2;

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
            <CardTitle>{t("Account Information")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {t("Name: ")} {data?.user_name}
            </p>
            <p>
              {t("Join date: ")} {data?.user_create_date}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardIcon>
              <MdMail />
            </CardIcon>
            <CardTitle>{t("Contact Information")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {t("Town: ")} {data?.user_town}
            </p>
            <p>
              {t("Street: ")} {data?.user_street}
            </p>
            <p>
              {t("Post code: ")} {data?.user_post_code}
            </p>
            <p>
              {t("Phone number: ")} {data?.user_phone_number}
            </p>
            <p>
              {t("E-mail: ")} {data?.user_email}
            </p>
          </CardContent>
        </Card>

        {/* <Card>
          <CardHeader>
            <CardIcon>
              <MdMail />
            </CardIcon>
            <CardTitle>{t("Account management")}</CardTitle>
          </CardHeader>
          <CardContent>
            <StyledLink to="/account_managment/">Manage account!</StyledLink>
          </CardContent>
        </Card> */}
        {isAdmin &&(
          <Card>
            <CardHeader>
              <CardIcon>
                <IoMdAddCircle />
              </CardIcon>
              <CardTitle>{t("Product Add")}</CardTitle>
            </CardHeader>
            <CardContent>
              <StyledLink to="/product_add/">Add product!</StyledLink>
            </CardContent>
          </Card>
        )}
        <Card>
          <CardHeader>
            <CardIcon>
              <MdLogout />
            </CardIcon>
            <CardTitle>{t("Log out!")}</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={logout}>{t("Log out!")}</Button>
            {redirect && <Navigate to={"/"} />}
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Account;
