(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{154:function(e,t,a){"use strict";a.r(t);a(34);var r=a(167),i=a(0),n=a.n(i),s=a(159),l=(a(165),a(160)),o=a(163),c=(a(148),a(149),function(e,t){var a=e.data.site.siteMetadata.title;return n.a.createElement(l.a,{title:a},n.a.createElement(o.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),n.a.createElement("article",{className:"post-content page-template no-image"},n.a.createElement("div",{className:"post-content-body"},n.a.createElement("h3",null,"Get in Touch"),n.a.createElement("p",null,"Howdy! I'm a friendly guy and always like to hear about new opportunities. The best way to reach me is by:",n.a.createElement("br",null)),n.a.createElement("ul",null,n.a.createElement("li",null,"Emailing me at stuart@thestu.art"),n.a.createElement("li",null,"Adding me on Discord at BrigG#4496"),n.a.createElement("li",null,"Connecting with me on"," ",n.a.createElement("a",{href:"https://www.linkedin.com/in/stuart-william-johnson/"},"LinkedIn"),".")))))});t.default=function(e){return n.a.createElement(s.b,{query:"119041164",render:function(t){return n.a.createElement(c,Object.assign({location:e.location,data:t},e))},data:r})}},158:function(e,t,a){var r;e.exports=(r=a(161))&&r.default||r},159:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),l=a(33),o=a.n(l);a.d(t,"a",function(){return o.a});a(158);var c=i.a.createContext({}),d=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},160:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(159),s=a(162),l=a.n(s);t.a=function(e){e.title;var t=e.children,a=i.a.useState(!1),r=a[0],s=a[1];return i.a.createElement("div",{className:"site-wrapper "+(r?"site-head-open":"")},i.a.createElement("header",{className:"site-head"},i.a.createElement("div",{className:"site-head-container"},i.a.createElement("a",{className:"nav-burger",href:"#",onClick:function(){return s(!r)}},i.a.createElement("div",{className:"hamburger hamburger--collapse","aria-label":"Menu",role:"button","aria-controls":"navigation"},i.a.createElement("div",{className:"hamburger-box"},i.a.createElement("div",{className:"hamburger-inner"})))),i.a.createElement("nav",{id:"swup",class:"site-head-left"},i.a.createElement("ul",{className:"nav",role:"menu"},i.a.createElement("li",{className:"nav-home nav-current",role:"menuitem"},i.a.createElement(n.a,{to:"/"},"Home")),i.a.createElement("li",{className:"nav-about",role:"menuitem"},i.a.createElement(n.a,{to:"/contact"},"Contact Me")))),i.a.createElement("div",{className:"site-head-center"},i.a.createElement(n.a,{className:"site-head-logo",to:"/"},i.a.createElement("img",{src:l.a}))),i.a.createElement("div",{className:"site-head-right"},i.a.createElement("div",{className:"social-links"},i.a.createElement("a",{href:"https://github.com/Daspy11/Daspy11.github.io",title:"Source Code on Github",target:"_blank",rel:"noopener noreferrer",style:{fontSize:32}},"👨🏽‍💻"))))),i.a.createElement("main",{id:"site-main",className:"site-main"},i.a.createElement("div",{id:"swup",className:"transition-fade"},t)))}},161:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),l=a(55),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},162:function(e,t,a){e.exports=a.p+"static/anaglyph-Artboard 1-256-f56078180d939edaa4408d83c4d551ec.png"},163:function(e,t,a){"use strict";var r=a(164),i=a(0),n=a.n(i),s=a(4),l=a.n(s),o=a(166),c=a.n(o);function d(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,l=e.title,o=r.data.site,d=t||o.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Stu.art",description:"Hi, I'm Stu.art Johnson, a full-stack application developer specialising in rapid prototyping. 🏃‍",author:"Stuart Johnson"}}}}},165:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(35)),l=r(a(74)),o=r(a(75)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=new WeakMap;var h=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),m.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),m.set(e,t)),function(){a.unobserve(e),m.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+i+t+s+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},u,{onLoad:s,onError:d,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var o=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:n,hasNoScript:o,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,h=e.fixed,y=e.backgroundColor,v=e.durationFadeIn,E=e.Tag,w=e.itemProp,S=this.state.imgLoaded||!1===this.state.fadeIn,L=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,o.default)({opacity:S?1:0,transition:L?"opacity "+v+"ms":"none"},l),R="boolean"==typeof y?"lightgray":y,I={transitionDelay:v+"ms"},k=(0,o.default)({opacity:this.state.imgLoaded?0:1},L&&I,l,f),O={title:t,alt:this.state.isVisible?"":a,style:k,className:p};if(m){var z=m;return c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),R&&c.default.createElement(E,{title:t,style:(0,o.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&I)}),z.base64&&c.default.createElement(b,(0,o.default)({src:z.base64},O)),z.tracedSVG&&c.default.createElement(b,(0,o.default)({src:z.tracedSVG},O)),this.state.isVisible&&c.default.createElement("picture",null,z.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),c.default.createElement(b,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},z))}}))}if(h){var j=h,C=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete C.display,c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},R&&c.default.createElement(E,{title:t,style:(0,o.default)({backgroundColor:R,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},L&&I)}),j.base64&&c.default.createElement(b,(0,o.default)({src:j.base64},O)),j.tracedSVG&&c.default.createElement(b,(0,o.default)({src:j.tracedSVG},O)),this.state.isVisible&&c.default.createElement("picture",null,j.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),c.default.createElement(b,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},j))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:v,sizes:E,fixed:v,fluid:E,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var w=y;t.default=w},167:function(e){e.exports={data:{site:{siteMetadata:{title:"Stu.art"}},smallPic:null,medPic:null,largePic:null}}}}]);
//# sourceMappingURL=component---src-pages-contact-js-dd59f19324964f244346.js.map