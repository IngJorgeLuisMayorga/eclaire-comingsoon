(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ------------------------------------- -->\r\n<!-- ------------------------------------- -->\r\n\r\n<!-- ------------------------------------- -->\r\n\r\n<header class=\"header\">\r\n  <ec-header></ec-header>\r\n</header>\r\n\r\n<div class=\"menu\">\r\n    <ec-menu></ec-menu>\r\n</div>\r\n\r\n<main class=\"router-content\">\r\n  <router-outlet></router-outlet>\r\n</main>\r\n\r\n<footer class=\"footer\">\r\n    <ec-footer></ec-footer>\r\n</footer>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Swiper 4.4.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * http://www.idangero.us/swiper/\n *\n * Copyright 2014-2018 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: September 14, 2018\n */\n.swiper-container{margin:0 auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}\n.swiper-container-no-flexbox .swiper-slide{float:left}\n.swiper-container-vertical>.swiper-wrapper{flex-direction:column}\n.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-property:transform,-webkit-transform;box-sizing:content-box}\n.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}\n.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}\n.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}\n.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-property:transform,-webkit-transform}\n.swiper-slide-invisible-blank{visibility:hidden}\n.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}\n.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:height,-webkit-transform;transition-property:transform,height;transition-property:transform,height,-webkit-transform}\n.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}\n.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}\n.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}\n.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{touch-action:pan-y}\n.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{touch-action:pan-x}\n.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:center;background-repeat:no-repeat}\n.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}\n.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}\n.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}\n.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-lock{display:none}\n.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}\n.swiper-pagination.swiper-pagination-hidden{opacity:0}\n.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}\n.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);transform:scale(.33);position:relative}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{-webkit-transform:scale(1);transform:scale(1)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);transform:scale(1)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);transform:scale(.66)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);transform:scale(.33)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);transform:scale(.66)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);transform:scale(.33)}\n.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}\nbutton.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}\n.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}\n.swiper-pagination-bullet-active{opacity:1;background:#007aff}\n.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}\n.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}\n.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}\n.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s top,.2s -webkit-transform;transition:.2s transform,.2s top;transition:.2s transform,.2s top,.2s -webkit-transform}\n.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}\n.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}\n.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s left,.2s -webkit-transform;transition:.2s transform,.2s left;transition:.2s transform,.2s left,.2s -webkit-transform}\n.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s right,.2s -webkit-transform;transition:.2s transform,.2s right;transition:.2s transform,.2s right,.2s -webkit-transform}\n.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;transform-origin:left top}\n.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;transform-origin:right top}\n.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}\n.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}\n.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}\n.swiper-pagination-progressbar.swiper-pagination-white{background:rgba(255,255,255,.25)}\n.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#fff}\n.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}\n.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0,0,0,.25)}\n.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000}\n.swiper-pagination-lock{display:none}\n.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}\n.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}\n.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}\n.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}\n.swiper-scrollbar-cursor-drag{cursor:move}\n.swiper-scrollbar-lock{display:none}\n.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}\n.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}\n.swiper-slide-zoomed{cursor:move}\n.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}\n.swiper-lazy-preloader:after{display:block;content:'';width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}\n.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}\n@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\n@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\n.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}\n.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}\n.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}\n.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-cube{overflow:visible}\n.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}\n.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;transform-origin:100% 0}\n.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}\n.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}\n.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}\n.swiper-container-flip{overflow:visible}\n.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}\n.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}\n.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}\n.header {\n  display: none;\n}\n.menu {\n  display: none;\n}\n.router-content {\n  display: block;\n  width: 100vw;\n  height: auto;\n  min-width: 100vw;\n  min-height: 100vh;\n}\nfooter {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zd2lwZXIvZGlzdC9jc3Mvc3dpcGVyLm1pbi5jc3MiLCJzcmMvYXBwL0M6L1VzZXJzL3dhbGxhL0RvY3VtZW50cy9HaXRIdWIvRWNsYWlyZS9lY2xhaXJlLWNvbWluZ3Nvb24vbmdFY2xhaXJlQ29taW5nU29vbi9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFDSCxrQkFBa0IsY0FBYyxrQkFBa0IsZ0JBQWdCLGdCQUFnQixVQUFVLFNBQVMsQ0FBQztBQUFBLDJDQUEyQyxVQUFVLENBQUM7QUFBQSwyQ0FBNEoscUJBQXFCLENBQUM7QUFBQSxnQkFBZ0Isa0JBQWtCLFdBQVcsWUFBWSxVQUFVLEFBQTZELGFBQWEsQUFBOEMsc0NBQXNDLEFBQWlDLDhCQUE4QixBQUE5QixpREFBOEIsZ0RBQWdELEFBQStCLHNCQUFzQixDQUFDO0FBQUEsd0RBQXdELHFDQUFxQyw0QkFBNEIsQ0FBQztBQUFBLDJDQUFxRixjQUFjLENBQUM7QUFBQSw0Q0FBK0gsb0NBQW9DLGFBQWEsQ0FBQztBQUFBLGNBQXdELGNBQWMsV0FBVyxZQUFZLGtCQUFrQixBQUE4QyxzQ0FBc0MsQUFBaUMsOEJBQThCLEFBQTlCLGlEQUE4QiwrQ0FBK0MsQ0FBQztBQUFBLDhCQUE4QixpQkFBaUIsQ0FBQztBQUFBLHdFQUF3RSxXQUFXLENBQUM7QUFBQSw2Q0FBeUgsdUJBQXVCLEFBQXFELDZDQUE2QyxBQUF3QyxxQ0FBcUMsc0RBQXNELENBQUM7QUFBQSxxQkFBcUIsMkJBQTJCLGtCQUFrQixDQUFDO0FBQUEsK1NBQStTLG9DQUFvQywyQkFBMkIsQ0FBQztBQUFBLDhMQUE4TCxrQkFBa0IsT0FBTyxNQUFNLFdBQVcsWUFBWSxvQkFBb0IsVUFBVSxDQUFDO0FBQUEsK0NBQXdTLHNFQUFzRSxDQUFDO0FBQUEsZ0RBQXVTLHVFQUF1RSxDQUFDO0FBQUEsOENBQTJTLHFFQUFxRSxDQUFDO0FBQUEsaURBQXdTLHdFQUF3RSxDQUFDO0FBQUEsa0ZBQXlHLGtCQUFrQixDQUFDO0FBQUEsOEVBQXFHLGtCQUFrQixDQUFDO0FBQUEsd0NBQXdDLGtCQUFrQixRQUFRLFdBQVcsWUFBWSxpQkFBaUIsV0FBVyxlQUFlLDBCQUEwQiwyQkFBMkIsMkJBQTJCLENBQUM7QUFBQSxzRkFBc0YsWUFBWSxZQUFZLG1CQUFtQixDQUFDO0FBQUEsOERBQThELG9SQUFvUixVQUFVLFVBQVUsQ0FBQztBQUFBLDhEQUE4RCxvUkFBb1IsV0FBVyxTQUFTLENBQUM7QUFBQSxzR0FBc0csbVJBQW1SLENBQUM7QUFBQSxzR0FBc0csbVJBQW1SLENBQUM7QUFBQSxzR0FBc0csbVJBQW1SLENBQUM7QUFBQSxzR0FBc0csbVJBQW1SLENBQUM7QUFBQSxvQkFBb0IsWUFBWSxDQUFDO0FBQUEsbUJBQW1CLGtCQUFrQixrQkFBa0IsQUFBeUQsdUJBQXVCLHFDQUFxQyw2QkFBNkIsVUFBVSxDQUFDO0FBQUEsNENBQTRDLFNBQVMsQ0FBQztBQUFBLDhHQUE4RyxZQUFZLE9BQU8sVUFBVSxDQUFDO0FBQUEsbUNBQW1DLGdCQUFnQixXQUFXLENBQUM7QUFBQSw2REFBNkQsNkJBQTZCLEFBQXlCLHFCQUFxQixpQkFBaUIsQ0FBQztBQUFBLG9FQUFvRSwyQkFBMkIsQUFBdUIsa0JBQWtCLENBQUM7QUFBQSx5RUFBeUUsMkJBQTJCLEFBQXVCLGtCQUFrQixDQUFDO0FBQUEseUVBQXlFLDZCQUE2QixBQUF5QixvQkFBb0IsQ0FBQztBQUFBLDhFQUE4RSw2QkFBNkIsQUFBeUIsb0JBQW9CLENBQUM7QUFBQSx5RUFBeUUsNkJBQTZCLEFBQXlCLG9CQUFvQixDQUFDO0FBQUEsOEVBQThFLDZCQUE2QixBQUF5QixvQkFBb0IsQ0FBQztBQUFBLDBCQUEwQixVQUFVLFdBQVcscUJBQXFCLG1CQUFtQixnQkFBZ0IsVUFBVSxDQUFDO0FBQUEsZ0NBQWdDLFlBQVksU0FBUyxVQUFVLEFBQXdCLGdCQUFnQix3QkFBd0IscUJBQXFCLGVBQWUsQ0FBQztBQUFBLHVEQUF1RCxjQUFjLENBQUM7QUFBQSxpQ0FBaUMsVUFBVSxrQkFBa0IsQ0FBQztBQUFBLHNEQUFzRCxXQUFXLFFBQVEsd0NBQXdDLCtCQUErQixDQUFDO0FBQUEsZ0ZBQWdGLGFBQWEsYUFBYSxDQUFDO0FBQUEsd0ZBQXdGLFFBQVEsbUNBQW1DLEFBQStCLDJCQUEyQixTQUFTLENBQUM7QUFBQSxrSEFBa0gscUJBQXFCLEFBQWlELHlDQUF5QyxBQUFvQyxpQ0FBaUMsc0RBQXNELENBQUM7QUFBQSxrRkFBa0YsWUFBWSxDQUFDO0FBQUEsMEZBQTBGLFNBQVMsbUNBQW1DLEFBQStCLDJCQUEyQixrQkFBa0IsQ0FBQztBQUFBLG9IQUFzSywwQ0FBMEMsQUFBcUMsa0NBQWtDLHVEQUF1RCxDQUFDO0FBQUEsK0dBQWtLLDJDQUEyQyxBQUFzQyxtQ0FBbUMsd0RBQXdELENBQUM7QUFBQSwrQkFBK0IsMkJBQTJCLGlCQUFpQixDQUFDO0FBQUEsbUVBQW1FLG1CQUFtQixrQkFBa0IsT0FBTyxNQUFNLFdBQVcsWUFBWSwyQkFBMkIsQUFBdUIsbUJBQW1CLGtDQUFrQyxBQUE4Qix5QkFBeUIsQ0FBQztBQUFBLHlGQUF5RixtQ0FBbUMsQUFBK0IsMEJBQTBCLENBQUM7QUFBQSw2SkFBNkosV0FBVyxXQUFXLE9BQU8sS0FBSyxDQUFDO0FBQUEsNkpBQTZKLFVBQVUsWUFBWSxPQUFPLEtBQUssQ0FBQztBQUFBLDBEQUEwRCxlQUFlLENBQUM7QUFBQSx1REFBdUQsZ0NBQWdDLENBQUM7QUFBQSwyRkFBMkYsZUFBZSxDQUFDO0FBQUEsMERBQTBELGVBQWUsQ0FBQztBQUFBLHVEQUF1RCwwQkFBMEIsQ0FBQztBQUFBLDJGQUEyRixlQUFlLENBQUM7QUFBQSx3QkFBd0IsWUFBWSxDQUFDO0FBQUEsa0JBQWtCLG1CQUFtQixrQkFBa0Isc0JBQXNCLHlCQUF5QixDQUFDO0FBQUEsK0NBQStDLGtCQUFrQixRQUFRLFdBQVcsV0FBVyxXQUFXLFNBQVMsQ0FBQztBQUFBLDZDQUE2QyxrQkFBa0IsVUFBVSxPQUFPLFdBQVcsVUFBVSxVQUFVLENBQUM7QUFBQSx1QkFBdUIsWUFBWSxXQUFXLGtCQUFrQiwwQkFBMEIsbUJBQW1CLE9BQU8sS0FBSyxDQUFDO0FBQUEsOEJBQThCLFdBQVcsQ0FBQztBQUFBLHVCQUF1QixZQUFZLENBQUM7QUFBQSx1QkFBdUIsV0FBVyxZQUFZLEFBQTZELGFBQWEsQUFBNEUsdUJBQXVCLEFBQTBFLG1CQUFtQixpQkFBaUIsQ0FBQztBQUFBLG9GQUFvRixlQUFlLGdCQUFnQixzQkFBc0Isa0JBQWtCLENBQUM7QUFBQSxxQkFBcUIsV0FBVyxDQUFDO0FBQUEsdUJBQXVCLFdBQVcsWUFBWSxrQkFBa0IsU0FBUyxRQUFRLGtCQUFrQixpQkFBaUIsV0FBVyw2QkFBNkIsQUFBeUIscUJBQXFCLGtFQUFrRSx5REFBeUQsQ0FBQztBQUFBLDZCQUE2QixjQUFjLFdBQVcsV0FBVyxZQUFZLHk3Q0FBeTdDLHdCQUF3QixxQkFBcUIsMkJBQTJCLENBQUM7QUFBQSxtQ0FBbUMscTdDQUFxN0MsQ0FBQztBQUFBLHlDQUF5QyxLQUFLLGlDQUFpQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQUEsaUNBQWlDLEtBQUssaUNBQWlDLHdCQUF3QixDQUFDLENBQUM7QUFBQSx1Q0FBdUMsa0JBQWtCLE9BQU8sTUFBTSxvQkFBb0IsVUFBVSxhQUFhLENBQUM7QUFBQSxnRUFBbUosbUNBQW1DLENBQUM7QUFBQSxxQ0FBcUMsb0JBQW9CLEFBQW1FLDJCQUEyQixDQUFDO0FBQUEsbURBQW1ELG1CQUFtQixDQUFDO0FBQUEsNkdBQTZHLG1CQUFtQixDQUFDO0FBQUEsdUJBQXVCLGdCQUFnQixDQUFDO0FBQUEscUNBQXFDLG9CQUFvQixtQ0FBbUMsMkJBQTJCLFVBQVUsa0JBQWtCLDZCQUE2QixBQUF5QixxQkFBcUIsV0FBVyxXQUFXLENBQUM7QUFBQSxtREFBbUQsbUJBQW1CLENBQUM7QUFBQSwwREFBMEQsZ0NBQWdDLEFBQTRCLHVCQUF1QixDQUFDO0FBQUEsNkdBQTZHLG1CQUFtQixDQUFDO0FBQUEsd0xBQXdMLG9CQUFvQixrQkFBa0IsQ0FBQztBQUFBLHNNQUFzTSxVQUFVLG1DQUFtQywwQkFBMEIsQ0FBQztBQUFBLDJDQUEyQyxrQkFBa0IsT0FBTyxTQUFTLFdBQVcsWUFBWSxnQkFBZ0IsV0FBVywwQkFBMEIsa0JBQWtCLFNBQVMsQ0FBQztBQUFBLHVCQUF1QixnQkFBZ0IsQ0FBQztBQUFBLHFDQUFxQyxvQkFBb0IsbUNBQW1DLDJCQUEyQixTQUFTLENBQUM7QUFBQSxtREFBbUQsbUJBQW1CLENBQUM7QUFBQSw2R0FBNkcsbUJBQW1CLENBQUM7QUFBQSxzTUFBc00sVUFBVSxtQ0FBbUMsMEJBQTBCLENBQUM7QUFBQSw0Q0FBNEMsc0JBQXNCLENBQUM7QUNWeGptQjtFQUNFLGNBQUE7Q0NDRDtBRENEO0VBQ0UsY0FBQTtDQ0NEO0FEQ0Q7RUFDRSxlQUFBO0VBRUEsYUFBQTtFQUNBLGFBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0NDREQ7QURJRDtFQUNFLGVBQUE7Q0NGRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3dpcGVyIDQuNC4xXG4gKiBNb3N0IG1vZGVybiBtb2JpbGUgdG91Y2ggc2xpZGVyIGFuZCBmcmFtZXdvcmsgd2l0aCBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9uc1xuICogaHR0cDovL3d3dy5pZGFuZ2Vyby51cy9zd2lwZXIvXG4gKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxOCBWbGFkaW1pciBLaGFybGFtcGlkaVxuICpcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICpcbiAqIFJlbGVhc2VkIG9uOiBTZXB0ZW1iZXIgMTQsIDIwMThcbiAqL1xuLnN3aXBlci1jb250YWluZXJ7bWFyZ2luOjAgYXV0bztwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47bGlzdC1zdHlsZTpub25lO3BhZGRpbmc6MDt6LWluZGV4OjF9LnN3aXBlci1jb250YWluZXItbm8tZmxleGJveCAuc3dpcGVyLXNsaWRle2Zsb2F0OmxlZnR9LnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci13cmFwcGVyey13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbDstd2Via2l0LWJveC1kaXJlY3Rpb246bm9ybWFsOy13ZWJraXQtZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5zd2lwZXItd3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MTtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTotd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5Oi13ZWJraXQtdHJhbnNmb3JtOy1vLXRyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLC13ZWJraXQtdHJhbnNmb3JtOy13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94fS5zd2lwZXItY29udGFpbmVyLWFuZHJvaWQgLnN3aXBlci1zbGlkZSwuc3dpcGVyLXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCl9LnN3aXBlci1jb250YWluZXItbXVsdGlyb3c+LnN3aXBlci13cmFwcGVyey13ZWJraXQtZmxleC13cmFwOndyYXA7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwfS5zd2lwZXItY29udGFpbmVyLWZyZWUtbW9kZT4uc3dpcGVyLXdyYXBwZXJ7LXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDstby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDttYXJnaW46MCBhdXRvfS5zd2lwZXItc2xpZGV7LXdlYmtpdC1mbGV4LXNocmluazowOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTotd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5Oi13ZWJraXQtdHJhbnNmb3JtOy1vLXRyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLC13ZWJraXQtdHJhbnNmb3JtfS5zd2lwZXItc2xpZGUtaW52aXNpYmxlLWJsYW5re3Zpc2liaWxpdHk6aGlkZGVufS5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQsLnN3aXBlci1jb250YWluZXItYXV0b2hlaWdodCAuc3dpcGVyLXNsaWRle2hlaWdodDphdXRvfS5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQgLnN3aXBlci13cmFwcGVyey13ZWJraXQtYm94LWFsaWduOnN0YXJ0Oy13ZWJraXQtYWxpZ24taXRlbXM6ZmxleC1zdGFydDstbXMtZmxleC1hbGlnbjpzdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0Oy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTpoZWlnaHQsLXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTpoZWlnaHQsLXdlYmtpdC10cmFuc2Zvcm07LW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0saGVpZ2h0O3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLGhlaWdodDt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSxoZWlnaHQsLXdlYmtpdC10cmFuc2Zvcm19LnN3aXBlci1jb250YWluZXItM2R7LXdlYmtpdC1wZXJzcGVjdGl2ZToxMjAwcHg7cGVyc3BlY3RpdmU6MTIwMHB4fS5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItY3ViZS1zaGFkb3csLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZSwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZH0uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3B7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4OjEwfS5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnR7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWdyYWRpZW50KGxpbmVhcixyaWdodCB0b3AsbGVmdCB0b3AsZnJvbShyZ2JhKDAsMCwwLC41KSksdG8ocmdiYSgwLDAsMCwwKSkpO2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmlnaHQscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQocmlnaHQscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSk7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gbGVmdCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodHtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgdG9wLHJpZ2h0IHRvcCxmcm9tKHJnYmEoMCwwLDAsLjUpKSx0byhyZ2JhKDAsMCwwLDApKSk7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpO2JhY2tncm91bmQtaW1hZ2U6LW8tbGluZWFyLWdyYWRpZW50KGxlZnQscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSk7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9we2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCBib3R0b20sbGVmdCB0b3AsZnJvbShyZ2JhKDAsMCwwLC41KSksdG8ocmdiYSgwLDAsMCwwKSkpO2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpO2JhY2tncm91bmQtaW1hZ2U6LW8tbGluZWFyLWdyYWRpZW50KGJvdHRvbSxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byB0b3AscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9te2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AsbGVmdCBib3R0b20sZnJvbShyZ2JhKDAsMCwwLC41KSksdG8ocmdiYSgwLDAsMCwwKSkpO2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpO2JhY2tncm91bmQtaW1hZ2U6LW8tbGluZWFyLWdyYWRpZW50KHRvcCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci1jb250YWluZXItd3A4LWhvcml6b250YWwsLnN3aXBlci1jb250YWluZXItd3A4LWhvcml6b250YWw+LnN3aXBlci13cmFwcGVyey1tcy10b3VjaC1hY3Rpb246cGFuLXk7dG91Y2gtYWN0aW9uOnBhbi15fS5zd2lwZXItY29udGFpbmVyLXdwOC12ZXJ0aWNhbCwuc3dpcGVyLWNvbnRhaW5lci13cDgtdmVydGljYWw+LnN3aXBlci13cmFwcGVyey1tcy10b3VjaC1hY3Rpb246cGFuLXg7dG91Y2gtYWN0aW9uOnBhbi14fS5zd2lwZXItYnV0dG9uLW5leHQsLnN3aXBlci1idXR0b24tcHJldntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3dpZHRoOjI3cHg7aGVpZ2h0OjQ0cHg7bWFyZ2luLXRvcDotMjJweDt6LWluZGV4OjEwO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtc2l6ZToyN3B4IDQ0cHg7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0fS5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCwuc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tZGlzYWJsZWR7b3BhY2l0eTouMzU7Y3Vyc29yOmF1dG87cG9pbnRlci1ldmVudHM6bm9uZX0uc3dpcGVyLWJ1dHRvbi1wcmV2LC5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1uZXh0e2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHZpZXdCb3glM0QnMCUyMDAlMjAyNyUyMDQ0JyUzRSUzQ3BhdGglMjBkJTNEJ00wJTJDMjJMMjIlMkMwbDIuMSUyQzIuMUw0LjIlMkMyMmwxOS45JTJDMTkuOUwyMiUyQzQ0TDAlMkMyMkwwJTJDMjJMMCUyQzIyeiclMjBmaWxsJTNEJyUyMzAwN2FmZiclMkYlM0UlM0MlMkZzdmclM0VcIik7bGVmdDoxMHB4O3JpZ2h0OmF1dG99LnN3aXBlci1idXR0b24tbmV4dCwuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tcHJldntiYWNrZ3JvdW5kLWltYWdlOnVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHhtbG5zJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyclMjB2aWV3Qm94JTNEJzAlMjAwJTIwMjclMjA0NCclM0UlM0NwYXRoJTIwZCUzRCdNMjclMkMyMkwyNyUyQzIyTDUlMkM0NGwtMi4xLTIuMUwyMi44JTJDMjJMMi45JTJDMi4xTDUlMkMwTDI3JTJDMjJMMjclMkMyMnonJTIwZmlsbCUzRCclMjMwMDdhZmYnJTJGJTNFJTNDJTJGc3ZnJTNFXCIpO3JpZ2h0OjEwcHg7bGVmdDphdXRvfS5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi13aGl0ZSwuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLXdoaXRle2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHZpZXdCb3glM0QnMCUyMDAlMjAyNyUyMDQ0JyUzRSUzQ3BhdGglMjBkJTNEJ00wJTJDMjJMMjIlMkMwbDIuMSUyQzIuMUw0LjIlMkMyMmwxOS45JTJDMTkuOUwyMiUyQzQ0TDAlMkMyMkwwJTJDMjJMMCUyQzIyeiclMjBmaWxsJTNEJyUyM2ZmZmZmZiclMkYlM0UlM0MlMkZzdmclM0VcIil9LnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLXdoaXRlLC5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24td2hpdGV7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIwdmlld0JveCUzRCcwJTIwMCUyMDI3JTIwNDQnJTNFJTNDcGF0aCUyMGQlM0QnTTI3JTJDMjJMMjclMkMyMkw1JTJDNDRsLTIuMS0yLjFMMjIuOCUyQzIyTDIuOSUyQzIuMUw1JTJDMEwyNyUyQzIyTDI3JTJDMjJ6JyUyMGZpbGwlM0QnJTIzZmZmZmZmJyUyRiUzRSUzQyUyRnN2ZyUzRVwiKX0uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tYmxhY2ssLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1ibGFja3tiYWNrZ3JvdW5kLWltYWdlOnVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHhtbG5zJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyclMjB2aWV3Qm94JTNEJzAlMjAwJTIwMjclMjA0NCclM0UlM0NwYXRoJTIwZCUzRCdNMCUyQzIyTDIyJTJDMGwyLjElMkMyLjFMNC4yJTJDMjJsMTkuOSUyQzE5LjlMMjIlMkM0NEwwJTJDMjJMMCUyQzIyTDAlMkMyMnonJTIwZmlsbCUzRCclMjMwMDAwMDAnJTJGJTNFJTNDJTJGc3ZnJTNFXCIpfS5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1ibGFjaywuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWJsYWNre2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHZpZXdCb3glM0QnMCUyMDAlMjAyNyUyMDQ0JyUzRSUzQ3BhdGglMjBkJTNEJ00yNyUyQzIyTDI3JTJDMjJMNSUyQzQ0bC0yLjEtMi4xTDIyLjglMkMyMkwyLjklMkMyLjFMNSUyQzBMMjclMkMyMkwyNyUyQzIyeiclMjBmaWxsJTNEJyUyMzAwMDAwMCclMkYlM0UlM0MlMkZzdmclM0VcIil9LnN3aXBlci1idXR0b24tbG9ja3tkaXNwbGF5Om5vbmV9LnN3aXBlci1wYWdpbmF0aW9ue3Bvc2l0aW9uOmFic29sdXRlO3RleHQtYWxpZ246Y2VudGVyOy13ZWJraXQtdHJhbnNpdGlvbjouM3Mgb3BhY2l0eTstby10cmFuc2l0aW9uOi4zcyBvcGFjaXR5O3RyYW5zaXRpb246LjNzIG9wYWNpdHk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7ei1pbmRleDoxMH0uc3dpcGVyLXBhZ2luYXRpb24uc3dpcGVyLXBhZ2luYXRpb24taGlkZGVue29wYWNpdHk6MH0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLC5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9ue2JvdHRvbToxMHB4O2xlZnQ6MDt3aWR0aDoxMDAlfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWN7b3ZlcmZsb3c6aGlkZGVuO2ZvbnQtc2l6ZTowfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMzMpOy1tcy10cmFuc2Zvcm06c2NhbGUoLjMzKTt0cmFuc2Zvcm06c2NhbGUoLjMzKTtwb3NpdGlvbjpyZWxhdGl2ZX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpOy1tcy10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbWFpbnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTstbXMtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLXByZXZ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjY2KTstbXMtdHJhbnNmb3JtOnNjYWxlKC42Nik7dHJhbnNmb3JtOnNjYWxlKC42Nil9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1wcmV2LXByZXZ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjMzKTstbXMtdHJhbnNmb3JtOnNjYWxlKC4zMyk7dHJhbnNmb3JtOnNjYWxlKC4zMyl9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC42Nik7LW1zLXRyYW5zZm9ybTpzY2FsZSguNjYpO3RyYW5zZm9ybTpzY2FsZSguNjYpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbmV4dC1uZXh0ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4zMyk7LW1zLXRyYW5zZm9ybTpzY2FsZSguMzMpO3RyYW5zZm9ybTpzY2FsZSguMzMpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7d2lkdGg6OHB4O2hlaWdodDo4cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyLXJhZGl1czoxMDAlO2JhY2tncm91bmQ6IzAwMDtvcGFjaXR5Oi4yfWJ1dHRvbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7Ym9yZGVyOm5vbmU7bWFyZ2luOjA7cGFkZGluZzowOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9LnN3aXBlci1wYWdpbmF0aW9uLWNsaWNrYWJsZSAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e2N1cnNvcjpwb2ludGVyfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZle29wYWNpdHk6MTtiYWNrZ3JvdW5kOiMwMDdhZmZ9LnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHN7cmlnaHQ6MTBweDt0b3A6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTUwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNTAlLDApfS5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7bWFyZ2luOjZweCAwO2Rpc3BsYXk6YmxvY2t9LnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWlje3RvcDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7d2lkdGg6OHB4fS5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e2Rpc3BsYXk6aW5saW5lLWJsb2NrOy13ZWJraXQtdHJhbnNpdGlvbjouMnMgdG9wLC4ycyAtd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uOi4ycyB0b3AsLjJzIC13ZWJraXQtdHJhbnNmb3JtOy1vLXRyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgdG9wO3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgdG9wO3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgdG9wLC4ycyAtd2Via2l0LXRyYW5zZm9ybX0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7bWFyZ2luOjAgNHB4fS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWlje2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3doaXRlLXNwYWNlOm5vd3JhcH0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0ey13ZWJraXQtdHJhbnNpdGlvbjouMnMgbGVmdCwuMnMgLXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbjouMnMgbGVmdCwuMnMgLXdlYmtpdC10cmFuc2Zvcm07LW8tdHJhbnNpdGlvbjouMnMgdHJhbnNmb3JtLC4ycyBsZWZ0O3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgbGVmdDt0cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm0sLjJzIGxlZnQsLjJzIC13ZWJraXQtdHJhbnNmb3JtfS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwuc3dpcGVyLWNvbnRhaW5lci1ydGw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0ey13ZWJraXQtdHJhbnNpdGlvbjouMnMgcmlnaHQsLjJzIC13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb246LjJzIHJpZ2h0LC4ycyAtd2Via2l0LXRyYW5zZm9ybTstby10cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm0sLjJzIHJpZ2h0O3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgcmlnaHQ7dHJhbnNpdGlvbjouMnMgdHJhbnNmb3JtLC4ycyByaWdodCwuMnMgLXdlYmtpdC10cmFuc2Zvcm19LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMjUpO3Bvc2l0aW9uOmFic29sdXRlfS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbHtiYWNrZ3JvdW5kOiMwMDdhZmY7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7LW1zLXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wOy1tcy10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3B9LnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbHstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wOy1tcy10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcDt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcH0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhciwuc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGV7d2lkdGg6MTAwJTtoZWlnaHQ6NHB4O2xlZnQ6MDt0b3A6MH0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1vcHBvc2l0ZSwuc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXJ7d2lkdGg6NHB4O2hlaWdodDoxMDAlO2xlZnQ6MDt0b3A6MH0uc3dpcGVyLXBhZ2luYXRpb24td2hpdGUgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmV7YmFja2dyb3VuZDojZmZmfS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi13aGl0ZXtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjI1KX0uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24td2hpdGUgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGx7YmFja2dyb3VuZDojZmZmfS5zd2lwZXItcGFnaW5hdGlvbi1ibGFjayAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZXtiYWNrZ3JvdW5kOiMwMDB9LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLWJsYWNre2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMjUpfS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1ibGFjayAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbHtiYWNrZ3JvdW5kOiMwMDB9LnN3aXBlci1wYWdpbmF0aW9uLWxvY2t7ZGlzcGxheTpub25lfS5zd2lwZXItc2Nyb2xsYmFye2JvcmRlci1yYWRpdXM6MTBweDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtdG91Y2gtYWN0aW9uOm5vbmU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xKX0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItc2Nyb2xsYmFye3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MSU7Ym90dG9tOjNweDt6LWluZGV4OjUwO2hlaWdodDo1cHg7d2lkdGg6OTglfS5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItc2Nyb2xsYmFye3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjNweDt0b3A6MSU7ei1pbmRleDo1MDt3aWR0aDo1cHg7aGVpZ2h0Ojk4JX0uc3dpcGVyLXNjcm9sbGJhci1kcmFne2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC41KTtib3JkZXItcmFkaXVzOjEwcHg7bGVmdDowO3RvcDowfS5zd2lwZXItc2Nyb2xsYmFyLWN1cnNvci1kcmFne2N1cnNvcjptb3ZlfS5zd2lwZXItc2Nyb2xsYmFyLWxvY2t7ZGlzcGxheTpub25lfS5zd2lwZXItem9vbS1jb250YWluZXJ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy13ZWJraXQtanVzdGlmeS1jb250ZW50OmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstd2Via2l0LWFsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3RleHQtYWxpZ246Y2VudGVyfS5zd2lwZXItem9vbS1jb250YWluZXI+Y2FudmFzLC5zd2lwZXItem9vbS1jb250YWluZXI+aW1nLC5zd2lwZXItem9vbS1jb250YWluZXI+c3Zne21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJTstby1vYmplY3QtZml0OmNvbnRhaW47b2JqZWN0LWZpdDpjb250YWlufS5zd2lwZXItc2xpZGUtem9vbWVke2N1cnNvcjptb3ZlfS5zd2lwZXItbGF6eS1wcmVsb2FkZXJ7d2lkdGg6NDJweDtoZWlnaHQ6NDJweDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTt0b3A6NTAlO21hcmdpbi1sZWZ0Oi0yMXB4O21hcmdpbi10b3A6LTIxcHg7ei1pbmRleDoxMDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlOy1tcy10cmFuc2Zvcm0tb3JpZ2luOjUwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJTstd2Via2l0LWFuaW1hdGlvbjpzd2lwZXItcHJlbG9hZGVyLXNwaW4gMXMgc3RlcHMoMTIsZW5kKSBpbmZpbml0ZTthbmltYXRpb246c3dpcGVyLXByZWxvYWRlci1zcGluIDFzIHN0ZXBzKDEyLGVuZCkgaW5maW5pdGV9LnN3aXBlci1sYXp5LXByZWxvYWRlcjphZnRlcntkaXNwbGF5OmJsb2NrO2NvbnRlbnQ6Jyc7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLWltYWdlOnVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHZpZXdCb3glM0QnMCUyMDAlMjAxMjAlMjAxMjAnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHhtbG5zJTNBeGxpbmslM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYxOTk5JTJGeGxpbmsnJTNFJTNDZGVmcyUzRSUzQ2xpbmUlMjBpZCUzRCdsJyUyMHgxJTNEJzYwJyUyMHgyJTNEJzYwJyUyMHkxJTNEJzcnJTIweTIlM0QnMjcnJTIwc3Ryb2tlJTNEJyUyMzZjNmM2YyclMjBzdHJva2Utd2lkdGglM0QnMTEnJTIwc3Ryb2tlLWxpbmVjYXAlM0Qncm91bmQnJTJGJTNFJTNDJTJGZGVmcyUzRSUzQ2clM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSg2MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoOTAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDEyMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMTUwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMzcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgxODAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy40NiclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDIxMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjU2JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMjQwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNjYnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgyNzAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy43NSclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjg1JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMzMwJTIwNjAlMkM2MCknJTJGJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRVwiKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJTtiYWNrZ3JvdW5kLXNpemU6MTAwJTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXR9LnN3aXBlci1sYXp5LXByZWxvYWRlci13aGl0ZTphZnRlcntiYWNrZ3JvdW5kLWltYWdlOnVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHZpZXdCb3glM0QnMCUyMDAlMjAxMjAlMjAxMjAnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHhtbG5zJTNBeGxpbmslM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYxOTk5JTJGeGxpbmsnJTNFJTNDZGVmcyUzRSUzQ2xpbmUlMjBpZCUzRCdsJyUyMHgxJTNEJzYwJyUyMHgyJTNEJzYwJyUyMHkxJTNEJzcnJTIweTIlM0QnMjcnJTIwc3Ryb2tlJTNEJyUyM2ZmZiclMjBzdHJva2Utd2lkdGglM0QnMTEnJTIwc3Ryb2tlLWxpbmVjYXAlM0Qncm91bmQnJTJGJTNFJTNDJTJGZGVmcyUzRSUzQ2clM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSg2MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoOTAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDEyMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMTUwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMzcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgxODAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy40NiclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDIxMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjU2JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMjQwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNjYnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgyNzAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy43NSclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjg1JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMzMwJTIwNjAlMkM2MCknJTJGJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRVwiKX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dpcGVyLXByZWxvYWRlci1zcGluezEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIHN3aXBlci1wcmVsb2FkZXItc3BpbnsxMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19LnN3aXBlci1jb250YWluZXIgLnN3aXBlci1ub3RpZmljYXRpb257cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowO3otaW5kZXg6LTEwMDB9LnN3aXBlci1jb250YWluZXItZmFkZS5zd2lwZXItY29udGFpbmVyLWZyZWUtbW9kZSAuc3dpcGVyLXNsaWRley13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7LW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9LnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmU7LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHk7LW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5O3RyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eX0uc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZXtwb2ludGVyLWV2ZW50czpub25lfS5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZS1hY3RpdmUsLnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZXtwb2ludGVyLWV2ZW50czphdXRvfS5zd2lwZXItY29udGFpbmVyLWN1YmV7b3ZlcmZsb3c6dmlzaWJsZX0uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGV7cG9pbnRlci1ldmVudHM6bm9uZTstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO3otaW5kZXg6MTt2aXNpYmlsaXR5OmhpZGRlbjstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MCAwOy1tcy10cmFuc2Zvcm0tb3JpZ2luOjAgMDt0cmFuc2Zvcm0tb3JpZ2luOjAgMDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmV9LnN3aXBlci1jb250YWluZXItY3ViZS5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLXNsaWRley13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjoxMDAlIDA7LW1zLXRyYW5zZm9ybS1vcmlnaW46MTAwJSAwO3RyYW5zZm9ybS1vcmlnaW46MTAwJSAwfS5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUsLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZXtwb2ludGVyLWV2ZW50czphdXRvfS5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUsLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLW5leHQsLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLW5leHQrLnN3aXBlci1zbGlkZSwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtcHJldntwb2ludGVyLWV2ZW50czphdXRvO3Zpc2liaWxpdHk6dmlzaWJsZX0uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHt6LWluZGV4OjA7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbn0uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItY3ViZS1zaGFkb3d7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO2JvdHRvbTowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZDojMDAwO29wYWNpdHk6LjY7LXdlYmtpdC1maWx0ZXI6Ymx1cig1MHB4KTtmaWx0ZXI6Ymx1cig1MHB4KTt6LWluZGV4OjB9LnN3aXBlci1jb250YWluZXItZmxpcHtvdmVyZmxvdzp2aXNpYmxlfS5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZXtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47ei1pbmRleDoxfS5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmV9LnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLWFjdGl2ZSwuc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZle3BvaW50ZXItZXZlbnRzOmF1dG99LnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LC5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3B7ei1pbmRleDowOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW59LnN3aXBlci1jb250YWluZXItY292ZXJmbG93IC5zd2lwZXItd3JhcHBlcnstbXMtcGVyc3BlY3RpdmU6MTIwMHB4fSIsIkBpbXBvcnQgJ35zd2lwZXIvZGlzdC9jc3Mvc3dpcGVyLm1pbi5jc3MnO1xuLmhlYWRlcntcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tZW51e1xuICBkaXNwbGF5OiBub25lO1xufVxuLnJvdXRlci1jb250ZW50e1xuICBkaXNwbGF5OiBibG9jaztcblxuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogYXV0bztcblxuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuZm9vdGVye1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiIsIkBpbXBvcnQgJ35zd2lwZXIvZGlzdC9jc3Mvc3dpcGVyLm1pbi5jc3MnO1xuLmhlYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucm91dGVyLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuZm9vdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ngEclaireComingSoon';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ec-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_fullpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-fullpage */ "./node_modules/ngx-fullpage/ngx-fullpage.js");
/* harmony import */ var ngx_fullpage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_fullpage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mousetrap */ "./node_modules/mousetrap/mousetrap.js");
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ "./node_modules/@ks89/angular-modal-gallery/esm5/ks89-angular-modal-gallery.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _views_views_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/views.module */ "./src/app/views/views.module.ts");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Import  "Angular Modules"
 *
 */


