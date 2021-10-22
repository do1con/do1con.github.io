import React, { useEffect } from 'react';
import PostCard from 'components/Common/PostCard';
import { useContext, useDisptch } from 'context/combineContext';
import { postType } from 'context/InitalState';

interface propTypes {
  postList: postType[];
}

const PostList: React.FC<propTypes> = ({ postList }) => {
  const { categories, postNumber, posts } = useContext();

  useEffect(() => {
    console.log('카테고리스', categories);
    console.log('포스트 넘버', postNumber);
    console.log('포스트', posts);
  });

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
