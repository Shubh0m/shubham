(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(174),r=a(0),A=a.n(r),i=a(159),s=a(160),o=a(162),l=function(e){return A.a.createElement("article",{className:"post-card-wrapper"},A.a.createElement("div",{className:"row",style:e.count%2==1?{flexWrap:"wrap-reverse"}:{}},e.count%2==0&&A.a.createElement(A.a.Fragment,null,A.a.createElement("div",{className:"col-6 post-card-info",style:{paddingLeft:120}},A.a.createElement("div",null,A.a.createElement("h3",{style:{marginTop:0}}," ",e.node.frontmatter.title||e.node.fields.slug),A.a.createElement("div",{className:"post-content-body"},A.a.createElement("p",null,e.node.frontmatter.description)),A.a.createElement(i.a,{to:e.node.fields.slug,className:"post-content-body",style:{fontWeight:700}},"Read More")))),A.a.createElement("div",{className:"col-6"},A.a.createElement("div",{className:e.count%2==1?"post-card-left":"post-card-right"},A.a.createElement("article",{className:"post-card "+e.postClass+" "+(e.node.frontmatter.thumbnail?"with-image":"no-image"),style:e.node.frontmatter.thumbnail&&{backgroundImage:"url("+e.node.frontmatter.thumbnail.childImageSharp.fluid.src+")"}},A.a.createElement(i.a,{to:e.node.fields.slug,className:"post-card-link"})))),e.count%2==1&&A.a.createElement("div",{className:"col-6 post-card-info",style:{paddingRight:"7vw"}},A.a.createElement("div",null,A.a.createElement("h3",{style:{marginTop:0}}," ",e.node.frontmatter.title||e.node.fields.slug),A.a.createElement("div",{className:"post-content-body"},A.a.createElement("p",null,e.node.frontmatter.description)),A.a.createElement(i.a,{to:e.node.fields.slug,className:"post-content-body",style:{fontWeight:700}},"Read More")))))},c=(a(148),a(149),function(e,t){var a=e.data,n=a.site.siteMetadata.title,r=a.allMarkdownRemark.edges,c=0;return A.a.createElement(s.a,{title:n},A.a.createElement(o.a,{title:"Full-stack Developer",keywords:["blog","gatsby","javascript","react"]}),a.site.siteMetadata.description&&A.a.createElement("header",{className:"page-head"},A.a.createElement("h2",{className:"page-head-title"},A.a.createElement("mark",{style:{backgroundColor:"#e2f0db"}},a.site.siteMetadata.description)),A.a.createElement("figcaption",{style:{marginTop:40}},"React   /   Redux   /   Node.js   /   Express.js   /   Gatsby   /   Python   /   Firebase   /   Google Cloud   /   Google Maps API   /   PWAs & Service Workers   /   UI & UX")),A.a.createElement("div",{className:"post-feed"},r.map(function(e){var t=e.node;return c++,A.a.createElement(l,{key:t.fields.slug,count:c,node:t,postClass:"post"})})),A.a.createElement("section",{id:"contact-me"},A.a.createElement("hr",null),A.a.createElement("h4",{id:"footer-contact-header"},"Want to get in ",A.a.createElement(i.a,{to:"/contact/"},"contact"),"? Shoot me an email at ",A.a.createElement("a",{href:"mailto:stuart@thestu.art"},"stuart@thestu.art")," or connect with me on"," ",A.a.createElement("a",{href:"https://https://www.linkedin.com/in/stuart-william-johnson/LinkedIn"},"LinkedIn"),".")))});t.default=function(e){return A.a.createElement(i.b,{query:"3399224544",render:function(t){return A.a.createElement(c,Object.assign({location:e.location,props:!0,data:t},e))},data:n})}},158:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},159:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var n=a(0),r=a.n(n),A=a(4),i=a.n(A),s=a(33),o=a.n(s);a.d(t,"a",function(){return o.a});a(158);var l=r.a.createContext({}),c=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n),A=a(159);t.a=function(e){var t=e.title,a=e.children,n=r.a.useState(!1),i=n[0],s=n[1];return r.a.createElement("div",{className:"site-wrapper "+(i?"site-head-open":"")},r.a.createElement("header",{className:"site-head"},r.a.createElement("div",{className:"site-head-container"},r.a.createElement("a",{className:"nav-burger",href:"#",onClick:function(){return s(!i)}},r.a.createElement("div",{className:"hamburger hamburger--collapse","aria-label":"Menu",role:"button","aria-controls":"navigation"},r.a.createElement("div",{className:"hamburger-box"},r.a.createElement("div",{className:"hamburger-inner"})))),r.a.createElement("nav",{id:"swup",class:"site-head-left"},r.a.createElement("ul",{className:"nav",role:"menu"},r.a.createElement("li",{className:"nav-home nav-current",role:"menuitem"},r.a.createElement(A.a,{to:"/"},"Home")),r.a.createElement("li",{className:"nav-about",role:"menuitem"},r.a.createElement(A.a,{to:"/contact"},"Contact Me")))),r.a.createElement("div",{className:"site-head-center"},r.a.createElement(A.a,{className:"site-head-logo",to:"/"},t)),r.a.createElement("div",{className:"site-head-right"},r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"https://www.linkedin.com/in/stuart-william-johnson/",title:"LinkedIn",target:"_blank",rel:"noopener noreferrer"},"LinkedIn"),r.a.createElement("a",{href:"https://twitter.com",title:"Twitter",target:"_blank",rel:"noopener noreferrer"},"Github"),r.a.createElement(A.a,{to:"/rss.xml",title:"RSS",target:"_blank",rel:"noopener noreferrer"},"RSS"))))),r.a.createElement("main",{id:"site-main",className:"site-main"},r.a.createElement("div",{id:"swup",className:"transition-fade"},a)))}},161:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),A=a(4),i=a.n(A),s=a(55),o=a(2),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},162:function(e,t,a){"use strict";var n=a(163),r=a(0),A=a.n(r),i=a(4),s=a.n(i),o=a(165),l=a.n(o);function c(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,s=e.title,o=n.data.site,c=t||o.siteMetadata.description;return A.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}c.defaultProps={lang:"en",meta:[],keywords:[],description:""},c.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=c},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Stu.art",description:"Hi, I'm Stuart Johnson, a full-stack application developer specialising in rapid prototyping. 🏃‍",author:"Stuart Johnson"}}}}},174:function(e){e.exports={data:{site:{siteMetadata:{title:"Stu.art",description:"Hi, I'm Stuart Johnson, a full-stack application developer specialising in rapid prototyping. 🏃‍"}},allMarkdownRemark:{edges:[{node:{excerpt:"Coming soon!",fields:{slug:"/wutzu/"},frontmatter:{date:"August 18, 2020",title:"What I learned building a grocery delivery startup that raised £70k in React & Firebase",description:"In 2020, I dropped out of university to build startups. This is the (still on-going!) story of Wutzu, a grocery delivery marketplace targeting independents and ethnic grocery stores.",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAME/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAP/2gAMAwEAAhADEAAAAc4jWAP/xAAYEAACAwAAAAAAAAAAAAAAAAAAAhARIf/aAAgBAQABBQJMKj//xAAWEQEBAQAAAAAAAAAAAAAAAAABABL/2gAIAQMBAT8BSyX/xAAVEQEBAAAAAAAAAAAAAAAAAAAQYf/aAAgBAgEBPwGn/8QAFxABAAMAAAAAAAAAAAAAAAAAAQAQMv/aAAgBAQAGPwIazP/EABoQAAIDAQEAAAAAAAAAAAAAAAEhABExUZH/2gAIAQEAAT8hBw0/I5IOk5ByyWz/2gAMAwEAAgADAAAAEHAP/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/EMDIQv/EABcRAQEBAQAAAAAAAAAAAAAAAAEAITH/2gAIAQIBAT8Q4EXb/8QAHRABAAEEAwEAAAAAAAAAAAAAAREAIUFRMWFxgf/aAAgBAQABPxAXLEKl3liN1FGrgDf1ddURFItUHHyv/9k=",aspectRatio:2.962962962962963,src:"/static/2bdc7a28b4e5018a4a29725dfeaf0972/10fb1/wutzu.jpg",srcSet:"/static/2bdc7a28b4e5018a4a29725dfeaf0972/467b3/wutzu.jpg 340w,\n/static/2bdc7a28b4e5018a4a29725dfeaf0972/e1ddd/wutzu.jpg 680w,\n/static/2bdc7a28b4e5018a4a29725dfeaf0972/10fb1/wutzu.jpg 1360w,\n/static/2bdc7a28b4e5018a4a29725dfeaf0972/14dee/wutzu.jpg 1920w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"Coming soon!",fields:{slug:"/battlecode/"},frontmatter:{date:"August 18, 2020",title:"MIT Battlecode: How my team won £1000 coding a strategy game AI in Python in two weeks",description:"In 2019, I was a part of two-man team 'useless bot please ignore' that made it to the finals of MIT's longest running annual coding competition. I learned a lot about programming, but also my stress limits and the effects prolonged stress can have on the psyche.",thumbnail:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAACuUlEQVQozx2SaXOaYBSF+UedfupMakw1GtwiJGpcQFAEjC3IKssLyhq0TWPaJorGRLv90JLO3K/PnHOeuZBjXgpKQdFKYxXm1DNlUhIl5JtNfjaw2On9DpnIwmfg6m/I3jv43CCA0nFmNdku7/wB1OVS11JuKOUIPj1RS77Z+GJ21g55D4gnj9qHA/YjOVLGzyH1MCPWLrG0CJrrIXJ665OQpBR7fFpSi1MdBXqVEbMRuNJU1FAv9z698fHhCKvgpCRgL0F/GxBzfYgxMqYUYq8LXQs5kkvzEpyQto7okzIn5dufjmwN3fuDQ0h9BSRB4Tdq79Hr3rnNSGfHfEcEhZVLQnPraiTlLL3KCllWzA7F04latjXkwe0mO1ceGXvEIaB+hfR3B/dB/cXvWTZCytmt14doIdMZp+Z2w9DOpwYKjOon5VXbzuvf+djOfcVegsGzTx0COlm+CwaboL/wWruAgtRJSZ9UksKOgapqiZPOZhp6a7cebbyrnIyV+trrH4LBn4hZzjoyqDz5PXt60VbSG4+EPKs2M9A29z7pP9XQL1bzxU/SmNjtWZPqjdVYu+TGJqNxfTFCVlr7IcRv3XpbO4kTWOPzilLCuWNWPDW16mermZBJyeT2PvUnopPMuVD72IUn1dQPvkwLtcH1sCmmYq8HGXrFBMiN3ZiD+rcZdlgM9yGdYD8j5veC2c7IG/5SJmCtW3AwGEjIhZBFpFpTTz/5fairfxha+Tu3ffhvZUkVdia2C+l74XKjt6dsVSRghSyC4hE4P+Y7sCAWOC2b/EUiH5oycIC8ew4Gh4jZB3TUSsdSfQvwcHwh4/lRM8Pjea6VMVu5MZEnm6nEi6yWXP3iFV47hJZ9Ew8rSywXy40Vj67kegi/fTTxJcCuW5lRJ8defTDQY7N9Ko+KrHTqgZqoFSkl8w8bDE5c2FuxJAAAAABJRU5ErkJggg==",aspectRatio:1.564102564102564,src:"/static/6229fd307493ebd95d25ab7e4e47e293/d6292/battlecode.png",srcSet:"/static/6229fd307493ebd95d25ab7e4e47e293/fa754/battlecode.png 340w,\n/static/6229fd307493ebd95d25ab7e4e47e293/1bf7a/battlecode.png 680w,\n/static/6229fd307493ebd95d25ab7e4e47e293/d6292/battlecode.png 854w",sizes:"(max-width: 854px) 100vw, 854px"}}}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-b329b8ef46eece7d52c0.js.map