!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=60)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t){!function(){e.exports=this.React}()},function(e,t){!function(){e.exports=this.wc.wcSettings}()},function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var u=o.apply(null,n);u&&e.push(u)}else if("object"===c)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},,function(e,t,r){var n=r(29),o=r(30),c=r(31);e.exports=function(e,t){return n(e)||o(e,t)||c()}},function(e,t,r){e.exports=r(24)()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.wc.wcBlocksData}()},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},,,,,,function(e,t,r){"use strict";var n=r(2),o=r.n(n),c=r(7),u=r.n(c),i=r(10),a=r(9),s=r(0),l=r(19),f=r.n(l),p=function(e){var t=Object(s.useRef)();return f()(e,t.current)||(t.current=e),t.current};function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var O=function(e){return[Object(a.useSelect)((function(t){return t(i.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)}),[e]),Object(a.useDispatch)(i.QUERY_STATE_STORE_KEY).setValueForQueryContext]},g=function(e,t,r){var n=Object(a.useSelect)((function(n){return n(i.QUERY_STATE_STORE_KEY).getValueForQueryKey(e,t,r)}),[e,t]),o=Object(a.useDispatch)(i.QUERY_STATE_STORE_KEY).setQueryValue;return[n,Object(s.useCallback)((function(r){o(e,t,r)}),[e,t])]},d=function(e,t){var r=O(e),n=u()(r,2),c=n[0],i=n[1],a=p(t),l=Object(s.useRef)(!1);return Object(s.useEffect)((function(){i(e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(r,!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},c,{},a)),l.current=!0}),[a]),l.current?[c,i]:[t,i]},y=r(23),j=r.n(y),v=function(e){var t=e.namespace,r=e.resourceName,n=e.resourceValues,o=void 0===n?[]:n,c=e.query,u=void 0===c?{}:c;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the modelName properties.");var s=p(u),l=p(o),f=Object(a.useSelect)((function(e){var n=e(i.COLLECTIONS_STORE_KEY),o=[t,r,s,l];return{results:n.getCollection.apply(n,o),isLoading:!n.hasFinishedResolution("getCollection",o)}}),[t,r,l,s]),b=f.results,O=void 0===b?[]:b,g=f.isLoading;return{results:O,isLoading:void 0===g||g}};function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(e){var t={namespace:"/wc/store",resourceName:"products"},r=v(h({},t,{query:e})),n=r.results,o=r.isLoading;e.order,e.orderby,e.page,e.per_page;return{products:n,totalProducts:function(e,t){var r=t.namespace,n=t.resourceName,o=t.resourceValues,c=void 0===o?[]:o,u=t.query,s=void 0===u?{}:u;if(!r||!n)throw new Error("The options object must have valid values for the namespace and the modelName properties.");var l=p(s),f=p(c),b=Object(a.useSelect)((function(t){var o=t(i.COLLECTIONS_STORE_KEY),c=[e,r,n,l,f];return{value:o.getCollectionHeader.apply(o,c),isLoading:o.hasFinishedResolution("getCollectionHeader",c)}}),[e,r,n,f,l]),O=b.value,g=b.isLoading;return{value:O,isLoading:void 0===g||g}}("x-wp-total",h({},t,{query:j()(e,["order","orderby","page","per_page"])})).value,productsLoading:o}},S=r(3),E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,r=Object(S.useState)(e),n=u()(r,2),o=n[0],c=n[1];return Object(S.useEffect)((function(){var r=setTimeout((function(){c(e)}),t);return function(){clearTimeout(r)}}),[e]),o},_=function(e){var t=Object(S.useRef)();return Object(S.useEffect)((function(){t.current=e}),[e]),t.current};r.d(t,"d",(function(){return O})),r.d(t,"e",(function(){return g})),r.d(t,"g",(function(){return d})),r.d(t,"f",(function(){return w})),r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return E})),r.d(t,"c",(function(){return _}))},function(e,t,r){"use strict";var n=r(4),o=Object(n.getSetting)("enableReviewRating",!0),c=Object(n.getSetting)("showAvatars",!0),u=(Object(n.getSetting)("max_columns",6),Object(n.getSetting)("min_columns",1),Object(n.getSetting)("default_columns",3),Object(n.getSetting)("max_rows",6),Object(n.getSetting)("min_rows",1),Object(n.getSetting)("default_rows",2),Object(n.getSetting)("min_height",500),Object(n.getSetting)("default_height",500),Object(n.getSetting)("placeholderImgSrc","")),i=(Object(n.getSetting)("thumbnail_size",300),Object(n.getSetting)("isLargeCatalog"),Object(n.getSetting)("limitTags"),Object(n.getSetting)("hasProducts",!0),Object(n.getSetting)("hasTags",!0),Object(n.getSetting)("homeUrl",""),Object(n.getSetting)("productCount",0),Object(n.getSetting)("attributes",[]));"".concat("/wc/blocks","/products"),"".concat("/wc/blocks","/products/categories");r.d(t,"b",(function(){return o})),r.d(t,"d",(function(){return c})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return i}))},function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},function(e,t,r){"use strict";var n=r(11),o=r.n(n),c=r(2),u=r.n(c),i=r(21);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(r,!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=document.querySelectorAll(e);n.length&&Array.prototype.forEach.call(n,(function(e,n){var c=r(e,n),u=s({},e.dataset,{},c.attributes);e.classList.remove("is-loading"),Object(i.render)(React.createElement(t,o()({},c,{attributes:u})),e)}))}},function(e,t){!function(){e.exports=this.ReactDOM}()},,function(e,t,r){var n=r(32);e.exports=function(e,t){if(null==e)return{};var r,o,c=n(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)r=u[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}},function(e,t,r){"use strict";var n=r(25);function o(){}function c(){}c.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,c,u){if(u!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,function(e,t){!function(){e.exports=this.lodash}()},,function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,c=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw c}}return r}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}},,,,,,,,,,function(e,t,r){var n=r(52),o=r(53),c=r(54);e.exports=function(e){return n(e)||o(e)||c()}},,,,,,,,,,function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t){},function(e,t){},,,,function(e,t,r){"use strict";r.r(t);var n=r(2),o=r.n(n),c=r(7),u=r.n(c),i=r(17),a=r(0),s=r(27),l=r(42),f=r.n(l),p=r(1),b=(r(8),r(5)),O=r.n(b),g=(r(55),function(e){var t=e.className,r=e.onChange,n=void 0===r?function(){}:r,o=e.options,c=void 0===o?[]:o,i=e.isLoading,s=void 0!==i&&i,l=e.limit,b=void 0===l?10:l,g=Object(a.useState)([]),d=u()(g,2),y=d[0],j=d[1],v=Object(a.useState)(!1),m=u()(v,2),h=m[0],w=m[1];Object(a.useEffect)((function(){n(y)}),[y]);var S=Object(a.useMemo)((function(){return f()(Array(5)).map((function(e,t){return React.createElement("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}})}))}),[]),E=Object(a.useCallback)((function(e){var t=e.target.checked,r=e.target.value,n=y.filter((function(e){return e!==r}));t&&(n.push(r),n.sort()),j(n)}),[y]),_=Object(a.useMemo)((function(){var e=c.length;return!h&&React.createElement("li",{key:"show-more",className:"show-more"},React.createElement("button",{onClick:function(){w(!0)},"aria-expanded":!1,"aria-label":Object(p.sprintf)(Object(p.__)("Show %s more options","woo-gutenberg-products-block"),e-b)},Object(p.sprintf)(Object(p.__)("Show %s more","woo-gutenberg-products-block"),e-b)))}),[c,b,h]),P=Object(a.useMemo)((function(){return h&&React.createElement("li",{key:"show-less",className:"show-less"},React.createElement("button",{onClick:function(){w(!1)},"aria-expanded":!0,"aria-label":Object(p.__)("Show less options","woo-gutenberg-products-block")},Object(p.__)("Show less","woo-gutenberg-products-block")))}),[h]),x=Object(a.useMemo)((function(){var e=c.length>b+5;return React.createElement(a.Fragment,null,c.map((function(t,r){return React.createElement(a.Fragment,{key:t.key},React.createElement("li",e&&!h&&r>=b&&{hidden:!0},React.createElement("input",{type:"checkbox",id:t.key,value:t.key,onChange:E,checked:y.includes(t.key)}),React.createElement("label",{htmlFor:t.key},t.label)),e&&r===b-1&&_)})),e&&P)}),[c,y,h,b,E,P,_]),k=O()("wc-block-checkbox-list",{"is-loading":s},t);return React.createElement("ul",{className:k},s?S:x)}),d=(r(56),r(18));function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var j=function(e){var t=e.attributes,r=Object(a.useState)([]),n=u()(r,2),c=n[0],l=n[1],f=Object(a.useState)([]),p=u()(f,2),b=p[0],O=p[1],j=t.showCounts,v=t.attributeId,m=t.queryType,h=function(e){if(!e)return null;var t=Object(s.find)(d.a,["attribute_id",e.toString()]);return t.attribute_name?"pa_"+t.attribute_name:null}(v),w=Object(i.d)("product-grid"),S=u()(w,1)[0],E=Object(i.e)("product-grid","attributes",[]),_=u()(E,2),P=_[0],x=_[1],k=Object(a.useMemo)((function(){var e="or"===m?P.filter((function(e){return e.attribute!==h})):P;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(r,!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},S,{orderby:void 0,order:void 0,per_page:void 0,page:void 0,attributes:e,calculate_attribute_counts:[h]})}),[S,h,m,P]),R=Object(i.a)({namespace:"/wc/store",resourceName:"products/attributes/terms",resourceValues:[v]}),T=R.results,C=R.isLoading,D=Object(i.a)({namespace:"/wc/store",resourceName:"products/collection-data",query:k}),L=D.results,A=D.isLoading,N=Object(a.useCallback)((function(e,t){return React.createElement(a.Fragment,{key:"label"},e,j&&React.createElement("span",{className:"wc-block-attribute-filter-list-count"},t))}),[j]),I=Object(a.useCallback)((function(e){return L.attribute_counts?L.attribute_counts.find((function(t){return t.term===e})):{}}),[L]);Object(a.useEffect)((function(){if(!C&&!A){var e=[];T.forEach((function(t){var r=I(t.id),n=b.includes(t.slug),o=!!r;if(o||n){var c=r?r.count:t.count,u=!o&&n?0:c;e.push({key:t.slug,label:N(t.name,u)})}})),l(e)}}),[A,T,C,I,N,b]),Object(a.useEffect)((function(){var e=P.filter((function(e){return e.attribute!==h}));if(b){var t={attribute:h,operator:"or"===m?"in":"and",slug:b};e.push(t)}x(Object(s.sortBy)(e,"attribute"))}),[b,h,P,m]);var M=Object(a.useCallback)((function(e){O(e)}),[]);return h?React.createElement("div",{className:"wc-block-attribute-filter"},React.createElement(g,{className:"wc-block-attribute-filter-list",options:c,onChange:M,isLoading:C})):null},v=r(20);Object(v.a)(".wp-block-woocommerce-attribute-filter",j,(function(e){return{attributes:{attributeId:parseInt(e.dataset.attributeId||0,10),showCounts:"true"===e.dataset.showCounts,queryType:e.dataset.queryType}}}))}]);