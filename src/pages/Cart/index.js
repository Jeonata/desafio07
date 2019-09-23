import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Products,
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
  CartBox,
  CartItem,
  Footer,
  FinishButton,
  Total,
  TextTotal,
  ValueTotal,
  TextFinishButton,
  ProductDetails,
  ProductBox,
} from './styles';
import { finishDraft } from 'immer';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }
  return (
    <Container>
      <Products>
        <CartBox>
          {cart.length === 0 ? (
            <ProductTitle>Vazio</ProductTitle>
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
                  <ButtonDelete onPress={() => removeFromCart(product.id)}>
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
                    <RemoveButton
                      type="button"
                      onPress={() => increment(product)}
                    >
                      <Icon
                        name="add-circle-outline"
                        size={20}
                        color="#7159c1"
                      />
                    </RemoveButton>
                  </Quantity>

                  <SubTotal>{product.subtotal}</SubTotal>
                </ProductInfo>
              </CartItem>
            ))
          )}
        </CartBox>
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
      </Products>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
