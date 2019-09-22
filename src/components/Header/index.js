import React, { Component } from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Cart, Quantity, Home } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Container>
      <Home onPress={() => navigation.navigate('Main')}>
        <Logo />
      </Home>
      <Cart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={26} color="#FFF" />
        <Quantity>{cartSize}</Quantity>
      </Cart>
    </Container>
  );
}

export default connect(state => ({ cartSize: state.cart.length }))(Header);
