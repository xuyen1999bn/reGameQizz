// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/api/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var data = [{
  id: 1,
  level: "easy",
  quizze: {
    question: "Đâu là tên một bãi biển ở Quảng Bình?",
    answers: [{
      value: "A: Đá Lăn",
      name: "a",
      isCorrect: false
    }, {
      value: "B: Đá Chạy",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Đá Nhảy",
      name: "c",
      isCorrect: true
    }, {
      value: "D: Đá Bò",
      name: "d",
      isCorrect: false
    }],
    score: 200
  }
}, {
  id: 2,
  level: "easy",
  quizze: {
    question: "Thơ Hai-Cư là thể thơ truyển thống của nước nào?",
    answers: [{
      value: "A: Hàn Quốc",
      name: "a",
      isCorrect: false
    }, {
      value: "B: Nhật Bản",
      name: "b",
      isCorrect: true
    }, {
      value: "C: Triều Tiên",
      name: "c",
      isCorrect: false
    }, {
      value: "D: Mông Cổ",
      name: "d",
      isCorrect: false
    }],
    score: 200
  }
}, {
  id: 3,
  level: "easy",
  quizze: {
    question: "Đâu là tên một loại bánh Huế??",
    answers: [{
      value: "A: Khoái",
      name: "a",
      isCorrect: true
    }, {
      value: "B: Sướng",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Thích",
      name: "c",
      isCorrect: false
    }, {
      value: "D: Vui",
      name: "d",
      isCorrect: false
    }],
    score: 200
  }
}, {
  id: 4,
  level: "easy",
  quizze: {
    question: "Nhạc sĩ nào là người sáng tác ca khúc Cây Đàn Sinh Viên?",
    answers: [{
      value: "A: Bảo Chấn",
      name: "a",
      isCorrect: false
    }, {
      value: "B: Trịnh Công Sơn",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Trần Tiến",
      name: "c",
      isCorrect: false
    }, {
      value: "D: Quốc An",
      name: "d",
      isCorrect: true
    }],
    score: 500
  }
}, {
  id: 5,
  level: "easy",
  quizze: {
    question: "Bộ phim Chị Dậu được chuyển thể từ tác phẩm nào?",
    answers: [{
      value: "A: Người mẹ cầm súng",
      name: "a",
      isCorrect: false
    }, {
      value: "B: Vợ chồng A Phủ",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Tuổi thơ dữ dội",
      name: "c",
      isCorrect: false
    }, {
      value: "D: Tắt đèn",
      name: "d",
      isCorrect: true
    }],
    score: 500
  }
}, {
  id: 6,
  level: "normal",
  quizze: {
    question: "Trên Nhấp Dưới Giật Là Đang Làm gì?",
    answers: [{
      value: "A: Chơi Bóng Bàn",
      name: "a",
      isCorrect: false
    }, {
      value: "B: Đang Học",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Trộm Cắp",
      name: "c",
      isCorrect: false
    }, {
      value: "D: Câu Cá",
      name: "d",
      isCorrect: true
    }],
    score: 500
  }
}, {
  id: 7,
  level: "easy",
  quizze: {
    question: "Con Đường Dài Nhất Là Con Đường Nào?",
    answers: [{
      value: "A: Đường Đời",
      name: "a",
      isCorrect: true
    }, {
      value: "B: Đường Đi Nước Ngoài",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Đường Đèo",
      name: "c",
      isCorrect: false
    }, {
      value: "D: Đường Đi",
      name: "d",
      isCorrect: false
    }],
    score: 200
  }
}, {
  id: 8,
  level: "easy",
  quizze: {
    question: "Con gì đầu dê mình ốc?",
    answers: [{
      value: "A: Con Ốc",
      name: "a",
      isCorrect: false
    }, {
      value: "B: Con Mương",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Con Đường",
      name: "c",
      isCorrect: false
    }, {
      value: "D: Con Dốc",
      name: "d",
      isCorrect: true
    }],
    score: 200
  }
}, {
  id: 9,
  level: "easy",
  quizze: {
    question: "Cái gì của chồng mà vợ thích cầm nhất?",
    answers: [{
      value: "A: Tiền",
      name: "a",
      isCorrect: true
    }, {
      value: "B: Sách",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Tay",
      name: "c",
      isCorrect: false
    }, {
      value: "D: Nhẫn",
      name: "d",
      isCorrect: false
    }],
    score: 200
  }
}, {
  id: 10,
  level: "hard",
  quizze: {
    question: "Giải Grand Slam đầu tiên trong năm là giải nào?",
    answers: [{
      value: "A: Austrlia mở rộng",
      name: "a",
      isCorrect: true
    }, {
      value: "B: Wimbledon",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Roland Garos",
      name: "c",
      isCorrect: false
    }, {
      value: "D: Mỹ mở rộng",
      name: "d",
      isCorrect: false
    }],
    score: 1000
  }
}, {
  id: 11,
  level: "hard",
  quizze: {
    question: "AFC Asian Cup 2011 được tổ chức tại quốc gia nào?",
    answers: [{
      value: "A: Qatar",
      name: "a",
      isCorrect: true
    }, {
      value: "B: Hàn Quốc",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Nhật Bản",
      name: "c",
      isCorrect: false
    }, {
      value: "D: Iraq",
      name: "d",
      isCorrect: false
    }],
    score: 1000
  }
}, {
  id: 12,
  level: "normal",
  quizze: {
    question: "Sông Bến Hải và sông Thạch Hãn nằm ở tỉnh nào?",
    answers: [{
      value: "A: Quảng Bình",
      name: "a",
      isCorrect: false
    }, {
      value: "B: Quảng Ninh",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Quảng Trị",
      name: "c",
      isCorrect: true
    }, {
      value: "D: Quảng Ngãi",
      name: "d",
      isCorrect: false
    }],
    score: 500
  }
}, {
  id: 13,
  level: "hard",
  quizze: {
    question: "Đại Ngu là quốc hiệu của triều đại nào?",
    answers: [{
      value: "A: Triều Ngô",
      name: "a",
      isCorrect: false
    }, {
      value: "B: Triều Hồ",
      name: "b",
      isCorrect: true
    }, {
      value: "C: Các chúa Nguyễn",
      name: "c",
      isCorrect: false
    }, {
      value: "D: Nhà Tây Sơn",
      name: "d",
      isCorrect: false
    }],
    score: 1000
  }
}, {
  id: 14,
  level: "normal",
  quizze: {
    question: "Vườn quốc gia nào hiện không nằm trong danh sách Vườn di sản ASEAN?",
    answers: [{
      value: "A:  Vườn quốc gia Kon Ka Kinh",
      name: "a",
      isCorrect: false
    }, {
      value: "B: Vườn quốc gia Tam Đảo",
      name: "b",
      isCorrect: true
    }, {
      value: "C: Vườn quốc gia Chư Mom Ray",
      name: "c",
      isCorrect: false
    }, {
      value: "D: Vườn quốc gia Bái Tử Long",
      name: "d",
      isCorrect: false
    }],
    score: 1000
  }
}, {
  id: 15,
  level: "normal",
  quizze: {
    question: "Hoa hậu Hòa bình Quốc tế 2017 đã được tổ chức tại quốc gia nào?",
    answers: [{
      value: "A: Thái Lan",
      name: "a",
      isCorrect: false
    }, {
      value: "B: Việt Nam",
      name: "b",
      isCorrect: true
    }, {
      value: "C: Lào",
      name: "c",
      isCorrect: false
    }, {
      value: "D: Campuchia",
      name: "d",
      isCorrect: false
    }],
    score: 500
  }
}, {
  id: 16,
  level: "easy",
  quizze: {
    question: "Lễ hội đua bò bảy núi là lễ hội đặc sắc của dân tộc nào sau đây?",
    answers: [{
      value: "A: Thái",
      name: "a",
      isCorrect: false
    }, {
      value: "B: Chăm",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Tày",
      name: "c",
      isCorrect: false
    }, {
      value: "D: Khmer",
      name: "d",
      isCorrect: true
    }],
    score: 200
  }
}, {
  id: 17,
  level: "easy",
  quizze: {
    question: "Trong các cây cầu sau, cầu nào là cầu xoay?",
    answers: [{
      value: "A: Cầu Thanh Trì",
      name: "a",
      isCorrect: false
    }, {
      value: "B: Cầu Thị Nại",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Cầu Sông Hàn",
      name: "c",
      isCorrect: true
    }, {
      value: "D: Cầu Cần Thơ",
      name: "d",
      isCorrect: false
    }],
    score: 200
  }
}, {
  id: 18,
  level: "easy",
  quizze: {
    question: "Các vua Hùng đặt quốc hiệu nước ta là gì?",
    answers: [{
      value: "A: Văn Lang",
      name: "a",
      isCorrect: true
    }, {
      value: "B: Âu Lạc",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Vạn Xuân",
      name: "c",
      isCorrect: false
    }, {
      value: "D: Đại Việt",
      name: "d",
      isCorrect: false
    }],
    score: 300
  }
}, {
  id: 19,
  level: "easy",
  quizze: {
    question: "An Dương Vương đặt quốc hiệu nước ta là gì?",
    answers: [{
      value: "A: Âu Lạc",
      name: "a",
      isCorrect: true
    }, {
      value: "B: Vạn Xuân",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Đại Cồ Việt",
      name: "c",
      isCorrect: false
    }, {
      value: "D: Đại Việt",
      name: "d",
      isCorrect: false
    }],
    score: 200
  }
}];
var _default = data;
exports.default = _default;
},{}],"node_modules/@babel/runtime/helpers/classCallCheck.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],"node_modules/@babel/runtime/helpers/createClass.js":[function(require,module,exports) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],"node_modules/@babel/runtime/helpers/setPrototypeOf.js":[function(require,module,exports) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],"node_modules/@babel/runtime/helpers/inherits.js":[function(require,module,exports) {
var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"./setPrototypeOf":"node_modules/@babel/runtime/helpers/setPrototypeOf.js"}],"node_modules/@babel/runtime/helpers/typeof.js":[function(require,module,exports) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],"node_modules/@babel/runtime/helpers/assertThisInitialized.js":[function(require,module,exports) {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],"node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":[function(require,module,exports) {
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":"node_modules/@babel/runtime/helpers/typeof.js","./assertThisInitialized":"node_modules/@babel/runtime/helpers/assertThisInitialized.js"}],"node_modules/@babel/runtime/helpers/getPrototypeOf.js":[function(require,module,exports) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],"src/utils/createState.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createState;

function createState(initialState) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _setters = [];
  var _state = initialState;
  var _prevState = "default";
  var _listeners = [];

  var _compare;

  function _callListeners() {
    _listeners.forEach(function (listener) {
      listener(_state);
    });
  }

  function _callCompare() {
    if (!_compare) {
      return _callListeners();
    }

    var _isUpdate = _compare(_prevState, _state);

    _isUpdate && _callListeners();
  }

  function get() {
    return _state;
  }

  function select(callback) {
    _setters.push(callback);
  }

  function selectAsync() {
    return new Promise(function (resolve) {
      select(resolve);
    });
  }

  function set(state) {
    _prevState = _state;
    _state = state;

    if (config.isLocalStorage) {
      localStorage.setItem(config.stateName, state);
    }

    _setters.forEach(function (setter) {
      return setter(_state);
    });

    _callCompare();

    return {
      prevState: _prevState,
      state: _state
    };
  }

  function update(getState) {
    return set(getState(_state));
  }

  function subscribe(listener) {
    var state = localStorage.getItem(config.stateName);

    if (config.isLocalStorage && !!state) {
      try {
        _state = JSON.parse(state);
      } catch (err) {
        _state = state;
      }
    }

    _listeners.push(listener);
  }

  function shouldUpdate(compare) {
    _compare = compare;
  }

  return {
    get: get,
    set: set,
    select: select,
    selectAsync: selectAsync,
    update: update,
    subscribe: subscribe,
    shouldUpdate: shouldUpdate
  };
}
},{}],"node_modules/@babel/runtime/helpers/defineProperty.js":[function(require,module,exports) {
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
},{}],"node_modules/@babel/runtime/helpers/arrayWithHoles.js":[function(require,module,exports) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
},{}],"node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":[function(require,module,exports) {
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
},{}],"node_modules/@babel/runtime/helpers/arrayLikeToArray.js":[function(require,module,exports) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
},{}],"node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
},{"./arrayLikeToArray":"node_modules/@babel/runtime/helpers/arrayLikeToArray.js"}],"node_modules/@babel/runtime/helpers/nonIterableRest.js":[function(require,module,exports) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
},{}],"node_modules/@babel/runtime/helpers/slicedToArray.js":[function(require,module,exports) {
var arrayWithHoles = require("./arrayWithHoles");

var iterableToArrayLimit = require("./iterableToArrayLimit");

var unsupportedIterableToArray = require("./unsupportedIterableToArray");

var nonIterableRest = require("./nonIterableRest");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
},{"./arrayWithHoles":"node_modules/@babel/runtime/helpers/arrayWithHoles.js","./iterableToArrayLimit":"node_modules/@babel/runtime/helpers/iterableToArrayLimit.js","./unsupportedIterableToArray":"node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js","./nonIterableRest":"node_modules/@babel/runtime/helpers/nonIterableRest.js"}],"src/utils/logger.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = logger;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function logger(func) {
  if ("development" === "production") {
    return func;
  }

  var date = new Date();
  var hour = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  return function () {
    var state = func.apply(void 0, arguments);
    return Object.entries(state).reduce(function (obj, _ref) {
      var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
          key = _ref2[0],
          func = _ref2[1];

      return _objectSpread(_objectSpread({}, obj), {}, (0, _defineProperty2.default)({}, key, function () {
        var result = func.apply(void 0, arguments);

        if (result && !["get", "subscribe"].includes(key)) {
          var prevState = result.prevState,
              _state = result.state;
          console.group("%c action", "color: #999", "".concat(key, " @").concat(hour));
          console.log("%c prev state ", "color: #999; font-weight: 600", prevState);
          console.log("%c next state ", "color: #7ac143; font-weight: 600", _state);
          console.groupEnd();
        }

        return result;
      }));
    }, {});
  };
}
},{"@babel/runtime/helpers/defineProperty":"node_modules/@babel/runtime/helpers/defineProperty.js","@babel/runtime/helpers/slicedToArray":"node_modules/@babel/runtime/helpers/slicedToArray.js"}],"src/utils/random.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var random = {
  fromTo: function fromTo(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  withArray: function withArray(arr) {
    var index = this.fromTo(0, arr.length - 1);
    return arr[index];
  },
  ramdomAllvalue: function ramdomAllvalue(arr) {
    return arr.sort(function () {
      return Math.random() - 0.5;
    });
  }
};
var _default = random;
exports.default = _default;
},{}],"src/utils/counter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function counter(option) {
  var defaultOption = {
    from: 20,
    to: 0,
    onStart: function onStart() {},
    onChange: function onChange() {},
    onEnd: function onEnd() {}
  };

  var options = _objectSpread(_objectSpread({}, defaultOption), option);

  var from = options.from;
  var to = options.to,
      onStart = options.onStart,
      onChange = options.onChange,
      onEnd = options.onEnd;
  var ONE_SECONDS = 1000;

  if (from === to) {
    throw new Error("Bạn Cần xét giá trị from và to khác nhau");
  }

  onStart();
  var id = setInterval(function () {
    if (from > to) {
      from--;
    } else {
      from++;
    }

    onChange(from);

    if (from === to) {
      onEnd();
      clearInterval(id);
    }
  }, ONE_SECONDS);
  return {
    clear: function clear() {
      onEnd();
      clearInterval(id);
    }
  };
}

