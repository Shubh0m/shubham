(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{157:function(e,t,n){"use strict";n.r(t);n(34);var a=n(177),i=n(0),o=n.n(i),r=n(159),s=n(160),l=n(163),d=n(178),c=n.n(d),u=function(e){return o.a.createElement("article",{className:"post-card-wrapper"},o.a.createElement(c.a,{bottom:!0,delay:1===e.count?750:0},o.a.createElement("div",{className:"row",style:e.count%2==0?{flexWrap:"wrap-reverse"}:{}},e.count%2==0&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"col-6 post-card-info",style:{paddingLeft:120}},o.a.createElement("div",null,o.a.createElement("figcaption",null,e.node.frontmatter.category),o.a.createElement("h3",{style:{marginTop:0}}," ",e.node.frontmatter.title||e.node.fields.slug),o.a.createElement("div",{className:"post-content-body"},o.a.createElement("p",null,e.node.frontmatter.description)),o.a.createElement(r.a,{to:"",className:"post-content-body",style:{fontWeight:700}},"Read More (Coming Soon)")))),o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:e.count%2==1?"post-card-left":"post-card-right"},o.a.createElement("article",{className:"post-card "+e.postClass+" "+(e.node.frontmatter.thumbnail?"with-image":"no-image"),style:e.node.frontmatter.thumbnail&&{backgroundImage:"url("+e.node.frontmatter.thumbnail.childImageSharp.fluid.src+")"}},o.a.createElement(r.a,{to:e.node.fields.slug,className:"post-card-link"})))),e.count%2==1&&o.a.createElement("div",{className:"col-6 post-card-info",style:{paddingRight:"7vw"}},o.a.createElement("div",null,o.a.createElement("figcaption",null,e.node.frontmatter.category),o.a.createElement("h3",{style:{marginTop:0}}," ",e.node.frontmatter.title||e.node.fields.slug),o.a.createElement("div",{className:"post-content-body"},o.a.createElement("p",null,e.node.frontmatter.description)),o.a.createElement(r.a,{to:"",className:"post-content-body",style:{fontWeight:700}},"Read More (Coming Soon!)"))))))},p=n(180),h=n.n(p),f=(n(148),n(149),function(e,t){var n=e.data,a=n.site.siteMetadata.title,i=n.allMarkdownRemark.edges,d=0;return o.a.createElement(s.a,{title:a},o.a.createElement(l.a,{title:"Full-stack Developer",keywords:["blog","gatsby","javascript","react"]}),n.site.siteMetadata.description&&o.a.createElement("header",{className:"page-head"},o.a.createElement(h.a,{left:!0},o.a.createElement("h2",{className:"page-head-title"},o.a.createElement("mark",{style:{backgroundColor:"#e2f0db"}},n.site.siteMetadata.description)),o.a.createElement("figcaption",{style:{marginTop:40}},"React   /   Redux   /   Node.js   /   Express.js   /   Gatsby   /   Python   /   Firebase   /   Google Cloud   /   Google Maps API   /   PWAs & Service Workers   /   UI & UX"))),o.a.createElement("div",{className:"post-feed"},i.map(function(e){var t=e.node;return d++,o.a.createElement(u,{key:t.fields.slug,count:d,node:t,postClass:"post"})})),o.a.createElement("section",{id:"contact-me"},o.a.createElement("hr",null),o.a.createElement("h4",{id:"footer-contact-header"},"Want to get in ",o.a.createElement(r.a,{to:"/contact/"},"contact"),"? Shoot me an email at ",o.a.createElement("a",{href:"mailto:stuart@thestu.art"},"stuart@thestu.art"),", connect with me on"," ",o.a.createElement("a",{href:"https://https://www.linkedin.com/in/stuart-william-johnson/LinkedIn"},"LinkedIn")," ","or ",o.a.createElement("a",{href:"https://discord.gg/zNy7Fmg"},"Discord"),".")))});t.default=function(e){return o.a.createElement(r.b,{query:"3399224544",render:function(t){return o.a.createElement(f,Object.assign({location:e.location,props:!0,data:t},e))},data:a})}},158:function(e,t,n){var a;e.exports=(a=n(161))&&a.default||a},159:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var a=n(0),i=n.n(a),o=n(4),r=n.n(o),s=n(33),l=n.n(s);n.d(t,"a",function(){return l.a});n(158);var d=i.a.createContext({}),c=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},160:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(159),r=n(162),s=n.n(r);t.a=function(e){e.title;var t=e.children,n=i.a.useState(!1),a=n[0],r=n[1];return i.a.createElement("div",{className:"site-wrapper "+(a?"site-head-open":"")},i.a.createElement("header",{className:"site-head"},i.a.createElement("div",{className:"site-head-container"},i.a.createElement("a",{className:"nav-burger",href:"#",onClick:function(){return r(!a)}},i.a.createElement("div",{className:"hamburger hamburger--collapse","aria-label":"Menu",role:"button","aria-controls":"navigation"},i.a.createElement("div",{className:"hamburger-box"},i.a.createElement("div",{className:"hamburger-inner"})))),i.a.createElement("nav",{id:"swup",class:"site-head-left"},i.a.createElement("ul",{className:"nav",role:"menu"},i.a.createElement("li",{className:"nav-home nav-current",role:"menuitem"},i.a.createElement(o.a,{to:"/"},"Home")),i.a.createElement("li",{className:"nav-about",role:"menuitem"},i.a.createElement(o.a,{to:"/contact"},"Contact Me")))),i.a.createElement("div",{className:"site-head-center"},i.a.createElement(o.a,{className:"site-head-logo",to:"/"},i.a.createElement("img",{src:s.a}))),i.a.createElement("div",{className:"site-head-right"},i.a.createElement("div",{className:"social-links"},i.a.createElement("a",{href:"https://github.com/Daspy11/Daspy11.github.io",title:"Source Code on Github",target:"_blank",rel:"noopener noreferrer",style:{fontSize:32}},"👨🏽‍💻"))))),i.a.createElement("main",{id:"site-main",className:"site-main"},i.a.createElement("div",{id:"swup",className:"transition-fade"},t)))}},161:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),s=n(55),l=n(2),d=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?i.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json)):null};d.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=d},162:function(e,t,n){e.exports=n.p+"static/anaglyph-Artboard 1-256-f56078180d939edaa4408d83c4d551ec.png"},163:function(e,t,n){"use strict";var a=n(164),i=n(0),o=n.n(i),r=n(4),s=n.n(r),l=n(166),d=n.n(l);function c(e){var t=e.description,n=e.lang,i=e.meta,r=e.keywords,s=e.title,l=a.data.site,c=t||l.siteMetadata.description;return o.a.createElement(d.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(i)})}c.defaultProps={lang:"en",meta:[],keywords:[],description:""},c.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=c},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Stu.art",description:"Hi, I'm Stu.art Johnson, a full-stack application developer specialising in rapid prototyping. 🏃‍",author:"Stuart Johnson"}}}}},168:function(e,t,n){"use strict";function a(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function i(){c||(t.globalHide=c=!0,window.removeEventListener("scroll",i,!0),a("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",i,!0),window.document.removeEventListener("visibilitychange",i))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=a,t.cascade=function(e,t,n,a,i){var o=Math.log(a),r=(Math.log(i)-o)/(n-t);return Math.exp(o+r*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(m+p)+"{"+e+"}",n=h[e];return n?""+m+n:(f.insertRule(t,f.cssRules.length),h[e]=p,""+m+p++)},t.hideAll=i,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var o=t.namespace="react-reveal",r=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),s=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},d=t.disableSsr=function(){return t.ssr=r=!1},c=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),u=(t.ie10=!1,t.collapseend=void 0),p=1,h={},f=!1,m=o+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=s="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=r=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),r&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=r=!1),r&&window.setTimeout(d,1500),s||(t.collapseend=u=document.createEvent("Event"),u.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(f=v.sheet,window.addEventListener("scroll",i,!0),window.addEventListener("orientationchange",i,!0),window.document.addEventListener("visibilitychange",i))}},170:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.default=function(e,t,n,a){return"in"in e&&(e.when=e.in),o.default.Children.count(a)<2?o.default.createElement(r.default,i({},e,{inEffect:t,outEffect:n,children:a})):(a=o.default.Children.map(a,function(a){return o.default.createElement(r.default,i({},e,{inEffect:t,outEffect:n,children:a}))}),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,a):o.default.createElement("span",null,a))};var o=a(n(0)),r=a(n(179));e.exports=t.default},177:function(e){e.exports={data:{site:{siteMetadata:{title:"Stu.art",description:"Hi, I'm Stu.art Johnson, a full-stack application developer specialising in rapid prototyping. 🏃‍"}},allMarkdownRemark:{edges:[{node:{excerpt:"Coming soon!",fields:{slug:"/wutzu/"},frontmatter:{date:"August 18, 2020",title:"What I learned building a grocery delivery startup that raised £70k in React & Firebase",description:"In 2020, I dropped out of university to build startups. This is the (still on-going!) story of Wutzu, a grocery delivery marketplace targeting independents and ethnic grocery stores.",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAME/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAP/2gAMAwEAAhADEAAAAc4jWAP/xAAYEAACAwAAAAAAAAAAAAAAAAAAAhARIf/aAAgBAQABBQJMKj//xAAWEQEBAQAAAAAAAAAAAAAAAAABABL/2gAIAQMBAT8BSyX/xAAVEQEBAAAAAAAAAAAAAAAAAAAQYf/aAAgBAgEBPwGn/8QAFxABAAMAAAAAAAAAAAAAAAAAAQAQMv/aAAgBAQAGPwIazP/EABoQAAIDAQEAAAAAAAAAAAAAAAEhABExUZH/2gAIAQEAAT8hBw0/I5IOk5ByyWz/2gAMAwEAAgADAAAAEHAP/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/EMDIQv/EABcRAQEBAQAAAAAAAAAAAAAAAAEAITH/2gAIAQIBAT8Q4EXb/8QAHRABAAEEAwEAAAAAAAAAAAAAAREAIUFRMWFxgf/aAAgBAQABPxAXLEKl3liN1FGrgDf1ddURFItUHHyv/9k=",aspectRatio:2.962962962962963,src:"/static/2bdc7a28b4e5018a4a29725dfeaf0972/10fb1/wutzu.jpg",srcSet:"/static/2bdc7a28b4e5018a4a29725dfeaf0972/467b3/wutzu.jpg 340w,\n/static/2bdc7a28b4e5018a4a29725dfeaf0972/e1ddd/wutzu.jpg 680w,\n/static/2bdc7a28b4e5018a4a29725dfeaf0972/10fb1/wutzu.jpg 1360w,\n/static/2bdc7a28b4e5018a4a29725dfeaf0972/14dee/wutzu.jpg 1920w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"Coming soon!",fields:{slug:"/battlecode/"},frontmatter:{date:"February 21, 2020",title:"MIT Battlecode: How my team won £1000 coding a strategy game AI in Python in two weeks",description:"In 2019, I was a part of two-man team 'useless bot please ignore' that made it to the finals of MIT's longest running annual coding competition. I learned a lot about programming, but also my stress limits and the effects prolonged stress can have on the psyche.",thumbnail:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAACuUlEQVQozx2SaXOaYBSF+UedfupMakw1GtwiJGpcQFAEjC3IKssLyhq0TWPaJorGRLv90JLO3K/PnHOeuZBjXgpKQdFKYxXm1DNlUhIl5JtNfjaw2On9DpnIwmfg6m/I3jv43CCA0nFmNdku7/wB1OVS11JuKOUIPj1RS77Z+GJ21g55D4gnj9qHA/YjOVLGzyH1MCPWLrG0CJrrIXJ665OQpBR7fFpSi1MdBXqVEbMRuNJU1FAv9z698fHhCKvgpCRgL0F/GxBzfYgxMqYUYq8LXQs5kkvzEpyQto7okzIn5dufjmwN3fuDQ0h9BSRB4Tdq79Hr3rnNSGfHfEcEhZVLQnPraiTlLL3KCllWzA7F04latjXkwe0mO1ceGXvEIaB+hfR3B/dB/cXvWTZCytmt14doIdMZp+Z2w9DOpwYKjOon5VXbzuvf+djOfcVegsGzTx0COlm+CwaboL/wWruAgtRJSZ9UksKOgapqiZPOZhp6a7cebbyrnIyV+trrH4LBn4hZzjoyqDz5PXt60VbSG4+EPKs2M9A29z7pP9XQL1bzxU/SmNjtWZPqjdVYu+TGJqNxfTFCVlr7IcRv3XpbO4kTWOPzilLCuWNWPDW16mermZBJyeT2PvUnopPMuVD72IUn1dQPvkwLtcH1sCmmYq8HGXrFBMiN3ZiD+rcZdlgM9yGdYD8j5veC2c7IG/5SJmCtW3AwGEjIhZBFpFpTTz/5fairfxha+Tu3ffhvZUkVdia2C+l74XKjt6dsVSRghSyC4hE4P+Y7sCAWOC2b/EUiH5oycIC8ew4Gh4jZB3TUSsdSfQvwcHwh4/lRM8Pjea6VMVu5MZEnm6nEi6yWXP3iFV47hJZ9Ew8rSywXy40Vj67kegi/fTTxJcCuW5lRJ8defTDQY7N9Ko+KrHTqgZqoFSkl8w8bDE5c2FuxJAAAAABJRU5ErkJggg==",aspectRatio:1.564102564102564,src:"/static/6229fd307493ebd95d25ab7e4e47e293/d6292/battlecode.png",srcSet:"/static/6229fd307493ebd95d25ab7e4e47e293/fa754/battlecode.png 340w,\n/static/6229fd307493ebd95d25ab7e4e47e293/1bf7a/battlecode.png 680w,\n/static/6229fd307493ebd95d25ab7e4e47e293/d6292/battlecode.png 854w",sizes:"(max-width: 854px) 100vw, 854px"}}}}}}]}}}},178:function(e,t,n){"use strict";function a(e,t){var n=t.distance,a=t.left,i=t.right,o=t.up,r=t.down,l=t.top,d=t.bottom,c=t.big,p=t.mirror,h=t.opposite,f=(n?n.toString():0)+((a?1:0)|(i?2:0)|(l||r?4:0)|(d||o?8:0)|(p?16:0)|(h?32:0)|(e?64:0)|(c?128:0));if(u.hasOwnProperty(f))return u[f];var m=a||i||o||r||l||d,v=void 0,A=void 0;if(m){if(!p!=!(e&&h)){var y=[i,a,d,l,r,o];a=y[0],i=y[1],l=y[2],d=y[3],o=y[4],r=y[5]}var g=n||(c?"2000px":"100%");v=a?"-"+g:i?g:"0",A=r||l?"-"+g:o||d?g:"0"}return u[f]=(0,s.animation)((e?"to":"from")+" {opacity: 0;"+(m?" transform: translate3d("+v+", "+A+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),u[f]}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,i=(e.out,e.forever),o=e.timeout,r=e.duration,l=void 0===r?s.defaults.duration:r,c=e.delay,u=void 0===c?s.defaults.delay:c,p=e.count,h=void 0===p?s.defaults.count:p,f=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["children","out","forever","timeout","duration","delay","count"]),m={make:a,duration:void 0===o?l:o,delay:u,forever:i,count:h,style:{animationFillMode:"both"},reverse:f.left};return t?(0,d.default)(f,m,m,n):m}Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(4),s=n(168),l=n(170),d=(o=l)&&o.__esModule?o:{default:o},c={out:r.bool,left:r.bool,right:r.bool,top:r.bool,bottom:r.bool,big:r.bool,mirror:r.bool,opposite:r.bool,duration:r.number,timeout:r.number,distance:r.string,delay:r.number,count:r.number,forever:r.bool},u={};i.propTypes=c,t.default=i,e.exports=t.default},179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,i=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(a=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{!a&&s.return&&s.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),d=(a=l)&&a.__esModule?a:{default:a},c=n(4),u=n(168),p=(0,c.shape)({make:c.func,duration:c.number.isRequired,delay:c.number.isRequired,forever:c.bool,count:c.number.isRequired,style:c.object.isRequired,reverse:c.bool}),h={collapse:c.bool,collapseEl:c.element,cascade:c.bool,wait:c.number,force:c.bool,disabled:c.bool,appear:c.bool,enter:c.bool,exit:c.bool,fraction:c.number,refProp:c.string,innerRef:c.func,onReveal:c.func,unmountOnExit:c.bool,mountOnEnter:c.bool,inEffect:p.isRequired,outEffect:(0,c.oneOfType)([p,(0,c.oneOf)([!1])]).isRequired,ssrReveal:c.bool,collapseOnly:c.bool,ssrFadeout:c.bool},f={transitionGroup:c.object},m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.isOn=void 0===e.when||!!e.when,a.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:a.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},a.savedChild=!1,a.isShown=!1,u.observerMode?a.handleObserve=a.handleObserve.bind(a):(a.revealHandler=a.makeHandler(a.reveal),a.resizeHandler=a.makeHandler(a.resize)),a.saveRef=a.saveRef.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,d.default.Component),s(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?r({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!u.observerMode&&this.props.collapse&&window.document.dispatchEvent(u.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var a=this,i=n.forever,o=n.count,r=n.delay,s=n.duration;if(!i){this.animationEndTimeout=window.setTimeout(function(){a&&a.el&&(a.animationEndTimeout=void 0,e.call(a))},r+(s+(t?s:0)*o))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var a=n.duration+(t.cascade?n.duration:0),i=this.isOn?this.getDimensionValue():0,o=void 0,r=void 0;if(t.collapseOnly)o=n.duration/3,r=n.delay;else{var s=a>>2,l=s>>1;o=s,r=n.delay+(this.isOn?0:a-s-l),e.style.animationDuration=a-s+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?s-l:0)+"ms"}return e.collapse={height:i,transition:"height "+o+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],a="style"in n&&n.style.animationName||void 0,i=void 0;e.collapseOnly?i={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(a=n.make),i={hasAppeared:!0,hasExited:!1,collapse:void 0,style:r({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:a}),className:n.className}),this.setState(e.collapse?this.collapse(i,e,n):i),t?(this.savedChild=d.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),u.ssr&&(0,u.disableSsr)()}},{key:"handleObserve",value:function(e,t){o(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&u.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.globalHide||(0,u.hideAll)(),this&&this.el&&(e||(e=this.props),u.ssr&&(0,u.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.reveal(e)},200)):n||this.inViewport(e)||e.force?this.animate(e):u.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,a=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!a||u.ssr&&!u.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):u.ssr&&(u.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map(function(e,t){return d.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):d.default.Children.toArray(e);var a=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=a.duration,s=a.reverse,l=n.length,c=2*o;this.props.collapse&&(c=parseInt(this.state.style.animationDuration,10),o=c/2);var p=s?l:0;return n.map(function(e){return"object"===(void 0===e?"undefined":i(e))&&e?d.default.cloneElement(e,{style:r({},e.props.style,t.state.style,{animationDuration:Math.round((0,u.cascade)(s?p--:p++,0,l,o,c))+"ms"})}):e})}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===i(this.props.children)){var e=d.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:d.default.createElement("div",null,e)}return d.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,a=t.props,i=a.style,o=a.className,s=a.children,l=this.props.disabled?o:(this.props.outEffect?u.namespace:"")+(this.state.className?" "+this.state.className:"")+(o?" "+o:"")||void 0,c=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&s&&this.state.style.animationName?(n=this.cascade(s),c=r({},i,{opacity:1})):c=this.props.disabled?i:r({},i,this.state.style);var p=r({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:c},this.props.refProp,this.saveRef)),h=d.default.cloneElement(t,p,e?n||s:void 0);return void 0!==this.props.collapse?this.props.collapseEl?d.default.cloneElement(this.props.collapseEl,{style:r({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:h}):d.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:h}):h}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,u.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,a=window.pageYOffset-t.getTop(this.el),i=Math.min(n,window.innerHeight)*(u.globalHide?e.fraction:0);return a>i-window.innerHeight&&a<n-i}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){u.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!u.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}();m.propTypes=h,m.defaultProps={fraction:.2,refProp:"ref"},m.contextTypes=f,m.displayName="RevealBase",t.default=m,e.exports=t.default},180:function(e,t,n){"use strict";function a(e,t){var n=t.left,a=t.right,i=t.mirror,o=t.opposite,r=(n?1:0)|(a?2:0)|(i?16:0)|(o?32:0)|(e?64:0);if(u.hasOwnProperty(r))return u[r];if(!i!=!(e&&o)){var s=[a,n];n=s[0],a=s[1]}var l=n?"-100%":a?"100%":"0",c=e?"from {\n        opacity: 1;\n      }\n      to {\n        transform: translate3d("+l+", 0, 0) skewX(30deg);\n        opacity: 0;\n      }\n    ":"from {\n        transform: translate3d("+l+", 0, 0) skewX(-30deg);\n        opacity: 0;\n      }\n      60% {\n        transform: skewX(20deg);\n        opacity: 1;\n      }\n      80% {\n        transform: skewX(-5deg);\n        opacity: 1;\n      }\n      to {\n        transform: none;\n        opacity: 1;\n      }";return u[r]=(0,d.animation)(c),u[r]}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.defaults,t=e.children,n=(e.out,e.forever),i=e.timeout,o=e.duration,r=void 0===o?d.defaults.duration:o,l=e.delay,c=void 0===l?d.defaults.delay:l,u=e.count,p=void 0===u?d.defaults.count:u,h=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["children","out","forever","timeout","duration","delay","count"]),f={make:a,duration:void 0===i?r:i,delay:c,forever:n,count:p,style:{animationFillMode:"both"}};return h.left,h.right,h.mirror,h.opposite,(0,s.default)(h,f,f,t)}Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(170),s=(o=r)&&o.__esModule?o:{default:o},l=n(4),d=n(168),c={out:l.bool,left:l.bool,right:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool},u={};i.propTypes=c,t.default=i,e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-index-js-78650f41d43cc7c5bbf2.js.map