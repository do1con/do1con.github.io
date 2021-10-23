import React from 'react';

type propTypes = {
  searchWord: string;
  setSearchWord: Function;
};

const PostSearchBar: React.FC<propTypes> = ({ searchWord, setSearchWord }) => {
  const onChangeSearchBar = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value);
  };
  return (
    <div className="flex w-full justify-items-center">
      <div className="flex w-full max-w-xs mx-auto">
        <input
          type="text"
          placeholder="게시글 검색"
          className="border-solid rounded-lg border-gray-400 p-1 w-full border-2"
          value={searchWord}
          onChange={onChangeSearchBar}
        />
      </div>
    </div>
  );
};

export default PostSearchBar;