var _default = counter;
exports.default = _default;
},{"@babel/runtime/helpers/defineProperty":"node_modules/@babel/runtime/helpers/defineProperty.js"}],"src/utils/Container.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Container = /*#__PURE__*/function () {
  function Container(props) {
    (0, _classCallCheck2.default)(this, Container);
    this.props = _objectSpread(_objectSpread({}, this.constructor.defaultProps), props);
    this.start();
    this.init();
  }

  (0, _createClass2.default)(Container, [{
    key: "start",
    value: function start() {}
  }, {
    key: "init",
    value: function init() {}
  }]);
  return Container;
}();

exports.default = Container;
Container.defaultProps = {};
},{"@babel/runtime/helpers/defineProperty":"node_modules/@babel/runtime/helpers/defineProperty.js","@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js"}],"node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
},{"./arrayLikeToArray":"node_modules/@babel/runtime/helpers/arrayLikeToArray.js"}],"node_modules/@babel/runtime/helpers/iterableToArray.js":[function(require,module,exports) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
},{}],"node_modules/@babel/runtime/helpers/nonIterableSpread.js":[function(require,module,exports) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
},{}],"node_modules/@babel/runtime/helpers/toConsumableArray.js":[function(require,module,exports) {
var arrayWithoutHoles = require("./arrayWithoutHoles");

var iterableToArray = require("./iterableToArray");

var unsupportedIterableToArray = require("./unsupportedIterableToArray");

var nonIterableSpread = require("./nonIterableSpread");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
},{"./arrayWithoutHoles":"node_modules/@babel/runtime/helpers/arrayWithoutHoles.js","./iterableToArray":"node_modules/@babel/runtime/helpers/iterableToArray.js","./unsupportedIterableToArray":"node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js","./nonIterableSpread":"node_modules/@babel/runtime/helpers/nonIterableSpread.js"}],"src/api/config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
var config = {
  maximum_question: 9,
  help_5050: true,
  help_call: true,
  help_looker: true
};
exports.config = config;
},{}],"src/utils/randomQuestion.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listquestion = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _data = _interopRequireDefault(require("../api/data"));

var _utils = require("../utils");

var _config = require("../api/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function levelEasy(data) {
  return data.filter(function (item) {
    return item.level === "easy";
  });
}

function levelNormal(data) {
  return data.filter(function (item) {
    return item.level === "normal";
  });
}

function levelHard(data) {
  return data.filter(function (item) {
    return item.level === "hard";
  });
}

function listQuestion() {
  var easy = _utils.random.ramdomAllvalue(levelEasy(_data.default));

  var normal = _utils.random.ramdomAllvalue(levelNormal(_data.default));

  var hard = _utils.random.ramdomAllvalue(levelHard(_data.default));

  return {
    easy: [].concat((0, _toConsumableArray2.default)(easy), (0, _toConsumableArray2.default)(normal)),
    normal: [].concat((0, _toConsumableArray2.default)(normal), (0, _toConsumableArray2.default)(hard)),
    hard: (0, _toConsumableArray2.default)(hard)
  };
}

var questions = _config.config.maximum_question / 3;
var listquestion = [].concat((0, _toConsumableArray2.default)(listQuestion().easy.slice(0, 6)), (0, _toConsumableArray2.default)(listQuestion().normal.slice(0, 5)), (0, _toConsumableArray2.default)(listQuestion().hard.slice(0, 4)));
exports.listquestion = listquestion;
},{"@babel/runtime/helpers/toConsumableArray":"node_modules/@babel/runtime/helpers/toConsumableArray.js","../api/data":"src/api/data.js","../utils":"src/utils/index.js","../api/config":"src/api/config.js"}],"src/utils/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createState", {
  enumerable: true,
  get: function () {
    return _createState.default;
  }
});
Object.defineProperty(exports, "logger", {
  enumerable: true,
  get: function () {
    return _logger.default;
  }
});
Object.defineProperty(exports, "random", {
  enumerable: true,
  get: function () {
    return _random.default;
  }
});
Object.defineProperty(exports, "counter", {
  enumerable: true,
  get: function () {
    return _counter.default;
  }
});
Object.defineProperty(exports, "Container", {
  enumerable: true,
  get: function () {
    return _Container.default;
  }
});
Object.defineProperty(exports, "listquestion", {
  enumerable: true,
  get: function () {
    return _randomQuestion.listquestion;
  }
});

var _createState = _interopRequireDefault(require("./createState"));

var _logger = _interopRequireDefault(require("./logger"));

var _random = _interopRequireDefault(require("./random"));

var _counter = _interopRequireDefault(require("./counter"));

var _Container = _interopRequireDefault(require("./Container"));

