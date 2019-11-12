import React from "react"
import PropTypes from 'prop-types';
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo";

const AboutPage = ({ data }) => {
  const node = data.allNodePage.nodes[0];

  return (
    <Layout>
      <SEO title="About" />
      <h1>{ node.title }</h1>
      <div dangerouslySetInnerHTML = {{ __html: node.body.value }}/>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query {
    allNodePage(filter: {drupal_internal__nid: {eq: 21}}) {
      nodes {
        title
        body {
          value
        }
      }
    }
  }
`

export default AboutPage;