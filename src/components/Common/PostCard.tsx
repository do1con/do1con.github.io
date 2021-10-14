import React from 'react';
import { postDataTypes } from 'pages/index';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

interface propTypes {
  postData: postDataTypes;
}

const PostCard: React.FC<propTypes> = ({ postData }) => {
  React.useEffect(() => {
    console.log('포스트 카드');
    console.log('postData', postData);
    console.log('링크', frontmatter.slug);
  });
  const { frontmatter } = postData.node;
  const imageInfo = frontmatter.featuredImage.childImageSharp.gatsbyImageData;
  return (
    <div>
      <Link to={frontmatter.slug}>
        <div className="flex w-full my-8">
          <GatsbyImage image={imageInfo} alt="hi" className="mr-4" />
          <div>
            <h2 className="font-extrabold text-xl block">
              {frontmatter.title}
            </h2>
            <p className="text-xs text-gray-400 block my-1">
              작성일 : {frontmatter.date}
            </p>
            <p className="text-sm text-gray-700 my-1">{frontmatter.summary}</p>
            <p className="text-xs text-green-400 my-1">자세히 알아보기 →</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