var _randomQuestion = require("./randomQuestion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./createState":"src/utils/createState.js","./logger":"src/utils/logger.js","./random":"src/utils/random.js","./counter":"src/utils/counter.js","./Container":"src/utils/Container.js","./randomQuestion":"src/utils/randomQuestion.js"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/templates/HomeScreen/home.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "container": "_container_a8d46",
  "form": "_form_a8d46",
  "title": "_title_a8d46",
  "name": "_name_a8d46",
  "inputname": "_inputname_a8d46",
  "btn": "_btn_a8d46",
  "textwarning": "_textwarning_a8d46"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/templates/button/button.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "btn": "_btn_a4a77"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/templates/HomeScreen/HomeScreen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _home = _interopRequireDefault(require("./home.scss"));

var _button = _interopRequireDefault(require("../button/button.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HomeScreen(props) {
  return (
    /*html*/
    "\n      <div class=\"".concat(_home.default.container, "\">\n            <form class=\"").concat(_home.default.form, "\">\n                <h1 class=\"").concat(_home.default.title, "\">").concat(props.title, "</h1>\n                <div class=\"").concat(_home.default.name, "\">").concat(props.text, "</div>\n                <input type=\"text\" id=\"").concat(props.inputId, "\" class=\"").concat(_home.default.inputname, "\">\n                <button id=\"").concat(props.buttonStartId, "\" class=\"").concat(_button.default.btn, "\">").concat(props.buttonStartText, "</button>\n            </form>\n      </div>\n      ")
  );
}

var _default = HomeScreen;
exports.default = _default;
},{"./home.scss":"src/templates/HomeScreen/home.scss","../button/button.scss":"src/templates/button/button.scss"}],"src/api/content.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textHomeScreen = void 0;
var textHomeScreen = {
  title: "Ai Là Triệu Phú",
  text: "Vui Lòng Nhập Tên Của Bạn",
  buttonStartText: "Bắt Đầu",
  inputId: "inputName",
  buttonStartId: "buttonStartId"
};
exports.textHomeScreen = textHomeScreen;
},{}],"src/store/createUserName.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

function createUserName() {
  var _createState = (0, _utils.createState)(""),
      get = _createState.get,
      set = _createState.set,
      select = _createState.select,
      selectAsync = _createState.selectAsync,
      subscribe = _createState.subscribe,
      update = _createState.update,
      shouldUpdate = _createState.shouldUpdate;

  shouldUpdate(function (prevUserName, userName) {
    if (!userName) {
      return false;
    }

    return true;
  });
  return {
    get: get,
    set: set,
    select: select,
    selectAsync: selectAsync,
    subscribe: subscribe,
    setUserName: function setUserName(name) {
      return update(function () {
        return name;
      });
    }
  };
}

var userName = (0, _utils.logger)(createUserName)();
var _default = userName;
exports.default = _default;
},{"../utils":"src/utils/index.js"}],"src/store/createCurrentIndex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

function createCurrentIndex() {
  var _createState = (0, _utils.createState)(0),
      get = _createState.get,
      update = _createState.update,
      subscribe = _createState.subscribe,
      set = _createState.set,
      select = _createState.select;

  var resetCurrentIndex = function resetCurrentIndex() {
    return update(function () {
      return 0;
    });
  };

  return {
    get: get,
    subscribe: subscribe,
    set: set,
    select: select,
    resetCurrentIndex: resetCurrentIndex,
    setCurrentIndex: function setCurrentIndex() {
      return update(function (currentIndex) {
        return currentIndex + 1;
      });
    }
  };
}

var currentIndex = (0, _utils.logger)(createCurrentIndex)();
var _default = currentIndex;
exports.default = _default;
},{"../utils":"src/utils/index.js"}],"src/store/createAnswerSelected.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

function createAnswerSelected() {
  var _createState = (0, _utils.createState)("default"),
      get = _createState.get,
      update = _createState.update,
      subscribe = _createState.subscribe,
      set = _createState.set;

  return {
    get: get,
    subscribe: subscribe,
    set: set,
    setNameAnswer: function setNameAnswer(name) {
      return update(function () {
        return name;
      });
    }
  };
}

var answerSelect = (0, _utils.logger)(createAnswerSelected)();
var _default = answerSelect;
exports.default = _default;
},{"../utils":"src/utils/index.js"}],"src/store/createAnswerDescisionSelected.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

function createAnswerDecisionSelected() {
  var _createState = (0, _utils.createState)(""),
      get = _createState.get,
      update = _createState.update,
      subscribe = _createState.subscribe,
      set = _createState.set;

  return {
    get: get,
    subscribe: subscribe,
    set: set,
    setNameAnswerDecision: function setNameAnswerDecision(name) {
      return update(function () {
        return name;
      });
    }
  };
}

var answerDecisionSelect = (0, _utils.logger)(createAnswerDecisionSelected)();
var _default = answerDecisionSelect;
exports.default = _default;
},{"../utils":"src/utils/index.js"}],"src/store/createTotalScore.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

function createTotalScore() {
  var _createState = (0, _utils.createState)(0),
      get = _createState.get,
      update = _createState.update,
      subscribe = _createState.subscribe,
      set = _createState.set;

  var resetScore = function resetScore() {
    return update(function () {
      return 0;
    });
  };

  return {
    get: get,
    subscribe: subscribe,
    set: set,
    resetScore: resetScore,
    setTotalScore: function setTotalScore(totalScore) {
      return update(function (score) {
        return score + totalScore;
      });
    }
  };
}

var totalScore = (0, _utils.logger)(createTotalScore)();
var _default = totalScore;
exports.default = _default;
},{"../utils":"src/utils/index.js"}],"src/store/createIsVisibleModal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

function createIsVisibleModal() {
  var _createState = (0, _utils.createState)(false),
      get = _createState.get,
      set = _createState.set,
      subscribe = _createState.subscribe,
      update = _createState.update;

  return {
    get: get,
    set: set,
    subscribe: subscribe,
    setVisibleModal: function setVisibleModal(visible) {
      return update(function () {
        return visible;
      });
    }
  };
}

var isVisibleModal = (0, _utils.logger)(createIsVisibleModal)();
var _default = isVisibleModal;
exports.default = _default;
},{"../utils":"src/utils/index.js"}],"src/store/createIsCorrect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

function createIsCorrect() {
  var _createState = (0, _utils.createState)(true),
      set = _createState.set,
      get = _createState.get,
      subscribe = _createState.subscribe,
      update = _createState.update;

  var setIsCorrect = function setIsCorrect(answers, answerSelected) {
    return update(function () {
      var isCorrect = answers.filter(function (answer) {
        return answer.name === answerSelected;
      })[0].isCorrect;
      return isCorrect;
    });
  };

  var resetIsCorrect = function resetIsCorrect() {
    return update(function () {
      return true;
    });
  };

  return {
    set: set,
    get: get,
    subscribe: subscribe,
    setIsCorrect: setIsCorrect,
    resetIsCorrect: resetIsCorrect
  };
}

var isCorrect = (0, _utils.logger)(createIsCorrect)();
var _default = isCorrect;
exports.default = _default;
},{"../utils":"src/utils/index.js"}],"src/store/createHelp5050.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _require = require("../utils"),
    createState = _require.createState,
    logger = _require.logger,
    random = _require.random;

function createHelp5050() {
  var initialState = {};

  var _createState = createState(initialState),
      get = _createState.get,
      set = _createState.set,
      update = _createState.update,
      select = _createState.select,
      subscribe = _createState.subscribe;

  var setHelp5050 = function setHelp5050(answers) {
    var dataResult1 = answers.filter(function (item) {
      return item.isCorrect;
    })[0];
    var dataOmit = answers.filter(function (item) {
      return !item.isCorrect;
    });
    var dataResult2 = random.withArray(dataOmit);
    var result = {
      used: true,
      isRender: true,
      data: random.ramdomAllvalue([dataResult1, dataResult2])
    };
    return update(function () {
      return result;
    });
  };

  var resetHelp5050Data = function resetHelp5050Data() {
    return set({
      used: true,
      isRender: false,
      data: []
    });
  };

  var resetHelp5050 = function resetHelp5050() {
    return set(initialState);
  };

  return {
    get: get,
    set: set,
    select: select,
    subscribe: subscribe,
    setHelp5050: setHelp5050,
    resetHelp5050: resetHelp5050,
    resetHelp5050Data: resetHelp5050Data
  };
}

var help5050 = logger(createHelp5050)();
var _default = help5050;
exports.default = _default;
},{"../utils":"src/utils/index.js"}],"src/store/createHelpCall.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _require = require("../utils"),
    createState = _require.createState,
    logger = _require.logger,
    random = _require.random;

function createHelpCall() {
  var initialState = {};

  var _createState = createState(initialState),
      get = _createState.get,
      select = _createState.select,
      set = _createState.set,
      subscribe = _createState.subscribe,
      update = _createState.update;

  var setHelpCall = function setHelpCall(answers) {
    var dataResult1 = answers.filter(function (item) {
      return item.isCorrect;
    })[0].name;
    var dataOmit = answers.filter(function (item) {
      return !item.isCorrect;
    }).name;
    var resultList = [dataResult1, dataResult1, dataResult1, dataOmit];
    var resultRandom = random.withArray(resultList);
    var result = {
      used: true,
      isRender: true,
      data: {
        name: resultRandom,
        isCorrect: true
      }
    };
    return update(function () {
      return result;
    });
  };

  var resetHelpCallData = function resetHelpCallData() {
    return set({
      used: true,
      isRender: false,
      data: {}
    });
  };

  var resetHelpCall = function resetHelpCall() {
    return set(initialState);
  };

  return {
    get: get,
    set: set,
    subscribe: subscribe,
    setHelpCall: setHelpCall,
    resetHelpCall: resetHelpCall,
    resetHelpCallData: resetHelpCallData
  };
}

var helpCall = logger(createHelpCall)();
var _default = helpCall;
exports.default = _default;
},{"../utils":"src/utils/index.js"}],"src/store/createCountDown.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _require = require("../utils"),
    createState = _require.createState,
    logger = _require.logger;

function createCountDown() {
  var _createState = createState(false),
      set = _createState.set,
      get = _createState.get,
      subscribe = _createState.subscribe,
      update = _createState.update,
      select = _createState.select;

  var setCountDown = function setCountDown(isTrue) {
    return update(function () {
      return isTrue;
    });
  };

  return {
    set: set,
    get: get,
    subscribe: subscribe,
    setCountDown: setCountDown,
    select: select
  };
}

var countDown = logger(createCountDown)();
var _default = countDown;
exports.default = _default;
},{"../utils":"src/utils/index.js"}],"src/store/createHelpLooker.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _require = require("../utils"),
    createState = _require.createState,
    logger = _require.logger,
    random = _require.random;

function getMinScore(level) {
  switch (level) {
    case "easy":
      return 70;

    case "normal":
      return 40;

    case "hard":
      return 25;

    default:
      return 60;
  }
}

