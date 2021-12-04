import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdError } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled, { keyframes } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import { IoIosWater } from "react-icons/io";
import { RiTempColdLine } from "react-icons/ri";
import { Helmet } from "react-helmet";

import {
  Img,
  Logo,
  Card,
  CardHeader,
  CardIcon,
  CardTitle,
  CardContent,
  Progress,
} from "../components";
import { Grid } from "../containers";
import product_banner from "../assets/undraw_window_shopping_re_0kbm.svg";
import { setDefaultNamespace } from "i18next";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AnimationAiOutlineLoading3Quarters = styled(AiOutlineLoading3Quarters)`
  animation: ${rotate} 2s linear infinite;
  font-size: 4rem;
  color: ${({ theme }) => theme.main};
  position: absolute;
`;

const Product = () => {
  const { t } = useTranslation();
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/api/get_product.php?id=${id}`)
      .then((r) => r.json())
      .then((r) => setData(r));
    // console.log();
  });

  return (
    <div>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <Logo>{t("Products")}</Logo>
      <Img src={product_banner} padding={30} maxHeight={300} />
      <p></p>
      <Grid>
        <Card>
          <CardHeader>
            <CardIcon>
              <RiTempColdLine />
            </CardIcon>
            <CardTitle>{data?.product_name}</CardTitle>
          </CardHeader>
          <CardContent>
            {data?.description}
            {/* <Progress value={99999} /> */}
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Product;
