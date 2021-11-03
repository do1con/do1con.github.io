import React from 'react';
import { useLocation } from '@reach/router';
import { Helmet as ReactHelmet, HelmetProps } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type propTypes = {
  title: string;
  description?: string;
  categories?: string[];
  image?: string;
};

const Helmet: React.FC<propTypes> = ({
  title,
  description,
  categories,
  image,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            author
            siteUrl
            defaultImage: image
          }
        }
      }
    `,
  );
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    author,
    siteUrl,
    defaultImage,
  } = site.siteMetadata;
  // const defaultTitle = site.siteMetadata?.title;
  const { pathname } = useLocation();
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };
  return (
    <ReactHelmet
      htmlAttributes={{ lang: 'ko-KR' }}
      title={seo.title}
      titleTemplate={titleTemplate}
    >
      <meta name="author" content={author} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta
        name="keywords"
        content={`do1con 블로그 ${categories ? categories.join(' ') : ''}`}
      />
      <meta property="og:type" content="website" />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <meta
        name="google-site-verification"
        content={`${process.env.GOOGLE_SITE_VERIFICATION_KEY}`}
      />
      <meta
        name="naver-site-verification"
        content={`${process.env.NAVER_SITE_VERIFICATION_KEY}`}
      />
    </ReactHelmet>
  );
};

export default Helmet;
