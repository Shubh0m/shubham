import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

import HeadShake from "react-reveal/LightSpeed"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Full-stack Developer"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <HeadShake left>
            <h2 className="page-head-title">
              <mark style={{ backgroundColor: "#e2f0db" }}>
                {data.site.siteMetadata.description}
              </mark>
            </h2>

            <figcaption style={{ marginTop: 40 }}>
              React &nbsp;&nbsp;/&nbsp;&nbsp; Redux &nbsp;&nbsp;/&nbsp;&nbsp;
              Node.js &nbsp;&nbsp;/&nbsp;&nbsp; Express.js
              &nbsp;&nbsp;/&nbsp;&nbsp; Gatsby &nbsp;&nbsp;/&nbsp;&nbsp; Python
              &nbsp;&nbsp;/&nbsp;&nbsp; Firebase &nbsp;&nbsp;/&nbsp;&nbsp;
              Google Cloud &nbsp;&nbsp;/&nbsp;&nbsp; Google Maps API
              &nbsp;&nbsp;/&nbsp;&nbsp; PWAs & Service Workers
              &nbsp;&nbsp;/&nbsp;&nbsp; UI & UX
            </figcaption>
          </HeadShake>
        </header>
      )}
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
      <section id="contact-me">
        <hr />
        <h4 id="footer-contact-header">
          Want to get in <Link to={`/contact/`}>contact</Link>? Shoot me an
          email at <a href="mailto:stuart@thestu.art">stuart@thestu.art</a>,
          connect with me on{" "}
          <a href="https://https://www.linkedin.com/in/stuart-william-johnson/LinkedIn">
            LinkedIn
          </a>{" "}
          or <a href="https://discord.gg/zNy7Fmg">Discord</a>.
        </h4>
      </section>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
