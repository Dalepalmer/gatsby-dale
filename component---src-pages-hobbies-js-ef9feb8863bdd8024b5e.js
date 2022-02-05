"use strict";(self.webpackChunkdale_dev=self.webpackChunkdale_dev||[]).push([[821],{4731:function(e,n,t){t.d(n,{Z:function(){return j}});var r,l,a,i,o,c,u=t(7294),d=t(9),s=t(1660),g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAYAAADskT9PAAAAKUlEQVR42mNgGITgP8NIB6MhMBoCoyHwn070aBoYDYHREBgNgdEQAAMAX+QV66ALHKgAAAAASUVORK5CYII=",b=t(3570),f=["children","id","icon","label","onClick"];function m(){return m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m.apply(this,arguments)}function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,l,a=[],i=!0,o=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(c){o=!0,l=c}finally{try{i||null==t.return||t.return()}finally{if(o)throw l}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return A(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return A(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function E(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}function h(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var y={FILE_MEDIA:b.MediaCd,FILE_TEXT:b.FileText,FILE_UNKNOWN:b.Bat,FILE_FONT:b.FileFont2,FILE_PEN:b.FilePen,FILE_SETTINGS:b.FileSettings,FILE_TEXT_SETTINGS:b.FileTextSettings,FILE_EXECUTABLE:b.BatExec},k=s.ZP.div(r||(r=h(["\n  list-style-type: none;\n  background-repeat: no-repeat;\n  background-image: url(",");\n\n  &:last-child {\n    background-image: url(",");\n  }\n"])),g,(function(e){return e.isOpen?g:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAYAAADskT9PAAAAJUlEQVR42mNgGITgP8NIB6MhMBoCoyHwn070KBgFo2AUjAIwAAA2ZRDwnJ3nLQAAAABJRU5ErkJggg=="})),v=s.ZP.div(l||(l=h(["\n  display: flex;\n  align-items: center;\n  user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n"]))),w=s.ZP.div(a||(a=h(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 10px;\n  height: 10px;\n  border: 1;\n  border-color: borderDarkest;\n  background-color: inputBackground;\n  font-size: 11px;\n"]))),O=s.ZP.div(i||(i=h(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  margin-right: 6;\n  margin-left: ","px;\n\n  > img {\n    width: 14px;\n    height: 14px;\n  }\n"])),(function(e){return e.hasChildren?8:18})),B=s.ZP.ul(o||(o=h(["\n  padding: 0 0 0 22;\n  background-image: url(",");\n  background-repeat: repeat-y;\n"])),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAYAAADskT9PAAAAJ0lEQVR42mNgGITgP8NIB6MhMBoCoyEwGgKjITAaAqMhMBoCdA0BAHdXCfcDKEZUAAAAAElFTkSuQmCC"),C=s.ZP.span(c||(c=h(["\n  outline: none;\n  padding: 1;\n\n  :focus {\n    border-width: 1;\n    border-style: dotted;\n    padding: 0;\n  }\n"]))),x=function(e){var n=e.hasChildren,t=e.isOpen;return n?t?u.createElement(b.FolderOpen,{variant:"32x32_4","data-testid":"react95-default-icon-folder-open"}):u.createElement(b.Folder,{variant:"32x32_4","data-testid":"react95-default-icon-folder"}):u.createElement(b.Bat,{variant:"32x32_4","data-testid":"react95-default-icon-bat"})},I=function e(n){var t=n.children,r=void 0===t?[]:t,l=n.id,a=n.icon,i=n.label,o=n.onClick,c=void 0===o?function(){}:o,d=E(n,f),s=p(u.useState(!1),2),g=s[0],b=s[1],A=r.length>0,h=function(e){c(e,{id:l,icon:a,label:i,children:r})};return u.createElement(k,m({isOpen:g},d),u.createElement(v,null,A&&u.createElement(w,{onClick:function(){return b(!g)}},g?"-":"+"),u.createElement(O,{hasChildren:A},a||u.createElement(x,{hasChildren:A,isOpen:g})),u.createElement(C,{tabIndex:0,onDoubleClick:function(){return b(!g)},onClick:h,onKeyDown:function(e){" "===e.key&&(b(!g),h(e))}},i)),A&&g&&u.createElement(B,null,null==r?void 0:r.map((function(n){return u.createElement(e,m({key:n.id},n))}))))},S=["data"];function F(){return F=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},F.apply(this,arguments)}function P(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var T=d.default.ul.withConfig({displayName:"Tree__TreeParent",componentId:"sc-1wiuvvx-0"})(["padding:0;"]),_=(0,u.forwardRef)((function(e,n){var t=e.data,r=P(e,S);return u.createElement(T,F({},r,{ref:n}),t.map((function(e){return u.createElement(I,F({key:e.id},e))})))}));_.defaultProps={data:[]},_.icons=y;var j=_},8161:function(e,n,t){var r=t(7294),l=t(7125),a=t(7370),i=t(3570),o=t(1597);n.Z=function(e){return r.createElement(l.Z,{list:r.createElement(a.Z,{onClick:function(){return(0,o.c4)("/")}},r.createElement(a.Z.Item,{icon:r.createElement(i.ReaderClosed,{variant:"32x32_4"})},"Home"),r.createElement(a.Z.Item,{icon:r.createElement(i.WindowsExplorer,{variant:"32x32_4"})},"Windows Explorer"))})}},3380:function(e,n,t){t.r(n);var r=t(7294),l=t(5617),a=t(9726),i=t(4731),o=t(8161),c=t(3570),u={color:"#232129",backgroundColor:"#6fc9b0",padding:30,fontFamily:"-apple-system, Roboto, sans-serif, serif"},d=[{children:[{children:[{children:[{children:[{label:"The Oregon Outback",class:"link",onClick:function(){window.open("https://bikepacking.com/routes/oregon-outback/","_blank")}}],icon:r.createElement(c.Bat,null),id:"6a",label:"What I have done"},{children:[{label:"Crotia",id:"5a1",onClick:function(){window.open("https://bikepacking.com/routes/bikepacking-croatia/","_blank")}},{label:"Central Oregon",id:"5a2",onClick:function(){window.open("https://bikepacking.com/routes/central-oregon-backcountry-explorer/","_blank")}},{label:"Hart",id:"5a3",onClick:function(){window.open("https://bikepacking.com/routes/hart-sheldon-hot-springs/","_blank")}}],icon:r.createElement(c.Bat,null),id:"5a",label:"What I want to do"}],icon:r.createElement(c.FileSettings,null),id:"4a",label:"Bike Touring"},{icon:r.createElement(c.Bat,null),id:"3a",label:"Bike Commuting"},{icon:r.createElement(c.Bat,null),id:"2a",label:"Mountain Biking"},{icon:r.createElement(c.Bat,null),id:"1a",label:"Bicycle Advocacy"}],icon:r.createElement(c.Bat,null),id:"0a",label:"Bikes"},{children:[{icon:r.createElement(c.FileSettings,null),id:"3b",label:"Reusing old wood"},{icon:r.createElement(c.Bat,null),id:"2b",label:"Building practical things"},{icon:r.createElement(c.Bat,null),id:"1b",label:"Making Signs"}],icon:r.createElement(c.FileSettings,null),id:"0b",label:"Woodworking"},{children:[{icon:r.createElement(c.FileSettings,null),id:"5c",label:"Solar"},{icon:r.createElement(c.Bat,null),id:"4c",label:"Ranting about solar"},{icon:r.createElement(c.Bat,null),id:"3c",label:"Using the sun to power christmas lights"},{icon:r.createElement(c.Bat,null),id:"2c",label:"Energy Efficiency"},{icon:r.createElement(c.Bat,null),id:"1c",label:"LED Lightbulbs"}],icon:r.createElement(c.Bat,null),id:"0c",label:"Sustainability"}],id:0,label:"Hobbies"}];n.default=function(){return r.createElement("main",{style:u},r.createElement("title",null,"Home Page"),r.createElement("div",null,r.createElement(l.Z,{active:!0,icon:r.createElement(c.FileIcons,{variant:"32x32_4"}),title:"Dale Palmer Jr - Hobbies",className:"draggable",width:"100%"},r.createElement(l.Z.OptionsBox,null,r.createElement(l.Z.Option,null,"?"),r.createElement(l.Z.Option,null,"X"))),r.createElement(a.Z,{style:{display:"flex"},width:"100%",height:500,padding:4},r.createElement(a.Z,{width:"100%",boxShadow:"in",bg:"white"},r.createElement("div",{style:{margin:20,fontSize:17}},r.createElement(i.Z,{data:d}))))),r.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-hobbies-js-ef9feb8863bdd8024b5e.js.map