import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';
// import Drawer from '../../../components/Drawer';

// Wrapper = Container (Muda o nome apenas)
import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      {/** <Drawer /> */}
      {/** <Header /> */}
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
