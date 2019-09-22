import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  background-color: #141419;
  height: 10%;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  flex-direction: row;
`;

export const Home = styled(RectButton)``;

export const Cart = styled(RectButton)``;

export const Quantity = styled.Text`
  font-size: 12px;
  color: #fff;
  background: #7159c1;
  position: absolute;
  border-radius: 8px;
  height: 16px;
  width: 16px;
  text-align: center;
  margin-left: 15px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 185px;
  height: 24px;
`;
