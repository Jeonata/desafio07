import styled from 'styled-components';
import { darken } from 'polished';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin: 30px;
  background: #fff;
  border-radius: 4px;
  padding: 2px 15px 10px;
`;

export const EmptyCartBox = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
`;

export const CartItem = styled.View`
  width: 100%;
  margin-top: 20px;
`;

export const ProductBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 18px;
  color: #333;
`;

export const EmptyCart = styled.View`
  margin: 20px;
`;

export const EmptyCartText = styled.Text`
  color: #000;
  font-size: 22px;
  font-weight: bold;
`;

export const ProductPrice = styled.Text`
  margin-top: 5px;
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

export const ButtonDelete = styled(RectButton)``;

export const AddButton = styled(RectButton)``;

export const BoxQuantity = styled.TextInput`
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
  background-color: #fff;
  color: #666;
  width: 51px;
  height: 26px;
  padding: 5px 31px 5px 12px;
`;

export const RemoveButton = styled(RectButton)``;

export const SubTotal = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

export const ProductInfo = styled.View`
  background-color: #eeeeee;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 7px 10px;
  border-radius: 4px;
  margin-top: 10px;
`;

export const Quantity = styled.View`
  flex-direction: row;
  align-items: center;
  height: 40px;
`;

export const Footer = styled.View``;

export const Total = styled.View`
  align-items: center;
  justify-content: center;
  margin: 30px 0;
`;

export const TextTotal = styled.Text`
  color: #999;
  font-size: 16px;
  font-weight: bold;
`;

export const ValueTotal = styled.Text`
  color: #000;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: -1.6px;
`;

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