function createHelpLooker() {
  var initialState = {};

  var _createState = createState(initialState),
      get = _createState.get,
      set = _createState.set,
      subscribe = _createState.subscribe,
      update = _createState.update;

  var setHelpLooker = function setHelpLooker(answers, level) {
    var result1 = answers.filter(function (item) {
      return item.isCorrect;
    })[0].name.toUpperCase();
    var resultOmit = answers.filter(function (item) {
      return !item.isCorrect;
    });
    var result2 = resultOmit[0].name.toUpperCase();
    var result3 = resultOmit[1].name.toUpperCase();
    var result4 = resultOmit[2].name.toUpperCase();
    var percentFull = 100;
    var dapandung = random.fromTo(getMinScore(level), 95);
    var dapan2 = Math.floor((percentFull - dapandung) / random.fromTo(1, 6));
    var dapan3 = Math.floor((percentFull - dapandung - dapan2) / random.fromTo(1, 6));
    var dapan4 = percentFull - dapandung - dapan2 - dapan3;
    var result = {
      used: true,
      isRender: true,
      data: [{
        name: result1,
        percent: dapandung
      }, {
        name: result2,
        percent: dapan2
      }, {
        name: result3,
        percent: dapan3
      }, {
        name: result4,
        percent: dapan4
      }]
    };
    return set(result);
  };

  var resetHelpLookerData = function resetHelpLookerData() {
    return set({
      used: true,
      isRender: false,
      data: []
    });
  };

  var resetHelpLooker = function resetHelpLooker() {
    return set(initialState);
  };

  return {
    get: get,
    set: set,
    subscribe: subscribe,
    setHelpLooker: setHelpLooker,
    resetHelpLookerData: resetHelpLookerData,
    resetHelpLooker: resetHelpLooker
  };
}

var helpLooker = logger(createHelpLooker)();
var _default = helpLooker;
exports.default = _default;
},{"../utils":"src/utils/index.js"}],"src/store/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "userName", {
  enumerable: true,
  get: function () {
    return _createUserName.default;
  }
});
Object.defineProperty(exports, "currentIndex", {
  enumerable: true,
  get: function () {
    return _createCurrentIndex.default;
  }
});
Object.defineProperty(exports, "answerSelect", {
  enumerable: true,
  get: function () {
    return _createAnswerSelected.default;
  }
});
Object.defineProperty(exports, "answerDecisionSelect", {
  enumerable: true,
  get: function () {
    return _createAnswerDescisionSelected.default;
  }
});
Object.defineProperty(exports, "totalScore", {
  enumerable: true,
  get: function () {
    return _createTotalScore.default;
  }
});
Object.defineProperty(exports, "isVisibleModal", {
  enumerable: true,
  get: function () {
    return _createIsVisibleModal.default;
  }
});
Object.defineProperty(exports, "isCorrect", {
  enumerable: true,
  get: function () {
    return _createIsCorrect.default;
  }
});
Object.defineProperty(exports, "help5050", {
  enumerable: true,
  get: function () {
    return _createHelp.default;
  }
});
Object.defineProperty(exports, "helpCall", {
  enumerable: true,
  get: function () {
    return _createHelpCall.default;
  }
});
Object.defineProperty(exports, "countDown", {
  enumerable: true,
  get: function () {
    return _createCountDown.default;
  }
});
Object.defineProperty(exports, "helpLooker", {
  enumerable: true,
  get: function () {
    return _createHelpLooker.default;
  }
});

var _createUserName = _interopRequireDefault(require("./createUserName"));

var _createCurrentIndex = _interopRequireDefault(require("./createCurrentIndex"));

var _createAnswerSelected = _interopRequireDefault(require("./createAnswerSelected"));

var _createAnswerDescisionSelected = _interopRequireDefault(require("./createAnswerDescisionSelected"));

var _createTotalScore = _interopRequireDefault(require("./createTotalScore"));

var _createIsVisibleModal = _interopRequireDefault(require("./createIsVisibleModal"));

var _createIsCorrect = _interopRequireDefault(require("./createIsCorrect"));

var _createHelp = _interopRequireDefault(require("./createHelp5050"));

var _createHelpCall = _interopRequireDefault(require("./createHelpCall"));

var _createCountDown = _interopRequireDefault(require("./createCountDown"));

var _createHelpLooker = _interopRequireDefault(require("./createHelpLooker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./createUserName":"src/store/createUserName.js","./createCurrentIndex":"src/store/createCurrentIndex.js","./createAnswerSelected":"src/store/createAnswerSelected.js","./createAnswerDescisionSelected":"src/store/createAnswerDescisionSelected.js","./createTotalScore":"src/store/createTotalScore.js","./createIsVisibleModal":"src/store/createIsVisibleModal.js","./createIsCorrect":"src/store/createIsCorrect.js","./createHelp5050":"src/store/createHelp5050.js","./createHelpCall":"src/store/createHelpCall.js","./createCountDown":"src/store/createCountDown.js","./createHelpLooker":"src/store/createHelpLooker.js"}],"src/utils/createHistory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function createHistory() {
  var info = {};
  var listeners = [];

  function callListeners(url, data, title) {
    window.history.pushState(data, title, url);
    info = {
      url: url,
      data: data,
      title: title
    };
    listeners.forEach(function (listener) {
      queueMicrotask(function () {
        listener({
          url: url,
          data: data,
          title: title
        });
      });
    });
  }

  return {
    to: function to(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      callListeners(url, data, title);
    },
    redirect: function redirect(url) {
      var data = {};
      var title = "";
      callListeners(url, data, title);
    },
    get: function get() {
      return info;
    },
    subscribe: function subscribe(listener) {
      info = {
        url: document.location.pathname.replace(/^\//g, ""),
        data: {},
        title: ""
      };
      listeners.push(listener);
    }
  };
}

var _default = createHistory;
exports.default = _default;
},{}],"src/route.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createHistory = _interopRequireDefault(require("./utils/createHistory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = (0, _createHistory.default)();
var _default = route;
exports.default = _default;
},{"./utils/createHistory":"src/utils/createHistory.js"}],"src/core/StartGamePage/StartGamePage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _HomeScreen = _interopRequireDefault(require("../../templates/HomeScreen/HomeScreen"));

var _content = require("../../api/content");

var _store = require("../../store");

var _route = _interopRequireDefault(require("../../route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StartGamePage = /*#__PURE__*/function () {
  function StartGamePage() {
    (0, _classCallCheck2.default)(this, StartGamePage);
    this._handleStartGame = this._handleStartGame.bind(this);
  }

  (0, _createClass2.default)(StartGamePage, [{
    key: "render",
    value: function render() {
      // Hiển thị màn hình chính
      return (0, _HomeScreen.default)(_content.textHomeScreen);
    }
  }, {
    key: "_handleStartGame",
    value: function _handleStartGame(event) {
      event.preventDefault();
      var inputName = document.getElementById("inputName"); // const textWarning = document.querySelector("#text-warning");

      var value = inputName.value; // set isStart = true khi bắt đầu game và lấy tên người chơi nhập vào

      if (value == "") {
        return alert("Ban can nhap ten");
      }

      _store.userName.select(function (userNameState) {
        if (userNameState) {
          _route.default.to("play_game");
        }
      });

      _store.userName.setUserName(value);
    }
  }, {
    key: "handleDOM",
    value: function handleDOM() {
      var buttonStartGame = document.getElementById("buttonStartId");

      if (buttonStartGame) {
        buttonStartGame.addEventListener("click", this._handleStartGame);
      }
    }
  }]);
  return StartGamePage;
}();

exports.default = StartGamePage;
},{"@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","../../templates/HomeScreen/HomeScreen":"src/templates/HomeScreen/HomeScreen.js","../../api/content":"src/api/content.js","../../store":"src/store/index.js","../../route":"src/route.js"}],"src/templates/Help/help.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "btn": "_btn_f131b",
  "inner": "_inner_f131b",
  "help5050used": "_help5050used_f131b",
  "helpcallused": "_helpcallused_f131b",
  "helplookerused": "_helplookerused_f131b"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/templates/Help/Help.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _help = _interopRequireDefault(require("./help.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Help(_ref) {
  var _ref$help5050Used = _ref.help5050Used,
      help5050Used = _ref$help5050Used === void 0 ? false : _ref$help5050Used,
      _ref$helpCallUsed = _ref.helpCallUsed,
      helpCallUsed = _ref$helpCallUsed === void 0 ? false : _ref$helpCallUsed,
      _ref$helpLookerUsed = _ref.helpLookerUsed,
      helpLookerUsed = _ref$helpLookerUsed === void 0 ? false : _ref$helpLookerUsed,
      _ref$help5050Enabled = _ref.help5050Enabled,
      help5050Enabled = _ref$help5050Enabled === void 0 ? true : _ref$help5050Enabled,
      _ref$helpCallEnabled = _ref.helpCallEnabled,
      helpCallEnabled = _ref$helpCallEnabled === void 0 ? true : _ref$helpCallEnabled,
      _ref$helpLookerEnable = _ref.helpLookerEnabled,
      helpLookerEnabled = _ref$helpLookerEnable === void 0 ? true : _ref$helpLookerEnable;
  var help5050UsedClassName = help5050Used ? _help.default.help5050used : "";
  var helpCallUsedClassName = helpCallUsed ? _help.default.helpcallused : "";
  var helpCallLookerClassName = helpLookerUsed ? _help.default.helplookerused : "";

  var renderHelp5050 = function renderHelp5050() {
    if (!help5050Enabled) {
      return "";
    }

    return "<button id=\"help-5050\" class=\"".concat(_help.default.inner, " ").concat(help5050UsedClassName, "\">50:50</button>");
  };

  var renderHelpCall = function renderHelpCall() {
    if (!helpCallEnabled) {
      return "";
    }

    return "<button id=\"helpcall\" class=\"".concat(_help.default.inner, " ").concat(helpCallUsedClassName, "\"><i class=\" fa fa-volume-control-phone\" aria-hidden=\"true\"></i></button>");
  };

  var renderHelpLooker = function renderHelpLooker() {
    if (!helpLookerEnabled) {
      return "";
    }

    return " <button id=\"helplooker\" class=\"".concat(_help.default.inner, " ").concat(helpCallLookerClassName, "\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i></button>");
  };

  return (
    /*html*/
    "\n      <div class=\"".concat(_help.default.btn, "\">\n          ").concat(renderHelp5050(), "\n          ").concat(renderHelpCall(), "\n         ").concat(renderHelpLooker(), "\n      </div>\n    ")
  );
}

var _default = Help;
exports.default = _default;
},{"./help.scss":"src/templates/Help/help.scss"}],"src/templates/MainScreen/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "main": "_main_d16e4",
  "col8": "_col8_d16e4",
  "col4": "_col4_d16e4",
  "game": "_game_d16e4",
  "question": "_question_d16e4",
  "questionnumber": "_questionnumber_d16e4",
  "listanswer": "_listanswer_d16e4",
  "name": "_name_d16e4",
  "showhelp": "_showhelp_d16e4",
  "board": "_board_d16e4",
  "boardbelow": "_boardbelow_d16e4",
  "btn": "_btn_d16e4",
  "score": "_score_d16e4",
  "scorequestion": "_scorequestion_d16e4",
  "btnstop": "_btnstop_d16e4",
  "countdown": "_countdown_d16e4",
  "modal": "_modal_d16e4",
  "help": "_help_d16e4",
  "helptext": "_helptext_d16e4"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/templates/MainScreen/MainScreen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Help = _interopRequireDefault(require("../Help/Help"));

