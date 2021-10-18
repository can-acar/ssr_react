(()=>{var e={93:(e,t,n)=>{"use strict";n.d(t,{Z:()=>T});const r=require("cors");var i=n.n(r),s=n(860),o=n.n(s);const c=require("path");var a=n.n(c);const l=require("react");var u=n.n(l);const d=require("react-dom/server"),m=require("react-helmet"),p=require("react-helmet-async");var v=n(228),h=n.n(v),b={htmlAttributes:{lang:"tr"}};const g=function(e){return u().createElement(p.HelmetProvider,{context:b},u().createElement(p.Helmet,{htmlAttributes:{lang:"tr"}},u().createElement("title",null," React Server Render v1.0")),u().createElement("div",null,u().createElement("div",{style:h()},"SSR React"),u().createElement("button",{onClick:function(){return console.log("click me")}},"clickci")))},f=require("common-tags"),S=require("serialize-javascript");var _,j=n.n(S),E=["http://localhost:3000","https://localhost:3001"],O={origin:function(e,t){-1!==E.indexOf(e)?t(null,!0):t(null,!1)},methods:["GET","PUT","POST","DELETE","OPTIONS"],optionsSuccessStatus:200,credentials:!0,allowedHeaders:["Content-Type","Authorization","X-Requested-With","device-remember-token","Access-Control-Allow-Origin","Origin","Accept"]},x=o()();x.disable("x-powered-by"),x.use(i()(O)),console.log(a().join(__dirname,"../public")),x.use(o().static(a().join(__dirname,"../public"))),x.use("/assets",o().static(a().join(__dirname,"../public"))),x.use("/assets/js",o().static(a().join(__dirname,"../public"))),x.use("/assets/css",o().static(a().join(__dirname,"../public"))),x.use("/assets/img",o().static(a().join(__dirname,"../public")));var y={htmlAttributes:{lang:"tr"}};x.get("/*",(function(e,t){var n=m.Helmet.renderStatic();console.log(n);var r=function(e){var t,n,r=e.content,i=e.title,s=e.state,o=void 0===s?{}:s,c=e.helmet;return(0,f.oneLineTrim)((0,f.html)(_||(t=["\n    <!DOCTYPE html>\n    <html ",' lang="">\n    <head>\n        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>\n        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n        <meta charSet=\'utf-8\'/>\n        <title> ',"</title>\n        ","\n        ","\n        ","\n\n    </head>\n    <body ",'>\n    <div data-id="app" id="root">','</div>\n    <script type="text/javascript">\n        window.__INITIAL_STATE__ = ','\n    <\/script>\n    <script src="assets/js/main.js" async><\/script>\n\x3c!--    <script src="assets/js/vendor.js" async><\/script>--\x3e\n\n    </body>\n    </html>\n'],n||(n=t.slice(0)),_=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))),c.htmlAttributes.toString(),i&&!c.title.toString(),c.title.toString()&&!i,c.meta.toString(),c.link.toString(),c.bodyAttributes.toString(),r,j()(o,{isJSON:!0,unsafe:!1})))}({content:(0,d.renderToString)(u().createElement(p.HelmetProvider,{context:y},u().createElement(g,null))),title:"ssr first test",helmet:n});t.send(r)}));const T=x},228:()=>{},860:e=>{"use strict";e.exports=require("express")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(860),t=n.n(e),r=n(93).Z,i=process.env.PORT||3e3;t()().use((function(e,t){return r.handle(e,t)})).listen(i,(function(e){e?console.error(e):console.log("> Started on port ".concat(i))}))})()})();
//# sourceMappingURL=main.js.map