import React from "react";
import { useTranslation } from "react-i18next";
// import { useSelector, useDispatch } from 'react-redux';
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
import { FaCloudMoonRain } from "react-icons/fa";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Main page</title>
      </Helmet>
      <Logo> {t("ExLog Shop")}</Logo>
      <div style={{overflow: 'hidden', position: 'relative', height: '18.79rem' }}>
        <Snowfall snowflakeCount={30} />
      <Img src={welcome_cats} padding={30} maxHeight={300} />
      </div>
      

      <Grid>
        <Card>
          <CardHeader>
            <CardIcon>
              <FaCloudMoonRain />
            </CardIcon>
            <CardTitle>{t("About App")}</CardTitle>
          </CardHeader>
          <CardContent>{t("Main page of shop")}</CardContent>
        </Card>
        <Card></Card>
      </Grid>
    </div>
  );
};

export default Home;
