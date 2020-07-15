import { graphql } from "gatsby";
import * as React from "react";
import Landing from "../components/Landing";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
        title
        subtitle
      }
    }
  }
`;

export default class IndexPage extends React.Component {
  public render() {
    return (
      <>
        <div>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Montserrat"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Alef"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto"
          />

          <Landing />
          <Skills />
          <Projects />
        </div>
      </>
    );
  }
}
