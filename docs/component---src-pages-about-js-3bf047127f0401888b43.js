(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{153:function(e,t,a){"use strict";a.r(t);a(34);var i=a(176),r=a(0),n=a.n(r),s=a(159),o=a(165),l=a.n(o),c=a(160),d=a(163),u=(a(148),a(149),function(e,t){var a=e.data,i=a.site.siteMetadata.title;return n.a.createElement(c.a,{title:i},n.a.createElement(d.a,{title:"ABout",keywords:["blog","gatsby","javascript","react"]}),n.a.createElement("article",{className:"post-content page-template no-image"},n.a.createElement("div",{className:"post-content-body"},n.a.createElement("h2",{id:"clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-"},"Clean, minimal, and deeply customisable. London is a theme made for people who appreciate simple lines."),n.a.createElement("figure",{className:"kg-card kg-image-card kg-width-full"},n.a.createElement(l.a,{fluid:a.benchAccounting.childImageSharp.fluid,className:"kg-image"}),n.a.createElement("figcaption",null,"Large imagery is at the heart of this theme")),n.a.createElement("h3",{id:"dynamic-styles"},"Dynamic styles"),n.a.createElement("p",null,"London comes with photo-centric main layout best suited to photography, graphics portfolios and other image-heavy uses."),n.a.createElement("p",null,"Both post and page templates are light and minimal, with all the focus on the content while the design of the theme gets out of the way. Beneath the hood, London enjoys the full power of the"," ",n.a.createElement("a",{href:"https://docs.ghost.org/api/handlebars-themes/"},"Ghost Handlebars Theme API")," ","to provide limitless customisation options and dynamic styles."),n.a.createElement("p",null,"Don't forget to check out the"," ",n.a.createElement("a",{href:"https://docs.ghost.org/integrations/"},"Ghost Integrations Directory")," ","for more ways to integrate Ghost with your favourite services."))))});t.default=function(e){return n.a.createElement(s.b,{query:"1426368524",render:function(t){return n.a.createElement(u,Object.assign({location:e.location,data:t},e))},data:i})}},158:function(e,t,a){var i;e.exports=(i=a(161))&&i.default||i},159:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(158);var c=r.a.createContext({}),d=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},160:function(e,t,a){"use strict";var i=a(0),r=a.n(i),n=a(159),s=a(162),o=a.n(s);t.a=function(e){e.title;var t=e.children,a=r.a.useState(!1),i=a[0],s=a[1];return r.a.createElement("div",{className:"site-wrapper "+(i?"site-head-open":"")},r.a.createElement("header",{className:"site-head"},r.a.createElement("div",{className:"site-head-container"},r.a.createElement("a",{className:"nav-burger",href:"#",onClick:function(){return s(!i)}},r.a.createElement("div",{className:"hamburger hamburger--collapse","aria-label":"Menu",role:"button","aria-controls":"navigation"},r.a.createElement("div",{className:"hamburger-box"},r.a.createElement("div",{className:"hamburger-inner"})))),r.a.createElement("nav",{id:"swup",class:"site-head-left"},r.a.createElement("ul",{className:"nav",role:"menu"},r.a.createElement("li",{className:"nav-home nav-current",role:"menuitem"},r.a.createElement(n.a,{to:"/"},"Home")),r.a.createElement("li",{className:"nav-about",role:"menuitem"},r.a.createElement(n.a,{to:"/contact"},"Contact Me")))),r.a.createElement("div",{className:"site-head-center"},r.a.createElement(n.a,{className:"site-head-logo",to:"/"},r.a.createElement("img",{src:o.a}))),r.a.createElement("div",{className:"site-head-right"},r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"https://github.com/Daspy11/Daspy11.github.io",title:"Source Code on Github",target:"_blank",rel:"noopener noreferrer",style:{fontSize:32}},"👨🏽‍💻"))))),r.a.createElement("main",{id:"site-main",className:"site-main"},r.a.createElement("div",{id:"swup",className:"transition-fade"},t)))}},161:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},162:function(e,t,a){e.exports=a.p+"static/anaglyph-Artboard 1-256-f56078180d939edaa4408d83c4d551ec.png"},163:function(e,t,a){"use strict";var i=a(164),r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=a(166),c=a.n(l);function d(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title,l=i.data.site,d=t||l.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Stu.art",description:"Hi, I'm Stu.art Johnson, a full-stack application developer specialising in rapid prototyping. 🏃‍",author:"Stuart Johnson"}}}}},165:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,n=i(a(7)),s=i(a(35)),o=i(a(74)),l=i(a(75)),c=i(a(0)),d=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=new WeakMap;var h=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),m.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),m.set(e,t)),function(){a.unobserve(e),m.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+i+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+r+t+s+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,d=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},u,{onLoad:s,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,n=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,E=e.Tag,w=e.itemProp,S=this.state.imgLoaded||!1===this.state.fadeIn,L=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,l.default)({opacity:S?1:0,transition:L?"opacity "+v+"ms":"none"},o),I="boolean"==typeof b?"lightgray":b,R={transitionDelay:v+"ms"},k=(0,l.default)({opacity:this.state.imgLoaded?0:1},L&&R,o,f),O={title:t,alt:this.state.isVisible?"":a,style:k,className:p};if(m){var z=m;return c.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),I&&c.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&R)}),z.base64&&c.default.createElement(y,(0,l.default)({src:z.base64},O)),z.tracedSVG&&c.default.createElement(y,(0,l.default)({src:z.tracedSVG},O)),this.state.isVisible&&c.default.createElement("picture",null,z.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),c.default.createElement(y,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},z))}}))}if(h){var j=h,C=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete C.display,c.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},I&&c.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:I,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},L&&R)}),j.base64&&c.default.createElement(y,(0,l.default)({src:j.base64},O)),j.tracedSVG&&c.default.createElement(y,(0,l.default)({src:j.tracedSVG},O)),this.state.isVisible&&c.default.createElement("picture",null,j.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),c.default.createElement(y,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},j))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:v,sizes:E,fixed:v,fluid:E,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var w=b;t.default=w},176:function(e){e.exports={data:{site:{siteMetadata:{title:"Stu.art"}},benchAccounting:null}}}}]);
//# sourceMappingURL=component---src-pages-about-js-3bf047127f0401888b43.js.map