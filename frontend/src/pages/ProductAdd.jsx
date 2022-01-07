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
import product_add_banner from "../assets/undraw_add_files_re_v09g.svg";
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

const ProductAdd = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const fileRef = useRef();
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const add = () => {
    setRedirect(true);
  };
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch("http://localhost/online-shop-react/backend/api/get_categories.php")
      .then((r) => r.json())
      .then((r) => setData(r));
    console.log(data);
    console.log(fileRef.current);
  }, [value]);

  const addProduct = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    // formData.append("file", fileRef.current.files[0]);
    fetch("http://localhost/online-shop-react/backend/api/add_product.php", {
      method: "POST",
      body: formData,
    })
      .then((r) => r.text())
      .then((r) => console.log(r));
  };

  return (
    <div>
      <Helmet>
        <title>Product Add</title>
      </Helmet>
      <Logo> {t("Product Add")}</Logo>
      <Img src={product_add_banner} padding={30} maxHeight={300} />
      <Grid>
        <Card>
          <CardHeader>
            <CardIcon>
              <GiArchiveRegister />
            </CardIcon>
            <CardTitle>Product Data:</CardTitle>
          </CardHeader>
          <CardContent>
            <Form ref={formRef} onSubmit={addProduct}>
              <div>
                <label htmlFor="product_name">Product name:</label>
                <Input type="text" name="product_name" />
              </div>

              <div>
                <label htmlFor="product_category">Category:</label>
                {/* <Input type="text" name="product_category" /> */}
                <Select name="product_category">
                  {data &&
                    data.map((element) => <option value={element.category_id}>{element.category}</option>)}
                </Select>
              </div>
              <div>
                <label htmlFor="description">Description:</label>
                <Input type="textarea" name="description" />
              </div>
              <div>
                <label htmlFor="price">Price:</label>
                <Input type="text" name="price" />
              </div>
              <div>
                <label htmlFor="quantity">Quantity:</label>
                <Input type="numberic" name="quantity" />
              </div>
              <div>
                <label htmlFor="discount">Discount:</label>
                <Input type="number" name="discount" min="0" max="100" />
              </div>
              <div>
                <label htmlFor="image">Image:</label>
                <Input  type="file" name="image" />
              </div>
              <div>
                <label htmlFor="submit">Add product!</label>
                <Input type="submit" name="submit" value="Add product!" />
              </div>
            </Form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default ProductAdd;
