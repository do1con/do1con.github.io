import React from 'react';
import styled from '@emotion/styled';
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
          <ImageWrapper className="SM:hidden">
            <GatsbyImage
              image={imageInfo as IGatsbyImageData}
              alt={`${frontmatter.title} 썸네일`}
              className="z-10"
              style={{ width: '110px', height: '110px' }}
              objectFit="cover"
            />
          </ImageWrapper>
          <div className="w-full pl-2">
            <h2 className="font-extrabold SM:text-md LG:text-xl block">
              {frontmatter.title}
            </h2>
            <p className="text-xs text-gray-400 my-1">
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

const ImageWrapper = styled.div`
  width: calc(110px + 2rem) !important;
  height: 110px;
  overflow: hidden;
`;
