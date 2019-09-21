import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  background-color: #141419;
  height: 10%;
  justify-content: center;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 185px;
  height: 24px;
`;
