import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useContext, useDispatch } from 'context/combineContext';
import { pageBandCalc, maxPageFilter } from 'lib/paginationCalculator';

type propTypes = {
  minPage: number;
  maxPage: number;
  currentPage: number;
};

const Pagination: React.FC<propTypes> = ({ minPage, maxPage, currentPage }) => {
  const dispatch = useDispatch();
  const onClickPageNumber = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.target as HTMLElement;
    dispatch({
      type: 'UPDATE_PAGE_NUMBER',
      value: Number(target.innerText),
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
        >
          {i}
        </PageButton>,
      );
    }
    return pages;
  };
  return (
    <div className="w-full text-center">
      <ol className="inline-flex mx-auto my-3">{displayPages()}</ol>
    </div>
  );
};

const PageButton = styled.li<{ selected: boolean }>`
  margin: 0 0.75rem;
  cursor: pointer;
  color: ${props => (props.selected ? '#242a33' : '#757d85')};
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
`;

export default Pagination;
