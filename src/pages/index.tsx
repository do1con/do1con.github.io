import React from 'react';
import styled from '@emotion/styled';
import PostList from 'components/Common/PostList';
import { graphql } from 'gatsby';
import { postType } from 'context/InitalState';

interface propTypes {
  data: {
    allMarkdownRemark: {
      edges: Array<postType>;
    };
  };
}

const IndexPage: React.FC<propTypes> = ({ data }) => {
  React.useEffect(() => {
    console.log('여기');
    console.log('data', data);
  });
  const postList: postType[] = data.allMarkdownRemark.edges;
  return (
    <>
      <PostList postList={postList} />
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail
            slug
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 110, height: 110)
              }
            }
          }
        }
      }
    }
  }
`;
