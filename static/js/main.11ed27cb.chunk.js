(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(27)},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(13),c=a.n(r),o=(a(23),a(3)),m=(a(25),a(8));function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(m.b,{className:"navbar-brand",to:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/about"},"About")))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"mode",onClick:e.modef}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable dark mode"))))}function i(e){var t=Object(n.useState)("Enter text here"),a=Object(o.a)(t,2),r=a[0],c=a[1],m=Object(n.useState)("Click button to convert in uppercase"),s=Object(o.a)(m,2),i=s[0],u=s[1];return l.a.createElement("div",{className:"mb-3 light",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",{className:"my-4",style:{color:"dark"===e.mode?"white":"black"}},e.heading),l.a.createElement("textarea",{className:"form-control",id:"textBox",rows:"8",style:{backgroundColor:"dark"===e.mode?"grey":"lavender  "},value:r,onChange:function(e){console.log("change"),c(e.target.value)}}),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-4",onClick:function(){document.getElementById("preview").style.fontFamily="monoscape"}},"Change Font"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary my-3 max-4",onClick:function(){var e=r.toUpperCase();u(e),c(e)}},"Convert to uppercase"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary my-3 mx-4",onClick:function(){var e=r.split(/[ ]+/);c(e.join(" "))}},"Remove spaces"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary my-3 mx-4",onClick:function(){var t=document.getElementById("textBox");t.select(),navigator.clipboard.writeText(t.value),document.getSelection().removeAllRanges(),e.alert("Text Copied!!","success")}},"copy"),l.a.createElement("h3",null,"Text Summary"),l.a.createElement("p",null,"words ",r.split(" ").filter(function(e){return e.length>0}).length," and characters ",r.length),l.a.createElement("p",{id:"preview"},r),l.a.createElement("p",{id:"uppara"},i))}function u(e){var t=function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)};return l.a.createElement("div",{style:{height:"50px"}},e.msg&&l.a.createElement("div",null,l.a.createElement("div",{class:"alert alert-".concat(e.msg.state),role:"alert"},t(e.msg.msg)," : ",l.a.createElement("strong",null,t(e.msg.state)))))}var d=a(0);function b(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"This is about us page of textutils website"))}var g=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),g=Object(o.a)(c,2),p=g[0],v=g[1];return"light"===a&&(document.body.style.backgroundColor="lavender"),l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,l.a.createElement(s,{title:"TextUtils",mode:a,modef:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="grey"):(r("light"),document.body.style.backgroundColor="lavender")}}),l.a.createElement(u,{msg:p}),l.a.createElement("div",{className:"container"},l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/",element:l.a.createElement(i,{className:"my-10",heading:"Enter text below to analyze",mode:a,alert:function(e,t){v({msg:e,state:t}),setTimeout(function(){v(null)},3e3)}})}),l.a.createElement(d.a,{path:"/about",element:l.a.createElement(b,null)})))))},p=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,28)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null))),p()}},[[14,3,2]]]);
//# sourceMappingURL=main.11ed27cb.chunk.js.map