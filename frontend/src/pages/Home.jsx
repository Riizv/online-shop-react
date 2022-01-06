import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Helmet } from "react-helmet";
import Snowfall from "react-snowfall"


import {
  Img,
  Logo,
  P,
  Card,
  CardHeader,
  CardIcon,
  CardContent,
  CardTitle,
} from "../components";
import welcome_cats from "../assets/undraw_welcome_cats_thqn.svg";
import { Grid } from "../containers";
import { GiChestnutLeaf } from "react-icons/gi";
import { selectTheme } from "../store/themeSlice";


const Home = () => {
  const { t } = useTranslation();
  const theme = useSelector(selectTheme);

  return (
    <div>
      <Helmet>
        <title>Main page</title>
      </Helmet>
      <Logo> {t("ExLog Shop")}</Logo>
      <div style={{overflow: 'hidden', position: 'relative', height: '18.79rem' }}>
        <Snowfall snowflakeCount={30} color={theme} />
      <Img src={welcome_cats} padding={30} maxHeight={300} />
      </div>
      

      <Grid>
        <Card>
          <CardHeader>
            <CardIcon>
              <GiChestnutLeaf />
            </CardIcon>
            <CardTitle>{t("About Shop")}</CardTitle>
          </CardHeader>
          <CardContent>{t("We are lesser poland lider in CBD industry!")}</CardContent>
        </Card>
        <Card></Card>
      </Grid>
    </div>
  );
};

export default Home;
