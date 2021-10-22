import React, { useEffect } from 'react';
import PostList from 'components/Common/PostList';
import { graphql } from 'gatsby';
import { postType } from 'context/InitalState';
import { useContext, useDispatch } from 'context/combineContext';

interface propTypes {
  data: {
    allMarkdownRemark: {
      edges: Array<postType>;
    };
  };
}

const IndexPage: React.FC<propTypes> = ({ data }) => {
  const { categories, postNumber, posts } = useContext();
  const dispatch = useDispatch();
  const postList: postType[] = data.allMarkdownRemark.edges;
  useEffect(() => {
    const unOrganizedCategories: string[] = [''].concat(
      ...postList.map(category => category.node.frontmatter.categories),
    );
    const categoryList: string[] = unOrganizedCategories.filter(
      (item, index) => unOrganizedCategories.indexOf(item) === index,
    );
    categoryList.shift();
    dispatch({
      type: 'UPDATE_CATEGORIES',
      value: categoryList,
    });
    dispatch({
      type: 'UPDATE_POSTNUMBER',
      value: postList.length,
    });
    dispatch({
      type: 'UPDATE_POSTS',
      value: postList,
    });
  }, []);

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
