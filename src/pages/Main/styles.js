import styled from 'styled-components/native';
import { darken } from 'polished';

import { RectButton } from 'react-native-gesture-handler';

export const ProductList = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    paddingLeft: 20,
    paddingRight: 5,
  },
  showsHorizontalScrollIndicator: true,
})`
  background-color: #191920;
  flex: 1;
`;
export const ProductBox = styled.View`
  background-color: #fff;
  border-radius: 4px;
  flex-direction: column;
  margin: 20px 15px 20px 0;
  width: 220px;
  height: 358px;
`;
export const ProductImage = styled.Image`
  margin: 10px;
  height: 200px;
  width: 200px;
  align-self: center;
`;
export const Title = styled.Text`
  margin: 0 20px 5px;
  font-size: 16px;
`;
export const Price = styled.Text`
  margin-left: 20px;
  font-size: 21px;
  font-weight: bold;
`;
export const AddToCart = styled(RectButton)`
  flex-direction: row;
  background-color: #7159c1;
  margin: 10px;
  border-radius: 4px;
  margin-top: auto;
  align-items: center;
`;
export const CartAmount = styled.View`
  background-color: ${darken(0.03, '#7159c1')};
  padding: 12px;
  flex-direction: row;
  align-items: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;
export const TextAmount = styled.Text`
  font-size: 14px;
  color: #fff;
`;
export const CartAdd = styled.Text`
  flex: 1;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