/**
 *  Import "vendors"
 */






/**
 *  Import "modules"
 *
 */



/**
 *  Import "components"
 */

var DEFAULT_SWIPER_CONFIG = {
    observer: true,
    direction: 'horizontal',
    threshold: 50,
    spaceBetween: 5,
    slidesPerView: 1,
    centeredSlides: true
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            ],
            imports: [
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SwiperModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _views_views_module__WEBPACK_IMPORTED_MODULE_9__["ViewsModule"],
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_10__["RoutingModule"],
                _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_5__["ModalGalleryModule"].forRoot(),
                ngx_fullpage__WEBPACK_IMPORTED_MODULE_2__["MnFullpageModule"].forRoot()
            ],
            providers: [
                {
                    provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SWIPER_CONFIG"],
                    useValue: DEFAULT_SWIPER_CONFIG
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _views_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../views/notfound/notfound.component */ "./src/app/views/notfound/notfound.component.ts");
/* harmony import */ var _views_comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../views/comingsoon/comingsoon.component */ "./src/app/views/comingsoon/comingsoon.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _views_comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_3__["ComingsoonComponent"]
    },
    {
        path: 'comingsoon',
        component: _views_comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_3__["ComingsoonComponent"]
    },
    {
        path: 'not-found',
        component: _views_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_2__["NotfoundComponent"]
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-footer-wrapper\">\r\n\r\n  <h3>ESCRIBENOS UN MENSAJE</h3>\r\n  <h2>contacto@eclaire.co</h2>\r\n  <ul class=\"contact\">\r\n    <li class=\"cellphone\">300-123-4567</li>\r\n    <li class=\"phone\">8057100</li>\r\n    <li class=\"address\">calle 23 #7 - 1</li>\r\n    <br>\r\n    <br>\r\n    <li class=\"city\">Bogotá, Colombia</li>\r\n    <br>\r\n    <br>\r\n    <li class=\"instagram\"><img src=\"../../../assets/images/footer/inst.png\" alt=\"Siguenos en nuestas redes. Facebook\"></li>\r\n    <li class=\"twitter\"><img src=\"../../../../assets/images/footer/twitter.png\" alt=\"Siguenos en nuestas redes. Facebook\"></li>\r\n    <li class=\"facebook\"><img src=\"../../../../assets/images/footer/facebook.png\" alt=\"Siguenos en nuestas redes. Facebook\"></li>\r\n  </ul>\r\n  <h4>\r\n    COPYRIGHT © 2018 ÉCLAIRE .TODOS LOS DERECHOS RESERVADOS. SUJETO A TERMINOS Y CONDICIONES DE L A MARCA.\r\n  </h4>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.less":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-footer-wrapper {\n  font-family: Brandon-Light !important;\n  font-family: \"Helvetica-Neue\", \"Helvetica\", Arial, sans-serif !important;\n  text-align: center;\n  display: block;\n  background-color: #5e606c;\n  width: 100vw;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  box-sizing: border-box;\n  font-size: 0.65em;\n  padding: 2vw;\n}\n.section-footer-wrapper h3 {\n  color: #CEA07F;\n  font-size: 1.5em;\n}\n.section-footer-wrapper h2 {\n  color: #CEA07F;\n  font-size: 2.5em;\n}\n.section-footer-wrapper h4 {\n  color: #FFF;\n  font-size: 1em;\n}\n.section-footer-wrapper .contact {\n  display: block;\n  color: #FFF;\n  font-size: 1.15em;\n  padding: 1em 0em;\n}\n.section-footer-wrapper .contact li {\n  display: inline;\n}\n.section-footer-wrapper .contact li:after {\n  content: \"|\";\n  color: #CEA07F;\n  font-family: \"font-bold\";\n  padding-left: 0.5em;\n  padding-right: 1.25em;\n}\n.section-footer-wrapper .contact li:last-child:after,\n.section-footer-wrapper .contact li.address:after,\n.section-footer-wrapper .contact li.city:after {\n  content: \"\";\n  font-family: \"font-bold\";\n  padding-left: 0em;\n  padding-right: 0em;\n}\n.section-footer-wrapper .contact li img {\n  height: 1em;\n  position: relative;\n  top: 0.25em;\n}\n.section-footer-wrapper br {\n  display: block;\n}\n@media screen and (min-width: 600px) {\n  .section-footer-wrapper {\n    font-family: Brandon-Light !important;\n    font-family: \"Helvetica-Neue\", \"Helvetica\", Arial, sans-serif !important;\n    text-align: center;\n    display: block;\n    background-color: #5e606c;\n    width: 100vw;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    box-sizing: border-box;\n    padding: 2vw;\n    font-size: 2em;\n  }\n  .section-footer-wrapper h3 {\n    color: #CEA07F;\n    font-size: 0.75em;\n  }\n  .section-footer-wrapper h2 {\n    color: #CEA07F;\n    font-size: 1.25em;\n  }\n  .section-footer-wrapper h4 {\n    color: #FFF;\n    font-size: 0.5em;\n  }\n  .section-footer-wrapper .contact {\n    display: block;\n    color: #FFF;\n    font-size: 0.5em;\n    padding: 1em 0em;\n  }\n  .section-footer-wrapper .contact li {\n    display: inline;\n  }\n  .section-footer-wrapper .contact li:after {\n    content: \"|\";\n    color: #CEA07F;\n    font-family: \"font-bold\";\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n  }\n  .section-footer-wrapper .contact li:last-child:after {\n    content: \"\";\n    font-family: \"font-bold\";\n    padding-left: 0em;\n    padding-right: 0em;\n  }\n  .section-footer-wrapper .contact li img {\n    height: 1em;\n    position: relative;\n    top: 0.25em;\n  }\n  .section-footer-wrapper br {\n    display: none;\n  }\n  .section-footer-wrapper .contact li.address:after,\n  .section-footer-wrapper .contact li.city:after {\n    content: \"|\";\n    font-family: \"font-bold\";\n    padding-left: 0.5em;\n    padding-right: 1.25em;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9DOi9Vc2Vycy93YWxsYS9Eb2N1bWVudHMvR2l0SHViL0VjbGFpcmUvZWNsYWlyZS1jb21pbmdzb29uL25nRWNsYWlyZUNvbWluZ1Nvb24vc3JjL2FwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtFQUNBLHlFQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSx5QkFBQTtFQUFBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7Q0NDRDtBREVEO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0NDQUg7QURFRDtFQUNFLGVBQUE7RUFDQSxpQkFBQTtDQ0FEO0FERUQ7RUFDRSxZQUFBO0VBQ0EsZUFBQTtDQ0FEO0FER0Q7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7Q0NEQztBRElEO0VBQ0MsZ0JBQUE7Q0NGQTtBREtEO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7Q0NIQztBREtEOzs7RUFJRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNGLG1CQUFBO0NDSkM7QURPRDtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7Q0NMRDtBRFNEO0VBQ0UsZUFBQTtDQ1BEO0FEV0Q7RUFFRTtJQUNFLHNDQUFBO0lBQ0EseUVBQUE7SUFFQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSwwQkFBQTtJQUNBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLHlCQUFBO0lBQUEsb0JBQUE7SUFDQSx1QkFBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0dDWEQ7RURjRDtJQUNJLGVBQUE7SUFDQSxrQkFBQTtHQ1pIO0VEY0Q7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7R0NaRDtFRGNEO0lBQ0UsWUFBQTtJQUNBLGlCQUFBO0dDWkQ7RURlRDtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtHQ2JDO0VEZ0JEO0lBQ0MsZ0JBQUE7R0NkQTtFRGlCRDtJQUNBLGFBQUE7SUFDQSxlQUFBO0lBQ0EseUJBQUE7SUFDQSxvQkFBQTtJQUNBLHFCQUFBO0dDZkM7RURpQkQ7SUFDRSxZQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNGLG1CQUFBO0dDZkM7RURrQkQ7SUFDRSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0dDaEJEO0VEbUJEO0lBQ0UsY0FBQTtHQ2pCRDtFRHFCSDs7SUFHRSxhQUFBO0lBQ0EseUJBQUE7SUFDQSxvQkFBQTtJQUNBLHNCQUFBO0dDcEJDO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWZvb3Rlci13cmFwcGVye1xuICBmb250LWZhbWlseTogQnJhbmRvbi1MaWdodCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EtTmV1ZVwiLCBcIkhlbHZldGljYVwiLCBBcmlhbCwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU2MDZjO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMC42NWVtO1xuICBwYWRkaW5nOiAydnc7XG59XG5cbi5zZWN0aW9uLWZvb3Rlci13cmFwcGVyIGgze1xuICAgIGNvbG9yOiNDRUEwN0Y7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbn1cbi5zZWN0aW9uLWZvb3Rlci13cmFwcGVyIGgye1xuICBjb2xvcjojQ0VBMDdGO1xuICBmb250LXNpemU6Mi41ZW07XG59XG4uc2VjdGlvbi1mb290ZXItd3JhcHBlciBoNHtcbiAgY29sb3I6I0ZGRjtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5zZWN0aW9uLWZvb3Rlci13cmFwcGVyIC5jb250YWN0e1xuZGlzcGxheTogYmxvY2s7XG5jb2xvcjojRkZGO1xuZm9udC1zaXplOiAxLjE1ZW07XG5wYWRkaW5nOiAxZW0gMGVtO1xufVxuXG4uc2VjdGlvbi1mb290ZXItd3JhcHBlciAuY29udGFjdCBsaXtcbiBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5zZWN0aW9uLWZvb3Rlci13cmFwcGVyIC5jb250YWN0IGxpOmFmdGVye1xuY29udGVudDpcInxcIjtcbmNvbG9yOiNDRUEwN0Y7XG5mb250LWZhbWlseTogXCJmb250LWJvbGRcIjtcbnBhZGRpbmctbGVmdDowLjVlbTtcbnBhZGRpbmctcmlnaHQ6IDEuMjVlbTtcbn1cbi5zZWN0aW9uLWZvb3Rlci13cmFwcGVyIC5jb250YWN0IGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXG4uc2VjdGlvbi1mb290ZXItd3JhcHBlciAuY29udGFjdCBsaS5hZGRyZXNzOmFmdGVyLFxuLnNlY3Rpb24tZm9vdGVyLXdyYXBwZXIgLmNvbnRhY3QgbGkuY2l0eTphZnRlcixcbntcbiAgY29udGVudDpcIlwiO1xuICBmb250LWZhbWlseTogXCJmb250LWJvbGRcIjtcbiAgcGFkZGluZy1sZWZ0OjBlbTtcbnBhZGRpbmctcmlnaHQ6IDBlbTtcbn1cblxuLnNlY3Rpb24tZm9vdGVyLXdyYXBwZXIgLmNvbnRhY3QgbGkgaW1ne1xuICBoZWlnaHQ6IDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDAuMjVlbTtcbn1cblxuXG4uc2VjdGlvbi1mb290ZXItd3JhcHBlciBicntcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcblxuICAuc2VjdGlvbi1mb290ZXItd3JhcHBlcntcbiAgICBmb250LWZhbWlseTogQnJhbmRvbi1MaWdodCAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYS1OZXVlXCIsIFwiSGVsdmV0aWNhXCIsIEFyaWFsLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlNjA2YztcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDJ2dztcbiAgICBmb250LXNpemU6IDJlbTtcbiAgfVxuXG4gIC5zZWN0aW9uLWZvb3Rlci13cmFwcGVyIGgze1xuICAgICAgY29sb3I6I0NFQTA3RjtcbiAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICB9XG4gIC5zZWN0aW9uLWZvb3Rlci13cmFwcGVyIGgye1xuICAgIGNvbG9yOiNDRUEwN0Y7XG4gICAgZm9udC1zaXplOiAxLjI1ZW07XG4gIH1cbiAgLnNlY3Rpb24tZm9vdGVyLXdyYXBwZXIgaDR7XG4gICAgY29sb3I6I0ZGRjtcbiAgICBmb250LXNpemU6IDAuNWVtO1xuICB9XG5cbiAgLnNlY3Rpb24tZm9vdGVyLXdyYXBwZXIgLmNvbnRhY3R7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjojRkZGO1xuICBmb250LXNpemU6IDAuNWVtO1xuICBwYWRkaW5nOiAxZW0gMGVtO1xuICB9XG5cbiAgLnNlY3Rpb24tZm9vdGVyLXdyYXBwZXIgLmNvbnRhY3QgbGl7XG4gICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cblxuICAuc2VjdGlvbi1mb290ZXItd3JhcHBlciAuY29udGFjdCBsaTphZnRlcntcbiAgY29udGVudDpcInxcIjtcbiAgY29sb3I6I0NFQTA3RjtcbiAgZm9udC1mYW1pbHk6IFwiZm9udC1ib2xkXCI7XG4gIHBhZGRpbmctbGVmdDowLjVlbTtcbiAgcGFkZGluZy1yaWdodDogMC41ZW07XG4gIH1cbiAgLnNlY3Rpb24tZm9vdGVyLXdyYXBwZXIgLmNvbnRhY3QgbGk6bGFzdC1jaGlsZDphZnRlcntcbiAgICBjb250ZW50OlwiXCI7XG4gICAgZm9udC1mYW1pbHk6IFwiZm9udC1ib2xkXCI7XG4gICAgcGFkZGluZy1sZWZ0OjBlbTtcbiAgcGFkZGluZy1yaWdodDogMGVtO1xuICB9XG5cbiAgLnNlY3Rpb24tZm9vdGVyLXdyYXBwZXIgLmNvbnRhY3QgbGkgaW1ne1xuICAgIGhlaWdodDogMWVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDAuMjVlbTtcbiAgfVxuXG4gIC5zZWN0aW9uLWZvb3Rlci13cmFwcGVyIGJye1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuXG4uc2VjdGlvbi1mb290ZXItd3JhcHBlciAuY29udGFjdCBsaS5hZGRyZXNzOmFmdGVyLFxuLnNlY3Rpb24tZm9vdGVyLXdyYXBwZXIgLmNvbnRhY3QgbGkuY2l0eTphZnRlcixcbntcbiAgY29udGVudDpcInxcIjtcbiAgZm9udC1mYW1pbHk6IFwiZm9udC1ib2xkXCI7XG4gIHBhZGRpbmctbGVmdDowLjVlbTtcbiAgcGFkZGluZy1yaWdodDogMS4yNWVtO1xufVxuXG5cbn1cbiIsIi5zZWN0aW9uLWZvb3Rlci13cmFwcGVyIHtcbiAgZm9udC1mYW1pbHk6IEJyYW5kb24tTGlnaHQgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhLU5ldWVcIiwgXCJIZWx2ZXRpY2FcIiwgQXJpYWwsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlNjA2YztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDAuNjVlbTtcbiAgcGFkZGluZzogMnZ3O1xufVxuLnNlY3Rpb24tZm9vdGVyLXdyYXBwZXIgaDMge1xuICBjb2xvcjogI0NFQTA3RjtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbi5zZWN0aW9uLWZvb3Rlci13cmFwcGVyIGgyIHtcbiAgY29sb3I6ICNDRUEwN0Y7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG59XG4uc2VjdGlvbi1mb290ZXItd3JhcHBlciBoNCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5zZWN0aW9uLWZvb3Rlci13cmFwcGVyIC5jb250YWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDEuMTVlbTtcbiAgcGFkZGluZzogMWVtIDBlbTtcbn1cbi5zZWN0aW9uLWZvb3Rlci13cmFwcGVyIC5jb250YWN0IGxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLnNlY3Rpb24tZm9vdGVyLXdyYXBwZXIgLmNvbnRhY3QgbGk6YWZ0ZXIge1xuICBjb250ZW50OiBcInxcIjtcbiAgY29sb3I6ICNDRUEwN0Y7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQtYm9sZFwiO1xuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjI1ZW07XG59XG4uc2VjdGlvbi1mb290ZXItd3JhcHBlciAuY29udGFjdCBsaTpsYXN0LWNoaWxkOmFmdGVyLFxuLnNlY3Rpb24tZm9vdGVyLXdyYXBwZXIgLmNvbnRhY3QgbGkuYWRkcmVzczphZnRlcixcbi5zZWN0aW9uLWZvb3Rlci13cmFwcGVyIC5jb250YWN0IGxpLmNpdHk6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBmb250LWZhbWlseTogXCJmb250LWJvbGRcIjtcbiAgcGFkZGluZy1sZWZ0OiAwZW07XG4gIHBhZGRpbmctcmlnaHQ6IDBlbTtcbn1cbi5zZWN0aW9uLWZvb3Rlci13cmFwcGVyIC5jb250YWN0IGxpIGltZyB7XG4gIGhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMC4yNWVtO1xufVxuLnNlY3Rpb24tZm9vdGVyLXdyYXBwZXIgYnIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5zZWN0aW9uLWZvb3Rlci13cmFwcGVyIHtcbiAgICBmb250LWZhbWlseTogQnJhbmRvbi1MaWdodCAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYS1OZXVlXCIsIFwiSGVsdmV0aWNhXCIsIEFyaWFsLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZTYwNmM7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAydnc7XG4gICAgZm9udC1zaXplOiAyZW07XG4gIH1cbiAgLnNlY3Rpb24tZm9vdGVyLXdyYXBwZXIgaDMge1xuICAgIGNvbG9yOiAjQ0VBMDdGO1xuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICB9XG4gIC5zZWN0aW9uLWZvb3Rlci13cmFwcGVyIGgyIHtcbiAgICBjb2xvcjogI0NFQTA3RjtcbiAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgfVxuICAuc2VjdGlvbi1mb290ZXItd3JhcHBlciBoNCB7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udC1zaXplOiAwLjVlbTtcbiAgfVxuICAuc2VjdGlvbi1mb290ZXItd3JhcHBlciAuY29udGFjdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICBwYWRkaW5nOiAxZW0gMGVtO1xuICB9XG4gIC5zZWN0aW9uLWZvb3Rlci13cmFwcGVyIC5jb250YWN0IGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbiAgLnNlY3Rpb24tZm9vdGVyLXdyYXBwZXIgLmNvbnRhY3QgbGk6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwifFwiO1xuICAgIGNvbG9yOiAjQ0VBMDdGO1xuICAgIGZvbnQtZmFtaWx5OiBcImZvbnQtYm9sZFwiO1xuICAgIHBhZGRpbmctbGVmdDogMC41ZW07XG4gICAgcGFkZGluZy1yaWdodDogMC41ZW07XG4gIH1cbiAgLnNlY3Rpb24tZm9vdGVyLXdyYXBwZXIgLmNvbnRhY3QgbGk6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBmb250LWZhbWlseTogXCJmb250LWJvbGRcIjtcbiAgICBwYWRkaW5nLWxlZnQ6IDBlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwZW07XG4gIH1cbiAgLnNlY3Rpb24tZm9vdGVyLXdyYXBwZXIgLmNvbnRhY3QgbGkgaW1nIHtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwLjI1ZW07XG4gIH1cbiAgLnNlY3Rpb24tZm9vdGVyLXdyYXBwZXIgYnIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnNlY3Rpb24tZm9vdGVyLXdyYXBwZXIgLmNvbnRhY3QgbGkuYWRkcmVzczphZnRlcixcbiAgLnNlY3Rpb24tZm9vdGVyLXdyYXBwZXIgLmNvbnRhY3QgbGkuY2l0eTphZnRlciB7XG4gICAgY29udGVudDogXCJ8XCI7XG4gICAgZm9udC1mYW1pbHk6IFwiZm9udC1ib2xkXCI7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjI1ZW07XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ec-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.less */ "./src/app/shared/footer/footer.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  header works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.less":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ec-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.less */ "./src/app/shared/header/header.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/menu/menu.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/menu/menu.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  menu works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shared/menu/menu.component.less":
/*!*************************************************!*\
  !*** ./src/app/shared/menu/menu.component.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tZW51L21lbnUuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/menu/menu.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ec-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/shared/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.less */ "./src/app/shared/menu/menu.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/shared/modal-gallery/modal-gallery.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/modal-gallery/modal-gallery.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-gallery\" *ngIf=\"HOVER\">\r\n\r\n\r\n  <div class=\"gallery-buttons\">\r\n\r\n    <div class=\"button-close\" (click) = \"closeModal()\">\r\n        <i class=\"fas fa-times-circle\"></i>\r\n    </div>\r\n\r\n    <div class=\"button-prev\">\r\n        <i class=\"fas fa-angle-left\" (click) = \"prevImgSrc()\"></i>\r\n    </div>\r\n    <div class=\"button-next\">\r\n        <i class=\"fas fa-angle-right\" (click) = \"nextImgSrc()\"></i>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"gallery-content\">\r\n    <img [src]=\"UI.imgSrc\">\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/modal-gallery/modal-gallery.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/shared/modal-gallery/modal-gallery.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-gallery {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.9);\n  z-index: 100;\n}\n.gallery-content {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0px;\n  width: 100vw;\n  height: 100vh;\n}\n.gallery-content img {\n  width: 80vw;\n  height: 80vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.button-close {\n  color: white;\n  position: fixed;\n  top: calc(10vh - 1em);\n  right: calc(10vw - 1.6em);\n  z-index: 200;\n}\n.button-close .fas {\n  font-size: 1.75em;\n  background-color: black;\n  border-radius: 127%;\n}\n.button-next,\n.button-prev {\n  color: white;\n  position: fixed;\n  top: calc(50vh - 1em);\n  z-index: 200;\n}\n.button-next .fas,\n.button-prev .fas {\n  font-size: 1.75em;\n}\n.button-next {\n  right: calc(10vw + 1em);\n  z-index: 200;\n  color: rgba(255, 255, 255, 0.5);\n}\n.button-prev {\n  left: calc(10vw + 1em);\n  z-index: 200;\n  color: rgba(255, 255, 255, 0.5);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZGFsLWdhbGxlcnkvQzovVXNlcnMvd2FsbGEvRG9jdW1lbnRzL0dpdEh1Yi9FY2xhaXJlL2VjbGFpcmUtY29taW5nc29vbi9uZ0VjbGFpcmVDb21pbmdTb29uL3NyYy9hcHAvc2hhcmVkL21vZGFsLWdhbGxlcnkvbW9kYWwtZ2FsbGVyeS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc2hhcmVkL21vZGFsLWdhbGxlcnkvbW9kYWwtZ2FsbGVyeS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLHFDQUFBO0VBRUEsYUFBQTtDQ0ZEO0FETUQ7RUFJSSxjQUFBO0VBR0EsdUJBQUE7RUFHQSxnQkFBQTtFQUdBLHdCQUFBO0VBR0Esc0JBQUE7RUFHQSxvQkFBQTtFQUVBLGdCQUFBO0VBRUEsU0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0NDUkg7QURsQkQ7RUE2Qk0sWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtLQUFBLGtCQUFBO0VBQ0EsMkJBQUE7S0FBQSx3QkFBQTtDQ1JMO0FEY0Q7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtDQ1pEO0FET0Q7RUFPRyxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7Q0NYRjtBRGVEOztFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtDQ1pEO0FEUUQ7O0VBTUcsa0JBQUE7Q0NWRjtBRGNEO0VBQ0Usd0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7Q0NaRDtBRGVEO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7Q0NiRCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2RhbC1nYWxsZXJ5L21vZGFsLWdhbGxlcnkuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtZ2FsbGVyeXtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuXG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7XG5cbiAgei1pbmRleDogMTAwO1xufVxuXG5cbi5nYWxsZXJ5LWNvbnRlbnR7XG5cbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgICB0b3A6IDBweDtcblxuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgaW1ne1xuICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgIH1cbn1cblxuXG5cbi5idXR0b24tY2xvc2V7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IGNhbGMoMTB2aCAtIDFlbSk7XG4gIHJpZ2h0OiBjYWxjKDEwdncgLSAxLjZlbSk7XG4gIHotaW5kZXg6IDIwMDtcbiAgLmZhc3tcbiAgIGZvbnQtc2l6ZTogMS43NWVtO1xuICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICBib3JkZXItcmFkaXVzOiAxMjclO1xuICB9XG59XG5cbi5idXR0b24tbmV4dCwuYnV0dG9uLXByZXZ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IGNhbGMoNTB2aCAtIDFlbSk7XG4gIHotaW5kZXg6IDIwMDtcbiAgLmZhc3tcbiAgIGZvbnQtc2l6ZTogMS43NWVtXG4gIH1cbn1cblxuLmJ1dHRvbi1uZXh0e1xuICByaWdodDogY2FsYygxMHZ3ICsgMWVtKTtcbiAgei1pbmRleDogMjAwO1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xufVxuXG4uYnV0dG9uLXByZXZ7XG4gIGxlZnQ6IGNhbGMoMTB2dyArIDFlbSk7XG4gIHotaW5kZXg6IDIwMDtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbn1cbiIsIi5tb2RhbC1nYWxsZXJ5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgei1pbmRleDogMTAwO1xufVxuLmdhbGxlcnktY29udGVudCB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24tY29udGVudDogY2VudGVyO1xuICAtbXMtZmxleC1saW5lLXBhY2s6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5nYWxsZXJ5LWNvbnRlbnQgaW1nIHtcbiAgd2lkdGg6IDgwdnc7XG4gIGhlaWdodDogODB2aDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xufVxuLmJ1dHRvbi1jbG9zZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IGNhbGMoMTB2aCAtIDFlbSk7XG4gIHJpZ2h0OiBjYWxjKDEwdncgLSAxLjZlbSk7XG4gIHotaW5kZXg6IDIwMDtcbn1cbi5idXR0b24tY2xvc2UgLmZhcyB7XG4gIGZvbnQtc2l6ZTogMS43NWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTI3JTtcbn1cbi5idXR0b24tbmV4dCxcbi5idXR0b24tcHJldiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IGNhbGMoNTB2aCAtIDFlbSk7XG4gIHotaW5kZXg6IDIwMDtcbn1cbi5idXR0b24tbmV4dCAuZmFzLFxuLmJ1dHRvbi1wcmV2IC5mYXMge1xuICBmb250LXNpemU6IDEuNzVlbTtcbn1cbi5idXR0b24tbmV4dCB7XG4gIHJpZ2h0OiBjYWxjKDEwdncgKyAxZW0pO1xuICB6LWluZGV4OiAyMDA7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG4uYnV0dG9uLXByZXYge1xuICBsZWZ0OiBjYWxjKDEwdncgKyAxZW0pO1xuICB6LWluZGV4OiAyMDA7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/modal-gallery/modal-gallery.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/modal-gallery/modal-gallery.component.ts ***!
  \*****************************************************************/
/*! exports provided: ModalGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalGalleryComponent", function() { return ModalGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalGalleryComponent = /** @class */ (function () {
    function ModalGalleryComponent() {
        this.UX = {
            HOVER: true
        };
        this.UI = {
            imgList: [],
            imgCount: 0,
            imgSrc: "../../../assets/images/gallery/img0.jpg"
        };
        this.closeModalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalGalleryComponent.prototype.ngOnInit = function () {
        this.UI.imgList = this.tiles.filter(function (tile) {
            return tile["src"];
        });
    };
    ModalGalleryComponent.prototype.ngOnChanges = function () {
        this.UI.imgCount = this.kImg + 0;
    };
    ModalGalleryComponent.prototype.nextImgSrc = function () {
        if (this.UI.imgCount < (this.UI.imgList.length - 1)) {
            this.UI.imgCount = this.UI.imgCount + 1;
        }
        else {
            this.UI.imgCount = 0;
        }
        this.UI.imgSrc = this.UI.imgList[this.UI.imgCount].src;
        console.log(this.UI.imgCount);
    };
    ModalGalleryComponent.prototype.prevImgSrc = function () {
        if (this.UI.imgCount > 0) {
            this.UI.imgCount = this.UI.imgCount - 1;
        }
        else {
            this.UI.imgCount = this.UI.imgList.length - 1;
        }
        this.UI.imgSrc = this.UI.imgList[this.UI.imgCount].src;
        console.log(this.UI.imgCount);
    };
    ModalGalleryComponent.prototype.closeModal = function () {
        this.closeModalEvent.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tiles'),
        __metadata("design:type", Array)
    ], ModalGalleryComponent.prototype, "tiles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('HOVER'),
        __metadata("design:type", Boolean)
    ], ModalGalleryComponent.prototype, "HOVER", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('kImg'),
        __metadata("design:type", Number)
    ], ModalGalleryComponent.prototype, "kImg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalGalleryComponent.prototype, "closeModalEvent", void 0);
    ModalGalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ec-modal-gallery',
            template: __webpack_require__(/*! ./modal-gallery.component.html */ "./src/app/shared/modal-gallery/modal-gallery.component.html"),
            styles: [__webpack_require__(/*! ./modal-gallery.component.less */ "./src/app/shared/modal-gallery/modal-gallery.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalGalleryComponent);
    return ModalGalleryComponent;
}());



/***/ }),

/***/ "./src/app/shared/pic/pic.component.html":
/*!***********************************************!*\
  !*** ./src/app/shared/pic/pic.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img [src]=\"source\" (load)=\"nextResolution()\">\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/pic/pic.component.less":
/*!***********************************************!*\
  !*** ./src/app/shared/pic/pic.component.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BpYy9DOi9Vc2Vycy93YWxsYS9Eb2N1bWVudHMvR2l0SHViL0VjbGFpcmUvZWNsYWlyZS1jb21pbmdzb29uL25nRWNsYWlyZUNvbWluZ1Nvb24vc3JjL2FwcC9zaGFyZWQvcGljL3BpYy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc2hhcmVkL3BpYy9waWMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtLQUFBLGtCQUFBO0NDQ0QiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcGljL3BpYy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuIiwiaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/pic/pic.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pic/pic.component.ts ***!
  \*********************************************/
/*! exports provided: PicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicComponent", function() { return PicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PicComponent = /** @class */ (function () {
    function PicComponent() {
    }
    PicComponent.prototype.ngOnInit = function () {
        this.state = 'low';
        this.source = this.srcLow;
    };
    PicComponent.prototype.nextResolution = function () {
        if (this.state == 'low') {
            this.state = 'mid';
            this.source = this.srcMid;
        }
        else {
            if (this.state == 'mid') {
                this.state = 'high';
                this.source = this.srcHigh;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(''),
        __metadata("design:type", String)
    ], PicComponent.prototype, "srcLow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(''),
        __metadata("design:type", String)
    ], PicComponent.prototype, "srcMid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(''),
        __metadata("design:type", String)
    ], PicComponent.prototype, "srcHigh", void 0);
    PicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ec-pic',
            template: __webpack_require__(/*! ./pic.component.html */ "./src/app/shared/pic/pic.component.html"),
            styles: [__webpack_require__(/*! ./pic.component.less */ "./src/app/shared/pic/pic.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], PicComponent);
    return PicComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/shared/menu/menu.component.ts");
/* harmony import */ var _pic_pic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pic/pic.component */ "./src/app/shared/pic/pic.component.ts");
/* harmony import */ var _modal_gallery_modal_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-gallery/modal-gallery.component */ "./src/app/shared/modal-gallery/modal-gallery.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _pic_pic_component__WEBPACK_IMPORTED_MODULE_5__["PicComponent"], _modal_gallery_modal_gallery_component__WEBPACK_IMPORTED_MODULE_6__["ModalGalleryComponent"]],
            exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _pic_pic_component__WEBPACK_IMPORTED_MODULE_5__["PicComponent"], _modal_gallery_modal_gallery_component__WEBPACK_IMPORTED_MODULE_6__["ModalGalleryComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/views/comingsoon/comingsoon.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/comingsoon/comingsoon.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vw-section\">\r\n  <div class=\"wrapper\">\r\n\r\n    <div class=\"layer-media\">\r\n      <ec-pic\r\n        [srcLow]= '\" assets/images/cover/cover-compress-vga.jpg\" '\r\n        [srcMid]= '\" assets/images/cover/cover-compress-hd.jpg\" '\r\n        [srcHigh]= '\" assets/images/cover/cover-compress-4k.jpg\" '>\r\n      </ec-pic>\r\n    </div>\r\n\r\n    <div class=\"layer-color\">\r\n    </div>\r\n\r\n    <div class=\"layer-content\">\r\n      <div class=\"logo\">\r\n        <img class=\"logo-title\" src=\"../../../assets/images/logo-text.png\">\r\n        <img class=\"logo-subtitle\"\r\n          src=\"../../../assets/images/logo-subtitle.png\">\r\n      </div>\r\n\r\n      <div class=\"next-button\">\r\n        <img src=\"../../../assets/images/next-button.png\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"vw-section\">\r\n  <div class=\"gallery\">\r\n\r\n    <div *ngFor=\"let tile of tiles;let k = index\" class=\"tile\">\r\n\r\n        <div *ngIf=\"tile.name\" class=\"tile-content\" (click) = \"openModal(k)\">\r\n            <img class=\"icon\" [src] = \"tile.icon\" >\r\n            <hr>\r\n            <h2>{{tile.name}}</h2>\r\n        </div>\r\n        <div *ngIf=\"!tile.name\" class=\"tile-content\" (click) = \"openModal(k)\">\r\n            <img [src]=\"tile.src\">\r\n        </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n<div class=\"vw-section vw-modal\" *ngIf=\"UX.HOVER\">\r\n\r\n    <div class=\"button-close\" (click) = \"UX.HOVER = false\">\r\n        <i class=\"fas fa-times-circle\"></i>\r\n    </div>\r\n\r\n  <swiper [config]=\"config\" [index]=\"index\">\r\n    <div *ngFor=\"let tile of tiles;let k = index\" class=\"tile\">\r\n\r\n      <div class=\"modal-slide\">\r\n        <div *ngIf=\"tile.name\" class=\"tile-content\">\r\n              <img class=\"icon\" [src] = \"tile.icon\" >\r\n              <hr>\r\n              <h2>{{tile.name}}</h2>\r\n        </div>\r\n        <div *ngIf=\"!tile.name\" class=\"tile-content\" >\r\n              <img [src]=\"tile.src\" >\r\n        </div>\r\n      </div>\r\n\r\n      </div>\r\n  </swiper>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/comingsoon/comingsoon.component.less":
/*!************************************************************!*\
  !*** ./src/app/views/comingsoon/comingsoon.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@color-white = #EFEFEF;\n.vw-section {\n  width: 100vw;\n  min-height: 100vh;\n  display: block;\n  background-color: #EFEFEF;\n  background-color: #d4d3d3;\n  color: #6C6C78;\n}\n.vw-section.vw-footer {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: #EFEFEF;\n  color: #6C6C78;\n}\n.layer-media {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  top: 0px;\n}\n.layer-color {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(110, 113, 130, 0.85);\n  position: absolute;\n  top: 0px;\n}\n.layer-content {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  top: 0px;\n  display: -ms-flex;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  -ms-justify-content: center;\n  justify-content: center;\n  -ms-align-content: center;\n  align-content: center;\n  -ms-align-items: center;\n  align-items: center;\n}\n.logo .logo-title {\n  width: 50%;\n  display: block;\n  margin: 0 auto;\n}\n.logo .logo-subtitle {\n  width: 20%;\n  display: block;\n  margin: 0 auto;\n}\n.next-button {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n}\n.next-button img {\n  display: block;\n  width: 35px;\n  margin: 25px auto;\n}\n.gallery {\n  width: 75%;\n  height: 100%;\n  margin: 0 auto;\n  padding-top: 10em;\n  padding-bottom: 10em;\n  display: -ms-flex;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  -ms-justify-content: flex-start;\n  justify-content: flex-start;\n  -ms-align-content: flex-start;\n  align-content: flex-start;\n  -ms-align-items: flex-start;\n  align-items: flex-start;\n}\n.gallery .tile {\n  width: 33.333%;\n  height: 12.5em;\n  box-sizing: border-box;\n  display: block;\n  overflow: hidden;\n  background-color: #EFEFEF;\n  color: #6C6C78;\n  display: -ms-flex;\n  display: flex;\n  flex-direction: columns;\n  flex-wrap: wrap;\n  -ms-justify-content: flex-start;\n  justify-content: flex-start;\n  -ms-align-content: flex-start;\n  align-content: flex-start;\n  -ms-align-items: flex-start;\n  align-items: flex-start;\n}\n.gallery .tile div.tile-content,\n.gallery .tile img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: relative;\n}\n.gallery .tile div.tile-content {\n  display: -ms-flex;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  -ms-justify-content: flex-end;\n  justify-content: flex-end;\n  -ms-align-content: flex-end;\n  align-content: flex-end;\n  -ms-align-items: flex-end;\n  align-items: flex-end;\n}\n.gallery .tile hr {\n  display: block;\n  width: 3.5em;\n  height: 0.25em;\n  margin: 0.25em 0.5em;\n  background-color: #6C6C78;\n}\n.gallery .tile h2 {\n  display: block;\n  text-align: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0.5em;\n  line-height: 100%;\n  text-transform: uppercase;\n}\n.gallery .tile .icon {\n  display: block;\n  width: 3em;\n  height: 3em;\n  margin: 0.25em 0.5em;\n  -o-object-fit: contain;\n     object-fit: contain;\n  -webkit-filter: grayscale(1);\n  filter: grayscale(1);\n}\n::-webkit-scrollbar {\n  width: 0px;\n  /* remove scrollbar space */\n  background: transparent;\n  /* optional: just make scrollbar invisible */\n}\n.vw-modal {\n  display: block;\n  padding: 15% 15%;\n  box-sizing: border-box;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.9);\n  top: 0px;\n  left: 0px;\n  width: 100vw;\n  height: 100vh;\n  z-index: 100000;\n  overflow: hidden;\n}\n.modal-slide {\n  background-color: #efefef;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  margin: 0 auto;\n}\n.modal-slide h2 {\n  display: block;\n  text-align: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0.5em;\n  font-size: 2em;\n  line-height: 100%;\n  text-transform: uppercase;\n}\n.modal-slide .icon {\n  margin: 0 auto;\n  display: block;\n  -webkit-filter: grayscale(1);\n  filter: grayscale(1);\n}\n.button-close {\n  color: white;\n  position: fixed;\n  top: calc(15vw - 2.5em);\n  right: calc(15% - 2.5em);\n  z-index: 200;\n}\n.button-close .fas {\n  font-size: 3.5em;\n  background-color: black;\n  border-radius: 127%;\n}\n@media screen and (max-width: 600px) {\n  .vw-modal {\n    display: block;\n    padding: 2em;\n    box-sizing: border-box;\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.76);\n    top: 0px;\n    left: 0px;\n    width: 100vw;\n    height: 100vh;\n    z-index: 100000;\n    overflow: hidden;\n  }\n  .gallery {\n    width: 100%;\n    margin: 0 auto;\n    padding-top: 0em;\n    padding-bottom: 0em;\n  }\n  .gallery .tile {\n    width: 50%;\n    height: 10em;\n  }\n  .gallery .tile div.tile-content h2 {\n    text-align: right;\n  }\n  .logo .logo-title {\n    width: 80%;\n    display: block;\n    margin: 0 auto;\n  }\n  .logo .logo-subtitle {\n    width: 50%;\n    display: block;\n    margin: 0 auto;\n  }\n  .button-close {\n    color: white;\n    position: fixed;\n    top: 0em;\n    right: 0em;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29taW5nc29vbi9DOi9Vc2Vycy93YWxsYS9Eb2N1bWVudHMvR2l0SHViL0VjbGFpcmUvZWNsYWlyZS1jb21pbmdzb29uL25nRWNsYWlyZUNvbWluZ1Nvb24vc3JjL2Fzc2V0cy9zdHlsZXMvX2NvbG9ycy5sZXNzIiwic3JjL2FwcC92aWV3cy9jb21pbmdzb29uL0M6L1VzZXJzL3dhbGxhL0RvY3VtZW50cy9HaXRIdWIvRWNsYWlyZS9lY2xhaXJlLWNvbWluZ3Nvb24vbmdFY2xhaXJlQ29taW5nU29vbi9zcmMvYXBwL3ZpZXdzL2NvbWluZ3Nvb24vY29taW5nc29vbi5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvdmlld3MvY29taW5nc29vbi9jb21pbmdzb29uLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC92aWV3cy9jb21pbmdzb29uL0M6L1VzZXJzL3dhbGxhL0RvY3VtZW50cy9HaXRIdWIvRWNsYWlyZS9lY2xhaXJlLWNvbWluZ3Nvb24vbmdFY2xhaXJlQ29taW5nU29vbi9zcmMvYXNzZXRzL3N0eWxlcy9fbWl4aW5zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsdUJBQUE7QUNDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtDQ0ZEO0FESUQ7RUFDRSw0QkFBQTtFQUFBLHlCQUFBO0VBQUEsb0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7Q0NGRDtBRE1EO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBRUEsbUJBQUE7RUFDQSxTQUFBO0NDTEQ7QURRRDtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLDRDQUFBO0VBRUEsbUJBQUE7RUFDQSxTQUFBO0NDUkQ7QURVRDtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLG1CQUFBO0VBQ0EsU0FBQTtFRWxDQSxrQkFBQTtFQUNBLGNBQUE7RUFrQkEsdUJBQUE7RUFTQSxrQkFBQTtFQXNEQSw0QkFBQTtFQUNBLHdCQUFBO0VBUUEsMEJBQUE7RUFDQSxzQkFBQTtFQVFBLHdCQUFBO0VBQ0Esb0JBQUE7Q0R6REQ7QURLRDtFQUVJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtDQ0pIO0FEQUQ7RUFPSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7Q0NKSDtBRFVEO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtDQ1JEO0FES0Q7RUFNRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0NDUkQ7QURpQkQ7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUVBLGVBQUE7RUFFQSxrQkFBQTtFQUNBLHFCQUFBO0VFekZGLGtCQUFBO0VBQ0EsY0FBQTtFQWtCQSxvQkFBQTtFQVNBLGdCQUFBO0VBc0RBLGdDQUFBO0VBQ0EsNEJBQUE7RUFRQSw4QkFBQTtFQUNBLDBCQUFBO0VBUUEsNEJBQUE7RUFDQSx3QkFBQTtDRFhEO0FEVEQ7RUFrQk0sZUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFRXpHSixrQkFBQTtFQUNBLGNBQUE7RUFrQkEsd0JBQUE7RUFTQSxnQkFBQTtFQXNEQSxnQ0FBQTtFQUNBLDRCQUFBO0VBUUEsOEJBQUE7RUFDQSwwQkFBQTtFQVFBLDRCQUFBO0VBQ0Esd0JBQUE7Q0RpQkQ7QURyQ0Q7O0VBa0NRLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7S0FBQSxrQkFBQTtFQUNBLG1CQUFBO0NDT1A7QUQ1Q0Q7RUVqRkUsa0JBQUE7RUFDQSxjQUFBO0VBa0JBLHVCQUFBO0VBU0EsZ0JBQUE7RUFzREEsOEJBQUE7RUFDQSwwQkFBQTtFQVFBLDRCQUFBO0VBQ0Esd0JBQUE7RUFRQSwwQkFBQTtFQUNBLHNCQUFBO0NENkNEO0FEakVEO0VBaURRLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7Q0NtQlA7QUR4RUQ7RUF3RFEsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7Q0NtQlA7QURoRkQ7RUFnRVEsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtLQUFBLG9CQUFBO0VBQ0UsNkJBQUE7RUFDQSxxQkFBQTtDQ21CVDtBRFBEO0VBQ0UsV0FBQTtFQ1NBLDRCQUE0QjtFRFI1Qix3QkFBQTtFQ1VBLDZDQUE2QztDQUM5QztBRFJEO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7Q0NVQztBRFJEO0VBRUUsMEJBQUE7RUFLQSxjQUFBO0VBR0EsdUJBQUE7RUFHQSxnQkFBQTtFQUdBLHdCQUFBO0VBR0Esc0JBQUE7RUFHQSxvQkFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBRUEsaUJBQUE7RUFFQSxlQUFBO0NDSUQ7QURHRDtFQUVNLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtDQ0ZMO0FETkQ7RUFXTSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7Q0NGTDtBRE9EO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7Q0NMRDtBREFEO0VBT0csaUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0NDSkY7QUR1Q0Q7RUFDRTtJQUNFLGVBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQkFBQTtJQUNBLHNDQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7R0NyQ0Q7RUR1Q0g7SUFFQSxZQUFBO0lBQ0EsZUFBQTtJQUVBLGlCQUFBO0lBQ0Esb0JBQUE7R0N2Q0c7RURpQ0g7SUFTTSxXQUFBO0lBQ0EsYUFBQTtHQ3ZDSDtFRDZCSDtJQWNJLGtCQUFBO0dDeENEO0VEaURIO0lBRUksV0FBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0dDaEREO0VENENIO0lBT0ksV0FBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0dDaEREO0VEeURIO0lBQ0UsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7R0N2REM7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbWluZ3Nvb24vY29taW5nc29vbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5AY29sb3Itd2hpdGUgPSAjRUZFRkVGO1xuIiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX21peGlucy5sZXNzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzLy9zdHlsZXMvX2NvbG9ycy5sZXNzXCI7XG5cbi52dy1zZWN0aW9ue1xuICB3aWR0aDogMTAwdnc7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogICNFRkVGRUY7XG4gIGJhY2tncm91bmQtY29sb3I6ICAjRUZFRkVGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkM2QzO1xuICBjb2xvcjogIzZDNkM3ODtcbn1cbi52dy1zZWN0aW9uLnZ3LWZvb3RlcntcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogICNFRkVGRUY7XG4gIGNvbG9yOiAjNkM2Qzc4O1xufVxuXG5cbi5sYXllci1tZWRpYXtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuXG59XG4ubGF5ZXItY29sb3J7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgYmFja2dyb3VuZC1jb2xvciA6IHJnYmEoMTEwLCAxMTMsIDEzMCwgMC44NSk7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbn1cbi5sYXllci1jb250ZW50e1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG5cbiAgLmZsZXgtZGlzcGxheShmbGV4KTtcbiAgLmZsZXgtZGlyZWN0aW9uKGNvbHVtbik7XG4gIC5mbGV4LXdyYXAobm93cmFwKTtcbiAgLmp1c3RpZnktY29udGVudChjZW50ZXIpO1xuICAuYWxpZ24tY29udGVudChjZW50ZXIpO1xuICAuYWxpZ24taXRlbXMoY2VudGVyKTtcbiAgO1xufVxuXG5cblxuXG5cbi5sb2dve1xuICAubG9nby10aXRsZXtcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIC5sb2dvLXN1YnRpdGxle1xuICAgIHdpZHRoOiAyMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cblxuXG5cbi5uZXh0LWJ1dHRvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgaW1ne1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDM1cHg7XG4gIG1hcmdpbjogMjVweCBhdXRvO1xuICB9XG59XG5cblxuXG5cblxuXG4uZ2FsbGVyeXtcblxuICAgIHdpZHRoOiA3NSU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICBwYWRkaW5nLXRvcDogMTBlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBlbTtcblxuICAgIC5mbGV4LWRpc3BsYXkoZmxleCk7XG4gICAgLmZsZXgtZGlyZWN0aW9uKHJvdyk7XG4gICAgLmZsZXgtd3JhcCh3cmFwKTtcbiAgICAuanVzdGlmeS1jb250ZW50KGZsZXgtc3RhcnQpO1xuICAgIC5hbGlnbi1jb250ZW50KGZsZXgtc3RhcnQpO1xuICAgIC5hbGlnbi1pdGVtcyhmbGV4LXN0YXJ0KTtcblxuICAgIC50aWxle1xuICAgICAgd2lkdGg6IDMzLjMzMyU7XG4gICAgICBoZWlnaHQ6MTIuNWVtO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICAjRUZFRkVGO1xuICAgICAgY29sb3I6ICM2QzZDNzg7XG5cbiAgICAgIC5mbGV4LWRpc3BsYXkoZmxleCk7XG4gICAgICAuZmxleC1kaXJlY3Rpb24oY29sdW1ucyk7XG4gICAgICAuZmxleC13cmFwKHdyYXApO1xuICAgICAgLmp1c3RpZnktY29udGVudChmbGV4LXN0YXJ0KTtcbiAgICAgIC5hbGlnbi1jb250ZW50KGZsZXgtc3RhcnQpO1xuICAgICAgLmFsaWduLWl0ZW1zKGZsZXgtc3RhcnQpO1xuXG4gICAgICBkaXYudGlsZS1jb250ZW50LGltZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICBkaXYudGlsZS1jb250ZW50e1xuICAgICAgICAuZmxleC1kaXNwbGF5KGZsZXgpO1xuICAgICAgICAuZmxleC1kaXJlY3Rpb24oY29sdW1uKTtcbiAgICAgICAgLmZsZXgtd3JhcCh3cmFwKTtcbiAgICAgICAgLmp1c3RpZnktY29udGVudChmbGV4LWVuZCk7XG4gICAgICAgIC5hbGlnbi1jb250ZW50KGZsZXgtZW5kKTtcbiAgICAgICAgLmFsaWduLWl0ZW1zKGZsZXgtZW5kKTtcbiAgICAgIH1cbiAgICAgIGhye1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDMuNWVtO1xuICAgICAgICBoZWlnaHQ6IDAuMjVlbTtcbiAgICAgICAgbWFyZ2luOiAwLjI1ZW0gMC41ZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2QzZDNzg7XG4gICAgICB9XG4gICAgICBoMntcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6Zml0LWNvbnRlbnQ7XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgICAgIC5pY29ue1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDNlbTtcbiAgICAgICAgaGVpZ2h0OiAzZW07XG4gICAgICAgIG1hcmdpbjogMC4yNWVtIDAuNWVtO1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gICAgICB9XG4gICAgfVxuXG5cbn1cblxuXG5cblxuXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMHB4OyAgLyogcmVtb3ZlIHNjcm9sbGJhciBzcGFjZSAqL1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgIC8qIG9wdGlvbmFsOiBqdXN0IG1ha2Ugc2Nyb2xsYmFyIGludmlzaWJsZSAqL1xufVxuXG4udnctbW9kYWx7XG5kaXNwbGF5OmJsb2NrO1xucGFkZGluZzogMTUlIDE1JTtcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5wb3NpdGlvbjogZml4ZWQ7XG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7XG50b3A6IDBweDtcbmxlZnQ6IDBweDtcbndpZHRoOiAxMDB2dztcbmhlaWdodDogMTAwdmg7XG56LWluZGV4OiAxMDAwMDA7XG5vdmVyZmxvdzogaGlkZGVuO1xufVxuLm1vZGFsLXNsaWRle1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG5cblxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5cblxuXG5cbi5tb2RhbC1zbGlkZXtcbiAgICBoMntcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6Zml0LWNvbnRlbnQ7XG4gICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgICAuaWNvbntcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gICAgfVxuXG59XG5cbi5idXR0b24tY2xvc2V7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IGNhbGMoMTV2dyAtIDIuNWVtKTtcbiAgcmlnaHQ6IGNhbGMoMTUlIC0gMi41ZW0pO1xuICB6LWluZGV4OiAyMDA7XG4gIC5mYXN7XG4gICBmb250LXNpemU6IDMuNWVtO1xuICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICBib3JkZXItcmFkaXVzOiAxMjclO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnZ3LW1vZGFse1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43Nik7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHotaW5kZXg6IDEwMDAwMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbi5nYWxsZXJ5e1xuXG53aWR0aDogMTAwJTtcbm1hcmdpbjogMCBhdXRvO1xuXG5wYWRkaW5nLXRvcDogMGVtO1xucGFkZGluZy1ib3R0b206IDBlbTtcbi50aWxle1xuXG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgaGVpZ2h0OjEwZW07XG4gIGRpdi50aWxlLWNvbnRlbnR7XG5cbiAgaDJ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cblxuXG59XG5cbn1cbn1cblxuLmxvZ297XG4gIC5sb2dvLXRpdGxle1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLmxvZ28tc3VidGl0bGV7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuXG4ubW9kYWwtc2xpZGV7XG5cbn1cblxuXG4uYnV0dG9uLWNsb3Nle1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwZW07XG4gIHJpZ2h0OiAwZW07XG59XG5cbn1cbiIsIkBjb2xvci13aGl0ZSA9ICNFRkVGRUY7XG4udnctc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkVGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkM2QzO1xuICBjb2xvcjogIzZDNkM3ODtcbn1cbi52dy1zZWN0aW9uLnZ3LWZvb3RlciB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUY7XG4gIGNvbG9yOiAjNkM2Qzc4O1xufVxuLmxheWVyLW1lZGlhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbn1cbi5sYXllci1jb2xvciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEwLCAxMTMsIDEzMCwgMC44NSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG59XG4ubGF5ZXItY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtd2Via2l0LWZsZXgtd3JhcDogbm93cmFwO1xuICAtbXMtZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtbXMtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1zLWFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxvZ28gLmxvZ28tdGl0bGUge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubG9nbyAubG9nby1zdWJ0aXRsZSB7XG4gIHdpZHRoOiAyMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5uZXh0LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5leHQtYnV0dG9uIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzVweDtcbiAgbWFyZ2luOiAyNXB4IGF1dG87XG59XG4uZ2FsbGVyeSB7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiAxMGVtO1xuICBwYWRkaW5nLWJvdHRvbTogMTBlbTtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLW1zLWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAtbXMtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC13ZWJraXQtYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgLW1zLWFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIC1tcy1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uZ2FsbGVyeSAudGlsZSB7XG4gIHdpZHRoOiAzMy4zMzMlO1xuICBoZWlnaHQ6IDEyLjVlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUY7XG4gIGNvbG9yOiAjNkM2Qzc4O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1ucztcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW5zO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1ucztcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAtbXMtYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgLW1zLWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5nYWxsZXJ5IC50aWxlIGRpdi50aWxlLWNvbnRlbnQsXG4uZ2FsbGVyeSAudGlsZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmdhbGxlcnkgLnRpbGUgZGl2LnRpbGUtY29udGVudCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAtbXMtYWxpZ24tY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgLW1zLWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmdhbGxlcnkgLnRpbGUgaHIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMuNWVtO1xuICBoZWlnaHQ6IDAuMjVlbTtcbiAgbWFyZ2luOiAwLjI1ZW0gMC41ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM2QzZDNzg7XG59XG4uZ2FsbGVyeSAudGlsZSBoMiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMC41ZW07XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmdhbGxlcnkgLnRpbGUgLmljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDNlbTtcbiAgaGVpZ2h0OiAzZW07XG4gIG1hcmdpbjogMC4yNWVtIDAuNWVtO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMHB4O1xuICAvKiByZW1vdmUgc2Nyb2xsYmFyIHNwYWNlICovXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAvKiBvcHRpb25hbDoganVzdCBtYWtlIHNjcm9sbGJhciBpbnZpc2libGUgKi9cbn1cbi52dy1tb2RhbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxNSUgMTUlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiAxMDAwMDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubW9kYWwtc2xpZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5tb2RhbC1zbGlkZSBoMiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMC41ZW07XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBsaW5lLWhlaWdodDogMTAwJTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5tb2RhbC1zbGlkZSAuaWNvbiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG59XG4uYnV0dG9uLWNsb3NlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogY2FsYygxNXZ3IC0gMi41ZW0pO1xuICByaWdodDogY2FsYygxNSUgLSAyLjVlbSk7XG4gIHotaW5kZXg6IDIwMDtcbn1cbi5idXR0b24tY2xvc2UgLmZhcyB7XG4gIGZvbnQtc2l6ZTogMy41ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMjclO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnZ3LW1vZGFsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc2KTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgei1pbmRleDogMTAwMDAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmdhbGxlcnkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAwZW07XG4gICAgcGFkZGluZy1ib3R0b206IDBlbTtcbiAgfVxuICAuZ2FsbGVyeSAudGlsZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDEwZW07XG4gIH1cbiAgLmdhbGxlcnkgLnRpbGUgZGl2LnRpbGUtY29udGVudCBoMiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgLmxvZ28gLmxvZ28tdGl0bGUge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLmxvZ28gLmxvZ28tc3VidGl0bGUge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLmJ1dHRvbi1jbG9zZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDBlbTtcbiAgICByaWdodDogMGVtO1xuICB9XG59XG4iLCIvLyBtYWluOiBhcHAubGVzc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZsZXhib3ggTEVTUyBtaXhpbnNcbi8vIFRoZSBzcGVjOiBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWZsZXhib3hcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGbGV4Ym94IGRpc3BsYXlcbi8vIGZsZXggb3IgaW5saW5lLWZsZXhcbi5mbGV4LWRpc3BsYXkoQGRpc3BsYXk6IGZsZXgpIHtcbiAgZGlzcGxheTogflwiLXdlYmtpdC1Ae2Rpc3BsYXl9XCI7XG4gIGRpc3BsYXk6IH5cIi1tcy1Ae2Rpc3BsYXl9Ym94XCI7IC8vIElFMTAgdXNlcyAtbXMtZmxleGJveFxuICBkaXNwbGF5OiB+XCItbXMtQHtkaXNwbGF5fVwiOyAvLyBJRTExXG4gIGRpc3BsYXk6IEBkaXNwbGF5O1xufVxuXG4vLyBUaGUgJ2ZsZXgnIHNob3J0aGFuZFxuLy8gLSBhcHBsaWVzIHRvOiBmbGV4IGl0ZW1zXG4vLyA8cG9zaXRpdmUtbnVtYmVyPiwgaW5pdGlhbCwgYXV0bywgb3Igbm9uZVxuLmZsZXgoQGNvbHVtbnM6IGluaXRpYWwpIHtcbiAgLXdlYmtpdC1mbGV4OiBAY29sdW1ucztcbiAgLW1zLWZsZXg6IEBjb2x1bW5zO1xuICBmbGV4OiBAY29sdW1ucztcbn1cblxuLy8gRmxleCBGbG93IERpcmVjdGlvblxuLy8gLSBhcHBsaWVzIHRvOiBmbGV4IGNvbnRhaW5lcnNcbi8vIHJvdyB8IHJvdy1yZXZlcnNlIHwgY29sdW1uIHwgY29sdW1uLXJldmVyc2Vcbi5mbGV4LWRpcmVjdGlvbihAZGlyZWN0aW9uOiByb3cpIHtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogQGRpcmVjdGlvbjtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBAZGlyZWN0aW9uO1xuICBmbGV4LWRpcmVjdGlvbjogQGRpcmVjdGlvbjtcbn1cblxuLy8gRmxleCBMaW5lIFdyYXBwaW5nXG4vLyAtIGFwcGxpZXMgdG86IGZsZXggY29udGFpbmVyc1xuLy8gbm93cmFwIHwgd3JhcCB8IHdyYXAtcmV2ZXJzZVxuLmZsZXgtd3JhcChAd3JhcDogbm93cmFwKSB7XG4gIC13ZWJraXQtZmxleC13cmFwOiBAd3JhcDtcbiAgLW1zLWZsZXgtd3JhcDogQHdyYXA7XG4gIGZsZXgtd3JhcDogQHdyYXA7XG59XG5cbi8vIEZsZXggRGlyZWN0aW9uIGFuZCBXcmFwXG4vLyAtIGFwcGxpZXMgdG86IGZsZXggY29udGFpbmVyc1xuLy8gPGZsZXgtZGlyZWN0aW9uPiB8fCA8ZmxleC13cmFwPlxuLmZsZXgtZmxvdyhAZmxvdykge1xuICAtd2Via2l0LWZsZXgtZmxvdzogQGZsb3c7XG4gIC1tcy1mbGV4LWZsb3c6IEBmbG93O1xuICBmbGV4LWZsb3c6IEBmbG93O1xufVxuXG4vLyBEaXNwbGF5IE9yZGVyXG4vLyAtIGFwcGxpZXMgdG86IGZsZXggaXRlbXNcbi8vIDxpbnRlZ2VyPlxuLmZsZXgtb3JkZXIoQG9yZGVyOiAwKSB7XG4gIC13ZWJraXQtb3JkZXI6IEBvcmRlcjtcbiAgLW1zLW9yZGVyOiBAb3JkZXI7XG4gIG9yZGVyOiBAb3JkZXI7XG59XG5cbi8vIEZsZXggZ3JvdyBmYWN0b3Jcbi8vIC0gYXBwbGllcyB0bzogZmxleCBpdGVtc1xuLy8gPG51bWJlcj5cbi5mbGV4LWdyb3coQGdyb3c6IDApIHtcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IEBncm93O1xuICAtbXMtZmxleC1ncm93OiBAZ3JvdztcbiAgZmxleC1ncm93OiBAZ3Jvdztcbn1cblxuLy8gRmxleCBzaHJpbmtcbi8vIC0gYXBwbGllcyB0bzogZmxleCBpdGVtIHNocmluayBmYWN0b3Jcbi8vIDxudW1iZXI+XG4uZmxleC1zaHJpbmsoQHNocmluazogMSkge1xuICAtd2Via2l0LWZsZXgtc2hyaW5rOiBAc2hyaW5rO1xuICAtbXMtZmxleC1zaHJpbms6IEBzaHJpbms7XG4gIGZsZXgtc2hyaW5rOiBAc2hyaW5rO1xufVxuXG4vLyBGbGV4IGJhc2lzXG4vLyAtIHRoZSBpbml0aWFsIG1haW4gc2l6ZSBvZiB0aGUgZmxleCBpdGVtXG4vLyAtIGFwcGxpZXMgdG86IGZsZXggaXRlbXNuaXRpYWwgbWFpbiBzaXplIG9mIHRoZSBmbGV4IGl0ZW1cbi8vIDx3aWR0aD5cbi5mbGV4LWJhc2lzKEB3aWR0aDogYXV0bykge1xuICAtd2Via2l0LWZsZXgtYmFzaXM6IEB3aWR0aDtcbiAgLW1zLWZsZXgtYmFzaXM6IEB3aWR0aDtcbiAgZmxleC1iYXNpczogQHdpZHRoO1xufVxuXG4vLyBBeGlzIEFsaWdubWVudFxuLy8gLSBhcHBsaWVzIHRvOiBmbGV4IGNvbnRhaW5lcnNcbi8vIGZsZXgtc3RhcnQgfCBmbGV4LWVuZCB8IGNlbnRlciB8IHNwYWNlLWJldHdlZW4gfCBzcGFjZS1hcm91bmRcbi5qdXN0aWZ5LWNvbnRlbnQoQGp1c3RpZnk6IGZsZXgtc3RhcnQpIHtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IEBqdXN0aWZ5O1xuICAtbXMtanVzdGlmeS1jb250ZW50OiBAanVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBAanVzdGlmeTtcbn1cblxuLy8gUGFja2luZyBGbGV4IExpbmVzXG4vLyAtIGFwcGxpZXMgdG86IG11bHRpLWxpbmUgZmxleCBjb250YWluZXJzXG4vLyBmbGV4LXN0YXJ0IHwgZmxleC1lbmQgfCBjZW50ZXIgfCBzcGFjZS1iZXR3ZWVuIHwgc3BhY2UtYXJvdW5kIHwgc3RyZXRjaFxuLmFsaWduLWNvbnRlbnQoQGFsaWduOiBzdHJldGNoKSB7XG4gIC13ZWJraXQtYWxpZ24tY29udGVudDogQGFsaWduO1xuICAtbXMtYWxpZ24tY29udGVudDogQGFsaWduO1xuICBhbGlnbi1jb250ZW50OiBAYWxpZ247XG59XG5cbi8vIENyb3NzLWF4aXMgQWxpZ25tZW50XG4vLyAtIGFwcGxpZXMgdG86IGZsZXggY29udGFpbmVyc1xuLy8gZmxleC1zdGFydCB8IGZsZXgtZW5kIHwgY2VudGVyIHwgYmFzZWxpbmUgfCBzdHJldGNoXG4uYWxpZ24taXRlbXMoQGFsaWduOiBzdHJldGNoKSB7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IEBhbGlnbjtcbiAgLW1zLWFsaWduLWl0ZW1zOiBAYWxpZ247XG4gIGFsaWduLWl0ZW1zOiBAYWxpZ247XG59XG5cbi8vIENyb3NzLWF4aXMgQWxpZ25tZW50XG4vLyAtIGFwcGxpZXMgdG86IGZsZXggaXRlbXNcbi8vIGF1dG8gfCBmbGV4LXN0YXJ0IHwgZmxleC1lbmQgfCBjZW50ZXIgfCBiYXNlbGluZSB8IHN0cmV0Y2hcbi5hbGlnbi1zZWxmKEBhbGlnbjogYXV0bykge1xuICAtd2Via2l0LWFsaWduLXNlbGY6IEBhbGlnbjtcbiAgLW1zLWFsaWduLXNlbGY6IEBhbGlnbjtcbiAgYWxpZ24tc2VsZjogQGFsaWduO1xufVxuXG4vLyBBbmltYXRpb24gTWl4aW5zXG4ua2V5ZnJhbWVzKEBuYW1lO1xuQGFyZ3VtZW50cykge1xuICBALW1vei1rZXlmcmFtZXMgQG5hbWUge1xuICAgIEBhcmd1bWVudHMoKTtcbiAgfVxuICBALXdlYmtpdC1rZXlmcmFtZXMgQG5hbWUge1xuICAgIEBhcmd1bWVudHMoKTtcbiAgfVxuICBAa2V5ZnJhbWVzIEBuYW1lIHtcbiAgICBAYXJndW1lbnRzKCk7XG4gIH1cbn1cblxuLmFuaW1hdGlvbihAYXJndW1lbnRzKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBAYXJndW1lbnRzO1xuICAtbW96LWFuaW1hdGlvbjogQGFyZ3VtZW50cztcbiAgYW5pbWF0aW9uOiBAYXJndW1lbnRzO1xufVxuXG4udHJhbnNpdGlvbi1wcm9wZXJ0aWVzKC4uLikge1xuICAtd2Via2l0LXRyYW5zaXRpb246IEBhcmd1bWVudHM7XG4gIC1tb3otdHJhbnNpdGlvbjogQGFyZ3VtZW50cztcbiAgLW8tdHJhbnNpdGlvbjogQGFyZ3VtZW50cztcbiAgdHJhbnNpdGlvbjogQGFyZ3VtZW50cztcbn1cblxuLmJlaXplci1jdXJ2ZSguLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogQGFyZ3VtZW50cztcbiAgLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogQGFyZ3VtZW50cztcbiAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IEBhcmd1bWVudHM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAYXJndW1lbnRzO1xufVxuXG4uZmxleC1jZW50ZXJBbGwoKSB7XG4gIC5mbGV4LWRpc3BsYXkoZmxleCk7XG4gIC5mbGV4LWRpcmVjdGlvbihjb2x1bW4pO1xuICAuZmxleC13cmFwKHdyYXApO1xuICAuanVzdGlmeS1jb250ZW50KGNlbnRlcik7XG4gIC5hbGlnbi1jb250ZW50KGNlbnRlcik7XG4gIC5hbGlnbi1pdGVtcyhjZW50ZXIpO1xufVxuXG4uZGlzcGxheVJvd0NlbnRlcigpIHtcbiAgLmZsZXgtZGlzcGxheShmbGV4KTtcbiAgLmZsZXgtZGlyZWN0aW9uKHJvdyk7XG4gIC5mbGV4LXdyYXAobm93cmFwKTtcbiAgLmp1c3RpZnktY29udGVudChjZW50ZXIpO1xuICAuYWxpZ24tY29udGVudChjZW50ZXIpO1xuICAuYWxpZ24taXRlbXMoY2VudGVyKTtcbn1cblxuLmRpc3BsYXlSb3dFeHBhbmQoKSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAwLjVlbSAwZW07XG4gIC5mbGV4LWRpc3BsYXkoZmxleCk7XG4gIC5mbGV4LWRpcmVjdGlvbihyb3cpO1xuICAuZmxleC13cmFwKG5vd3JhcCk7XG4gIC5qdXN0aWZ5LWNvbnRlbnQoc3BhY2UtYXJvdW5kKTtcbiAgLmFsaWduLWNvbnRlbnQoY2VudGVyKTtcbiAgLmFsaWduLWl0ZW1zKGNlbnRlcik7XG59XG5cbi5kaXNwbGF5Q29sdW1uQ2VudGVyKCkge1xuICAuZmxleC1kaXNwbGF5KGZsZXgpO1xuICAuZmxleC1kaXJlY3Rpb24oY29sdW1uKTtcbiAgLmZsZXgtd3JhcChub3dyYXApO1xuICAuanVzdGlmeS1jb250ZW50KGNlbnRlcik7XG4gIC5hbGlnbi1jb250ZW50KGNlbnRlcik7XG4gIC5hbGlnbi1pdGVtcyhjZW50ZXIpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/comingsoon/comingsoon.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/comingsoon/comingsoon.component.ts ***!
  \**********************************************************/
/*! exports provided: ComingsoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingsoonComponent", function() { return ComingsoonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComingsoonComponent = /** @class */ (function () {
    function ComingsoonComponent() {
        this.UX = {
            HOVER: false
        };
        this.galleryPath = "assets/images/gallery/";
        this.projects = [
            {
                name: "Casa AG",
                path: "any-gyo",
                icon: "vivienda",
                subtitle: "",
                description: "",
                pictures: [0, 1, 2, 3]
            },
            {
                name: "Proyecto Atalaya",
                path: "atalaya",
                icon: "vivienda",
                subtitle: "",
                description: "",
                pictures: [],
            },
            {
                name: "Casa Martinez",
                path: "brian-martinez",
                icon: "vivienda",
                subtitle: "",
                description: "",
                pictures: [0, 1, 2, 3]
            },
            {
                name: "Proyecto Controles",
                path: "controles",
                icon: "oficinas",
                subtitle: "",
                description: "",
                pictures: [0, 1, 2, 3]
            },
            {
                name: "Casa Jhoana",
                path: "jhoana",
                icon: "vivienda",
                subtitle: "",
                description: "",
                pictures: [0, 1, 2, 3]
            },
            {
                name: "Proyecto Colegio",
                path: "montessori",
                icon: "oficinas",
                subtitle: "",
                description: "",
                pictures: [0, 1, 2, 3]
            },
            {
                name: "Proyecto Mascotas",
                path: "pawfeet",
                icon: "oficinas",
                subtitle: "",
                description: "",
                pictures: [0, 1, 2, 3]
            }
        ];
        this.tiles = [];
        this.type = 'component';
        this.disabled = false;
        this.config = {
            a11y: true,
            direction: 'horizontal',
            slidesPerView: 1,
            keyboard: true,
            mousewheel: true,
            scrollbar: false,
            navigation: true,
            pagination: false,
            spaceBetween: 0
        };
        this.scrollbar = {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true
        };
        this.pagination = {
            el: '.swiper-pagination',
            clickable: true,
            hideOnClick: false
        };
        this.index = 0;
    }
    ComingsoonComponent.prototype.ngOnInit = function () {
        for (var kProject = 0; kProject < this.projects.length; kProject++) {
            for (var kTile = 0; kTile < this.projects[kProject].pictures.length; kTile++) {
                var imgSrc = this.galleryPath + this.projects[kProject].path + "/img" + kTile + ".jpg";
                if (kTile == 0) {
                    this.tiles.push({
                        name: this.projects[kProject].name,
                        icon: this.galleryPath + "/../../icons/" + this.projects[kProject].icon + ".png",
                        subtitle: this.projects[kProject].subtitle,
                        description: this.projects[kProject].description
                    });
                }
                this.tiles.push({
                    src: imgSrc
                });
            }
        }
    };
    ComingsoonComponent.prototype.openModal = function (k) {
        this.UX.HOVER = true;
        this.index = k;
    };
    ComingsoonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ec-comingsoon",
            template: __webpack_require__(/*! ./comingsoon.component.html */ "./src/app/views/comingsoon/comingsoon.component.html"),
            styles: [__webpack_require__(/*! ./comingsoon.component.less */ "./src/app/views/comingsoon/comingsoon.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ComingsoonComponent);
    return ComingsoonComponent;
}());



/***/ }),

/***/ "./src/app/views/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mnFullpage>\r\n    <div class=\"section welcome-section fp-section fp-table\">\r\n      <div class=\"fp-tableCell\">\r\n        1\r\n      </div>\r\n    </div>\r\n    <div class=\"section welcome-section fp-section fp-table\">\r\n      <div class=\"fp-tableCell\">\r\n        2\r\n      </div>\r\n    </div>\r\n    <div class=\"section welcome-section fp-section fp-table\">\r\n      <div class=\"fp-tableCell\">\r\n        3\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/views/home/home.component.less":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ec-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.less */ "./src/app/views/home/home.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/notfound/notfound.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/notfound/notfound.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  notfound works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/views/notfound/notfound.component.less":
/*!********************************************************!*\
  !*** ./src/app/views/notfound/notfound.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/views/notfound/notfound.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/notfound/notfound.component.ts ***!
  \******************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ec-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/views/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.less */ "./src/app/views/notfound/notfound.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/views/views.module.ts":
/*!***************************************!*\
  !*** ./src/app/views/views.module.ts ***!
  \***************************************/
/*! exports provided: ViewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsModule", function() { return ViewsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comingsoon/comingsoon.component */ "./src/app/views/comingsoon/comingsoon.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/views/notfound/notfound.component.ts");
/* harmony import */ var ngx_fullpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-fullpage */ "./node_modules/ngx-fullpage/ngx-fullpage.js");
/* harmony import */ var ngx_fullpage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_fullpage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular2_image_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-image-gallery */ "./node_modules/angular2-image-gallery/fesm5/angular2-image-gallery.js");
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ "./node_modules/@ks89/angular-modal-gallery/esm5/ks89-angular-modal-gallery.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DEFAULT_SWIPER_CONFIG = {
    observer: true,
    direction: 'horizontal',
    threshold: 50,
    spaceBetween: 5,
    slidesPerView: 1,
    centeredSlides: true
};
var ViewsModule = /** @class */ (function () {
    function ViewsModule() {
    }
    ViewsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                angular2_image_gallery__WEBPACK_IMPORTED_MODULE_7__["Angular2ImageGalleryModule"],
                _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_8__["ModalGalleryModule"],
                ngx_fullpage__WEBPACK_IMPORTED_MODULE_5__["MnFullpageModule"].forRoot(),
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_10__["SwiperModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"]
            ], providers: [
                {
                    provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_10__["SWIPER_CONFIG"],
                    useValue: DEFAULT_SWIPER_CONFIG
                }
            ],
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_3__["ComingsoonComponent"], _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundComponent"]],
            exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_3__["ComingsoonComponent"], _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundComponent"]]
        })
    ], ViewsModule);
    return ViewsModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\walla\Documents\GitHub\Eclaire\eclaire-comingsoon\ngEclaireComingSoon\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map