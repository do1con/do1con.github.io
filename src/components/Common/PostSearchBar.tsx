import React, { useState, useEffect } from 'react';

const PostSearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const onChangeSearchBar = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="flex w-full justify-items-center">
      <div className="flex w-full max-w-xs mx-auto">
        <input
          type="text"
          placeholder="게시글 검색"
          className="border-solid rounded-l-lg border-gray-400 p-1 w-full border-t-2 border-l-2 border-b-2"
          value={searchValue}
          onChange={onChangeSearchBar}
        />
        <button className="w-20 bg-green-500 text-white rounded-r-lg">
          검색
        </button>
      </div>
    </div>
  );
};

export default PostSearchBar;
