import React from "react";
import { connect, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import styled from 'styled-components';
import { Helmet } from "react-helmet";
import { useNavigate, Link } from "react-router-dom";

import {
  MdUpdate,
  MdBrightnessMedium,
  MdTranslate,
  MdAccountCircle,
} from "react-icons/md";
import { FaFont } from "react-icons/fa";
import { AiOutlineRadiusSetting } from "react-icons/ai";

import {
  Img,
  Logo,
  Card,
  CardHeader,
  CardIcon,
  CardTitle,
  CardContent,
  Select,
  P,
} from "../../components";
import { Grid } from "../../containers";
import BorderRadiusCard from "./local-components/BorderRadiusCard";

import operating_system from "../../assets/operating_system.svg";

import { selectTheme, switchTheme } from "../../store/themeSlice";
import { selectFont, switchFont } from "../../store/fontSlice";
import { selectLang, switchLang } from "../../store/langSlice";


const mapDispatch = { switchTheme, switchFont, switchLang };


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


const Settings = ({ switchTheme, switchFont, switchLang }) => {
  const theme = useSelector(selectTheme);
  const font = useSelector(selectFont);
  const lang = useSelector(selectLang);
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  const changeLanguage = ({ target: { value } }) => {
    switchLang(value);
    i18n.changeLanguage(value);
  };

  const displayOptions = (el) => (
    <option key={el} value={el}>
      {el}
    </option>
  );

  return (
    <div>
      <Helmet>
        <title>Settings</title>
      </Helmet>
      <Logo>{t("Settings")}</Logo>
      <Img src={operating_system} padding={30} maxHeight={300} />
      <Grid>

      <Card>
          <CardHeader>
            <CardIcon>
              <MdAccountCircle />
            </CardIcon>
            <CardTitle>{t("Sign up or Sign in")}</CardTitle>
          </CardHeader>
          <CardContent>
           <StyledLink  to='/register/'>Join us! or Sign in!</StyledLink>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardIcon>
              <MdAccountCircle />
            </CardIcon>
            <CardTitle>{t("Account")}</CardTitle>
          </CardHeader>
          <CardContent>
          <StyledLink  to='/account/'> {t("Catch me if you can")} </StyledLink>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardIcon>
              <MdBrightnessMedium />
            </CardIcon>
            <CardTitle>{t("Theme")}</CardTitle>
          </CardHeader>
          <CardContent>
            <Select
              name="theme"
              onChange={({ target }) => switchTheme(target.value)}
              value={theme}
            >
              {["light", "dark", "pink", "yellow", "green"].map(displayOptions)}
            </Select>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardIcon>
              <FaFont />
            </CardIcon>
            <CardTitle>{t("Font")}</CardTitle>
          </CardHeader>
          <CardContent>
            <Select
              name="font"
              onChange={({ target }) => switchFont(target.value)}
              value={font}
            >
              {[
                "Ubuntu",
                "Montserrat",
                "Roboto",
                "Jetbrains Mono",
                "Poppins",
                "Arial",
              ].map(displayOptions)}
            </Select>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardIcon>
              <AiOutlineRadiusSetting />
            </CardIcon>
            <CardTitle>{t("Border radius")}</CardTitle>
          </CardHeader>
          <CardContent>
            <BorderRadiusCard />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardIcon>
              <MdTranslate />
            </CardIcon>
            <CardTitle>{t("Language")}</CardTitle>
          </CardHeader>
          <CardContent>
            <Select name="lang" onChange={changeLanguage} value={lang}>
              {["en", "pl", "de"].map(displayOptions)}
            </Select>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardIcon>
              <MdUpdate />
            </CardIcon>
            <CardTitle>{t("Version")}</CardTitle>
          </CardHeader>
          <CardContent onClick={() => alert("Easter egg! Masz mnie!")}>
            <P>
              <b>
                v0.20.2.22 <i>Beta</i>
              </b>
            </P>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default connect(null, mapDispatch)(Settings);
