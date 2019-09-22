import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    try {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      this.setState({ products: data });
    } catch (error) {}
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <ProductList>
        {products.map(product => (
          <ProductBox key={product.id}>
            <ProductImage source={{ uri: product.image }} alt={product.title} />
            <Title>{product.title}</Title>
            <Price>{product.priceFormatted}</Price>

            <AddToCart onPress={() => this.handleAddProduct(product.id)}>
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
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
