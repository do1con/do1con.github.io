import React, { useEffect } from 'react';
import PostCard from 'components/Common/PostCard';
import { useContext, useDispatch } from 'context/combineContext';
import { postType } from 'context/InitalState';

interface propTypes {
  postList: postType[];
}

const PostList: React.FC<propTypes> = ({ postList }) => {
  const { categories, posts } = useContext();
  const dispatch = useDispatch();

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
      type: 'UPDATE_POSTS',
      value: postList.length,
    });
  }, []);

  const postCardList: Array<JSX.Element> = postList.map(
    (data: postType, key: number) => {
      return (
        <li key={key} className="my-2">
          <PostCard postData={data} />
        </li>
      );
    },
  );
  return <ul>{postCardList}</ul>;
};

export default PostList;
