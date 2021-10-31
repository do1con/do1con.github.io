import React from 'react';
import { Helmet as ReactHelmet, HelmetProps } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type propTypes = {
  title: string;
  description?: string;
  categories?: string[];
  meta: [];
  image?: string;
};

const Helmet: React.FC<propTypes> = ({
  title,
  description,
  meta,
  categories,
  image,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            titleTemplate
            description
            author
            siteUrl
          }
        }
      }
    `,
  );
  const defaultTitle = site.siteMetadata?.title;
  const metaDescription = description || site.siteMetadata.description;
  return (
    <ReactHelmet
      htmlAttributes={{ lang: 'ko-KR' }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: 'author',
          content: `${site.siteMetadata.author}`,
        },
        {
          name: 'keywords',
          content: `${metaDescription} ${categories && categories?.join(' ')}`,
        },
        {
          name: `description`,
          content: `${metaDescription} ${categories && categories?.join(' ')}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: `${metaDescription} ${categories && categories?.join(' ')}`,
        },
        {
          property: `og:image`,
          content: `${image ? image : 'static/favicon.png'}`,
        },
        {
          property: `og:image:width`,
          content: `200`,
        },
        {
          property: `og:image:height`,
          content: `200`,
        },
        {
          property: `og:url`,
          content: `${site.siteMetadata.siteUrl}`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: `${metaDescription} ${categories && categories?.join(' ')}`,
        },
        {
          name: `twitter:image`,
          content: `${image ? image : 'static/favicon.png'}`,
        },
      ].concat(meta)}
    ></ReactHelmet>
  );
};

export default Helmet;
