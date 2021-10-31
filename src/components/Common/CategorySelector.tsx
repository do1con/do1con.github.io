import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useContext } from 'context/combineContext';
import CategorySearchBar from './CategorySearchBar';

type propTypes = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: Function;
};

const CategorySelector: React.FC<propTypes> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const dispatch = useDispatch();
  const onClickCategoryItem = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.target as HTMLElement;
    const categoryName: string = target.innerHTML.replace('#', '');
    setSelectedCategory(categoryName);
    dispatch({
      type: 'UPDATE_PAGE_NUMBER',
      value: 1,
    });
  };
  const CategoryList: (JSX.Element | undefined)[] = categories.map(
    (data: string, key: number) => {
      return (
        <CategoryItem
          selected={data === selectedCategory}
          key={key}
          onClick={onClickCategoryItem}
          className="MD:text-xs LG:text-sm"
        >
          #{data}
        </CategoryItem>
      );
    },
  );
  return (
    <div className="mt-4 mb-t">
      <ul className="flex flex-wrap justify-items-center overflow-hidden max-h-full">
        <CategoryItem
          selected={selectedCategory === 'All'}
          onClick={onClickCategoryItem}
          className="MD:text-xs LG:text-sm"
        >
          #All
        </CategoryItem>
        {CategoryList}
      </ul>
      <div></div>
    </div>
  );
};

const CategoryItem = styled.li<{ selected: boolean }>`
  display: block;
  margin: 0.5rem;
  margin-left: 0;
  color: ${props => (props.selected ? '#242a33' : '#757d85')};
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
  cursor: pointer;
`;

const EllipsisButton = styled.button`
  margin: 0.75rem;
  margin-left: 0;
  display: block;
  color: #757d85;
  cursor: pointer;
`;

export default CategorySelector;
