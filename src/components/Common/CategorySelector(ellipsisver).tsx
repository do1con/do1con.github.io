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
  const { categoryEllipsis } = useContext();
  const dispatch = useDispatch();
  const [listHeight, setListHeight] = useState<number>(0);
  const CategoryListBox = useRef<HTMLUListElement>(null);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    console.log('상태', categoryEllipsis);
  });
  useEffect(() => {
    handleResize();
  }, [categories]);
  useEffect(() => {
    if (listHeight >= 48 && categoryEllipsis) {
      console.log('범인후보1');
      dispatch({
        type: 'UPDATE_CATEGORY_ELLIPSIS',
        value: true,
      });
    } else {
      console.log('여기가 false');
      dispatch({
        type: 'UPDATE_CATEGORY_ELLIPSIS',
        value: false,
      });
    }
  }, [listHeight]);
  const handleResize = () => {
    if (CategoryListBox.current) {
      setListHeight(CategoryListBox.current.clientHeight);
      if (CategoryListBox.current.clientHeight >= 48) {
        console.log('범인후보2');
        dispatch({
          type: 'UPDATE_CATEGORY_ELLIPSIS',
          value: true,
        });
      }
    }
  };
  const onClickCategoryItem = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.target as HTMLElement;
    const categoryName: string = target.innerHTML.replace('#', '');
    setSelectedCategory(categoryName);
    dispatch({
      type: 'UPDATE_PAGE_NUMBER',
      value: 1,
    });
  };
  const onClickEllipsis = () => {
    dispatch({
      type: 'UPDATE_CATEGORY_ELLIPSIS',
      value: !categoryEllipsis,
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
      <ul
        className={`flex flex-wrap justify-items-center overflow-hidden ${
          categoryEllipsis ? 'MD:max-h-14 LG:max-h-20' : 'max-h-full'
        }`}
        ref={CategoryListBox}
      >
        <CategoryItem
          selected={selectedCategory === 'All'}
          onClick={onClickCategoryItem}
          className="MD:text-xs LG:text-sm"
        >
          #All
        </CategoryItem>
        {CategoryList}
      </ul>
      <div>
        {categoryEllipsis && (
          <EllipsisButton
            onClick={onClickEllipsis}
            className="MD:text-xs LG:text-sm"
          >
            ...모든 카테고리 보기
          </EllipsisButton>
        )}
        {/* <CategorySearchBar
          categories={categories}
          setDisplayCategories={setDisplayCategories}
        /> */}
      </div>
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