var _main = _interopRequireDefault(require("./main.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {{
 *  question: string,
 * questionNumber: number,
 * answer: [],
 * ButtonSelect: () => {};
 * nameUser: string,
 * score: number
 * }} props
 */
function MainScreen(_ref) {
  var question = _ref.question,
      questionNumber = _ref.questionNumber,
      Answer = _ref.Answer,
      ButtonSelect = _ref.ButtonSelect,
      nameUser = _ref.nameUser,
      score = _ref.score,
      textHelper5050 = _ref.textHelper5050,
      textHelperCall = _ref.textHelperCall,
      textHelpLooker = _ref.textHelpLooker,
      _ref$help5050Used = _ref.help5050Used,
      help5050Used = _ref$help5050Used === void 0 ? false : _ref$help5050Used,
      _ref$helpCallUsed = _ref.helpCallUsed,
      helpCallUsed = _ref$helpCallUsed === void 0 ? false : _ref$helpCallUsed,
      _ref$helpLookerUsed = _ref.helpLookerUsed,
      helpLookerUsed = _ref$helpLookerUsed === void 0 ? false : _ref$helpLookerUsed,
      help5050Enabled = _ref.help5050Enabled,
      helpCallEnabled = _ref.helpCallEnabled,
      helpLookerEnabled = _ref.helpLookerEnabled;

  var renderTextHelper = function renderTextHelper(textHelper) {
    if (!textHelper) {
      return "";
    }

    return "<div class=\"".concat(_main.default.showhelp, "\">").concat(textHelper, "</div>");
  };

  return (
    /*html*/
    "\n        <div class=\"".concat(_main.default.main, "\">\n          <div class=\"").concat(_main.default.col8, "\">\n          <div class=\"").concat(_main.default.game, "\">\n          <div class=\"").concat(_main.default.help, "\">\n                  <div class=\"").concat(_main.default.helptext, "\">").concat(renderTextHelper(textHelper5050), "</div>\n                  <div class=\"").concat(_main.default.helptext, "\">").concat(renderTextHelper(textHelperCall), "</div>\n                  <div class=\"").concat(_main.default.helptext, "\">").concat(renderTextHelper(textHelpLooker), "</div>\n                </div>\n                <h2 class=\"").concat(_main.default.question, "\">").concat(question, "</h2>\n                <div class=\"").concat(_main.default.questionnumber, "\">C\xE2u s\xF4\u0301: ").concat(questionNumber, "</div>\n                <div class=\"").concat(_main.default.listanswer, "\">").concat(Answer, "</div>\n                <div class=\"").concat(_main.default.name, "\">").concat(nameUser, "</div>\n                ").concat(ButtonSelect, "\n            </div>\n          </div>\n           <div class=\"").concat(_main.default.col4, "\">\n            <div class=\"").concat(_main.default.board, "\"> \n              <div>").concat((0, _Help.default)({
      help5050Used: help5050Used,
      helpCallUsed: helpCallUsed,
      help5050Enabled: help5050Enabled,
      helpCallEnabled: helpCallEnabled,
      helpLookerEnabled: helpLookerEnabled,
      helpLookerUsed: helpLookerUsed
    }), "</div> \n             <div class=\"").concat(_main.default.boardbelow, "\">\n                <div id=\"clock\" class=\"").concat(_main.default.countdown, "\"></div>\n                <div class=\"").concat(_main.default.score, "\">Score:</div>\n                <div class=\"").concat(_main.default.scorequestion, "\">").concat(score, "</div>\n                <button id=\"btnstop\" class=\"").concat(_main.default.btnstop, "\">D\u01B0\u0300ng Cu\xF4\u0323c Ch\u01A1i</button>\n             </div>\n              </div>\n           </div>\n        </div>\n      ")
  );
}

var _default = MainScreen;
exports.default = _default;
},{"../Help/Help":"src/templates/Help/Help.js","./main.scss":"src/templates/MainScreen/main.scss"}],"src/templates/Answer/answer.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "answer": "_answer_6c073",
  "item": "_item_6c073",
  "input": "_input_6c073"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/templates/Answer/Answer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _answer = _interopRequireDefault(require("./answer.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {{
 *  id: number,
 *  value: string,
 *  name: string
 * }} props
 */
function Answer(_ref) {
  var name = _ref.name,
      text = _ref.text,
      id = _ref.id;
  return (
    /*html*/
    "\n    <label class=\"".concat(_answer.default.answer, "\">\n        <input type=\"radio\" data-answer-name=\"").concat(name, "\" class=\"").concat(_answer.default.input, " answerInput\" name=\"").concat(id, "\" value=\"").concat(name, "\">\n        <span class=\"").concat(_answer.default.item, "\">").concat(text, "</span>\n    </label>\n  ")
  );
}

var _default = Answer;
exports.default = _default;
},{"./answer.scss":"src/templates/Answer/answer.scss"}],"src/core/PlayGamePage/ShowAnswerContainer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Answer = _interopRequireDefault(require("../../templates/Answer/Answer"));

var _store = require("../../store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShowAnswerContainer = /*#__PURE__*/function () {
  function ShowAnswerContainer() {
    (0, _classCallCheck2.default)(this, ShowAnswerContainer);
  }

  (0, _createClass2.default)(ShowAnswerContainer, [{
    key: "render",
    value: function render(answer, id) {
      return (0, _Answer.default)({
        name: answer.name,
        text: answer.value,
        id: id
      });
    }
  }, {
    key: "handleInputEl",
    value: function handleInputEl(event) {
      var answerName = event.currentTarget.getAttribute("data-answer-name");

      _store.answerSelect.setNameAnswer(answerName);
    }
  }, {
    key: "handleDOM",
    value: function handleDOM() {
      var _this = this;

      var answerInputEls = document.querySelectorAll(".answerInput");
      answerInputEls.forEach(function (answerInputEl) {
        answerInputEl.addEventListener("click", _this.handleInputEl);
      });
    }
  }]);
  return ShowAnswerContainer;
}();

exports.default = ShowAnswerContainer;
},{"@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","../../templates/Answer/Answer":"src/templates/Answer/Answer.js","../../store":"src/store/index.js"}],"src/templates/button/ButtonChooseAnswer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _button = _interopRequireDefault(require("../button/button.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ButtonChooseAnswer() {
  return (
    /*html*/
    "\n    <button class=\"".concat(_button.default.btn, "\" id=\"choose-answer\">Cho\u0323n</button>\n  ")
  );
}

var _default = ButtonChooseAnswer;
exports.default = _default;
},{"../button/button.scss":"src/templates/button/button.scss"}],"node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":[function(require,module,exports) {
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
},{}],"node_modules/@babel/runtime/helpers/objectWithoutProperties.js":[function(require,module,exports) {
var objectWithoutPropertiesLoose = require("./objectWithoutPropertiesLoose");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
},{"./objectWithoutPropertiesLoose":"node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"}],"src/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROOT = void 0;
var ROOT = document.getElementById("root");
exports.ROOT = ROOT;
},{}],"src/templates/ModalBase/styles.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "container": "_container_1f489",
  "content": "_content_1f489",
  "overlay": "_overlay_1f489"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/templates/ModalBase/ModalBase.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

var _styles = _interopRequireDefault(require("./styles.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {{
 *  visible: boolean,
 *  children: string,
 *  overlayColor: string,
 *  contentClassName: string,
 *  containerClassName: string
 *  }} props
 */
function ModalBase(_ref) {
  var _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? false : _ref$visible,
      children = _ref.children,
      _ref$overlayColor = _ref.overlayColor,
      overlayColor = _ref$overlayColor === void 0 ? "rgba(0, 0, 0, 0.4)" : _ref$overlayColor,
      _ref$contentClassName = _ref.contentClassName,
      contentClassName = _ref$contentClassName === void 0 ? "" : _ref$contentClassName,
      _ref$containerClassNa = _ref.containerClassName,
      containerClassName = _ref$containerClassNa === void 0 ? "" : _ref$containerClassNa;
  var content =
  /*html*/
  "\n    <div class=\"".concat(_styles.default.container, " ").concat(containerClassName, "\">\n      <div class=\"").concat(_styles.default.overlay, "\" style=\"background-color: ").concat(overlayColor, "\"></div>\n      <div class=\"").concat(_styles.default.content, " ").concat(contentClassName, "\">").concat(children, "</div>\n    </div>\n  ");

  if (children && visible) {
    _constants.ROOT.insertAdjacentHTML("afterend", content);
  }
}

var _default = ModalBase;
exports.default = _default;
},{"../../constants":"src/constants.js","./styles.scss":"src/templates/ModalBase/styles.scss"}],"src/templates/Modal/modal.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "modal": "_modal_3eeec",
  "animatetop": "_animatetop_3eeec",
  "header": "_header_3eeec",
  "content": "_content_3eeec",
  "close": "_close_3eeec",
  "title": "_title_3eeec"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/templates/Modal/Modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _ModalBase = _interopRequireDefault(require("../ModalBase/ModalBase"));

