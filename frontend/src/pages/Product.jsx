import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdError } from "react-icons/md";
import { AiOutlineLoading3Quarters, AiFillFire } from "react-icons/ai";
import styled, { keyframes } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import { IoMdArrowBack } from "react-icons/io";
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
  const [value, setValue] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `http://localhost/online-shop-react/backend/api/get_product.php?id=${id}`
    )
      .then((r) => r.json())
      .then((r) => setData(r));
    console.log(data);
  }, [value]);

  // const addToCart = useEffect(() => {
  //   fetch(
  //     `http://localhost/online-shop-react/backend/api/add_to_cart.php?id=${id}`
  //   )
  //     .then((r) => r.json())
  //     .then((r) => setData(r));
  //   console.log(data);
  // }, [value]);

  return (
    <div>
      <Helmet>
        <title>Product</title>
      </Helmet>
      <Logo>{t("Products")}</Logo>
      <Img src={product_banner} padding={30} maxHeight={300} />
      <p></p>
      <Grid>
        <Card>
          <CardHeader>
            <CardIcon onClick={() => navigate(`/products/`)}>
              <IoMdArrowBack />
            </CardIcon>
            <CardTitle>{data?.product_name}</CardTitle>
          </CardHeader>
          <CardContent>
            {data?.description}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardIcon>
              <AiFillFire />
            </CardIcon>
            <CardTitle>{t("More Information")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Price: {data?.price}zł Quantity: {data?.quantity} Discount: {data?.discount}
            </p>
          </CardContent>
          </Card>

        {data?.name &&
          <Card>
          <CardHeader>
            <CardIcon>
              <AiFillFire />
            </CardIcon>
            <CardTitle>{t("Image")}</CardTitle>
          </CardHeader>
          <CardContent>
            <Img src={`http://localhost/online-shop-react/backend/api/uploads/${data?.name}`} alt="Product image missing" />
          </CardContent>
        </Card> 
        }

          <Card>
          <CardHeader>
            <CardIcon>
              <AiFillFire />
            </CardIcon>
            <CardTitle>{t("Actions")}</CardTitle>
          </CardHeader>
          <CardContent>
            {/* <Button onClick={addToCart}>{t("Add to Cart!")}</Button> */}
          </CardContent>
          </Card>

      </Grid>
    </div>
  );
};

export default Product;
