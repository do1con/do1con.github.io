import React from 'react';
import styled from '@emotion/styled';
// import GlobalStyle from 'components/Common/GlobalStyle';
// import Footer from 'components/Layouts/Footer';
// import Introduction from 'components/Layouts/Header';
import PostList from 'components/Common/PostList';
import { graphql } from 'gatsby';

export interface postDataTypes {
  node: {
    frontmatter: {
      categories: string[];
      date: string;
      featuredImage: {
        childImageSharp: {
          fluid: {
            src: string;
            srcSet: string;
          };
          gatsbyImageData: any;
          // gatsbyImageData: {
          //   height: number;
          //   images: {
          //     fallback: {
          //       sizes: string;
          //       src: string;
          //       srcSet: string;
          //     };
          //     sources: Array<any>;
          //   };
          //   layout: string;
          //   placeholer: {
          //     fallback: string;
          //   };
          //   width: number;
          // };
        };
      };
      slug: string;
      summary: string;
      thumbnail?: any;
      title: string;
    };
  };
}

interface propTypes {
  data: {
    allMarkdownRemark: {
      edges: Array<postDataTypes>;
    };
  };
}

const IndexPage: React.FC<propTypes> = ({ data }) => {
  React.useEffect(() => {
    console.log('여기');
    console.log('data', data);
  });
  const postList: postDataTypes[] = data.allMarkdownRemark.edges;
  return (
    <>
      <PostList posts={postList} />
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
