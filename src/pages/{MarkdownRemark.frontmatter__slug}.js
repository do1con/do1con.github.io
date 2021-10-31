import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Utterances from 'components/Common/Utterances';
import '../styles/base.min.css';
import '../styles/components.min.css';
import '../styles/typography.min.css';
import '../styles/utilities.min.css';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, allMarkdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [prevPageExist, setPrevPageExist] = useState(false);
  const [nextPageExist, setNextPageExist] = useState(false);
  useEffect(() => {
    const currentPageNumber = Number(
      frontmatter.slug.substring(frontmatter.slug.indexOf('/') + 1),
    );
    setCurrentPageNumber(currentPageNumber);
    setPrevPageExist(checkPrevPageExist(currentPageNumber, allMarkdownRemark));
    setNextPageExist(checkNextPageExist(currentPageNumber, allMarkdownRemark));
  }, []);
  const checkPrevPageExist = (currentPageNumber, allPosts) => {
    const result = allPosts.edges.filter(data => {
      const pageNumber = Number(
        data.node.frontmatter.slug.substring(
          data.node.frontmatter.slug.indexOf('/') + 1,
        ),
      );
      if (currentPageNumber - 1 === pageNumber) return true;
    });
    return Boolean(result.length);
  };
  const checkNextPageExist = (currentPageNumber, allPosts) => {
    const result = allPosts.edges.filter(data => {
      const pageNumber = Number(
        data.node.frontmatter.slug.substring(
          data.node.frontmatter.slug.indexOf('/') + 1,
        ),
      );
      if (currentPageNumber + 1 === pageNumber) return true;
    });
    return Boolean(result.length);
  };
  return (
    <div className="mx-auto">
      <h2 className="font-extrabold text-3xl block my-3">
        {frontmatter.title}
      </h2>
      <p className="text-xs text-gray-500 block my-3">
        작성일: {frontmatter.date}
      </p>
      <div className="blog-post-container mb-4">
        <div className="blog-post">
          <div
            className="blog-post-content prose max-w-full p-2"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <div className="flex justify-center my-3">
        {prevPageExist && (
          <Link
            to={`/post/${currentPageNumber - 1}`}
            className="p-2 text-sm border-solid border rounded-md border-gray-400 bg-white hover:bg-green-500 hover:text-white mx-2"
          >
            이전 글
          </Link>
        )}
        <Link
          to="/"
          className="p-2 text-sm border-solid border rounded-md border-gray-400 bg-white hover:bg-green-500 hover:text-white mx-2"
        >
          글 목록
        </Link>
        {nextPageExist && (
          <Link
            to={`/post/${currentPageNumber + 1}`}
            className="p-2 text-sm border-solid border rounded-md border-gray-400 bg-white hover:bg-green-500 hover:text-white mx-2"
          >
            다음 글
          </Link>
        )}
      </div>
      <Utterances repo="do1con/do1con.github.io" />
    </div>
  );
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  }
`;
