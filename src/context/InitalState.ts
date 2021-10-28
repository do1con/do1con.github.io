export type stateType = {
  postNumber: number; // 게시글 수
  categories: string[]; // 게시글 카테고리 리스트
  pageNumber: number; // 현재 페이지 넘버
  totalPageNumber: number; // 최대 페이지 넘버
  allPosts: postType[]; // 모든 게시글 정보
  shownPosts: postType[]; // 유저에게 보여질 게시글 정보
};

export type postType = {
  node: {
    frontmatter: {
      categories: string[];
      date: string;
      featuredImage: {
        childImageSharp: {
          gatsbyImageData: {
            backgroundColor: string;
            height: number;
            images: {
              fallback: {
                sizes: string;
                src: string;
                srcSet: string;
              };
              sources: [{ sizes: string; srcSet: string; type: string }];
            };
            layout: string;
            width: number;
          };
        };
      };
      slug: string;
      summary: string;
      thumbnail: string;
      title: string;
    };
  };
};

const emptyPost: postType = {
  node: {
    frontmatter: {
      categories: [''],
      date: '',
      featuredImage: {
        childImageSharp: {
          gatsbyImageData: {
            backgroundColor: '',
            height: 0,
            images: {
              fallback: {
                sizes: '',
                src: '',
                srcSet: '',
              },
              sources: [
                {
                  sizes: '',
                  srcSet: '',
                  type: '',
                },
              ],
            },
            layout: '',
            width: 0,
          },
        },
      },
      slug: '',
      summary: '',
      thumbnail: '',
      title: '',
    },
  },
};

const InitialState: stateType = {
  postNumber: 0,
  categories: [''],
  pageNumber: 1,
  totalPageNumber: 1,
  allPosts: [emptyPost],
  shownPosts: [emptyPost],
};

export default InitialState;
