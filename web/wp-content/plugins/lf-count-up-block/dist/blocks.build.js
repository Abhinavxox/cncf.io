!function(e){function t(r){if(n[r])return n[r].exports;var l=n[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var r=n(2),l=(n.n(r),n(3)),o=(n.n(l),n(4)),u=n(5),__=wp.i18n.__,c=wp.blocks.registerBlockType,i=wp.element.createElement("svg",{height:"20",viewBox:"2 2 22 22",width:"20",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:"M0 0h24v24H0zm0 0h24v24H0z",fill:"none"}),wp.element.createElement("path",{d:"M16.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17.23-.39.41-.78.54-1.17.13-.39.19-.79.19-1.18 0-.53-.09-1.02-.27-1.46-.18-.44-.44-.81-.78-1.11-.34-.31-.77-.54-1.26-.71-.51-.16-1.08-.24-1.72-.24-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15.23.1.43.25.59.43.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H22v-1.71h-5.95zM8 7H6v4H2v2h4v4h2v-4h4v-2H8V7z"}));c("lf/count-up",{title:__("Count Up"),icon:{src:i},category:"common",className:"lf-count-up",description:__("Block displaying a counting up animation for a custom number"),keywords:[__("countup"),__("count"),__("counting"),__("numbers"),__("linux"),__("lf")],attributes:{sectionText:{type:"string",default:""},icon1:{type:"string",default:"https://placehold.it/100"},icon2:{type:"string",default:"https://placehold.it/100"},icon3:{type:"string",default:"https://placehold.it/100"},icon4:{type:"string",default:"https://placehold.it/100"},iconId1:{type:"number",default:0},iconId2:{type:"number",default:0},iconId3:{type:"number",default:0},iconId4:{type:"number",default:0},countUpNumber1:{type:"string",default:""},countUpNumber2:{type:"string",default:""},countUpNumber3:{type:"string",default:""},countUpNumber4:{type:"string",default:""},descText1:{type:"string",default:""},descText2:{type:"string",default:""},descText3:{type:"string",default:""},descText4:{type:"string",default:""},link1:{type:"string",default:""},link2:{type:"string",default:""},link3:{type:"string",default:""},link4:{type:"string",default:""},textColor:{type:"string"},columns:{type:"number",default:1}},edit:o.a,save:u.a})},function(e,t){},function(e,t){},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),__=wp.i18n.__,i=wp.element,a=i.Component,s=i.Fragment,p=wp.blockEditor||wp.editor,m=p.InspectorControls,f=p.PanelColorSettings,d=p.RichText,y=p.MediaUpload,b=wp.components,g=b.RangeControl,w=b.PanelBody,h=b.TextControl,v=function(e){function t(){l(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={currentEdit:""},e}return u(t,e),c(t,[{key:"getItem",value:function(e){var t=this,n=this.state.currentEdit,l=this.props,o=l.attributes,u=l.setAttributes,c=l.isSelected,i=function(e){var t=e.sizes;return(t.thumbnail||t.full).url},a=function(t){var n;u((n={},r(n,"icon"+e,i(t)),r(n,"iconId"+e,t.id),n))};return wp.element.createElement("div",{key:e,className:"count-up-item lf-count-up-columns-"+e,style:{textAlign:"center"}},wp.element.createElement("div",{className:"media"},wp.element.createElement(y,{onSelect:a,render:function(t){var n=t.open;return wp.element.createElement("button",{onClick:n},wp.element.createElement("img",{src:o["icon"+e],alt:""}))}})),wp.element.createElement("div",{className:"lf-counter"},wp.element.createElement(d,{tagName:"div",value:o["countUpNumber"+e],onChange:function(t){return u(r({},"countUpNumber"+e,t))},isSelected:c&&n==="countUp"+e,unstableOnFocus:function(){return t.setState({currentEdit:"countUp"+e})},style:{fontSize:"35px"},placeholder:__("000"),className:"lf-counter-number"})),wp.element.createElement(d,{tagName:"p",value:o["descText"+e],onChange:function(t){return u(r({},"descText"+e,t))},isSelected:c&&n==="desc"+e,unstableOnFocus:function(){return t.setState({currentEdit:"desc"+e})},placeholder:__("Description"),className:"lf-count-up-desc"}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.attributes,l=t.setAttributes,o=n.columns,u=n.textColor;return wp.element.createElement(s,null,wp.element.createElement(m,null,wp.element.createElement(f,{title:"Color Settings",initialOpen:!0,colorSettings:[{value:u,onChange:function(e){return l({textColor:e})},label:"Text Color"}]}),wp.element.createElement(w,{title:__("General Settings")},wp.element.createElement(g,{label:__("Number of countup items"),min:1,max:4,value:o,onChange:function(e){return l({columns:e})}}),Array.from({length:o},function(e,t){return t+1}).map(function(e){return wp.element.createElement(h,{label:"Link "+e,key:"link"+e,value:n["link"+e],onChange:function(t){return l(r({},"link"+e,t))}})}))),wp.element.createElement("div",{className:"lf-count-up",style:{display:"flex"}},Array.from({length:o},function(e,t){return t+1}).map(function(t){return e.getItem(t)})))}}]),t}(a);t.a=v},function(e,t,n){"use strict";var r=wp.element.Fragment;t.a=function(e){var t=e.attributes,n=function(e,t){return wp.element.createElement("div",{key:t,className:"count-up-item lf-count-up-columns-"+t,style:{textAlign:"center"}},wp.element.createElement("img",{src:e["icon"+t],alt:""}),wp.element.createElement("div",{className:"lf-counter",style:{fontSize:"35px"}},wp.element.createElement("span",{className:"lf-counter-number"},e["countUpNumber"+t])),wp.element.createElement("p",{className:"lf-count-up-desc"},e["descText"+t]))};return wp.element.createElement(r,null,wp.element.createElement("div",null,t.sectionText),wp.element.createElement("div",{className:"lf-count-up",style:{display:"flex"}},Array.from({length:t.columns},function(e,t){return t+1}).map(function(e){return n(t,e)})))}}]);