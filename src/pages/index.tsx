import React, { useEffect, useState } from 'react';
import { useContext, useDispatch } from 'context/combineContext';
import { graphql } from 'gatsby';
import { postType } from 'context/InitalState';
import Helmet from 'components/Layouts/Helmet';
import PostList from 'components/Common/PostList';
import CategorySelector from 'components/Common/CategorySelector';
import PostSearchBar from 'components/Common/PostSearchBar';
import Pagination from 'components/Common/Pagination';
import {
  pageBandCalc,
  maxPageFilter,
  pagePostsCalc,
} from 'lib/paginationCalculator';

interface propTypes {
  data: {
    allMarkdownRemark: {
      edges: Array<postType>;
    };
  };
}

const IndexPage: React.FC<propTypes> = ({ data }: propTypes) => {
  const { categories, pageNumber } = useContext();
  const dispatch = useDispatch();
  const unFilteredPosts: postType[] = data.allMarkdownRemark.edges;
  const CategoryFilter = (postList: postType[]) => {
    return postList.filter(
      data =>
        data.node.frontmatter.categories.indexOf(selectedCategory) >= 0 ||
        selectedCategory === 'All',
    );
  };
  const SearchWordFilter = (postList: postType[]) => {
    return postList.filter(
      data =>
        data.node.frontmatter.title
          .toUpperCase()
          .indexOf(searchWord.toUpperCase()) >= 0 ||
        data.node.frontmatter.categories.indexOf(searchWord) >= 0 ||
        data.node.frontmatter.summary
          .toUpperCase()
          .indexOf(searchWord.toUpperCase()) >= 0,
    );
  };
  const [minPage, setMinPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);
  const [searchWord, setSearchWord] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredPosts, setFilteredPosts] = useState<postType[]>(
    CategoryFilter(SearchWordFilter(unFilteredPosts)),
  );
  const [displayPosts, setDisplayPosts] = useState<postType[]>(
    pagePostsCalc(filteredPosts, pageNumber),
  );
  useEffect(() => {
    combineCalcDisplayPostsProcess();
  }, [selectedCategory, searchWord, pageNumber]);
  useEffect(() => {
    dispatch({
      type: 'UPDATE_ALL_POSTS',
      value: unFilteredPosts,
    });
    combineCalcDisplayPostsProcess();
  }, []);

  const combineCalcDisplayPostsProcess = () => {
    const newFilteredPosts = CategoryFilter(SearchWordFilter(unFilteredPosts));
    const { minPageNumber, maxPageNumber } = pageBandCalc(pageNumber);
    setMinPage(minPageNumber);
    setMaxPage(maxPageFilter(newFilteredPosts.length, maxPageNumber));
    dispatch({
      type: 'UPDATE_TOTAL_PAGE_NUMBER',
      value: Math.ceil(newFilteredPosts.length / 5),
    });
    setFilteredPosts(CategoryFilter(SearchWordFilter(unFilteredPosts)));
    setDisplayPosts(pagePostsCalc(newFilteredPosts, pageNumber));
    const unOrganizedCategories: string[] = [''].concat(
      ...unFilteredPosts.map(category => category.node.frontmatter.categories),
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
      value: unFilteredPosts.length,
    });
  };

  return (
    <div className="flex">
      <Helmet title="홈" description="do1con의 블로그 입니다." />
      <div>
        <PostSearchBar searchWord={searchWord} setSearchWord={setSearchWord} />
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <PostList postList={displayPosts} selectedCategory={selectedCategory} />
        <Pagination
          minPage={minPage}
          maxPage={maxPage}
          currentPage={pageNumber}
        />
      </div>
    </div>
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
