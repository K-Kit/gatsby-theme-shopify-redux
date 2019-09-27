import React from 'react';
import PropTypes from 'prop-types';
import { Layout as ThemeLayout, Header, Styled,  } from "theme-ui";

const Layout = (props) => (
  <ThemeLayout>
    <Header >
      <Styled.h1>Gatsby theme shopify redux</Styled.h1>
    </Header>
  </ThemeLayout>
);

Layout.propTypes = {
  // bla: PropTypes.string,
};

Layout.defaultProps = {
  // bla: 'test',
};

export default Layout;
