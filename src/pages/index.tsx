import React from 'react';
import styled from '@emotion/styled';
// import GlobalStyle from 'components/Common/GlobalStyle';
// import Footer from 'components/Layouts/Footer';
// import Introduction from 'components/Layouts/Header';
import CommonLayout from 'components/Layouts/CommonLayout';
import PostList from 'components/Common/PostList';
import { graphql } from 'gatsby';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const IndexPage: React.FC = data => {
  React.useEffect(() => {
    console.log('여기');
    console.log('data', data);
  });
  return (
    <Container>
      <CommonLayout>
        <PostList />
      </CommonLayout>
    </Container>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;
