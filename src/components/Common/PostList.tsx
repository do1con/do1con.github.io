import React from 'react';
import PostCard from 'components/Common/PostCard';
import { postType } from 'context/InitalState';

interface propTypes {
  postList: postType[];
}

const PostList: React.FC<propTypes> = ({ postList }) => {
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
