import React, { useEffect } from 'react';
import { postDataTypes } from 'pages/index';
import PostCard from 'components/Common/PostCard';
import { useContext, useDispatch } from 'context/combineContext';

interface propTypes {
  posts: postDataTypes[];
}

const PostList: React.FC<propTypes> = ({ posts }) => {
  const { categories } = useContext();
  const dispatch = useDispatch();
  const postCardList: Array<JSX.Element> = posts.map(
    (data: postDataTypes, key: number) => {
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
