/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import favicon32 from "../data/pictures/favicon/favicon-32x32.png";
import favicon16 from "../data/pictures/favicon/favicon-16x16.png";
import appleTouch from "../data/pictures/favicon/apple-touch-icon.png";
let siteImage = "https://i.ibb.co/VwJtn9h/profile.png";

function SEO({ description, lang, meta, title }: any) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={"Portfolio | David Olive"}
      titleTemplate={`%s`}
    >
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouch} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <meta name="og:image" content={siteImage} />
      <meta name="twitter:image" content={siteImage} />
      <meta name="og:title" content={"David Olive ◆ " + title} />
      <meta name="twitter:title" content={"David Olive ◆ " + title} />
      <meta
        name="og:description"
        content={"Hi im David ⚡, Customer Focused and Data Driven."}
      />
      <meta
        name="twitter:description"
        content={"Hi im David ⚡, Customer Focused and Data Driven."}
      />
      <meta
        name="description"
        content={"Hi im David ⚡, Customer Focused and Data Driven."}
      />
      <meta name="og:type" content={"website"} />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
