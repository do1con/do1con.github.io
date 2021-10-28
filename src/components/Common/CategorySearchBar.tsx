import React, { useState } from 'react';

type propTypes = {
  categories: string[];
  setDisplayCategories: Function;
};

const CategorySearchBar: React.FC<propTypes> = ({
  categories,
  setDisplayCategories,
}) => {
  const [searchCategoryKeyword, setSearchCategoryKeyword] =
    useState<string>('');
  const onChangeCategoryKeyword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchCategoryKeyword(event.target.value);
    console.log('검색어', event.target.value);
    const filteredCategories = categories.filter(
      data => data.toUpperCase().indexOf(event.target.value.toUpperCase()) >= 0,
    );
    setDisplayCategories(filteredCategories);
  };
  return (
    <>
      <input
        type="text"
        placeholder="카테고리 검색"
        className="border-dashed rounded-lg border-gray-400 p-1 m-1 border-2"
        onChange={onChangeCategoryKeyword}
        value={searchCategoryKeyword}
      />
    </>
  );
};

export default CategorySearchBar;
