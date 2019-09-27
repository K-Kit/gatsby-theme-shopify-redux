import React from 'react';
import PropTypes from 'prop-types';
import {Layout as ThemeLayout, Header, Styled, Main, Container,} from "theme-ui";
import {Global} from "@emotion/core";

const Layout = (props) => (
  <>
      <Global
          styles={theme => ({
              body: {
                  margin: 0
              }
          })}
      />
      <ThemeLayout>
          <Header >
              <Styled.h1>Gatsby theme shopify redux</Styled.h1>
          </Header>
          <Main>
              <Container>
                  {props.children}
              </Container>
          </Main>
      </ThemeLayout>
      </>
);

Layout.propTypes = {
  // bla: PropTypes.string,
};

Layout.defaultProps = {
  // bla: 'test',
};

export default Layout;
