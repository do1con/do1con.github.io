import React from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'context/combineContext';

type propTypes = {
  categories: string[];
  selectedCategory: string;
};

const CategorySelector: React.FC<propTypes> = ({
  categories,
  selectedCategory,
}) => {
  const dispatch = useDispatch();
  const onClickCategoryItem = (el: any) => {
    const categoryName = el.target.innerHTML.replace('#', '');
    dispatch({
      type: 'UPDATE_SELECTED_CATEGORY',
      value: categoryName,
    });
  };
  const CategoryList: Array<JSX.Element> = categories.map(
    (data: string, key: number) => {
      return (
        <CategoryItem
          selected={data === selectedCategory}
          key={key}
          onClick={onClickCategoryItem}
        >
          #{data}
        </CategoryItem>
      );
    },
  );
  return (
    <div className="m-4">
      <ul className="inline-flex">
        <CategoryItem
          selected={selectedCategory === 'All'}
          onClick={onClickCategoryItem}
        >
          #All
        </CategoryItem>
        {CategoryList}
      </ul>
    </div>
  );
};

const CategoryItem = styled.li<{ selected: boolean }>`
  display: block;
  margin: 0.75rem;
  color: ${props => (props.selected ? '#242a33' : '#757d85')};
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
  cursor: pointer;
`;

export default CategorySelector;
