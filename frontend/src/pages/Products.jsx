import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { MdError } from "react-icons/md";
import { AiOutlineLoading3Quarters, AiOutlineFire } from "react-icons/ai";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

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
  Input,
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
const Select = styled.select`
  display: block;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadius / 1.5}rem;
  background: ${({ theme }) => theme.second};
  border: none;
  /* width: 100%; */
  color: ${({ theme }) => theme.card.fontColor};
  font-size: 1rem;
  font-weight: bold;

  &:active,
  &:focus {
    outline: none;
  }
`;

const Products = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const formRef = useRef();

  useEffect(() => {
    fetch("http://localhost/online-shop-react/backend/api/get_products.php")
      .then((r) => r.json())
      .then((r) => setData(r));
    console.log(data);
  }, [value]);

  const filtrProduct = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    // formData.append("file", fileRef.current.files[0]);
    fetch("http://localhost/online-shop-react/backend/api/filtr_product.php", {
      method: "POST",
      body: formData,
    })
      .then((r) => r.text())
      .then((r) => console.log(r));
  };

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
              <AiOutlineFire />
            </CardIcon>
            <CardTitle>Filtr Products</CardTitle>
          </CardHeader>
          <CardContent>
            <Form ref={formRef} onSubmit={filtrProduct}>
              <div>
                <label htmlFor="product_category">Category:</label>
                {/* <Input type="text" name="product_category" /> */}
                <Select name="product_category">
                  {data &&
                    data.map((element) => (
                      <option value={element.category_id}>
                        {element.category}
                      </option>
                    ))}
                </Select>
              </div>
              <div>
                <label htmlFor="submit">Filtr products!</label>
                <Input type="submit" name="submit" value="Filtr product!" />
              </div>
            </Form>
          </CardContent>
        </Card>

        {data ? (
          data.map((element) => (
            <Card>
              <CardHeader>
                <CardIcon
                  onClick={() => navigate(`/product/${element.product_id}`)}
                >
                  <AiOutlineFire />
                </CardIcon>
                <CardTitle>{element.product_name}</CardTitle>
              </CardHeader>
              <CardContent>
                {element.description}
                {/* <Progress value={99999} /> */}
              </CardContent>
            </Card>
          ))
        ) : (
          <div>Nie znaleziono łukasza</div>
        )}
      </Grid>
    </div>
  );
};

export default Products;
