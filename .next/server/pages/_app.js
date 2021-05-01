module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "LZ34":
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ App; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/constants.tsx
const PRODUCTION_URL = 'https://burkspestcontrol.com';
/**
 * SEO constants
 */

const SEO_TITLE = 'Burks Pest Control';
const SEO_DESCRIPTION = 'A growing open-source collection of hand-crafted Chakra UI templates ready to drop into your React project.';
const SEO_KEYWORDS = 'burks pest control, burkspest control, burkspestcontrol, ooltewah tn, cleveland tn, ';
const SEO_OG_IMAGE = '../public/favicon.png';
const SEO_TWITTER_IMAGE = '../publick/twitter.png';
// CONCATENATED MODULE: ./components/SEO/SEO.tsx





const SEO = ({
  description = SEO_DESCRIPTION,
  keywords = SEO_KEYWORDS,
  title = SEO_TITLE,
  ogImage = SEO_OG_IMAGE,
  ogUrl = PRODUCTION_URL,
  twitterImage = SEO_TWITTER_IMAGE
}) => {
  const router = Object(router_["useRouter"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "keywords",
      content: keywords
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:title",
      content: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:description",
      content: description
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:image",
      content: ogImage
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:site_name",
      content: SEO_TITLE
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:url",
      content: `${ogUrl}${router.asPath}`
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:type",
      content: 'website'
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "twitter:title",
      content: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "twitter:description",
      content: description
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "twitter:image",
      content: twitterImage
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    })]
  });
};
/* harmony default export */ var SEO_SEO = (SEO);
// CONCATENATED MODULE: ./theme.tsx

const theme = Object(react_["extendTheme"])({
  config: {
    cssVarPrefix: "ck",
    initialColorMode: "light",
    useSystemColorMode: true
  },
  colors: {
    yellow: {
      500: '#ffff00'
    }
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georiga, serif",
    mono: "Menlo, monospace"
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem"
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: "bold" // Normally, it is "semibold"

      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px"
        }
      },
      // 3. We can add a new visual variant
      variants: {
        "with-shadow": {
          bg: "yellow.300",
          boxShadow: "0 0 2px 2px #efdfde"
        },
        "chakra-icon": {
          color: "black"
        },
        // 4. We can override existing variants
        solid: props => ({
          bg: props.colorMode === "dark" ? "yellow.500" : "dark"
        })
      }
    }
  }
});
/* harmony default export */ var theme_0 = (theme);
// CONCATENATED MODULE: ./pages/_app.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["ChakraProvider"], {
    theme: theme_0,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["CSSReset"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SEO_SEO, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))]
  });
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });