import React from 'react';
import { graphql } from 'gatsby';
import Utterances from 'components/Common/Utterances';
import '../styles/base.min.css';
import '../styles/components.min.css';
import '../styles/typography.min.css';
import '../styles/utilities.min.css';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
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
      <Utterances repo="do1con/kss_blog" />
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
  }
`;
