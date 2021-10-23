export type stateType = {
  postNumber: number;
  categories: string[];
  selectedCategory: string;
  searchWord: string;
  pageNumber: number;
  totalPageNumber: number;
  allPosts: postType[];
  shownPosts: postType[];
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

const InitialState: stateType = {
  postNumber: 0,
  categories: [''],
  selectedCategory: 'All',
  searchWord: '',
  pageNumber: 1,
  totalPageNumber: 1,
  allPosts: [
    {
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
    },
  ],
  shownPosts: [
    {
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
    },
  ],
};

export default InitialState;
