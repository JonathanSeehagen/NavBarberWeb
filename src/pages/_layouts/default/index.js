import React from 'react';
import PropTypes from 'prop-types';

// import Header from '~/components/Header';

// Wrapper = Container (Muda o nome apenas)
import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

/**
export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}
 */

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
