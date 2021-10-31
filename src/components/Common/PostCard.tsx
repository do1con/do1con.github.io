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
          <div className="SM:hidden overflow-hidden">
            <GatsbyImage
              image={imageInfo as IGatsbyImageData}
              alt={`${frontmatter.title} 썸네일`}
              className="mr-4 z-10"
            />
          </div>
          <div>
            <h2 className="font-extrabold SM:text-md LG:text-xl block">
              {frontmatter.title}
            </h2>
            <p className="text-xs text-gray-400 block my-1">
              작성일 : {frontmatter.date}
            </p>
            <p className="SM:text-xs text-sm text-gray-700 my-1 overflow-hidden SM:block SM:leading-5 SM:h-10">
              {frontmatter.summary}
            </p>
            <p className="text-xs text-green-400 my-1">자세히 알아보기 →</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
