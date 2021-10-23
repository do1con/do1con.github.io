import React from 'react';
import PostCard from 'components/Common/PostCard';
import { postType } from 'context/InitalState';

interface propTypes {
  postList: postType[];
  selectedCategory: string;
}

const PostList: React.FC<propTypes> = ({ postList, selectedCategory }) => {
  const postCardList: (JSX.Element | undefined)[] = postList.map(
    (data: postType, key: number) => {
      const returnElement = (
        <li key={key} className="my-2">
          <PostCard postData={data} />
        </li>
      );
      if (selectedCategory === 'All') return returnElement;
      const { categories } = data.node.frontmatter;
      if (categories.indexOf(selectedCategory) >= 0) return returnElement;
      return;
    },
  );
  return (
    <>
      <ul>{postCardList}</ul>
    </>
  );
};

export default PostList;