var _modal = _interopRequireDefault(require("./modal.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 *
 * @param {{
 *  name: string,
 *  children: string,
 *  onOk: (event: MouseEvent) => void,
 *  onCancel: (onCancel: () => void, event: MouseEvent) => void,
 *  onClose: (onClose: () => void, event: MouseEvent) => void,
 *  textOk?: string,
 *  textCancel?: string
 * }} props
 */
function Modal(_ref) {
  var title = _ref.title,
      children = _ref.children,
      _ref$onOk = _ref.onOk,
      onOk = _ref$onOk === void 0 ? function () {} : _ref$onOk,
      _ref$onCancel = _ref.onCancel,
      onCancel = _ref$onCancel === void 0 ? function () {} : _ref$onCancel,
      _ref$textOk = _ref.textOk,
      textOk = _ref$textOk === void 0 ? "Ok" : _ref$textOk,
      _ref$textCancel = _ref.textCancel,
      textCancel = _ref$textCancel === void 0 ? "Cancel" : _ref$textCancel,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["title", "children", "onOk", "onCancel", "textOk", "textCancel", "onClose"]);
  var header = !!title ?
  /*html*/
  "\n    <div class=\"".concat(_modal.default.header, "\">\n      <div>").concat(title, "</div>\n      <div id=\"close\" class=").concat(_modal.default.close, ">&times;</div>\n    </div>\n  ") : "";
  var content =
  /*html*/
  "\n    <div class=\"".concat(_modal.default.content, "\">").concat(children, "</div>\n  ");
  var footer =
  /*html*/
  "\n    <div>\n      <button id=\"modal_cancel\">".concat(textCancel, "</button>\n      <button id=\"modal_ok\">").concat(textOk, "</button>\n    </div>\n  ");
  (0, _ModalBase.default)(_objectSpread({
    children: header + content + footer,
    contentClassName: _modal.default.modal,
    containerClassName: "js-modal"
  }, rest));
  var modal = document.querySelector(".js-modal");
  var modalOk = document.getElementById("modal_ok");

  var handleClose = function handleClose() {
    modal.remove();
  };

  modalOk && modalOk.addEventListener("click", function () {
    onOk(handleClose);
  });
  var modalCancel = document.getElementById("modal_cancel");
  modalCancel && modalCancel.addEventListener("click", function (event) {
    onCancel(handleClose);
  });
  var closeModal = document.getElementById("close");
  closeModal && closeModal.addEventListener("click", function (event) {
    onClose(handleClose, event);
  });
}

var _default = Modal;
exports.default = _default;
},{"@babel/runtime/helpers/defineProperty":"node_modules/@babel/runtime/helpers/defineProperty.js","@babel/runtime/helpers/objectWithoutProperties":"node_modules/@babel/runtime/helpers/objectWithoutProperties.js","../ModalBase/ModalBase":"src/templates/ModalBase/ModalBase.js","./modal.scss":"src/templates/Modal/modal.scss"}],"src/templates/ModalChoseAnswer/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "content": "_content_8a959",
  "modal": "_modal_8a959",
  "animatetop": "_animatetop_8a959"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/templates/ModalChoseAnswer/ModalChoseAnswer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Modal = _interopRequireDefault(require("../Modal/Modal"));

var _style = _interopRequireDefault(require("./style.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ModalChoseAnswer(_ref) {
  var rest = Object.assign({}, _ref);
  (0, _Modal.default)(_objectSpread({}, rest));
}

var _default = ModalChoseAnswer;
exports.default = _default;
},{"@babel/runtime/helpers/defineProperty":"node_modules/@babel/runtime/helpers/defineProperty.js","../Modal/Modal":"src/templates/Modal/Modal.js","./style.scss":"src/templates/ModalChoseAnswer/style.scss"}],"src/core/PlayGamePage/ButtonNextQuestionContainer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ButtonChooseAnswer = _interopRequireDefault(require("../../templates/button/ButtonChooseAnswer"));

var _store = require("../../store");

var _ModalChoseAnswer = _interopRequireDefault(require("../../templates/ModalChoseAnswer/ModalChoseAnswer"));

var _utils = require("../../utils");

var _route = _interopRequireDefault(require("../../route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonNextQuestionContainer = /*#__PURE__*/function () {
  function ButtonNextQuestionContainer() {
    (0, _classCallCheck2.default)(this, ButtonNextQuestionContainer);
    this.handleOpenModalChooseAnswer = this.handleOpenModalChooseAnswer.bind(this);
    this.handleModalChooseAnswerOk = this.handleModalChooseAnswerOk.bind(this);
  }

  (0, _createClass2.default)(ButtonNextQuestionContainer, [{
    key: "render",
    value: function render() {
      return (0, _ButtonChooseAnswer.default)();
    } // Hiển Thị Modal quyết định chọn đáp án

  }, {
    key: "handleOpenModalChooseAnswer",
    value: function handleOpenModalChooseAnswer() {
      _store.isVisibleModal.setVisibleModal(true);

      var visibleModalState = _store.isVisibleModal.get();

      if (_store.answerSelect.get() === "default") {
        _store.isVisibleModal.setVisibleModal(false);

        return;
      }

      return (0, _ModalChoseAnswer.default)({
        children: "Ba\u0323n Co\u0301 quy\xEA\u0301t \u0111i\u0323nh cho\u0323n \u0111a\u0301p a\u0301n na\u0300y: ".concat(_store.answerSelect.get().toUpperCase()),
        visible: visibleModalState,
        onOk: this.handleModalChooseAnswerOk,
        onCancel: this.handleModalChooseAnswerCancel
      });
    }
  }, {
    key: "getMainState",
    value: function getMainState() {
      var currentIndexState = _store.currentIndex.get();

      var mainState = _utils.listquestion[currentIndexState];
      return mainState;
    }
  }, {
    key: "getQuizze",
    value: function getQuizze() {
      var _this$getMainState = this.getMainState(),
          quizze = _this$getMainState.quizze;

      return quizze;
    } // xử lí khi bấm Ok quyết định chọn đáp án

  }, {
    key: "handleModalChooseAnswerOk",
    value: function handleModalChooseAnswerOk(onclose) {
      var _this$getQuizze = this.getQuizze(),
          answers = _this$getQuizze.answers,
          score = _this$getQuizze.score;

      var answerSelectState = _store.answerSelect.get();

      var helper5050State = _store.help5050.get();

      console.log(status);

      _store.isCorrect.setIsCorrect(answers, answerSelectState);

      var isCorrectState = _store.isCorrect.get();

      if (isCorrectState) {
        _store.totalScore.setTotalScore(score);

        _store.currentIndex.select(function (currentIndexState) {
          if (currentIndexState === _utils.listquestion.length) {
            _store.currentIndex.resetCurrentIndex();

            _route.default.to("win_game");
          }
        });

        _store.answerSelect.setNameAnswer("default");

        _store.currentIndex.setCurrentIndex(); // Tăng Index;

      } else {
        _store.currentIndex.resetCurrentIndex();

        _route.default.to("lose_game");
      }

      if (_store.helpCall.get().used) {
        _store.helpCall.resetHelpCallData();
      }

      if (_store.help5050.get().used) {
        _store.help5050.resetHelp5050Data();
      }

      if (_store.helpLooker.get().used) {
        _store.helpLooker.resetHelpLookerData();
      }

      _store.isVisibleModal.setVisibleModal(false);

      onclose();
    }
  }, {
    key: "handleModalChooseAnswerCancel",
    value: function handleModalChooseAnswerCancel(onclose) {
      _store.isVisibleModal.setVisibleModal(false);

      onclose();
    }
  }, {
    key: "handleDOM",
    value: function handleDOM() {
      var buttonChosseAnswerEl = document.getElementById("choose-answer");
      buttonChosseAnswerEl && buttonChosseAnswerEl.addEventListener("click", this.handleOpenModalChooseAnswer);
    }
  }]);
  return ButtonNextQuestionContainer;
}();

exports.default = ButtonNextQuestionContainer;
},{"@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","../../templates/button/ButtonChooseAnswer":"src/templates/button/ButtonChooseAnswer.js","../../store":"src/store/index.js","../../templates/ModalChoseAnswer/ModalChoseAnswer":"src/templates/ModalChoseAnswer/ModalChoseAnswer.js","../../utils":"src/utils/index.js","../../route":"src/route.js"}],"src/templates/EndGameScreen/EndGameScreen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _home = _interopRequireDefault(require("../HomeScreen/home.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {{
 *  totalScore: number
 * }} props
 */
function EndGame(_ref) {
  var totalScore = _ref.totalScore;
  return (
    /*html*/
    "\n    <div class=\"".concat(_home.default.container, "\">\n      <div class=\"").concat(_home.default.form, "\">\n        <h2>Xin l\xF4\u0303i, Ba\u0323n \u0110a\u0303 Thua Cu\xF4\u0323c!</h2>\n        <div>T\xF4\u0309ng s\xF4\u0301 \u0111i\xEA\u0309m ba\u0323n \u0111a\u0323t \u0111\u01B0\u01A1\u0323c la\u0300: ").concat(totalScore, "</div>\n        <button id=\"restart\" class=\"").concat(_home.default.btn, "\">Ch\u01A1i La\u0323i</button>\n      </div>\n    </div>\n  ")
  );
}

var _default = EndGame;
exports.default = _default;
},{"../HomeScreen/home.scss":"src/templates/HomeScreen/home.scss"}],"src/core/PlayGamePage/ButtonStopTheGameContainer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _route = _interopRequireDefault(require("../../route"));

var _store = require("../../store");

var _EndGameScreen = _interopRequireDefault(require("../../templates/EndGameScreen/EndGameScreen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonStopTheGameContainer = /*#__PURE__*/function () {
  function ButtonStopTheGameContainer() {
    (0, _classCallCheck2.default)(this, ButtonStopTheGameContainer);
    this.handleStopTheGame = this.handleStopTheGame.bind(this);
  }

  (0, _createClass2.default)(ButtonStopTheGameContainer, [{
    key: "render",
    value: function render() {}
  }, {
    key: "handleStopTheGame",
    value: function handleStopTheGame() {
      _route.default.to("lose_game");
    }
  }, {
    key: "handleDOM",
    value: function handleDOM() {
      var stopGameEl = document.getElementById("btnstop");
      stopGameEl && stopGameEl.addEventListener("click", this.handleStopTheGame);
    }
  }]);
  return ButtonStopTheGameContainer;
}();

exports.default = ButtonStopTheGameContainer;
},{"@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","../../route":"src/route.js","../../store":"src/store/index.js","../../templates/EndGameScreen/EndGameScreen":"src/templates/EndGameScreen/EndGameScreen.js"}],"src/core/PlayGamePage/ButtonHelpCallContainer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _store = require("../../store");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonHelpCallContainer = /*#__PURE__*/function () {
  function ButtonHelpCallContainer() {
    (0, _classCallCheck2.default)(this, ButtonHelpCallContainer);
    this.handleHelpCall = this.handleHelpCall.bind(this);
  }

  (0, _createClass2.default)(ButtonHelpCallContainer, [{
    key: "render",
    value: function render() {}
  }, {
    key: "getMainState",
    value: function getMainState() {
      var currentIndexState = _store.currentIndex.get();

      var mainState = _utils.listquestion[currentIndexState];
      return mainState;
    }
  }, {
    key: "getQuizze",
    value: function getQuizze() {
      var _this$getMainState = this.getMainState(),
          quizze = _this$getMainState.quizze;

      return quizze;
    }
  }, {
    key: "handleHelpCall",
    value: function handleHelpCall() {
      var _this$getQuizze = this.getQuizze(),
          answers = _this$getQuizze.answers;

      var helpCallState = _store.helpCall.get();

      if (!helpCallState.used) {
        _store.helpCall.setHelpCall(answers);
      }
    }
  }, {
    key: "handleDOM",
    value: function handleDOM() {
      var helpCallEL = document.getElementById("helpcall");

      if (helpCallEL) {
        helpCallEL.addEventListener("click", this.handleHelpCall);
      }
    }
  }]);
  return ButtonHelpCallContainer;
}();

