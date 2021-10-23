import React, { useEffect, useState } from 'react';
import { useContext, useDispatch } from 'context/combineContext';
import { graphql } from 'gatsby';
import { postType } from 'context/InitalState';
import PostList from 'components/Common/PostList';
import CategorySelector from 'components/Common/CategorySelector';
import PostSearchBar from 'components/Common/PostSearchBar';

interface propTypes {
  data: {
    allMarkdownRemark: {
      edges: Array<postType>;
    };
  };
}

const IndexPage: React.FC<propTypes> = ({ data }) => {
  const { categories, postNumber, allPosts, selectedCategory } = useContext();
  const dispatch = useDispatch();
  const [shownPost, setShownPost] = useState<postType>();
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
      value: categoryList.sort(),
    });
    dispatch({
      type: 'UPDATE_POSTNUMBER',
      value: postList.length,
    });
    dispatch({
      type: 'UPDATE_ALL_POSTS',
      value: postList,
    });
  }, []);

  return (
    <>
      <PostSearchBar />
      <CategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
      />
      <PostList postList={postList} selectedCategory={selectedCategory} />
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
