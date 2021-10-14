import React, { JSXElementConstructor, useEffect } from 'react';
import { postDataTypes } from 'pages/index';
import PostCard from 'components/Common/PostCard';

interface propTypes {
  posts: postDataTypes[];
}

const PostList: React.FC<propTypes> = ({ posts }) => {
  React.useEffect(() => {
    console.log('포스트리스트');
    console.log('props', posts);
  });
  const postCardList: Array<JSX.Element> = posts.map(
    (data: postDataTypes, key: number) => {
      return (
        <li key={key} className="my-2">
          <PostCard postData={data} />
        </li>
      );
    },
  );
  return (
    <div className="p-12 mx-auto mt-6 w-full max-w-4xl">
      <ul>{postCardList}</ul>
    </div>
  );
};

export default PostList;
