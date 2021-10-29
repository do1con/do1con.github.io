import React from 'react';
import { postType } from 'context/InitalState';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

interface propTypes {
  postData: postType;
}

const PostCard: React.FC<propTypes> = ({ postData }) => {
  const { frontmatter } = postData.node;
  const imageInfo = frontmatter.featuredImage.childImageSharp.gatsbyImageData;
  return (
    <div>
      <Link to={frontmatter.slug}>
        <div className="flex w-full my-8">
          <GatsbyImage
            image={imageInfo as IGatsbyImageData}
            alt="hi"
            className="mr-4 z-10"
          />
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
