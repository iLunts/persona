(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/roma/github/persona/src/styles.less */"OW3D");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "OW3D":
/*!*************************!*\
  !*** ./src/styles.less ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--14-1!../node_modules/postcss-loader/src??embedded!../node_modules/less-loader/dist/cjs.js??ref--14-3!./styles.less */ "yxLz");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "yxLz":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--14-1!./node_modules/postcss-loader/src??embedded!./node_modules/less-loader/dist/cjs.js??ref--14-3!./src/styles.less ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Medium.eot\");\n  src: local(\"SF Pro Display Medium\"), local(\"SFProDisplay-Medium\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Medium.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Medium.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Medium.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Medium.ttf\") format(\"truetype\");\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Heavy.eot\");\n  src: local(\"SF Pro Display Heavy\"), local(\"SFProDisplay-Heavy\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Heavy.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Heavy.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Heavy.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Heavy.ttf\") format(\"truetype\");\n  font-weight: 900;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-UltralightItalic.eot\");\n  src: local(\"SF Pro Display UltralightItalic\"), local(\"SFProDisplay-UltralightItalic\"), url(\"/assets/fonts/sf-pro/SFProDisplay-UltralightItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-UltralightItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-UltralightItalic.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-UltralightItalic.ttf\") format(\"truetype\");\n  font-weight: 200;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-RegularItalic.eot\");\n  src: local(\"SF Pro Display Regular Italic\"), local(\"SFProDisplay-RegularItalic\"), url(\"/assets/fonts/sf-pro/SFProDisplay-RegularItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-RegularItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-RegularItalic.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-RegularItalic.ttf\") format(\"truetype\");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Thin.eot\");\n  src: local(\"SF Pro Display Thin\"), local(\"SFProDisplay-Thin\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Thin.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Thin.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Thin.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Thin.ttf\") format(\"truetype\");\n  font-weight: 100;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Light.eot\");\n  src: local(\"SF Pro Display Light\"), local(\"SFProDisplay-Light\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Light.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Light.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Light.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Light.ttf\") format(\"truetype\");\n  font-weight: 200;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-BlackItalic.eot\");\n  src: local(\"SF Pro Display Black Italic\"), local(\"SFProDisplay-BlackItalic\"), url(\"/assets/fonts/sf-pro/SFProDisplay-BlackItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-BlackItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-BlackItalic.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-BlackItalic.ttf\") format(\"truetype\");\n  font-weight: 900;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Bold.eot\");\n  src: local(\"SF Pro Display Bold\"), local(\"SFProDisplay-Bold\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Bold.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Bold.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Bold.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Bold.ttf\") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Black.eot\");\n  src: local(\"SF Pro Display Black\"), local(\"SFProDisplay-Black\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Black.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Black.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Black.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Black.ttf\") format(\"truetype\");\n  font-weight: 900;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-SemiboldItalic.eot\");\n  src: local(\"SF Pro Display SemiboldItalic\"), local(\"SFProDisplay-SemiboldItalic\"), url(\"/assets/fonts/sf-pro/SFProDisplay-SemiboldItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-SemiboldItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-SemiboldItalic.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-SemiboldItalic.ttf\") format(\"truetype\");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Ultralight.eot\");\n  src: local(\"SF Pro Display Ultralight\"), local(\"SFProDisplay-Ultralight\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Ultralight.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Ultralight.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Ultralight.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Ultralight.ttf\") format(\"truetype\");\n  font-weight: 200;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-LightItalic.eot\");\n  src: local(\"SF Pro Display LightItalic\"), local(\"SFProDisplay-LightItalic\"), url(\"/assets/fonts/sf-pro/SFProDisplay-LightItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-LightItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-LightItalic.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-LightItalic.ttf\") format(\"truetype\");\n  font-weight: 200;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-ThinItalic.eot\");\n  src: local(\"SF Pro Display ThinItalic\"), local(\"SFProDisplay-ThinItalic\"), url(\"/assets/fonts/sf-pro/SFProDisplay-ThinItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-ThinItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-ThinItalic.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-ThinItalic.ttf\") format(\"truetype\");\n  font-weight: 100;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-MediumItalic.eot\");\n  src: local(\"SF Pro Display MediumItalic\"), local(\"SFProDisplay-MediumItalic\"), url(\"/assets/fonts/sf-pro/SFProDisplay-MediumItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-MediumItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-MediumItalic.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-MediumItalic.ttf\") format(\"truetype\");\n  font-weight: 500;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Semibold.eot\");\n  src: local(\"SF Pro Display Semibold\"), local(\"SFProDisplay-Semibold\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Semibold.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Semibold.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Semibold.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Semibold.ttf\") format(\"truetype\");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-HeavyItalic.eot\");\n  src: local(\"SF Pro Display HeavyItalic\"), local(\"SFProDisplay-HeavyItalic\"), url(\"/assets/fonts/sf-pro/SFProDisplay-HeavyItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-HeavyItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-HeavyItalic.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-HeavyItalic.ttf\") format(\"truetype\");\n  font-weight: 900;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Regular.eot\");\n  src: local(\"SF Pro Display Regular\"), local(\"SFProDisplay-Regular\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Regular.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Regular.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Regular.ttf\") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-BoldItalic.eot\");\n  src: local(\"SF Pro Display BoldItalic\"), local(\"SFProDisplay-BoldItalic\"), url(\"/assets/fonts/sf-pro/SFProDisplay-BoldItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-BoldItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-BoldItalic.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-BoldItalic.ttf\") format(\"truetype\");\n  font-weight: bold;\n  font-style: italic;\n}\n.block {\n  position: relative;\n  overflow: hidden;\n}\n.block.block--green:after {\n  content: \"\";\n  position: absolute;\n  top: 5%;\n  right: -5%;\n  width: 60%;\n  height: 60%;\n  background: #3ec195;\n  background: radial-gradient(circle, #3ec195 0%, #000000 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#3ec195\", endColorstr=\"#000000\", GradientType=1);\n  filter: blur(200px);\n}\n.block.block--face-filter:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: -30%;\n  width: 60%;\n  height: 60%;\n  margin-top: -15%;\n  background: #3ec195;\n  background: radial-gradient(circle, #3ec195 0%, #000000 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#3ec195\", endColorstr=\"#000000\", GradientType=1);\n  filter: blur(400px);\n}\n.block.block--fun-mask:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  right: -30%;\n  width: 60%;\n  height: 60%;\n  margin-top: -15%;\n  background: #7433ff;\n  background: radial-gradient(circle, #7433ff 0%, #000000 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#7433ff\", endColorstr=\"#000000\", GradientType=1);\n  filter: blur(300px);\n}\n.block .block__possibilities-item:after {\n  content: \"\";\n  position: absolute;\n  top: -25%;\n  right: -25%;\n  width: 250px;\n  height: 250px;\n  filter: blur(100px);\n  z-index: 1;\n}\n.block .block__possibilities-item:nth-child(1):after {\n  background: #f0aaab;\n  background: radial-gradient(circle, #f0aaab 0%, #000000 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#f0aaab\", endColorstr=\"#000000\", GradientType=1);\n}\n.block .block__possibilities-item:nth-child(1) .block__possibilities-title {\n  color: #f0aaab;\n}\n.block .block__possibilities-item:nth-child(2):after {\n  background: #48b1fa;\n  background: radial-gradient(circle, #48b1fa 0%, #000000 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#48b1fa\", endColorstr=\"#000000\", GradientType=1);\n}\n.block .block__possibilities-item:nth-child(2) .block__possibilities-title {\n  color: #48b1fa;\n}\n.block .block__possibilities-item:nth-child(3):after {\n  background: #96e633;\n  background: radial-gradient(circle, #96e633 0%, #000000 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#96e633\", endColorstr=\"#000000\", GradientType=1);\n}\n.block .block__possibilities-item:nth-child(3) .block__possibilities-title {\n  color: #96e633;\n}\n.block {\n  position: relative;\n  overflow: hidden;\n  min-height: 600px;\n}\n.block.block--right .block__body {\n  flex-direction: row-reverse;\n}\n.block.block--center .block__body {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.block.block--center .block__title {\n  text-align: center;\n  max-width: 600px;\n}\n.block.block--center .block__desc {\n  max-width: 600px;\n  text-align: center;\n  margin: 0 auto;\n}\n.block .block__body {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 100px 0;\n  z-index: 1;\n}\n.block .block__item {\n  display: inline-flex;\n  width: 50%;\n}\n.block .block__item.block__item--img {\n  justify-content: center;\n}\n.block .block__item.block__item--img-no-padding .block__img {\n  margin-bottom: -100px;\n}\n.block .block__possibilities {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  justify-content: space-between;\n  margin-top: 90px;\n}\n.block .block__possibilities-item {\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.block .block__possibilities-item + .block__possibilities-item {\n  margin-left: 40px;\n}\n.block .block__possibilities-body {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background: rgba(255, 255, 255, 0.1);\n  max-width: 320px;\n  padding: 0 40px 40px 40px;\n  text-align: center;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  z-index: 2;\n}\n.block .block__possibilities-title {\n  font-size: 24px;\n  line-height: 34px;\n  font-weight: 600;\n  text-transform: uppercase;\n  max-width: 200px;\n  margin-bottom: 24px;\n}\n.block .block__possibilities-text {\n  font-size: 16px;\n  line-height: 28px;\n  font-weight: 400;\n}\n.block .block__possibilities-img {\n  height: 200px;\n}\n.block .block__logo {\n  margin-bottom: 60px;\n}\n.block .block__title {\n  font-size: 64px;\n  line-height: 74px;\n  margin-bottom: 20px;\n  font-weight: 700;\n  letter-spacing: 3px;\n}\n.block .block__desc {\n  font-size: 18px;\n  line-height: 30px;\n  margin-bottom: 52px;\n  font-weight: 400;\n  max-width: 390px;\n  color: #dfdfdf;\n}\n.block .block__gallery {\n  margin: 80px 0 0 0;\n}\n.btn {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  outline: none;\n  text-decoration: none;\n  box-shadow: none;\n  padding: 8px 20px;\n  border: 1px solid #fff;\n  box-sizing: border-box;\n  border-radius: 8px;\n  background: transparent;\n  color: #fff;\n}\n.btn.btn--store {\n  border: 1px solid #49e9b3;\n  min-width: 180px;\n  height: 52px;\n}\n.btn + .btn {\n  margin-left: 30px;\n}\nbody,\nhtml {\n  background: #000000;\n  color: #fff;\n  font-family: \"SF Pro Display\";\n  font-weight: 400;\n}\n* {\n  box-sizing: border-box;\n}\n", "",{"version":3,"sources":["webpack://src/styles.less","/Users/roma/github/persona/src/theme/reset.less","/Users/roma/github/persona/src/theme/fonts.less","/Users/roma/github/persona/src/theme/blocks/block-color.less","/Users/roma/github/persona/src/theme/blocks/block.less","/Users/roma/github/persona/src/theme/btn.less","/Users/roma/github/persona/src/styles.less"],"names":[],"mappings":"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","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Medium.eot\");\n  src: local(\"SF Pro Display Medium\"), local(\"SFProDisplay-Medium\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Medium.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Medium.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Medium.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Medium.ttf\") format(\"truetype\");\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Heavy.eot\");\n  src: local(\"SF Pro Display Heavy\"), local(\"SFProDisplay-Heavy\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Heavy.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Heavy.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Heavy.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Heavy.ttf\") format(\"truetype\");\n  font-weight: 900;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-UltralightItalic.eot\");\n  src: local(\"SF Pro Display UltralightItalic\"), local(\"SFProDisplay-UltralightItalic\"), url(\"/assets/fonts/sf-pro/SFProDisplay-UltralightItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-UltralightItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-UltralightItalic.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-UltralightItalic.ttf\") format(\"truetype\");\n  font-weight: 200;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-RegularItalic.eot\");\n  src: local(\"SF Pro Display Regular Italic\"), local(\"SFProDisplay-RegularItalic\"), url(\"/assets/fonts/sf-pro/SFProDisplay-RegularItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-RegularItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-RegularItalic.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-RegularItalic.ttf\") format(\"truetype\");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Thin.eot\");\n  src: local(\"SF Pro Display Thin\"), local(\"SFProDisplay-Thin\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Thin.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Thin.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Thin.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Thin.ttf\") format(\"truetype\");\n  font-weight: 100;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Light.eot\");\n  src: local(\"SF Pro Display Light\"), local(\"SFProDisplay-Light\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Light.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Light.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Light.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Light.ttf\") format(\"truetype\");\n  font-weight: 200;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-BlackItalic.eot\");\n  src: local(\"SF Pro Display Black Italic\"), local(\"SFProDisplay-BlackItalic\"), url(\"/assets/fonts/sf-pro/SFProDisplay-BlackItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-BlackItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-BlackItalic.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-BlackItalic.ttf\") format(\"truetype\");\n  font-weight: 900;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Bold.eot\");\n  src: local(\"SF Pro Display Bold\"), local(\"SFProDisplay-Bold\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Bold.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Bold.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Bold.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Bold.ttf\") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Black.eot\");\n  src: local(\"SF Pro Display Black\"), local(\"SFProDisplay-Black\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Black.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Black.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Black.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Black.ttf\") format(\"truetype\");\n  font-weight: 900;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-SemiboldItalic.eot\");\n  src: local(\"SF Pro Display SemiboldItalic\"), local(\"SFProDisplay-SemiboldItalic\"), url(\"/assets/fonts/sf-pro/SFProDisplay-SemiboldItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-SemiboldItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-SemiboldItalic.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-SemiboldItalic.ttf\") format(\"truetype\");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Ultralight.eot\");\n  src: local(\"SF Pro Display Ultralight\"), local(\"SFProDisplay-Ultralight\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Ultralight.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Ultralight.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Ultralight.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Ultralight.ttf\") format(\"truetype\");\n  font-weight: 200;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-LightItalic.eot\");\n  src: local(\"SF Pro Display LightItalic\"), local(\"SFProDisplay-LightItalic\"), url(\"/assets/fonts/sf-pro/SFProDisplay-LightItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-LightItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-LightItalic.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-LightItalic.ttf\") format(\"truetype\");\n  font-weight: 200;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-ThinItalic.eot\");\n  src: local(\"SF Pro Display ThinItalic\"), local(\"SFProDisplay-ThinItalic\"), url(\"/assets/fonts/sf-pro/SFProDisplay-ThinItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-ThinItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-ThinItalic.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-ThinItalic.ttf\") format(\"truetype\");\n  font-weight: 100;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-MediumItalic.eot\");\n  src: local(\"SF Pro Display MediumItalic\"), local(\"SFProDisplay-MediumItalic\"), url(\"/assets/fonts/sf-pro/SFProDisplay-MediumItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-MediumItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-MediumItalic.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-MediumItalic.ttf\") format(\"truetype\");\n  font-weight: 500;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Semibold.eot\");\n  src: local(\"SF Pro Display Semibold\"), local(\"SFProDisplay-Semibold\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Semibold.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Semibold.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Semibold.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Semibold.ttf\") format(\"truetype\");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-HeavyItalic.eot\");\n  src: local(\"SF Pro Display HeavyItalic\"), local(\"SFProDisplay-HeavyItalic\"), url(\"/assets/fonts/sf-pro/SFProDisplay-HeavyItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-HeavyItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-HeavyItalic.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-HeavyItalic.ttf\") format(\"truetype\");\n  font-weight: 900;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Regular.eot\");\n  src: local(\"SF Pro Display Regular\"), local(\"SFProDisplay-Regular\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Regular.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Regular.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-Regular.ttf\") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-BoldItalic.eot\");\n  src: local(\"SF Pro Display BoldItalic\"), local(\"SFProDisplay-BoldItalic\"), url(\"/assets/fonts/sf-pro/SFProDisplay-BoldItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/sf-pro/SFProDisplay-BoldItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/sf-pro/SFProDisplay-BoldItalic.woff\") format(\"woff\"), url(\"/assets/fonts/sf-pro/SFProDisplay-BoldItalic.ttf\") format(\"truetype\");\n  font-weight: bold;\n  font-style: italic;\n}\n.block {\n  position: relative;\n  overflow: hidden;\n}\n.block.block--green:after {\n  content: \"\";\n  position: absolute;\n  top: 5%;\n  right: -5%;\n  width: 60%;\n  height: 60%;\n  background: #3ec195;\n  background: -moz-radial-gradient(circle, #3ec195 0%, #000000 100%);\n  background: -webkit-radial-gradient(circle, #3ec195 0%, #000000 100%);\n  background: radial-gradient(circle, #3ec195 0%, #000000 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#3ec195\", endColorstr=\"#000000\", GradientType=1);\n  filter: blur(200px);\n}\n.block.block--face-filter:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: -30%;\n  width: 60%;\n  height: 60%;\n  margin-top: -15%;\n  background: #3ec195;\n  background: -moz-radial-gradient(circle, #3ec195 0%, #000000 100%);\n  background: -webkit-radial-gradient(circle, #3ec195 0%, #000000 100%);\n  background: radial-gradient(circle, #3ec195 0%, #000000 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#3ec195\", endColorstr=\"#000000\", GradientType=1);\n  filter: blur(400px);\n}\n.block.block--fun-mask:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  right: -30%;\n  width: 60%;\n  height: 60%;\n  margin-top: -15%;\n  background: #7433ff;\n  background: -moz-radial-gradient(circle, #7433ff 0%, #000000 100%);\n  background: -webkit-radial-gradient(circle, #7433ff 0%, #000000 100%);\n  background: radial-gradient(circle, #7433ff 0%, #000000 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#7433ff\", endColorstr=\"#000000\", GradientType=1);\n  filter: blur(300px);\n}\n.block .block__possibilities-item:after {\n  content: \"\";\n  position: absolute;\n  top: -25%;\n  right: -25%;\n  width: 250px;\n  height: 250px;\n  filter: blur(100px);\n  z-index: 1;\n}\n.block .block__possibilities-item:nth-child(1):after {\n  background: #f0aaab;\n  background: -moz-radial-gradient(circle, #f0aaab 0%, #000000 100%);\n  background: -webkit-radial-gradient(circle, #f0aaab 0%, #000000 100%);\n  background: radial-gradient(circle, #f0aaab 0%, #000000 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#f0aaab\", endColorstr=\"#000000\", GradientType=1);\n}\n.block .block__possibilities-item:nth-child(1) .block__possibilities-title {\n  color: #f0aaab;\n}\n.block .block__possibilities-item:nth-child(2):after {\n  background: #48b1fa;\n  background: -moz-radial-gradient(circle, #48b1fa 0%, #000000 100%);\n  background: -webkit-radial-gradient(circle, #48b1fa 0%, #000000 100%);\n  background: radial-gradient(circle, #48b1fa 0%, #000000 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#48b1fa\", endColorstr=\"#000000\", GradientType=1);\n}\n.block .block__possibilities-item:nth-child(2) .block__possibilities-title {\n  color: #48b1fa;\n}\n.block .block__possibilities-item:nth-child(3):after {\n  background: #96e633;\n  background: -moz-radial-gradient(circle, #96e633 0%, #000000 100%);\n  background: -webkit-radial-gradient(circle, #96e633 0%, #000000 100%);\n  background: radial-gradient(circle, #96e633 0%, #000000 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#96e633\", endColorstr=\"#000000\", GradientType=1);\n}\n.block .block__possibilities-item:nth-child(3) .block__possibilities-title {\n  color: #96e633;\n}\n.block {\n  position: relative;\n  overflow: hidden;\n  min-height: 600px;\n}\n.block.block--right .block__body {\n  flex-direction: row-reverse;\n}\n.block.block--center .block__body {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.block.block--center .block__title {\n  text-align: center;\n  max-width: 600px;\n}\n.block.block--center .block__desc {\n  max-width: 600px;\n  text-align: center;\n  margin: 0 auto;\n}\n.block .block__body {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 100px 0;\n  z-index: 1;\n}\n.block .block__item {\n  display: inline-flex;\n  width: 50%;\n}\n.block .block__item.block__item--img {\n  justify-content: center;\n}\n.block .block__item.block__item--img-no-padding .block__img {\n  margin-bottom: -100px;\n}\n.block .block__possibilities {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  justify-content: space-between;\n  margin-top: 90px;\n}\n.block .block__possibilities-item {\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.block .block__possibilities-item + .block__possibilities-item {\n  margin-left: 40px;\n}\n.block .block__possibilities-body {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background: rgba(255, 255, 255, 0.1);\n  max-width: 320px;\n  padding: 0 40px 40px 40px;\n  text-align: center;\n  backdrop-filter: blur(10px);\n  z-index: 2;\n}\n.block .block__possibilities-title {\n  font-size: 24px;\n  line-height: 34px;\n  font-weight: 600;\n  text-transform: uppercase;\n  max-width: 200px;\n  margin-bottom: 24px;\n}\n.block .block__possibilities-text {\n  font-size: 16px;\n  line-height: 28px;\n  font-weight: 400;\n}\n.block .block__possibilities-img {\n  height: 200px;\n}\n.block .block__logo {\n  margin-bottom: 60px;\n}\n.block .block__title {\n  font-size: 64px;\n  line-height: 74px;\n  margin-bottom: 20px;\n  font-weight: 700;\n  letter-spacing: 3px;\n}\n.block .block__desc {\n  font-size: 18px;\n  line-height: 30px;\n  margin-bottom: 52px;\n  font-weight: 400;\n  max-width: 390px;\n  color: #dfdfdf;\n}\n.block .block__gallery {\n  margin: 80px 0 0 0;\n}\n.btn {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  outline: none;\n  text-decoration: none;\n  box-shadow: none;\n  padding: 8px 20px;\n  border: 1px solid #fff;\n  box-sizing: border-box;\n  border-radius: 8px;\n  background: transparent;\n  color: #fff;\n}\n.btn.btn--store {\n  border: 1px solid #49e9b3;\n  min-width: 180px;\n  height: 52px;\n}\n.btn + .btn {\n  margin-left: 30px;\n}\nbody,\nhtml {\n  background: #000000;\n  color: #fff;\n  font-family: \"SF Pro Display\";\n  font-weight: 400;\n}\n* {\n  box-sizing: border-box;\n}\n","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n","@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Medium.eot\");\n  src: local(\"SF Pro Display Medium\"), local(\"SFProDisplay-Medium\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Medium.eot?#iefix\")\n      format(\"embedded-opentype\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Medium.woff2\") format(\"woff2\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Medium.woff\") format(\"woff\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Medium.ttf\") format(\"truetype\");\n  font-weight: 500;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Heavy.eot\");\n  src: local(\"SF Pro Display Heavy\"), local(\"SFProDisplay-Heavy\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Heavy.eot?#iefix\")\n      format(\"embedded-opentype\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Heavy.woff2\") format(\"woff2\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Heavy.woff\") format(\"woff\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Heavy.ttf\") format(\"truetype\");\n  font-weight: 900;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-UltralightItalic.eot\");\n  src: local(\"SF Pro Display UltralightItalic\"),\n    local(\"SFProDisplay-UltralightItalic\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-UltralightItalic.eot?#iefix\")\n      format(\"embedded-opentype\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-UltralightItalic.woff2\")\n      format(\"woff2\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-UltralightItalic.woff\")\n      format(\"woff\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-UltralightItalic.ttf\")\n      format(\"truetype\");\n  font-weight: 200;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-RegularItalic.eot\");\n  src: local(\"SF Pro Display Regular Italic\"),\n    local(\"SFProDisplay-RegularItalic\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-RegularItalic.eot?#iefix\")\n      format(\"embedded-opentype\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-RegularItalic.woff2\") format(\"woff2\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-RegularItalic.woff\") format(\"woff\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-RegularItalic.ttf\")\n      format(\"truetype\");\n  font-weight: normal;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Thin.eot\");\n  src: local(\"SF Pro Display Thin\"), local(\"SFProDisplay-Thin\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Thin.eot?#iefix\")\n      format(\"embedded-opentype\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Thin.woff2\") format(\"woff2\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Thin.woff\") format(\"woff\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Thin.ttf\") format(\"truetype\");\n  font-weight: 100;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Light.eot\");\n  src: local(\"SF Pro Display Light\"), local(\"SFProDisplay-Light\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Light.eot?#iefix\")\n      format(\"embedded-opentype\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Light.woff2\") format(\"woff2\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Light.woff\") format(\"woff\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Light.ttf\") format(\"truetype\");\n  font-weight: 200;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-BlackItalic.eot\");\n  src: local(\"SF Pro Display Black Italic\"), local(\"SFProDisplay-BlackItalic\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-BlackItalic.eot?#iefix\")\n      format(\"embedded-opentype\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-BlackItalic.woff2\") format(\"woff2\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-BlackItalic.woff\") format(\"woff\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-BlackItalic.ttf\") format(\"truetype\");\n  font-weight: 900;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Bold.eot\");\n  src: local(\"SF Pro Display Bold\"), local(\"SFProDisplay-Bold\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Bold.eot?#iefix\")\n      format(\"embedded-opentype\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Bold.woff2\") format(\"woff2\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Bold.woff\") format(\"woff\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Bold.ttf\") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Black.eot\");\n  src: local(\"SF Pro Display Black\"), local(\"SFProDisplay-Black\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Black.eot?#iefix\")\n      format(\"embedded-opentype\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Black.woff2\") format(\"woff2\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Black.woff\") format(\"woff\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Black.ttf\") format(\"truetype\");\n  font-weight: 900;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-SemiboldItalic.eot\");\n  src: local(\"SF Pro Display SemiboldItalic\"),\n    local(\"SFProDisplay-SemiboldItalic\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-SemiboldItalic.eot?#iefix\")\n      format(\"embedded-opentype\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-SemiboldItalic.woff2\")\n      format(\"woff2\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-SemiboldItalic.woff\") format(\"woff\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-SemiboldItalic.ttf\")\n      format(\"truetype\");\n  font-weight: 600;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Ultralight.eot\");\n  src: local(\"SF Pro Display Ultralight\"), local(\"SFProDisplay-Ultralight\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Ultralight.eot?#iefix\")\n      format(\"embedded-opentype\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Ultralight.woff2\") format(\"woff2\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Ultralight.woff\") format(\"woff\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Ultralight.ttf\") format(\"truetype\");\n  font-weight: 200;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-LightItalic.eot\");\n  src: local(\"SF Pro Display LightItalic\"), local(\"SFProDisplay-LightItalic\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-LightItalic.eot?#iefix\")\n      format(\"embedded-opentype\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-LightItalic.woff2\") format(\"woff2\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-LightItalic.woff\") format(\"woff\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-LightItalic.ttf\") format(\"truetype\");\n  font-weight: 200;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-ThinItalic.eot\");\n  src: local(\"SF Pro Display ThinItalic\"), local(\"SFProDisplay-ThinItalic\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-ThinItalic.eot?#iefix\")\n      format(\"embedded-opentype\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-ThinItalic.woff2\") format(\"woff2\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-ThinItalic.woff\") format(\"woff\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-ThinItalic.ttf\") format(\"truetype\");\n  font-weight: 100;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-MediumItalic.eot\");\n  src: local(\"SF Pro Display MediumItalic\"), local(\"SFProDisplay-MediumItalic\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-MediumItalic.eot?#iefix\")\n      format(\"embedded-opentype\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-MediumItalic.woff2\") format(\"woff2\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-MediumItalic.woff\") format(\"woff\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-MediumItalic.ttf\") format(\"truetype\");\n  font-weight: 500;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Semibold.eot\");\n  src: local(\"SF Pro Display Semibold\"), local(\"SFProDisplay-Semibold\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Semibold.eot?#iefix\")\n      format(\"embedded-opentype\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Semibold.woff2\") format(\"woff2\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Semibold.woff\") format(\"woff\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Semibold.ttf\") format(\"truetype\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-HeavyItalic.eot\");\n  src: local(\"SF Pro Display HeavyItalic\"), local(\"SFProDisplay-HeavyItalic\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-HeavyItalic.eot?#iefix\")\n      format(\"embedded-opentype\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-HeavyItalic.woff2\") format(\"woff2\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-HeavyItalic.woff\") format(\"woff\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-HeavyItalic.ttf\") format(\"truetype\");\n  font-weight: 900;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-Regular.eot\");\n  src: local(\"SF Pro Display Regular\"), local(\"SFProDisplay-Regular\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Regular.eot?#iefix\")\n      format(\"embedded-opentype\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Regular.woff2\") format(\"woff2\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Regular.woff\") format(\"woff\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-Regular.ttf\") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/assets/fonts/sf-pro/SFProDisplay-BoldItalic.eot\");\n  src: local(\"SF Pro Display BoldItalic\"), local(\"SFProDisplay-BoldItalic\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-BoldItalic.eot?#iefix\")\n      format(\"embedded-opentype\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-BoldItalic.woff2\") format(\"woff2\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-BoldItalic.woff\") format(\"woff\"),\n    url(\"/assets/fonts/sf-pro/SFProDisplay-BoldItalic.ttf\") format(\"truetype\");\n  font-weight: bold;\n  font-style: italic;\n}\n",".block {\n  position: relative;\n  overflow: hidden;\n\n  &&--green {\n    &:after {\n      content: \"\";\n      position: absolute;\n      top: 5%;\n      right: -5%;\n      width: 60%;\n      height: 60%;\n      background: rgb(62, 193, 149);\n      background: -moz-radial-gradient(\n        circle,\n        rgba(62, 193, 149, 1) 0%,\n        rgba(0, 0, 0, 1) 100%\n      );\n      background: -webkit-radial-gradient(\n        circle,\n        rgba(62, 193, 149, 1) 0%,\n        rgba(0, 0, 0, 1) 100%\n      );\n      background: radial-gradient(\n        circle,\n        rgba(62, 193, 149, 1) 0%,\n        rgba(0, 0, 0, 1) 100%\n      );\n      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#3ec195\",endColorstr=\"#000000\",GradientType=1);\n      filter: blur(200px);\n    }\n  }\n\n  &&--face-filter {\n    &:after {\n      content: \"\";\n      position: absolute;\n      top: 50%;\n      left: -30%;\n      width: 60%;\n      height: 60%;\n      margin-top: -15%;\n      background: rgb(62, 193, 149);\n      background: -moz-radial-gradient(\n        circle,\n        rgba(62, 193, 149, 1) 0%,\n        rgba(0, 0, 0, 1) 100%\n      );\n      background: -webkit-radial-gradient(\n        circle,\n        rgba(62, 193, 149, 1) 0%,\n        rgba(0, 0, 0, 1) 100%\n      );\n      background: radial-gradient(\n        circle,\n        rgba(62, 193, 149, 1) 0%,\n        rgba(0, 0, 0, 1) 100%\n      );\n      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#3ec195\",endColorstr=\"#000000\",GradientType=1);\n      filter: blur(400px);\n    }\n  }\n\n  &&--fun-mask {\n    &:after {\n      content: \"\";\n      position: absolute;\n      top: 50%;\n      right: -30%;\n      width: 60%;\n      height: 60%;\n      margin-top: -15%;\n      background: rgb(116, 51, 255);\n      background: -moz-radial-gradient(\n        circle,\n        rgba(116, 51, 255, 1) 0%,\n        rgba(0, 0, 0, 1) 100%\n      );\n      background: -webkit-radial-gradient(\n        circle,\n        rgba(116, 51, 255, 1) 0%,\n        rgba(0, 0, 0, 1) 100%\n      );\n      background: radial-gradient(\n        circle,\n        rgba(116, 51, 255, 1) 0%,\n        rgba(0, 0, 0, 1) 100%\n      );\n      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#7433ff\",endColorstr=\"#000000\",GradientType=1);\n      filter: blur(300px);\n    }\n  }\n\n  & &__possibilities {\n    &-item {\n      &:after {\n        content: \"\";\n        position: absolute;\n        top: -25%;\n        right: -25%;\n        width: 250px;\n        height: 250px;\n        filter: blur(100px);\n        z-index: 1;\n      }\n\n      &:nth-child(1) {\n        &:after {\n          background: rgb(240, 170, 171);\n          background: -moz-radial-gradient(\n            circle,\n            rgba(240, 170, 171, 1) 0%,\n            rgba(0, 0, 0, 1) 100%\n          );\n          background: -webkit-radial-gradient(\n            circle,\n            rgba(240, 170, 171, 1) 0%,\n            rgba(0, 0, 0, 1) 100%\n          );\n          background: radial-gradient(\n            circle,\n            rgba(240, 170, 171, 1) 0%,\n            rgba(0, 0, 0, 1) 100%\n          );\n          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#f0aaab\",endColorstr=\"#000000\",GradientType=1);\n        }\n\n        .block__possibilities-title {\n          color: #f0aaab;\n        }\n      }\n\n      &:nth-child(2) {\n        &:after {\n          background: rgb(72, 177, 250);\n          background: -moz-radial-gradient(\n            circle,\n            rgba(72, 177, 250, 1) 0%,\n            rgba(0, 0, 0, 1) 100%\n          );\n          background: -webkit-radial-gradient(\n            circle,\n            rgba(72, 177, 250, 1) 0%,\n            rgba(0, 0, 0, 1) 100%\n          );\n          background: radial-gradient(\n            circle,\n            rgba(72, 177, 250, 1) 0%,\n            rgba(0, 0, 0, 1) 100%\n          );\n          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#48b1fa\",endColorstr=\"#000000\",GradientType=1);\n        }\n\n        .block__possibilities-title {\n          color: #48b1fa;\n        }\n      }\n\n      &:nth-child(3) {\n        &:after {\n          background: rgb(150, 230, 51);\n          background: -moz-radial-gradient(\n            circle,\n            rgba(150, 230, 51, 1) 0%,\n            rgba(0, 0, 0, 1) 100%\n          );\n          background: -webkit-radial-gradient(\n            circle,\n            rgba(150, 230, 51, 1) 0%,\n            rgba(0, 0, 0, 1) 100%\n          );\n          background: radial-gradient(\n            circle,\n            rgba(150, 230, 51, 1) 0%,\n            rgba(0, 0, 0, 1) 100%\n          );\n          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#96e633\",endColorstr=\"#000000\",GradientType=1);\n        }\n\n        .block__possibilities-title {\n          color: #96e633;\n        }\n      }\n    }\n  }\n}\n","@import \"block-color.less\";\n\n.block {\n  position: relative;\n  overflow: hidden;\n  min-height: 600px;\n\n  &&--right {\n    .block__body {\n      flex-direction: row-reverse;\n    }\n  }\n\n  &&--center {\n    .block__body {\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n\n    .block__title {\n      text-align: center;\n      max-width: 600px;\n    }\n\n    .block__desc {\n      max-width: 600px;\n      text-align: center;\n      margin: 0 auto;\n    }\n  }\n\n  & &__body {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 100px 0;\n    z-index: 1;\n  }\n\n  & &__item {\n    display: inline-flex;\n    width: 50%;\n\n    &.block__item--img {\n      justify-content: center;\n    }\n\n    &.block__item--img-no-padding {\n      .block__img {\n        margin-bottom: -100px;\n      }\n    }\n  }\n\n  & &__possibilities {\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n    justify-content: space-between;\n    margin-top: 90px;\n\n    &-item {\n      position: relative;\n      border-radius: 8px;\n      overflow: hidden;\n\n      & + .block__possibilities-item {\n        margin-left: 40px;\n      }\n    }\n\n    &-body {\n      position: relative;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      background: rgba(255, 255, 255, 0.1);\n      max-width: 320px;\n      padding: 0 40px 40px 40px;\n      text-align: center;\n      backdrop-filter: blur(10px);\n      z-index: 2;\n    }\n\n    &-title {\n      font-size: 24px;\n      line-height: 34px;\n      font-weight: 600;\n      text-transform: uppercase;\n      max-width: 200px;\n      margin-bottom: 24px;\n    }\n\n    &-text {\n      font-size: 16px;\n      line-height: 28px;\n      font-weight: 400;\n    }\n\n    &-img {\n      height: 200px;\n    }\n  }\n\n  & &__logo {\n    margin-bottom: 60px;\n  }\n\n  & &__title {\n    font-size: 64px;\n    line-height: 74px;\n    margin-bottom: 20px;\n    font-weight: 700;\n    letter-spacing: 3px;\n  }\n\n  & &__desc {\n    font-size: 18px;\n    line-height: 30px;\n    margin-bottom: 52px;\n    font-weight: 400;\n    max-width: 390px;\n    color: #dfdfdf;\n  }\n\n  & &__gallery {\n    margin: 80px 0 0 0;\n  }\n}\n",".btn {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  outline: none;\n  text-decoration: none;\n  box-shadow: none;\n  padding: 8px 20px;\n  border: 1px solid #fff;\n  box-sizing: border-box;\n  border-radius: 8px;\n  background: transparent;\n  color: #fff;\n\n  &&--store {\n    border: 1px solid #49e9b3;\n    min-width: 180px;\n    height: 52px;\n  }\n\n  & + & {\n    margin-left: 30px;\n  }\n}\n","/* You can add global styles to this file, and also import other style files */\n\n@import \"theme/reset.less\";\n@import \"theme/fonts.less\";\n@import \"theme/blocks/block.less\";\n@import \"theme/btn.less\";\n\nbody,\nhtml {\n  background: #000000;\n  color: #fff;\n  font-family: \"SF Pro Display\";\n  font-weight: 400;\n}\n\n* {\n  box-sizing: border-box;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map