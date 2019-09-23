import styled from 'styled-components';
import { darken } from 'polished';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 30px;
  background-color: #191920;
  flex: 1;
`;

export const Products = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 22px 0 10px 0;
`;

export const Total = styled.View`
  align-items: baseline;
`;

export const ButtonDelete = styled(RectButton)``;
export const AddButton = styled(RectButton)``;
export const RemoveButton = styled(RectButton)``;
export const SubTotal = styled.Text``;
export const Quantity = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const BoxQuantity = styled.TextInput`
  border-radius: 4px;
  border: 1px solid #dddddd;
  font-size: 14px;
  background-color: #fff;
`;
export const ProductInfo = styled.View`
  background-color: #eeeeee;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 7px 10px;
  border-radius: 4px;
`;
export const ProductPrice = styled.Text``;
export const ProductTitle = styled.Text``;
export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
`;
export const ProductDetails = styled.View``;
export const ProductBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const CartBox = styled.View`
  margin: 15px;
`;
export const CartItem = styled.View``;
export const Footer = styled.View``;
export const FinishButton = styled(RectButton)`
  background-color: #7159c1;
  border-radius: 4px;
  margin-bottom: auto;
  margin: 0 10px;
`;
export const TextFinishButton = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 13px;
  text-align: center;
`;
export const TextTotal = styled.Text``;
export const ValueTotal = styled.Text``;
