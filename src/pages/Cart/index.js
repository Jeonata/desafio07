import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ButtonDelete,
  AddButton,
  RemoveButton,
  SubTotal,
  Quantity,
  BoxQuantity,
  ProductInfo,
  ProductPrice,
  ProductTitle,
  ProductImage,
  CartItem,
  Footer,
  FinishButton,
  Total,
  TextTotal,
  ValueTotal,
  TextFinishButton,
  ProductDetails,
  ProductBox,
  EmptyCartBox,
  EmptyCart,
  EmptyCartText,
} from './styles';
import { finishDraft } from 'immer';

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }
  return (
    <Container>
      {cart.length === 0 ? (
        <EmptyCartBox>
          <EmptyCart>
            <Icon name="remove-shopping-cart" size={70} color="#ddd" />
          </EmptyCart>
          <EmptyCartText>Seu carrinho está vazio.</EmptyCartText>
        </EmptyCartBox>
      ) : (
        cart.map(product => (
          <CartItem key={product.id}>
            <ProductBox>
              <ProductImage
                source={{ uri: product.image }}
                alt={product.title}
              />
              <ProductDetails>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.priceFormatted}</ProductPrice>
              </ProductDetails>
              <ButtonDelete
                onPress={() => dispatch(CartActions.removeFromCart(product.id))}
              >
                <Icon name="delete-forever" size={24} color="#7159c1" />
              </ButtonDelete>
            </ProductBox>
            <ProductInfo>
              <Quantity>
                <AddButton type="button" onPress={() => decrement(product)}>
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color="#7159c1"
                  />
                </AddButton>
                <BoxQuantity readOnly value={`${product.amount}`} />
                <RemoveButton type="button" onPress={() => increment(product)}>
                  <Icon name="add-circle-outline" size={20} color="#7159c1" />
                </RemoveButton>
              </Quantity>

              <SubTotal>{product.subtotal}</SubTotal>
            </ProductInfo>
          </CartItem>
        ))
      )}
      {cart.length !== 0 && (
        <Footer>
          <Total>
            <TextTotal>TOTAL</TextTotal>
            <ValueTotal>{total}</ValueTotal>
          </Total>
          <FinishButton>
            <TextFinishButton>Finalizar pedido</TextFinishButton>
          </FinishButton>
        </Footer>
      )}
    </Container>
  );
}
