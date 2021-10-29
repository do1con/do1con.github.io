import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useContext, useDispatch } from 'context/combineContext';
import { pageBandCalc, maxPageFilter } from 'lib/paginationCalculator';
import LeftArrow from 'images/arrow-left.svg';
import RightArrow from 'images/arrow-right.svg';
import LeftArrowEnd from 'images/arrow-left-end.svg';
import RightArrowEnd from 'images/arrow-right-end.svg';

type propTypes = {
  minPage: number;
  maxPage: number;
  currentPage: number;
};

const Pagination: React.FC<propTypes> = ({ minPage, maxPage, currentPage }) => {
  const { totalPageNumber } = useContext();
  const dispatch = useDispatch();
  const onClickPageNumber = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.target as HTMLElement;
    dispatch({
      type: 'UPDATE_PAGE_NUMBER',
      value: Number(target.innerText),
    });
  };
  const onClickFirst = () => {
    dispatch({
      type: 'UPDATE_PAGE_NUMBER',
      value: 1,
    });
  };
  const onClickBefore = () => {
    dispatch({
      type: 'UPDATE_PAGE_NUMBER',
      value: currentPage - 1,
    });
  };
  const onClickNext = () => {
    dispatch({
      type: 'UPDATE_PAGE_NUMBER',
      value: currentPage + 1,
    });
  };
  const onClickLast = () => {
    dispatch({
      type: 'UPDATE_PAGE_NUMBER',
      value: totalPageNumber,
    });
  };
  const displayPages = () => {
    const pages = [];
    for (let i = minPage; i <= maxPage; i++) {
      pages.push(
        <PageButton
          selected={currentPage === i}
          onClick={onClickPageNumber}
          key={i}
          className="text-sm MD:m-1 LG:m-3 leading-none"
        >
          {i}
        </PageButton>,
      );
    }
    return pages;
  };
  return (
    <div className="SM:w-7/12 LG:w-full text-center mx-auto">
      <ol className="inline-flex flex-wrap mx-auto my-3">
        {currentPage > 1 && (
          <PageButton
            className="text-sm MD:m-1 LG:m-3"
            selected={false}
            onClick={onClickFirst}
          >
            <LeftArrowEnd width=".75rem" height=".75rem" />
          </PageButton>
        )}
        {currentPage > 1 && (
          <PageButton
            className="text-sm MD:m-1 LG:m-3"
            selected={false}
            onClick={onClickBefore}
          >
            <LeftArrow width=".75rem" height=".75rem" />
          </PageButton>
        )}
        {displayPages()}
        {currentPage <= maxPage && (
          <PageButton
            className="text-sm MD:m-1 LG:m-3"
            selected={false}
            onClick={onClickNext}
          >
            <RightArrow width=".75rem" height=".75rem" />
          </PageButton>
        )}
        {totalPageNumber > maxPage && (
          <PageButton
            className="text-sm MD:m-1 LG:m-3"
            selected={false}
            onClick={onClickLast}
          >
            <RightArrowEnd width=".75rem" height=".75rem" />
          </PageButton>
        )}
      </ol>
    </div>
  );
};

const PageButton = styled.li<{ selected: boolean }>`
  cursor: pointer;
  color: ${props => (props.selected ? '#242a33' : '#757d85')};
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
  line-height: 12px;
`;

export default Pagination;
