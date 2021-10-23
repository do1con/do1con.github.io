import React, { useState, useRef, useEffect } from 'react';
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
  const [listHeight, setListHeight] = useState<number>(0);
  const [showEllipsis, setShowEllipsis] = useState<boolean>(false);
  const CategoryListBox = useRef<HTMLUListElement>(null);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    handleResize();
  }, [categories]);
  useEffect(() => {
    if (listHeight >= 48) {
      setShowEllipsis(true);
    } else {
      setShowEllipsis(false);
    }
  }, [listHeight]);
  const handleResize = () => {
    if (CategoryListBox.current) {
      setListHeight(CategoryListBox.current.clientHeight);
      if (CategoryListBox.current.clientHeight >= 48) setShowEllipsis(true);
    }
  };
  const onClickCategoryItem = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.target as HTMLElement;
    const categoryName: string = target.innerHTML.replace('#', '');
    dispatch({
      type: 'UPDATE_SELECTED_CATEGORY',
      value: categoryName,
    });
  };
  const onClickEllipsis = () => {
    setShowEllipsis(!showEllipsis);
  };
  const CategoryList: (JSX.Element | undefined)[] = categories.map(
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
    <div className="mt-4 mb-t">
      <ul
        className={`flex flex-wrap justify-items-center overflow-hidden ${
          showEllipsis ? 'max-h-20' : 'max-h-full'
        }`}
        ref={CategoryListBox}
      >
        <CategoryItem
          selected={selectedCategory === 'All'}
          onClick={onClickCategoryItem}
        >
          #All
        </CategoryItem>
        {CategoryList}
      </ul>
      {showEllipsis && (
        <EllipsisButton onClick={onClickEllipsis}>
          ...모든 카테고리 보기
        </EllipsisButton>
      )}
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