exports.default = ButtonHelpCallContainer;
},{"@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","../../store":"src/store/index.js","../../utils":"src/utils/index.js"}],"src/core/PlayGamePage/CountDownContainer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _utils = require("../../utils");

var _store = require("../../store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CountDownContainer = /*#__PURE__*/function () {
  function CountDownContainer() {
    (0, _classCallCheck2.default)(this, CountDownContainer);
  }

  (0, _createClass2.default)(CountDownContainer, [{
    key: "render",
    value: function render() {
      return (0, _utils.counter)({
        from: 20,
        to: 0,
        onStart: function onStart() {},
        onChange: function onChange(from) {
          return "abc";
        },
        onEnd: function onEnd() {}
      });
    }
  }, {
    key: "handleDOM",
    value: function handleDOM() {}
  }]);
  return CountDownContainer;
}();

exports.default = CountDownContainer;
},{"@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","../../utils":"src/utils/index.js","../../store":"src/store/index.js"}],"src/core/PlayGamePage/ButtonHelp5050Container.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _store = require("../../store");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonHelp5050Container = /*#__PURE__*/function () {
  function ButtonHelp5050Container() {
    (0, _classCallCheck2.default)(this, ButtonHelp5050Container);
    this.handleHelp5050 = this.handleHelp5050.bind(this);
  }

  (0, _createClass2.default)(ButtonHelp5050Container, [{
    key: "render",
    value: function render() {}
  }, {
    key: "getMainState",
    value: function getMainState() {
      var currentIndexState = _store.currentIndex.get();

      var mainState = _utils.listquestion[currentIndexState];
      return mainState;
    }
  }, {
    key: "getQuizze",
    value: function getQuizze() {
      var _this$getMainState = this.getMainState(),
          quizze = _this$getMainState.quizze;

      return quizze;
    }
  }, {
    key: "handleRandom",
    value: function handleRandom() {}
  }, {
    key: "handleHelp5050",
    value: function handleHelp5050() {
      var _this$getQuizze = this.getQuizze(),
          answers = _this$getQuizze.answers;

      var help5050State = _store.help5050.get();

      if (!help5050State.used) {
        _store.help5050.setHelp5050(answers);
      }
    }
  }, {
    key: "handleDOM",
    value: function handleDOM() {
      var help5050El = document.getElementById("help-5050");

      if (help5050El) {
        help5050El.addEventListener("click", this.handleHelp5050);
      }
    }
  }]);
  return ButtonHelp5050Container;
}();

exports.default = ButtonHelp5050Container;
},{"@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","../../store":"src/store/index.js","../../utils":"src/utils/index.js"}],"src/core/PlayGamePage/ButtonHelpLookerContainer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _store = require("../../store");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonHelpLookerContainer = /*#__PURE__*/function () {
  function ButtonHelpLookerContainer() {
    (0, _classCallCheck2.default)(this, ButtonHelpLookerContainer);
    this.handleHelpLooker = this.handleHelpLooker.bind(this);
  }

  (0, _createClass2.default)(ButtonHelpLookerContainer, [{
    key: "render",
    value: function render() {}
  }, {
    key: "getMainState",
    value: function getMainState() {
      var currentIndexState = _store.currentIndex.get();

      var mainState = _utils.listquestion[currentIndexState];
      return mainState;
    }
  }, {
    key: "getQuizze",
    value: function getQuizze() {
      var _this$getMainState = this.getMainState(),
          quizze = _this$getMainState.quizze;

      return quizze;
    }
  }, {
    key: "handleHelpLooker",
    value: function handleHelpLooker() {
      var _this$getQuizze = this.getQuizze(),
          answers = _this$getQuizze.answers;

      var _this$getMainState2 = this.getMainState(),
          level = _this$getMainState2.level;

      var helpLookerState = _store.helpLooker.get();

      if (!helpLookerState.used) {
        _store.helpLooker.setHelpLooker(answers, level);
      }
    }
  }, {
    key: "handleDOM",
    value: function handleDOM() {
      var helpLookerEL = document.getElementById("helplooker");

      if (helpLookerEL) {
        helpLookerEL.addEventListener("click", this.handleHelpLooker);
      }
    }
  }]);
  return ButtonHelpLookerContainer;
}();

exports.default = ButtonHelpLookerContainer;
},{"@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","../../store":"src/store/index.js","../../utils":"src/utils/index.js"}],"src/templates/Progress/progress.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "wrapper": "_wrapper_78900",
  "col": "_col_78900",
  "item": "_item_78900",
  "progress": "_progress_78900",
  "progessinner": "_progessinner_78900",
  "text": "_text_78900"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/templates/Progress/Progress.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _progress = _interopRequireDefault(require("../Progress/progress.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Progress(_ref) {
  var data = _ref.data;
  return (
    /*html*/
    "\n    <div class=\"".concat(_progress.default.wrapper, "\">\n      ").concat(data.map(function (item) {
      return (
        /*html*/
        "\n            <div class=".concat(_progress.default.col, ">\n              <div class=").concat(_progress.default.item, ">\n                <div class=\"").concat(_progress.default.progress, "\">\n                  <div class=\"").concat(_progress.default.progessinner, "\" id=\"a\" style=\"height: ").concat(item.percent, "%\">\n                    <div>").concat(item.percent, "%</div>\n                  </div>\n                </div>\n                <div class=\"").concat(_progress.default.text, "\">").concat(item.name, "</div>\n              </div>\n            </div>\n        ")
      );
    }).join(""), "\n    </div>\n  ")
  );
}

var _default = Progress;
exports.default = _default;
},{"../Progress/progress.scss":"src/templates/Progress/progress.scss"}],"src/core/PlayGamePage/PlayGamePage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _MainScreen = _interopRequireDefault(require("../../templates/MainScreen/MainScreen"));

var _data = _interopRequireDefault(require("../../api/data"));

var _store = require("../../store");

var _ShowAnswerContainer = _interopRequireDefault(require("./ShowAnswerContainer"));

var _ButtonNextQuestionContainer = _interopRequireDefault(require("./ButtonNextQuestionContainer"));

var _utils = require("../../utils");

var _route = _interopRequireDefault(require("../../route"));

var _ButtonStopTheGameContainer = _interopRequireDefault(require("./ButtonStopTheGameContainer"));

var _config = require("../../api/config");

var _ButtonHelpCallContainer = _interopRequireDefault(require("./ButtonHelpCallContainer"));

var _CountDownContainer = _interopRequireDefault(require("./CountDownContainer"));

var _ButtonHelp5050Container = _interopRequireDefault(require("./ButtonHelp5050Container"));

var _ButtonHelpLookerContainer = _interopRequireDefault(require("./ButtonHelpLookerContainer"));

