import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import {
  ProductList,
  ProductBox,
  ProductImage,
  Title,
  Price,
  AddToCart,
  CartAmount,
  CartAdd,
  TextAmount,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }
  return (
    <ProductList>
      {products.map(product => (
        <ProductBox key={product.id}>
          <ProductImage source={{ uri: product.image }} alt={product.title} />
          <Title>{product.title}</Title>
          <Price>{product.priceFormatted}</Price>

          <AddToCart onPress={() => handleAddProduct(product.id)}>
            <CartAmount>
              <Icon name="add-shopping-cart" size={16} color="#FFF" />
              <TextAmount>{amount[product.id] || 0}</TextAmount>
            </CartAmount>
            <CartAdd>ADICIONAR</CartAdd>
          </AddToCart>
        </ProductBox>
      ))}
    </ProductList>
  );
}
