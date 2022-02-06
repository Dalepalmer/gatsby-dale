"use strict";(self.webpackChunkdale_dev=self.webpackChunkdale_dev||[]).push([[682],{4133:function(e,t,n){n.d(t,{Z:function(){return s}});var r,o=n(1660),i=n(8561);var a,l,c=o.ZP.button(r||(a=["\n  background-color: material;\n  padding: 7 20 5;\n  border: none;\n  color: materialText;\n\n  font-size: 12px;\n\n  box-shadow: inset 1px 1px 0px 1px ",",\n    inset 0 0 0 1px ",",\n    1px 1px 0 0px ",";\n\n  &:disabled {\n    color: materialTextDisabled;\n  }\n\n  &:focus {\n    outline: ","px dotted ",";\n    outline-offset: -","px;\n\n    box-shadow: inset 1px 1px 0px 1px ",",\n      inset -0.5px -0.5px 0px 1px ",",\n      1px 1px 0 1px ",";\n  }\n\n  &:active {\n    padding: 8 20 4;\n\n    outline: ","px dotted ",";\n    outline-offset: -","px;\n\n    box-shadow: inset 0 0 0 1px ",",\n      0 0 0 1px ",";\n  }\n"],l||(l=a.slice(0)),r=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(l)}}))),(0,i.th)("colors.borderLightest"),(0,i.th)("colors.borderDark"),(0,i.th)("colors.borderDarkest"),(0,i.th)("space.1"),(0,i.th)("colors.materialText"),(0,i.th)("space.5"),(0,i.th)("colors.borderLightest"),(0,i.th)("colors.borderDark"),(0,i.th)("colors.borderDarkest"),(0,i.th)("space.1"),(0,i.th)("colors.borderDarkest"),(0,i.th)("space.5"),(0,i.th)("colors.borderDark"),(0,i.th)("colors.borderDarkest"));c.defaultProps={children:"Ok"};var s=c},5617:function(e,t,n){n.d(t,{Z:function(){return w}});var r,o,i,a,l=n(7294),c=n(1660),s=n(8561),d=n(4133),u=n(34),p=["children","title","icon","active","className"];function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function x(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var m=c.ZP.ul(r||(r=x(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n\n  display: flex;\n"]))),b=(0,c.ZP)(d.Z).attrs({as:"li"})(o||(o=x(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  margin-left: 2;\n  padding: 0;\n\n  width: 17px;\n  height: 14px;\n\n  min-width: 0;\n  font-weight: 600;\n  font-size: 10;\n\n  &:active {\n    padding: 1 0 0 1;\n\n    outline: none;\n  }\n\n  &:first-child {\n    margin-right: 0;\n  }\n\n  &:focus {\n    box-shadow: inset 1px 1px 0px 1px ",",\n      inset -1px -1px 0px 1px ",";\n  }\n"])),(0,s.th)("colors.borderLightest"),(0,s.th)("colors.borderDark"));b.displayName="Option";var g=(0,c.ZP)(u.Z)(i||(i=x(["\n  height: 18;\n  margin-bottom: 2;\n\n  padding: 2;\n\n  display: flex;\n\n  box-shadow: none;\n\n  img {\n    width: 15;\n    height: 14;\n    margin-right: 4;\n  }\n\n  background: ",";\n"])),(function(e){var t=e.active,n=e.theme;return t?n.colors.headerBackground:n.colors.headerNotActiveBackground})),v=c.ZP.div(a||(a=x(["\n  flex-grow: 1;\n  font-weight: bold;\n  line-height: 1.4em;\n  margin: 0;\n  font-size: 1em;\n"]))),y=function(e,t){var n=e.children,r=e.title,o=void 0===r?"UNKNOWN.EXE":r,i=e.icon,a=e.active,c=void 0===a||a,s=e.className,d=f(e,p);return l.createElement(g,h({active:c,color:c?"headerText":"headerNotActiveText"},d,{ref:t}),i&&i,l.createElement(v,{className:s},o),n)},w=Object.assign(l.forwardRef(y),{Option:b,OptionsBox:m})},8161:function(e,t,n){var r=n(7294),o=n(7125),i=n(7370),a=n(3570),l=n(1597),c=[{text:"Experience",url:"/experience",description:"A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",color:"#E95800",icon:r.createElement(a.Regedit102,{variant:"32x32_4"})},{text:"About",url:"/about",description:"Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",color:"#1099A8",icon:r.createElement(a.Drvspace7,{variant:"32x32_4"})},{text:"Education",url:"/education",description:"Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",color:"#BC027F",icon:r.createElement(a.Msnstart100,{variant:"32x32_4"})},{text:"Hobbies",url:"/hobbies",description:"Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",color:"#8EB814",icon:r.createElement(a.Mspaint,{variant:"32x32_4"})},{text:"Blog",url:"/blog",badge:!0,description:"Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",color:"#663399",icon:r.createElement(a.Issue,{variant:"32x32_4"})}];t.Z=function(e){return r.createElement(o.Z,{list:r.createElement(i.Z,null,c.map((function(e){return r.createElement(i.Z.Item,{onClick:function(){return(0,l.c4)(e.url)},icon:e.icon},e.text)})),r.createElement(i.Z.Item,{onClick:function(){return(0,l.c4)("/")},icon:r.createElement(a.Wab321016,{variant:"32x32_4"})},"Home"))})}},4003:function(e,t,n){var r=n(7294),o=n(5617),i=n(3570);t.Z=function(e){return r.createElement(o.Z,{active:!0,icon:r.createElement(i.FileIcons,{variant:"32x32_4"}),title:e.title,className:"draggable",width:"100%"},r.createElement(o.Z.OptionsBox,null,r.createElement(o.Z.Option,null,"?"),r.createElement(o.Z.Option,{onClick:function(){var e=document.querySelector('[data-hide*="me"]');e&&(""===e.style.maxHeight?e.style.maxHeight="0px":e.style.maxHeight="")}},"—")))}},8678:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294),o=n(8161),i={color:"#232129",backgroundColor:"#6fc9b0",padding:"3em",minHeight:"calc(100vh - 28px)"};function a(e){var t=e.children;return r.createElement("main",{style:i},t,r.createElement(o.Z,null))}},5465:function(e,t,n){n.r(t);var r=n(7294),o=n(9726),i=n(8161),a=n(8678),l=n(4003);t.default=function(){return r.createElement(a.Z,null,r.createElement("title",null,"Home Page"),r.createElement("div",null,r.createElement(l.Z,{title:"Dale Palmer Jr - About Me"}),r.createElement(o.Z,{"data-hide":"me",width:"100%",height:500,padding:4},r.createElement(o.Z,{height:"100%",boxShadow:"in",bg:"rgb(195, 199, 203)"},"Under Construction"))),r.createElement(i.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-about-js-4b7d289368e9812f685e.js.map