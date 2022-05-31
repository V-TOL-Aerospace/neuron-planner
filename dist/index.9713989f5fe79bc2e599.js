"use strict";
(self["webpackChunkvtol_neuron"] = self["webpackChunkvtol_neuron"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/leaflet/dist/leaflet.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/leaflet/dist/leaflet.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/layers.png */ "./node_modules/leaflet/dist/images/layers.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! images/layers-2x.png */ "./node_modules/leaflet/dist/images/layers-2x.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* required styles */\r\n\r\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\r\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\r\n/* Prevents IE11 from highlighting tiles in blue */\r\n.leaflet-tile::selection {\r\n\tbackground: transparent;\r\n}\r\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\r\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\r\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\r\n\t}\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\r\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r\n.leaflet-container .leaflet-overlay-pane svg {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\t}\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer,\r\n.leaflet-container .leaflet-tile {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\twidth: auto;\r\n\tpadding: 0;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-zoom {\r\n\t-ms-touch-action: pan-x pan-y;\r\n\ttouch-action: pan-x pan-y;\r\n\t}\r\n.leaflet-container.leaflet-touch-drag {\r\n\t-ms-touch-action: pinch-zoom;\r\n\t/* Fallback for FF which doesn't support pinch-zoom */\r\n\ttouch-action: none;\r\n\ttouch-action: pinch-zoom;\r\n}\r\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\t-ms-touch-action: none;\r\n\ttouch-action: none;\r\n}\r\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\r\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\r\n.leaflet-tile {\r\n\tfilter: inherit;\r\n\tvisibility: hidden;\r\n\t}\r\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\r\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\r\n\r\n.leaflet-pane         { z-index: 400; }\r\n\r\n.leaflet-tile-pane    { z-index: 200; }\r\n.leaflet-overlay-pane { z-index: 400; }\r\n.leaflet-shadow-pane  { z-index: 500; }\r\n.leaflet-marker-pane  { z-index: 600; }\r\n.leaflet-tooltip-pane   { z-index: 650; }\r\n.leaflet-popup-pane   { z-index: 700; }\r\n\r\n.leaflet-map-pane canvas { z-index: 100; }\r\n.leaflet-map-pane svg    { z-index: 200; }\r\n\r\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\r\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\r\n\r\n\r\n/* control positioning */\r\n\r\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\r\n.leaflet-right {\r\n\tright: 0;\r\n\t}\r\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\r\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\r\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\r\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\r\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\r\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\r\n\r\n\r\n/* zoom and fade animations */\r\n\r\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.2s linear;\r\n\t   -moz-transition: opacity 0.2s linear;\r\n\t        transition: opacity 0.2s linear;\r\n\t}\r\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\r\n.leaflet-zoom-animated {\r\n\t-webkit-transform-origin: 0 0;\r\n\t    -ms-transform-origin: 0 0;\r\n\t        transform-origin: 0 0;\r\n\t}\r\nsvg.leaflet-zoom-animated {\r\n\twill-change: transform;\r\n}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\r\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\t-webkit-transition: none;\r\n\t   -moz-transition: none;\r\n\t        transition: none;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n\r\n/* cursors */\r\n\r\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\r\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:    -moz-grab;\r\n\tcursor:         grab;\r\n\t}\r\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\r\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\r\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:    -moz-grabbing;\r\n\tcursor:         grabbing;\r\n\t}\r\n\r\n/* marker & overlays interactivity */\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive,\r\nsvg.leaflet-image-layer.leaflet-interactive path {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n/* visual tweaks */\r\n\r\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline-offset: 1px;\r\n\t}\r\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\r\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\r\n\r\n\r\n/* general typography */\r\n.leaflet-container {\r\n\tfont-family: \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\tfont-size: 12px;\r\n\tfont-size: 0.75rem;\r\n\tline-height: 1.5;\r\n\t}\r\n\r\n\r\n/* general toolbar styles */\r\n\r\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\r\n.leaflet-bar a {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-bar a:hover,\r\n.leaflet-bar a:focus {\r\n\tbackground-color: #f4f4f4;\r\n\t}\r\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\r\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\r\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\r\n\r\n/* zoom control */\r\n\r\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\r\n\r\n\r\n/* layers control */\r\n\r\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\r\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\r\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n\tbackground-size: 26px 26px;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\r\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\r\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\r\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\r\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\r\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\r\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\tfont-size: 13px;\r\n\tfont-size: 1.08333em;\r\n\t}\r\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\r\n\r\n/* Default icon URLs */\r\n.leaflet-default-icon-path { /* used only in path-guessing heuristic, see L.Icon.Default */\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n\t}\r\n\r\n\r\n/* attribution and scale controls */\r\n\r\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.8);\r\n\tmargin: 0;\r\n\t}\r\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\tline-height: 1.4;\r\n\t}\r\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\r\n.leaflet-control-attribution a:hover,\r\n.leaflet-control-attribution a:focus {\r\n\ttext-decoration: underline;\r\n\t}\r\n.leaflet-control-attribution svg {\r\n\tdisplay: inline !important;\r\n\t}\r\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\r\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\r\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\r\n\r\n\r\n/* popup */\r\n\r\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\r\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\r\n.leaflet-popup-content {\r\n\tmargin: 13px 24px 13px 20px;\r\n\tline-height: 1.3;\r\n\tfont-size: 13px;\r\n\tfont-size: 1.08333em;\r\n\tmin-height: 1px;\r\n\t}\r\n.leaflet-popup-content p {\r\n\tmargin: 17px 0;\r\n\tmargin: 1.3em 0;\r\n\t}\r\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-top: -1px;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\tpointer-events: auto;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t   -moz-transform: rotate(45deg);\r\n\t    -ms-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\t}\r\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 24px;\r\n\theight: 24px;\r\n\tfont: 16px/24px Tahoma, Verdana, sans-serif;\r\n\tcolor: #757575;\r\n\ttext-decoration: none;\r\n\tbackground: transparent;\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button:hover,\r\n.leaflet-container a.leaflet-popup-close-button:focus {\r\n\tcolor: #585858;\r\n\t}\r\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-top: 1px solid #ddd;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\t-ms-zoom: 1;\r\n\t}\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\r\n\r\n\r\n/* div icon */\r\n\r\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\r\n\r\n\r\n/* Tooltip */\r\n/* Base styles for the element that has a tooltip */\r\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-tooltip.leaflet-interactive {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: \"\";\r\n\t}\r\n\r\n/* Directions */\r\n\r\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\r\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\r\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\r\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\r\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\r\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\r\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\r\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\r\n\r\n/* Printing */\r\n\t\r\n@media print {\r\n\t/* Prevent printers from removing background-images of controls. */\r\n\t.leaflet-control {\r\n\t\t-webkit-print-color-adjust: exact;\r\n\t\tcolor-adjust: exact;\r\n\t\t}\r\n\t}\r\n", "",{"version":3,"sources":["webpack://./node_modules/leaflet/dist/leaflet.css"],"names":[],"mappings":"AAAA,oBAAoB;;AAEpB;;;;;;;;;;CAUC,kBAAkB;CAClB,OAAO;CACP,MAAM;CACN;AACD;CACC,gBAAgB;CAChB;AACD;;;CAGC,yBAAyB;IACtB,sBAAsB;SACjB,iBAAiB;GACvB,uBAAuB;CACzB;AACD,kDAAkD;AAClD;CACC,uBAAuB;AACxB;AACA,mFAAmF;AACnF;CACC,0CAA0C;CAC1C;AACD,qEAAqE;AACrE;CACC,aAAa;CACb,cAAc;CACd,6BAA6B;CAC7B;AACD;;CAEC,cAAc;CACd;AACD,gGAAgG;AAChG,qFAAqF;AACrF;CACC,0BAA0B;CAC1B,2BAA2B;CAC3B;AACD;;;;;CAKC,0BAA0B;CAC1B,2BAA2B;CAC3B,WAAW;CACX,UAAU;CACV;;AAED;CACC,6BAA6B;CAC7B,yBAAyB;CACzB;AACD;CACC,4BAA4B;CAC5B,qDAAqD;CACrD,kBAAkB;CAClB,wBAAwB;AACzB;AACA;CACC,sBAAsB;CACtB,kBAAkB;AACnB;AACA;CACC,wCAAwC;AACzC;AACA;CACC,oDAAoD;AACrD;AACA;CACC,eAAe;CACf,kBAAkB;CAClB;AACD;CACC,mBAAmB;CACnB;AACD;CACC,QAAQ;CACR,SAAS;CACT,2BAA2B;MACtB,sBAAsB;CAC3B,YAAY;CACZ;AACD,uEAAuE;AACvE;CACC,sBAAsB;CACtB;;AAED,wBAAwB,YAAY,EAAE;;AAEtC,wBAAwB,YAAY,EAAE;AACtC,wBAAwB,YAAY,EAAE;AACtC,wBAAwB,YAAY,EAAE;AACtC,wBAAwB,YAAY,EAAE;AACtC,0BAA0B,YAAY,EAAE;AACxC,wBAAwB,YAAY,EAAE;;AAEtC,2BAA2B,YAAY,EAAE;AACzC,2BAA2B,YAAY,EAAE;;AAEzC;CACC,UAAU;CACV,WAAW;CACX;AACD;CACC,2BAA2B;CAC3B,qBAAqB;CACrB,kBAAkB;CAClB;;;AAGD,wBAAwB;;AAExB;CACC,kBAAkB;CAClB,YAAY;CACZ,8BAA8B,EAAE,8BAA8B;CAC9D,oBAAoB;CACpB;AACD;;CAEC,kBAAkB;CAClB,aAAa;CACb,oBAAoB;CACpB;AACD;CACC,MAAM;CACN;AACD;CACC,QAAQ;CACR;AACD;CACC,SAAS;CACT;AACD;CACC,OAAO;CACP;AACD;CACC,WAAW;CACX,WAAW;CACX;AACD;CACC,YAAY;CACZ;AACD;CACC,gBAAgB;CAChB;AACD;CACC,mBAAmB;CACnB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,kBAAkB;CAClB;;;AAGD,6BAA6B;;AAE7B;CACC,UAAU;CACV,uCAAuC;IACpC,oCAAoC;SAC/B,+BAA+B;CACvC;AACD;CACC,UAAU;CACV;AACD;CACC,6BAA6B;KACzB,yBAAyB;SACrB,qBAAqB;CAC7B;AACD;CACC,sBAAsB;AACvB;;AAEA;CACC,oEAAoE;IACjE,iEAAiE;SAC5D,4DAA4D;CACpE;AACD;;CAEC,wBAAwB;IACrB,qBAAqB;SAChB,gBAAgB;CACxB;;AAED;CACC,kBAAkB;CAClB;;;AAGD,YAAY;;AAEZ;CACC,eAAe;CACf;AACD;CACC,oBAAoB;CACpB,oBAAoB;CACpB,oBAAoB;CACpB;AACD;;CAEC,iBAAiB;CACjB;AACD;;CAEC,YAAY;CACZ;AACD;;;CAGC,YAAY;CACZ,wBAAwB;CACxB,wBAAwB;CACxB,wBAAwB;CACxB;;AAED,oCAAoC;AACpC;;;;;CAKC,oBAAoB;CACpB;;AAED;;;;CAIC,8BAA8B,EAAE,8BAA8B;CAC9D,oBAAoB;CACpB;;AAED,kBAAkB;;AAElB;CACC,gBAAgB;CAChB,mBAAmB;CACnB;AACD;CACC,cAAc;CACd;AACD;CACC,uBAAuB;CACvB,iCAAiC;CACjC;;;AAGD,uBAAuB;AACvB;CACC,2DAA2D;CAC3D,eAAe;CACf,kBAAkB;CAClB,gBAAgB;CAChB;;;AAGD,2BAA2B;;AAE3B;CACC,sCAAsC;CACtC,kBAAkB;CAClB;AACD;CACC,sBAAsB;CACtB,6BAA6B;CAC7B,WAAW;CACX,YAAY;CACZ,iBAAiB;CACjB,cAAc;CACd,kBAAkB;CAClB,qBAAqB;CACrB,YAAY;CACZ;AACD;;CAEC,4BAA4B;CAC5B,4BAA4B;CAC5B,cAAc;CACd;AACD;;CAEC,yBAAyB;CACzB;AACD;CACC,2BAA2B;CAC3B,4BAA4B;CAC5B;AACD;CACC,8BAA8B;CAC9B,+BAA+B;CAC/B,mBAAmB;CACnB;AACD;CACC,eAAe;CACf,yBAAyB;CACzB,WAAW;CACX;;AAED;CACC,WAAW;CACX,YAAY;CACZ,iBAAiB;CACjB;AACD;CACC,2BAA2B;CAC3B,4BAA4B;CAC5B;AACD;CACC,8BAA8B;CAC9B,+BAA+B;CAC/B;;AAED,iBAAiB;;AAEjB;;CAEC,mDAAmD;CACnD,gBAAgB;CAChB;;AAED;CACC,eAAe;CACf;;;AAGD,mBAAmB;;AAEnB;CACC,qCAAqC;CACrC,gBAAgB;CAChB,kBAAkB;CAClB;AACD;CACC,yDAAwC;CACxC,WAAW;CACX,YAAY;CACZ;AACD;CACC,yDAA2C;CAC3C,0BAA0B;CAC1B;AACD;CACC,WAAW;CACX,YAAY;CACZ;AACD;;CAEC,aAAa;CACb;AACD;CACC,cAAc;CACd,kBAAkB;CAClB;AACD;CACC,yBAAyB;CACzB,WAAW;CACX,gBAAgB;CAChB;AACD;CACC,kBAAkB;CAClB,kBAAkB;CAClB,kBAAkB;CAClB;AACD;CACC,eAAe;CACf,kBAAkB;CAClB,QAAQ;CACR;AACD;CACC,cAAc;CACd,eAAe;CACf,oBAAoB;CACpB;AACD;CACC,SAAS;CACT,0BAA0B;CAC1B,0BAA0B;CAC1B;;AAED,sBAAsB;AACtB,6BAA6B,6DAA6D;CACzF,yDAA6C;CAC7C;;;AAGD,mCAAmC;;AAEnC;CACC,gBAAgB;CAChB,oCAAoC;CACpC,SAAS;CACT;AACD;;CAEC,cAAc;CACd,WAAW;CACX,gBAAgB;CAChB;AACD;CACC,qBAAqB;CACrB;AACD;;CAEC,0BAA0B;CAC1B;AACD;CACC,0BAA0B;CAC1B;AACD;CACC,gBAAgB;CAChB;AACD;CACC,kBAAkB;CAClB;AACD;CACC,sBAAsB;CACtB,gBAAgB;CAChB,gBAAgB;CAChB,oBAAoB;CACpB,mBAAmB;CACnB,gBAAgB;CAChB,2BAA2B;MACtB,sBAAsB;;CAE3B,gBAAgB;CAChB,oCAAoC;CACpC;AACD;CACC,0BAA0B;CAC1B,mBAAmB;CACnB,gBAAgB;CAChB;AACD;CACC,6BAA6B;CAC7B;;AAED;;;CAGC,gBAAgB;CAChB;AACD;;CAEC,iCAAiC;CACjC,4BAA4B;CAC5B;;;AAGD,UAAU;;AAEV;CACC,kBAAkB;CAClB,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,YAAY;CACZ,gBAAgB;CAChB,mBAAmB;CACnB;AACD;CACC,2BAA2B;CAC3B,gBAAgB;CAChB,eAAe;CACf,oBAAoB;CACpB,eAAe;CACf;AACD;CACC,cAAc;CACd,eAAe;CACf;AACD;CACC,WAAW;CACX,YAAY;CACZ,kBAAkB;CAClB,SAAS;CACT,gBAAgB;CAChB,kBAAkB;CAClB,gBAAgB;CAChB,oBAAoB;CACpB;AACD;CACC,WAAW;CACX,YAAY;CACZ,YAAY;;CAEZ,oBAAoB;CACpB,oBAAoB;;CAEpB,gCAAgC;IAC7B,6BAA6B;KAC5B,4BAA4B;SACxB,wBAAwB;CAChC;AACD;;CAEC,iBAAiB;CACjB,WAAW;CACX,sCAAsC;CACtC;AACD;CACC,kBAAkB;CAClB,MAAM;CACN,QAAQ;CACR,YAAY;CACZ,kBAAkB;CAClB,WAAW;CACX,YAAY;CACZ,2CAA2C;CAC3C,cAAc;CACd,qBAAqB;CACrB,uBAAuB;CACvB;AACD;;CAEC,cAAc;CACd;AACD;CACC,cAAc;CACd,6BAA6B;CAC7B,0BAA0B;CAC1B;;AAED;CACC,WAAW;CACX;AACD;CACC,WAAW;CACX,cAAc;;CAEd,uHAAuH;CACvH,iHAAiH;CACjH;;AAED;;;;CAIC,sBAAsB;CACtB;;;AAGD,aAAa;;AAEb;CACC,gBAAgB;CAChB,sBAAsB;CACtB;;;AAGD,YAAY;AACZ,mDAAmD;AACnD;CACC,kBAAkB;CAClB,YAAY;CACZ,sBAAsB;CACtB,sBAAsB;CACtB,kBAAkB;CAClB,WAAW;CACX,mBAAmB;CACnB,yBAAyB;CACzB,sBAAsB;CACtB,qBAAqB;CACrB,iBAAiB;CACjB,oBAAoB;CACpB,qCAAqC;CACrC;AACD;CACC,eAAe;CACf,oBAAoB;CACpB;AACD;;;;CAIC,kBAAkB;CAClB,oBAAoB;CACpB,6BAA6B;CAC7B,uBAAuB;CACvB,WAAW;CACX;;AAED,eAAe;;AAEf;CACC,eAAe;AAChB;AACA;CACC,gBAAgB;AACjB;AACA;;CAEC,SAAS;CACT,iBAAiB;CACjB;AACD;CACC,SAAS;CACT,oBAAoB;CACpB,sBAAsB;CACtB;AACD;CACC,MAAM;CACN,iBAAiB;CACjB,iBAAiB;CACjB,yBAAyB;CACzB;AACD;CACC,iBAAiB;AAClB;AACA;CACC,gBAAgB;AACjB;AACA;;CAEC,QAAQ;CACR,gBAAgB;CAChB;AACD;CACC,QAAQ;CACR,mBAAmB;CACnB,uBAAuB;CACvB;AACD;CACC,OAAO;CACP,kBAAkB;CAClB,wBAAwB;CACxB;;AAED,aAAa;;AAEb;CACC,kEAAkE;CAClE;EACC,iCAAiC;EACjC,mBAAmB;EACnB;CACD","sourcesContent":["/* required styles */\r\n\r\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\r\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\r\n/* Prevents IE11 from highlighting tiles in blue */\r\n.leaflet-tile::selection {\r\n\tbackground: transparent;\r\n}\r\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\r\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\r\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\r\n\t}\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\r\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r\n.leaflet-container .leaflet-overlay-pane svg {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\t}\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer,\r\n.leaflet-container .leaflet-tile {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\twidth: auto;\r\n\tpadding: 0;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-zoom {\r\n\t-ms-touch-action: pan-x pan-y;\r\n\ttouch-action: pan-x pan-y;\r\n\t}\r\n.leaflet-container.leaflet-touch-drag {\r\n\t-ms-touch-action: pinch-zoom;\r\n\t/* Fallback for FF which doesn't support pinch-zoom */\r\n\ttouch-action: none;\r\n\ttouch-action: pinch-zoom;\r\n}\r\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\t-ms-touch-action: none;\r\n\ttouch-action: none;\r\n}\r\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\r\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\r\n.leaflet-tile {\r\n\tfilter: inherit;\r\n\tvisibility: hidden;\r\n\t}\r\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\r\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\r\n\r\n.leaflet-pane         { z-index: 400; }\r\n\r\n.leaflet-tile-pane    { z-index: 200; }\r\n.leaflet-overlay-pane { z-index: 400; }\r\n.leaflet-shadow-pane  { z-index: 500; }\r\n.leaflet-marker-pane  { z-index: 600; }\r\n.leaflet-tooltip-pane   { z-index: 650; }\r\n.leaflet-popup-pane   { z-index: 700; }\r\n\r\n.leaflet-map-pane canvas { z-index: 100; }\r\n.leaflet-map-pane svg    { z-index: 200; }\r\n\r\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\r\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\r\n\r\n\r\n/* control positioning */\r\n\r\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\r\n.leaflet-right {\r\n\tright: 0;\r\n\t}\r\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\r\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\r\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\r\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\r\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\r\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\r\n\r\n\r\n/* zoom and fade animations */\r\n\r\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.2s linear;\r\n\t   -moz-transition: opacity 0.2s linear;\r\n\t        transition: opacity 0.2s linear;\r\n\t}\r\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\r\n.leaflet-zoom-animated {\r\n\t-webkit-transform-origin: 0 0;\r\n\t    -ms-transform-origin: 0 0;\r\n\t        transform-origin: 0 0;\r\n\t}\r\nsvg.leaflet-zoom-animated {\r\n\twill-change: transform;\r\n}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\r\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\t-webkit-transition: none;\r\n\t   -moz-transition: none;\r\n\t        transition: none;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n\r\n/* cursors */\r\n\r\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\r\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:    -moz-grab;\r\n\tcursor:         grab;\r\n\t}\r\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\r\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\r\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:    -moz-grabbing;\r\n\tcursor:         grabbing;\r\n\t}\r\n\r\n/* marker & overlays interactivity */\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive,\r\nsvg.leaflet-image-layer.leaflet-interactive path {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n/* visual tweaks */\r\n\r\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline-offset: 1px;\r\n\t}\r\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\r\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\r\n\r\n\r\n/* general typography */\r\n.leaflet-container {\r\n\tfont-family: \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\tfont-size: 12px;\r\n\tfont-size: 0.75rem;\r\n\tline-height: 1.5;\r\n\t}\r\n\r\n\r\n/* general toolbar styles */\r\n\r\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\r\n.leaflet-bar a {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-bar a:hover,\r\n.leaflet-bar a:focus {\r\n\tbackground-color: #f4f4f4;\r\n\t}\r\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\r\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\r\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\r\n\r\n/* zoom control */\r\n\r\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\r\n\r\n\r\n/* layers control */\r\n\r\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\r\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url(images/layers.png);\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\r\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url(images/layers-2x.png);\r\n\tbackground-size: 26px 26px;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\r\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\r\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\r\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\r\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\r\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\r\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\tfont-size: 13px;\r\n\tfont-size: 1.08333em;\r\n\t}\r\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\r\n\r\n/* Default icon URLs */\r\n.leaflet-default-icon-path { /* used only in path-guessing heuristic, see L.Icon.Default */\r\n\tbackground-image: url(images/marker-icon.png);\r\n\t}\r\n\r\n\r\n/* attribution and scale controls */\r\n\r\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.8);\r\n\tmargin: 0;\r\n\t}\r\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\tline-height: 1.4;\r\n\t}\r\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\r\n.leaflet-control-attribution a:hover,\r\n.leaflet-control-attribution a:focus {\r\n\ttext-decoration: underline;\r\n\t}\r\n.leaflet-control-attribution svg {\r\n\tdisplay: inline !important;\r\n\t}\r\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\r\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\r\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\r\n\r\n\r\n/* popup */\r\n\r\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\r\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\r\n.leaflet-popup-content {\r\n\tmargin: 13px 24px 13px 20px;\r\n\tline-height: 1.3;\r\n\tfont-size: 13px;\r\n\tfont-size: 1.08333em;\r\n\tmin-height: 1px;\r\n\t}\r\n.leaflet-popup-content p {\r\n\tmargin: 17px 0;\r\n\tmargin: 1.3em 0;\r\n\t}\r\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-top: -1px;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\tpointer-events: auto;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t   -moz-transform: rotate(45deg);\r\n\t    -ms-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\t}\r\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 24px;\r\n\theight: 24px;\r\n\tfont: 16px/24px Tahoma, Verdana, sans-serif;\r\n\tcolor: #757575;\r\n\ttext-decoration: none;\r\n\tbackground: transparent;\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button:hover,\r\n.leaflet-container a.leaflet-popup-close-button:focus {\r\n\tcolor: #585858;\r\n\t}\r\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-top: 1px solid #ddd;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\t-ms-zoom: 1;\r\n\t}\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\r\n\r\n\r\n/* div icon */\r\n\r\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\r\n\r\n\r\n/* Tooltip */\r\n/* Base styles for the element that has a tooltip */\r\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-tooltip.leaflet-interactive {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: \"\";\r\n\t}\r\n\r\n/* Directions */\r\n\r\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\r\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\r\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\r\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\r\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\r\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\r\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\r\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\r\n\r\n/* Printing */\r\n\t\r\n@media print {\r\n\t/* Prevent printers from removing background-images of controls. */\r\n\t.leaflet-control {\r\n\t\t-webkit-print-color-adjust: exact;\r\n\t\tcolor-adjust: exact;\r\n\t\t}\r\n\t}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/brief.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/brief.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".brief-table {\n    display: grid;\n    /* Step, Type, Description, Features A, Features B, Features C, Transit, Duration  */\n    grid-template-columns: auto auto auto auto auto auto auto auto;\n    font-size: x-small;\n}\n\n.brief-table-entry {\n    text-align: left;\n    margin-left: 1em;\n    margin-right: 1em;\n    /* display: grid;\n    grid-template-columns: auto auto auto auto auto auto; */\n}\n\n.brief-table-entry-right {\n    text-align: right;\n}\n\n/* .brief-table-entry-center {\n    text-align: center;\n} */\n\n.brief-table-entry-bold {\n    font-weight: bold;\n}\n\n.brief-table-header {\n    font-weight: bold;\n    text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/css/brief.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,oFAAoF;IACpF,8DAA8D;IAC9D,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB;2DACuD;AAC3D;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;GAEG;;AAEH;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB","sourcesContent":[".brief-table {\n    display: grid;\n    /* Step, Type, Description, Features A, Features B, Features C, Transit, Duration  */\n    grid-template-columns: auto auto auto auto auto auto auto auto;\n    font-size: x-small;\n}\n\n.brief-table-entry {\n    text-align: left;\n    margin-left: 1em;\n    margin-right: 1em;\n    /* display: grid;\n    grid-template-columns: auto auto auto auto auto auto; */\n}\n\n.brief-table-entry-right {\n    text-align: right;\n}\n\n/* .brief-table-entry-center {\n    text-align: center;\n} */\n\n.brief-table-entry-bold {\n    font-weight: bold;\n}\n\n.brief-table-header {\n    font-weight: bold;\n    text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* html {\n    height: 100%;\n} */\n\n.fp-user-buttons-frame {\n    display: flex;\n    flex: 0 1 1;\n    flex-direction: row;\n    background-color: var(--theme-bg-border);\n    padding: 0.1em;\n}\n\n.fp-user-buttons {\n    flex: 1 0 0;\n    margin: 0.1em;\n    padding: 0.5em;\n    border-radius: 0;\n}\n\n/* ========================== */\n/*          Main View         */\n/* ========================== */\n\n#fp-main {\n    display: flex;\n    flex-direction: row;\n    flex: 1 0 0;\n    overflow: hidden;\n}\n\n#fp-map {\n    flex: 1 0 0;\n    display: flex;\n    flex-direction: column;\n}\n\n.fp-map-sub {\n    flex: 1 0 0;\n}\n\n#fp-map-help {\n    display: none;\n    overflow: scroll;\n    padding: 1em;\n}\n\n#fp-summary {\n    flex: auto;\n    flex-grow: 0;\n    width: 25%;\n    display: flex;\n    flex-direction: column;\n    border-left: 2px solid black;\n}\n\n#fp-advanced {\n    display: flex;\n    flex-direction: column;\n}\n\n/* ========================== */\n/*       Drawing Toolbar      */\n/* ========================== */\n/*\n#fp-draw {\n    display: flex;\n    flex: 1 0 0;\n    flex-direction: row;\n    background-color: black;\n    padding: 0.1em;\n}\n\n.fp-draw-buttons {\n    flex: 1 0 0;\n    margin: 0.1em;\n    border-radius: 0;\n}\n*/\n\n/* ========================== */\n/*     Management Toolbar     */\n/* ========================== */\n/*\n#fp-manage {\n    display: flex;\n    flex: auto;\n    flex-direction: row;\n    padding: 0.1em;\n    background-color: black;\n}\n\n.fp-manage-buttons {\n    flex: 1 0 0;\n    border-radius: 0;\n}\n*/\n\n.fp-long-name {\n    margin-left: 0.5em;\n}\n\n#print-section {\n    display: none;\n}\n\n.help-highlight {\n    background-color: var(--theme-highlight);\n}\n\nbody{counter-reset: section}\nh2{counter-reset: sub-section}\nh3{counter-reset: composite}\nh4{counter-reset: detail}\n\nh2:before{\n  counter-increment: section;\n  content: counter(section) \". \";\n}\nh3:before{\n  counter-increment: sub-section;\n  content: counter(section) \".\" counter(sub-section) \". \";\n}\nh4:before{\n  counter-increment: composite;\n  content: counter(section) \".\" counter(sub-section) \".\" counter(composite) \". \";\n}\nh5:before{\n  counter-increment: detail;\n  content: counter(section) \".\" counter(sub-section) \".\" counter(composite) \".\" counter(detail) \". \";\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAAA;;GAEG;;AAEH;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,wCAAwC;IACxC,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,cAAc;IACd,gBAAgB;AACpB;;AAEA,+BAA+B;AAC/B,+BAA+B;AAC/B,+BAA+B;;AAE/B;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA,+BAA+B;AAC/B,+BAA+B;AAC/B,+BAA+B;AAC/B;;;;;;;;;;;;;;CAcC;;AAED,+BAA+B;AAC/B,+BAA+B;AAC/B,+BAA+B;AAC/B;;;;;;;;;;;;;CAaC;;AAED;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,wCAAwC;AAC5C;;AAEA,KAAK,sBAAsB;AAC3B,GAAG,0BAA0B;AAC7B,GAAG,wBAAwB;AAC3B,GAAG,qBAAqB;;AAExB;EACE,0BAA0B;EAC1B,8BAA8B;AAChC;AACA;EACE,8BAA8B;EAC9B,uDAAuD;AACzD;AACA;EACE,4BAA4B;EAC5B,8EAA8E;AAChF;AACA;EACE,yBAAyB;EACzB,kGAAkG;AACpG","sourcesContent":["/* html {\n    height: 100%;\n} */\n\n.fp-user-buttons-frame {\n    display: flex;\n    flex: 0 1 1;\n    flex-direction: row;\n    background-color: var(--theme-bg-border);\n    padding: 0.1em;\n}\n\n.fp-user-buttons {\n    flex: 1 0 0;\n    margin: 0.1em;\n    padding: 0.5em;\n    border-radius: 0;\n}\n\n/* ========================== */\n/*          Main View         */\n/* ========================== */\n\n#fp-main {\n    display: flex;\n    flex-direction: row;\n    flex: 1 0 0;\n    overflow: hidden;\n}\n\n#fp-map {\n    flex: 1 0 0;\n    display: flex;\n    flex-direction: column;\n}\n\n.fp-map-sub {\n    flex: 1 0 0;\n}\n\n#fp-map-help {\n    display: none;\n    overflow: scroll;\n    padding: 1em;\n}\n\n#fp-summary {\n    flex: auto;\n    flex-grow: 0;\n    width: 25%;\n    display: flex;\n    flex-direction: column;\n    border-left: 2px solid black;\n}\n\n#fp-advanced {\n    display: flex;\n    flex-direction: column;\n}\n\n/* ========================== */\n/*       Drawing Toolbar      */\n/* ========================== */\n/*\n#fp-draw {\n    display: flex;\n    flex: 1 0 0;\n    flex-direction: row;\n    background-color: black;\n    padding: 0.1em;\n}\n\n.fp-draw-buttons {\n    flex: 1 0 0;\n    margin: 0.1em;\n    border-radius: 0;\n}\n*/\n\n/* ========================== */\n/*     Management Toolbar     */\n/* ========================== */\n/*\n#fp-manage {\n    display: flex;\n    flex: auto;\n    flex-direction: row;\n    padding: 0.1em;\n    background-color: black;\n}\n\n.fp-manage-buttons {\n    flex: 1 0 0;\n    border-radius: 0;\n}\n*/\n\n.fp-long-name {\n    margin-left: 0.5em;\n}\n\n#print-section {\n    display: none;\n}\n\n.help-highlight {\n    background-color: var(--theme-highlight);\n}\n\nbody{counter-reset: section}\nh2{counter-reset: sub-section}\nh3{counter-reset: composite}\nh4{counter-reset: detail}\n\nh2:before{\n  counter-increment: section;\n  content: counter(section) \". \";\n}\nh3:before{\n  counter-increment: sub-section;\n  content: counter(section) \".\" counter(sub-section) \". \";\n}\nh4:before{\n  counter-increment: composite;\n  content: counter(section) \".\" counter(sub-section) \".\" counter(composite) \". \";\n}\nh5:before{\n  counter-increment: detail;\n  content: counter(section) \".\" counter(sub-section) \".\" counter(composite) \".\" counter(detail) \". \";\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/map.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/map.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".neuron-marker-popup {\n    display: flex;\n    flex-direction: column;\n}\n\n.neuron-marker-popup-title {\n    flex: auto;\n    justify-content: center;\n    display: flex;\n\n    font-weight: bold;\n    text-decoration: underline;\n    padding: 0.5em;\n}\n\n.neuron-marker-popup-item {\n    flex: auto;\n    padding: 0.5em;\n}\n\n.neuron-marker-popup-item:hover {\n    background-color: #b0b0fd;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.neuron-marker-popup-icon {\n    margin-left: 0.2em;\n    margin-right: 0.2em;\n}\n\n.neuron-marker-popup-item-text {\n    margin-left: 0.2em;\n    margin-right: 0.2em;\n}\n\n.neuron-marker-popup-break {\n    width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/css/map.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,uBAAuB;IACvB,aAAa;;IAEb,iBAAiB;IACjB,0BAA0B;IAC1B,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,0BAA0B;IAC1B,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf","sourcesContent":[".neuron-marker-popup {\n    display: flex;\n    flex-direction: column;\n}\n\n.neuron-marker-popup-title {\n    flex: auto;\n    justify-content: center;\n    display: flex;\n\n    font-weight: bold;\n    text-decoration: underline;\n    padding: 0.5em;\n}\n\n.neuron-marker-popup-item {\n    flex: auto;\n    padding: 0.5em;\n}\n\n.neuron-marker-popup-item:hover {\n    background-color: #b0b0fd;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.neuron-marker-popup-icon {\n    margin-left: 0.2em;\n    margin-right: 0.2em;\n}\n\n.neuron-marker-popup-item-text {\n    margin-left: 0.2em;\n    margin-right: 0.2em;\n}\n\n.neuron-marker-popup-break {\n    width: 100%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/plan.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/plan.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#fp-mission {\n    flex: auto;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n}\n\n#fp-plan-container {\n    flex: auto;\n    overflow: scroll;\n    padding-top: 0.25em;\n    padding-bottom: 0.25em;\n}\n\n#fp-plan {\n    display: flex;\n    flex-direction: column;\n}\n\n#fp-plan-title {\n    text-align: center;\n    font-weight: bold;\n    box-shadow: 0px 4px 4px #888888;\n}\n\n.mission-feature {\n    display: flex;\n    flex-direction: column;\n    border: 2px solid black;\n    border-radius: 0.5em;\n    margin-top: 0.25em;\n    margin-bottom: 0.25em;\n    margin-left: 0.5em;\n    margin-right: 0.5em;\n    scroll-margin: 0.25em;\n    padding: 0.5em;\n    box-shadow: 4px 4px 4px #888888;\n}\n\n.mission-feature-highlight {\n    background-color: var(--theme-highlight);\n    transition: 250ms linear all;\n}\n\n.mission-feature-highlight-remove {\n    background-color: inherit;\n    transition: 250ms linear all;\n}\n\n.mission-feature-hidden {\n    background: #888888;\n}\n\n.mission-feature-title {\n    flex: auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-end;\n}\n\n.mission-feature-title-button-container {\n    flex: auto;\n    flex-grow: 0;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n\n.mission-feature-title-button,\n.mission-feature-title-button-small {\n    flex: auto;\n    flex-grow: 0;\n    margin-left: 0.1em;\n    margin-right: 0.1em;\n}\n\n\n.mission-feature-title-button-small {\n    display: none;\n}\n\n.mission-feature-title-text {\n    font-weight: bold;\n    flex: auto;\n}\n.mission-feature-content {\n    flex: auto;\n    display: grid;\n    /* flex-direction: column; */\n    grid-template-columns: 50% 50%;\n    /* overflow: scroll; */\n}\n\n.mission-feature-content-label, .mission-feature-content-value {\n    display: block;\n    margin-top: 0.2em;\n}\n\n.mission-feature-content-value-center {\n    text-align: center;\n}\n\n.mission-feature-content-subtitle {\n    font-weight: bold;\n}\n\n.mission-feature-content-value-right {\n    text-align: right;\n}\n\n.neuron-marker-poi {\n    filter: hue-rotate(0deg);\n}\n\n.neuron-marker-corner {\n    filter: hue-rotate(145deg);\n}\n\n.neuron-marker-waypoint {\n    filter: hue-rotate(180deg);\n}\n", "",{"version":3,"sources":["webpack://./src/css/plan.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,oBAAoB;IACpB,kBAAkB;IAClB,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;IACnB,qBAAqB;IACrB,cAAc;IACd,+BAA+B;AACnC;;AAEA;IACI,wCAAwC;IACxC,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;IACzB,4BAA4B;AAChC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;;AAEA;;IAEI,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;AACvB;;;AAGA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,UAAU;AACd;AACA;IACI,UAAU;IACV,aAAa;IACb,4BAA4B;IAC5B,8BAA8B;IAC9B,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;AAC9B","sourcesContent":["#fp-mission {\n    flex: auto;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n}\n\n#fp-plan-container {\n    flex: auto;\n    overflow: scroll;\n    padding-top: 0.25em;\n    padding-bottom: 0.25em;\n}\n\n#fp-plan {\n    display: flex;\n    flex-direction: column;\n}\n\n#fp-plan-title {\n    text-align: center;\n    font-weight: bold;\n    box-shadow: 0px 4px 4px #888888;\n}\n\n.mission-feature {\n    display: flex;\n    flex-direction: column;\n    border: 2px solid black;\n    border-radius: 0.5em;\n    margin-top: 0.25em;\n    margin-bottom: 0.25em;\n    margin-left: 0.5em;\n    margin-right: 0.5em;\n    scroll-margin: 0.25em;\n    padding: 0.5em;\n    box-shadow: 4px 4px 4px #888888;\n}\n\n.mission-feature-highlight {\n    background-color: var(--theme-highlight);\n    transition: 250ms linear all;\n}\n\n.mission-feature-highlight-remove {\n    background-color: inherit;\n    transition: 250ms linear all;\n}\n\n.mission-feature-hidden {\n    background: #888888;\n}\n\n.mission-feature-title {\n    flex: auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-end;\n}\n\n.mission-feature-title-button-container {\n    flex: auto;\n    flex-grow: 0;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n\n.mission-feature-title-button,\n.mission-feature-title-button-small {\n    flex: auto;\n    flex-grow: 0;\n    margin-left: 0.1em;\n    margin-right: 0.1em;\n}\n\n\n.mission-feature-title-button-small {\n    display: none;\n}\n\n.mission-feature-title-text {\n    font-weight: bold;\n    flex: auto;\n}\n.mission-feature-content {\n    flex: auto;\n    display: grid;\n    /* flex-direction: column; */\n    grid-template-columns: 50% 50%;\n    /* overflow: scroll; */\n}\n\n.mission-feature-content-label, .mission-feature-content-value {\n    display: block;\n    margin-top: 0.2em;\n}\n\n.mission-feature-content-value-center {\n    text-align: center;\n}\n\n.mission-feature-content-subtitle {\n    font-weight: bold;\n}\n\n.mission-feature-content-value-right {\n    text-align: right;\n}\n\n.neuron-marker-poi {\n    filter: hue-rotate(0deg);\n}\n\n.neuron-marker-corner {\n    filter: hue-rotate(145deg);\n}\n\n.neuron-marker-waypoint {\n    filter: hue-rotate(180deg);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/responsive.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/responsive.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Prefer portrait mode for very small screen sizes */\n@media only screen and ((orientation: portrait) or (max-width: 620px)) {\n    #fp-main {\n        flex-direction: column;\n    }\n\n    #fp-map {\n        max-height: 50%;\n    }\n\n    #fp-summary {\n        height: 50%;\n        width: 100%;\n        border-left: 0px;\n        border-top: 2px solid black;\n    }\n}\n\n@media only screen and (max-width: 820px) {\n    .fp-long-name {\n        display: none;\n    }\n\n    .leaflet-control-attribution {\n        display: none;\n    }\n}\n\n@media only screen and ((orientation: portrait) or (max-height: 620px)) and (max-width: 800px) {\n    .leaflet-control-attribution {\n        display: none;\n    }\n\n    #fp-summary > * {\n        font-size: x-small;\n    }\n\n    .mission-feature-content-value {\n        font-size: x-small;\n    }\n\n    .fp-stats-content-value {\n        font-size: x-small;\n    }\n\n    .mission-feature-title-button {\n        display: none;\n    }\n\n    .mission-feature-title-button-small {\n        display: block;\n    }\n}\n\n@media only screen and (orientation: portrait) and (max-height: 400px) {\n    #fp-summary {\n        height: 100%;\n        width: 100%;\n    }\n}\n\n@media only screen and (orientation: landscape) and (max-height: 400px) and (max-width: 620px) {\n    #fp-map {\n        max-height: 100%;\n    }\n\n    #fp-summary {\n        display: none;\n    }\n}\n\n@media print {\n    @page {\n        size: A4;\n        margin: 10mm;\n    }\n\n    /* body > * {\n        display: none;\n    } */\n    html {\n        /* height: auto; */\n        /*\n        Manually set our height and width\n        to make sure that we can scale the map\n        properly for display later.\n        Also account for our margins.\n        */\n        width: 190mm;   /* 210 */\n        height: 277mm;   /* 297 */\n    }\n\n    body {\n        height: auto;\n        width: auto;\n    }\n\n    app {\n        height: auto;\n        width: auto;\n        display: block;\n        overflow-x: auto;\n    }\n\n    #fp-manage {\n        display: none;\n    }\n    #fp-summary {\n        display: none;\n    }\n    #fp-draw {\n        display: none;\n    }\n    #fp-map {\n        width: calc(190mm);\n        height: calc(277mm/2);\n    }\n    #fp-map-interactive {\n        display: block;\n    }\n    #fp-map-help {\n        display: none;\n    }\n    #print-section {\n        display: block;\n    }\n\n    .leaflet-control-attribution {\n        display: none;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/css/responsive.css"],"names":[],"mappings":";AACA,qDAAqD;AACrD;IACI;QACI,sBAAsB;IAC1B;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,WAAW;QACX,WAAW;QACX,gBAAgB;QAChB,2BAA2B;IAC/B;AACJ;;AAEA;IACI;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,aAAa;IACjB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,cAAc;IAClB;AACJ;;AAEA;IACI;QACI,YAAY;QACZ,WAAW;IACf;AACJ;;AAEA;IACI;QACI,gBAAgB;IACpB;;IAEA;QACI,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,QAAQ;QACR,YAAY;IAChB;;IAEA;;OAEG;IACH;QACI,kBAAkB;QAClB;;;;;SAKC;QACD,YAAY,IAAI,QAAQ;QACxB,aAAa,IAAI,QAAQ;IAC7B;;IAEA;QACI,YAAY;QACZ,WAAW;IACf;;IAEA;QACI,YAAY;QACZ,WAAW;QACX,cAAc;QACd,gBAAgB;IACpB;;IAEA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,kBAAkB;QAClB,qBAAqB;IACzB;IACA;QACI,cAAc;IAClB;IACA;QACI,aAAa;IACjB;IACA;QACI,cAAc;IAClB;;IAEA;QACI,aAAa;IACjB;AACJ","sourcesContent":["\n/* Prefer portrait mode for very small screen sizes */\n@media only screen and ((orientation: portrait) or (max-width: 620px)) {\n    #fp-main {\n        flex-direction: column;\n    }\n\n    #fp-map {\n        max-height: 50%;\n    }\n\n    #fp-summary {\n        height: 50%;\n        width: 100%;\n        border-left: 0px;\n        border-top: 2px solid black;\n    }\n}\n\n@media only screen and (max-width: 820px) {\n    .fp-long-name {\n        display: none;\n    }\n\n    .leaflet-control-attribution {\n        display: none;\n    }\n}\n\n@media only screen and ((orientation: portrait) or (max-height: 620px)) and (max-width: 800px) {\n    .leaflet-control-attribution {\n        display: none;\n    }\n\n    #fp-summary > * {\n        font-size: x-small;\n    }\n\n    .mission-feature-content-value {\n        font-size: x-small;\n    }\n\n    .fp-stats-content-value {\n        font-size: x-small;\n    }\n\n    .mission-feature-title-button {\n        display: none;\n    }\n\n    .mission-feature-title-button-small {\n        display: block;\n    }\n}\n\n@media only screen and (orientation: portrait) and (max-height: 400px) {\n    #fp-summary {\n        height: 100%;\n        width: 100%;\n    }\n}\n\n@media only screen and (orientation: landscape) and (max-height: 400px) and (max-width: 620px) {\n    #fp-map {\n        max-height: 100%;\n    }\n\n    #fp-summary {\n        display: none;\n    }\n}\n\n@media print {\n    @page {\n        size: A4;\n        margin: 10mm;\n    }\n\n    /* body > * {\n        display: none;\n    } */\n    html {\n        /* height: auto; */\n        /*\n        Manually set our height and width\n        to make sure that we can scale the map\n        properly for display later.\n        Also account for our margins.\n        */\n        width: 190mm;   /* 210 */\n        height: 277mm;   /* 297 */\n    }\n\n    body {\n        height: auto;\n        width: auto;\n    }\n\n    app {\n        height: auto;\n        width: auto;\n        display: block;\n        overflow-x: auto;\n    }\n\n    #fp-manage {\n        display: none;\n    }\n    #fp-summary {\n        display: none;\n    }\n    #fp-draw {\n        display: none;\n    }\n    #fp-map {\n        width: calc(190mm);\n        height: calc(277mm/2);\n    }\n    #fp-map-interactive {\n        display: block;\n    }\n    #fp-map-help {\n        display: none;\n    }\n    #print-section {\n        display: block;\n    }\n\n    .leaflet-control-attribution {\n        display: none;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/stats_options.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/stats_options.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#fp-stats-container {\n    flex: auto;\n    flex-grow: 0;\n    display: flex;\n    flex-direction: column;\n    padding: 0.5em;\n    border-bottom: 2px solid black;\n}\n\n#fp-stats {\n    flex: auto;\n    flex-grow: 0;\n    display: flex;\n    flex-direction: column;\n}\n\n.fp-stats-title {\n    text-align: center;\n    font-weight: bold;\n    background-color: black;\n    color: white;\n    display: flex;\n    padding: 0.2em;\n}\n\n.fp-stats-title-button {\n    flex: auto;\n    flex-grow: 0;\n    margin-left: 0.5em;\n}\n\n.fp-stats-title-label {\n    flex: auto;\n}\n\n#fp-stats-options, #fp-stats-results {\n    flex: auto;\n    display: grid;\n    /* flex-direction: column; */\n    grid-template-columns: 50% 50%;\n    padding: 0.5em;\n    overflow: scroll;\n}\n\n.fp-stats-options-label, .fp-stats-options-value,\n.fp-stats-content-label, .fp-stats-content-value {\n    display: block;\n    margin-top: 0.2em;\n}\n\n.fp-stats-options-value-center, .fp-stats-content-value-center {\n    text-align: center;\n}\n\n.fp-stats-options-value-right, .fp-stats-content-value-right {\n    text-align: right;\n}\n\n/* .fp-stats-option-label {\n    flex: auto;\n}\n\n.fp-stats-option-value {\n    flex: auto;\n    max-width: 5em;\n} */\n\n.fp-stats-option-content-subtitle {\n    font-weight: bold;\n}\n", "",{"version":3,"sources":["webpack://./src/css/stats_options.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,8BAA8B;AAClC;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;IACV,aAAa;IACb,4BAA4B;IAC5B,8BAA8B;IAC9B,cAAc;IACd,gBAAgB;AACpB;;AAEA;;IAEI,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;;;;;;GAOG;;AAEH;IACI,iBAAiB;AACrB","sourcesContent":["#fp-stats-container {\n    flex: auto;\n    flex-grow: 0;\n    display: flex;\n    flex-direction: column;\n    padding: 0.5em;\n    border-bottom: 2px solid black;\n}\n\n#fp-stats {\n    flex: auto;\n    flex-grow: 0;\n    display: flex;\n    flex-direction: column;\n}\n\n.fp-stats-title {\n    text-align: center;\n    font-weight: bold;\n    background-color: black;\n    color: white;\n    display: flex;\n    padding: 0.2em;\n}\n\n.fp-stats-title-button {\n    flex: auto;\n    flex-grow: 0;\n    margin-left: 0.5em;\n}\n\n.fp-stats-title-label {\n    flex: auto;\n}\n\n#fp-stats-options, #fp-stats-results {\n    flex: auto;\n    display: grid;\n    /* flex-direction: column; */\n    grid-template-columns: 50% 50%;\n    padding: 0.5em;\n    overflow: scroll;\n}\n\n.fp-stats-options-label, .fp-stats-options-value,\n.fp-stats-content-label, .fp-stats-content-value {\n    display: block;\n    margin-top: 0.2em;\n}\n\n.fp-stats-options-value-center, .fp-stats-content-value-center {\n    text-align: center;\n}\n\n.fp-stats-options-value-right, .fp-stats-content-value-right {\n    text-align: right;\n}\n\n/* .fp-stats-option-label {\n    flex: auto;\n}\n\n.fp-stats-option-value {\n    flex: auto;\n    max-width: 5em;\n} */\n\n.fp-stats-option-content-subtitle {\n    font-weight: bold;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/leaflet/dist/leaflet.css":
/*!***********************************************!*\
  !*** ./node_modules/leaflet/dist/leaflet.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_leaflet_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!./leaflet.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/leaflet/dist/leaflet.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_leaflet_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_leaflet_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_leaflet_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_leaflet_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/brief.css":
/*!***************************!*\
  !*** ./src/css/brief.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_brief_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./brief.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/brief.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_brief_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_brief_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_brief_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_brief_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/map.css":
/*!*************************!*\
  !*** ./src/css/map.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_map_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./map.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/map.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_map_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_map_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_map_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_map_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/plan.css":
/*!**************************!*\
  !*** ./src/css/plan.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_plan_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./plan.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/plan.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_plan_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_plan_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_plan_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_plan_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/responsive.css":
/*!********************************!*\
  !*** ./src/css/responsive.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./responsive.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/responsive.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/stats_options.css":
/*!***********************************!*\
  !*** ./src/css/stats_options.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_stats_options_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./stats_options.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/stats_options.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_stats_options_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_stats_options_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_stats_options_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_stats_options_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/index.ts":
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _neuron_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neuron_options */ "./src/js/neuron_options.ts");
/* harmony import */ var _neuron_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neuron_interfaces */ "./src/js/neuron_interfaces.ts");
/* harmony import */ var _neuron_planner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./neuron_planner */ "./src/js/neuron_planner.ts");
/* harmony import */ var _neuron_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./neuron_map */ "./src/js/neuron_map.ts");
/* harmony import */ var _neuron_brief__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./neuron_brief */ "./src/js/neuron_brief.ts");
/* harmony import */ var _neuron_statistics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./neuron_statistics */ "./src/js/neuron_statistics.ts");
/* harmony import */ var _neuron_help__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./neuron_help */ "./src/js/neuron_help.ts");
/* harmony import */ var _neuron_tools_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./neuron_tools_common */ "./src/js/neuron_tools_common.ts");
/* harmony import */ var _interface_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interface_fontawesome */ "./src/js/interface_fontawesome.ts");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_map_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/map.css */ "./src/css/map.css");
/* harmony import */ var _css_stats_options_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../css/stats_options.css */ "./src/css/stats_options.css");
/* harmony import */ var _css_plan_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/plan.css */ "./src/css/plan.css");
/* harmony import */ var _css_brief_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../css/brief.css */ "./src/css/brief.css");
/* harmony import */ var _css_responsive_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../css/responsive.css */ "./src/css/responsive.css");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









//TODO: https://www.skovy.dev/blog/tree-shaking-font-awesome?seed=tnv79i
// import '@fortawesome/fontawesome-free/js/fontawesome'
// import '@fortawesome/fontawesome-free/js/solid'
// import '@fortawesome/fontawesome-free/js/regular'
// import '@fortawesome/fontawesome-free/js/brands'
// import "../css/theme.css";  //XXX: Loaded by minimal script in head





 //XXX: Load this last so it gets applied after all other definitions
/// <reference types="webpack/module" />
console.log(`Loaded V-TOL Neuron, packed with Webpack v${5}`); // without reference declared above, TypeScript will throw an error
//Initialize all of our options
_neuron_options__WEBPACK_IMPORTED_MODULE_0__.NeuronOptions.init();
//All of our preset DOM IDs
const element_name_loader = 'loader';
const element_name_app = 'app';
const element_name_plan = 'fp-plan';
const element_prefix_stats = 'fp-stats';
const element_name_map = 'fp-map-interactive';
const element_name_help = 'fp-map-help';
const element_name_brief = 'print-section';
const element_prefix_help = 'help';
const elements_ignore_help = [
    'fp-mission'
];
//Print-specific variables to store for later
const print_size_with_margin_mm = {
    width: 190,
    height: 277 / 2, /* 297 */
};
const print_size_with_margin_px = {
    width: (0,_neuron_tools_common__WEBPACK_IMPORTED_MODULE_7__.mm_to_px)(print_size_with_margin_mm.width),
    height: (0,_neuron_tools_common__WEBPACK_IMPORTED_MODULE_7__.mm_to_px)(print_size_with_margin_mm.height)
};
//Application variables
window.neuron_planner = new _neuron_planner__WEBPACK_IMPORTED_MODULE_2__.NeuronPlanner(element_name_plan);
window.neuron_map = new _neuron_map__WEBPACK_IMPORTED_MODULE_3__.NeuronMap(element_name_map, element_name_help, window.neuron_planner);
window.neuron_brief = new _neuron_brief__WEBPACK_IMPORTED_MODULE_4__.NeuronBrief(window.neuron_planner, element_name_brief);
window.neuron_statistics = new _neuron_statistics__WEBPACK_IMPORTED_MODULE_5__.NeuronStatistics(window.neuron_planner, window.neuron_brief, element_prefix_stats);
window.neuron_help = new _neuron_help__WEBPACK_IMPORTED_MODULE_6__.NeuronHelp(element_prefix_help, elements_ignore_help);
function show_loader(show) {
    const el_loader = document.getElementById(element_name_loader);
    const el_app = document.getElementById(element_name_app);
    el_loader.style.display = show ? 'flex' : 'none';
    el_app.style.display = show ? 'none' : 'flex';
}
let load_app_data = () => __awaiter(void 0, void 0, void 0, function* () {
    //Do the FA switch-out for our DOM icons
    (0,_interface_fontawesome__WEBPACK_IMPORTED_MODULE_8__.neuron_load_dom_icons)();
    //Need to do this next, because many of the following need to known their final size on reset
    show_loader(false);
    window.neuron_planner.reset();
    window.neuron_map.reset();
    window.neuron_statistics.reset();
    window.neuron_brief.reset();
    window.neuron_help.reset();
    window.neuron_planner.set_map(window.neuron_map);
    window.neuron_planner.on_mission_change(window.neuron_statistics.update_statistics.bind(window.neuron_statistics));
    //Update the map location if we can get the user's current location
    navigator.geolocation.getCurrentPosition((location) => __awaiter(void 0, void 0, void 0, function* () {
        window.neuron_map.set_location(new _neuron_interfaces__WEBPACK_IMPORTED_MODULE_1__.NeuronInterfacePoint(location.coords.latitude, location.coords.longitude));
    }));
});
document.addEventListener('DOMContentLoaded', load_app_data, false);
window.addEventListener('beforeprint', (event) => {
    //Turn off the map tools
    window.neuron_map.toggle_map_tools(false);
    //Turn off the map tools
    window.neuron_map.show_map_help(false);
    //Set the size of the map, and reset it to fit the new size
    const map = document.getElementById(element_name_map);
    // map.style.width = `${print_size_with_margin_mm.width}mm`;
    // map.style.height = `${print_size_with_margin_mm.height}mm`;
    // window.neuron_map.reset();
    //Position all visible elements on the map
    const side_pad = 50;
    let pl = side_pad;
    let pr = side_pad;
    if (print_size_with_margin_px.width > map.offsetWidth) {
        const diff = print_size_with_margin_px.width - map.offsetWidth;
        pr = -diff + side_pad;
    }
    else {
        pr = side_pad + (map.offsetWidth - print_size_with_margin_px.width);
    }
    let pt = side_pad;
    let pb = side_pad;
    if (print_size_with_margin_px.height > map.offsetHeight) {
        const diff = print_size_with_margin_px.height - map.offsetHeight;
        pb = -diff + side_pad;
    }
    else {
        pb = side_pad + (map.offsetHeight - print_size_with_margin_px.height);
    }
    window.neuron_planner.fit_mission_on_map(true, pl, pt, pr, pb);
    //Generate the brief
    window.neuron_brief.update_mission_brief();
});
window.addEventListener('afterprint', (event) => {
    //Turn off the map tools
    window.neuron_map.toggle_map_tools(true);
    //Set the size of the map, and reset it to fit the new size
    const map = document.getElementById(element_name_map);
    map.style.width = `auto`;
    map.style.height = `auto`;
    window.neuron_map.reset();
    //Position all visible elements on the map
    // window.neuron_planner.fit_mission_on_map();
});


/***/ }),

/***/ "./src/js/interface_fontawesome.ts":
/*!*****************************************!*\
  !*** ./src/js/interface_fontawesome.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeuronIcons": () => (/* binding */ NeuronIcons),
/* harmony export */   "neuron_get_icon": () => (/* binding */ neuron_get_icon),
/* harmony export */   "neuron_load_dom_icons": () => (/* binding */ neuron_load_dom_icons)
/* harmony export */ });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
// import '@fortawesome/fontawesome-free/js/fontawesome'
// import '@fortawesome/fontawesome-free/js/solid'


// const faPlusIcon = icon(faFolderOpen)
// // Get the first element out of the HTMLCollection
// document.appendChild(faPlusIcon.node[0])
var NeuronIcons;
(function (NeuronIcons) {
    NeuronIcons[NeuronIcons["LOAD_PLAN"] = 0] = "LOAD_PLAN";
    NeuronIcons[NeuronIcons["SAVE_PLAN"] = 1] = "SAVE_PLAN";
    NeuronIcons[NeuronIcons["CLEAR_PLAN"] = 2] = "CLEAR_PLAN";
    NeuronIcons[NeuronIcons["UPLOAD_PLAN"] = 3] = "UPLOAD_PLAN";
    NeuronIcons[NeuronIcons["CREATE_BRIEF"] = 4] = "CREATE_BRIEF";
    NeuronIcons[NeuronIcons["PLAN_LIST"] = 5] = "PLAN_LIST";
    NeuronIcons[NeuronIcons["HELP"] = 6] = "HELP";
    NeuronIcons[NeuronIcons["MINIMIZE"] = 7] = "MINIMIZE";
    NeuronIcons[NeuronIcons["EXPAND"] = 8] = "EXPAND";
    NeuronIcons[NeuronIcons["ARROW_UP"] = 9] = "ARROW_UP";
    NeuronIcons[NeuronIcons["ARROW_DOWN"] = 10] = "ARROW_DOWN";
    NeuronIcons[NeuronIcons["ARROW_LEFT"] = 11] = "ARROW_LEFT";
    NeuronIcons[NeuronIcons["ARROW_RIGHT"] = 12] = "ARROW_RIGHT";
    NeuronIcons[NeuronIcons["DELETE"] = 13] = "DELETE";
    NeuronIcons[NeuronIcons["IDENTIFY"] = 14] = "IDENTIFY";
    NeuronIcons[NeuronIcons["REVEAL"] = 15] = "REVEAL";
    NeuronIcons[NeuronIcons["HIDE"] = 16] = "HIDE";
    NeuronIcons[NeuronIcons["FIT_ZOOM"] = 17] = "FIT_ZOOM";
    NeuronIcons[NeuronIcons["POINT"] = 18] = "POINT";
    NeuronIcons[NeuronIcons["POLYGON"] = 19] = "POLYGON";
    NeuronIcons[NeuronIcons["IMPORT_FILE"] = 20] = "IMPORT_FILE";
    NeuronIcons[NeuronIcons["EXPORT_FILE"] = 21] = "EXPORT_FILE";
})(NeuronIcons || (NeuronIcons = {}));
function _neuron_get_icon_fa(neuron_icon) {
    let i = null;
    switch (neuron_icon) {
        case NeuronIcons.LOAD_PLAN: {
            i = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faFolderOpen;
            break;
        }
        case NeuronIcons.SAVE_PLAN: {
            i = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faSave;
            break;
        }
        case NeuronIcons.CLEAR_PLAN: {
            i = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faTrash;
            break;
        }
        case NeuronIcons.UPLOAD_PLAN: {
            i = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faUpload;
            break;
        }
        case NeuronIcons.CREATE_BRIEF: {
            i = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faFile;
            break;
        }
        case NeuronIcons.PLAN_LIST: {
            i = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faBars;
            break;
        }
        case NeuronIcons.HELP: {
            i = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faQuestionCircle;
            break;
        }
        case NeuronIcons.ARROW_UP: {
            i = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faArrowUp;
            break;
        }
        case NeuronIcons.ARROW_DOWN: {
            i = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faArrowUp;
            break;
        }
        case NeuronIcons.ARROW_LEFT: {
            i = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faArrowLeft;
            break;
        }
        case NeuronIcons.ARROW_RIGHT: {
            i = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faArrowRight;
            break;
        }
        case NeuronIcons.DELETE: {
            i = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faClose;
            break;
        }
        case NeuronIcons.IDENTIFY: {
            i = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faLocationCrosshairs;
            break;
        }
        case NeuronIcons.REVEAL: {
            i = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faEye;
            break;
        }
        case NeuronIcons.HIDE: {
            i = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faEyeSlash;
            break;
        }
        case NeuronIcons.MINIMIZE: {
            i = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faMinus;
            break;
        }
        case NeuronIcons.EXPAND: {
            i = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faPlus;
            break;
        }
        case NeuronIcons.FIT_ZOOM: {
            i = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faMinimize;
            break;
        }
        case NeuronIcons.POINT: {
            i = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faLocationDot;
            break;
        }
        case NeuronIcons.POLYGON: {
            i = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faDrawPolygon;
            break;
        }
        case NeuronIcons.IMPORT_FILE: {
            i = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faFileImport;
            break;
        }
        case NeuronIcons.EXPORT_FILE: {
            i = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faFileExport;
            break;
        }
        default: {
            break;
        }
    }
    return i;
}
function neuron_load_dom_icons() {
    //Handle the DOM conversions for hard-coded icons
    for (const icon_name in NeuronIcons) {
        const icon_id = Number(icon_name);
        if (!isNaN(icon_id)) {
            //XXX: Slight abuse of the enum, but it gets results!
            const i = _neuron_get_icon_fa(icon_id);
            if (i)
                _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.library.add(i);
        }
    }
    _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.dom.i2svg();
}
function neuron_get_icon(neuron_icon) {
    const i = _neuron_get_icon_fa(neuron_icon);
    return i ? (0,_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.icon)(i).node : new HTMLCollection();
}


/***/ }),

/***/ "./src/js/interface_leaflet.ts":
/*!*************************************!*\
  !*** ./src/js/interface_leaflet.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* reexport module object */ leaflet__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "LeafletContextMenuItem": () => (/* binding */ LeafletContextMenuItem),
/* harmony export */   "create_popup_context_dom": () => (/* binding */ create_popup_context_dom),
/* harmony export */   "get_neuron_icon": () => (/* binding */ get_neuron_icon)
/* harmony export */ });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");


// @ts-ignore
//import * as ContextMenu from "leaflet-contextmenu";
// import 'leaflet-contextmenu/dist/leaflet.contextmenu.css';\
// @ts-ignore
// import * as FileLoader from 'leaflet-filelayer'
// delete L.Icon.Default.prototype._getIconUrl;
//XXX: Fix the image paths loaded by leaflet
const default_icon_options = {
    iconUrl: __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png"),
    shadowUrl: __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png"),
    iconRetinaUrl: __webpack_require__(/*! leaflet/dist/images/marker-icon-2x.png */ "./node_modules/leaflet/dist/images/marker-icon-2x.png"),
};
leaflet__WEBPACK_IMPORTED_MODULE_0__.Icon.Default.mergeOptions(default_icon_options);
function get_neuron_icon(class_name) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_0__.Icon(Object.assign(Object.assign({}, leaflet__WEBPACK_IMPORTED_MODULE_0__.Icon.Default.prototype.options), { className: class_name }));
}
//require('leaflet/dist/images/layers.png')
//require('leaflet/dist/images/layers-2x.png')
//const cm = ContextMenu;
// const fl = FileLoader;

class LeafletContextMenuItem {
    constructor(text = "", fa_icon = "", callback = null) {
        this.text = "";
        this.icon = "";
        this.text = text;
        this.icon = fa_icon;
        if (callback)
            this.callback = callback;
    }
}
function create_popup_context_dom(popup_title = "Marker", context_items = [], marker_context = null) {
    let dom = document.createElement("div");
    dom.className = 'neuron-marker-popup';
    let t = document.createElement("div");
    t.className = 'neuron-marker-popup-title';
    t.appendChild(document.createTextNode(popup_title));
    dom.appendChild(t);
    for (const i of context_items) {
        if (i) {
            let d = document.createElement("div");
            d.className = 'neuron-marker-popup-item';
            if (i.icon) {
                let o = document.createElement('i');
                o.className = `fas ${i.icon} neuron-marker-popup-icon`;
                o.appendChild(document.createTextNode(i.text));
                d.appendChild(o);
            }
            let s = document.createElement('span');
            s.className = 'neuron-marker-popup-item-text';
            s.appendChild(document.createTextNode(i.text));
            d.appendChild(s);
            if (i.callback) {
                d.onclick = function () {
                    return i.callback(marker_context);
                };
            }
            dom.appendChild(d);
        }
        else {
            let d = document.createElement("hr");
            d.className = 'neuron-marker-popup-break';
            dom.appendChild(d);
        }
    }
    return dom;
}


/***/ }),

/***/ "./src/js/interface_proj4.ts":
/*!***********************************!*\
  !*** ./src/js/interface_proj4.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UTMLine": () => (/* binding */ UTMLine),
/* harmony export */   "UTMPos": () => (/* binding */ UTMPos)
/* harmony export */ });
/* harmony import */ var proj4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! proj4 */ "./node_modules/proj4/lib/index.js");
/* harmony import */ var _neuron_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neuron_interfaces */ "./src/js/neuron_interfaces.ts");
/* harmony import */ var _neuron_tools_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./neuron_tools_common */ "./src/js/neuron_tools_common.ts");



function EPSG_code_from_utm_zone(zone, is_south) {
    const zf = Math.floor(zone);
    if (zf <= 0 || zf > 60)
        throw new Error(`Zone out of range (${zone}|${zf})`);
    return `EPSG:326${(0,_neuron_tools_common__WEBPACK_IMPORTED_MODULE_2__.zero_pad)(zf, 2)}${is_south ? 'S' : 'N'}`;
}
//Predefine all of our zones
// https://epsg.io/32600
for (let i = 1; i <= 60; i++) {
    let projection = `+proj=utm +zone=${i}`;
    proj4__WEBPACK_IMPORTED_MODULE_0__["default"].defs(EPSG_code_from_utm_zone(i, false), projection);
    proj4__WEBPACK_IMPORTED_MODULE_0__["default"].defs(EPSG_code_from_utm_zone(i, true), projection + " +south");
}
function get_UTM_is_south(latitude_or_zone) {
    return (latitude_or_zone < 0);
}
function get_UTM_zone(latitude, longitude) {
    let zone = Math.floor((longitude - -186.0) / 6.0);
    if (get_UTM_is_south(latitude))
        zone *= -1;
    return zone;
}
class UTMPos {
    constructor(x = 0.0, y = 0.0, zone = 0.0, tag = "") {
        this.x = x;
        this.y = y;
        this.zone = zone;
        this.tag = tag;
    }
    equals(other, match_tag = false) {
        return (this.x == other.x) && (this.y == other.y) && (this.zone == other.zone) && (!match_tag || (this.tag == other.tag));
    }
    copy(tag = null) {
        return new UTMPos(this.x, this.y, this.zone, tag ? tag : this.tag);
    }
    relative_point_from_dist_bearing(bearing, distance, tag = "") {
        let degN = 90 - bearing;
        if (degN < 0)
            degN += 360;
        const deg2rad = Math.PI / 180.0;
        return new UTMPos(this.x + distance * Math.cos(degN * deg2rad), this.y + distance * Math.sin(degN * deg2rad), this.zone, tag);
    }
    GetDistance2D(b) {
        return Math.sqrt(Math.pow(Math.abs(this.x - b.x), 2) + Math.pow(Math.abs(this.y - b.y), 2));
    }
    to_NeuronInterfacePoint() {
        let p = (0,proj4__WEBPACK_IMPORTED_MODULE_0__["default"])(EPSG_code_from_utm_zone(Math.abs(this.zone), get_UTM_is_south(this.zone)), _neuron_interfaces__WEBPACK_IMPORTED_MODULE_1__.NeuronInterfacePoint.projection_code(), [this.x, this.y]);
        //p given as [lng, lat]
        return new _neuron_interfaces__WEBPACK_IMPORTED_MODULE_1__.NeuronInterfacePoint(p[1], p[0], 0.0, 0.0, this.tag);
    }
    /**
     * @param  {NeuronInterfacePoint} point Point to create the transformation from
     * @param  {number=null} zone Zone override to use during the projection
     * @param  {string=""} tag Additional tag information for this point
     */
    static from_NeuronInterfacePoint(point, zone = null) {
        if (!zone)
            zone = get_UTM_zone(point.latitude, point.longitude);
        let p = (0,proj4__WEBPACK_IMPORTED_MODULE_0__["default"])(_neuron_interfaces__WEBPACK_IMPORTED_MODULE_1__.NeuronInterfacePoint.projection_code(), EPSG_code_from_utm_zone(Math.abs(zone), get_UTM_is_south(zone)), [point.longitude, point.latitude]);
        //p given as [x, y]
        return new UTMPos(p[0], p[1], zone, point.tag);
    }
}
class UTMLine {
    constructor(p1, p2, base_pnt) {
        this.p1 = p1;
        this.p2 = p2;
        this.base_pnt = base_pnt;
    }
}


/***/ }),

/***/ "./src/js/neuron_brief.ts":
/*!********************************!*\
  !*** ./src/js/neuron_brief.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeuronBrief": () => (/* binding */ NeuronBrief)
/* harmony export */ });
/* harmony import */ var _neuron_feature_waypoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neuron_feature_waypoint */ "./src/js/neuron_feature_waypoint.ts");
/* harmony import */ var _neuron_feature_survey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neuron_feature_survey */ "./src/js/neuron_feature_survey.ts");
/* harmony import */ var _neuron_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./neuron_interfaces */ "./src/js/neuron_interfaces.ts");
/* harmony import */ var _neuron_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./neuron_options */ "./src/js/neuron_options.ts");
/* harmony import */ var _neuron_tools_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./neuron_tools_common */ "./src/js/neuron_tools_common.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NeuronBrief_planner, _NeuronBrief_brief_element, _NeuronBrief_brief_element_name;
// import { NeuronFeatureBase } from "./neuron_feature_base";

// import { NeuronFeaturePolygon } from "./neuron_feature_polygon";




class NeuronBrief {
    constructor(planner, brief_element_name) {
        // static TYPE = 'NeuronBrief';
        // static VERSION = 'bb92b580-d319-11ec-8818-bfb4bc4aa250';
        _NeuronBrief_planner.set(this, void 0);
        _NeuronBrief_brief_element.set(this, void 0);
        _NeuronBrief_brief_element_name.set(this, void 0);
        __classPrivateFieldSet(this, _NeuronBrief_planner, planner, "f");
        __classPrivateFieldSet(this, _NeuronBrief_brief_element, null, "f");
        __classPrivateFieldSet(this, _NeuronBrief_brief_element_name, brief_element_name, "f");
    }
    reset() {
        __classPrivateFieldSet(this, _NeuronBrief_brief_element, document.getElementById(__classPrivateFieldGet(this, _NeuronBrief_brief_element_name, "f")), "f");
    }
    update_mission_brief() {
        const summary = this.get_mission_summary();
        // var tab = window.open('about:blank', '_blank');
        // // tab.document.write(html); // where 'html' is a variable containing your HTML
        // tab.document.head.title = "Neuron Planner Mission Brief";
        // let title = tab.document.createElement('h1');
        // title.appendChild(tab.document.createTextNode("Mission Brief"));
        __classPrivateFieldGet(this, _NeuronBrief_brief_element, "f").innerHTML = '';
        let title = document.createElement('h1');
        title.appendChild(document.createTextNode("Mission Brief"));
        __classPrivateFieldGet(this, _NeuronBrief_brief_element, "f").appendChild(title);
        if (summary.brief.length) {
            const headings = [
                "Step",
                "Type",
                "Description",
                "Features",
                "",
                "",
                "Transit",
                "Duration",
            ];
            let table = document.createElement('div');
            table.className = 'brief-table';
            for (const h of headings) {
                let th = document.createElement('div');
                th.className = 'brief-table-header';
                th.appendChild(document.createTextNode(h));
                table.appendChild(th);
            }
            // for(let j = 0; j < row_step; j++) {
            //     if(i + j >= rows.length)
            //         break;
            //     table.appendChild(rows[i + j]);
            // }
            let count = 0;
            for (const item of summary.brief) {
                count++;
                //XXX: Check item.type for special cases of bold tallies
                const content = [
                    item.type ? count.toString() : "",
                    item.type,
                    item.description,
                    item.components.length ? item.components[0].field1 : "—",
                    item.components.length ? item.components[0].field2 : "—",
                    item.components.length ? item.components[0].field3 : "—",
                    item.time_transit,
                    item.time_duration
                ];
                const ind_values_start = 3;
                for (let j = 0; j < content.length; j++) {
                    let td = document.createElement('div');
                    td.appendChild(document.createTextNode(content[j]));
                    if ((j == 0) || (j >= ind_values_start))
                        td.classList.add('brief-table-entry-right');
                    if (!item.type)
                        td.classList.add('brief-table-entry-bold');
                    td.classList.add('brief-table-entry');
                    table.appendChild(td);
                }
                //Handle case of multiple components (skipped if one or less)
                for (let i = 1; i < item.components.length; i++) {
                    const content = [
                        "",
                        "",
                        "",
                        item.components[i].field1,
                        item.components[i].field2,
                        item.components[i].field3,
                        "",
                        ""
                    ];
                    for (const h of content) {
                        let td = document.createElement('div');
                        td.appendChild(document.createTextNode(h));
                        td.className = 'brief-table-entry-right brief-table-entry';
                        table.appendChild(td);
                    }
                }
            }
            __classPrivateFieldGet(this, _NeuronBrief_brief_element, "f").appendChild(table);
        }
        else {
            let td = document.createElement('div');
            td.appendChild(document.createTextNode("No mission plan available."));
            __classPrivateFieldGet(this, _NeuronBrief_brief_element, "f").appendChild(td);
        }
    }
    static get_components_from_point(point) {
        return {
            field1: point.toStringLatitude(),
            field2: point.toStringLongitude(),
            field3: point.toStringAltitude(),
        };
    }
    get_mission_summary() {
        let summary = {
            brief: [],
            total_distance: 0,
            total_duration: 0,
            total_images: 0
        };
        const steps = __classPrivateFieldGet(this, _NeuronBrief_planner, "f").get_mission_as_points();
        let takeoff_duration = 0;
        let land_duration = 0;
        let extra_mission_duration = 0;
        let takeoff_distance = 0;
        let land_distance = 0;
        if (steps.length) {
            //Get the flight speed and lock it to at least 0.1m/s
            const s = _neuron_options__WEBPACK_IMPORTED_MODULE_3__.NeuronOptions.get_option_number(_neuron_options__WEBPACK_IMPORTED_MODULE_3__.NeuronOptionsNumber.MISSION_SPEED);
            const flight_speed = Math.max(s ? s : 0.0, 0.1);
            let point_last = null;
            // let time_takeoff = "—";
            let takeoff_point = steps[0];
            if (takeoff_point.altitude != 0) {
                takeoff_point = new _neuron_interfaces__WEBPACK_IMPORTED_MODULE_2__.NeuronInterfacePoint(steps[0].latitude, steps[0].longitude, 0.0);
                const takeoff_coords = [takeoff_point, steps[0]];
                takeoff_distance = (0,_neuron_tools_common__WEBPACK_IMPORTED_MODULE_4__.flight_distance_from_coords)(takeoff_coords);
                takeoff_duration = takeoff_distance / flight_speed;
                point_last = takeoff_point;
                // time_takeoff = "+" + flight_time_from_duration(takeoff_duration);
            }
            let step0 = {
                type: _neuron_feature_waypoint__WEBPACK_IMPORTED_MODULE_0__.NeuronFeatureWaypoint.NAME,
                description: "Take-off at location",
                components: [NeuronBrief.get_components_from_point(takeoff_point)],
                time_duration: "—",
                time_transit: "—",
            };
            summary.brief.push(step0);
            for (const item of __classPrivateFieldGet(this, _NeuronBrief_planner, "f").get_mission_items()) {
                let path = item.get_path_coords();
                let time_transit = "—";
                if (path.length && point_last) {
                    const transit_coords = [point_last, path[0]];
                    const transit_distance = (0,_neuron_tools_common__WEBPACK_IMPORTED_MODULE_4__.flight_distance_from_coords)(transit_coords);
                    time_transit = "+" + (0,_neuron_tools_common__WEBPACK_IMPORTED_MODULE_4__.flight_time_from_duration)(transit_distance / flight_speed);
                }
                let step = null;
                //XXX: Ignore mission items with no points
                // if(item instanceof NeuronFeatureBase) {
                // } else
                if (item instanceof _neuron_feature_waypoint__WEBPACK_IMPORTED_MODULE_0__.NeuronFeatureWaypoint) {
                    if (path.length) {
                        const wait = item.get_wait_duration();
                        extra_mission_duration += wait;
                        const image_count = item.get_image_count();
                        step = {
                            type: _neuron_feature_waypoint__WEBPACK_IMPORTED_MODULE_0__.NeuronFeatureWaypoint.NAME,
                            description: "Fly to location" + (image_count ? ' and capture image' : ''),
                            components: path.map(x => NeuronBrief.get_components_from_point(x)),
                            time_duration: wait > 0 ? "+" + (0,_neuron_tools_common__WEBPACK_IMPORTED_MODULE_4__.flight_time_from_duration)(wait) : "—",
                            time_transit: time_transit
                        };
                        summary.total_images += image_count;
                    }
                    // } else if(item instanceof NeuronFeaturePolygon) {
                }
                else if (item instanceof _neuron_feature_survey__WEBPACK_IMPORTED_MODULE_1__.NeuronFeatureSurvey) {
                    let corners = item.get_corners_as_points();
                    if (path.length) {
                        const step_distance = (0,_neuron_tools_common__WEBPACK_IMPORTED_MODULE_4__.flight_distance_from_coords)(path);
                        const step_duration = "+" + (0,_neuron_tools_common__WEBPACK_IMPORTED_MODULE_4__.flight_time_from_duration)(step_distance / flight_speed);
                        step = {
                            type: _neuron_feature_survey__WEBPACK_IMPORTED_MODULE_1__.NeuronFeatureSurvey.NAME,
                            description: "Survey area with bounds",
                            components: corners.map(x => NeuronBrief.get_components_from_point(x)),
                            time_duration: step_duration,
                            time_transit: time_transit,
                        };
                        summary.total_images += item.get_image_count();
                    }
                }
                else {
                    // console.warn("Unable to add mission item to brief");
                    // console.warn(item);
                }
                if (path.length)
                    point_last = path[path.length - 1];
                if (step)
                    summary.brief.push(step);
            }
            let time_land = "—";
            let land_point = point_last;
            let land_component = {
                field1: "—",
                field2: "—",
                field3: "—"
            };
            if (land_point && land_point.altitude != 0) {
                land_point = new _neuron_interfaces__WEBPACK_IMPORTED_MODULE_2__.NeuronInterfacePoint(point_last.latitude, point_last.longitude, 0.0);
                land_component = NeuronBrief.get_components_from_point(land_point);
                const land_coords = [point_last, land_point];
                land_distance = (0,_neuron_tools_common__WEBPACK_IMPORTED_MODULE_4__.flight_distance_from_coords)(land_coords);
                land_duration = land_distance / flight_speed;
                time_land = "+" + (0,_neuron_tools_common__WEBPACK_IMPORTED_MODULE_4__.flight_time_from_duration)(land_duration);
            }
            let step_n = {
                type: _neuron_feature_waypoint__WEBPACK_IMPORTED_MODULE_0__.NeuronFeatureWaypoint.NAME,
                description: "Land at location",
                components: [land_component],
                time_duration: time_land,
                time_transit: "—"
            };
            summary.brief.push(step_n);
            summary.total_distance = (0,_neuron_tools_common__WEBPACK_IMPORTED_MODULE_4__.flight_distance_from_coords)(steps) + takeoff_distance + land_distance;
            const total_transit_duration = summary.total_distance / flight_speed;
            summary.total_duration = total_transit_duration + takeoff_duration + land_duration + extra_mission_duration;
            const total_time = (0,_neuron_tools_common__WEBPACK_IMPORTED_MODULE_4__.flight_time_from_duration)(summary.total_duration);
            let step_total_time = {
                type: "",
                description: "",
                components: [{
                        field1: "",
                        field2: "",
                        field3: "",
                    }],
                time_transit: "Duration:",
                time_duration: total_time,
            };
            summary.brief.push(step_total_time);
            let step_total_distance = {
                type: "",
                description: "",
                components: [{
                        field1: "",
                        field2: "",
                        field3: "",
                    }],
                time_transit: "Distance:",
                time_duration: `${(summary.total_distance / 1000).toFixed(2)}km`,
            };
            summary.brief.push(step_total_distance);
            let step_total_images = {
                type: "",
                description: "",
                components: [{
                        field1: "",
                        field2: "",
                        field3: "",
                    }],
                time_transit: "Images:",
                time_duration: summary.total_images > 0 ? summary.total_images.toString() : "—",
            };
            summary.brief.push(step_total_images);
        }
        return summary;
    }
}
_NeuronBrief_planner = new WeakMap(), _NeuronBrief_brief_element = new WeakMap(), _NeuronBrief_brief_element_name = new WeakMap();


/***/ }),

/***/ "./src/js/neuron_dom_factory.ts":
/*!**************************************!*\
  !*** ./src/js/neuron_dom_factory.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeuronDOMFactory": () => (/* binding */ NeuronDOMFactory)
/* harmony export */ });
/* harmony import */ var _neuron_tools_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neuron_tools_common */ "./src/js/neuron_tools_common.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NeuronDOMFactory_prefix;

class NeuronDOMFactory {
    constructor(css_prefix) {
        _NeuronDOMFactory_prefix.set(this, void 0);
        __classPrivateFieldSet(this, _NeuronDOMFactory_prefix, css_prefix, "f");
    }
    _create_dom_label(text, input, description = null, hide_label = false) {
        // let dom = document.createElement("div");
        // dom.className = `${this.#prefix}-content-item';
        if (!input.id)
            input.id = (0,_neuron_tools_common__WEBPACK_IMPORTED_MODULE_0__.NeuronUID)();
        let l = document.createElement("label");
        l.className = `${__classPrivateFieldGet(this, _NeuronDOMFactory_prefix, "f")}-content-label`;
        l.htmlFor = input.id;
        if (description)
            l.title = description;
        if (hide_label)
            l.style.visibility = 'hidden';
        l.appendChild(document.createTextNode(text));
        // if(label_first) {
        //     dom.appendChild(l);
        //     dom.appendChild(input);
        // } else {
        //     dom.appendChild(input);
        //     dom.appendChild(l);
        // }
        return l;
    }
    _create_dom_output(value = null) {
        let dom = document.createElement("output");
        dom.className = `${__classPrivateFieldGet(this, _NeuronDOMFactory_prefix, "f")}-content-value ${__classPrivateFieldGet(this, _NeuronDOMFactory_prefix, "f")}-content-value-right`;
        if (value != null)
            dom.value = value;
        return dom;
    }
    _create_dom_input_file(on_change, accepts = null) {
        let dom = document.createElement("input");
        dom.type = "file";
        if (accepts != null)
            dom.accept = accepts;
        dom.className = `${__classPrivateFieldGet(this, _NeuronDOMFactory_prefix, "f")}-content-value`;
        dom.onchange = on_change;
        return dom;
    }
    _create_dom_input_button(text, on_change) {
        let dom = document.createElement("button");
        dom.className = `${__classPrivateFieldGet(this, _NeuronDOMFactory_prefix, "f")}-content-value ${__classPrivateFieldGet(this, _NeuronDOMFactory_prefix, "f")}-content-value-center`;
        dom.onclick = on_change;
        dom.appendChild(document.createTextNode(text));
        return dom;
    }
    _create_dom_input_textbox(value, on_change) {
        let dom = document.createElement("input");
        dom.type = "text";
        dom.value = value.toString();
        dom.className = `${__classPrivateFieldGet(this, _NeuronDOMFactory_prefix, "f")}-content-value`;
        dom.onchange = on_change;
        return dom;
    }
    _create_dom_input_number(value, on_change, min = null, max = null, step = null) {
        let dom = document.createElement("input");
        dom.type = "number";
        if (min != null)
            dom.min = min.toString();
        if (max != null)
            dom.max = max.toString();
        if (step != null)
            dom.step = step.toString();
        dom.value = value.toString();
        dom.className = `${__classPrivateFieldGet(this, _NeuronDOMFactory_prefix, "f")}-content-value ${__classPrivateFieldGet(this, _NeuronDOMFactory_prefix, "f")}-content-value-right`;
        dom.onchange = on_change;
        return dom;
    }
    _create_dom_input_range(value, on_change, min, max, step = null) {
        let dom = document.createElement("input");
        dom.type = "range";
        dom.min = min.toString();
        dom.max = max.toString();
        if (step == null)
            step = (max - min) / 100;
        dom.step = step.toString();
        dom.value = value.toString();
        dom.className = `${__classPrivateFieldGet(this, _NeuronDOMFactory_prefix, "f")}-content-value ${__classPrivateFieldGet(this, _NeuronDOMFactory_prefix, "f")}-content-value-right`;
        dom.onchange = on_change;
        return dom;
    }
    _create_dom_input_checkbox(checked, on_change) {
        let dom = document.createElement("input");
        dom.type = "checkbox";
        dom.checked = checked;
        dom.className = `${__classPrivateFieldGet(this, _NeuronDOMFactory_prefix, "f")}-content-value ${__classPrivateFieldGet(this, _NeuronDOMFactory_prefix, "f")}-content-value-right`;
        dom.onchange = on_change;
        return dom;
    }
    _create_dom_input_select(options, labels, on_change, selected_option = null) {
        let dom = document.createElement("select");
        if (options.length != labels.length)
            throw new Error(`Options list does not match labels list (${options.length} != ${labels.length})`);
        //Create and append the options
        for (let i = 0; i < options.length; i++) {
            let option = document.createElement("option");
            option.value = options[i];
            option.text = labels[i];
            if (selected_option && selected_option == options[i])
                option.selected = true;
            dom.appendChild(option);
        }
        dom.className = `${__classPrivateFieldGet(this, _NeuronDOMFactory_prefix, "f")}-content-value`;
        dom.onchange = on_change;
        return dom;
    }
}
_NeuronDOMFactory_prefix = new WeakMap();


/***/ }),

/***/ "./src/js/neuron_feature_base.ts":
/*!***************************************!*\
  !*** ./src/js/neuron_feature_base.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeuronFeatureBase": () => (/* binding */ NeuronFeatureBase)
/* harmony export */ });
/* harmony import */ var _interface_leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface_leaflet */ "./src/js/interface_leaflet.ts");
/* harmony import */ var _neuron_dom_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neuron_dom_factory */ "./src/js/neuron_dom_factory.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NeuronFeatureBase_instances, _NeuronFeatureBase_visible, _NeuronFeatureBase_map, _NeuronFeatureBase_features, _NeuronFeatureBase_hidden_features, _NeuronFeatureBase_on_remove, _NeuronFeatureBase_on_change, _NeuronFeatureBase_on_move, _NeuronFeatureBase_dom, _NeuronFeatureBase_dom_buttons_visibility, _NeuronFeatureBase_update_visibility_dom, _NeuronFeatureBase_update_visibility_icons, _NeuronFeatureBase_get_button_size_class, _NeuronFeatureBase_request_move;


class NeuronFeatureBase extends _neuron_dom_factory__WEBPACK_IMPORTED_MODULE_1__.NeuronDOMFactory {
    constructor(map) {
        super('mission-feature');
        _NeuronFeatureBase_instances.add(this);
        _NeuronFeatureBase_visible.set(this, void 0);
        _NeuronFeatureBase_map.set(this, void 0);
        _NeuronFeatureBase_features.set(this, void 0);
        _NeuronFeatureBase_hidden_features.set(this, void 0);
        _NeuronFeatureBase_on_remove.set(this, void 0);
        _NeuronFeatureBase_on_change.set(this, void 0);
        _NeuronFeatureBase_on_move.set(this, void 0);
        _NeuronFeatureBase_dom.set(this, void 0);
        _NeuronFeatureBase_dom_buttons_visibility.set(this, void 0);
        __classPrivateFieldSet(this, _NeuronFeatureBase_visible, true, "f");
        __classPrivateFieldSet(this, _NeuronFeatureBase_features, [], "f");
        __classPrivateFieldSet(this, _NeuronFeatureBase_hidden_features, [], "f");
        __classPrivateFieldSet(this, _NeuronFeatureBase_map, map, "f");
        __classPrivateFieldSet(this, _NeuronFeatureBase_dom_buttons_visibility, [], "f");
        __classPrivateFieldSet(this, _NeuronFeatureBase_dom, null, "f");
        this.set_remove_callback(null);
        this.set_change_callback(null);
        this.set_move_callback(null);
    }
    _trigger_on_changed() {
        if (__classPrivateFieldGet(this, _NeuronFeatureBase_on_change, "f"))
            __classPrivateFieldGet(this, _NeuronFeatureBase_on_change, "f").call(this, this);
    }
    _add_layer_to_map(m) {
        if (__classPrivateFieldGet(this, _NeuronFeatureBase_map, "f")) {
            if (__classPrivateFieldGet(this, _NeuronFeatureBase_visible, "f")) {
                m.addTo(__classPrivateFieldGet(this, _NeuronFeatureBase_map, "f"));
                // //XXX: Forbidden work to change the hue of the marker (must be done after adding to map)
                // //@ts-ignore
                // if(icon_adj && m._icon) {
                //     //@ts-ignore
                //     m._icon.classList.add(icon_adj);
                // }
                __classPrivateFieldGet(this, _NeuronFeatureBase_features, "f").push(m);
            }
            else {
                __classPrivateFieldGet(this, _NeuronFeatureBase_hidden_features, "f").push(m);
            }
            // m.on('remove', this._feature_removed.bind(this));
        }
        else {
            console.error('Error: no map reference set');
        }
    }
    _remove_layer_from_map(m) {
        let index_visible = __classPrivateFieldGet(this, _NeuronFeatureBase_features, "f").indexOf(m);
        if (index_visible !== -1) {
            __classPrivateFieldGet(this, _NeuronFeatureBase_features, "f").splice(index_visible, 1);
            m.remove();
        }
        let index_hidden = __classPrivateFieldGet(this, _NeuronFeatureBase_hidden_features, "f").indexOf(m);
        if (index_hidden !== -1) {
            __classPrivateFieldGet(this, _NeuronFeatureBase_features, "f").splice(index_hidden, 1);
            //XXX: These already do not exist on the map, so no need to remove!
        }
    }
    _get_dom(text = "Mission Feature") {
        __classPrivateFieldSet(this, _NeuronFeatureBase_dom, document.createElement("div"), "f");
        __classPrivateFieldGet(this, _NeuronFeatureBase_dom, "f").className = 'mission-feature';
        let title = document.createElement("div");
        title.className = 'mission-feature-title';
        let t = document.createElement("div");
        t.className = 'mission-feature-title-text';
        t.appendChild(document.createTextNode(text));
        title.appendChild(t);
        let d = document.createElement("div");
        d.className = 'mission-feature-title-button-container';
        __classPrivateFieldSet(this, _NeuronFeatureBase_dom_buttons_visibility, [], "f");
        for (const button_class of NeuronFeatureBase._button_sizes) {
            const fa_size = __classPrivateFieldGet(this, _NeuronFeatureBase_instances, "m", _NeuronFeatureBase_get_button_size_class).call(this, button_class);
            let b0 = document.createElement("button");
            b0.className = button_class;
            b0.title = "Zoom to feature";
            b0.onclick = this.zoom_to_feature.bind(this);
            let b0i = document.createElement("i");
            b0i.className = 'fas fa-location-crosshairs' + fa_size;
            b0.appendChild(b0i);
            d.appendChild(b0);
            let bv = document.createElement("button");
            bv.className = button_class;
            bv.title = "Toggle feature visibility";
            bv.onclick = this.toggle_visibility.bind(this);
            d.appendChild(bv);
            __classPrivateFieldGet(this, _NeuronFeatureBase_dom_buttons_visibility, "f").push(bv);
            let b1 = document.createElement("button");
            b1.className = button_class;
            b1.title = "Move up";
            b1.onclick = __classPrivateFieldGet(this, _NeuronFeatureBase_instances, "m", _NeuronFeatureBase_request_move).bind(this, -1);
            let b1i = document.createElement("i");
            b1i.className = 'fas fa-arrow-up' + fa_size;
            b1.appendChild(b1i);
            d.appendChild(b1);
            let b2 = document.createElement("button");
            b2.className = button_class;
            b2.title = "Move down";
            b2.onclick = __classPrivateFieldGet(this, _NeuronFeatureBase_instances, "m", _NeuronFeatureBase_request_move).bind(this, 1);
            let b2i = document.createElement("i");
            b2i.className = 'fas fa-arrow-down' + fa_size;
            b2.appendChild(b2i);
            d.appendChild(b2);
            let b4 = document.createElement("button");
            b4.className = button_class;
            b4.title = "Help";
            b4.onclick = this.show_help.bind(this);
            let b4i = document.createElement("i");
            b4i.className = 'fas fa-question' + fa_size;
            b4.appendChild(b4i);
            d.appendChild(b4);
            let b3 = document.createElement("button");
            b3.className = button_class;
            b3.title = "Remove";
            b3.onclick = this.remove_feature.bind(this);
            let b3i = document.createElement("i");
            b3i.className = 'fas fa-close' + fa_size;
            b3.appendChild(b3i);
            d.appendChild(b3);
        }
        title.appendChild(d);
        __classPrivateFieldGet(this, _NeuronFeatureBase_instances, "m", _NeuronFeatureBase_update_visibility_icons).call(this);
        __classPrivateFieldGet(this, _NeuronFeatureBase_instances, "m", _NeuronFeatureBase_update_visibility_dom).call(this);
        __classPrivateFieldGet(this, _NeuronFeatureBase_dom, "f").appendChild(title);
        return __classPrivateFieldGet(this, _NeuronFeatureBase_dom, "f");
    }
    set_remove_callback(on_remove) {
        __classPrivateFieldSet(this, _NeuronFeatureBase_on_remove, on_remove, "f");
    }
    set_change_callback(on_change) {
        __classPrivateFieldSet(this, _NeuronFeatureBase_on_change, on_change, "f");
    }
    set_move_callback(on_move) {
        __classPrivateFieldSet(this, _NeuronFeatureBase_on_move, on_move, "f");
    }
    get_features() {
        return __classPrivateFieldGet(this, _NeuronFeatureBase_features, "f");
    }
    toggle_visibility() {
        __classPrivateFieldSet(this, _NeuronFeatureBase_visible, !__classPrivateFieldGet(this, _NeuronFeatureBase_visible, "f"), "f");
        if (__classPrivateFieldGet(this, _NeuronFeatureBase_visible, "f")) {
            //Show layers
            __classPrivateFieldSet(this, _NeuronFeatureBase_features, [].concat(__classPrivateFieldGet(this, _NeuronFeatureBase_hidden_features, "f")), "f");
            __classPrivateFieldSet(this, _NeuronFeatureBase_hidden_features, [], "f");
            for (let feature of __classPrivateFieldGet(this, _NeuronFeatureBase_features, "f"))
                feature.addTo(__classPrivateFieldGet(this, _NeuronFeatureBase_map, "f"));
        }
        else {
            //Hide layers
            __classPrivateFieldSet(this, _NeuronFeatureBase_hidden_features, [].concat(__classPrivateFieldGet(this, _NeuronFeatureBase_features, "f")), "f");
            __classPrivateFieldSet(this, _NeuronFeatureBase_features, [], "f");
            for (let feature of __classPrivateFieldGet(this, _NeuronFeatureBase_hidden_features, "f"))
                feature.remove();
        }
        __classPrivateFieldGet(this, _NeuronFeatureBase_instances, "m", _NeuronFeatureBase_update_visibility_icons).call(this);
        __classPrivateFieldGet(this, _NeuronFeatureBase_instances, "m", _NeuronFeatureBase_update_visibility_dom).call(this);
    }
    zoom_to_feature() {
        const group = _interface_leaflet__WEBPACK_IMPORTED_MODULE_0__.L.featureGroup(__classPrivateFieldGet(this, _NeuronFeatureBase_features, "f"));
        __classPrivateFieldGet(this, _NeuronFeatureBase_map, "f").fitBounds(group.getBounds(), {
            padding: [20, 20]
        });
    }
    show_help() {
        //XXX: Implement this per inherited feature
        //XXX: Explicitly do use "base" key for the base feature
        window.neuron_map.show_map_help(true);
    }
    remove_feature() {
        //XXX: Implement this per inherited feature
        if (__classPrivateFieldGet(this, _NeuronFeatureBase_on_remove, "f"))
            __classPrivateFieldGet(this, _NeuronFeatureBase_on_remove, "f").call(this, this);
    }
    get_path_coords() {
        //XXX: Implement this per inherited feature
        const coords = [];
        return coords;
    }
    get_dom() {
        //XXX: Implement this per inherited feature
        return this._get_dom();
    }
    static isObjectOfDataType(object) {
        let is_valid = (object.type == NeuronFeatureBase.TYPE) &&
            (object.version == NeuronFeatureBase.VERSION);
        return is_valid;
    }
    static from_json(j, map) {
        //XXX: Implement this per inherited feature
        if (!NeuronFeatureBase.isObjectOfDataType(j))
            throw new Error(`Invalid type check during creation of NeuronFeatureBase`);
        return new NeuronFeatureBase(map);
    }
    to_json() {
        //XXX: Implement this per inherited feature
        return {
            version: NeuronFeatureBase.VERSION,
            type: NeuronFeatureBase.TYPE
        };
    }
}
_NeuronFeatureBase_visible = new WeakMap(), _NeuronFeatureBase_map = new WeakMap(), _NeuronFeatureBase_features = new WeakMap(), _NeuronFeatureBase_hidden_features = new WeakMap(), _NeuronFeatureBase_on_remove = new WeakMap(), _NeuronFeatureBase_on_change = new WeakMap(), _NeuronFeatureBase_on_move = new WeakMap(), _NeuronFeatureBase_dom = new WeakMap(), _NeuronFeatureBase_dom_buttons_visibility = new WeakMap(), _NeuronFeatureBase_instances = new WeakSet(), _NeuronFeatureBase_update_visibility_dom = function _NeuronFeatureBase_update_visibility_dom() {
    if (__classPrivateFieldGet(this, _NeuronFeatureBase_dom, "f")) {
        if (__classPrivateFieldGet(this, _NeuronFeatureBase_visible, "f")) {
            __classPrivateFieldGet(this, _NeuronFeatureBase_dom, "f").classList.remove('mission-feature-hidden');
        }
        else {
            __classPrivateFieldGet(this, _NeuronFeatureBase_dom, "f").classList.add('mission-feature-hidden');
        }
    }
}, _NeuronFeatureBase_update_visibility_icons = function _NeuronFeatureBase_update_visibility_icons() {
    for (let but of __classPrivateFieldGet(this, _NeuronFeatureBase_dom_buttons_visibility, "f")) {
        const fa_size = __classPrivateFieldGet(this, _NeuronFeatureBase_instances, "m", _NeuronFeatureBase_get_button_size_class).call(this, but.className);
        but.innerHTML = '';
        let bvi = document.createElement("i");
        bvi.className = 'fas ' + (__classPrivateFieldGet(this, _NeuronFeatureBase_visible, "f") ? 'fa-eye-slash' : 'fa-eye') + fa_size;
        but.appendChild(bvi);
    }
}, _NeuronFeatureBase_get_button_size_class = function _NeuronFeatureBase_get_button_size_class(button_class) {
    return button_class.includes('small') ? " fa-2xs" : "";
}, _NeuronFeatureBase_request_move = function _NeuronFeatureBase_request_move(direction = 0) {
    if (__classPrivateFieldGet(this, _NeuronFeatureBase_on_move, "f") && direction != 0)
        __classPrivateFieldGet(this, _NeuronFeatureBase_on_move, "f").call(this, this, direction);
};
//XXX: Override this in any inherited classes
NeuronFeatureBase.NAME = "[BASE FEATURE]";
NeuronFeatureBase.TYPE = "NeuronFeatureBase";
NeuronFeatureBase.VERSION = '5caf31f0-d243-11ec-bbb3-df25a4f645e3';
NeuronFeatureBase.HELP_KEY = 'base';
NeuronFeatureBase._altitude_ratio = 0.3048; //ft -> m: `Alt = [DOM Value] * Ratio
//Add two sets of icons, one for each size button
NeuronFeatureBase._button_sizes = [
    'mission-feature-title-button',
    'mission-feature-title-button-small'
];


/***/ }),

/***/ "./src/js/neuron_feature_point.ts":
/*!****************************************!*\
  !*** ./src/js/neuron_feature_point.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeuronFeaturePoint": () => (/* binding */ NeuronFeaturePoint)
/* harmony export */ });
/* harmony import */ var _neuron_feature_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neuron_feature_base */ "./src/js/neuron_feature_base.ts");
/* harmony import */ var _neuron_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neuron_interfaces */ "./src/js/neuron_interfaces.ts");
/* harmony import */ var _interface_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface_leaflet */ "./src/js/interface_leaflet.ts");
/* harmony import */ var _neuron_help__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./neuron_help */ "./src/js/neuron_help.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NeuronFeaturePoint_instances, _NeuronFeaturePoint_planner, _NeuronFeaturePoint_marker, _NeuronFeaturePoint_point, _NeuronFeaturePoint_dom, _NeuronFeaturePoint_dom_label, _NeuronFeaturePoint_dom_lat, _NeuronFeaturePoint_dom_lon, _NeuronFeaturePoint_dom_alt, _NeuronFeaturePoint_dom_convert_waypoint, _NeuronFeaturePoint_remove_point_by_event, _NeuronFeaturePoint_update_position_from_event, _NeuronFeaturePoint_remove_dom_highlight, _NeuronFeaturePoint_internal_set_point, _NeuronFeaturePoint_update_latitude_from_dom, _NeuronFeaturePoint_update_tag_from_dom, _NeuronFeaturePoint_update_longitude_from_dom, _NeuronFeaturePoint_update_altitude_from_dom, _NeuronFeaturePoint_convert_to_waypoint;




class NeuronFeaturePoint extends _neuron_feature_base__WEBPACK_IMPORTED_MODULE_0__.NeuronFeatureBase {
    constructor(map, point = null, planner = null) {
        super(map);
        _NeuronFeaturePoint_instances.add(this);
        _NeuronFeaturePoint_planner.set(this, void 0);
        _NeuronFeaturePoint_marker.set(this, void 0);
        _NeuronFeaturePoint_point.set(this, void 0);
        _NeuronFeaturePoint_dom.set(this, void 0);
        _NeuronFeaturePoint_dom_label.set(this, void 0);
        _NeuronFeaturePoint_dom_lat.set(this, void 0);
        _NeuronFeaturePoint_dom_lon.set(this, void 0);
        _NeuronFeaturePoint_dom_alt.set(this, void 0);
        _NeuronFeaturePoint_dom_convert_waypoint.set(this, void 0);
        __classPrivateFieldSet(this, _NeuronFeaturePoint_marker, null, "f");
        __classPrivateFieldSet(this, _NeuronFeaturePoint_point, null, "f");
        __classPrivateFieldSet(this, _NeuronFeaturePoint_dom, null, "f");
        __classPrivateFieldSet(this, _NeuronFeaturePoint_dom_label, null, "f");
        __classPrivateFieldSet(this, _NeuronFeaturePoint_dom_lat, null, "f");
        __classPrivateFieldSet(this, _NeuronFeaturePoint_dom_lon, null, "f");
        __classPrivateFieldSet(this, _NeuronFeaturePoint_dom_alt, null, "f");
        __classPrivateFieldSet(this, _NeuronFeaturePoint_dom_convert_waypoint, null, "f");
        this.set_planner(planner);
        if (point)
            this.set_point(point);
    }
    get_point() {
        return __classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f");
    }
    set_planner(planner) {
        __classPrivateFieldSet(this, _NeuronFeaturePoint_planner, planner, "f");
    }
    remove_point_by_context(context) {
        if (__classPrivateFieldGet(this, _NeuronFeaturePoint_marker, "f") == context) {
            this.remove_feature();
        }
        else {
            console.warn("Call to remove unknown marker context");
        }
    }
    set_point(point) {
        if (!__classPrivateFieldGet(this, _NeuronFeaturePoint_marker, "f")) {
            __classPrivateFieldSet(this, _NeuronFeaturePoint_marker, _interface_leaflet__WEBPACK_IMPORTED_MODULE_2__.L.marker(point.to_leaflet(), {
                draggable: true,
                autoPan: true,
                icon: (0,_interface_leaflet__WEBPACK_IMPORTED_MODULE_2__.get_neuron_icon)('neuron-marker-poi')
            }), "f");
            __classPrivateFieldGet(this, _NeuronFeaturePoint_marker, "f").on("drag", __classPrivateFieldGet(this, _NeuronFeaturePoint_instances, "m", _NeuronFeaturePoint_update_position_from_event).bind(this));
            __classPrivateFieldGet(this, _NeuronFeaturePoint_marker, "f").on("dblclick", __classPrivateFieldGet(this, _NeuronFeaturePoint_instances, "m", _NeuronFeaturePoint_remove_point_by_event).bind(this));
            const menu_items = [
                new _interface_leaflet__WEBPACK_IMPORTED_MODULE_2__.LeafletContextMenuItem("Show in plan", "fa-bars", this.show_on_plan.bind(this)),
                null,
                new _interface_leaflet__WEBPACK_IMPORTED_MODULE_2__.LeafletContextMenuItem("Remove", "fa-trash", this.remove_point_by_context.bind(this)),
            ];
            __classPrivateFieldGet(this, _NeuronFeaturePoint_marker, "f").bindPopup((0,_interface_leaflet__WEBPACK_IMPORTED_MODULE_2__.create_popup_context_dom)("Point", menu_items, __classPrivateFieldGet(this, _NeuronFeaturePoint_marker, "f")));
            this._add_layer_to_map(__classPrivateFieldGet(this, _NeuronFeaturePoint_marker, "f"));
        }
        __classPrivateFieldGet(this, _NeuronFeaturePoint_instances, "m", _NeuronFeaturePoint_internal_set_point).call(this, point);
    }
    show_on_plan() {
        if (__classPrivateFieldGet(this, _NeuronFeaturePoint_dom, "f")) {
            __classPrivateFieldGet(this, _NeuronFeaturePoint_dom, "f").scrollIntoView();
            __classPrivateFieldGet(this, _NeuronFeaturePoint_dom, "f").classList.remove('mission-feature-highlight-remove');
            __classPrivateFieldGet(this, _NeuronFeaturePoint_dom, "f").classList.add('mission-feature-highlight');
            setTimeout(__classPrivateFieldGet(this, _NeuronFeaturePoint_instances, "m", _NeuronFeaturePoint_remove_dom_highlight).bind(this), 1000);
        }
    }
    show_help() {
        window.neuron_map.show_map_help(true, `${_neuron_help__WEBPACK_IMPORTED_MODULE_3__.NeuronHelp.HELP_PREFIX_MISSION}-${NeuronFeaturePoint.HELP_KEY}`);
    }
    remove_feature() {
        if (__classPrivateFieldGet(this, _NeuronFeaturePoint_marker, "f"))
            this._remove_layer_from_map(__classPrivateFieldGet(this, _NeuronFeaturePoint_marker, "f"));
        super.remove_feature();
    }
    get_path_coords() {
        return [];
    }
    get_dom() {
        if (!__classPrivateFieldGet(this, _NeuronFeaturePoint_dom, "f")) {
            __classPrivateFieldSet(this, _NeuronFeaturePoint_dom, this._get_dom("Point"), "f");
            let c = document.createElement("div");
            c.className = 'mission-feature-content';
            const t01 = "Convert this point to a waypoint feature";
            __classPrivateFieldSet(this, _NeuronFeaturePoint_dom_convert_waypoint, this._create_dom_input_button("Waypoint", __classPrivateFieldGet(this, _NeuronFeaturePoint_instances, "m", _NeuronFeaturePoint_convert_to_waypoint).bind(this)), "f");
            __classPrivateFieldGet(this, _NeuronFeaturePoint_dom_convert_waypoint, "f").title = t01;
            c.appendChild(this._create_dom_label("Convert to:", __classPrivateFieldGet(this, _NeuronFeaturePoint_dom_convert_waypoint, "f"), t01));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeaturePoint_dom_convert_waypoint, "f"));
            const t3 = "Text label for identification of the point";
            __classPrivateFieldSet(this, _NeuronFeaturePoint_dom_label, this._create_dom_input_textbox((__classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f") ? __classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f").tag : ""), __classPrivateFieldGet(this, _NeuronFeaturePoint_instances, "m", _NeuronFeaturePoint_update_tag_from_dom).bind(this)), "f");
            __classPrivateFieldGet(this, _NeuronFeaturePoint_dom_label, "f").title = t3;
            c.appendChild(this._create_dom_label("Label:", __classPrivateFieldGet(this, _NeuronFeaturePoint_dom_label, "f"), t3));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeaturePoint_dom_label, "f"));
            const t0 = "Latitude location for the point in decimal degrees";
            __classPrivateFieldSet(this, _NeuronFeaturePoint_dom_lat, this._create_dom_input_number(__classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f") ? __classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f").latitude : 0.0, __classPrivateFieldGet(this, _NeuronFeaturePoint_instances, "m", _NeuronFeaturePoint_update_latitude_from_dom).bind(this), -90, 90, 0.0002), "f");
            __classPrivateFieldGet(this, _NeuronFeaturePoint_dom_lat, "f").title = t0;
            c.appendChild(this._create_dom_label("Latitude:", __classPrivateFieldGet(this, _NeuronFeaturePoint_dom_lat, "f"), t0));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeaturePoint_dom_lat, "f"));
            const t1 = "Longitude location for the point in decimal degrees";
            __classPrivateFieldSet(this, _NeuronFeaturePoint_dom_lon, this._create_dom_input_number(__classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f") ? __classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f").longitude : 0.0, __classPrivateFieldGet(this, _NeuronFeaturePoint_instances, "m", _NeuronFeaturePoint_update_longitude_from_dom).bind(this), -180, 180, 0.0002), "f");
            __classPrivateFieldGet(this, _NeuronFeaturePoint_dom_lon, "f").title = t1;
            c.appendChild(this._create_dom_label("Longitude:", __classPrivateFieldGet(this, _NeuronFeaturePoint_dom_lon, "f"), t1));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeaturePoint_dom_lon, "f"));
            const t2 = "Altitude for the point in feet relative to take-off location ground level";
            __classPrivateFieldSet(this, _NeuronFeaturePoint_dom_alt, this._create_dom_input_number((__classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f") ? __classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f").altitude : 0.0) / _neuron_feature_base__WEBPACK_IMPORTED_MODULE_0__.NeuronFeatureBase._altitude_ratio, __classPrivateFieldGet(this, _NeuronFeaturePoint_instances, "m", _NeuronFeaturePoint_update_altitude_from_dom).bind(this)), "f");
            __classPrivateFieldGet(this, _NeuronFeaturePoint_dom_alt, "f").title = t2;
            c.appendChild(this._create_dom_label("Altitude:", __classPrivateFieldGet(this, _NeuronFeaturePoint_dom_alt, "f"), t2));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeaturePoint_dom_alt, "f"));
            __classPrivateFieldGet(this, _NeuronFeaturePoint_dom, "f").append(c);
        }
        return __classPrivateFieldGet(this, _NeuronFeaturePoint_dom, "f");
    }
    static isObjectOfDataType(object) {
        let is_valid = (object.type == NeuronFeaturePoint.TYPE) &&
            (object.version == NeuronFeaturePoint.VERSION);
        return is_valid;
    }
    static from_json(j, map) {
        //XXX: Implement this per inherited feature
        if (!NeuronFeaturePoint.isObjectOfDataType(j))
            throw new Error(`Invalid type check during creation of NeuronFeaturePoint`);
        const point = _neuron_interfaces__WEBPACK_IMPORTED_MODULE_1__.NeuronInterfacePoint.from_json(j.point);
        return new NeuronFeaturePoint(map, point);
    }
    to_json() {
        //XXX: Implement this per inherited feature
        return {
            version: NeuronFeaturePoint.VERSION,
            type: NeuronFeaturePoint.TYPE,
            point: __classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f").to_json()
        };
    }
}
_NeuronFeaturePoint_planner = new WeakMap(), _NeuronFeaturePoint_marker = new WeakMap(), _NeuronFeaturePoint_point = new WeakMap(), _NeuronFeaturePoint_dom = new WeakMap(), _NeuronFeaturePoint_dom_label = new WeakMap(), _NeuronFeaturePoint_dom_lat = new WeakMap(), _NeuronFeaturePoint_dom_lon = new WeakMap(), _NeuronFeaturePoint_dom_alt = new WeakMap(), _NeuronFeaturePoint_dom_convert_waypoint = new WeakMap(), _NeuronFeaturePoint_instances = new WeakSet(), _NeuronFeaturePoint_remove_point_by_event = function _NeuronFeaturePoint_remove_point_by_event(event) {
    this.remove_point_by_context(event.target);
}, _NeuronFeaturePoint_update_position_from_event = function _NeuronFeaturePoint_update_position_from_event(event) {
    let point = _neuron_interfaces__WEBPACK_IMPORTED_MODULE_1__.NeuronInterfacePoint.from_leaflet(event.target.getLatLng());
    if (__classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f"))
        point.altitude = __classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f").altitude;
    __classPrivateFieldGet(this, _NeuronFeaturePoint_instances, "m", _NeuronFeaturePoint_internal_set_point).call(this, point);
}, _NeuronFeaturePoint_remove_dom_highlight = function _NeuronFeaturePoint_remove_dom_highlight() {
    if (__classPrivateFieldGet(this, _NeuronFeaturePoint_dom, "f")) {
        __classPrivateFieldGet(this, _NeuronFeaturePoint_dom, "f").classList.remove('mission-feature-highlight');
        __classPrivateFieldGet(this, _NeuronFeaturePoint_dom, "f").classList.add('mission-feature-highlight-remove');
    }
}, _NeuronFeaturePoint_internal_set_point = function _NeuronFeaturePoint_internal_set_point(point, update_marker = true, update_dom = true) {
    __classPrivateFieldSet(this, _NeuronFeaturePoint_point, point, "f");
    if (update_marker && __classPrivateFieldGet(this, _NeuronFeaturePoint_marker, "f"))
        __classPrivateFieldGet(this, _NeuronFeaturePoint_marker, "f").setLatLng(point.to_leaflet());
    if (update_dom) {
        if (__classPrivateFieldGet(this, _NeuronFeaturePoint_dom_lat, "f"))
            __classPrivateFieldGet(this, _NeuronFeaturePoint_dom_lat, "f").value = point.latitude.toString();
        if (__classPrivateFieldGet(this, _NeuronFeaturePoint_dom_lon, "f"))
            __classPrivateFieldGet(this, _NeuronFeaturePoint_dom_lon, "f").value = point.longitude.toString();
    }
    this._trigger_on_changed();
}, _NeuronFeaturePoint_update_latitude_from_dom = function _NeuronFeaturePoint_update_latitude_from_dom() {
    if (__classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f"))
        __classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f").latitude = __classPrivateFieldGet(this, _NeuronFeaturePoint_dom_lat, "f").valueAsNumber;
    __classPrivateFieldGet(this, _NeuronFeaturePoint_instances, "m", _NeuronFeaturePoint_internal_set_point).call(this, __classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f"), true, false);
}, _NeuronFeaturePoint_update_tag_from_dom = function _NeuronFeaturePoint_update_tag_from_dom() {
    if (__classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f"))
        __classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f").tag = __classPrivateFieldGet(this, _NeuronFeaturePoint_dom_label, "f").value;
    __classPrivateFieldGet(this, _NeuronFeaturePoint_instances, "m", _NeuronFeaturePoint_internal_set_point).call(this, __classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f"), true, false);
}, _NeuronFeaturePoint_update_longitude_from_dom = function _NeuronFeaturePoint_update_longitude_from_dom() {
    if (__classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f"))
        __classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f").longitude = __classPrivateFieldGet(this, _NeuronFeaturePoint_dom_lon, "f").valueAsNumber;
    __classPrivateFieldGet(this, _NeuronFeaturePoint_instances, "m", _NeuronFeaturePoint_internal_set_point).call(this, __classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f"), true, false);
}, _NeuronFeaturePoint_update_altitude_from_dom = function _NeuronFeaturePoint_update_altitude_from_dom() {
    if (__classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f"))
        __classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f").altitude = __classPrivateFieldGet(this, _NeuronFeaturePoint_dom_alt, "f").valueAsNumber * _neuron_feature_base__WEBPACK_IMPORTED_MODULE_0__.NeuronFeatureBase._altitude_ratio;
    __classPrivateFieldGet(this, _NeuronFeaturePoint_instances, "m", _NeuronFeaturePoint_internal_set_point).call(this, __classPrivateFieldGet(this, _NeuronFeaturePoint_point, "f"), true, false);
}, _NeuronFeaturePoint_convert_to_waypoint = function _NeuronFeaturePoint_convert_to_waypoint() {
    if (__classPrivateFieldGet(this, _NeuronFeaturePoint_planner, "f")) {
        __classPrivateFieldGet(this, _NeuronFeaturePoint_planner, "f").replace_point_with_waypoint(this);
    }
    else {
        console.warn("Planner not set, cannot convert point feature!");
    }
};
NeuronFeaturePoint.NAME = "[POLYGON FEATURE]";
NeuronFeaturePoint.TYPE = "NeuronFeaturePoint";
NeuronFeaturePoint.VERSION = 'cd512a90-dd55-11ec-8a8a-23c90341eb99';
NeuronFeaturePoint.HELP_KEY = 'point';


/***/ }),

/***/ "./src/js/neuron_feature_polygon.ts":
/*!******************************************!*\
  !*** ./src/js/neuron_feature_polygon.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeuronFeaturePolygon": () => (/* binding */ NeuronFeaturePolygon)
/* harmony export */ });
/* harmony import */ var _neuron_feature_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neuron_feature_base */ "./src/js/neuron_feature_base.ts");
/* harmony import */ var _neuron_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neuron_interfaces */ "./src/js/neuron_interfaces.ts");
/* harmony import */ var _interface_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface_leaflet */ "./src/js/interface_leaflet.ts");
/* harmony import */ var _neuron_tools_kml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./neuron_tools_kml */ "./src/js/neuron_tools_kml.ts");
/* harmony import */ var _neuron_help__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./neuron_help */ "./src/js/neuron_help.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NeuronFeaturePolygon_instances, _NeuronFeaturePolygon_show_corners, _NeuronFeaturePolygon_corners, _NeuronFeaturePolygon_polygon, _NeuronFeaturePolygon_planner, _NeuronFeaturePolygon_selected_corner, _NeuronFeaturePolygon_on_change_internal, _NeuronFeaturePolygon_dom, _NeuronFeaturePolygon_dom_corner_count, _NeuronFeaturePolygon_dom_show_corners, _NeuronFeaturePolygon_dom_convert_survey, _NeuronFeaturePolygon_dom_export_kml, _NeuronFeaturePolygon_dom_export_kmz, _NeuronFeaturePolygon_array_move, _NeuronFeaturePolygon_array_move_cyclic, _NeuronFeaturePolygon_select_corner_by_event, _NeuronFeaturePolygon_remove_dom_highlight, _NeuronFeaturePolygon_remove_point_by_event, _NeuronFeaturePolygon_add_point_at_mouseevent, _NeuronFeaturePolygon_try_update_dom, _NeuronFeaturePolygon_convert_to_survey, _NeuronFeaturePolygon_export_as_kml, _NeuronFeaturePolygon_export_as_kmz, _NeuronFeaturePolygon_update_show_corners_from_dom;





class NeuronFeaturePolygon extends _neuron_feature_base__WEBPACK_IMPORTED_MODULE_0__.NeuronFeatureBase {
    constructor(map, corners = [], planner = null) {
        super(map);
        _NeuronFeaturePolygon_instances.add(this);
        _NeuronFeaturePolygon_show_corners.set(this, void 0);
        _NeuronFeaturePolygon_corners.set(this, void 0);
        _NeuronFeaturePolygon_polygon.set(this, void 0);
        _NeuronFeaturePolygon_planner.set(this, void 0);
        _NeuronFeaturePolygon_selected_corner.set(this, void 0);
        _NeuronFeaturePolygon_on_change_internal.set(this, void 0);
        _NeuronFeaturePolygon_dom.set(this, void 0);
        _NeuronFeaturePolygon_dom_corner_count.set(this, void 0);
        _NeuronFeaturePolygon_dom_show_corners.set(this, void 0);
        _NeuronFeaturePolygon_dom_convert_survey.set(this, void 0);
        _NeuronFeaturePolygon_dom_export_kml.set(this, void 0);
        _NeuronFeaturePolygon_dom_export_kmz.set(this, void 0);
        __classPrivateFieldSet(this, _NeuronFeaturePolygon_on_change_internal, null, "f");
        __classPrivateFieldSet(this, _NeuronFeaturePolygon_dom, null, "f");
        __classPrivateFieldSet(this, _NeuronFeaturePolygon_dom_corner_count, null, "f");
        __classPrivateFieldSet(this, _NeuronFeaturePolygon_dom_convert_survey, null, "f");
        __classPrivateFieldSet(this, _NeuronFeaturePolygon_dom_export_kml, null, "f");
        __classPrivateFieldSet(this, _NeuronFeaturePolygon_dom_export_kmz, null, "f");
        this.set_planner(planner);
        __classPrivateFieldSet(this, _NeuronFeaturePolygon_show_corners, corners.length < 20, "f");
        __classPrivateFieldSet(this, _NeuronFeaturePolygon_selected_corner, 0, "f");
        __classPrivateFieldSet(this, _NeuronFeaturePolygon_corners, [], "f");
        if (corners.length) {
            if (corners.length == 1)
                console.warn("Insufficient number of corners to define polygon! May be removed immediately");
            this.add_corners(corners);
            //XXX: This also calls update_polygon();
        }
        else {
            this.update_polygon();
        }
    }
    corners_visible() {
        return __classPrivateFieldGet(this, _NeuronFeaturePolygon_show_corners, "f");
    }
    update_show_corners(show_corners) {
        __classPrivateFieldSet(this, _NeuronFeaturePolygon_show_corners, show_corners, "f");
        if (__classPrivateFieldGet(this, _NeuronFeaturePolygon_show_corners, "f")) {
            //Show layers
            for (let feature of __classPrivateFieldGet(this, _NeuronFeaturePolygon_corners, "f"))
                this._add_layer_to_map(feature);
        }
        else {
            //Hide layers
            for (let feature of __classPrivateFieldGet(this, _NeuronFeaturePolygon_corners, "f"))
                this._remove_layer_from_map(feature);
        }
    }
    set_planner(planner) {
        __classPrivateFieldSet(this, _NeuronFeaturePolygon_planner, planner, "f");
    }
    _set_on_change_internal(on_change = null) {
        __classPrivateFieldSet(this, _NeuronFeaturePolygon_on_change_internal, on_change, "f");
    }
    move_corner_forwards(corner) {
        const ind = __classPrivateFieldGet(this, _NeuronFeaturePolygon_corners, "f").indexOf(corner);
        if (ind >= 0) {
            __classPrivateFieldGet(this, _NeuronFeaturePolygon_instances, "m", _NeuronFeaturePolygon_array_move_cyclic).call(this, __classPrivateFieldGet(this, _NeuronFeaturePolygon_corners, "f"), ind, -1);
            this.update_polygon(); //Redraw
        }
        else {
            console.warn("Provided corner is not part of this polygon!");
        }
    }
    move_corner_backwards(corner) {
        const ind = __classPrivateFieldGet(this, _NeuronFeaturePolygon_corners, "f").indexOf(corner);
        if (ind >= 0) {
            __classPrivateFieldGet(this, _NeuronFeaturePolygon_instances, "m", _NeuronFeaturePolygon_array_move_cyclic).call(this, __classPrivateFieldGet(this, _NeuronFeaturePolygon_corners, "f"), ind, 1);
            this.update_polygon(); //Redraw
        }
        else {
            console.warn("Provided corner is not part of this polygon!");
        }
    }
    select_corner(corner) {
        const ind = __classPrivateFieldGet(this, _NeuronFeaturePolygon_corners, "f").indexOf(corner);
        if (ind >= 0) {
            __classPrivateFieldSet(this, _NeuronFeaturePolygon_selected_corner, ind, "f");
        }
        else {
            console.warn("Provided corner is not part of this polygon!");
        }
    }
    get_polygon() {
        return __classPrivateFieldGet(this, _NeuronFeaturePolygon_polygon, "f");
    }
    add_corner(corner, update_polygon = true) {
        if (__classPrivateFieldGet(this, _NeuronFeaturePolygon_selected_corner, "f") < 0 || __classPrivateFieldGet(this, _NeuronFeaturePolygon_selected_corner, "f") >= __classPrivateFieldGet(this, _NeuronFeaturePolygon_corners, "f").length)
            __classPrivateFieldSet(this, _NeuronFeaturePolygon_selected_corner, Math.min(__classPrivateFieldGet(this, _NeuronFeaturePolygon_corners, "f").length - 1, 0), "f");
        let m = _interface_leaflet__WEBPACK_IMPORTED_MODULE_2__.L.marker([corner.latitude, corner.longitude], {
            draggable: true,
            autoPan: true,
            icon: (0,_interface_leaflet__WEBPACK_IMPORTED_MODULE_2__.get_neuron_icon)('neuron-marker-corner')
        });
        const menu_items = [
            new _interface_leaflet__WEBPACK_IMPORTED_MODULE_2__.LeafletContextMenuItem("Show in plan", "fa-bars", this.show_on_plan.bind(this)),
            null,
            new _interface_leaflet__WEBPACK_IMPORTED_MODULE_2__.LeafletContextMenuItem("Move forward", "fa-arrow-left", this.move_corner_forwards.bind(this)),
            new _interface_leaflet__WEBPACK_IMPORTED_MODULE_2__.LeafletContextMenuItem("Move backward", "fa-arrow-right", this.move_corner_backwards.bind(this)),
            null,
            new _interface_leaflet__WEBPACK_IMPORTED_MODULE_2__.LeafletContextMenuItem("Remove", "fa-trash", this.remove_point_by_corner.bind(this)),
        ];
        m.bindPopup((0,_interface_leaflet__WEBPACK_IMPORTED_MODULE_2__.create_popup_context_dom)("Polygon Corner", menu_items, m));
        m.on("drag", this.update_polygon.bind(this));
        m.on("click", __classPrivateFieldGet(this, _NeuronFeaturePolygon_instances, "m", _NeuronFeaturePolygon_select_corner_by_event).bind(this));
        m.on("dblclick", __classPrivateFieldGet(this, _NeuronFeaturePolygon_instances, "m", _NeuronFeaturePolygon_remove_point_by_event).bind(this));
        __classPrivateFieldGet(this, _NeuronFeaturePolygon_corners, "f").splice(__classPrivateFieldGet(this, _NeuronFeaturePolygon_selected_corner, "f"), 0, m);
        if (__classPrivateFieldGet(this, _NeuronFeaturePolygon_show_corners, "f"))
            this._add_layer_to_map(m);
        if (update_polygon)
            this.update_polygon();
    }
    show_on_plan() {
        if (__classPrivateFieldGet(this, _NeuronFeaturePolygon_dom, "f")) {
            __classPrivateFieldGet(this, _NeuronFeaturePolygon_dom, "f").scrollIntoView();
            __classPrivateFieldGet(this, _NeuronFeaturePolygon_dom, "f").classList.remove('mission-feature-highlight-remove');
            __classPrivateFieldGet(this, _NeuronFeaturePolygon_dom, "f").classList.add('mission-feature-highlight');
            setTimeout(__classPrivateFieldGet(this, _NeuronFeaturePolygon_instances, "m", _NeuronFeaturePolygon_remove_dom_highlight).bind(this), 1000);
        }
    }
    add_corners(corners = []) {
        for (const c of corners)
            this.add_corner(c, false);
        //Do this manually at the end
        this.update_polygon();
    }
    get_corners() {
        return __classPrivateFieldGet(this, _NeuronFeaturePolygon_corners, "f");
    }
    get_corners_as_points() {
        return __classPrivateFieldGet(this, _NeuronFeaturePolygon_corners, "f").map(p => _neuron_interfaces__WEBPACK_IMPORTED_MODULE_1__.NeuronInterfacePoint.from_leaflet(p.getLatLng()));
    }
    remove_point_by_corner(corner) {
        const ind = __classPrivateFieldGet(this, _NeuronFeaturePolygon_corners, "f").indexOf(corner);
        if (ind >= 0) {
            this._remove_layer_from_map(corner); //Remove from map
            __classPrivateFieldGet(this, _NeuronFeaturePolygon_corners, "f").splice(ind, 1); //Remove from list
            this.update_polygon(); //Redraw
        }
        else {
            console.warn("Provided corner is not part of this polygon!");
        }
    }
    add_point_at_location() {
        if (__classPrivateFieldGet(this, _NeuronFeaturePolygon_polygon, "f")) {
            const b = __classPrivateFieldGet(this, _NeuronFeaturePolygon_polygon, "f").getBounds();
            const ne = b.getNorthEast();
            const sw = b.getSouthWest();
            const dx = ne.lng - sw.lng;
            const dy = ne.lat - sw.lat;
            const p = new _neuron_interfaces__WEBPACK_IMPORTED_MODULE_1__.NeuronInterfacePoint(sw.lat + dy / 2, sw.lng + dx / 2);
            this.add_corner(p);
        }
    }
    update_polygon() {
        if (__classPrivateFieldGet(this, _NeuronFeaturePolygon_corners, "f").length > 1) {
            let corners = [];
            for (const c of __classPrivateFieldGet(this, _NeuronFeaturePolygon_corners, "f")) {
                corners.push(c.getLatLng());
            }
            if (__classPrivateFieldGet(this, _NeuronFeaturePolygon_polygon, "f")) {
                //Update the existing polygon
                // console.log(this.#polygon);
                __classPrivateFieldGet(this, _NeuronFeaturePolygon_polygon, "f").setLatLngs(corners);
            }
            else {
                //Create a new polygon
                __classPrivateFieldSet(this, _NeuronFeaturePolygon_polygon, _interface_leaflet__WEBPACK_IMPORTED_MODULE_2__.L.polygon(corners, { color: 'red' }), "f");
                __classPrivateFieldGet(this, _NeuronFeaturePolygon_polygon, "f").on("click", __classPrivateFieldGet(this, _NeuronFeaturePolygon_instances, "m", _NeuronFeaturePolygon_add_point_at_mouseevent).bind(this));
                this._add_layer_to_map(__classPrivateFieldGet(this, _NeuronFeaturePolygon_polygon, "f"));
            }
        }
        else {
            this.remove_feature();
        }
        if (__classPrivateFieldGet(this, _NeuronFeaturePolygon_on_change_internal, "f"))
            __classPrivateFieldGet(this, _NeuronFeaturePolygon_on_change_internal, "f").call(this);
        this._trigger_on_changed();
        __classPrivateFieldGet(this, _NeuronFeaturePolygon_instances, "m", _NeuronFeaturePolygon_try_update_dom).call(this);
    }
    show_help() {
        window.neuron_map.show_map_help(true, `${_neuron_help__WEBPACK_IMPORTED_MODULE_4__.NeuronHelp.HELP_PREFIX_MISSION}-${NeuronFeaturePolygon.HELP_KEY}`);
    }
    remove_feature() {
        for (const c of __classPrivateFieldGet(this, _NeuronFeaturePolygon_corners, "f")) {
            this._remove_layer_from_map(c);
        }
        __classPrivateFieldSet(this, _NeuronFeaturePolygon_corners, [], "f");
        if (__classPrivateFieldGet(this, _NeuronFeaturePolygon_polygon, "f")) {
            this._remove_layer_from_map(__classPrivateFieldGet(this, _NeuronFeaturePolygon_polygon, "f"));
            __classPrivateFieldSet(this, _NeuronFeaturePolygon_polygon, null, "f");
        }
        super.remove_feature();
    }
    //override get_path_coords() {} //XXX: No paths provided by this feature, use base return
    get_dom() {
        if (!__classPrivateFieldGet(this, _NeuronFeaturePolygon_dom, "f")) {
            __classPrivateFieldSet(this, _NeuronFeaturePolygon_dom, this._get_dom("Polygon"), "f");
            let c = document.createElement("div");
            c.className = 'mission-feature-content';
            //Output items
            const t4 = "Number of corners that define this polygon's boundaries";
            __classPrivateFieldSet(this, _NeuronFeaturePolygon_dom_corner_count, this._create_dom_output(), "f");
            __classPrivateFieldGet(this, _NeuronFeaturePolygon_dom_corner_count, "f").title = t4;
            c.appendChild(this._create_dom_label("Corners:", __classPrivateFieldGet(this, _NeuronFeaturePolygon_dom_corner_count, "f"), t4));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeaturePolygon_dom_corner_count, "f"));
            __classPrivateFieldGet(this, _NeuronFeaturePolygon_instances, "m", _NeuronFeaturePolygon_try_update_dom).call(this);
            //Input Items
            const t21 = "Show the corners of the polygon";
            __classPrivateFieldSet(this, _NeuronFeaturePolygon_dom_show_corners, this._create_dom_input_checkbox(this.corners_visible(), __classPrivateFieldGet(this, _NeuronFeaturePolygon_instances, "m", _NeuronFeaturePolygon_update_show_corners_from_dom).bind(this)), "f");
            __classPrivateFieldGet(this, _NeuronFeaturePolygon_dom_show_corners, "f").title = t21;
            c.appendChild(this._create_dom_label("Show corners:", __classPrivateFieldGet(this, _NeuronFeaturePolygon_dom_show_corners, "f"), t21));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeaturePolygon_dom_show_corners, "f"));
            const t0 = "Convert this polygon to a survey feature";
            __classPrivateFieldSet(this, _NeuronFeaturePolygon_dom_convert_survey, this._create_dom_input_button("Survey", __classPrivateFieldGet(this, _NeuronFeaturePolygon_instances, "m", _NeuronFeaturePolygon_convert_to_survey).bind(this)), "f");
            __classPrivateFieldGet(this, _NeuronFeaturePolygon_dom_convert_survey, "f").title = t0;
            c.appendChild(this._create_dom_label("Convert to:", __classPrivateFieldGet(this, _NeuronFeaturePolygon_dom_convert_survey, "f"), t0));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeaturePolygon_dom_convert_survey, "f"));
            const t1 = "Export this polygon to a drawing document";
            const t11 = "Export this polygon to a KML document";
            const t12 = "Export this polygon to a KMZ document";
            __classPrivateFieldSet(this, _NeuronFeaturePolygon_dom_export_kml, this._create_dom_input_button("KML", __classPrivateFieldGet(this, _NeuronFeaturePolygon_instances, "m", _NeuronFeaturePolygon_export_as_kml).bind(this)), "f");
            __classPrivateFieldGet(this, _NeuronFeaturePolygon_dom_export_kml, "f").title = t11;
            c.appendChild(this._create_dom_label("Export as:", __classPrivateFieldGet(this, _NeuronFeaturePolygon_dom_export_kml, "f"), t1));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeaturePolygon_dom_export_kml, "f"));
            __classPrivateFieldSet(this, _NeuronFeaturePolygon_dom_export_kmz, this._create_dom_input_button("KMZ", __classPrivateFieldGet(this, _NeuronFeaturePolygon_instances, "m", _NeuronFeaturePolygon_export_as_kmz).bind(this)), "f");
            __classPrivateFieldGet(this, _NeuronFeaturePolygon_dom_export_kmz, "f").title = t12;
            c.appendChild(this._create_dom_label("Export as:", __classPrivateFieldGet(this, _NeuronFeaturePolygon_dom_export_kmz, "f"), t1, true));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeaturePolygon_dom_export_kmz, "f"));
            // c.appendChild(this._create_dom_labelled_input("", this.#dom_export_shape.bind(this)));
            __classPrivateFieldGet(this, _NeuronFeaturePolygon_dom, "f").append(c);
        }
        return __classPrivateFieldGet(this, _NeuronFeaturePolygon_dom, "f");
    }
    static isObjectOfDataType(object) {
        let is_valid = (object.type == NeuronFeaturePolygon.TYPE) &&
            (object.version == NeuronFeaturePolygon.VERSION);
        return is_valid;
    }
    static from_json(j, map) {
        //XXX: Implement this per inherited feature
        if (!NeuronFeaturePolygon.isObjectOfDataType(j))
            throw new Error(`Invalid type check during creation of NeuronFeaturePolygon`);
        const corners = j.corners.map(x => _neuron_interfaces__WEBPACK_IMPORTED_MODULE_1__.NeuronInterfacePoint.from_json(x));
        return new NeuronFeaturePolygon(map, corners);
    }
    to_json() {
        //XXX: Implement this per inherited feature
        return {
            version: NeuronFeaturePolygon.VERSION,
            type: NeuronFeaturePolygon.TYPE,
            corners: this.get_corners_as_points().map(x => x.to_json())
        };
    }
}
_NeuronFeaturePolygon_show_corners = new WeakMap(), _NeuronFeaturePolygon_corners = new WeakMap(), _NeuronFeaturePolygon_polygon = new WeakMap(), _NeuronFeaturePolygon_planner = new WeakMap(), _NeuronFeaturePolygon_selected_corner = new WeakMap(), _NeuronFeaturePolygon_on_change_internal = new WeakMap(), _NeuronFeaturePolygon_dom = new WeakMap(), _NeuronFeaturePolygon_dom_corner_count = new WeakMap(), _NeuronFeaturePolygon_dom_show_corners = new WeakMap(), _NeuronFeaturePolygon_dom_convert_survey = new WeakMap(), _NeuronFeaturePolygon_dom_export_kml = new WeakMap(), _NeuronFeaturePolygon_dom_export_kmz = new WeakMap(), _NeuronFeaturePolygon_instances = new WeakSet(), _NeuronFeaturePolygon_array_move = function _NeuronFeaturePolygon_array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    // return arr; // for testing
}, _NeuronFeaturePolygon_array_move_cyclic = function _NeuronFeaturePolygon_array_move_cyclic(arr, old_index, diff) {
    let new_index = (old_index + diff) % arr.length;
    if (new_index < 0) {
        new_index += arr.length;
    }
    __classPrivateFieldGet(this, _NeuronFeaturePolygon_instances, "m", _NeuronFeaturePolygon_array_move).call(this, __classPrivateFieldGet(this, _NeuronFeaturePolygon_corners, "f"), old_index, new_index);
}, _NeuronFeaturePolygon_select_corner_by_event = function _NeuronFeaturePolygon_select_corner_by_event(event) {
    this.select_corner(event.target);
}, _NeuronFeaturePolygon_remove_dom_highlight = function _NeuronFeaturePolygon_remove_dom_highlight() {
    if (__classPrivateFieldGet(this, _NeuronFeaturePolygon_dom, "f")) {
        __classPrivateFieldGet(this, _NeuronFeaturePolygon_dom, "f").classList.remove('mission-feature-highlight');
        __classPrivateFieldGet(this, _NeuronFeaturePolygon_dom, "f").classList.add('mission-feature-highlight-remove');
    }
}, _NeuronFeaturePolygon_remove_point_by_event = function _NeuronFeaturePolygon_remove_point_by_event(event) {
    this.remove_point_by_corner(event.target);
}, _NeuronFeaturePolygon_add_point_at_mouseevent = function _NeuronFeaturePolygon_add_point_at_mouseevent(event) {
    if (__classPrivateFieldGet(this, _NeuronFeaturePolygon_polygon, "f") && __classPrivateFieldGet(this, _NeuronFeaturePolygon_show_corners, "f")) {
        // const c = this.#polygon.getCenter();
        // const dx = b._northEast.lng - b._southWest.lng;
        // const dy = b._northEast.lat - b._southWest.lat;
        // const p = new NeuronMapPoint(b._southWest.lat + dy / 2, b._southWest.lng + dx / 2);
        const p = _neuron_interfaces__WEBPACK_IMPORTED_MODULE_1__.NeuronInterfacePoint.from_leaflet(event.latlng);
        this.add_corner(p);
    }
}, _NeuronFeaturePolygon_try_update_dom = function _NeuronFeaturePolygon_try_update_dom() {
    if (__classPrivateFieldGet(this, _NeuronFeaturePolygon_dom_corner_count, "f"))
        __classPrivateFieldGet(this, _NeuronFeaturePolygon_dom_corner_count, "f").value = __classPrivateFieldGet(this, _NeuronFeaturePolygon_corners, "f").length.toFixed(0);
}, _NeuronFeaturePolygon_convert_to_survey = function _NeuronFeaturePolygon_convert_to_survey() {
    if (__classPrivateFieldGet(this, _NeuronFeaturePolygon_planner, "f")) {
        __classPrivateFieldGet(this, _NeuronFeaturePolygon_planner, "f").replace_polygon_with_survey(this);
    }
    else {
        console.warn("Planner not set, cannot convert polygon feature!");
    }
}, _NeuronFeaturePolygon_export_as_kml = function _NeuronFeaturePolygon_export_as_kml() {
    (0,_neuron_tools_kml__WEBPACK_IMPORTED_MODULE_3__.kmz_download_from_neuron_data)([], [], [this.get_corners_as_points()]);
}, _NeuronFeaturePolygon_export_as_kmz = function _NeuronFeaturePolygon_export_as_kmz() {
    (0,_neuron_tools_kml__WEBPACK_IMPORTED_MODULE_3__.kmz_download_from_neuron_data)([], [], [this.get_corners_as_points()]);
}, _NeuronFeaturePolygon_update_show_corners_from_dom = function _NeuronFeaturePolygon_update_show_corners_from_dom() {
    this.update_show_corners(__classPrivateFieldGet(this, _NeuronFeaturePolygon_dom_show_corners, "f").checked);
};
NeuronFeaturePolygon.NAME = "[POLYGON FEATURE]";
NeuronFeaturePolygon.TYPE = "NeuronFeaturePolygon";
NeuronFeaturePolygon.VERSION = '79ed7650-d243-11ec-81f2-096bfcf46f51';
NeuronFeaturePolygon.HELP_KEY = 'polygon';


/***/ }),

/***/ "./src/js/neuron_feature_survey.ts":
/*!*****************************************!*\
  !*** ./src/js/neuron_feature_survey.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeuronFeatureSurvey": () => (/* binding */ NeuronFeatureSurvey)
/* harmony export */ });
/* harmony import */ var _neuron_feature_polygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neuron_feature_polygon */ "./src/js/neuron_feature_polygon.ts");
/* harmony import */ var _neuron_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neuron_interfaces */ "./src/js/neuron_interfaces.ts");
/* harmony import */ var _neuron_tools_survey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./neuron_tools_survey */ "./src/js/neuron_tools_survey.ts");
/* harmony import */ var _interface_leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface_leaflet */ "./src/js/interface_leaflet.ts");
/* harmony import */ var _neuron_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./neuron_options */ "./src/js/neuron_options.ts");
/* harmony import */ var _neuron_tools_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./neuron_tools_common */ "./src/js/neuron_tools_common.ts");
/* harmony import */ var _neuron_help__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./neuron_help */ "./src/js/neuron_help.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NeuronFeatureSurvey_instances, _NeuronFeatureSurvey_waypoints, _NeuronFeatureSurvey_mappoints, _NeuronFeatureSurvey_altitude, _NeuronFeatureSurvey_distance, _NeuronFeatureSurvey_spacing, _NeuronFeatureSurvey_angle, _NeuronFeatureSurvey_overshoot1, _NeuronFeatureSurvey_overshoot2, _NeuronFeatureSurvey_startpos, _NeuronFeatureSurvey_minLaneSeparation, _NeuronFeatureSurvey_leadin, _NeuronFeatureSurvey_sidelap, _NeuronFeatureSurvey_overlap, _NeuronFeatureSurvey_ground_resolution, _NeuronFeatureSurvey_show_waypoints, _NeuronFeatureSurvey_dom, _NeuronFeatureSurvey_dom_corner_count, _NeuronFeatureSurvey_dom_waypoint_count, _NeuronFeatureSurvey_dom_segment_duration, _NeuronFeatureSurvey_dom_photo_count, _NeuronFeatureSurvey_dom_show_waypoints, _NeuronFeatureSurvey_dom_show_corners, _NeuronFeatureSurvey_dom_altitude, _NeuronFeatureSurvey_dom_distance, _NeuronFeatureSurvey_dom_spacing, _NeuronFeatureSurvey_dom_angle, _NeuronFeatureSurvey_dom_angle_slider, _NeuronFeatureSurvey_dom_overshoot1, _NeuronFeatureSurvey_dom_overshoot2, _NeuronFeatureSurvey_dom_startpos, _NeuronFeatureSurvey_dom_minLaneSeparation, _NeuronFeatureSurvey_dom_leadin, _NeuronFeatureSurvey_dom_sidelap, _NeuronFeatureSurvey_dom_overlap, _NeuronFeatureSurvey_dom_ground_resolution, _NeuronFeatureSurvey_update_timer, _NeuronFeatureSurvey_update_interval, _NeuronFeatureSurvey_unsub_option_cb, _NeuronFeatureSurvey_remove_dom_highlight, _NeuronFeatureSurvey_options_changed, _NeuronFeatureSurvey_add_waypoint, _NeuronFeatureSurvey_set_altitude, _NeuronFeatureSurvey_set_distance, _NeuronFeatureSurvey_clear_update_timer, _NeuronFeatureSurvey__update_survey, _NeuronFeatureSurvey_clean_waypoints, _NeuronFeatureSurvey_try_update_dom_stats, _NeuronFeatureSurvey_update_show_corners_from_dom, _NeuronFeatureSurvey_update_show_waypoints_from_dom, _NeuronFeatureSurvey_update_altitude_from_dom, _NeuronFeatureSurvey_update_distance_from_dom, _NeuronFeatureSurvey_update_spacing_from_dom, _NeuronFeatureSurvey_update_angle_from_dom, _NeuronFeatureSurvey_update_angle_slider_from_dom, _NeuronFeatureSurvey_update_overshoot1_from_dom, _NeuronFeatureSurvey_update_overshoot2_from_dom, _NeuronFeatureSurvey_update_startpos_from_dom, _NeuronFeatureSurvey_update_minLaneSeparation_from_dom, _NeuronFeatureSurvey_update_leadin_from_dom, _NeuronFeatureSurvey_set_sidelap, _NeuronFeatureSurvey_set_ground_resolution, _NeuronFeatureSurvey_update_sidelap_from_dom, _NeuronFeatureSurvey_update_overlap_from_dom, _NeuronFeatureSurvey_update_ground_resolution_from_dom, _NeuronFeatureSurvey_calculate_and_update_capture_variables;







class NeuronFeatureSurvey extends _neuron_feature_polygon__WEBPACK_IMPORTED_MODULE_0__.NeuronFeaturePolygon {
    constructor(map, corners = [], show_waypoints = false) {
        super(map, corners);
        _NeuronFeatureSurvey_instances.add(this);
        _NeuronFeatureSurvey_waypoints.set(this, void 0);
        _NeuronFeatureSurvey_mappoints.set(this, void 0);
        _NeuronFeatureSurvey_altitude.set(this, void 0);
        _NeuronFeatureSurvey_distance.set(this, void 0);
        _NeuronFeatureSurvey_spacing.set(this, void 0);
        _NeuronFeatureSurvey_angle.set(this, void 0);
        _NeuronFeatureSurvey_overshoot1.set(this, void 0);
        _NeuronFeatureSurvey_overshoot2.set(this, void 0);
        _NeuronFeatureSurvey_startpos.set(this, void 0);
        _NeuronFeatureSurvey_minLaneSeparation.set(this, void 0);
        _NeuronFeatureSurvey_leadin.set(this, void 0);
        _NeuronFeatureSurvey_sidelap.set(this, void 0);
        _NeuronFeatureSurvey_overlap.set(this, void 0);
        _NeuronFeatureSurvey_ground_resolution.set(this, void 0);
        _NeuronFeatureSurvey_show_waypoints.set(this, void 0);
        _NeuronFeatureSurvey_dom.set(this, void 0);
        _NeuronFeatureSurvey_dom_corner_count.set(this, void 0);
        _NeuronFeatureSurvey_dom_waypoint_count.set(this, void 0);
        _NeuronFeatureSurvey_dom_segment_duration.set(this, void 0);
        _NeuronFeatureSurvey_dom_photo_count.set(this, void 0);
        //Display parameters
        _NeuronFeatureSurvey_dom_show_waypoints.set(this, void 0);
        _NeuronFeatureSurvey_dom_show_corners.set(this, void 0);
        //Survey parameters
        _NeuronFeatureSurvey_dom_altitude.set(this, void 0);
        _NeuronFeatureSurvey_dom_distance.set(this, void 0);
        _NeuronFeatureSurvey_dom_spacing.set(this, void 0);
        _NeuronFeatureSurvey_dom_angle.set(this, void 0);
        _NeuronFeatureSurvey_dom_angle_slider.set(this, void 0);
        _NeuronFeatureSurvey_dom_overshoot1.set(this, void 0);
        _NeuronFeatureSurvey_dom_overshoot2.set(this, void 0);
        _NeuronFeatureSurvey_dom_startpos.set(this, void 0);
        _NeuronFeatureSurvey_dom_minLaneSeparation.set(this, void 0);
        _NeuronFeatureSurvey_dom_leadin.set(this, void 0);
        //Capture parameters
        _NeuronFeatureSurvey_dom_sidelap.set(this, void 0);
        _NeuronFeatureSurvey_dom_overlap.set(this, void 0);
        _NeuronFeatureSurvey_dom_ground_resolution.set(this, void 0);
        _NeuronFeatureSurvey_update_timer.set(this, void 0);
        _NeuronFeatureSurvey_update_interval.set(this, void 0);
        _NeuronFeatureSurvey_unsub_option_cb.set(this, void 0);
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_waypoints, [], "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_mappoints, [], "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_update_timer, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_update_interval, 50, "f"); //ms
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_corner_count, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_waypoint_count, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_segment_duration, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_photo_count, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_show_corners, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_show_waypoints, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_altitude, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_distance, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_spacing, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_angle, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_angle_slider, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_overshoot1, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_overshoot2, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_startpos, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_minLaneSeparation, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_leadin, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_sidelap, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_overlap, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_ground_resolution, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_show_waypoints, show_waypoints, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_altitude, 100, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_distance, 50, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_spacing, 0, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_angle, 0.0, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_overshoot1, 0.0, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_overshoot2, 0.0, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_startpos, _neuron_tools_survey__WEBPACK_IMPORTED_MODULE_2__.StartPosition.TopLeft, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_minLaneSeparation, 0, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_leadin, 0.0, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_sidelap, 0.7, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_overlap, 0.7, "f");
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_ground_resolution, 0.0, "f");
        this._set_on_change_internal(this.update_survey.bind(this));
        __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey__update_survey).call(this, false);
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_unsub_option_cb, _neuron_options__WEBPACK_IMPORTED_MODULE_4__.NeuronOptions.add_callback(__classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_options_changed).bind(this)), "f");
    }
    show_on_plan() {
        if (__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom, "f")) {
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom, "f").scrollIntoView();
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom, "f").classList.remove('mission-feature-highlight-remove');
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom, "f").classList.add('mission-feature-highlight');
            setTimeout(__classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_remove_dom_highlight).bind(this), 1000);
        }
    }
    set_options_subscriber() {
        if (__classPrivateFieldGet(this, _NeuronFeatureSurvey_unsub_option_cb, "f"))
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_unsub_option_cb, "f").call(this);
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_unsub_option_cb, _neuron_options__WEBPACK_IMPORTED_MODULE_4__.NeuronOptions.add_callback(__classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_options_changed).bind(this)), "f");
    }
    update_show_waypoints(show_waypoints) {
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_show_waypoints, show_waypoints, "f");
        this.update_survey();
    }
    set_altitude(altitude) {
        __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_set_altitude).call(this, altitude, true);
    }
    set_distance(distance) {
        __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_set_distance).call(this, distance);
    }
    set_spacing(spacing) {
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_spacing, spacing, "f");
        this.update_survey();
    }
    set_angle(angle) {
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_angle, angle, "f");
        this.update_survey();
    }
    set_overshoot1(overshoot1) {
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_overshoot1, overshoot1, "f");
        this.update_survey();
    }
    set_overshoot2(overshoot2) {
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_overshoot2, overshoot2, "f");
        this.update_survey();
    }
    set_startpos(startpos) {
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_startpos, startpos, "f");
        this.update_survey();
    }
    set_minLaneSeparation(minLaneSeparation) {
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_minLaneSeparation, minLaneSeparation, "f");
        this.update_survey();
    }
    set_leadin(leadin) {
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_leadin, leadin, "f");
        this.update_survey();
    }
    get_show_waypoints() {
        return __classPrivateFieldGet(this, _NeuronFeatureSurvey_show_waypoints, "f");
    }
    get_altitude() {
        return __classPrivateFieldGet(this, _NeuronFeatureSurvey_altitude, "f");
    }
    get_distance() {
        return __classPrivateFieldGet(this, _NeuronFeatureSurvey_distance, "f");
    }
    get_spacing() {
        return __classPrivateFieldGet(this, _NeuronFeatureSurvey_spacing, "f");
    }
    get_angle() {
        return __classPrivateFieldGet(this, _NeuronFeatureSurvey_angle, "f");
    }
    get_overshoot1() {
        return __classPrivateFieldGet(this, _NeuronFeatureSurvey_overshoot1, "f");
    }
    get_overshoot2() {
        return __classPrivateFieldGet(this, _NeuronFeatureSurvey_overshoot2, "f");
    }
    get_startpos() {
        return __classPrivateFieldGet(this, _NeuronFeatureSurvey_startpos, "f");
    }
    get_minLaneSeparation() {
        return __classPrivateFieldGet(this, _NeuronFeatureSurvey_minLaneSeparation, "f");
    }
    get_leadin() {
        return __classPrivateFieldGet(this, _NeuronFeatureSurvey_leadin, "f");
    }
    update_survey() {
        //Clear any queued updates
        __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_clear_update_timer).call(this);
        //Force clear the survey survey immediately for display
        __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_clean_waypoints).call(this);
        //Update survey with slight delay for processing
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_update_timer, setTimeout(__classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey__update_survey).bind(this, true), __classPrivateFieldGet(this, _NeuronFeatureSurvey_update_interval, "f")), "f");
    }
    get_image_count() {
        let count = null;
        let projection = _neuron_options__WEBPACK_IMPORTED_MODULE_4__.NeuronOptions.get_camera().get_projected_size(__classPrivateFieldGet(this, _NeuronFeatureSurvey_altitude, "f"));
        if (projection && (__classPrivateFieldGet(this, _NeuronFeatureSurvey_overlap, "f") >= 0) && (__classPrivateFieldGet(this, _NeuronFeatureSurvey_overlap, "f") <= 1)) {
            let photo_count = 0;
            const overlap_factor = 1 - __classPrivateFieldGet(this, _NeuronFeatureSurvey_overlap, "f");
            const photo_distance = Math.abs(projection.Height()) * overlap_factor;
            for (const lane of this.get_lane_coords()) {
                const ps = lane.start.to_UTM();
                const pe = lane.end.to_UTM(ps.zone);
                const lane_distance = ps.GetDistance2D(pe);
                photo_count += Math.ceil(lane_distance / photo_distance);
            }
            count = photo_count;
        }
        return count;
    }
    show_help() {
        window.neuron_map.show_map_help(true, `${_neuron_help__WEBPACK_IMPORTED_MODULE_6__.NeuronHelp.HELP_PREFIX_MISSION}-${NeuronFeatureSurvey.HELP_KEY}`);
    }
    remove_feature() {
        __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_clean_waypoints).call(this);
        super.remove_feature();
    }
    get_path_coords() {
        const corners = this.get_corners_as_points();
        return __classPrivateFieldGet(this, _NeuronFeatureSurvey_waypoints, "f").length ? __classPrivateFieldGet(this, _NeuronFeatureSurvey_waypoints, "f") : (corners.length ? [corners[0]] : []);
    }
    get_lane_coords() {
        const coords = this.get_path_coords();
        let lanes = [];
        let start = null;
        for (let i = 0; i < coords.length; i++) {
            const p = coords[i];
            if ((!start && p.tag == _neuron_tools_survey__WEBPACK_IMPORTED_MODULE_2__.GridPointTags.START) || (start && p.tag == _neuron_tools_survey__WEBPACK_IMPORTED_MODULE_2__.GridPointTags.MIDDLE_START)) {
                //If we found a new start, or we are adjusting to a new middle start
                start = p;
            }
            else if (start && ((p.tag == _neuron_tools_survey__WEBPACK_IMPORTED_MODULE_2__.GridPointTags.MIDDLE_END) || (p.tag == _neuron_tools_survey__WEBPACK_IMPORTED_MODULE_2__.GridPointTags.END))) {
                //If we have a valid start and we have found a valid end
                //Add our finished lane
                lanes.push({
                    start: start,
                    end: p
                });
                //And reset
                start = null;
            }
        }
        if (start)
            console.warn("Unable to determine all lanes correctly!");
        return lanes;
    }
    get_dom() {
        if (!__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom, "f")) {
            __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom, this._get_dom("Survey"), "f");
            let c = document.createElement("div");
            c.className = 'mission-feature-content';
            //Output fields
            const t00 = "Number of corners that define this survey's boundaries";
            __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_corner_count, this._create_dom_output(), "f");
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_corner_count, "f").title = t00;
            c.appendChild(this._create_dom_label("Corners:", __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_corner_count, "f"), t00));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_corner_count, "f"));
            const t01 = "Number of waypoints that have been calculated to perform this survey";
            __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_waypoint_count, this._create_dom_output(), "f");
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_waypoint_count, "f").title = t01;
            c.appendChild(this._create_dom_label("Waypoints:", __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_waypoint_count, "f"), t01));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_waypoint_count, "f"));
            const t03 = "Estimated flight time of the survey feature";
            __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_segment_duration, this._create_dom_output(), "f");
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_segment_duration, "f").title = t03;
            c.appendChild(this._create_dom_label("Duration:", __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_segment_duration, "f"), t03));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_segment_duration, "f"));
            const t02 = "Number of images that will be captured by the camera on the aircraft to perform this survey";
            __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_photo_count, this._create_dom_output(), "f");
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_photo_count, "f").title = t02;
            c.appendChild(this._create_dom_label("Images:", __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_photo_count, "f"), t02));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_photo_count, "f"));
            //Input fields
            const t2 = "Show the corners of the polygon that defines the survey area";
            __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_show_corners, this._create_dom_input_checkbox(this.corners_visible(), __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_update_show_corners_from_dom).bind(this)), "f");
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_show_corners, "f").title = t2;
            c.appendChild(this._create_dom_label("Show corners:", __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_show_corners, "f"), t2));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_show_corners, "f"));
            const t21 = "Show the waypoints that have been calculated at the end of each lane to perform this survey";
            __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_show_waypoints, this._create_dom_input_checkbox(__classPrivateFieldGet(this, _NeuronFeatureSurvey_show_waypoints, "f"), __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_update_show_waypoints_from_dom).bind(this)), "f");
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_show_waypoints, "f").title = t21;
            c.appendChild(this._create_dom_label("Show ends:", __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_show_waypoints, "f"), t2));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_show_waypoints, "f"));
            //=====================================
            //Capture calculations
            //=====================================
            const tb2 = "Image capture configuration and calculations for survey parameters.";
            let dom_break2 = this._create_dom_output();
            dom_break2.title = tb2;
            let dom_break_label2 = this._create_dom_label("Capture Config.", dom_break2, tb2);
            dom_break_label2.classList.add('mission-feature-content-subtitle');
            c.appendChild(dom_break_label2);
            c.appendChild(dom_break2);
            const t18 = "Ground sampling distance, or ground resolution, in centimeters per pixel";
            __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_ground_resolution, this._create_dom_input_number(__classPrivateFieldGet(this, _NeuronFeatureSurvey_ground_resolution, "f") / NeuronFeatureSurvey._gsd_ratio, __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_update_ground_resolution_from_dom).bind(this), 0, null, 0.2), "f");
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_ground_resolution, "f").title = t18;
            c.appendChild(this._create_dom_label("GSD:", __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_ground_resolution, "f"), t18));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_ground_resolution, "f"));
            const t17 = "Image vertical overlap between lanes as a percentage";
            __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_overlap, this._create_dom_input_number(__classPrivateFieldGet(this, _NeuronFeatureSurvey_overlap, "f") / NeuronFeatureSurvey._xlap_ratio, __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_update_overlap_from_dom).bind(this), 0, 100), "f");
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_overlap, "f").title = t17;
            c.appendChild(this._create_dom_label("Overlap:", __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_overlap, "f"), t17));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_overlap, "f"));
            const t19 = "Image horizontal overlap between lanes as a percentage";
            __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_sidelap, this._create_dom_input_number(__classPrivateFieldGet(this, _NeuronFeatureSurvey_sidelap, "f") / NeuronFeatureSurvey._xlap_ratio, __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_update_sidelap_from_dom).bind(this), 0, 100), "f");
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_sidelap, "f").title = t19;
            c.appendChild(this._create_dom_label("Sidelap:", __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_sidelap, "f"), t19));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_sidelap, "f"));
            //=====================================
            //Flight calculations
            //=====================================
            const tb1 = "Flight path parameter configuration and calculations for the survey.";
            let dom_break1 = this._create_dom_output();
            dom_break1.title = tb1;
            let dom_break_label1 = this._create_dom_label("Path Config.", dom_break1, tb1);
            dom_break_label1.classList.add('mission-feature-content-subtitle');
            c.appendChild(dom_break_label1);
            c.appendChild(dom_break1);
            const t3 = "Altitude for the survey in feet relative to take-off location ground level";
            __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_altitude, this._create_dom_input_number(__classPrivateFieldGet(this, _NeuronFeatureSurvey_altitude, "f") / NeuronFeatureSurvey._altitude_ratio, __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_update_altitude_from_dom).bind(this)), "f");
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_altitude, "f").title = t3;
            c.appendChild(this._create_dom_label("Altitude:", __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_altitude, "f"), t3));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_altitude, "f"));
            const t4 = "Spacing between the individual lanes of the survey pattern in meters";
            __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_distance, this._create_dom_input_number(__classPrivateFieldGet(this, _NeuronFeatureSurvey_distance, "f"), __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_update_distance_from_dom).bind(this), 0.5), "f");
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_distance, "f").title = t4;
            c.appendChild(this._create_dom_label("Spacing:", __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_distance, "f"), t4));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_distance, "f"));
            const t5 = "Entry location on the survey pattern relative to the most Northwestern point of the survey";
            __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_startpos, this._create_dom_input_select([
                _neuron_tools_survey__WEBPACK_IMPORTED_MODULE_2__.StartPosition.TopLeft,
                _neuron_tools_survey__WEBPACK_IMPORTED_MODULE_2__.StartPosition.TopRight,
                _neuron_tools_survey__WEBPACK_IMPORTED_MODULE_2__.StartPosition.BottomLeft,
                _neuron_tools_survey__WEBPACK_IMPORTED_MODULE_2__.StartPosition.BottomRight
            ].map(x => x.toString()), [
                "Top left",
                "Top right",
                "Bottom left",
                "Bottom right"
            ], __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_update_startpos_from_dom).bind(this), __classPrivateFieldGet(this, _NeuronFeatureSurvey_startpos, "f").toString()), "f");
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_startpos, "f").title = t5;
            c.appendChild(this._create_dom_label("Entry:", __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_startpos, "f"), t5));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_startpos, "f"));
            // this.#dom_spacing = this._create_dom_input_number(this.#spacing, this.#update_spacing_from_dom.bind(this), 0);
            // c.appendChild(this._create_dom_labelled_input("Spacing:", this.#dom_spacing));
            const t6 = "Angle of the survey pattern in degrees relative to North";
            __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_angle, this._create_dom_input_number(__classPrivateFieldGet(this, _NeuronFeatureSurvey_angle, "f"), __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_update_angle_from_dom).bind(this), -180, 180), "f");
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_angle, "f").title = t6;
            c.appendChild(this._create_dom_label("Angle:", __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_angle, "f"), t6));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_angle, "f"));
            //XXX: Same title as dom_angle
            __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_angle_slider, this._create_dom_input_range(__classPrivateFieldGet(this, _NeuronFeatureSurvey_angle, "f"), __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_update_angle_slider_from_dom).bind(this), -180, 180, 5), "f");
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_angle_slider, "f").title = t6;
            c.appendChild(this._create_dom_label("Angle:", __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_angle_slider, "f"), t6, true));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_angle_slider, "f"));
            const t7 = "Lane start waypoint adjustment of the survey pattern in meters from the lane intersection point with the survey boundary";
            __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_leadin, this._create_dom_input_number(__classPrivateFieldGet(this, _NeuronFeatureSurvey_leadin, "f"), __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_update_leadin_from_dom).bind(this), 0), "f");
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_leadin, "f").title = t7;
            c.appendChild(this._create_dom_label("Lead-in:", __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_leadin, "f"), t7));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_leadin, "f"));
            const t9 = "Lane end waypoint adjustment of the survey pattern in meters from the lane intersection point with the survey boundary for odd-numbered lanes";
            __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_overshoot2, this._create_dom_input_number(__classPrivateFieldGet(this, _NeuronFeatureSurvey_overshoot2, "f"), __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_update_overshoot2_from_dom).bind(this)), "f");
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_overshoot2, "f").title = t9;
            c.appendChild(this._create_dom_label("Run-out A:", __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_overshoot2, "f"), t9));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_overshoot2, "f"));
            const t8 = "Lane end waypoint adjustment of the survey pattern in meters from the lane intersection point with the survey boundary for even-numbered lanes";
            __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_overshoot1, this._create_dom_input_number(__classPrivateFieldGet(this, _NeuronFeatureSurvey_overshoot1, "f"), __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_update_overshoot1_from_dom).bind(this)), "f");
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_overshoot1, "f").title = t8;
            c.appendChild(this._create_dom_label("Run-out B:", __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_overshoot1, "f"), t8));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_overshoot1, "f"));
            const t10 = "Number of lanes to skip between each run across the survey area";
            __classPrivateFieldSet(this, _NeuronFeatureSurvey_dom_minLaneSeparation, this._create_dom_input_number(__classPrivateFieldGet(this, _NeuronFeatureSurvey_minLaneSeparation, "f"), __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_update_minLaneSeparation_from_dom).bind(this), 0), "f");
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_minLaneSeparation, "f").title = t10;
            c.appendChild(this._create_dom_label("Lane Skip:", __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_minLaneSeparation, "f"), t10));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_minLaneSeparation, "f"));
            //Try go back now and calculate other values if relevant
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_calculate_and_update_capture_variables).call(this);
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_try_update_dom_stats).call(this);
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom, "f").append(c);
        }
        return __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom, "f");
    }
    get_sidelap() {
        return __classPrivateFieldGet(this, _NeuronFeatureSurvey_sidelap, "f");
    }
    ;
    get_overlap() {
        return __classPrivateFieldGet(this, _NeuronFeatureSurvey_overlap, "f");
    }
    get_ground_resolution() {
        return __classPrivateFieldGet(this, _NeuronFeatureSurvey_ground_resolution, "f");
    }
    ;
    set_sidelap(sidelap) {
        __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_set_sidelap).call(this, sidelap);
    }
    ;
    set_overlap(overlap) {
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_overlap, overlap, "f");
        __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_try_update_dom_stats).call(this);
    }
    set_ground_resolution(ground_resolution) {
        __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_set_ground_resolution).call(this, ground_resolution);
    }
    ;
    static isObjectOfDataType(object) {
        let is_valid = (object.type == NeuronFeatureSurvey.TYPE) &&
            (object.version == NeuronFeatureSurvey.VERSION);
        return is_valid;
    }
    static from_json(j, map) {
        //XXX: Implement this per inherited feature
        if (!NeuronFeatureSurvey.isObjectOfDataType(j))
            throw new Error(`Invalid type check during creation of NeuronFeatureSurvey`);
        const corners = j.corners.map(x => _neuron_interfaces__WEBPACK_IMPORTED_MODULE_1__.NeuronInterfacePoint.from_json(x));
        let s = new NeuronFeatureSurvey(map, corners);
        s.set_altitude(Number.isNaN(j.altitude) ? 0.0 : j.altitude);
        s.set_distance(Number.isNaN(j.distance) ? 0.0 : j.distance);
        s.set_spacing(Number.isNaN(j.spacing) ? 0.0 : j.spacing);
        s.set_angle(Number.isNaN(j.angle) ? 0.0 : j.angle);
        s.set_overshoot1(Number.isNaN(j.overshoot1) ? 0.0 : j.overshoot1);
        s.set_overshoot2(Number.isNaN(j.overshoot2) ? 0.0 : j.overshoot2);
        s.set_startpos(Number.isNaN(j.startpos) ? 0.0 : j.startpos);
        s.set_minLaneSeparation(Number.isNaN(j.minLaneSeparation) ? 0.0 : j.minLaneSeparation);
        s.set_leadin(Number.isNaN(j.leadin) ? 0.0 : j.leadin);
        s.set_overlap(Number.isNaN(j.overlap) ? 0.0 : j.overlap);
        __classPrivateFieldGet(s, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_set_sidelap).call(s, Number.isNaN(j.sidelap) ? 0.0 : j.sidelap, false);
        __classPrivateFieldGet(s, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_set_ground_resolution).call(s, Number.isNaN(j.ground_resolution) ? 0.0 : j.ground_resolution, false);
        __classPrivateFieldGet(s, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_calculate_and_update_capture_variables).call(s);
        return s;
    }
    to_json() {
        //XXX: Implement this per inherited feature
        return {
            version: NeuronFeatureSurvey.VERSION,
            type: NeuronFeatureSurvey.TYPE,
            corners: this.get_corners_as_points().map(x => x.to_json()),
            altitude: this.get_altitude(),
            distance: this.get_distance(),
            spacing: this.get_spacing(),
            angle: this.get_angle(),
            overshoot1: this.get_overshoot1(),
            overshoot2: this.get_overshoot2(),
            startpos: this.get_startpos(),
            minLaneSeparation: this.get_minLaneSeparation(),
            leadin: this.get_leadin(),
            overlap: this.get_overlap(),
            sidelap: this.get_sidelap(),
            ground_resolution: this.get_ground_resolution()
        };
    }
}
_NeuronFeatureSurvey_waypoints = new WeakMap(), _NeuronFeatureSurvey_mappoints = new WeakMap(), _NeuronFeatureSurvey_altitude = new WeakMap(), _NeuronFeatureSurvey_distance = new WeakMap(), _NeuronFeatureSurvey_spacing = new WeakMap(), _NeuronFeatureSurvey_angle = new WeakMap(), _NeuronFeatureSurvey_overshoot1 = new WeakMap(), _NeuronFeatureSurvey_overshoot2 = new WeakMap(), _NeuronFeatureSurvey_startpos = new WeakMap(), _NeuronFeatureSurvey_minLaneSeparation = new WeakMap(), _NeuronFeatureSurvey_leadin = new WeakMap(), _NeuronFeatureSurvey_sidelap = new WeakMap(), _NeuronFeatureSurvey_overlap = new WeakMap(), _NeuronFeatureSurvey_ground_resolution = new WeakMap(), _NeuronFeatureSurvey_show_waypoints = new WeakMap(), _NeuronFeatureSurvey_dom = new WeakMap(), _NeuronFeatureSurvey_dom_corner_count = new WeakMap(), _NeuronFeatureSurvey_dom_waypoint_count = new WeakMap(), _NeuronFeatureSurvey_dom_segment_duration = new WeakMap(), _NeuronFeatureSurvey_dom_photo_count = new WeakMap(), _NeuronFeatureSurvey_dom_show_waypoints = new WeakMap(), _NeuronFeatureSurvey_dom_show_corners = new WeakMap(), _NeuronFeatureSurvey_dom_altitude = new WeakMap(), _NeuronFeatureSurvey_dom_distance = new WeakMap(), _NeuronFeatureSurvey_dom_spacing = new WeakMap(), _NeuronFeatureSurvey_dom_angle = new WeakMap(), _NeuronFeatureSurvey_dom_angle_slider = new WeakMap(), _NeuronFeatureSurvey_dom_overshoot1 = new WeakMap(), _NeuronFeatureSurvey_dom_overshoot2 = new WeakMap(), _NeuronFeatureSurvey_dom_startpos = new WeakMap(), _NeuronFeatureSurvey_dom_minLaneSeparation = new WeakMap(), _NeuronFeatureSurvey_dom_leadin = new WeakMap(), _NeuronFeatureSurvey_dom_sidelap = new WeakMap(), _NeuronFeatureSurvey_dom_overlap = new WeakMap(), _NeuronFeatureSurvey_dom_ground_resolution = new WeakMap(), _NeuronFeatureSurvey_update_timer = new WeakMap(), _NeuronFeatureSurvey_update_interval = new WeakMap(), _NeuronFeatureSurvey_unsub_option_cb = new WeakMap(), _NeuronFeatureSurvey_instances = new WeakSet(), _NeuronFeatureSurvey_remove_dom_highlight = function _NeuronFeatureSurvey_remove_dom_highlight() {
    if (__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom, "f")) {
        __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom, "f").classList.remove('mission-feature-highlight');
        __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom, "f").classList.add('mission-feature-highlight-remove');
    }
}, _NeuronFeatureSurvey_options_changed = function _NeuronFeatureSurvey_options_changed() {
    //Update our variables, and then the survey if there was a change
    if (__classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_calculate_and_update_capture_variables).call(this))
        this.update_survey();
}, _NeuronFeatureSurvey_add_waypoint = function _NeuronFeatureSurvey_add_waypoint(point, name = "Survey Waypoint") {
    if (__classPrivateFieldGet(this, _NeuronFeatureSurvey_show_waypoints, "f")) {
        let m = _interface_leaflet__WEBPACK_IMPORTED_MODULE_3__.L.marker([point.latitude, point.longitude], {
            // draggable: true,
            autoPan: true,
        });
        // const menu_items = [
        //     new LeafletContextMenuItem("Move forward", "fa-arrow-left", this.move_corner_forwards.bind(this)),
        //     new LeafletContextMenuItem("Move backward", "fa-arrow-right", this.move_corner_backwards.bind(this)),
        //     null,
        //     new LeafletContextMenuItem("Remove", "fa-trash", this.remove_point_by_corner.bind(this)),
        // ]
        m.bindPopup((0,_interface_leaflet__WEBPACK_IMPORTED_MODULE_3__.create_popup_context_dom)(name, [], m));
        // m.on("drag", this.update_polygon.bind(this));
        // m.on("click", this.#select_corner_by_event.bind(this));
        // m.on("dblclick", this.#remove_point_by_event.bind(this));
        this._add_layer_to_map(m);
        __classPrivateFieldGet(this, _NeuronFeatureSurvey_mappoints, "f").push(m);
    }
    __classPrivateFieldGet(this, _NeuronFeatureSurvey_waypoints, "f").push(point);
}, _NeuronFeatureSurvey_set_altitude = function _NeuronFeatureSurvey_set_altitude(altitude, update_calcs = true) {
    __classPrivateFieldSet(this, _NeuronFeatureSurvey_altitude, altitude, "f");
    if (update_calcs) {
        let resolution = _neuron_options__WEBPACK_IMPORTED_MODULE_4__.NeuronOptions.get_camera().get_ground_resolution(__classPrivateFieldGet(this, _NeuronFeatureSurvey_altitude, "f"));
        if (resolution) {
            if (__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_ground_resolution, "f"))
                __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_ground_resolution, "f").value = (resolution / NeuronFeatureSurvey._gsd_ratio).toString();
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_set_ground_resolution).call(this, resolution, false);
        }
    }
    this.update_survey();
}, _NeuronFeatureSurvey_set_distance = function _NeuronFeatureSurvey_set_distance(distance, update_calcs = true) {
    __classPrivateFieldSet(this, _NeuronFeatureSurvey_distance, distance, "f");
    if (update_calcs) {
        let projection = _neuron_options__WEBPACK_IMPORTED_MODULE_4__.NeuronOptions.get_camera().get_projected_size(__classPrivateFieldGet(this, _NeuronFeatureSurvey_altitude, "f"));
        if (projection && (distance >= 0)) {
            const sidelap_factor = distance / projection.Width();
            const sidelap = Math.max(Math.min(1 - sidelap_factor, 1.0), 0.0);
            if (__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_ground_resolution, "f"))
                __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_sidelap, "f").value = (sidelap / NeuronFeatureSurvey._xlap_ratio).toString();
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_set_sidelap).call(this, sidelap, false);
        }
    }
    this.update_survey();
}, _NeuronFeatureSurvey_clear_update_timer = function _NeuronFeatureSurvey_clear_update_timer() {
    if (__classPrivateFieldGet(this, _NeuronFeatureSurvey_update_timer, "f")) {
        clearTimeout(__classPrivateFieldGet(this, _NeuronFeatureSurvey_update_timer, "f"));
        __classPrivateFieldSet(this, _NeuronFeatureSurvey_update_timer, null, "f");
    }
}, _NeuronFeatureSurvey__update_survey = function _NeuronFeatureSurvey__update_survey(fire_on_change = true) {
    __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_clean_waypoints).call(this);
    const corners = this.get_corners_as_points();
    const waypoints = (corners.length <= 2) ?
        //There's only a line, so go end-to-end
        corners :
        //There is an actual polygon, so do a survey grid
        (0,_neuron_tools_survey__WEBPACK_IMPORTED_MODULE_2__.CreateGrid)(this.get_corners_as_points(), __classPrivateFieldGet(this, _NeuronFeatureSurvey_altitude, "f"), __classPrivateFieldGet(this, _NeuronFeatureSurvey_distance, "f"), __classPrivateFieldGet(this, _NeuronFeatureSurvey_spacing, "f"), __classPrivateFieldGet(this, _NeuronFeatureSurvey_angle, "f"), __classPrivateFieldGet(this, _NeuronFeatureSurvey_overshoot1, "f"), __classPrivateFieldGet(this, _NeuronFeatureSurvey_overshoot2, "f"), __classPrivateFieldGet(this, _NeuronFeatureSurvey_startpos, "f"), __classPrivateFieldGet(this, _NeuronFeatureSurvey_minLaneSeparation, "f"), __classPrivateFieldGet(this, _NeuronFeatureSurvey_leadin, "f"));
    for (let i = 0; i < waypoints.length; i++)
        __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_add_waypoint).call(this, waypoints[i], `Survey Waypoint (#${i})`);
    __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_try_update_dom_stats).call(this);
    if (fire_on_change)
        this._trigger_on_changed();
}, _NeuronFeatureSurvey_clean_waypoints = function _NeuronFeatureSurvey_clean_waypoints() {
    for (const m of __classPrivateFieldGet(this, _NeuronFeatureSurvey_mappoints, "f")) {
        this._remove_layer_from_map(m);
    }
    __classPrivateFieldSet(this, _NeuronFeatureSurvey_mappoints, [], "f");
    __classPrivateFieldSet(this, _NeuronFeatureSurvey_waypoints, [], "f");
}, _NeuronFeatureSurvey_try_update_dom_stats = function _NeuronFeatureSurvey_try_update_dom_stats() {
    const coords = this.get_path_coords();
    if (__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_corner_count, "f"))
        __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_corner_count, "f").value = this.get_corners().length.toFixed(0);
    if (__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_waypoint_count, "f"))
        __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_waypoint_count, "f").value = coords.length.toFixed(0);
    if (__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_segment_duration, "f")) {
        const distance = (0,_neuron_tools_common__WEBPACK_IMPORTED_MODULE_5__.flight_distance_from_coords)(coords);
        const duration = distance / _neuron_options__WEBPACK_IMPORTED_MODULE_4__.NeuronOptions.get_option_number(_neuron_options__WEBPACK_IMPORTED_MODULE_4__.NeuronOptionsNumber.MISSION_SPEED);
        __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_segment_duration, "f").value = (0,_neuron_tools_common__WEBPACK_IMPORTED_MODULE_5__.flight_time_from_duration)(duration);
    }
    if (__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_photo_count, "f")) {
        let count = this.get_image_count();
        __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_photo_count, "f").value = count > 0 ? count.toString() : "---";
    }
}, _NeuronFeatureSurvey_update_show_corners_from_dom = function _NeuronFeatureSurvey_update_show_corners_from_dom() {
    this.update_show_corners(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_show_corners, "f").checked);
}, _NeuronFeatureSurvey_update_show_waypoints_from_dom = function _NeuronFeatureSurvey_update_show_waypoints_from_dom() {
    this.update_show_waypoints(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_show_waypoints, "f").checked);
}, _NeuronFeatureSurvey_update_altitude_from_dom = function _NeuronFeatureSurvey_update_altitude_from_dom() {
    this.set_altitude(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_altitude, "f").valueAsNumber * NeuronFeatureSurvey._altitude_ratio);
}, _NeuronFeatureSurvey_update_distance_from_dom = function _NeuronFeatureSurvey_update_distance_from_dom() {
    this.set_distance(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_distance, "f").valueAsNumber);
}, _NeuronFeatureSurvey_update_spacing_from_dom = function _NeuronFeatureSurvey_update_spacing_from_dom() {
    this.set_spacing(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_spacing, "f").valueAsNumber);
}, _NeuronFeatureSurvey_update_angle_from_dom = function _NeuronFeatureSurvey_update_angle_from_dom() {
    const val = __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_angle, "f").valueAsNumber;
    __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_angle_slider, "f").value = val.toString();
    this.set_angle(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_angle, "f").valueAsNumber);
}, _NeuronFeatureSurvey_update_angle_slider_from_dom = function _NeuronFeatureSurvey_update_angle_slider_from_dom() {
    const val = __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_angle_slider, "f").valueAsNumber;
    __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_angle, "f").value = val.toString();
    this.set_angle(val);
}, _NeuronFeatureSurvey_update_overshoot1_from_dom = function _NeuronFeatureSurvey_update_overshoot1_from_dom() {
    this.set_overshoot1(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_overshoot1, "f").valueAsNumber);
}, _NeuronFeatureSurvey_update_overshoot2_from_dom = function _NeuronFeatureSurvey_update_overshoot2_from_dom() {
    this.set_overshoot2(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_overshoot2, "f").valueAsNumber);
}, _NeuronFeatureSurvey_update_startpos_from_dom = function _NeuronFeatureSurvey_update_startpos_from_dom() {
    const v = Number.parseInt(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_startpos, "f").value);
    const values = Object.values(_neuron_tools_survey__WEBPACK_IMPORTED_MODULE_2__.StartPosition);
    if (!values.includes(v))
        throw new Error(`Selected value (${v}) is not a StartingPosition`);
    this.set_startpos(v);
}, _NeuronFeatureSurvey_update_minLaneSeparation_from_dom = function _NeuronFeatureSurvey_update_minLaneSeparation_from_dom() {
    this.set_minLaneSeparation(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_minLaneSeparation, "f").valueAsNumber);
}, _NeuronFeatureSurvey_update_leadin_from_dom = function _NeuronFeatureSurvey_update_leadin_from_dom() {
    this.set_leadin(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_leadin, "f").valueAsNumber);
}, _NeuronFeatureSurvey_set_sidelap = function _NeuronFeatureSurvey_set_sidelap(sidelap, update_calcs = true) {
    __classPrivateFieldSet(this, _NeuronFeatureSurvey_sidelap, sidelap, "f");
    if (update_calcs)
        __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_calculate_and_update_capture_variables).call(this);
}, _NeuronFeatureSurvey_set_ground_resolution = function _NeuronFeatureSurvey_set_ground_resolution(ground_resolution, update_calcs = true) {
    __classPrivateFieldSet(this, _NeuronFeatureSurvey_ground_resolution, ground_resolution, "f");
    if (update_calcs)
        __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_calculate_and_update_capture_variables).call(this);
}, _NeuronFeatureSurvey_update_sidelap_from_dom = function _NeuronFeatureSurvey_update_sidelap_from_dom() {
    this.set_sidelap(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_sidelap, "f").valueAsNumber * NeuronFeatureSurvey._xlap_ratio);
}, _NeuronFeatureSurvey_update_overlap_from_dom = function _NeuronFeatureSurvey_update_overlap_from_dom() {
    this.set_overlap(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_overlap, "f").valueAsNumber * NeuronFeatureSurvey._xlap_ratio);
}, _NeuronFeatureSurvey_update_ground_resolution_from_dom = function _NeuronFeatureSurvey_update_ground_resolution_from_dom() {
    __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_set_ground_resolution).call(this, __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_ground_resolution, "f").valueAsNumber * NeuronFeatureSurvey._gsd_ratio);
}, _NeuronFeatureSurvey_calculate_and_update_capture_variables = function _NeuronFeatureSurvey_calculate_and_update_capture_variables() {
    let settings_changed = false;
    const camera = _neuron_options__WEBPACK_IMPORTED_MODULE_4__.NeuronOptions.get_camera();
    let altitude = camera.get_distance(this.get_ground_resolution());
    if (altitude && altitude != this.get_altitude()) {
        settings_changed = true;
        if (__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_altitude, "f"))
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_altitude, "f").value = (altitude / NeuronFeatureSurvey._altitude_ratio).toString();
        __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_set_altitude).call(this, altitude, false);
    }
    let projection = camera.get_projected_size(__classPrivateFieldGet(this, _NeuronFeatureSurvey_altitude, "f"));
    if (projection && (__classPrivateFieldGet(this, _NeuronFeatureSurvey_sidelap, "f") >= 0) && (__classPrivateFieldGet(this, _NeuronFeatureSurvey_sidelap, "f") <= 1)) {
        const sidelap_factor = 1 - __classPrivateFieldGet(this, _NeuronFeatureSurvey_sidelap, "f");
        const distance = projection.Width() * sidelap_factor;
        if (distance != this.get_distance()) {
            settings_changed = true;
            if (__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_distance, "f"))
                __classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_distance, "f").value = Math.max(Number.parseFloat(__classPrivateFieldGet(this, _NeuronFeatureSurvey_dom_distance, "f").min), distance).toString();
            __classPrivateFieldGet(this, _NeuronFeatureSurvey_instances, "m", _NeuronFeatureSurvey_set_distance).call(this, distance, false);
        }
    }
    return settings_changed;
};
NeuronFeatureSurvey.NAME = "Survey";
NeuronFeatureSurvey.TYPE = "NeuronFeatureSurvey";
NeuronFeatureSurvey.VERSION = '70bb75e0-d5a0-11ec-aaa0-9f86362bde1a';
NeuronFeatureSurvey.HELP_KEY = 'survey';
NeuronFeatureSurvey._gsd_ratio = 0.01; //GSD = [DOM Value] * Ratio
NeuronFeatureSurvey._xlap_ratio = 0.01; //Sidelap = [DOM Value] * Ratio


/***/ }),

/***/ "./src/js/neuron_feature_waypoint.ts":
/*!*******************************************!*\
  !*** ./src/js/neuron_feature_waypoint.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeuronFeatureWaypoint": () => (/* binding */ NeuronFeatureWaypoint)
/* harmony export */ });
/* harmony import */ var _neuron_feature_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neuron_feature_base */ "./src/js/neuron_feature_base.ts");
/* harmony import */ var _neuron_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neuron_interfaces */ "./src/js/neuron_interfaces.ts");
/* harmony import */ var _interface_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface_leaflet */ "./src/js/interface_leaflet.ts");
/* harmony import */ var _neuron_help__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./neuron_help */ "./src/js/neuron_help.ts");
/* harmony import */ var _neuron_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./neuron_options */ "./src/js/neuron_options.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NeuronFeatureWaypoint_instances, _NeuronFeatureWaypoint_marker, _NeuronFeatureWaypoint_point, _NeuronFeatureWaypoint_dom, _NeuronFeatureWaypoint_dom_lat, _NeuronFeatureWaypoint_dom_lon, _NeuronFeatureWaypoint_dom_alt, _NeuronFeatureWaypoint_dom_hdg, _NeuronFeatureWaypoint_dom_wait, _NeuronFeatureWaypoint_dom_capture, _NeuronFeatureWaypoint_dom_ground_resolution, _NeuronFeatureWaypoint_wait_duration, _NeuronFeatureWaypoint_capture_image, _NeuronFeatureWaypoint_ground_resolution, _NeuronFeatureWaypoint_unsub_option_cb, _NeuronFeatureWaypoint_options_changed, _NeuronFeatureWaypoint_remove_point_by_event, _NeuronFeatureWaypoint_update_position_from_event, _NeuronFeatureWaypoint_remove_dom_highlight, _NeuronFeatureWaypoint_internal_set_point, _NeuronFeatureWaypoint_update_latitude_from_dom, _NeuronFeatureWaypoint_update_longitude_from_dom, _NeuronFeatureWaypoint_update_altitude_from_dom, _NeuronFeatureWaypoint_update_heading_from_dom, _NeuronFeatureWaypoint_update_wait_duration_from_dom, _NeuronFeatureWaypoint_update_capture_image_from_dom, _NeuronFeatureWaypoint_update_ground_resolution_from_dom, _NeuronFeatureWaypoint_set_ground_resolution;





class NeuronFeatureWaypoint extends _neuron_feature_base__WEBPACK_IMPORTED_MODULE_0__.NeuronFeatureBase {
    constructor(map, point = null) {
        super(map);
        _NeuronFeatureWaypoint_instances.add(this);
        _NeuronFeatureWaypoint_marker.set(this, void 0);
        _NeuronFeatureWaypoint_point.set(this, void 0);
        _NeuronFeatureWaypoint_dom.set(this, void 0);
        _NeuronFeatureWaypoint_dom_lat.set(this, void 0);
        _NeuronFeatureWaypoint_dom_lon.set(this, void 0);
        _NeuronFeatureWaypoint_dom_alt.set(this, void 0);
        _NeuronFeatureWaypoint_dom_hdg.set(this, void 0);
        _NeuronFeatureWaypoint_dom_wait.set(this, void 0);
        _NeuronFeatureWaypoint_dom_capture.set(this, void 0);
        _NeuronFeatureWaypoint_dom_ground_resolution.set(this, void 0);
        _NeuronFeatureWaypoint_wait_duration.set(this, void 0);
        _NeuronFeatureWaypoint_capture_image.set(this, void 0);
        _NeuronFeatureWaypoint_ground_resolution.set(this, void 0);
        _NeuronFeatureWaypoint_unsub_option_cb.set(this, void 0);
        __classPrivateFieldSet(this, _NeuronFeatureWaypoint_marker, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureWaypoint_point, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureWaypoint_dom, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureWaypoint_dom_lat, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureWaypoint_dom_lon, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureWaypoint_dom_alt, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureWaypoint_dom_hdg, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureWaypoint_dom_wait, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureWaypoint_dom_capture, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureWaypoint_dom_ground_resolution, null, "f");
        __classPrivateFieldSet(this, _NeuronFeatureWaypoint_wait_duration, 0, "f");
        __classPrivateFieldSet(this, _NeuronFeatureWaypoint_capture_image, false, "f");
        __classPrivateFieldSet(this, _NeuronFeatureWaypoint_ground_resolution, 0, "f");
        if (point)
            this.set_point(point);
        __classPrivateFieldSet(this, _NeuronFeatureWaypoint_unsub_option_cb, _neuron_options__WEBPACK_IMPORTED_MODULE_4__.NeuronOptions.add_callback(__classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_options_changed).bind(this)), "f");
    }
    set_options_subscriber() {
        if (__classPrivateFieldGet(this, _NeuronFeatureWaypoint_unsub_option_cb, "f"))
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_unsub_option_cb, "f").call(this);
        __classPrivateFieldSet(this, _NeuronFeatureWaypoint_unsub_option_cb, _neuron_options__WEBPACK_IMPORTED_MODULE_4__.NeuronOptions.add_callback(__classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_options_changed).bind(this)), "f");
    }
    remove_point_by_context(context) {
        if (__classPrivateFieldGet(this, _NeuronFeatureWaypoint_marker, "f") == context) {
            this.remove_feature();
        }
        else {
            console.warn("Call to remove unknown marker context");
        }
    }
    set_point(point) {
        if (!__classPrivateFieldGet(this, _NeuronFeatureWaypoint_marker, "f")) {
            __classPrivateFieldSet(this, _NeuronFeatureWaypoint_marker, _interface_leaflet__WEBPACK_IMPORTED_MODULE_2__.L.marker(point.to_leaflet(), {
                draggable: true,
                autoPan: true,
                icon: (0,_interface_leaflet__WEBPACK_IMPORTED_MODULE_2__.get_neuron_icon)('neuron-marker-waypoint')
            }), "f");
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_marker, "f").on("drag", __classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_update_position_from_event).bind(this));
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_marker, "f").on("dblclick", __classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_remove_point_by_event).bind(this));
            const menu_items = [
                new _interface_leaflet__WEBPACK_IMPORTED_MODULE_2__.LeafletContextMenuItem("Show in plan", "fa-bars", this.show_on_plan.bind(this)),
                null,
                new _interface_leaflet__WEBPACK_IMPORTED_MODULE_2__.LeafletContextMenuItem("Remove", "fa-trash", this.remove_point_by_context.bind(this)),
            ];
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_marker, "f").bindPopup((0,_interface_leaflet__WEBPACK_IMPORTED_MODULE_2__.create_popup_context_dom)("Waypoint", menu_items, __classPrivateFieldGet(this, _NeuronFeatureWaypoint_marker, "f")));
            this._add_layer_to_map(__classPrivateFieldGet(this, _NeuronFeatureWaypoint_marker, "f"));
        }
        __classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_internal_set_point).call(this, point);
    }
    show_on_plan() {
        if (__classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom, "f")) {
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom, "f").scrollIntoView();
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom, "f").classList.remove('mission-feature-highlight-remove');
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom, "f").classList.add('mission-feature-highlight');
            setTimeout(__classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_remove_dom_highlight).bind(this), 1000);
        }
    }
    get_wait_duration() {
        return __classPrivateFieldGet(this, _NeuronFeatureWaypoint_wait_duration, "f");
    }
    set_wait_duration(wait_duration) {
        __classPrivateFieldSet(this, _NeuronFeatureWaypoint_wait_duration, wait_duration, "f");
        if (__classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_wait, "f"))
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_wait, "f").value = __classPrivateFieldGet(this, _NeuronFeatureWaypoint_wait_duration, "f").toString();
        this._trigger_on_changed();
    }
    get_image_count() {
        return __classPrivateFieldGet(this, _NeuronFeatureWaypoint_capture_image, "f") ? 1 : 0;
    }
    get_capture_image() {
        return __classPrivateFieldGet(this, _NeuronFeatureWaypoint_capture_image, "f");
    }
    set_capture_image(capture_image) {
        __classPrivateFieldSet(this, _NeuronFeatureWaypoint_capture_image, capture_image, "f");
        if (__classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_capture, "f"))
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_capture, "f").checked = __classPrivateFieldGet(this, _NeuronFeatureWaypoint_capture_image, "f");
        this._trigger_on_changed();
    }
    show_help() {
        window.neuron_map.show_map_help(true, `${_neuron_help__WEBPACK_IMPORTED_MODULE_3__.NeuronHelp.HELP_PREFIX_MISSION}-${NeuronFeatureWaypoint.HELP_KEY}`);
    }
    remove_feature() {
        if (__classPrivateFieldGet(this, _NeuronFeatureWaypoint_marker, "f"))
            this._remove_layer_from_map(__classPrivateFieldGet(this, _NeuronFeatureWaypoint_marker, "f"));
        super.remove_feature();
    }
    get_path_coords() {
        return __classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f") ? [__classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f")] : [];
    }
    get_dom() {
        if (!__classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom, "f")) {
            __classPrivateFieldSet(this, _NeuronFeatureWaypoint_dom, this._get_dom("Waypoint"), "f");
            let c = document.createElement("div");
            c.className = 'mission-feature-content';
            const t0 = "Latitude location for the waypoint in decimal degrees";
            __classPrivateFieldSet(this, _NeuronFeatureWaypoint_dom_lat, this._create_dom_input_number(__classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f") ? __classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f").latitude : 0.0, __classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_update_latitude_from_dom).bind(this), -90, 90, 0.0002), "f");
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_lat, "f").title = t0;
            c.appendChild(this._create_dom_label("Latitude:", __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_lat, "f"), t0));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_lat, "f"));
            const t1 = "Longitude location for the waypoint in decimal degrees";
            __classPrivateFieldSet(this, _NeuronFeatureWaypoint_dom_lon, this._create_dom_input_number(__classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f") ? __classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f").longitude : 0.0, __classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_update_longitude_from_dom).bind(this), -180, 180, 0.0002), "f");
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_lon, "f").title = t1;
            c.appendChild(this._create_dom_label("Longitude:", __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_lon, "f"), t1));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_lon, "f"));
            const t2 = "Altitude for the waypoint in feet relative to take-off location ground level";
            __classPrivateFieldSet(this, _NeuronFeatureWaypoint_dom_alt, this._create_dom_input_number((__classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f") ? __classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f").altitude : 0.0) / _neuron_feature_base__WEBPACK_IMPORTED_MODULE_0__.NeuronFeatureBase._altitude_ratio, __classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_update_altitude_from_dom).bind(this)), "f");
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_alt, "f").title = t2;
            c.appendChild(this._create_dom_label("Altitude:", __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_alt, "f"), t2));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_alt, "f"));
            const t3 = "Heading for the waypoint in degrees relative to North";
            __classPrivateFieldSet(this, _NeuronFeatureWaypoint_dom_hdg, this._create_dom_input_number((__classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f") ? __classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f").heading : 0.0), __classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_update_heading_from_dom).bind(this), -180, 180), "f");
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_hdg, "f").title = t3;
            c.appendChild(this._create_dom_label("Heading:", __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_hdg, "f"), t3));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_hdg, "f"));
            const t4 = "Duration in seconds for the aircraft to hold position at the waypoint";
            __classPrivateFieldSet(this, _NeuronFeatureWaypoint_dom_wait, this._create_dom_input_number(__classPrivateFieldGet(this, _NeuronFeatureWaypoint_wait_duration, "f"), __classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_update_wait_duration_from_dom).bind(this), 0), "f");
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_wait, "f").title = t4;
            c.appendChild(this._create_dom_label("Wait:", __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_wait, "f"), t4));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_wait, "f"));
            const t5 = "Capture an image when the aircraft arrives at the waypoint";
            __classPrivateFieldSet(this, _NeuronFeatureWaypoint_dom_capture, this._create_dom_input_checkbox(__classPrivateFieldGet(this, _NeuronFeatureWaypoint_capture_image, "f"), __classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_update_capture_image_from_dom).bind(this)), "f");
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_capture, "f").title = t5;
            c.appendChild(this._create_dom_label("Capture:", __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_capture, "f"), t5));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_capture, "f"));
            const t18 = "Ground sampling distance, or ground resolution, in centimeters per pixel";
            __classPrivateFieldSet(this, _NeuronFeatureWaypoint_dom_ground_resolution, this._create_dom_input_number(__classPrivateFieldGet(this, _NeuronFeatureWaypoint_ground_resolution, "f") / NeuronFeatureWaypoint._gsd_ratio, __classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_update_ground_resolution_from_dom).bind(this), 0, null, 0.2), "f");
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_ground_resolution, "f").title = t18;
            c.appendChild(this._create_dom_label("GSD:", __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_ground_resolution, "f"), t18));
            c.appendChild(__classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_ground_resolution, "f"));
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom, "f").append(c);
        }
        return __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom, "f");
    }
    set_ground_resolution(ground_resolution) {
        __classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_set_ground_resolution).call(this, ground_resolution);
    }
    ;
    get_ground_resolution() {
        return __classPrivateFieldGet(this, _NeuronFeatureWaypoint_ground_resolution, "f");
    }
    ;
    static isObjectOfDataType(object) {
        let is_valid = (object.type == NeuronFeatureWaypoint.TYPE) &&
            (object.version == NeuronFeatureWaypoint.VERSION);
        return is_valid;
    }
    static from_json(j, map) {
        //XXX: Implement this per inherited feature
        if (!NeuronFeatureWaypoint.isObjectOfDataType(j))
            throw new Error(`Invalid type check during creation of NeuronFeaturePoint`);
        const point = _neuron_interfaces__WEBPACK_IMPORTED_MODULE_1__.NeuronInterfacePoint.from_json(j.point);
        const p = new NeuronFeatureWaypoint(map, point);
        p.set_wait_duration(Number.isNaN(j.wait_duration) ? 0.0 : j.wait_duration);
        p.set_capture_image(Boolean(j.capture_image));
        p.set_ground_resolution(Number.isNaN(j.ground_resolution) ? 0.0 : j.ground_resolution); //Also triggers update of calculations
        return p;
    }
    to_json() {
        //XXX: Implement this per inherited feature
        return {
            version: NeuronFeatureWaypoint.VERSION,
            type: NeuronFeatureWaypoint.TYPE,
            point: __classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f").to_json(),
            wait_duration: __classPrivateFieldGet(this, _NeuronFeatureWaypoint_wait_duration, "f"),
            capture_image: __classPrivateFieldGet(this, _NeuronFeatureWaypoint_capture_image, "f"),
            ground_resolution: __classPrivateFieldGet(this, _NeuronFeatureWaypoint_ground_resolution, "f"),
        };
    }
}
_NeuronFeatureWaypoint_marker = new WeakMap(), _NeuronFeatureWaypoint_point = new WeakMap(), _NeuronFeatureWaypoint_dom = new WeakMap(), _NeuronFeatureWaypoint_dom_lat = new WeakMap(), _NeuronFeatureWaypoint_dom_lon = new WeakMap(), _NeuronFeatureWaypoint_dom_alt = new WeakMap(), _NeuronFeatureWaypoint_dom_hdg = new WeakMap(), _NeuronFeatureWaypoint_dom_wait = new WeakMap(), _NeuronFeatureWaypoint_dom_capture = new WeakMap(), _NeuronFeatureWaypoint_dom_ground_resolution = new WeakMap(), _NeuronFeatureWaypoint_wait_duration = new WeakMap(), _NeuronFeatureWaypoint_capture_image = new WeakMap(), _NeuronFeatureWaypoint_ground_resolution = new WeakMap(), _NeuronFeatureWaypoint_unsub_option_cb = new WeakMap(), _NeuronFeatureWaypoint_instances = new WeakSet(), _NeuronFeatureWaypoint_options_changed = function _NeuronFeatureWaypoint_options_changed() {
    //Give preference to update altitude from current ground resolution if we're capturing an image
    if (__classPrivateFieldGet(this, _NeuronFeatureWaypoint_capture_image, "f")) {
        this.set_ground_resolution(__classPrivateFieldGet(this, _NeuronFeatureWaypoint_ground_resolution, "f"));
    }
    else {
        __classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_internal_set_point).call(this, __classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f"), false, false, true); //Only use this to trigger calcs, don't update other marker details
    }
}, _NeuronFeatureWaypoint_remove_point_by_event = function _NeuronFeatureWaypoint_remove_point_by_event(event) {
    this.remove_point_by_context(event.target);
}, _NeuronFeatureWaypoint_update_position_from_event = function _NeuronFeatureWaypoint_update_position_from_event(event) {
    let point = _neuron_interfaces__WEBPACK_IMPORTED_MODULE_1__.NeuronInterfacePoint.from_leaflet(event.target.getLatLng());
    if (__classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f"))
        point.altitude = __classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f").altitude;
    __classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_internal_set_point).call(this, point);
}, _NeuronFeatureWaypoint_remove_dom_highlight = function _NeuronFeatureWaypoint_remove_dom_highlight() {
    if (__classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom, "f")) {
        __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom, "f").classList.remove('mission-feature-highlight');
        __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom, "f").classList.add('mission-feature-highlight-remove');
    }
}, _NeuronFeatureWaypoint_internal_set_point = function _NeuronFeatureWaypoint_internal_set_point(point, update_marker = true, update_dom = true, update_calcs = true) {
    __classPrivateFieldSet(this, _NeuronFeatureWaypoint_point, point, "f");
    if (update_marker && __classPrivateFieldGet(this, _NeuronFeatureWaypoint_marker, "f"))
        __classPrivateFieldGet(this, _NeuronFeatureWaypoint_marker, "f").setLatLng(point.to_leaflet());
    if (update_dom) {
        if (__classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_lat, "f"))
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_lat, "f").value = point.latitude.toString();
        if (__classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_lon, "f"))
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_lon, "f").value = point.longitude.toString();
        if (__classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_alt, "f"))
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_alt, "f").value = (point.altitude / _neuron_feature_base__WEBPACK_IMPORTED_MODULE_0__.NeuronFeatureBase._altitude_ratio).toString();
        if (__classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_hdg, "f"))
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_hdg, "f").value = point.heading.toString();
    }
    if (update_calcs) {
        let resolution = _neuron_options__WEBPACK_IMPORTED_MODULE_4__.NeuronOptions.get_camera().get_ground_resolution(__classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f").altitude);
        if (resolution) {
            if (__classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_ground_resolution, "f"))
                __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_ground_resolution, "f").value = (resolution / NeuronFeatureWaypoint._gsd_ratio).toString();
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_set_ground_resolution).call(this, resolution, false, false);
        }
    }
    this._trigger_on_changed();
}, _NeuronFeatureWaypoint_update_latitude_from_dom = function _NeuronFeatureWaypoint_update_latitude_from_dom() {
    if (__classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f") && __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_lat, "f"))
        __classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f").latitude = __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_lat, "f").valueAsNumber;
    __classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_internal_set_point).call(this, __classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f"), true, false, true);
}, _NeuronFeatureWaypoint_update_longitude_from_dom = function _NeuronFeatureWaypoint_update_longitude_from_dom() {
    if (__classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f") && __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_lon, "f"))
        __classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f").longitude = __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_lon, "f").valueAsNumber;
    __classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_internal_set_point).call(this, __classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f"), true, false, true);
}, _NeuronFeatureWaypoint_update_altitude_from_dom = function _NeuronFeatureWaypoint_update_altitude_from_dom() {
    if (__classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f") && __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_alt, "f"))
        __classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f").altitude = __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_alt, "f").valueAsNumber * _neuron_feature_base__WEBPACK_IMPORTED_MODULE_0__.NeuronFeatureBase._altitude_ratio;
    __classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_internal_set_point).call(this, __classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f"), true, false, true);
}, _NeuronFeatureWaypoint_update_heading_from_dom = function _NeuronFeatureWaypoint_update_heading_from_dom() {
    if (__classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f") && __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_hdg, "f"))
        __classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f").heading = __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_hdg, "f").valueAsNumber;
    __classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_internal_set_point).call(this, __classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f"), true, false);
}, _NeuronFeatureWaypoint_update_wait_duration_from_dom = function _NeuronFeatureWaypoint_update_wait_duration_from_dom() {
    __classPrivateFieldSet(this, _NeuronFeatureWaypoint_wait_duration, __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_wait, "f").valueAsNumber, "f");
    this._trigger_on_changed();
}, _NeuronFeatureWaypoint_update_capture_image_from_dom = function _NeuronFeatureWaypoint_update_capture_image_from_dom() {
    __classPrivateFieldSet(this, _NeuronFeatureWaypoint_capture_image, __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_capture, "f").checked, "f");
    this._trigger_on_changed();
}, _NeuronFeatureWaypoint_update_ground_resolution_from_dom = function _NeuronFeatureWaypoint_update_ground_resolution_from_dom() {
    __classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_set_ground_resolution).call(this, __classPrivateFieldGet(this, _NeuronFeatureWaypoint_dom_ground_resolution, "f").valueAsNumber * NeuronFeatureWaypoint._gsd_ratio);
}, _NeuronFeatureWaypoint_set_ground_resolution = function _NeuronFeatureWaypoint_set_ground_resolution(ground_resolution, update_calcs = true, trigger_callbacks = true) {
    __classPrivateFieldSet(this, _NeuronFeatureWaypoint_ground_resolution, ground_resolution, "f");
    if (update_calcs) {
        let altitude = _neuron_options__WEBPACK_IMPORTED_MODULE_4__.NeuronOptions.get_camera().get_distance(this.get_ground_resolution());
        if (altitude && altitude != __classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f").altitude) {
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f").altitude = altitude;
            __classPrivateFieldGet(this, _NeuronFeatureWaypoint_instances, "m", _NeuronFeatureWaypoint_internal_set_point).call(this, __classPrivateFieldGet(this, _NeuronFeatureWaypoint_point, "f"), true, true, false);
        }
    }
    if (trigger_callbacks)
        this._trigger_on_changed();
};
NeuronFeatureWaypoint.NAME = "Waypoint";
NeuronFeatureWaypoint.TYPE = "NeuronFeatureWaypoint";
NeuronFeatureWaypoint.VERSION = '1066fce0-dd80-11ec-b085-f96e36263ede';
NeuronFeatureWaypoint.HELP_KEY = 'waypoint';
NeuronFeatureWaypoint._gsd_ratio = 0.01; //GSD = [DOM Value] * Ratio


/***/ }),

/***/ "./src/js/neuron_help.ts":
/*!*******************************!*\
  !*** ./src/js/neuron_help.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeuronHelp": () => (/* binding */ NeuronHelp)
/* harmony export */ });
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NeuronHelp_instances, _NeuronHelp_help_element_name, _NeuronHelp_help_element_ignore_subs, _NeuronHelp_controller, _NeuronHelp_add_hover, _NeuronHelp_remove_hover, _NeuronHelp_configure_linked_element_callbacks;
class NeuronHelp {
    constructor(help_element_name, ignore_sub_keys = []) {
        _NeuronHelp_instances.add(this);
        _NeuronHelp_help_element_name.set(this, void 0);
        _NeuronHelp_help_element_ignore_subs.set(this, void 0);
        _NeuronHelp_controller.set(this, void 0);
        __classPrivateFieldSet(this, _NeuronHelp_help_element_name, help_element_name, "f");
        __classPrivateFieldSet(this, _NeuronHelp_controller, new AbortController(), "f");
        __classPrivateFieldSet(this, _NeuronHelp_help_element_ignore_subs, ignore_sub_keys, "f");
    }
    stop() {
        // this.#undo_listeners();
        __classPrivateFieldGet(this, _NeuronHelp_controller, "f").abort();
    }
    reset() {
        this.stop();
        //Go through all the elements we can find and add in our hover callbacks
        const section_elements = Array.from(document.querySelectorAll("section"));
        //Filter to any elements that have out key plus some extra stuff that could be the ID we need
        let help_elements = section_elements.filter(x => x.id.includes(__classPrivateFieldGet(this, _NeuronHelp_help_element_name, "f")) && (x.id.length > __classPrivateFieldGet(this, _NeuronHelp_help_element_name, "f").length));
        //Iteratively filter to remove any unwanted sub-IDs
        for (const i of __classPrivateFieldGet(this, _NeuronHelp_help_element_ignore_subs, "f"))
            help_elements = help_elements.filter(x => !x.id.includes(`${__classPrivateFieldGet(this, _NeuronHelp_help_element_name, "f")}-${i}-`));
        //Add the hover function to remaining elements
        for (let e of help_elements)
            __classPrivateFieldGet(this, _NeuronHelp_instances, "m", _NeuronHelp_configure_linked_element_callbacks).call(this, e);
    }
}
_NeuronHelp_help_element_name = new WeakMap(), _NeuronHelp_help_element_ignore_subs = new WeakMap(), _NeuronHelp_controller = new WeakMap(), _NeuronHelp_instances = new WeakSet(), _NeuronHelp_add_hover = function _NeuronHelp_add_hover(trigger_element, target_element) {
    // console.log('mouse entered');
    target_element.classList.add(NeuronHelp.class_highlight);
}, _NeuronHelp_remove_hover = function _NeuronHelp_remove_hover(trigger_element, target_element) {
    target_element.classList.remove(NeuronHelp.class_highlight);
    // console.log('mouse exit');
}, _NeuronHelp_configure_linked_element_callbacks = function _NeuronHelp_configure_linked_element_callbacks(trigger_element) {
    if (trigger_element.id) {
        const target_element_ids = trigger_element.id.split(__classPrivateFieldGet(this, _NeuronHelp_help_element_name, "f") + '-');
        const target_element_id = target_element_ids.length > 1 ? target_element_ids[1] : null;
        let target_element = target_element_id ? document.getElementById(target_element_id) : null;
        if (target_element) {
            // console.log(`Adding help hover display for ${trigger_element.id} -> ${target_element_id}`)
            trigger_element.addEventListener(NeuronHelp.key_hover_start, __classPrivateFieldGet(this, _NeuronHelp_instances, "m", _NeuronHelp_add_hover).bind(this, trigger_element, target_element));
            trigger_element.addEventListener(NeuronHelp.key_hover_end, __classPrivateFieldGet(this, _NeuronHelp_instances, "m", _NeuronHelp_remove_hover).bind(this, trigger_element, target_element));
        }
        else {
            throw new Error("Unable to identify target element with ID: " + target_element_id);
        }
    }
    else {
        throw new Error("Unable to link element without ID!");
    }
};
NeuronHelp.HELP_PREFIX_MISSION = 'help-fp-mission';
NeuronHelp.key_hover_start = "mouseenter";
NeuronHelp.key_hover_end = "mouseleave";
NeuronHelp.class_highlight = "help-highlight";


/***/ }),

/***/ "./src/js/neuron_interfaces.ts":
/*!*************************************!*\
  !*** ./src/js/neuron_interfaces.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeuronCameraSpecifications": () => (/* binding */ NeuronCameraSpecifications),
/* harmony export */   "NeuronInterfacePoint": () => (/* binding */ NeuronInterfacePoint)
/* harmony export */ });
/* harmony import */ var _interface_leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface_leaflet */ "./src/js/interface_leaflet.ts");
/* harmony import */ var _neuron_tools_survey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neuron_tools_survey */ "./src/js/neuron_tools_survey.ts");
/* harmony import */ var _interface_proj4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface_proj4 */ "./src/js/interface_proj4.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NeuronInterfacePoint_instances, _NeuronInterfacePoint_value_as_DMS;



class NeuronInterfacePoint {
    constructor(latitude = 0.0, longitude = 0.0, altitude = 0.0, heading = 0.0, tag = "") {
        _NeuronInterfacePoint_instances.add(this);
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
        this.heading = heading;
        this.tag = tag;
    }
    static projection_code() {
        return 'WGS84';
    }
    equals(other) {
        return this.latitude == other.latitude &&
            this.longitude == other.longitude &&
            this.altitude == other.altitude &&
            this.heading == other.heading;
    }
    to_leaflet() {
        return _interface_leaflet__WEBPACK_IMPORTED_MODULE_0__.L.latLng([this.latitude, this.longitude]);
    }
    static from_leaflet(latlng) {
        return new NeuronInterfacePoint(latlng.lat, latlng.lng);
    }
    to_UTM(zone = null) {
        return _interface_proj4__WEBPACK_IMPORTED_MODULE_2__.UTMPos.from_NeuronInterfacePoint(this, zone);
    }
    static from_UTM(utm) {
        return utm.to_NeuronInterfacePoint();
    }
    static from_UTMs(positions) {
        return positions.map(p => p.to_NeuronInterfacePoint());
    }
    static isObjectOfDataType(object) {
        let is_valid = Number.isFinite(object.latitude) &&
            Number.isFinite(object.longitude) &&
            Number.isFinite(object.altitude) &&
            ((object.tag !== undefined) || (object.tag !== null));
        return is_valid;
    }
    static from_json(j) {
        if (!NeuronInterfacePoint.isObjectOfDataType(j))
            throw new Error(`Invalid type check during creation of NeuronInterfacePoint`);
        return new NeuronInterfacePoint(Number.isNaN(j.latitude) ? 0.0 : j.latitude, Number.isNaN(j.longitude) ? 0.0 : j.longitude, Number.isNaN(j.altitude) ? 0.0 : j.altitude, Number.isNaN(j.heading) ? 0.0 : j.heading, j.tag ? j.tag.toString() : "");
    }
    to_json() {
        return {
            latitude: this.latitude,
            longitude: this.longitude,
            altitude: this.altitude,
            heading: this.heading,
            tag: this.tag,
        };
    }
    toString(use_imperial = true, use_decimal = false) {
        return `[${this.toStringLatitude(use_decimal)}, ${this.toStringLatitude(use_decimal)}, ${this.toStringAltitude(use_imperial)}]`;
    }
    toStringLatitude(use_decimal = false) {
        return use_decimal ? this.latitude.toFixed(8) + '°' : __classPrivateFieldGet(this, _NeuronInterfacePoint_instances, "m", _NeuronInterfacePoint_value_as_DMS).call(this, this.latitude, false);
    }
    toStringLongitude(use_decimal = false) {
        return use_decimal ? this.longitude.toFixed(8) + '°' : __classPrivateFieldGet(this, _NeuronInterfacePoint_instances, "m", _NeuronInterfacePoint_value_as_DMS).call(this, this.longitude, true);
    }
    toStringAltitude(use_imperial = true) {
        return use_imperial ? (this.altitude / NeuronInterfacePoint._altitude_ratio).toFixed(2) + "'" : this.altitude.toFixed(2) + 'm';
    }
}
_NeuronInterfacePoint_instances = new WeakSet(), _NeuronInterfacePoint_value_as_DMS = function _NeuronInterfacePoint_value_as_DMS(dd, is_lng) {
    const dir = dd < 0 ? (is_lng ? "W" : "S") : is_lng ? "E" : "N";
    const deg = 0 | (dd < 0 ? (dd = -dd) : dd);
    const min = 0 | (((dd += 1e-9) % 1) * 60);
    const sec = (0 | (((dd * 60) % 1) * 6000)) / 100;
    return `${deg.toFixed(0)}° ${min.toFixed(0)}' ${sec.toFixed(2)}" ${dir}`;
};
NeuronInterfacePoint._altitude_ratio = 0.3048;
class NeuronCameraSpecifications {
    constructor(name = "Custom", focal_length = 0.0, sensor_width = 0.0, sensor_height = 0.0, image_width = 0, image_height = 0) {
        this.name = name;
        this.focal_length = focal_length;
        this.sensor_width = sensor_width;
        this.sensor_height = sensor_height;
        this.image_width = image_width;
        this.image_height = image_height;
    }
    copy() {
        return new NeuronCameraSpecifications(this.name, this.focal_length, this.sensor_width, this.sensor_height, this.image_width, this.image_height);
    }
    equals(other) {
        return (this.name == other.name) &&
            (this.focal_length == other.focal_length) &&
            (this.sensor_width == other.sensor_width) &&
            (this.sensor_height == other.sensor_height) &&
            (this.image_width == other.image_width) &&
            (this.image_height == other.image_height);
    }
    is_valid() {
        return (this.focal_length > 0) &&
            (this.sensor_width > 0) &&
            (this.sensor_height > 0) &&
            (this.image_width > 0) &&
            (this.image_height > 0);
    }
    get_ground_resolution(distance) {
        let res = null;
        if (this.is_valid() && distance > 0) {
            //XXX: Assume square pixels
            const projection = this.get_projected_size(distance);
            if (projection) {
                res = projection.Width() / this.image_width;
            }
        }
        return res;
    }
    get_distance(ground_resolution) {
        let res = null;
        if (this.is_valid() && ground_resolution > 0) {
            //XXX: Assume square pixels
            const ground_span = this.image_width * ground_resolution;
            const fov2_w = Math.atan2(this.sensor_width, 2 * this.focal_length);
            //Calculate from half the ground span for half the AoV
            res = (ground_span / 2) / Math.tan(fov2_w);
        }
        return res;
    }
    get_projection(distance) {
        let proj = null;
        if (this.is_valid() && distance > 0) {
            //Calculate the half field of views
            const fov2_h = Math.atan2(this.sensor_height, 2 * this.focal_length);
            const fov2_w = Math.atan2(this.sensor_width, 2 * this.focal_length);
            //Calculate the half distances
            const h2 = Math.tan(fov2_h) * distance;
            const w2 = Math.tan(fov2_w) * distance;
            proj = new _neuron_tools_survey__WEBPACK_IMPORTED_MODULE_1__.Rect(-w2, -h2, 2 * w2, 2 * h2);
        }
        return proj;
    }
    get_projected_size(distance) {
        let proj = null;
        if (this.is_valid() && distance > 0) {
            //Calculate the half field of views
            const fov2_h = Math.atan2(this.sensor_height, 2 * this.focal_length);
            const fov2_w = Math.atan2(this.sensor_width, 2 * this.focal_length);
            //Calculate the half distances
            const h2 = Math.tan(fov2_h) * distance;
            const w2 = Math.tan(fov2_w) * distance;
            proj = new _neuron_tools_survey__WEBPACK_IMPORTED_MODULE_1__.Rect(-w2, -h2, 2 * w2, 2 * h2);
        }
        return proj;
    }
    static isObjectOfDataType(object) {
        let is_valid = (object.type == NeuronCameraSpecifications.TYPE) &&
            (object.version == NeuronCameraSpecifications.VERSION);
        return is_valid;
    }
    static from_json(j) {
        //XXX: Implement this per inherited feature
        if (!NeuronCameraSpecifications.isObjectOfDataType(j))
            throw new Error(`Invalid type check during creation of NeuronCameraSpecifications`);
        return new NeuronCameraSpecifications(j.name, j.focal_length, j.sensor_width, j.sensor_height, j.image_width, j.image_height);
    }
    to_json() {
        return {
            version: NeuronCameraSpecifications.VERSION,
            type: NeuronCameraSpecifications.TYPE,
            name: this.name,
            focal_length: this.focal_length,
            sensor_width: this.sensor_width,
            sensor_height: this.sensor_height,
            image_width: this.image_width,
            image_height: this.image_height,
        };
    }
}
NeuronCameraSpecifications.TYPE = "NeuronCameraSpecifications";
NeuronCameraSpecifications.VERSION = 'c5a01d00-d4fa-11ec-95ac-1b0aaa4d0e1e';


/***/ }),

/***/ "./src/js/neuron_map.ts":
/*!******************************!*\
  !*** ./src/js/neuron_map.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeuronMap": () => (/* binding */ NeuronMap)
/* harmony export */ });
/* harmony import */ var _neuron_feature_waypoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neuron_feature_waypoint */ "./src/js/neuron_feature_waypoint.ts");
/* harmony import */ var _neuron_feature_polygon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neuron_feature_polygon */ "./src/js/neuron_feature_polygon.ts");
/* harmony import */ var _neuron_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./neuron_interfaces */ "./src/js/neuron_interfaces.ts");
/* harmony import */ var _interface_leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface_leaflet */ "./src/js/interface_leaflet.ts");
/* harmony import */ var _neuron_feature_survey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./neuron_feature_survey */ "./src/js/neuron_feature_survey.ts");
/* harmony import */ var _neuron_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./neuron_options */ "./src/js/neuron_options.ts");
/* harmony import */ var _neuron_feature_point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./neuron_feature_point */ "./src/js/neuron_feature_point.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NeuronMap_instances, _NeuronMap_planner, _NeuronMap_map, _NeuronMap_map_layer_control, _NeuronMap_map_zoom_control, _NeuronMap_path, _NeuronMap_map_element_name, _NeuronMap_help_element_name, _NeuronMap_map_element, _NeuronMap_help_element, _NeuronMap_map_layers, _NeuronMap_unsub_option_cb, _NeuronMap_get_poly_bounds_from_view;







class NeuronMap {
    constructor(map_element_name, help_element_name, planner) {
        _NeuronMap_instances.add(this);
        _NeuronMap_planner.set(this, void 0);
        _NeuronMap_map.set(this, void 0);
        _NeuronMap_map_layer_control.set(this, void 0);
        _NeuronMap_map_zoom_control.set(this, void 0);
        _NeuronMap_path.set(this, void 0);
        _NeuronMap_map_element_name.set(this, void 0);
        _NeuronMap_help_element_name.set(this, void 0);
        _NeuronMap_map_element.set(this, void 0);
        _NeuronMap_help_element.set(this, void 0);
        _NeuronMap_map_layers.set(this, void 0);
        _NeuronMap_unsub_option_cb.set(this, void 0);
        __classPrivateFieldSet(this, _NeuronMap_planner, planner, "f");
        __classPrivateFieldSet(this, _NeuronMap_map, null, "f");
        __classPrivateFieldSet(this, _NeuronMap_map_layer_control, null, "f");
        __classPrivateFieldSet(this, _NeuronMap_map_zoom_control, null, "f");
        __classPrivateFieldSet(this, _NeuronMap_map_layers, null, "f");
        __classPrivateFieldSet(this, _NeuronMap_map_element, null, "f");
        __classPrivateFieldSet(this, _NeuronMap_help_element, null, "f");
        __classPrivateFieldSet(this, _NeuronMap_map_element_name, map_element_name, "f");
        __classPrivateFieldSet(this, _NeuronMap_help_element_name, help_element_name, "f");
        __classPrivateFieldGet(this, _NeuronMap_planner, "f").on_mission_change(this.update_path.bind(this));
        this.set_options_subscriber();
    }
    set_options_subscriber() {
        if (__classPrivateFieldGet(this, _NeuronMap_unsub_option_cb, "f"))
            __classPrivateFieldGet(this, _NeuronMap_unsub_option_cb, "f").call(this);
        __classPrivateFieldSet(this, _NeuronMap_unsub_option_cb, _neuron_options__WEBPACK_IMPORTED_MODULE_5__.NeuronOptions.add_callback(this.update_path.bind(this)), "f");
    }
    show_map_help(show, help_key = '') {
        var _a;
        if (show) {
            __classPrivateFieldGet(this, _NeuronMap_map_element, "f").style.display = 'none';
            __classPrivateFieldGet(this, _NeuronMap_help_element, "f").style.display = 'block';
            if (help_key)
                (_a = document.getElementById(help_key)) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
        }
        else {
            __classPrivateFieldGet(this, _NeuronMap_map_element, "f").style.display = 'block';
            __classPrivateFieldGet(this, _NeuronMap_help_element, "f").style.display = 'none';
            this.reset();
        }
    }
    toggle_map_help() {
        this.show_map_help(__classPrivateFieldGet(this, _NeuronMap_map_element, "f").style.display != 'none');
    }
    get_leaflet_map() {
        return __classPrivateFieldGet(this, _NeuronMap_map, "f");
    }
    set_location(location, zoom = 13) {
        if (__classPrivateFieldGet(this, _NeuronMap_map, "f")) {
            __classPrivateFieldGet(this, _NeuronMap_map, "f").setView(location.to_leaflet(), zoom);
        }
    }
    zoom_to(feature_group) {
        if (__classPrivateFieldGet(this, _NeuronMap_map, "f")) {
            __classPrivateFieldGet(this, _NeuronMap_map, "f").fitBounds(feature_group.getBounds());
        }
    }
    add_feature(feature) {
        if (__classPrivateFieldGet(this, _NeuronMap_map, "f")) {
            feature.addTo(__classPrivateFieldGet(this, _NeuronMap_map, "f"));
        }
    }
    add_features(features) {
        for (const f of features)
            this.add_feature(f);
    }
    on_double_click(event) {
        //Click modifier handlers
        //CTRL+Click: Add new waypoint
        // if(event.originalEvent.ctrlKey) {
        //...
        // } else {
        const l = _neuron_interfaces__WEBPACK_IMPORTED_MODULE_2__.NeuronInterfacePoint.from_leaflet(event.latlng);
        l.altitude = __classPrivateFieldGet(this, _NeuronMap_planner, "f").get_last_item_altitude();
        const p = new _neuron_feature_waypoint__WEBPACK_IMPORTED_MODULE_0__.NeuronFeatureWaypoint(__classPrivateFieldGet(this, _NeuronMap_map, "f"), l);
        __classPrivateFieldGet(this, _NeuronMap_planner, "f").add_mission_item(p);
        // }
    }
    create_point_in_view() {
        if (__classPrivateFieldGet(this, _NeuronMap_map, "f")) {
            const b = __classPrivateFieldGet(this, _NeuronMap_map, "f").getBounds();
            const ne = b.getNorthEast();
            const sw = b.getSouthWest();
            const dx = ne.lng - sw.lng;
            const dy = ne.lat - sw.lat;
            const p = new _neuron_feature_point__WEBPACK_IMPORTED_MODULE_6__.NeuronFeaturePoint(__classPrivateFieldGet(this, _NeuronMap_map, "f"), new _neuron_interfaces__WEBPACK_IMPORTED_MODULE_2__.NeuronInterfacePoint(sw.lat + dy / 2, sw.lng + dx / 2, __classPrivateFieldGet(this, _NeuronMap_planner, "f").get_last_item_altitude()));
            p.set_planner(__classPrivateFieldGet(this, _NeuronMap_planner, "f"));
            __classPrivateFieldGet(this, _NeuronMap_planner, "f").add_mission_item(p);
        }
    }
    create_waypoint_in_view() {
        if (__classPrivateFieldGet(this, _NeuronMap_map, "f")) {
            const b = __classPrivateFieldGet(this, _NeuronMap_map, "f").getBounds();
            const ne = b.getNorthEast();
            const sw = b.getSouthWest();
            const dx = ne.lng - sw.lng;
            const dy = ne.lat - sw.lat;
            const p = new _neuron_feature_waypoint__WEBPACK_IMPORTED_MODULE_0__.NeuronFeatureWaypoint(__classPrivateFieldGet(this, _NeuronMap_map, "f"), new _neuron_interfaces__WEBPACK_IMPORTED_MODULE_2__.NeuronInterfacePoint(sw.lat + dy / 2, sw.lng + dx / 2, __classPrivateFieldGet(this, _NeuronMap_planner, "f").get_last_item_altitude()));
            __classPrivateFieldGet(this, _NeuronMap_planner, "f").add_mission_item(p);
        }
    }
    create_polygon_in_view() {
        const bounds = __classPrivateFieldGet(this, _NeuronMap_instances, "m", _NeuronMap_get_poly_bounds_from_view).call(this);
        if (__classPrivateFieldGet(this, _NeuronMap_map, "f") && bounds.length) {
            const p = new _neuron_feature_polygon__WEBPACK_IMPORTED_MODULE_1__.NeuronFeaturePolygon(__classPrivateFieldGet(this, _NeuronMap_map, "f"), bounds);
            p.set_planner(__classPrivateFieldGet(this, _NeuronMap_planner, "f"));
            __classPrivateFieldGet(this, _NeuronMap_planner, "f").add_mission_item(p);
        }
    }
    create_survey_in_view() {
        const bounds = __classPrivateFieldGet(this, _NeuronMap_instances, "m", _NeuronMap_get_poly_bounds_from_view).call(this);
        if (__classPrivateFieldGet(this, _NeuronMap_map, "f") && bounds.length) {
            const p = new _neuron_feature_survey__WEBPACK_IMPORTED_MODULE_4__.NeuronFeatureSurvey(__classPrivateFieldGet(this, _NeuronMap_map, "f"), bounds);
            p.set_altitude(__classPrivateFieldGet(this, _NeuronMap_planner, "f").get_last_item_altitude());
            __classPrivateFieldGet(this, _NeuronMap_planner, "f").add_mission_item(p);
        }
    }
    update_path() {
        if (__classPrivateFieldGet(this, _NeuronMap_path, "f")) {
            const show = _neuron_options__WEBPACK_IMPORTED_MODULE_5__.NeuronOptions.get_option_boolean(_neuron_options__WEBPACK_IMPORTED_MODULE_5__.NeuronOptionsBoolean.SHOW_PATH);
            const path_points = show ? __classPrivateFieldGet(this, _NeuronMap_planner, "f").get_mission_as_points().map(x => x.to_leaflet()) : [];
            __classPrivateFieldGet(this, _NeuronMap_path, "f").setLatLngs(path_points);
        }
    }
    toggle_map_tools(show) {
        if (__classPrivateFieldGet(this, _NeuronMap_map, "f")) {
            if (!__classPrivateFieldGet(this, _NeuronMap_map_zoom_control, "f")) {
                __classPrivateFieldGet(this, _NeuronMap_map, "f").zoomControl;
            }
            if (!show && __classPrivateFieldGet(this, _NeuronMap_map_zoom_control, "f")) {
                __classPrivateFieldGet(this, _NeuronMap_map_zoom_control, "f").remove();
                __classPrivateFieldSet(this, _NeuronMap_map_zoom_control, null, "f");
            }
            else if (!__classPrivateFieldGet(this, _NeuronMap_map_zoom_control, "f")) {
                __classPrivateFieldSet(this, _NeuronMap_map_zoom_control, _interface_leaflet__WEBPACK_IMPORTED_MODULE_3__.L.control.zoom(), "f");
                __classPrivateFieldGet(this, _NeuronMap_map_zoom_control, "f").addTo(__classPrivateFieldGet(this, _NeuronMap_map, "f"));
            }
            if (!show && __classPrivateFieldGet(this, _NeuronMap_map_layer_control, "f")) {
                __classPrivateFieldGet(this, _NeuronMap_map_layer_control, "f").remove();
                __classPrivateFieldSet(this, _NeuronMap_map_layer_control, null, "f");
            }
            else if (!__classPrivateFieldGet(this, _NeuronMap_map_layer_control, "f")) {
                __classPrivateFieldSet(this, _NeuronMap_map_layer_control, _interface_leaflet__WEBPACK_IMPORTED_MODULE_3__.L.control.layers(__classPrivateFieldGet(this, _NeuronMap_map_layers, "f")), "f"); //, otherLayers...
                __classPrivateFieldGet(this, _NeuronMap_map_layer_control, "f").addTo(__classPrivateFieldGet(this, _NeuronMap_map, "f"));
            }
        }
    }
    reset() {
        __classPrivateFieldSet(this, _NeuronMap_map_element, document.getElementById(__classPrivateFieldGet(this, _NeuronMap_map_element_name, "f")), "f");
        __classPrivateFieldSet(this, _NeuronMap_help_element, document.getElementById(__classPrivateFieldGet(this, _NeuronMap_help_element_name, "f")), "f");
        if (!__classPrivateFieldGet(this, _NeuronMap_map, "f")) {
            const tiles_grey = _interface_leaflet__WEBPACK_IMPORTED_MODULE_3__.L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'pk.eyJ1Ijoia3llbW9ydG9uIiwiYSI6ImNsMzJneXAybDAzcWwzY3BhNjB4OHJqMnoifQ.fue3o8Y3wWH4y_Wi50oUXw'
            });
            const tiles_satellite = _interface_leaflet__WEBPACK_IMPORTED_MODULE_3__.L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/satellite-v9',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'pk.eyJ1Ijoia3llbW9ydG9uIiwiYSI6ImNsMzJneXAybDAzcWwzY3BhNjB4OHJqMnoifQ.fue3o8Y3wWH4y_Wi50oUXw'
            });
            __classPrivateFieldSet(this, _NeuronMap_map_layers, {
                Street: tiles_grey,
                Satellite: tiles_satellite
            }, "f");
            __classPrivateFieldSet(this, _NeuronMap_map, _interface_leaflet__WEBPACK_IMPORTED_MODULE_3__.L.map(__classPrivateFieldGet(this, _NeuronMap_map_element_name, "f"), {
                doubleClickZoom: false,
                layers: [
                    tiles_grey,
                    tiles_satellite
                ],
                zoomControl: false
            }), "f");
            this.toggle_map_tools(true);
            __classPrivateFieldGet(this, _NeuronMap_map, "f").on("dblclick", this.on_double_click.bind(this));
            //Set an initial zoom
            this.set_location(new _neuron_interfaces__WEBPACK_IMPORTED_MODULE_2__.NeuronInterfacePoint(-27.4771033, 153.0301422), 11);
        }
        else {
            //Already have a map, so just force a re-render
            __classPrivateFieldGet(this, _NeuronMap_map, "f").invalidateSize();
        }
        if (!__classPrivateFieldGet(this, _NeuronMap_path, "f")) {
            __classPrivateFieldSet(this, _NeuronMap_path, _interface_leaflet__WEBPACK_IMPORTED_MODULE_3__.L.polyline([], { color: 'orange' }).addTo(__classPrivateFieldGet(this, _NeuronMap_map, "f")), "f");
        }
    }
}
_NeuronMap_planner = new WeakMap(), _NeuronMap_map = new WeakMap(), _NeuronMap_map_layer_control = new WeakMap(), _NeuronMap_map_zoom_control = new WeakMap(), _NeuronMap_path = new WeakMap(), _NeuronMap_map_element_name = new WeakMap(), _NeuronMap_help_element_name = new WeakMap(), _NeuronMap_map_element = new WeakMap(), _NeuronMap_help_element = new WeakMap(), _NeuronMap_map_layers = new WeakMap(), _NeuronMap_unsub_option_cb = new WeakMap(), _NeuronMap_instances = new WeakSet(), _NeuronMap_get_poly_bounds_from_view = function _NeuronMap_get_poly_bounds_from_view() {
    let bounds = [];
    if (__classPrivateFieldGet(this, _NeuronMap_map, "f")) {
        const b = __classPrivateFieldGet(this, _NeuronMap_map, "f").getBounds();
        const ne = b.getNorthEast();
        const sw = b.getSouthWest();
        const dx = ne.lng - sw.lng;
        const dy = ne.lat - sw.lat;
        bounds = [
            new _neuron_interfaces__WEBPACK_IMPORTED_MODULE_2__.NeuronInterfacePoint(sw.lat + dy / 4, sw.lng + dx / 4),
            new _neuron_interfaces__WEBPACK_IMPORTED_MODULE_2__.NeuronInterfacePoint(sw.lat + 3 * dy / 4, sw.lng + dx / 4),
            new _neuron_interfaces__WEBPACK_IMPORTED_MODULE_2__.NeuronInterfacePoint(sw.lat + 3 * dy / 4, sw.lng + 3 * dx / 4),
            new _neuron_interfaces__WEBPACK_IMPORTED_MODULE_2__.NeuronInterfacePoint(sw.lat + dy / 4, sw.lng + 3 * dx / 4)
        ];
    }
    return bounds;
};


/***/ }),

/***/ "./src/js/neuron_options.ts":
/*!**********************************!*\
  !*** ./src/js/neuron_options.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeuronOptions": () => (/* binding */ NeuronOptions),
/* harmony export */   "NeuronOptionsBoolean": () => (/* binding */ NeuronOptionsBoolean),
/* harmony export */   "NeuronOptionsNumber": () => (/* binding */ NeuronOptionsNumber),
/* harmony export */   "NeuronOptionsString": () => (/* binding */ NeuronOptionsString)
/* harmony export */ });
/* harmony import */ var _neuron_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neuron_interfaces */ "./src/js/neuron_interfaces.ts");
/* harmony import */ var _neuron_tools_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neuron_tools_common */ "./src/js/neuron_tools_common.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _NeuronOptions_stat_options_boolean, _NeuronOptions_stat_options_number, _NeuronOptions_stat_options_string, _NeuronOptions_dom_callback, _NeuronOptions_general_callbacks, _NeuronOptions_remove_callback, _NeuronOptions_handle_callbacks;


//XXX: Keep in sync with NeuronStatistics NeuronOptionsData
var NeuronOptionsBoolean;
(function (NeuronOptionsBoolean) {
    NeuronOptionsBoolean[NeuronOptionsBoolean["SHOW_PATH"] = 0] = "SHOW_PATH";
})(NeuronOptionsBoolean || (NeuronOptionsBoolean = {}));
//XXX: Keep in sync with NeuronStatistics NeuronOptionsData
var NeuronOptionsNumber;
(function (NeuronOptionsNumber) {
    NeuronOptionsNumber[NeuronOptionsNumber["MISSION_SPEED"] = 0] = "MISSION_SPEED";
    NeuronOptionsNumber[NeuronOptionsNumber["CAMERA_FOCAL_LENGTH"] = 1] = "CAMERA_FOCAL_LENGTH";
    NeuronOptionsNumber[NeuronOptionsNumber["CAMERA_IMAGE_WIDTH"] = 2] = "CAMERA_IMAGE_WIDTH";
    NeuronOptionsNumber[NeuronOptionsNumber["CAMERA_IMAGE_HEIGHT"] = 3] = "CAMERA_IMAGE_HEIGHT";
    NeuronOptionsNumber[NeuronOptionsNumber["CAMERA_SENSOR_WIDTH"] = 4] = "CAMERA_SENSOR_WIDTH";
    NeuronOptionsNumber[NeuronOptionsNumber["CAMERA_SENSOR_HEIGHT"] = 5] = "CAMERA_SENSOR_HEIGHT";
})(NeuronOptionsNumber || (NeuronOptionsNumber = {}));
//XXX: Keep in sync with NeuronStatistics NeuronOptionsData
var NeuronOptionsString;
(function (NeuronOptionsString) {
    NeuronOptionsString[NeuronOptionsString["CAMERA_NAME"] = 0] = "CAMERA_NAME";
})(NeuronOptionsString || (NeuronOptionsString = {}));
class NeuronOptions {
    static init() {
        this.set_option_boolean(NeuronOptionsBoolean.SHOW_PATH, true, false, false);
        this.set_option_number(NeuronOptionsNumber.MISSION_SPEED, 5.0, false, false);
        this.set_camera(NeuronOptions.camera_preset_custom, false, false);
    }
    static set_dom_callback(callback) {
        __classPrivateFieldSet(this, _a, callback, "f", _NeuronOptions_dom_callback);
    }
    static add_callback(callback) {
        const id = (0,_neuron_tools_common__WEBPACK_IMPORTED_MODULE_1__.NeuronUID)('option');
        __classPrivateFieldGet(this, _a, "f", _NeuronOptions_general_callbacks).set(id, callback);
        return __classPrivateFieldGet(this, _a, "m", _NeuronOptions_remove_callback).bind(this, id);
    }
    static set_option_boolean(key, value, trigger_callbacks = true, trigger_dom = true) {
        __classPrivateFieldGet(this, _a, "f", _NeuronOptions_stat_options_boolean).set(key, value);
        __classPrivateFieldGet(this, _a, "m", _NeuronOptions_handle_callbacks).call(this, trigger_callbacks, trigger_dom);
    }
    static set_option_number(key, value, trigger_callbacks = true, trigger_dom = true) {
        __classPrivateFieldGet(this, _a, "f", _NeuronOptions_stat_options_number).set(key, value);
        __classPrivateFieldGet(this, _a, "m", _NeuronOptions_handle_callbacks).call(this, trigger_callbacks, trigger_dom);
    }
    static set_option_string(key, value, trigger_callbacks = true, trigger_dom = true) {
        __classPrivateFieldGet(this, _a, "f", _NeuronOptions_stat_options_string).set(key, value);
        __classPrivateFieldGet(this, _a, "m", _NeuronOptions_handle_callbacks).call(this, trigger_callbacks, trigger_dom);
    }
    static set_camera(value, trigger_callbacks = false, trigger_dom = true) {
        this.set_option_string(NeuronOptionsString.CAMERA_NAME, value.name, false, false);
        this.set_option_number(NeuronOptionsNumber.CAMERA_FOCAL_LENGTH, value.focal_length, false, false);
        this.set_option_number(NeuronOptionsNumber.CAMERA_IMAGE_WIDTH, value.image_width, false, false);
        this.set_option_number(NeuronOptionsNumber.CAMERA_IMAGE_HEIGHT, value.image_height, false, false);
        this.set_option_number(NeuronOptionsNumber.CAMERA_SENSOR_WIDTH, value.sensor_width, false, false);
        this.set_option_number(NeuronOptionsNumber.CAMERA_SENSOR_HEIGHT, value.sensor_height, false, false);
        __classPrivateFieldGet(this, _a, "m", _NeuronOptions_handle_callbacks).call(this, trigger_callbacks, trigger_dom);
    }
    ;
    static get_option_boolean(key) {
        return __classPrivateFieldGet(this, _a, "f", _NeuronOptions_stat_options_boolean).get(key);
    }
    static get_option_number(key) {
        return __classPrivateFieldGet(this, _a, "f", _NeuronOptions_stat_options_number).get(key);
    }
    static get_option_string(key) {
        return __classPrivateFieldGet(this, _a, "f", _NeuronOptions_stat_options_string).get(key);
    }
    static get_camera() {
        return new _neuron_interfaces__WEBPACK_IMPORTED_MODULE_0__.NeuronCameraSpecifications(this.get_option_string(NeuronOptionsString.CAMERA_NAME), this.get_option_number(NeuronOptionsNumber.CAMERA_FOCAL_LENGTH), this.get_option_number(NeuronOptionsNumber.CAMERA_SENSOR_WIDTH), this.get_option_number(NeuronOptionsNumber.CAMERA_SENSOR_HEIGHT), this.get_option_number(NeuronOptionsNumber.CAMERA_IMAGE_WIDTH), this.get_option_number(NeuronOptionsNumber.CAMERA_IMAGE_HEIGHT));
    }
    static as_json() {
        return {
            SHOW_PATH: this.get_option_boolean(NeuronOptionsBoolean.SHOW_PATH),
            MISSION_SPEED: this.get_option_number(NeuronOptionsNumber.MISSION_SPEED),
            CAMERA_FOCAL_LENGTH: this.get_option_number(NeuronOptionsNumber.CAMERA_FOCAL_LENGTH),
            CAMERA_SENSOR_WIDTH: this.get_option_number(NeuronOptionsNumber.CAMERA_SENSOR_WIDTH),
            CAMERA_SENSOR_HEIGHT: this.get_option_number(NeuronOptionsNumber.CAMERA_SENSOR_HEIGHT),
            CAMERA_IMAGE_WIDTH: this.get_option_number(NeuronOptionsNumber.CAMERA_IMAGE_WIDTH),
            CAMERA_IMAGE_HEIGHT: this.get_option_number(NeuronOptionsNumber.CAMERA_IMAGE_HEIGHT),
            CAMERA_NAME: this.get_option_string(NeuronOptionsString.CAMERA_NAME),
        };
    }
    static load(j) {
        this.set_option_boolean(NeuronOptionsBoolean.SHOW_PATH, Boolean(j.SHOW_PATH), false, false);
        this.set_option_number(NeuronOptionsNumber.MISSION_SPEED, Number.isNaN(j.MISSION_SPEED) ? 0 : j.MISSION_SPEED, false, false);
        this.set_option_number(NeuronOptionsNumber.CAMERA_FOCAL_LENGTH, Number.isNaN(j.CAMERA_FOCAL_LENGTH) ? 0 : j.CAMERA_FOCAL_LENGTH, false, false);
        this.set_option_number(NeuronOptionsNumber.CAMERA_IMAGE_WIDTH, Number.isNaN(j.CAMERA_IMAGE_WIDTH) ? 0 : j.CAMERA_IMAGE_WIDTH, false, false);
        this.set_option_number(NeuronOptionsNumber.CAMERA_IMAGE_HEIGHT, Number.isNaN(j.CAMERA_IMAGE_HEIGHT) ? 0 : j.CAMERA_IMAGE_HEIGHT, false, false);
        this.set_option_number(NeuronOptionsNumber.CAMERA_SENSOR_WIDTH, Number.isNaN(j.CAMERA_SENSOR_WIDTH) ? 0 : j.CAMERA_SENSOR_WIDTH, false, false);
        this.set_option_number(NeuronOptionsNumber.CAMERA_SENSOR_HEIGHT, Number.isNaN(j.CAMERA_SENSOR_HEIGHT) ? 0 : j.CAMERA_SENSOR_HEIGHT, false, false);
        this.set_option_string(NeuronOptionsString.CAMERA_NAME, j.CAMERA_NAME.toString(), false, false);
        __classPrivateFieldGet(this, _a, "m", _NeuronOptions_handle_callbacks).call(this, true, true);
    }
    ;
}
_a = NeuronOptions, _NeuronOptions_remove_callback = function _NeuronOptions_remove_callback(id) {
    if (__classPrivateFieldGet(this, _a, "f", _NeuronOptions_general_callbacks).has(id)) {
        __classPrivateFieldGet(this, _a, "f", _NeuronOptions_general_callbacks).delete(id);
    }
}, _NeuronOptions_handle_callbacks = function _NeuronOptions_handle_callbacks(trigger_callbacks, trigger_dom) {
    if (trigger_callbacks) {
        for (const cb of __classPrivateFieldGet(this, _a, "f", _NeuronOptions_general_callbacks).values())
            cb();
    }
    if (trigger_dom && __classPrivateFieldGet(this, _a, "f", _NeuronOptions_dom_callback))
        __classPrivateFieldGet(this, _a, "f", _NeuronOptions_dom_callback).call(this);
};
//XXX: Keys must be unique!
NeuronOptions.camera_preset_custom = new _neuron_interfaces__WEBPACK_IMPORTED_MODULE_0__.NeuronCameraSpecifications();
NeuronOptions.camera_presets = [
    NeuronOptions.camera_preset_custom,
    new _neuron_interfaces__WEBPACK_IMPORTED_MODULE_0__.NeuronCameraSpecifications("A6000", 20, 23.50, 15.60, 6000, 4000),
];
//XXX: Keep in sync with NeuronStatisticsOptionKeys
_NeuronOptions_stat_options_boolean = { value: new Map() };
_NeuronOptions_stat_options_number = { value: new Map() };
_NeuronOptions_stat_options_string = { value: new Map() };
_NeuronOptions_dom_callback = { value: null };
_NeuronOptions_general_callbacks = { value: new Map() };


/***/ }),

/***/ "./src/js/neuron_planner.ts":
/*!**********************************!*\
  !*** ./src/js/neuron_planner.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeuronPlanner": () => (/* binding */ NeuronPlanner)
/* harmony export */ });
/* harmony import */ var _neuron_feature_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neuron_feature_base */ "./src/js/neuron_feature_base.ts");
/* harmony import */ var _neuron_feature_waypoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neuron_feature_waypoint */ "./src/js/neuron_feature_waypoint.ts");
/* harmony import */ var _neuron_feature_polygon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./neuron_feature_polygon */ "./src/js/neuron_feature_polygon.ts");
/* harmony import */ var _neuron_feature_survey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./neuron_feature_survey */ "./src/js/neuron_feature_survey.ts");
/* harmony import */ var _neuron_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./neuron_interfaces */ "./src/js/neuron_interfaces.ts");
/* harmony import */ var _neuron_tools_kml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./neuron_tools_kml */ "./src/js/neuron_tools_kml.ts");
/* harmony import */ var _neuron_tools_files__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./neuron_tools_files */ "./src/js/neuron_tools_files.ts");
/* harmony import */ var _interface_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interface_leaflet */ "./src/js/interface_leaflet.ts");
/* harmony import */ var _neuron_feature_point__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./neuron_feature_point */ "./src/js/neuron_feature_point.ts");
/* harmony import */ var _neuron_options__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./neuron_options */ "./src/js/neuron_options.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NeuronPlanner_instances, _NeuronPlanner_map, _NeuronPlanner_plan_element, _NeuronPlanner_mission_items, _NeuronPlanner_on_change_callbacks, _NeuronPlanner_last_callback_id, _NeuronPlanner_clearing_mission, _NeuronPlanner_last_mission_altitude, _NeuronPlanner_plan_element_name, _NeuronPlanner_add_mission_features_from_json, _NeuronPlanner_add_waypoint_features_from_json, _NeuronPlanner_add_point_features_from_json, _NeuronPlanner_run_on_mission_change, _NeuronPlanner_remove_on_mission_change, _NeuronPlanner_mission_item_changed, _NeuronPlanner_array_move, _NeuronPlanner_move_mission_item, _NeuronPlanner_on_add_mission_item_updates, _NeuronPlanner_add_mission_item, _NeuronPlanner_kml_loaded;










class NeuronPlanner {
    // #unsub_option_cb:CallableFunction;
    constructor(plan_element_name, map = null) {
        _NeuronPlanner_instances.add(this);
        _NeuronPlanner_map.set(this, void 0);
        _NeuronPlanner_plan_element.set(this, void 0);
        _NeuronPlanner_mission_items.set(this, void 0);
        _NeuronPlanner_on_change_callbacks.set(this, void 0);
        _NeuronPlanner_last_callback_id.set(this, void 0);
        _NeuronPlanner_clearing_mission.set(this, void 0);
        _NeuronPlanner_last_mission_altitude.set(this, void 0);
        _NeuronPlanner_plan_element_name.set(this, void 0);
        __classPrivateFieldSet(this, _NeuronPlanner_map, map, "f");
        __classPrivateFieldSet(this, _NeuronPlanner_plan_element, null, "f");
        __classPrivateFieldSet(this, _NeuronPlanner_plan_element_name, plan_element_name, "f");
        __classPrivateFieldSet(this, _NeuronPlanner_mission_items, [], "f");
        __classPrivateFieldSet(this, _NeuronPlanner_on_change_callbacks, new Map(), "f");
        __classPrivateFieldSet(this, _NeuronPlanner_last_callback_id, 0, "f");
        __classPrivateFieldSet(this, _NeuronPlanner_last_mission_altitude, 0.0, "f");
        __classPrivateFieldSet(this, _NeuronPlanner_clearing_mission, false, "f");
        // this.#unsub_option_cb = null;
    }
    // set_options_subscriber() {
    //     if(this.#unsub_option_cb)
    //         this.#unsub_option_cb();
    //     this.#unsub_option_cb = NeuronOptions.add_callback(this.#run_on_mission_change.bind(this));
    // }
    get_mission_items() {
        return __classPrivateFieldGet(this, _NeuronPlanner_mission_items, "f");
    }
    get_mission_as_json() {
        let mission_data = [];
        for (const item of __classPrivateFieldGet(this, _NeuronPlanner_mission_items, "f"))
            mission_data.push(item.to_json());
        return mission_data;
    }
    static isObjectOfDataType(object) {
        let is_valid = (object.type == NeuronPlanner.TYPE) &&
            (object.version == NeuronPlanner.VERSION);
        return is_valid;
    }
    set_mission_from_json(j) {
        if (!NeuronPlanner.isObjectOfDataType(j))
            throw new Error("Invalid version during import of NeuronPlannerMissionData");
        if (j.settings)
            _neuron_options__WEBPACK_IMPORTED_MODULE_9__.NeuronOptions.load(j.settings);
        if (j.mission_items && j.mission_items.length) {
            __classPrivateFieldGet(this, _NeuronPlanner_instances, "m", _NeuronPlanner_add_mission_features_from_json).call(this, j.mission_items);
        }
        else if (j.waypoints && j.waypoints.length) {
            console.warn("No mission items found, importing waypoints instead!");
            __classPrivateFieldGet(this, _NeuronPlanner_instances, "m", _NeuronPlanner_add_waypoint_features_from_json).call(this, j.waypoints);
        }
        this.fit_mission_on_map();
    }
    save_mission_file() {
        return __awaiter(this, void 0, void 0, function* () {
            let j = {
                version: NeuronPlanner.VERSION,
                type: NeuronPlanner.TYPE,
                settings: _neuron_options__WEBPACK_IMPORTED_MODULE_9__.NeuronOptions.as_json(),
                mission_items: this.get_mission_as_json(),
                waypoints: this.get_mission_as_points().map(x => x.to_json())
            };
            const file = new Blob([JSON.stringify(j, null, 4)], {
                type: 'application/json'
            });
            const filename = (0,_neuron_tools_files__WEBPACK_IMPORTED_MODULE_6__.get_filename)('json');
            yield (0,_neuron_tools_files__WEBPACK_IMPORTED_MODULE_6__.download_file)(filename, file);
        });
    }
    load_mission_file(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const j = JSON.parse(yield file.text());
            this.set_mission_from_json(j);
        });
    }
    fit_mission_on_map(allow_animate = true, pad_left = 50, pad_top = 50, pad_right = 50, pad_bottom = 50) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                //Try to fit all the features on screen
                if (__classPrivateFieldGet(this, _NeuronPlanner_map, "f")) {
                    let m = __classPrivateFieldGet(this, _NeuronPlanner_map, "f").get_leaflet_map();
                    if (m) {
                        let features = [];
                        for (const item of __classPrivateFieldGet(this, _NeuronPlanner_mission_items, "f"))
                            features.push(...item.get_features());
                        if (features.length) {
                            let fg = _interface_leaflet__WEBPACK_IMPORTED_MODULE_7__.L.featureGroup(features);
                            const old_snap = m.options.zoomSnap;
                            m.options.zoomSnap = 0;
                            let cb = (ev) => {
                                // console.log(`Zoom ended at ${m.getZoom()}, disabling thing~`);
                                m.options.zoomSnap = old_snap;
                                m.off('moveend', cb);
                                resolve(true);
                            };
                            //XXX:  we use moveend here because the map always moves to
                            //      fit bounds, but it doesn't always zoom to fit bounds
                            m.on('moveend', cb);
                            m.fitBounds(fg.getBounds(), {
                                paddingTopLeft: [pad_left, pad_top],
                                paddingBottomRight: [pad_right, pad_bottom],
                                animate: allow_animate,
                                // duration: 0.001
                            });
                            // } else {
                            //     console.log("Zoom not needed!");
                            //     resolve(true);
                            // }
                        }
                        else {
                            // console.log("No objects to zoom too!");
                            resolve(true);
                        }
                    }
                    else {
                        resolve(false);
                    }
                }
                else {
                    resolve(false);
                }
            });
        });
    }
    export_mission_kml() {
        let markers = [];
        let polygons = [];
        for (const i of __classPrivateFieldGet(this, _NeuronPlanner_mission_items, "f")) {
            if ((i instanceof _neuron_feature_point__WEBPACK_IMPORTED_MODULE_8__.NeuronFeaturePoint)) {
                markers.push(i.get_point());
            }
            else if ((i instanceof _neuron_feature_polygon__WEBPACK_IMPORTED_MODULE_2__.NeuronFeaturePolygon) || (i instanceof _neuron_feature_survey__WEBPACK_IMPORTED_MODULE_3__.NeuronFeatureSurvey)) {
                polygons.push(i.get_corners_as_points());
            }
        }
        (0,_neuron_tools_kml__WEBPACK_IMPORTED_MODULE_5__.kml_download_from_neuron_data)(markers, this.get_mission_as_points(), polygons);
    }
    set_map(map) {
        __classPrivateFieldSet(this, _NeuronPlanner_map, map, "f");
    }
    on_mission_change(cb) {
        var _a, _b;
        const id = (__classPrivateFieldSet(this, _NeuronPlanner_last_callback_id, (_b = __classPrivateFieldGet(this, _NeuronPlanner_last_callback_id, "f"), _a = _b++, _b), "f"), _a);
        __classPrivateFieldGet(this, _NeuronPlanner_on_change_callbacks, "f").set(id, cb);
        return __classPrivateFieldGet(this, _NeuronPlanner_instances, "m", _NeuronPlanner_remove_on_mission_change).bind(this, id);
    }
    ;
    get_last_item_altitude() {
        return __classPrivateFieldGet(this, _NeuronPlanner_last_mission_altitude, "f");
    }
    add_mission_item(item, index = -1) {
        __classPrivateFieldGet(this, _NeuronPlanner_instances, "m", _NeuronPlanner_add_mission_item).call(this, item, index);
    }
    add_mission_items(items, index = -1) {
        let count = 0;
        for (const item of items) {
            const new_ind = index == -1 ?
                -1 : //add to end
                index + count;
            __classPrivateFieldGet(this, _NeuronPlanner_instances, "m", _NeuronPlanner_add_mission_item).call(this, item, new_ind, false);
            count++;
        }
        if (items.length)
            __classPrivateFieldGet(this, _NeuronPlanner_instances, "m", _NeuronPlanner_on_add_mission_item_updates).call(this);
    }
    remove_mission_item(item) {
        // console.log(`Mission item removed: ${item}`);
        let index = __classPrivateFieldGet(this, _NeuronPlanner_mission_items, "f").indexOf(item);
        if (index >= 0) {
            __classPrivateFieldGet(this, _NeuronPlanner_mission_items, "f").splice(index, 1);
        }
        else {
            console.warn("Unknown mission item, cannot remove!");
        }
        if (!__classPrivateFieldGet(this, _NeuronPlanner_clearing_mission, "f")) {
            this.update();
            __classPrivateFieldGet(this, _NeuronPlanner_instances, "m", _NeuronPlanner_run_on_mission_change).call(this);
        }
    }
    clear_mission() {
        __classPrivateFieldSet(this, _NeuronPlanner_clearing_mission, true, "f");
        while (__classPrivateFieldGet(this, _NeuronPlanner_mission_items, "f").length > 0)
            __classPrivateFieldGet(this, _NeuronPlanner_mission_items, "f")[0].remove_feature();
        __classPrivateFieldSet(this, _NeuronPlanner_clearing_mission, false, "f");
        //Do this in bulk at the end
        this.update();
        __classPrivateFieldGet(this, _NeuronPlanner_instances, "m", _NeuronPlanner_run_on_mission_change).call(this);
    }
    update() {
        __classPrivateFieldGet(this, _NeuronPlanner_plan_element, "f").innerHTML = '';
        // let count = 0;
        for (const i of __classPrivateFieldGet(this, _NeuronPlanner_mission_items, "f")) {
            // count++;
            // const dom = document.createElement('div');
            // dom.appendChild(document.createTextNode(`Step #${count}: ${i.constructor.name}`));
            __classPrivateFieldGet(this, _NeuronPlanner_plan_element, "f").appendChild(i.get_dom());
        }
    }
    replace_point_with_waypoint(old_item) {
        const ind = __classPrivateFieldGet(this, _NeuronPlanner_mission_items, "f").indexOf(old_item);
        if (ind >= 0) {
            const waypoint = new _neuron_feature_waypoint__WEBPACK_IMPORTED_MODULE_1__.NeuronFeatureWaypoint(__classPrivateFieldGet(this, _NeuronPlanner_map, "f").get_leaflet_map(), old_item.get_point());
            old_item.remove_feature();
            this.add_mission_item(waypoint, ind);
        }
        else {
            console.warn("Unknown mission feature, cannot replace");
        }
    }
    replace_polygon_with_survey(old_item) {
        const ind = __classPrivateFieldGet(this, _NeuronPlanner_mission_items, "f").indexOf(old_item);
        if (ind >= 0) {
            const survey = new _neuron_feature_survey__WEBPACK_IMPORTED_MODULE_3__.NeuronFeatureSurvey(__classPrivateFieldGet(this, _NeuronPlanner_map, "f").get_leaflet_map(), old_item.get_corners_as_points());
            old_item.remove_feature();
            this.add_mission_item(survey, ind);
        }
        else {
            console.warn("Unknown mission feature, cannot replace");
        }
    }
    import_features_from_files(files) {
        for (const file of files) {
            (0,_neuron_tools_kml__WEBPACK_IMPORTED_MODULE_5__.kmx_load_file)(file, __classPrivateFieldGet(this, _NeuronPlanner_instances, "m", _NeuronPlanner_kml_loaded).bind(this));
        }
    }
    reset() {
        //Collect our DOM elements
        __classPrivateFieldSet(this, _NeuronPlanner_plan_element, document.getElementById(__classPrivateFieldGet(this, _NeuronPlanner_plan_element_name, "f")), "f");
        //Update the planner
        this.update();
        __classPrivateFieldGet(this, _NeuronPlanner_instances, "m", _NeuronPlanner_run_on_mission_change).call(this);
    }
    get_mission_as_points() {
        let coords = [];
        for (const i of __classPrivateFieldGet(this, _NeuronPlanner_mission_items, "f"))
            coords = coords.concat(i.get_path_coords());
        return coords;
    }
}
_NeuronPlanner_map = new WeakMap(), _NeuronPlanner_plan_element = new WeakMap(), _NeuronPlanner_mission_items = new WeakMap(), _NeuronPlanner_on_change_callbacks = new WeakMap(), _NeuronPlanner_last_callback_id = new WeakMap(), _NeuronPlanner_clearing_mission = new WeakMap(), _NeuronPlanner_last_mission_altitude = new WeakMap(), _NeuronPlanner_plan_element_name = new WeakMap(), _NeuronPlanner_instances = new WeakSet(), _NeuronPlanner_add_mission_features_from_json = function _NeuronPlanner_add_mission_features_from_json(mission_items) {
    let features = [];
    for (const item of mission_items) {
        let feature = null;
        if (_neuron_feature_base__WEBPACK_IMPORTED_MODULE_0__.NeuronFeatureBase.isObjectOfDataType(item)) {
            feature = _neuron_feature_base__WEBPACK_IMPORTED_MODULE_0__.NeuronFeatureBase.from_json(item, __classPrivateFieldGet(this, _NeuronPlanner_map, "f").get_leaflet_map());
        }
        else if (_neuron_feature_point__WEBPACK_IMPORTED_MODULE_8__.NeuronFeaturePoint.isObjectOfDataType(item)) {
            let p = _neuron_feature_point__WEBPACK_IMPORTED_MODULE_8__.NeuronFeaturePoint.from_json(item, __classPrivateFieldGet(this, _NeuronPlanner_map, "f").get_leaflet_map());
            p.set_planner(this);
            feature = p;
        }
        else if (_neuron_feature_waypoint__WEBPACK_IMPORTED_MODULE_1__.NeuronFeatureWaypoint.isObjectOfDataType(item)) {
            feature = _neuron_feature_waypoint__WEBPACK_IMPORTED_MODULE_1__.NeuronFeatureWaypoint.from_json(item, __classPrivateFieldGet(this, _NeuronPlanner_map, "f").get_leaflet_map());
        }
        else if (_neuron_feature_polygon__WEBPACK_IMPORTED_MODULE_2__.NeuronFeaturePolygon.isObjectOfDataType(item)) {
            let p = _neuron_feature_polygon__WEBPACK_IMPORTED_MODULE_2__.NeuronFeaturePolygon.from_json(item, __classPrivateFieldGet(this, _NeuronPlanner_map, "f").get_leaflet_map());
            p.set_planner(this);
            feature = p;
        }
        else if (_neuron_feature_survey__WEBPACK_IMPORTED_MODULE_3__.NeuronFeatureSurvey.isObjectOfDataType(item)) {
            feature = _neuron_feature_survey__WEBPACK_IMPORTED_MODULE_3__.NeuronFeatureSurvey.from_json(item, __classPrivateFieldGet(this, _NeuronPlanner_map, "f").get_leaflet_map());
        }
        else {
            console.warn("Unable to import mission item");
            console.warn(item);
        }
        if (feature)
            features.push(feature);
    }
    this.add_mission_items(features);
}, _NeuronPlanner_add_waypoint_features_from_json = function _NeuronPlanner_add_waypoint_features_from_json(waypoints) {
    let features = [];
    for (const item of waypoints) {
        let feature = null;
        if (_neuron_interfaces__WEBPACK_IMPORTED_MODULE_4__.NeuronInterfacePoint.isObjectOfDataType(item)) {
            const point = _neuron_interfaces__WEBPACK_IMPORTED_MODULE_4__.NeuronInterfacePoint.from_json(item);
            feature = new _neuron_feature_waypoint__WEBPACK_IMPORTED_MODULE_1__.NeuronFeatureWaypoint(__classPrivateFieldGet(this, _NeuronPlanner_map, "f").get_leaflet_map(), point);
        }
        else {
            console.warn("Unable to import waypoint item");
            console.warn(item);
        }
        if (feature)
            features.push(feature);
    }
    this.add_mission_items(features);
}, _NeuronPlanner_add_point_features_from_json = function _NeuronPlanner_add_point_features_from_json(points) {
    let features = [];
    for (const item of points) {
        let feature = null;
        if (_neuron_interfaces__WEBPACK_IMPORTED_MODULE_4__.NeuronInterfacePoint.isObjectOfDataType(item)) {
            const point = _neuron_interfaces__WEBPACK_IMPORTED_MODULE_4__.NeuronInterfacePoint.from_json(item);
            feature = new _neuron_feature_point__WEBPACK_IMPORTED_MODULE_8__.NeuronFeaturePoint(__classPrivateFieldGet(this, _NeuronPlanner_map, "f").get_leaflet_map(), point);
        }
        else {
            console.warn("Unable to import waypoint item");
            console.warn(item);
        }
        if (feature)
            features.push(feature);
    }
    this.add_mission_items(features);
}, _NeuronPlanner_run_on_mission_change = function _NeuronPlanner_run_on_mission_change() {
    const coords = this.get_mission_as_points();
    __classPrivateFieldSet(this, _NeuronPlanner_last_mission_altitude, coords.length ?
        coords[coords.length - 1].altitude :
        0.0, "f");
    for (const cb of __classPrivateFieldGet(this, _NeuronPlanner_on_change_callbacks, "f").values())
        cb();
}, _NeuronPlanner_remove_on_mission_change = function _NeuronPlanner_remove_on_mission_change(key) {
    if (__classPrivateFieldGet(this, _NeuronPlanner_on_change_callbacks, "f").has(key)) {
        __classPrivateFieldGet(this, _NeuronPlanner_on_change_callbacks, "f").delete(key);
    }
}, _NeuronPlanner_mission_item_changed = function _NeuronPlanner_mission_item_changed(item) {
    __classPrivateFieldGet(this, _NeuronPlanner_instances, "m", _NeuronPlanner_run_on_mission_change).call(this);
}, _NeuronPlanner_array_move = function _NeuronPlanner_array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
}, _NeuronPlanner_move_mission_item = function _NeuronPlanner_move_mission_item(item, direction) {
    let ind = __classPrivateFieldGet(this, _NeuronPlanner_mission_items, "f").indexOf(item);
    if (ind >= 0) {
        //Move index and clamp to array size
        let new_ind = ind + (direction > 0 ? 1 : -1);
        new_ind = Math.max(Math.min(new_ind, (__classPrivateFieldGet(this, _NeuronPlanner_mission_items, "f").length - 1)), 0);
        __classPrivateFieldGet(this, _NeuronPlanner_instances, "m", _NeuronPlanner_array_move).call(this, __classPrivateFieldGet(this, _NeuronPlanner_mission_items, "f"), ind, new_ind);
        this.update();
        __classPrivateFieldGet(this, _NeuronPlanner_instances, "m", _NeuronPlanner_run_on_mission_change).call(this);
    }
    else {
        console.warn("Unknown mission item, cannot move");
    }
}, _NeuronPlanner_on_add_mission_item_updates = function _NeuronPlanner_on_add_mission_item_updates() {
    this.update();
    __classPrivateFieldGet(this, _NeuronPlanner_instances, "m", _NeuronPlanner_run_on_mission_change).call(this);
}, _NeuronPlanner_add_mission_item = function _NeuronPlanner_add_mission_item(item, index = -1, run_update = true) {
    item.set_remove_callback(this.remove_mission_item.bind(this));
    item.set_change_callback(__classPrivateFieldGet(this, _NeuronPlanner_instances, "m", _NeuronPlanner_mission_item_changed).bind(this));
    item.set_move_callback(__classPrivateFieldGet(this, _NeuronPlanner_instances, "m", _NeuronPlanner_move_mission_item).bind(this));
    if (index < 0 || index >= __classPrivateFieldGet(this, _NeuronPlanner_mission_items, "f").length) {
        __classPrivateFieldGet(this, _NeuronPlanner_mission_items, "f").push(item);
    }
    else {
        __classPrivateFieldGet(this, _NeuronPlanner_mission_items, "f").splice(index, 0, item);
    }
    if (run_update) {
        __classPrivateFieldGet(this, _NeuronPlanner_instances, "m", _NeuronPlanner_on_add_mission_item_updates).call(this);
    }
}, _NeuronPlanner_kml_loaded = function _NeuronPlanner_kml_loaded(result) {
    // console.log("Got file result:");
    // console.log(result);
    let features = [];
    for (const p of result.markers) {
        // p.altitude = this.get_last_item_altitude();
        const f = new _neuron_feature_point__WEBPACK_IMPORTED_MODULE_8__.NeuronFeaturePoint(__classPrivateFieldGet(this, _NeuronPlanner_map, "f").get_leaflet_map(), p);
        f.set_planner(this); //XXX: Enable functions for up-scaling polygon
        features.push(f);
    }
    for (const path of result.paths) {
        for (const p of path) {
            // p.altitude = this.get_last_item_altitude();
            const f = new _neuron_feature_waypoint__WEBPACK_IMPORTED_MODULE_1__.NeuronFeatureWaypoint(__classPrivateFieldGet(this, _NeuronPlanner_map, "f").get_leaflet_map(), p);
            features.push(f);
        }
    }
    for (const p of result.polygons) {
        const f = new _neuron_feature_polygon__WEBPACK_IMPORTED_MODULE_2__.NeuronFeaturePolygon(__classPrivateFieldGet(this, _NeuronPlanner_map, "f").get_leaflet_map(), p);
        f.set_planner(this); //XXX: Enable functions for up-scaling polygon
        features.push(f);
    }
    this.add_mission_items(features);
    this.fit_mission_on_map();
};
NeuronPlanner.TYPE = 'NeuronPlanner';
NeuronPlanner.VERSION = '48a24a80-d243-11ec-918e-9fd28348efc7';


/***/ }),

/***/ "./src/js/neuron_statistics.ts":
/*!*************************************!*\
  !*** ./src/js/neuron_statistics.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeuronStatistics": () => (/* binding */ NeuronStatistics)
/* harmony export */ });
/* harmony import */ var _neuron_tools_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neuron_tools_common */ "./src/js/neuron_tools_common.ts");
/* harmony import */ var _neuron_dom_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neuron_dom_factory */ "./src/js/neuron_dom_factory.ts");
/* harmony import */ var _neuron_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./neuron_options */ "./src/js/neuron_options.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NeuronStatistics_instances, _NeuronStatistics_planner, _NeuronStatistics_brief, _NeuronStatistics_stats_element_prefix, _NeuronStatistics_stats_section_show_display, _NeuronStatistics_stats_results_element, _NeuronStatistics_stats_options_element, _NeuronStatistics_stats_results_hide_element, _NeuronStatistics_stats_options_hide_element, _NeuronStatistics_stats_results_title_element, _NeuronStatistics_stats_options_title_element, _NeuronStatistics_dom_option_show_path, _NeuronStatistics_dom_option_speed, _NeuronStatistics_dom_option_camera_name, _NeuronStatistics_dom_option_camera_focal_length, _NeuronStatistics_dom_option_camera_image_width, _NeuronStatistics_dom_option_camera_image_height, _NeuronStatistics_dom_option_camera_sensor_width, _NeuronStatistics_dom_option_camera_sensor_height, _NeuronStatistics_dom_stat_waypoints, _NeuronStatistics_dom_stat_distance, _NeuronStatistics_dom_stat_duration, _NeuronStatistics_dom_stat_images, _NeuronStatistics_unsub_option_cb, _NeuronStatistics_update_option_speed_dom, _NeuronStatistics_update_option_show_path, _NeuronStatistics_update_dom_from_options, _NeuronStatistics_gen_dom, _NeuronStatistics_set_camera_selector, _NeuronStatistics_update_camera_from_dom, _NeuronStatistics_update_camera_focal_length_from_dom, _NeuronStatistics_update_camera_sensor_width_from_dom, _NeuronStatistics_update_camera_sensor_height_from_dom, _NeuronStatistics_update_camera_image_width_from_dom, _NeuronStatistics_update_camera_image_height_from_dom, _NeuronStatistics_toggle_hide_section;



class NeuronStatistics extends _neuron_dom_factory__WEBPACK_IMPORTED_MODULE_1__.NeuronDOMFactory {
    constructor(planner, brief, stats_element_prefix) {
        super(stats_element_prefix);
        _NeuronStatistics_instances.add(this);
        _NeuronStatistics_planner.set(this, void 0);
        _NeuronStatistics_brief.set(this, void 0);
        _NeuronStatistics_stats_element_prefix.set(this, void 0);
        _NeuronStatistics_stats_section_show_display.set(this, void 0);
        _NeuronStatistics_stats_results_element.set(this, void 0);
        _NeuronStatistics_stats_options_element.set(this, void 0);
        _NeuronStatistics_stats_results_hide_element.set(this, void 0);
        _NeuronStatistics_stats_options_hide_element.set(this, void 0);
        _NeuronStatistics_stats_results_title_element.set(this, void 0);
        _NeuronStatistics_stats_options_title_element.set(this, void 0);
        //Flight options
        _NeuronStatistics_dom_option_show_path.set(this, void 0);
        _NeuronStatistics_dom_option_speed.set(this, void 0);
        //Capture parameters
        _NeuronStatistics_dom_option_camera_name.set(this, void 0);
        _NeuronStatistics_dom_option_camera_focal_length.set(this, void 0);
        _NeuronStatistics_dom_option_camera_image_width.set(this, void 0);
        _NeuronStatistics_dom_option_camera_image_height.set(this, void 0);
        _NeuronStatistics_dom_option_camera_sensor_width.set(this, void 0);
        _NeuronStatistics_dom_option_camera_sensor_height.set(this, void 0);
        _NeuronStatistics_dom_stat_waypoints.set(this, void 0);
        _NeuronStatistics_dom_stat_distance.set(this, void 0);
        _NeuronStatistics_dom_stat_duration.set(this, void 0);
        _NeuronStatistics_dom_stat_images.set(this, void 0);
        _NeuronStatistics_unsub_option_cb.set(this, void 0);
        __classPrivateFieldSet(this, _NeuronStatistics_planner, planner, "f");
        __classPrivateFieldSet(this, _NeuronStatistics_brief, brief, "f");
        __classPrivateFieldSet(this, _NeuronStatistics_dom_option_show_path, null, "f");
        __classPrivateFieldSet(this, _NeuronStatistics_dom_option_speed, null, "f");
        __classPrivateFieldSet(this, _NeuronStatistics_dom_option_camera_name, null, "f");
        __classPrivateFieldSet(this, _NeuronStatistics_dom_option_camera_focal_length, null, "f");
        __classPrivateFieldSet(this, _NeuronStatistics_dom_option_camera_image_width, null, "f");
        __classPrivateFieldSet(this, _NeuronStatistics_dom_option_camera_image_height, null, "f");
        __classPrivateFieldSet(this, _NeuronStatistics_dom_option_camera_sensor_width, null, "f");
        __classPrivateFieldSet(this, _NeuronStatistics_dom_option_camera_sensor_height, null, "f");
        __classPrivateFieldSet(this, _NeuronStatistics_stats_options_element, null, "f");
        __classPrivateFieldSet(this, _NeuronStatistics_stats_results_element, null, "f");
        __classPrivateFieldSet(this, _NeuronStatistics_stats_options_hide_element, null, "f");
        __classPrivateFieldSet(this, _NeuronStatistics_stats_results_hide_element, null, "f");
        __classPrivateFieldSet(this, _NeuronStatistics_stats_options_title_element, null, "f");
        __classPrivateFieldSet(this, _NeuronStatistics_stats_results_title_element, null, "f");
        __classPrivateFieldSet(this, _NeuronStatistics_stats_element_prefix, stats_element_prefix, "f");
        __classPrivateFieldSet(this, _NeuronStatistics_stats_section_show_display, 'grid', "f");
        __classPrivateFieldSet(this, _NeuronStatistics_dom_stat_waypoints, null, "f");
        __classPrivateFieldSet(this, _NeuronStatistics_dom_stat_distance, null, "f");
        __classPrivateFieldSet(this, _NeuronStatistics_dom_stat_duration, null, "f");
        __classPrivateFieldSet(this, _NeuronStatistics_dom_stat_images, null, "f");
        this.set_options_subscriber();
    }
    set_options_subscriber() {
        if (__classPrivateFieldGet(this, _NeuronStatistics_unsub_option_cb, "f"))
            __classPrivateFieldGet(this, _NeuronStatistics_unsub_option_cb, "f").call(this);
        __classPrivateFieldSet(this, _NeuronStatistics_unsub_option_cb, _neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.add_callback(this.update_statistics.bind(this)), "f");
        _neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.set_dom_callback(__classPrivateFieldGet(this, _NeuronStatistics_instances, "m", _NeuronStatistics_update_dom_from_options).bind(this));
    }
    // #get_option_id_from_key(key:NeuronStatisticsOptionKeys) {
    //     return `${this.#stats_element_prefix}-options-${key}`;
    // }
    // get_results_id_from_key(key:string) {
    //     return `${this.#stats_element_prefix}-results-${key}`;
    // }
    update_statistics() {
        const coords = __classPrivateFieldGet(this, _NeuronStatistics_planner, "f").get_mission_as_points();
        const summary = __classPrivateFieldGet(this, _NeuronStatistics_brief, "f").get_mission_summary();
        // this.#last_mission_altitude = coords.length ?
        //     coords[coords.length - 1].altitude :
        //     0.0;
        // let total_distance = flight_distance_from_coords(coords);
        const dist_km = summary.total_distance / 1000;
        //Get the flight speed and lock it to at least 0.1m/s
        // const s = NeuronOptions.get_option_number(NeuronOptionsNumber.MISSION_SPEED);
        // const flight_speed = Math.max(s ? s : 0.0, 0.1);
        if (__classPrivateFieldGet(this, _NeuronStatistics_dom_stat_waypoints, "f"))
            __classPrivateFieldGet(this, _NeuronStatistics_dom_stat_waypoints, "f").value = coords.length.toFixed(0);
        if (__classPrivateFieldGet(this, _NeuronStatistics_dom_stat_distance, "f"))
            __classPrivateFieldGet(this, _NeuronStatistics_dom_stat_distance, "f").value = `${(dist_km).toFixed(2)}km`;
        if (__classPrivateFieldGet(this, _NeuronStatistics_dom_stat_duration, "f"))
            __classPrivateFieldGet(this, _NeuronStatistics_dom_stat_duration, "f").value = (0,_neuron_tools_common__WEBPACK_IMPORTED_MODULE_0__.flight_time_from_duration)(summary.total_duration);
        if (__classPrivateFieldGet(this, _NeuronStatistics_dom_stat_images, "f"))
            __classPrivateFieldGet(this, _NeuronStatistics_dom_stat_images, "f").value = summary.total_images > 0 ? summary.total_images.toString() : "---";
    }
    // set_camera(camera:NeuronCameraSpecifications) {
    //     this.#set_camera(camera);
    // };
    // #set_camera(camera:NeuronCameraSpecifications, update_calcs:boolean = true) {
    set_camera(camera, update_settings = true) {
        if (update_settings)
            _neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.set_camera(camera, true, false);
        __classPrivateFieldGet(this, _NeuronStatistics_instances, "m", _NeuronStatistics_set_camera_selector).call(this, camera);
        if (__classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_focal_length, "f"))
            __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_focal_length, "f").value = Math.max(NeuronStatistics._camera_focal_length_min, camera.focal_length).toString();
        if (__classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_sensor_width, "f"))
            __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_sensor_width, "f").value = Math.max(NeuronStatistics._camera_sensor_width_min, camera.sensor_width).toString();
        if (__classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_sensor_height, "f"))
            __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_sensor_height, "f").value = Math.max(NeuronStatistics._camera_sensor_height_min, camera.sensor_height).toString();
        if (__classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_image_width, "f"))
            __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_image_width, "f").value = Math.max(NeuronStatistics._camera_image_width_min, camera.image_width).toString();
        if (__classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_image_height, "f"))
            __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_image_height, "f").value = Math.max(NeuronStatistics._camera_image_height_min, camera.image_height).toString();
    }
    reset() {
        __classPrivateFieldGet(this, _NeuronStatistics_instances, "m", _NeuronStatistics_gen_dom).call(this);
        //Update the planner
        this.update_statistics();
    }
}
_NeuronStatistics_planner = new WeakMap(), _NeuronStatistics_brief = new WeakMap(), _NeuronStatistics_stats_element_prefix = new WeakMap(), _NeuronStatistics_stats_section_show_display = new WeakMap(), _NeuronStatistics_stats_results_element = new WeakMap(), _NeuronStatistics_stats_options_element = new WeakMap(), _NeuronStatistics_stats_results_hide_element = new WeakMap(), _NeuronStatistics_stats_options_hide_element = new WeakMap(), _NeuronStatistics_stats_results_title_element = new WeakMap(), _NeuronStatistics_stats_options_title_element = new WeakMap(), _NeuronStatistics_dom_option_show_path = new WeakMap(), _NeuronStatistics_dom_option_speed = new WeakMap(), _NeuronStatistics_dom_option_camera_name = new WeakMap(), _NeuronStatistics_dom_option_camera_focal_length = new WeakMap(), _NeuronStatistics_dom_option_camera_image_width = new WeakMap(), _NeuronStatistics_dom_option_camera_image_height = new WeakMap(), _NeuronStatistics_dom_option_camera_sensor_width = new WeakMap(), _NeuronStatistics_dom_option_camera_sensor_height = new WeakMap(), _NeuronStatistics_dom_stat_waypoints = new WeakMap(), _NeuronStatistics_dom_stat_distance = new WeakMap(), _NeuronStatistics_dom_stat_duration = new WeakMap(), _NeuronStatistics_dom_stat_images = new WeakMap(), _NeuronStatistics_unsub_option_cb = new WeakMap(), _NeuronStatistics_instances = new WeakSet(), _NeuronStatistics_update_option_speed_dom = function _NeuronStatistics_update_option_speed_dom() {
    if (__classPrivateFieldGet(this, _NeuronStatistics_dom_option_speed, "f"))
        _neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.set_option_number(_neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptionsNumber.MISSION_SPEED, __classPrivateFieldGet(this, _NeuronStatistics_dom_option_speed, "f").valueAsNumber, true, false);
}, _NeuronStatistics_update_option_show_path = function _NeuronStatistics_update_option_show_path() {
    if (__classPrivateFieldGet(this, _NeuronStatistics_dom_option_show_path, "f"))
        _neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.set_option_boolean(_neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptionsBoolean.SHOW_PATH, __classPrivateFieldGet(this, _NeuronStatistics_dom_option_show_path, "f").checked, true, false);
}, _NeuronStatistics_update_dom_from_options = function _NeuronStatistics_update_dom_from_options() {
    if (__classPrivateFieldGet(this, _NeuronStatistics_dom_option_show_path, "f"))
        __classPrivateFieldGet(this, _NeuronStatistics_dom_option_show_path, "f").checked = _neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.get_option_boolean(_neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptionsBoolean.SHOW_PATH);
    if (__classPrivateFieldGet(this, _NeuronStatistics_dom_option_speed, "f"))
        __classPrivateFieldGet(this, _NeuronStatistics_dom_option_speed, "f").value = _neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.get_option_number(_neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptionsNumber.MISSION_SPEED).toString();
    this.set_camera(_neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.get_camera(), false);
}, _NeuronStatistics_gen_dom = function _NeuronStatistics_gen_dom() {
    //Options
    __classPrivateFieldSet(this, _NeuronStatistics_stats_options_element, document.getElementById(`${__classPrivateFieldGet(this, _NeuronStatistics_stats_element_prefix, "f")}-options`), "f");
    __classPrivateFieldGet(this, _NeuronStatistics_stats_options_element, "f").innerHTML = '';
    const t5 = "Display the calculated flight path on the map";
    __classPrivateFieldSet(this, _NeuronStatistics_dom_option_show_path, this._create_dom_input_checkbox(_neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.get_option_boolean(_neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptionsBoolean.SHOW_PATH), __classPrivateFieldGet(this, _NeuronStatistics_instances, "m", _NeuronStatistics_update_option_show_path).bind(this)), "f");
    __classPrivateFieldGet(this, _NeuronStatistics_dom_option_show_path, "f").title = t5;
    __classPrivateFieldGet(this, _NeuronStatistics_stats_options_element, "f").appendChild(this._create_dom_label("Show path:", __classPrivateFieldGet(this, _NeuronStatistics_dom_option_show_path, "f"), t5));
    __classPrivateFieldGet(this, _NeuronStatistics_stats_options_element, "f").appendChild(__classPrivateFieldGet(this, _NeuronStatistics_dom_option_show_path, "f"));
    const t0 = "Speed of the aircraft during regular flight in metres per second";
    __classPrivateFieldSet(this, _NeuronStatistics_dom_option_speed, this._create_dom_input_number(_neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.get_option_number(_neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptionsNumber.MISSION_SPEED), __classPrivateFieldGet(this, _NeuronStatistics_instances, "m", _NeuronStatistics_update_option_speed_dom).bind(this), 0.1), "f");
    __classPrivateFieldGet(this, _NeuronStatistics_dom_option_speed, "f").title = t0;
    __classPrivateFieldGet(this, _NeuronStatistics_stats_options_element, "f").appendChild(this._create_dom_label("Speed (m/s):", __classPrivateFieldGet(this, _NeuronStatistics_dom_option_speed, "f"), t0));
    __classPrivateFieldGet(this, _NeuronStatistics_stats_options_element, "f").appendChild(__classPrivateFieldGet(this, _NeuronStatistics_dom_option_speed, "f"));
    const tb = "Camera configuration for survey parameters.";
    let dom_break = this._create_dom_output();
    dom_break.title = tb;
    let dom_break_label = this._create_dom_label("Camera Config.", dom_break, tb);
    dom_break_label.classList.add('fp-stats-option-content-subtitle');
    __classPrivateFieldGet(this, _NeuronStatistics_stats_options_element, "f").appendChild(dom_break_label);
    __classPrivateFieldGet(this, _NeuronStatistics_stats_options_element, "f").appendChild(dom_break);
    let camera = _neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.get_camera();
    const t11 = "Camera preset values for calculations based off of typical drone survey cameras";
    const camera_names = _neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.camera_presets.map(x => x.name);
    __classPrivateFieldSet(this, _NeuronStatistics_dom_option_camera_name, this._create_dom_input_select(camera_names, camera_names, __classPrivateFieldGet(this, _NeuronStatistics_instances, "m", _NeuronStatistics_update_camera_from_dom).bind(this)), "f");
    __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_name, "f").title = t11;
    __classPrivateFieldGet(this, _NeuronStatistics_stats_options_element, "f").appendChild(this._create_dom_label("Camera:", __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_name, "f"), t11));
    __classPrivateFieldGet(this, _NeuronStatistics_stats_options_element, "f").appendChild(__classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_name, "f"));
    //Manually set the camera name based off of the currently loaded camera
    __classPrivateFieldGet(this, _NeuronStatistics_instances, "m", _NeuronStatistics_set_camera_selector).call(this, camera);
    const t12 = "Camera focal length in millimeters";
    __classPrivateFieldSet(this, _NeuronStatistics_dom_option_camera_focal_length, this._create_dom_input_number(camera.focal_length, __classPrivateFieldGet(this, _NeuronStatistics_instances, "m", _NeuronStatistics_update_camera_focal_length_from_dom).bind(this), NeuronStatistics._camera_focal_length_min), "f");
    __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_focal_length, "f").title = t12;
    __classPrivateFieldGet(this, _NeuronStatistics_stats_options_element, "f").appendChild(this._create_dom_label("F.Length:", __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_focal_length, "f"), t12));
    __classPrivateFieldGet(this, _NeuronStatistics_stats_options_element, "f").appendChild(__classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_focal_length, "f"));
    const t13 = "Camera sensor width in millimeters";
    __classPrivateFieldSet(this, _NeuronStatistics_dom_option_camera_sensor_width, this._create_dom_input_number(camera.sensor_width, __classPrivateFieldGet(this, _NeuronStatistics_instances, "m", _NeuronStatistics_update_camera_sensor_width_from_dom).bind(this), NeuronStatistics._camera_sensor_width_min), "f");
    __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_sensor_width, "f").title = t13;
    __classPrivateFieldGet(this, _NeuronStatistics_stats_options_element, "f").appendChild(this._create_dom_label("S.Width:", __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_sensor_width, "f"), t13));
    __classPrivateFieldGet(this, _NeuronStatistics_stats_options_element, "f").appendChild(__classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_sensor_width, "f"));
    const t14 = "Camera sensor height in millimeters";
    __classPrivateFieldSet(this, _NeuronStatistics_dom_option_camera_sensor_height, this._create_dom_input_number(camera.sensor_height, __classPrivateFieldGet(this, _NeuronStatistics_instances, "m", _NeuronStatistics_update_camera_sensor_height_from_dom).bind(this), NeuronStatistics._camera_sensor_height_min), "f");
    __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_sensor_height, "f").title = t14;
    __classPrivateFieldGet(this, _NeuronStatistics_stats_options_element, "f").appendChild(this._create_dom_label("S.Height:", __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_sensor_height, "f"), t14));
    __classPrivateFieldGet(this, _NeuronStatistics_stats_options_element, "f").appendChild(__classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_sensor_height, "f"));
    const t15 = "Camera image width in pixels";
    __classPrivateFieldSet(this, _NeuronStatistics_dom_option_camera_image_width, this._create_dom_input_number(camera.image_width, __classPrivateFieldGet(this, _NeuronStatistics_instances, "m", _NeuronStatistics_update_camera_image_width_from_dom).bind(this), NeuronStatistics._camera_image_width_min), "f");
    __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_image_width, "f").title = t15;
    __classPrivateFieldGet(this, _NeuronStatistics_stats_options_element, "f").appendChild(this._create_dom_label("I.Width:", __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_image_width, "f"), t15));
    __classPrivateFieldGet(this, _NeuronStatistics_stats_options_element, "f").appendChild(__classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_image_width, "f"));
    const t16 = "Camera image height in pixels";
    __classPrivateFieldSet(this, _NeuronStatistics_dom_option_camera_image_height, this._create_dom_input_number(camera.image_height, __classPrivateFieldGet(this, _NeuronStatistics_instances, "m", _NeuronStatistics_update_camera_image_height_from_dom).bind(this), NeuronStatistics._camera_image_height_min), "f");
    __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_image_height, "f").title = t16;
    __classPrivateFieldGet(this, _NeuronStatistics_stats_options_element, "f").appendChild(this._create_dom_label("I.Height:", __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_image_height, "f"), t16));
    __classPrivateFieldGet(this, _NeuronStatistics_stats_options_element, "f").appendChild(__classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_image_height, "f"));
    //Statistics
    __classPrivateFieldSet(this, _NeuronStatistics_stats_results_element, document.getElementById(`${__classPrivateFieldGet(this, _NeuronStatistics_stats_element_prefix, "f")}-results`), "f");
    __classPrivateFieldGet(this, _NeuronStatistics_stats_results_element, "f").innerHTML = '';
    const t1 = "Total number of waypoints in the mission plan";
    __classPrivateFieldSet(this, _NeuronStatistics_dom_stat_waypoints, this._create_dom_output(), "f");
    __classPrivateFieldGet(this, _NeuronStatistics_dom_stat_waypoints, "f").title = t1;
    __classPrivateFieldGet(this, _NeuronStatistics_stats_results_element, "f").appendChild(this._create_dom_label("Waypoints:", __classPrivateFieldGet(this, _NeuronStatistics_dom_stat_waypoints, "f"), t1));
    __classPrivateFieldGet(this, _NeuronStatistics_stats_results_element, "f").appendChild(__classPrivateFieldGet(this, _NeuronStatistics_dom_stat_waypoints, "f"));
    const t2 = "Total distance traveled during the mission plan";
    __classPrivateFieldSet(this, _NeuronStatistics_dom_stat_distance, this._create_dom_output(), "f");
    __classPrivateFieldGet(this, _NeuronStatistics_dom_stat_distance, "f").title = t2;
    __classPrivateFieldGet(this, _NeuronStatistics_stats_results_element, "f").appendChild(this._create_dom_label("Distance:", __classPrivateFieldGet(this, _NeuronStatistics_dom_stat_distance, "f"), t2));
    __classPrivateFieldGet(this, _NeuronStatistics_stats_results_element, "f").appendChild(__classPrivateFieldGet(this, _NeuronStatistics_dom_stat_distance, "f"));
    const t3 = "Total time taken to fly the mission plan";
    __classPrivateFieldSet(this, _NeuronStatistics_dom_stat_duration, this._create_dom_output(), "f");
    __classPrivateFieldGet(this, _NeuronStatistics_dom_stat_duration, "f").title = t3;
    __classPrivateFieldGet(this, _NeuronStatistics_stats_results_element, "f").appendChild(this._create_dom_label("Duration:", __classPrivateFieldGet(this, _NeuronStatistics_dom_stat_duration, "f"), t3));
    __classPrivateFieldGet(this, _NeuronStatistics_stats_results_element, "f").appendChild(__classPrivateFieldGet(this, _NeuronStatistics_dom_stat_duration, "f"));
    const t4 = "Total number of images taken during the mission plan";
    __classPrivateFieldSet(this, _NeuronStatistics_dom_stat_images, this._create_dom_output(), "f");
    __classPrivateFieldGet(this, _NeuronStatistics_dom_stat_images, "f").title = t4;
    __classPrivateFieldGet(this, _NeuronStatistics_stats_results_element, "f").appendChild(this._create_dom_label("Images:", __classPrivateFieldGet(this, _NeuronStatistics_dom_stat_images, "f"), t4));
    __classPrivateFieldGet(this, _NeuronStatistics_stats_results_element, "f").appendChild(__classPrivateFieldGet(this, _NeuronStatistics_dom_stat_images, "f"));
    //Callbacks for hide
    __classPrivateFieldSet(this, _NeuronStatistics_stats_results_hide_element, document.getElementById(`${__classPrivateFieldGet(this, _NeuronStatistics_stats_element_prefix, "f")}-results-hide`), "f");
    __classPrivateFieldSet(this, _NeuronStatistics_stats_results_title_element, document.getElementById(`${__classPrivateFieldGet(this, _NeuronStatistics_stats_element_prefix, "f")}-results-title`), "f");
    __classPrivateFieldGet(this, _NeuronStatistics_stats_results_title_element, "f").style.cursor = 'pointer';
    __classPrivateFieldGet(this, _NeuronStatistics_stats_results_title_element, "f").onclick = __classPrivateFieldGet(this, _NeuronStatistics_instances, "m", _NeuronStatistics_toggle_hide_section).bind(this, 
    // this.#stats_results_title_element,
    __classPrivateFieldGet(this, _NeuronStatistics_stats_results_hide_element, "f"), __classPrivateFieldGet(this, _NeuronStatistics_stats_results_element, "f"));
    __classPrivateFieldSet(this, _NeuronStatistics_stats_options_hide_element, document.getElementById(`${__classPrivateFieldGet(this, _NeuronStatistics_stats_element_prefix, "f")}-options-hide`), "f");
    __classPrivateFieldSet(this, _NeuronStatistics_stats_options_title_element, document.getElementById(`${__classPrivateFieldGet(this, _NeuronStatistics_stats_element_prefix, "f")}-options-title`), "f");
    __classPrivateFieldGet(this, _NeuronStatistics_stats_options_title_element, "f").style.cursor = 'pointer';
    __classPrivateFieldGet(this, _NeuronStatistics_stats_options_title_element, "f").onclick = __classPrivateFieldGet(this, _NeuronStatistics_instances, "m", _NeuronStatistics_toggle_hide_section).bind(this, 
    // this.#stats_options_title_element,
    __classPrivateFieldGet(this, _NeuronStatistics_stats_options_hide_element, "f"), __classPrivateFieldGet(this, _NeuronStatistics_stats_options_element, "f"));
}, _NeuronStatistics_set_camera_selector = function _NeuronStatistics_set_camera_selector(camera = _neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.camera_preset_custom) {
    if (__classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_name, "f")) {
        let matched_camera = false;
        //Go through our list and find possible matches for our set camera
        const camera_matches = _neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.camera_presets.filter(x => x.name == camera.name);
        if (camera_matches.length) {
            const full_matches = camera_matches.filter(x => x.equals(camera));
            matched_camera = full_matches.length > 0;
        }
        //If there is a proper match, then use that name (details should be filled in by set_camera())
        //Otherwise it is a custom camera
        __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_name, "f").value = matched_camera ? camera.name : _neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.camera_preset_custom.name;
    }
}, _NeuronStatistics_update_camera_from_dom = function _NeuronStatistics_update_camera_from_dom() {
    const value = __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_name, "f").value;
    const camera_names = _neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.camera_presets.map(x => x.name);
    let camera = _neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.camera_preset_custom.copy();
    if (camera_names.includes(value)) {
        const matches = _neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.camera_presets.filter(x => x.name == value);
        if (matches.length > 0) {
            camera = matches[0].copy();
        }
    }
    this.set_camera(camera);
    // this.#calculate_and_update_camera_variables();
}, _NeuronStatistics_update_camera_focal_length_from_dom = function _NeuronStatistics_update_camera_focal_length_from_dom() {
    let camera = _neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.get_camera();
    camera.focal_length = __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_focal_length, "f").valueAsNumber;
    this.set_camera(camera);
}, _NeuronStatistics_update_camera_sensor_width_from_dom = function _NeuronStatistics_update_camera_sensor_width_from_dom() {
    let camera = _neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.get_camera();
    camera.sensor_width = __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_sensor_width, "f").valueAsNumber;
    this.set_camera(camera);
}, _NeuronStatistics_update_camera_sensor_height_from_dom = function _NeuronStatistics_update_camera_sensor_height_from_dom() {
    let camera = _neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.get_camera();
    camera.sensor_height = __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_sensor_height, "f").valueAsNumber;
    this.set_camera(camera);
}, _NeuronStatistics_update_camera_image_width_from_dom = function _NeuronStatistics_update_camera_image_width_from_dom() {
    let camera = _neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.get_camera();
    camera.image_width = __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_image_width, "f").valueAsNumber;
    this.set_camera(camera);
}, _NeuronStatistics_update_camera_image_height_from_dom = function _NeuronStatistics_update_camera_image_height_from_dom() {
    let camera = _neuron_options__WEBPACK_IMPORTED_MODULE_2__.NeuronOptions.get_camera();
    camera.image_height = __classPrivateFieldGet(this, _NeuronStatistics_dom_option_camera_image_height, "f").valueAsNumber;
    this.set_camera(camera);
}, _NeuronStatistics_toggle_hide_section = function _NeuronStatistics_toggle_hide_section(button, section) {
    if (section.style.display != 'none') {
        //Hide
        section.style.display = 'none';
    }
    else {
        //Show
        section.style.display = __classPrivateFieldGet(this, _NeuronStatistics_stats_section_show_display, "f");
    }
    button.innerHTML = '';
    let i = document.createElement('i');
    i.className = `fas fa-${section.style.display == 'none' ? 'plus' : 'minus'}`;
    button.appendChild(i);
};
NeuronStatistics._camera_focal_length_min = 0;
NeuronStatistics._camera_sensor_width_min = 0;
NeuronStatistics._camera_sensor_height_min = 0;
NeuronStatistics._camera_image_width_min = 0;
NeuronStatistics._camera_image_height_min = 0;


/***/ }),

/***/ "./src/js/neuron_tools_common.ts":
/*!***************************************!*\
  !*** ./src/js/neuron_tools_common.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeuronUID": () => (/* binding */ NeuronUID),
/* harmony export */   "flight_distance_from_coords": () => (/* binding */ flight_distance_from_coords),
/* harmony export */   "flight_time_from_duration": () => (/* binding */ flight_time_from_duration),
/* harmony export */   "mm_to_px": () => (/* binding */ mm_to_px),
/* harmony export */   "zero_pad": () => (/* binding */ zero_pad)
/* harmony export */ });
function zero_pad(num, places) {
    return String(num).padStart(places, '0');
}
let lastId = 0;
function NeuronUID(prefix = 'nuid-') {
    lastId++;
    return `${prefix}${lastId}`;
}
function flight_distance_from_coords(coords) {
    //XXX:  Total distance calculated with the haversine method
    //      This is a shortcut and is probably ok for small distances
    //      but we should definitely look at a proper earth model to
    //      do it properly in the future
    let total_distance = 0.0;
    for (var i = 0; i < coords.length - 1; i++) {
        const p1 = coords[i];
        const p2 = coords[i + 1];
        const u1 = p1.to_UTM();
        const u2 = p2.to_UTM(u1.zone);
        const d = u1.GetDistance2D(u2);
        //Do some sneaky stuff to support altitude as well
        const alt_d = Math.pow(Math.abs(p1.altitude - p2.altitude), 2);
        total_distance += Math.sqrt(Math.pow(d, 2) + alt_d);
    }
    return total_distance;
}
function flight_time_from_duration(duration) {
    const t_h = Math.floor(duration / 3600);
    const t_m = Math.floor(duration % 3600 / 60);
    const t_s = Math.floor(duration % 3600 % 60);
    return `${zero_pad(t_h, 2)}:${zero_pad(t_m, 2)}:${zero_pad(t_s, 2)}`;
}
function mm_to_px(mm) {
    const default_dpi = 96;
    return (mm / 25.4) * window.devicePixelRatio * default_dpi;
}


/***/ }),

/***/ "./src/js/neuron_tools_files.ts":
/*!**************************************!*\
  !*** ./src/js/neuron_tools_files.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "download_file": () => (/* binding */ download_file),
/* harmony export */   "get_filename": () => (/* binding */ get_filename)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function get_filename(ext) {
    return `neuron-planner${Date.now()}.${ext}`;
}
function download_file(filename, data) {
    return __awaiter(this, void 0, void 0, function* () {
        var element = document.createElement('a');
        const burl = URL.createObjectURL(data);
        element.setAttribute('href', burl);
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    });
}


/***/ }),

/***/ "./src/js/neuron_tools_kml.ts":
/*!************************************!*\
  !*** ./src/js/neuron_tools_kml.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kml_data_from_neuron_data": () => (/* binding */ kml_data_from_neuron_data),
/* harmony export */   "kml_document_to_string": () => (/* binding */ kml_document_to_string),
/* harmony export */   "kml_download_from_neuron_data": () => (/* binding */ kml_download_from_neuron_data),
/* harmony export */   "kml_extract_features": () => (/* binding */ kml_extract_features),
/* harmony export */   "kmx_load_file": () => (/* binding */ kmx_load_file),
/* harmony export */   "kmz_download_from_neuron_data": () => (/* binding */ kmz_download_from_neuron_data)
/* harmony export */ });
/* harmony import */ var _neuron_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neuron_interfaces */ "./src/js/neuron_interfaces.ts");
/* harmony import */ var _neuron_tools_files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neuron_tools_files */ "./src/js/neuron_tools_files.ts");
/* harmony import */ var _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zip.js/zip.js */ "./node_modules/@zip.js/zip.js/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const type_kml = "application/vnd.google-earth.kml+xml";
const type_kmz = "application/vnd.google-earth.kmz";
function kmx_load_file(file, cb_file_loaded) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = null;
        console.log(`Loaded file identified as "${file.type}" type`);
        switch (file.type) {
            case type_kml: {
                const text = yield file.text();
                result = yield kml_extract_features(text);
                break;
            }
            case type_kmz: {
                const reader = new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_2__.ZipReader(new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_2__.BlobReader(file));
                const entries = yield reader.getEntries();
                let got_data = false;
                let markers = [];
                let paths = [];
                let polygons = [];
                for (const e of entries) {
                    const text = yield e.getData(new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_2__.TextWriter());
                    const r = yield kml_extract_features(text);
                    if (r.markers.length || r.paths.length || r.polygons.length) {
                        got_data = true;
                        markers.push(...r.markers);
                        paths.push(...r.paths);
                        polygons.push(...r.polygons);
                    }
                }
                if (got_data) {
                    result = {
                        markers: markers,
                        paths: paths,
                        polygons: polygons,
                    };
                }
                break;
            }
        }
        // console.log(result);
        cb_file_loaded(result);
    });
}
function kml_extract_features(kml_plain_text) {
    return __awaiter(this, void 0, void 0, function* () {
        //XXX: Only supports google marks/placemarks and polygons
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(kml_plain_text, "text/xml");
        let ret = null;
        if (xmlDoc.documentElement.nodeName == "kml") {
            let markers = [];
            let paths = [];
            let polygons = [];
            for (const item of xmlDoc.getElementsByTagName('Placemark')) {
                let placeMarkName = "Unknown";
                try {
                    placeMarkName = item.getElementsByTagName('name')[0].childNodes[0].nodeValue.trim();
                }
                catch (_a) { }
                let kml_polygons = Array.from(item.getElementsByTagName('Polygon'));
                let kml_markers = Array.from(item.getElementsByTagName('Point'));
                let kml_paths = Array.from(item.getElementsByTagName('LineString'));
                for (const multi of item.getElementsByTagName('MultiGeometry')) {
                    kml_polygons = kml_polygons.concat(Array.from(multi.getElementsByTagName('Polygon')));
                    kml_markers = kml_markers.concat(Array.from(multi.getElementsByTagName('Point')));
                    kml_paths = kml_paths.concat(Array.from(multi.getElementsByTagName('LineString')));
                }
                /** MARKER PARSE **/
                for (const marker of kml_markers) {
                    let point = marker.getElementsByTagName('coordinates')[0].childNodes[0].nodeValue.trim();
                    let p = point_from_coord(point.split(","));
                    p.tag = placeMarkName;
                    markers.push(p);
                }
                /** PATH PARSE **/
                for (const path of kml_paths) {
                    let coords = path.getElementsByTagName('coordinates')[0].childNodes[0].nodeValue.trim();
                    let kml_points = coords.split(" ");
                    let points = [];
                    for (const point of kml_points) {
                        points.push(point_from_coord(point.split(",")));
                    }
                    paths.push(points);
                }
                /** POLYGONS PARSE **/
                for (const polygon of kml_polygons) {
                    let coords = polygon.getElementsByTagName('coordinates')[0].childNodes[0].nodeValue.trim();
                    let kml_points = coords.split(" ");
                    let points = [];
                    for (const point of kml_points) {
                        points.push(point_from_coord(point.split(",")));
                    }
                    polygons.push(points);
                }
            }
            ret = { markers: markers, paths: paths, polygons: polygons };
        }
        else {
            console.error("Error while parsing KML string");
        }
        return ret;
    });
}
function point_from_coord(coords) {
    let lat = coords.length >= 2 ? Number.parseFloat(coords[1]) : 0.0;
    let lon = coords.length >= 1 ? Number.parseFloat(coords[0]) : 0.0;
    let alt = coords.length >= 3 ? Number.parseFloat(coords[2]) : 0.0;
    return new _neuron_interfaces__WEBPACK_IMPORTED_MODULE_0__.NeuronInterfacePoint(Number.isNaN(lat) ? 0.0 : lat, Number.isNaN(lon) ? 0.0 : lon, Number.isNaN(alt) ? 0.0 : alt);
}
function kml_download_from_neuron_data(markers, waypoints, polygons) {
    return __awaiter(this, void 0, void 0, function* () {
        const textXML = yield kml_data_from_neuron_data(markers, waypoints, polygons);
        const file = new Blob([textXML], {
            type: type_kml
        });
        (0,_neuron_tools_files__WEBPACK_IMPORTED_MODULE_1__.download_file)((0,_neuron_tools_files__WEBPACK_IMPORTED_MODULE_1__.get_filename)('kml'), file);
    });
}
function kmz_download_from_neuron_data(markers, waypoints, polygons) {
    return __awaiter(this, void 0, void 0, function* () {
        const textXML = yield kml_data_from_neuron_data(markers, waypoints, polygons);
        const kmz = yield get_kmz_from_kml_data(textXML);
        (0,_neuron_tools_files__WEBPACK_IMPORTED_MODULE_1__.download_file)((0,_neuron_tools_files__WEBPACK_IMPORTED_MODULE_1__.get_filename)('kmz'), kmz);
    });
}
function get_kmz_from_kml_data(data) {
    return __awaiter(this, void 0, void 0, function* () {
        // use a BlobWriter to store with a ZipWriter the zip into a Blob object
        const blobWriter = new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_2__.BlobWriter(type_kmz);
        const writer = new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_2__.ZipWriter(blobWriter);
        // use a TextReader to read the String to add
        yield writer.add("doc.kml", new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_2__.TextReader(data));
        // close the ZipReader
        yield writer.close();
        // get the zip file as a Blob
        return blobWriter.getData();
    });
}
function kml_data_from_neuron_data(markers, waypoints, polygons) {
    return __awaiter(this, void 0, void 0, function* () {
        let xmlDocument = document.implementation.createDocument("", "", null);
        const kmlNode = xmlDocument.createElement('kml');
        kmlNode.setAttribute('xmlns', 'http://www.opengis.net/kml/2.2');
        const documentNode = xmlDocument.createElement('Document');
        kmlNode.appendChild(documentNode);
        xmlDocument.appendChild(kmlNode);
        //Markers
        for (let i = 0; i < markers.length; i++) {
            documentNode.appendChild(kml_create_point_node(xmlDocument, markers[i].tag ? markers[i].tag : `Marker #${i + 1}`, markers[i].latitude, markers[i].longitude));
        }
        //Paths
        documentNode.appendChild(kml_create_path_node(xmlDocument, "flight-path", waypoints));
        //Polygons
        for (let i = 0; i < polygons.length; i++) {
            documentNode.appendChild(kml_create_polygon_node(xmlDocument, `polygon-${i + 1}`, polygons[i]));
        }
        return kml_document_to_string(xmlDocument);
    });
}
function kml_document_to_string(xmlDocument) {
    let textXML = new XMLSerializer().serializeToString(xmlDocument);
    return '<?xml version="1.0" encoding="UTF-8"?>' + textXML;
}
function kml_create_point_node(xmlDocument, name, lat, lng) {
    const placemarkNode = xmlDocument.createElement('Placemark');
    const nameNode = xmlDocument.createElement('name');
    nameNode.innerHTML = name;
    const descriptionNode = xmlDocument.createElement('description');
    const pointNode = xmlDocument.createElement('Point');
    const coordinatesNode = xmlDocument.createElement('coordinates');
    coordinatesNode.innerHTML = `${lng},${lat}`;
    placemarkNode.appendChild(nameNode);
    placemarkNode.appendChild(descriptionNode);
    placemarkNode.appendChild(pointNode);
    pointNode.appendChild(coordinatesNode);
    return placemarkNode;
}
function kml_create_path_node(xmlDocument, name, coordinates) {
    const placemarkNode = xmlDocument.createElement('Placemark');
    const nameNode = xmlDocument.createElement('name');
    nameNode.innerHTML = name;
    const descriptionNode = xmlDocument.createElement('description');
    const lineStringNode = xmlDocument.createElement('LineString');
    const coordinatesNode = xmlDocument.createElement('coordinates');
    const plist = coordinates.map(x => `${x.longitude},${x.latitude}`);
    coordinatesNode.innerHTML = plist.join(' ');
    placemarkNode.appendChild(nameNode);
    placemarkNode.appendChild(descriptionNode);
    placemarkNode.appendChild(lineStringNode);
    lineStringNode.appendChild(coordinatesNode);
    return placemarkNode;
}
function kml_create_polygon_node(xmlDocument, name, coordinates) {
    const placemarkNode = xmlDocument.createElement('Placemark');
    const nameNode = xmlDocument.createElement('name');
    nameNode.innerHTML = name;
    const descriptionNode = xmlDocument.createElement('description');
    const polygonNode = xmlDocument.createElement('Polygon');
    const boundaryNode = xmlDocument.createElement('outerBoundaryIs');
    const ringNode = xmlDocument.createElement('LinearRing');
    const coordinatesNode = xmlDocument.createElement('coordinates');
    const plist = coordinates.map(x => `${x.longitude},${x.latitude}`);
    coordinatesNode.innerHTML = plist.join(' ');
    placemarkNode.appendChild(nameNode);
    placemarkNode.appendChild(descriptionNode);
    placemarkNode.appendChild(polygonNode);
    polygonNode.appendChild(boundaryNode);
    boundaryNode.appendChild(ringNode);
    ringNode.appendChild(coordinatesNode);
    return placemarkNode;
}


/***/ }),

/***/ "./src/js/neuron_tools_survey.ts":
/*!***************************************!*\
  !*** ./src/js/neuron_tools_survey.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateGrid": () => (/* binding */ CreateGrid),
/* harmony export */   "GridPointTags": () => (/* binding */ GridPointTags),
/* harmony export */   "Rect": () => (/* binding */ Rect),
/* harmony export */   "StartPosition": () => (/* binding */ StartPosition)
/* harmony export */ });
/* harmony import */ var _neuron_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neuron_interfaces */ "./src/js/neuron_interfaces.ts");
/* harmony import */ var _interface_proj4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface_proj4 */ "./src/js/interface_proj4.ts");


var StartPosition;
(function (StartPosition) {
    // Home = 0,
    StartPosition[StartPosition["BottomLeft"] = 1] = "BottomLeft";
    StartPosition[StartPosition["TopLeft"] = 2] = "TopLeft";
    StartPosition[StartPosition["BottomRight"] = 3] = "BottomRight";
    StartPosition[StartPosition["TopRight"] = 4] = "TopRight";
    // Point = 5
})(StartPosition || (StartPosition = {}));
class Rect {
    constructor(Left = 0.0, Top = 0.0, Width = 0.0, Height = 0.0) {
        this.Left = Left;
        this.Top = Top;
        this.Right = Left + Width;
        this.Bottom = Top + Height;
    }
    Width() {
        return this.Right - this.Left;
    }
    Height() {
        return this.Bottom - this.Top;
    }
    MidWidth() {
        return ((this.Right - this.Left) / 2) + this.Left;
    }
    MidHeight() {
        return ((this.Top - this.Bottom) / 2) + this.Bottom;
    }
    diag_distance() {
        // Pythagoras
        return Math.sqrt(Math.pow(this.Width(), 2) + Math.pow(this.Height(), 2));
    }
}
function remove_item_from_array(array, item) {
    const index = array.indexOf(item);
    if (index > -1)
        array.splice(index, 1);
}
// Add an angle while normalizing output in the range 0...360
function AddAngle(angle, degrees) {
    angle += degrees;
    angle = angle % 360;
    if (angle < 0)
        angle += 360;
    return angle;
}
function FindLineIntersection(start1, end1, start2, end2) {
    let denom = ((end1.x - start1.x) * (end2.y - start2.y)) - ((end1.y - start1.y) * (end2.x - start2.x));
    //  AB & CD are parallel
    if (denom == 0)
        return new _interface_proj4__WEBPACK_IMPORTED_MODULE_1__.UTMPos();
    let numerator = ((start1.y - start2.y) * (end2.x - start2.x)) - ((start1.x - start2.x) * (end2.y - start2.y));
    let r = numerator / denom;
    let numerator2 = ((start1.y - start2.y) * (end1.x - start1.x)) - ((start1.x - start2.x) * (end1.y - start1.y));
    let s = numerator2 / denom;
    if ((r < 0 || r > 1) || (s < 0 || s > 1))
        return new _interface_proj4__WEBPACK_IMPORTED_MODULE_1__.UTMPos();
    // Find intersection point
    return new _interface_proj4__WEBPACK_IMPORTED_MODULE_1__.UTMPos(start1.x + (r * (end1.x - start1.x)), start1.y + (r * (end1.y - start1.y)), start1.zone);
}
function getPolyMinMax(utmpos) {
    if (utmpos.length == 0)
        return new Rect();
    let min_x, min_y, max_x, max_y = 0.0;
    min_x = max_x = utmpos[0].x;
    min_y = max_y = utmpos[0].y;
    for (const pnt of utmpos) {
        min_x = Math.min(min_x, pnt.x);
        max_x = Math.max(max_x, pnt.x);
        min_y = Math.min(min_y, pnt.y);
        max_y = Math.max(max_y, pnt.y);
    }
    return new Rect(min_x, max_y, max_x - min_x, min_y - max_y);
}
function PointInPolygon(p, poly) {
    let p1 = new _interface_proj4__WEBPACK_IMPORTED_MODULE_1__.UTMPos();
    let p2 = new _interface_proj4__WEBPACK_IMPORTED_MODULE_1__.UTMPos();
    let inside = false;
    if (poly.length < 3) {
        return inside;
    }
    let oldPoint = poly[poly.length - 1].copy();
    for (let i = 0; i < poly.length; i++) {
        let newPoint = poly[i].copy();
        if (newPoint.y > oldPoint.y) {
            p1 = oldPoint;
            p2 = newPoint;
        }
        else {
            p1 = newPoint;
            p2 = oldPoint;
        }
        if ((newPoint.y < p.y) == (p.y <= oldPoint.y)
            && (p.x - p1.x) * (p2.y - p1.y)
                < (p2.x - p1.x) * (p.y - p1.y)) {
            inside = !inside;
        }
        oldPoint = newPoint;
    }
    return inside;
}
function FindLineIntersectionExtension(start1, end1, start2, end2) {
    let denom = ((end1.x - start1.x) * (end2.y - start2.y)) - ((end1.y - start1.y) * (end2.x - start2.x));
    //  AB & CD are parallel
    if (denom == 0)
        return new _interface_proj4__WEBPACK_IMPORTED_MODULE_1__.UTMPos();
    let numerator = ((start1.y - start2.y) * (end2.x - start2.x)) - ((start1.x - start2.x) * (end2.y - start2.y));
    let r = numerator / denom;
    let numerator2 = ((start1.y - start2.y) * (end1.x - start1.x)) - ((start1.x - start2.x) * (end1.y - start1.y));
    let s = numerator2 / denom;
    if ((r < 0 || r > 1) || (s < 0 || s > 1)) {
        // line intersection is outside our lines.
    }
    // Find intersection point
    let result = new _interface_proj4__WEBPACK_IMPORTED_MODULE_1__.UTMPos(start1.x + (r * (end1.x - start1.x)), start1.y + (r * (end1.y - start1.y)), start1.zone);
    return result;
}
function findClosestPoint(start, list) {
    let answer = new _interface_proj4__WEBPACK_IMPORTED_MODULE_1__.UTMPos();
    let current_best = Number.MAX_VALUE;
    for (const pnt of list) {
        const dist1 = start.GetDistance2D(pnt);
        if (dist1 < current_best) {
            answer = pnt;
            current_best = dist1;
        }
    }
    return answer;
}
function findClosestLine(start, list, min_distance, angle) {
    if (min_distance != 0) {
        // By now, just add 5.000 km to our lines so they are long enough to allow intersection
        let METERS_TO_EXTEND = 5000;
        let perpendicularOrientation = AddAngle(angle, 90);
        // Calculation of a perpendicular line to the grid lines containing the "start" point
        /*
        *  --------------------------------------|------------------------------------------
        *  --------------------------------------|------------------------------------------
        *  -------------------------------------start---------------------------------------
        *  --------------------------------------|------------------------------------------
        *  --------------------------------------|------------------------------------------
        *  --------------------------------------|------------------------------------------
        *  --------------------------------------|------------------------------------------
        *  --------------------------------------|------------------------------------------
        */
        let start_perpendicular_line = start.relative_point_from_dist_bearing(perpendicularOrientation, -METERS_TO_EXTEND);
        let stop_perpendicular_line = start.relative_point_from_dist_bearing(perpendicularOrientation, METERS_TO_EXTEND);
        // Store one intersection point per grid line
        let intersectedPoints = new Map();
        // lets order distances from every intersected point per line with the "start" point
        let ordered_min_to_max = new Map();
        for (const line of list) {
            // Calculate intersection point
            let p = FindLineIntersectionExtension(line.p1, line.p2, start_perpendicular_line, stop_perpendicular_line);
            // Store it
            intersectedPoints.set(p, line);
            // Calculate distances between intersect point and "start" (i.e. line and start)
            let distance_p = start.GetDistance2D(p);
            if (!ordered_min_to_max.has(distance_p))
                ordered_min_to_max.set(distance_p, p);
        }
        // Acquire keys and sort them.
        let ordered_keys = Array.from(ordered_min_to_max.keys());
        ordered_keys.sort(function (a, b) {
            return a - b;
        });
        // Lets select a line that is the closest to "start" point but "min_distance" away at least.
        // If we have only one line, return that line whatever the minDistance says
        let key = Number.MAX_VALUE;
        let i = 0;
        while (key == Number.MAX_VALUE && i < ordered_keys.length) {
            if (ordered_keys[i] >= min_distance)
                key = ordered_keys[i];
            i++;
        }
        // If no line is selected (because all of them are closer than minDistance, then get the farthest one
        if (key == Number.MAX_VALUE)
            key = ordered_keys[ordered_keys.length - 1];
        let filtered_map = Array.from(intersectedPoints.entries()).filter(a => a[0].GetDistance2D(start) >= key);
        let filtered_lines = filtered_map.map(a => a[1]);
        return findClosestLine(start, filtered_lines, 0, angle);
    }
    else {
        let answer = list[0];
        let shortest = Number.MAX_VALUE;
        for (const line of list) {
            let ans1 = start.GetDistance2D(line.p1);
            let ans2 = start.GetDistance2D(line.p2);
            let shorter_pnt = ans1 < ans2 ? line.p1 : line.p2;
            if (shortest > start.GetDistance2D(shorter_pnt)) {
                answer = line;
                shortest = start.GetDistance2D(shorter_pnt);
            }
        }
        return answer;
    }
}
var GridPointTags;
(function (GridPointTags) {
    GridPointTags["START"] = "S";
    GridPointTags["END"] = "E";
    GridPointTags["MIDDLE"] = "M";
    GridPointTags["MIDDLE_START"] = "MS";
    GridPointTags["MIDDLE_END"] = "ME";
})(GridPointTags || (GridPointTags = {}));
const min_distance = 0.5;
/**
 * @param  {NeuronInterfacePoint[]} polygon List of points that define the survey polygon
 * @param  {number} altitude altitude to map to the final points
 * @param  {number} distance distance between lines
 * @param  {number} spacing Additional spacing between polygon and turns?  TODO: Figure out what this is meant to do?
 * @param  {number} angle angle of the survey pattern to follow (lane angle)
 * @param  {number} overshoot1 overshoot distance at the first "end" of the survey pattern
 * @param  {number} overshoot2 overshoot distance at the second "end" of the survey pattern
 * @param  {StartPosition} startpos selector for where the starting position should be
 * @param  {number} minLaneSeparation minimum lane separation/skip parameter (causes the lanes to alternate)
 * @param  {number} leadin additional lead-in to assist with mission planning for planes (allows more time for the plane to complete the turn before entering the survey stretch)
 */
function CreateGrid(polygon, altitude, distance, spacing, angle, overshoot1, overshoot2, startpos, 
// shutter:boolean,
minLaneSeparation, leadin) {
    if (spacing < 0.1 && spacing != 0)
        spacing = 0.1;
    if (distance < min_distance)
        distance = min_distance;
    if (polygon.length == 0)
        return [];
    // Make a non round number in case of corner cases
    if (minLaneSeparation != 0)
        minLaneSeparation += 0.5;
    // Lane Separation in meters
    const minLaneSeparationINMeters = minLaneSeparation * distance;
    const utm_zone = polygon[0].to_UTM().zone;
    // utm position list
    let utm_positions = polygon.map(x => x.to_UTM(utm_zone));
    // utm zone distance calcs will be done in
    // let utm_positions = utmpos.ToList(NeuronInterfacePoint.ToUTM(utm_zone, polygon), utm_zone);
    // let utm_positions = polygon;
    // close the loop if its not already
    if (!utm_positions[0].equals(utm_positions[utm_positions.length - 1]))
        utm_positions.push(utm_positions[0]); // make a full loop
    // get min/max of coverage area
    let area = getPolyMinMax(utm_positions);
    // get initial grid
    // used to determine the size of the outer grid area
    let diag_dist = area.diag_distance();
    // somewhere to store out generated lines
    let grid = [];
    // number of lines we need
    let lines = 0;
    // get start point middle
    let x = area.MidWidth();
    let y = area.MidHeight();
    let start_p = new _interface_proj4__WEBPACK_IMPORTED_MODULE_1__.UTMPos(x, y, utm_zone);
    // //UTMLine(new utmpos(x, y, utm_zone), "Base");
    // // get left extent
    // let xb1 = x;
    // let yb1 = y;
    // // to the left
    // new_pos(ref xb1, ref yb1, angle - 90, diag_dist / 2 + distance);
    // // backwards
    // new_pos(ref xb1, ref yb1, angle + 180, diag_dist / 2 + distance);
    // utmpos left = new utmpos(xb1, yb1, utm_zone);
    let left = start_p.relative_point_from_dist_bearing(angle - 90, diag_dist / 2 + distance).relative_point_from_dist_bearing(angle + 180, diag_dist / 2 + distance);
    ////UTMLine(left, "left");
    // get right extent
    // // double xb2 = x;
    // // double yb2 = y;
    // // // to the right
    // // new_pos(ref xb2, ref yb2, angle + 90, diag_dist / 2 + distance);
    // // // backwards
    // // new_pos(ref xb2, ref yb2, angle + 180, diag_dist / 2 + distance);
    // // utmpos right = new utmpos(xb2, yb2, utm_zone);
    // let right = start_p.relative_point_from_dist_bearing(angle + 90, diag_dist / 2 + distance).relative_point_from_dist_bearing(angle + 180, diag_dist / 2 + distance);
    ////UTMLine(right, "right");
    // set start point to left hand side
    x = left.x;
    y = left.y;
    // draw the outer grid, this is a grid that cover the entire area of the rectangle plus more.
    while (lines < ((diag_dist + distance * 2) / distance)) {
        // copy the start point to generate the end point
        let l_start = new _interface_proj4__WEBPACK_IMPORTED_MODULE_1__.UTMPos(x, y, utm_zone);
        let l_end = l_start.relative_point_from_dist_bearing(angle, diag_dist + distance * 2);
        // let nx = x;
        // let ny = y;
        // new_pos(ref nx, ref ny, angle, diag_dist + distance * 2);
        let line = new _interface_proj4__WEBPACK_IMPORTED_MODULE_1__.UTMLine(l_start, l_end, l_start.copy());
        // line.p1 = new utmpos(x, y, utm_zone);
        // line.p2 = new utmpos(nx, ny, utm_zone);
        // line.base_pnt = new utmpos(x, y, utm_zone);
        grid.push(line);
        // //UTMLine(line);
        // new_pos(ref x, ref y, angle + 90, distance);
        let l_next = l_start.relative_point_from_dist_bearing(angle + 90, distance);
        x = l_next.x;
        y = l_next.y;
        lines++;
    }
    // find intersections with our polygon
    // store lines that dont have any intersections
    let remove = [];
    let grid_no = grid.length;
    // cycle through our grid
    for (let a = 0; a < grid_no; a++) {
        let closest_distance = Number.MAX_VALUE;
        let farthest_distance = Number.MIN_VALUE;
        let closest_point = new _interface_proj4__WEBPACK_IMPORTED_MODULE_1__.UTMPos();
        let farthest_point = new _interface_proj4__WEBPACK_IMPORTED_MODULE_1__.UTMPos();
        // somewhere to store our intersections
        let matches = [];
        let crosses = 0;
        for (let b = 1; b < utm_positions.length; b++) {
            const utm_p1 = utm_positions[b - 1];
            const utm_p2 = utm_positions[b];
            let new_utmpos = FindLineIntersection(utm_p1, utm_p2, grid[a].p1, grid[a].p2);
            if (!(new_utmpos.equals(new _interface_proj4__WEBPACK_IMPORTED_MODULE_1__.UTMPos()))) {
                crosses++;
                matches.push(new_utmpos);
                if (closest_distance > grid[a].p1.GetDistance2D(new_utmpos)) {
                    closest_point.y = new_utmpos.y;
                    closest_point.x = new_utmpos.x;
                    closest_point.zone = new_utmpos.zone;
                    closest_distance = grid[a].p1.GetDistance2D(new_utmpos);
                }
                if (farthest_distance < grid[a].p1.GetDistance2D(new_utmpos)) {
                    farthest_point.y = new_utmpos.y;
                    farthest_point.x = new_utmpos.x;
                    farthest_point.zone = new_utmpos.zone;
                    farthest_distance = grid[a].p1.GetDistance2D(new_utmpos);
                }
            }
        }
        if (crosses == 0) // outside our polygon
         {
            if (!PointInPolygon(grid[a].p1, utm_positions) && !PointInPolygon(grid[a].p2, utm_positions))
                remove.push(grid[a]);
        }
        else if (crosses == 1) // bad - shouldn't happen
         {
        }
        else if (crosses == 2) // simple start and finish
         {
            let line = grid[a];
            line.p1 = closest_point;
            line.p2 = farthest_point;
            grid[a] = line;
        }
        else // multiple intersections
         {
            let line = grid[a];
            remove.push(line);
            while (matches.length > 1) {
                closest_point = findClosestPoint(closest_point, matches);
                const p1 = closest_point;
                remove_item_from_array(matches, closest_point);
                closest_point = findClosestPoint(closest_point, matches);
                const p2 = closest_point;
                remove_item_from_array(matches, closest_point);
                let newline = new _interface_proj4__WEBPACK_IMPORTED_MODULE_1__.UTMLine(p1, p2, line.base_pnt.copy());
                grid.push(newline);
            }
        }
    }
    // let grid_debug = [...grid];
    // let debug_points = [];
    // for(const line of grid_debug) {
    //     debug_points.push(line.p1);
    //     debug_points.push(line.p2);
    // }
    // cleanup and keep only lines that pass though our polygon
    for (const line of remove)
        remove_item_from_array(grid, line);
    if (grid.length == 0)
        return [];
    // return NeuronInterfacePoint.from_UTMs(debug_points);
    // pick start position based on initial point rectangle
    let start_pos_utm = null;
    switch (startpos) {
        default:
        // case StartPosition.Home:
        //     start_pos_utm = HomeLocation.to_UTM(utm_zone);
        //     break;
        case StartPosition.BottomLeft:
            start_pos_utm = new _interface_proj4__WEBPACK_IMPORTED_MODULE_1__.UTMPos(area.Left, area.Bottom, utm_zone);
            break;
        case StartPosition.BottomRight:
            start_pos_utm = new _interface_proj4__WEBPACK_IMPORTED_MODULE_1__.UTMPos(area.Right, area.Bottom, utm_zone);
            break;
        case StartPosition.TopLeft:
            start_pos_utm = new _interface_proj4__WEBPACK_IMPORTED_MODULE_1__.UTMPos(area.Left, area.Top, utm_zone);
            break;
        case StartPosition.TopRight:
            start_pos_utm = new _interface_proj4__WEBPACK_IMPORTED_MODULE_1__.UTMPos(area.Right, area.Top, utm_zone);
            break;
        // case StartPosition.Point:
        //     start_pos_utm = new UTMPos();
        //     start_pos_utm.zone = utm_zone;
        //     break;
    }
    // find the closes polygon point based from our startpos selection
    start_pos_utm = findClosestPoint(start_pos_utm, utm_positions);
    // find closest line point to startpos
    let closest = findClosestLine(start_pos_utm, grid, 0 /*Lane separation does not apply to starting point*/, angle);
    let last_pnt = new _interface_proj4__WEBPACK_IMPORTED_MODULE_1__.UTMPos();
    // get the closes point from the line we picked
    if (closest.p1.GetDistance2D(start_pos_utm) < closest.p2.GetDistance2D(start_pos_utm)) {
        last_pnt = closest.p1;
    }
    else {
        last_pnt = closest.p2;
    }
    let ans = [];
    while (grid.length > 0) {
        // for each line, check which end of the line is the next closest
        if (closest.p1.GetDistance2D(last_pnt) < closest.p2.GetDistance2D(last_pnt)) {
            let new_start = closest.p1.relative_point_from_dist_bearing(angle, -leadin);
            new_start.tag = GridPointTags.START;
            //UTMLine(new_start, "S");
            ans.push(new_start);
            if (leadin < 0) {
                var p2 = new_start.copy();
                p2.tag = GridPointTags.MIDDLE_START;
                //UTMLine(p2, "SM");
                ans.push(p2);
            }
            else if (leadin > 0) {
                closest.p1.tag = GridPointTags.MIDDLE_START;
                //UTMLine(closest.p1, "SM");
                ans.push(closest.p1);
            }
            if (spacing > 0) {
                for (let d = (spacing - ((closest.base_pnt.GetDistance2D(closest.p1)) % spacing)); d < (closest.p1.GetDistance2D(closest.p2)); d += spacing) {
                    // new_pos(ref ax, ref ay, angle, d);
                    let utmpos1 = new _interface_proj4__WEBPACK_IMPORTED_MODULE_1__.UTMPos(closest.p1.x, closest.p1.y, utm_zone, GridPointTags.MIDDLE);
                    //UTMLine(utmpos1, "M");
                    ans.push(utmpos1);
                }
            }
            let new_end = closest.p2.relative_point_from_dist_bearing(angle, overshoot1, GridPointTags.END);
            if (overshoot1 < 0) {
                var p2 = new_end.copy();
                p2.tag = GridPointTags.MIDDLE_END;
                //UTMLine(p2, "ME");
                ans.push(p2);
            }
            else if (overshoot1 > 0) {
                closest.p2.tag = GridPointTags.MIDDLE_END;
                //UTMLine(closest.p2, "ME");
                ans.push(closest.p2);
            }
            // new_end.tag = GridPointTags.END;
            //UTMLine(new_end, "E");
            ans.push(new_end);
            last_pnt = closest.p2;
            remove_item_from_array(grid, closest);
            if (grid.length == 0)
                break;
            closest = findClosestLine(new_end, grid, minLaneSeparationINMeters, angle);
        }
        else {
            let new_start = closest.p2.relative_point_from_dist_bearing(angle, leadin);
            new_start.tag = GridPointTags.START;
            //UTMLine(new_start, "S");
            ans.push(new_start);
            if (leadin < 0) {
                var p2 = new_start.copy();
                p2.tag = GridPointTags.MIDDLE_START;
                //UTMLine(p2, "SM");
                ans.push(p2);
            }
            else if (leadin > 0) {
                closest.p2.tag = GridPointTags.MIDDLE_START;
                //UTMLine(closest.p2, "SM");
                ans.push(closest.p2);
            }
            if (spacing > 0) {
                for (let d = ((closest.base_pnt.GetDistance2D(closest.p2)) % spacing); d < (closest.p1.GetDistance2D(closest.p2)); d += spacing) {
                    // let ax = closest.p2.x;
                    // let ay = closest.p2.y;
                    let a = closest.p2.relative_point_from_dist_bearing(angle, -d);
                    // new_pos(ref ax, ref ay, angle, -d);
                    var utmpos2 = new _interface_proj4__WEBPACK_IMPORTED_MODULE_1__.UTMPos(a.x, a.y, utm_zone, GridPointTags.MIDDLE);
                    //UTMLine(utmpos2, "M");
                    ans.push(utmpos2);
                }
            }
            let new_end = closest.p1.relative_point_from_dist_bearing(angle, -overshoot2, GridPointTags.END);
            // utmpos new_end = new_pos(closest.p1, angle, -overshoot2);
            if (overshoot2 < 0) {
                // var p2 = new_end.copy("ME");
                //UTMLine(p2, "ME");
                ans.push(new_end.copy(GridPointTags.MIDDLE_END));
            }
            else if (overshoot2 > 0) {
                // closest.p1.tag = "ME";
                //UTMLine(closest.p1, "ME");
                ans.push(closest.p1.copy(GridPointTags.MIDDLE_END));
            }
            // new_end.tag = "E";
            //UTMLine(new_end, "E");
            ans.push(new_end);
            last_pnt = closest.p1;
            // grid.Remove(closest);
            remove_item_from_array(grid, closest);
            if (grid.length == 0)
                break;
            closest = findClosestLine(new_end, grid, minLaneSeparationINMeters, angle);
        }
    }
    const points = _neuron_interfaces__WEBPACK_IMPORTED_MODULE_0__.NeuronInterfacePoint.from_UTMs(ans);
    // set the altitude on all points
    for (let p of points)
        p.altitude = altitude;
    return points;
}


/***/ }),

/***/ "./node_modules/leaflet/dist/images/layers-2x.png":
/*!********************************************************!*\
  !*** ./node_modules/leaflet/dist/images/layers-2x.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/8f2c4d11474275fbc161.png";

/***/ }),

/***/ "./node_modules/leaflet/dist/images/layers.png":
/*!*****************************************************!*\
  !*** ./node_modules/leaflet/dist/images/layers.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/416d91365b44e4b4f477.png";

/***/ }),

/***/ "./node_modules/leaflet/dist/images/marker-icon-2x.png":
/*!*************************************************************!*\
  !*** ./node_modules/leaflet/dist/images/marker-icon-2x.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/680f69f3c2e6b90c1812.png";

/***/ }),

/***/ "./node_modules/leaflet/dist/images/marker-icon.png":
/*!**********************************************************!*\
  !*** ./node_modules/leaflet/dist/images/marker-icon.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/2b3e1faf89f94a483539.png";

/***/ }),

/***/ "./node_modules/leaflet/dist/images/marker-shadow.png":
/*!************************************************************!*\
  !*** ./node_modules/leaflet/dist/images/marker-shadow.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/a0c6cc1401c107b501ef.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["libs_map","libs_util"], () => (__webpack_exec__("./src/js/index.ts")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.9713989f5fe79bc2e599.js.map