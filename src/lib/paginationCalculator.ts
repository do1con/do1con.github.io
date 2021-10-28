import { postType } from 'context/InitalState';

export function pageBandCalc(currentPage: number): {
  minPageNumber: number;
  maxPageNumber: number;
} {
  const calcNumb = currentPage % 10 ? currentPage : currentPage - 9;
  const minPageNumber = Math.floor(calcNumb / 10) * 10 + 1;
  const maxPageNumber = Math.ceil(calcNumb / 10) * 10;
  return {
    minPageNumber,
    maxPageNumber,
  };
}

export function maxPageFilter(
  postNumber: number,
  MaxPageNumber: number,
): number {
  if (Math.ceil(postNumber / 5) < MaxPageNumber) {
    return Math.ceil(postNumber / 5);
  }
  return MaxPageNumber;
}

export function pagePostsCalc(
  postList: postType[],
  currentPage: number,
): postType[] {
  const result = postList.filter((data, index) => {
    if (currentPage === 1) {
      return index < 5;
    } else {
      return currentPage * 5 - 5 <= index && currentPage * 5 - 1 >= index;
    }
  });
  return result;
}