var _Progress = _interopRequireDefault(require("../../templates/Progress/Progress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlayGamePage = /*#__PURE__*/function () {
  function PlayGamePage() {
    (0, _classCallCheck2.default)(this, PlayGamePage);
    this.start();
    this.renderAnswer = this.renderAnswer.bind(this);
  }

  (0, _createClass2.default)(PlayGamePage, [{
    key: "start",
    value: function start() {
      this.showAnswerContainer = new _ShowAnswerContainer.default();
      this.buttonNextQuestionContainer = new _ButtonNextQuestionContainer.default();
      this.buttonStopTheGameContainer = new _ButtonStopTheGameContainer.default();
      this.buttonHelp5050Container = new _ButtonHelp5050Container.default();
      this.buttonHelpCallContainer = new _ButtonHelpCallContainer.default();
      this.countDownContainer = new _CountDownContainer.default();
      this.buttonHelpLookerContainer = new _ButtonHelpLookerContainer.default();
    }
  }, {
    key: "getMainState",
    value: function getMainState() {
      var currentIndexState = _store.currentIndex.get();

      var mainState = _utils.listquestion[currentIndexState];
      return mainState;
    }
  }, {
    key: "getQuizze",
    value: function getQuizze() {
      var _this$getMainState = this.getMainState(),
          quizze = _this$getMainState.quizze;

      return quizze;
    }
  }, {
    key: "renderAnswer",
    value: function renderAnswer() {
      var _this = this;

      var _this$getMainState2 = this.getMainState(),
          id = _this$getMainState2.id;

      var _this$getQuizze = this.getQuizze(),
          answers = _this$getQuizze.answers;

      return answers.map(function (answer) {
        return _this.showAnswerContainer.render(answer, id);
      }).join("");
    }
  }, {
    key: "renderTextHelper5050",
    value: function renderTextHelper5050() {
      var helper5050State = _store.help5050.get();

      var isRender = helper5050State.isRender,
          data = helper5050State.data;

      if (!isRender) {
        return "";
      }

      var result1 = data[0].name;
      var result2 = data[1].name;
      return "\n      G\u01A1\u0323i y\u0301 50/50: ".concat(result1.toUpperCase(), " & ").concat(result2.toUpperCase(), ".\n    ");
    }
  }, {
    key: "renderTextHelperCall",
    value: function renderTextHelperCall() {
      var helperCallState = _store.helpCall.get();

      var isRender = helperCallState.isRender,
          data = helperCallState.data;

      if (!isRender) {
        return "";
      }

      return "\n      G\u01A1\u0323i y\u0301 t\u01B0\u0300 ng\u01B0\u01A1\u0300i th\xE2n: ".concat(data.name.toUpperCase(), "\n    ");
    }
  }, {
    key: "move",
    value: function move() {}
  }, {
    key: "renderTextHelperLooker",
    value: function renderTextHelperLooker() {
      var helperLookerState = _store.helpLooker.get();

      var isRender = helperLookerState.isRender,
          data = helperLookerState.data;

      if (!isRender) {
        return "";
      }

      return "G\u01A1\u0323i y\u0301 t\u01B0\u0300 Kha\u0301n Gia\u0309:" + (0, _Progress.default)({
        data: data
      });
    }
  }, {
    key: "render",
    value: function render() {
      var currentIndexState = _store.currentIndex.get();

      var userNameState = _store.userName.get();

      var quizze = this.getQuizze();

      var help5050State = _store.help5050.get();

      var helpCallState = _store.helpCall.get();

      var helpLookerState = _store.helpLooker.get();

      if (!userNameState) {
        _route.default.redirect("/");
      }

      return (0, _MainScreen.default)({
        question: quizze.question,
        questionNumber: currentIndexState + 1,
        Answer: this.renderAnswer(),
        ButtonSelect: this.buttonNextQuestionContainer.render(),
        nameUser: userNameState,
        score: _store.totalScore.get(),
        textHelper5050: this.renderTextHelper5050(),
        textHelperCall: this.renderTextHelperCall(),
        textHelpLooker: this.renderTextHelperLooker(),
        help5050Used: help5050State.used,
        helpCallUsed: helpCallState.used,
        helpLookerUsed: helpLookerState.used,
        help5050Enabled: _config.config.help_5050,
        helpCallEnabled: _config.config.help_call,
        helpLookerEnabled: _config.config.help_looker
      });
    }
  }, {
    key: "handleDOM",
    value: function handleDOM() {
      this.showAnswerContainer.handleDOM();
      this.buttonNextQuestionContainer.handleDOM();
      this.buttonStopTheGameContainer.handleDOM();
      this.buttonHelp5050Container.handleDOM();
      this.buttonHelpCallContainer.handleDOM();
      this.buttonHelpLookerContainer.handleDOM();
    }
  }]);
  return PlayGamePage;
}();

exports.default = PlayGamePage;
},{"@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","../../templates/MainScreen/MainScreen":"src/templates/MainScreen/MainScreen.js","../../api/data":"src/api/data.js","../../store":"src/store/index.js","./ShowAnswerContainer":"src/core/PlayGamePage/ShowAnswerContainer.js","./ButtonNextQuestionContainer":"src/core/PlayGamePage/ButtonNextQuestionContainer.js","../../utils":"src/utils/index.js","../../route":"src/route.js","./ButtonStopTheGameContainer":"src/core/PlayGamePage/ButtonStopTheGameContainer.js","../../api/config":"src/api/config.js","./ButtonHelpCallContainer":"src/core/PlayGamePage/ButtonHelpCallContainer.js","./CountDownContainer":"src/core/PlayGamePage/CountDownContainer.js","./ButtonHelp5050Container":"src/core/PlayGamePage/ButtonHelp5050Container.js","./ButtonHelpLookerContainer":"src/core/PlayGamePage/ButtonHelpLookerContainer.js","../../templates/Progress/Progress":"src/templates/Progress/Progress.js"}],"src/core/LoseGamePage/LoseGamePage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _EndGameScreen = _interopRequireDefault(require("../../templates/EndGameScreen/EndGameScreen"));

var _store = require("../../store");

var _route = _interopRequireDefault(require("../../route"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoseGamePage = /*#__PURE__*/function () {
  function LoseGamePage() {
    (0, _classCallCheck2.default)(this, LoseGamePage);
    this.handleRestart = this.handleRestart.bind(this);
  }

  (0, _createClass2.default)(LoseGamePage, [{
    key: "render",
    value: function render() {
      var userNameState = _store.userName.get();

      if (!userNameState) {
        _route.default.redirect("/");
      }

      return (0, _EndGameScreen.default)({
        totalScore: _store.totalScore.get()
      });
    }
  }, {
    key: "handleRestart",
    value: function handleRestart() {
      _store.isCorrect.resetIsCorrect();

      _store.helpCall.resetHelpCall();

      _store.help5050.resetHelp5050();

      _store.helpLooker.resetHelpLooker();

      _store.totalScore.resetScore();

      _route.default.redirect("/");
    }
  }, {
    key: "handleDOM",
    value: function handleDOM() {
      var restartEl = document.getElementById("restart");
      restartEl && restartEl.addEventListener("click", this.handleRestart);
    }
  }]);
  return LoseGamePage;
}();

exports.default = LoseGamePage;
},{"@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","../../templates/EndGameScreen/EndGameScreen":"src/templates/EndGameScreen/EndGameScreen.js","../../store":"src/store/index.js","../../route":"src/route.js","../../utils":"src/utils/index.js"}],"src/templates/WinGameScreen/WinGameScreen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _home = _interopRequireDefault(require("../HomeScreen/home.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {{
 *  totalScore: number
 * }} props
 */
function WinGame(props) {
  return (
    /*html*/
    "\n    <div class=\"".concat(_home.default.container, "\">\n      <div class=\"").concat(_home.default.form, "\">\n        <h2>Chu\u0301c M\u01B0\u0300ng Ba\u0323n, Ba\u0323n \u0110a\u0303 Chi\xEA\u0301n Th\u0103\u0301ng!</h2>\n        <div>T\xF4\u0309ng s\xF4\u0301 \u0111i\xEA\u0309m ba\u0323n \u0111a\u0323t \u0111\u01B0\u01A1\u0323c la\u0300: ").concat(props.totalScore, "</div>\n        <button id=\"replay\" class=\"").concat(_home.default.btn, "\">Ch\u01A1i La\u0323i</button>\n      </div>\n    </div>\n  ")
  );
}

var _default = WinGame;
exports.default = _default;
},{"../HomeScreen/home.scss":"src/templates/HomeScreen/home.scss"}],"src/core/WinGamePage/WinGamePage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _WinGameScreen = _interopRequireDefault(require("../../templates/WinGameScreen/WinGameScreen"));

var _store = require("../../store");

var _utils = require("../../utils");

var _route = _interopRequireDefault(require("../../route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WinGamePage = /*#__PURE__*/function () {
  function WinGamePage() {
    (0, _classCallCheck2.default)(this, WinGamePage);
  }

  (0, _createClass2.default)(WinGamePage, [{
    key: "render",
    value: function render() {
      var userNameState = _store.userName.get();

      if (!userNameState) {
        _route.default.redirect("/");
      }

      return (0, _WinGameScreen.default)({
        totalScore: _store.totalScore.get()
      });
    }
  }, {
    key: "handleRePlay",
    value: function handleRePlay() {
      _store.isCorrect.resetIsCorrect();

      _store.totalScore.resetScore();

      _store.helpCall.resetHelpCall();

      _store.help5050.resetHelp5050();

      _store.helpLooker.resetHelpLooker();

      _route.default.redirect("/");
    }
  }, {
    key: "handleDOM",
    value: function handleDOM() {
      var replayEl = document.getElementById("replay");
      replayEl && replayEl.addEventListener("click", this.handleRePlay);
    }
  }]);
  return WinGamePage;
}();

exports.default = WinGamePage;
},{"@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","../../templates/WinGameScreen/WinGameScreen":"src/templates/WinGameScreen/WinGameScreen.js","../../store":"src/store/index.js","../../utils":"src/utils/index.js","../../route":"src/route.js"}],"src/core/quizzGame.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _utils = require("../utils");

var _StartGamePage = _interopRequireDefault(require("./StartGamePage/StartGamePage"));

var _PlayGamePage = _interopRequireDefault(require("./PlayGamePage/PlayGamePage"));

var _LoseGamePage = _interopRequireDefault(require("./LoseGamePage/LoseGamePage"));

var _WinGamePage = _interopRequireDefault(require("./WinGamePage/WinGamePage"));

var _store = require("../store");

var _route = _interopRequireDefault(require("../route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var QuizzGame = /*#__PURE__*/function (_Container) {
  (0, _inherits2.default)(QuizzGame, _Container);

  var _super = _createSuper(QuizzGame);

  function QuizzGame() {
    (0, _classCallCheck2.default)(this, QuizzGame);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(QuizzGame, [{
    key: "start",
    value: function start() {
      this.startGamePage = new _StartGamePage.default();
      this.playGamePage = new _PlayGamePage.default();
      this.loseGamePage = new _LoseGamePage.default();
      this.winGamePage = new _WinGamePage.default();
      this.init = this.init.bind(this);

      _store.isCorrect.subscribe(this.init);

      _store.userName.subscribe(this.init);

      _store.currentIndex.subscribe(this.init);

      _store.help5050.subscribe(this.init);

      _store.helpCall.subscribe(this.init);

      _store.helpLooker.subscribe(this.init);

      _route.default.subscribe(this.init);
    }
  }, {
    key: "renderRoutes",
    value: function renderRoutes() {
      var _route$get = _route.default.get(),
          url = _route$get.url;

      switch (url) {
        case "lose_game":
          return this.loseGamePage.render();

        case "win_game":
          return this.winGamePage.render();

        case "play_game":
          return this.playGamePage.render();

        default:
          return this.startGamePage.render();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderRoutes();
    }
  }, {
    key: "handleDOM",
    value: function handleDOM() {
      this.startGamePage.handleDOM();
      this.playGamePage.handleDOM();
      this.loseGamePage.handleDOM();
      this.winGamePage.handleDOM();
    }
  }, {
    key: "init",
    value: function init() {
      var el = this.props.el;
      el.innerHTML = this.render();
      this.handleDOM();
    }
  }]);
  return QuizzGame;
}(_utils.Container);

exports.default = QuizzGame;
},{"@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/inherits":"node_modules/@babel/runtime/helpers/inherits.js","@babel/runtime/helpers/possibleConstructorReturn":"node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"node_modules/@babel/runtime/helpers/getPrototypeOf.js","../utils":"src/utils/index.js","./StartGamePage/StartGamePage":"src/core/StartGamePage/StartGamePage.js","./PlayGamePage/PlayGamePage":"src/core/PlayGamePage/PlayGamePage.js","./LoseGamePage/LoseGamePage":"src/core/LoseGamePage/LoseGamePage.js","./WinGamePage/WinGamePage":"src/core/WinGamePage/WinGamePage.js","../store":"src/store/index.js","../route":"src/route.js"}],"src/styles/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _data = _interopRequireDefault(require("./api/data"));

var _quizzGame = _interopRequireDefault(require("./core/quizzGame"));

require("./styles/style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _quizzGame.default({
  el: document.getElementById("root")
});
},{"./api/data":"src/api/data.js","./core/quizzGame":"src/core/quizzGame.js","./styles/style.scss":"src/styles/style.scss"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64565" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map