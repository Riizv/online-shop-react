import React from 'react';
import { useTranslation } from 'react-i18next';
// import { useSelector, useDispatch } from 'react-redux';
import {Helmet} from "react-helmet";

import {
  Img,
  Logo,
  P,
  Card,
  CardHeader,
  CardIcon,
  CardContent,
  CardTitle,
} from '../components';
import order from '../assets/undraw_order_delivered_re_v4ab.svg';
import { Grid } from '../containers';
import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
      <title>Cart</title>
      </Helmet>
      <Logo> {t('Cart')}</Logo>
      <Img src={order} padding={30} maxHeight={300} />

      <Grid>
        <Card>
          <CardHeader>
            <CardIcon>
              <FaShoppingCart />
            </CardIcon>
            <CardTitle>{t('About Cart')}</CardTitle>
          </CardHeader>
          <CardContent>{t('There will be your products')}</CardContent>
        </Card>
        <Card>
          
        </Card>
      </Grid>
      
    </div>
  );
};

export default Cart;