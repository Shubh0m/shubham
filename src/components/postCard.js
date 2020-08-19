import React from "react"
import { Link } from "gatsby"

import Fade from "react-reveal/Fade"

export default (props) => (
  <article className="post-card-wrapper">
    <Fade bottom delay={props.count === 1 ? 750 : 0}>
      <div
        className="row"
        style={props.count % 2 === 0 ? { flexWrap: "wrap-reverse" } : {}}
      >
        {props.count % 2 === 0 && (
          <>
            <div className="col-6 post-card-info" style={{ paddingLeft: 120 }}>
              <div>
                <figcaption>{props.node.frontmatter.category}</figcaption>
                <h3 style={{ marginTop: 0 }}>
                  {" "}
                  {props.node.frontmatter.title || props.node.fields.slug}
                </h3>
                <div className="post-content-body">
                  <p>{props.node.frontmatter.description}</p>
                </div>
                <Link
                  //to={props.node.fields.slug}
                  to={""}
                  className="post-content-body"
                  style={{ fontWeight: 700 }}
                >
                  Read More (Coming Soon)
                </Link>
              </div>
            </div>
          </>
        )}
        <div className="col-6">
          <div
            className={
              props.count % 2 === 1 ? "post-card-left" : "post-card-right"
            }
          >
            <article
              className={`post-card ${props.postClass} ${
                props.node.frontmatter.thumbnail ? `with-image` : `no-image`
              }`}
              style={
                props.node.frontmatter.thumbnail && {
                  backgroundImage: `url(${props.node.frontmatter.thumbnail.childImageSharp.fluid.src})`,
                }
              }
            >
              <Link to={props.node.fields.slug} className="post-card-link" />
            </article>
          </div>
        </div>
        {props.count % 2 === 1 && (
          <div className="col-6 post-card-info" style={{ paddingRight: "7vw" }}>
            <div>
              <figcaption>{props.node.frontmatter.category}</figcaption>
              <h3 style={{ marginTop: 0 }}>
                {" "}
                {props.node.frontmatter.title || props.node.fields.slug}
              </h3>
              <div className="post-content-body">
                <p>{props.node.frontmatter.description}</p>
              </div>
              <Link
                //to={props.node.fields.slug}
                to={""}
                className="post-content-body"
                style={{ fontWeight: 700 }}
              >
                Read More (Coming Soon!)
              </Link>
            </div>
          </div>
        )}
      </div>
    </Fade>
  </article>
)
