import React from 'react';
import { StatusBar } from 'react-native';
// import changeNavigationBarColor from 'react-native-navigation-bar-color';

import Header from './components/Header';
import Cart from './pages/Cart';

const App = () => {
  // changeNavigationBarColor('#ffffff', true);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Header />
      <Cart></Cart>
    </>
  );
};

export default App;
