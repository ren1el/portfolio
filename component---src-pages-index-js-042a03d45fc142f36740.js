(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"09TT":function(e,t,r){},"3V3o":function(e,t,r){e.exports={wrapper:"contact-module--wrapper--Y_m2x",heading:"contact-module--heading--2NmOs",email:"contact-module--email--24dB1",specialText:"contact-module--special-text--1Ko9o"}},"9Ruc":function(e,t,r){e.exports={primaryBtn:"button-module--primary-btn--3R8Qn",ml:"button-module--ml--QmQ2m"}},"9eSz":function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.default=void 0;var n,i=a(r("PJYZ")),o=a(r("VbXa")),l=a(r("8OQS")),c=a(r("pVnL")),s=a(r("q1tI")),u=a(r("17x9")),d=function(e){var t=(0,c.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,r=e.fixed,a=p(t||r||[]);return a&&a.src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},h=Object.create({}),g=function(e){var t=d(e),r=m(t);return h[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return s.default.createElement(s.default.Fragment,{key:t},a&&s.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),r&&s.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function x(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function S(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return s.default.createElement("source",{key:t,media:r,srcSet:a})}))}function O(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return s.default.createElement("source",{key:t,media:r,srcSet:a})}))}function L(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var N=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),E.set(e,t)),function(){r.unobserve(e),E.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",s=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+s+o+l+r+a+t+i+n+c+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=s.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,l=s.default.createElement(I,(0,c.default)({ref:t,src:r},i,{ariaHidden:o}));return a.length>1?s.default.createElement("picture",null,n(a),l):l})),I=s.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return s.default.createElement("img",(0,c.default)({"aria-hidden":m,sizes:r,srcSet:a,src:n},p,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));I.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var R=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&v&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||b&&(y||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=s.default.createRef(),r.placeholderRef=t.placeholderRef||s.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),(r=m(t))&&(h[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,l=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,E=e.itemProp,x=e.loading,L=e.draggable,N=h||g;if(!N)return null;var R=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,c.default)({opacity:R?1:0,transition:T?"opacity "+b+"ms":"none"},l),V="boolean"==typeof y?"lightgray":y,z={transitionDelay:b+"ms"},_=(0,c.default)({opacity:this.state.imgLoaded?0:1},T&&z,l,f),C={title:t,alt:this.state.isVisible?"":r,style:_,className:m,itemProp:E},M=this.state.isHydrated?p(N):N[0];if(h)return s.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:M.maxWidth?M.maxWidth+"px":null,maxHeight:M.maxHeight?M.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},s.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),V&&s.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&z)}),M.base64&&s.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:C,imageVariants:N,generateSources:O}),M.tracedSVG&&s.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:C,imageVariants:N,generateSources:S}),this.state.isVisible&&s.default.createElement("picture",null,w(N),s.default.createElement(I,{alt:r,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:x,draggable:L})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,c.default)({alt:r,title:t,loading:x},M,{imageVariants:N}))}}));if(g){var H=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete H.display,s.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},V&&s.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:V,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},T&&z)}),M.base64&&s.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:C,imageVariants:N,generateSources:O}),M.tracedSVG&&s.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:C,imageVariants:N,generateSources:S}),this.state.isVisible&&s.default.createElement("picture",null,w(N),s.default.createElement(I,{alt:r,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:x,draggable:L})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,c.default)({alt:r,title:t,loading:x},M,{imageVariants:N}))}}))}return null},t}(s.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),P=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function V(e){return function(t,r,a){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");u.default.checkPropTypes(((n={})[r]=e,n),t,"prop",a)}}R.propTypes={resolutions:T,sizes:P,fixed:V(u.default.oneOfType([T,u.default.arrayOf(T)])),fluid:V(u.default.oneOfType([P,u.default.arrayOf(P)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var z=R;t.default=z},BbIM:function(e,t,r){e.exports={card:"card-module--card--uSJHY",thumbnail:"card-module--thumbnail--2aYWG",body:"card-module--body--1P7K6",type:"card-module--type--1da2c",title:"card-module--title--3Mo_p",link:"card-module--link--34LlD",description:"card-module--description--33Phl",tags:"card-module--tags--1clXX",tag:"card-module--tag--NX2SQ",left:"card-module--left--1Kbp5",right:"card-module--right--2ZECM"}},Lnxd:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r("q1tI"),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.createContext&&a.createContext(n),o=function(){return(o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};function c(e){return function(t){return a.createElement(s,o({attr:o({},e.attr)},t),function e(t){return t&&t.map((function(t,r){return a.createElement(t.tag,o({key:r},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var r,n=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var i=e.attr,c=e.title,s=l(e,["attr","title"]);return a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:r,style:o({color:e.color||t.color},t.style,e.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),c&&a.createElement("title",null,c),e.children)};return void 0!==i?a.createElement(i.Consumer,null,(function(e){return t(e)})):t(n)}},N3RL:function(e,t,r){e.exports={githubLink:"viewMoreButton-module--github-link--zLbfQ",githubBtn:"viewMoreButton-module--github-btn--2MPS3",ml:"viewMoreButton-module--ml--3swc2"}},RXBc:function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),n=r.n(a),i=r("qhky"),o=r("8SHQ"),l=r.n(o),c=(r("09TT"),r("sVds"),r("Bl7J")),s=r("PGlZ"),u=r("ZMKu"),d=r("yhPK"),f=r.n(d),m=function(){var e=Object(s.a)(),t=e[0],r=e[1],i=Object(u.b)();return Object(a.useEffect)((function(){r&&i.start({opacity:1,x:0,duration:.5})}),[i,r]),n.a.createElement("section",{id:"intro"},n.a.createElement(u.a.div,{className:f.a.introWrapper,ref:t,initial:{opacity:0,x:250},animate:i},n.a.createElement("p",{className:f.a.hello},"Howdy! I’m Reniel."),n.a.createElement("p",{className:f.a.welcome},"Welcome to my portfolio.")))},p=r("o0o1"),h=r.n(p);r("ls82");function g(e,t,r,a,n,i,o){try{var l=e[i](o),c=l.value}catch(s){return void r(s)}l.done?t(c):Promise.resolve(c).then(a,n)}var y=r("Wbzz"),b=r("9eSz"),v=r.n(b),E=r("ma3e"),w=r("9Ruc"),x=r.n(w),S=function(e){var t=e.text,r=e.linkTo,a=t.toLowerCase();return n.a.createElement("a",{className:x.a.primaryBtn,href:r,target:"_blank",rel:"noopener noreferrer"},"github"===a&&n.a.createElement(E.c,null),"linkedin"===a&&n.a.createElement(E.e,null),"instagram"===a&&n.a.createElement(E.d,null),"dribbble"===a&&n.a.createElement(E.a,null),n.a.createElement("span",{className:x.a.ml},t))},O=r("UA/k"),L=r.n(O),N=function(e){var t=e.setIsAboutAnimationDone,r=l.a.socialMedia,i=Object(y.useStaticQuery)("2083983072"),o=Object(u.b)(),c=Object(u.b)();return Object(a.useEffect)((function(){(function(){var e,r=(e=h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.start({opacity:1,x:0});case 2:return e.next=4,c.start({opacity:1,y:0});case 4:t(!0);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,n){var i=e.apply(t,r);function o(e){g(i,a,n,o,l,"next",e)}function l(e){g(i,a,n,o,l,"throw",e)}o(void 0)}))});return function(){return r.apply(this,arguments)}})()()}),[o,c,t]),n.a.createElement("section",{id:"about"},n.a.createElement(u.a.div,{initial:{opacity:0,x:-50},animate:o},n.a.createElement("h2",null,"A lil’ about me:")),n.a.createElement(u.a.div,{className:L.a.about,initial:{opacity:0,y:50},animate:c},n.a.createElement(v.a,{className:L.a.picture+" "+L.a.imgAnimation,fluid:i.image.childImageSharp.fluid,alt:"Me"}),n.a.createElement("div",{className:L.a.text},n.a.createElement("div",{className:L.a.blurb},"My name is ",n.a.createElement("strong",null,"Reniel Ocampo")," and I’m a recent computer science grad from the"," ",n.a.createElement("strong",null,"University of California, Irvine"),". I attribute my start into programming when I began coding static HTML pages on Neopets. I’ve since grown an interest in web development, graphic design, and computer architecture. ",n.a.createElement("br",null),"Aside from developing I’m a big reader, concert goer, and ukulele fiddler. I also really, really like Ariana Grande."),n.a.createElement("div",{className:L.a.links},n.a.createElement("strong",null,"You can also find me at these places:"),n.a.createElement("ul",{className:L.a.aboutMeList},r.map((function(e){return n.a.createElement("li",{key:"socialLink"+e.name},n.a.createElement(S,{text:e.name,linkTo:e.url}))})))))))},k=r("h2vv"),j=r.n(k),I=r("BbIM"),R=r.n(I),T=function(e){var t=e.isAboutAnimationDone,r=e.order,i=e.thumbnailFile,o=e.type,l=e.title,c=e.description,d=e.tags,f=e.liveUrl,m=e.githubUrl,p=Object(y.useStaticQuery)("3682093315"),h=Object(s.a)({threshold:.5}),g=h[0],b=h[1],w=Object(u.b)();return Object(a.useEffect)((function(){b&&t&&w.start({opacity:1,y:0})}),[w,b,t]),n.a.createElement("article",null,n.a.createElement(u.a.div,{className:R.a.card,ref:g,initial:{opacity:0,y:50},animate:w},n.a.createElement(v.a,{className:R.a.thumbnail+" "+(r%2==0?R.a.right:R.a.left),fluid:p.images.nodes.find((function(e){return e.childImageSharp.fluid.originalName===i})).childImageSharp.fluid,alt:l+" screenshot"}),n.a.createElement("div",{className:R.a.body},n.a.createElement("div",{className:R.a.type},o),n.a.createElement("h3",{className:R.a.title},l," ",f.length>0&&n.a.createElement("a",{className:R.a.link,href:f,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(E.b,null)),m.length>0&&n.a.createElement("a",{className:R.a.link,href:m,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(E.c,null))),n.a.createElement("div",{className:R.a.description},c),n.a.createElement("ul",{className:R.a.tags},d.map((function(e){return n.a.createElement("li",{className:R.a.tag,key:e+" "+(new Date).getTime()},e)}))))))},P=r("N3RL"),V=r.n(P),z=function(){var e=l.a.socialMedia,t=Object(s.a)(),r=t[0],i=t[1],o=Object(u.b)();return Object(a.useEffect)((function(){i&&o.start({opacity:1,x:0})}),[o,i]),n.a.createElement(u.a.div,{className:V.a.githubLink,ref:r,initial:{opacity:0,x:-100},animate:o},n.a.createElement("a",{className:V.a.githubBtn,href:e.find((function(e){return"GitHub"===e.name})).url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(E.c,null),n.a.createElement("span",{className:V.a.ml},"View more on GitHub")))},_=function(e){var t=e.isAboutAnimationDone,r=l.a.projects,i=Object(s.a)(),o=i[0],c=i[1],d=Object(u.b)();return Object(a.useEffect)((function(){c&&d.start({opacity:1,x:0})}),[d,c]),n.a.createElement("section",{id:"projects"},n.a.createElement(u.a.div,{ref:o,initial:{opacity:0,x:-50},animate:d},n.a.createElement("h2",null,"Some things I’ve made:")),n.a.createElement("div",{className:j.a.projects},r.map((function(e,r){return n.a.createElement(T,{key:""+e.title+r,isAboutAnimationDone:t,order:r,thumbnailFile:e.thumbnailFile,type:e.type,title:e.title,description:e.description,tags:e.tags,liveUrl:e.liveUrl,githubUrl:e.githubUrl})}))),n.a.createElement(z,null))},C=r("3V3o"),M=r.n(C),H=function(){var e=l.a.email,t=Object(u.b)(),r=Object(s.a)({threshold:1}),i=r[0],o=r[1];return Object(a.useEffect)((function(){o&&t.start("visible")}),[t,o]),n.a.createElement("section",{id:"contact"},n.a.createElement(u.a.div,{className:M.a.wrapper,ref:i,animate:t,initial:"hidden",variants:{visible:{opacity:1,y:0},hidden:{opacity:0,y:50}}},n.a.createElement("p",{className:M.a.heading},"It was great having you! :)"),n.a.createElement("p",{className:M.a.heading},"Feel free to contact me @"," ",n.a.createElement("span",{className:M.a.email+" "+M.a.specialText},n.a.createElement("a",{href:"mailto:"+e},e)))))};r("kb6l"),t.default=function(){var e=l.a.siteTitle,t=l.a.siteIcon,r=Object(a.useState)(!1),o=r[0],s=r[1];return n.a.createElement(c.a,null,n.a.createElement(i.a,null,n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("link",{rel:"icon",href:t}),n.a.createElement("title",null,e),n.a.createElement("meta",{property:"og:title",content:"Reniel Ocampo"}),n.a.createElement("meta",{property:"og:image",content:"https://raw.githubusercontent.com/ren1el/ren1el.github.io/source/static/demo.png"}),n.a.createElement("meta",{property:"og:description",content:"Reniel Ocampo is a software engineer based in Orange County, California."}),n.a.createElement("meta",{property:"og:url",content:"https://ren1el.github.io"})),n.a.createElement(m,null),n.a.createElement(N,{setIsAboutAnimationDone:s}),n.a.createElement(_,{isAboutAnimationDone:o}),n.a.createElement(H,null))}},"UA/k":function(e,t,r){e.exports={about:"about-module--about--oYO1n",picture:"about-module--picture--ROMYr",imgAnimation:"about-module--img-animation--20iYw",text:"about-module--text--5wRPb",blurb:"about-module--blurb--29ntB",specialText:"about-module--special-text--2M8oe",aboutMeList:"about-module--about-me-list--3Td-H",links:"about-module--links--ck_E6"}},h2vv:function(e,t,r){e.exports={projects:"projects-module--projects--2ynd9"}},kb6l:function(e,t,r){e.exports=r.p+"static/demo-0d5e3ea916e597726b19cf081427a90c.png"},ls82:function(e,t,r){var a=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",o=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(N){l=function(e,t,r){return e[t]=r}}function c(e,t,r,a){var n=t&&t.prototype instanceof d?t:d,i=Object.create(n.prototype),o=new S(a||[]);return i._invoke=function(e,t,r){var a="suspendedStart";return function(n,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw i;return L()}for(r.method=n,r.arg=i;;){var o=r.delegate;if(o){var l=E(o,r);if(l){if(l===u)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var c=s(e,t,r);if("normal"===c.type){if(a=r.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a="completed",r.method="throw",r.arg=c.arg)}}}(e,r,o),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(N){return{type:"throw",arg:N}}}e.wrap=c;var u={};function d(){}function f(){}function m(){}var p={};p[n]=function(){return this};var h=Object.getPrototypeOf,g=h&&h(h(O([])));g&&g!==t&&r.call(g,n)&&(p=g);var y=m.prototype=d.prototype=Object.create(p);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function v(e,t){var a;this._invoke=function(n,i){function o(){return new t((function(a,o){!function a(n,i,o,l){var c=s(e[n],e,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,o,l)}),(function(e){a("throw",e,o,l)})):t.resolve(d).then((function(e){u.value=e,o(u)}),(function(e){return a("throw",e,o,l)}))}l(c.arg)}(n,i,a,o)}))}return a=a?a.then(o,o):o()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,u;var n=a.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function O(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=y.constructor=m,m.constructor=f,f.displayName=l(m,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,o,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(v.prototype),v.prototype[i]=function(){return this},e.AsyncIterator=v,e.async=function(t,r,a,n,i){void 0===i&&(i=Promise);var o=new v(c(t,r,a,n),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},b(y),l(y,o,"Generator"),y[n]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=O,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return o.type="throw",o.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;x(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=a}catch(n){Function("r","regeneratorRuntime = r")(a)}},o0o1:function(e,t,r){e.exports=r("ls82")},sVds:function(e,t,r){},yhPK:function(e,t,r){e.exports={introWrapper:"intro-module--intro-wrapper--28W8A",hello:"intro-module--hello--11V9t",welcome:"intro-module--welcome--317yt"}}}]);
//# sourceMappingURL=component---src-pages-index-js-042a03d45fc142f36740.js.map