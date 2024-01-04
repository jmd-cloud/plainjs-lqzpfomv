var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import require2 from "./dist/__require.js";
var Ke = Object.create, ke = Object.defineProperty, Ge = Object.getOwnPropertyDescriptor, He = Object.getOwnPropertyNames, Ze = Object.getPrototypeOf, Ye = Object.prototype.hasOwnProperty, le = (t, e) => () => (t && (e = t(t = 0)), e), A = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports), Je = (t, e, r, n) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let u of He(e))
      !Ye.call(t, u) && u !== r && ke(t, u, { get: () => e[u], enumerable: !(n = Ge(e, u)) || n.enumerable });
  return t;
}, q$1 = (t, e, r) => (r = t != null ? Ke(Ze(t)) : {}, Je(e || !t || !t.__esModule ? ke(r, "default", { value: t, enumerable: true }) : r, t)), b = le(() => {
}), m = le(() => {
}), g = le(() => {
}), h = le(() => {
}), _ = le(() => {
}), We = A((t, e) => {
  b(), m(), g(), h(), _();
  function r(n, u, i, c) {
    var f = -1, p = n == null ? 0 : n.length;
    for (c && p && (i = n[++f]); ++f < p; )
      i = u(i, n[f], f, n);
    return i;
  }
  e.exports = r;
}), Xe = A((t, e) => {
  b(), m(), g(), h(), _();
  function r(n) {
    return function(u) {
      return n == null ? void 0 : n[u];
    };
  }
  e.exports = r;
}), qe = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = Xe(), n = { \u00C0: "A", \u00C1: "A", \u00C2: "A", \u00C3: "A", \u00C4: "A", \u00C5: "A", \u00E0: "a", \u00E1: "a", \u00E2: "a", \u00E3: "a", \u00E4: "a", \u00E5: "a", \u00C7: "C", \u00E7: "c", \u00D0: "D", \u00F0: "d", \u00C8: "E", \u00C9: "E", \u00CA: "E", \u00CB: "E", \u00E8: "e", \u00E9: "e", \u00EA: "e", \u00EB: "e", \u00CC: "I", \u00CD: "I", \u00CE: "I", \u00CF: "I", \u00EC: "i", \u00ED: "i", \u00EE: "i", \u00EF: "i", \u00D1: "N", \u00F1: "n", \u00D2: "O", \u00D3: "O", \u00D4: "O", \u00D5: "O", \u00D6: "O", \u00D8: "O", \u00F2: "o", \u00F3: "o", \u00F4: "o", \u00F5: "o", \u00F6: "o", \u00F8: "o", \u00D9: "U", \u00DA: "U", \u00DB: "U", \u00DC: "U", \u00F9: "u", \u00FA: "u", \u00FB: "u", \u00FC: "u", \u00DD: "Y", \u00FD: "y", \u00FF: "y", \u00C6: "Ae", \u00E6: "ae", \u00DE: "Th", \u00FE: "th", \u00DF: "ss", \u0100: "A", \u0102: "A", \u0104: "A", \u0101: "a", \u0103: "a", \u0105: "a", \u0106: "C", \u0108: "C", \u010A: "C", \u010C: "C", \u0107: "c", \u0109: "c", \u010B: "c", \u010D: "c", \u010E: "D", \u0110: "D", \u010F: "d", \u0111: "d", \u0112: "E", \u0114: "E", \u0116: "E", \u0118: "E", \u011A: "E", \u0113: "e", \u0115: "e", \u0117: "e", \u0119: "e", \u011B: "e", \u011C: "G", \u011E: "G", \u0120: "G", \u0122: "G", \u011D: "g", \u011F: "g", \u0121: "g", \u0123: "g", \u0124: "H", \u0126: "H", \u0125: "h", \u0127: "h", \u0128: "I", \u012A: "I", \u012C: "I", \u012E: "I", \u0130: "I", \u0129: "i", \u012B: "i", \u012D: "i", \u012F: "i", \u0131: "i", \u0134: "J", \u0135: "j", \u0136: "K", \u0137: "k", \u0138: "k", \u0139: "L", \u013B: "L", \u013D: "L", \u013F: "L", \u0141: "L", \u013A: "l", \u013C: "l", \u013E: "l", \u0140: "l", \u0142: "l", \u0143: "N", \u0145: "N", \u0147: "N", \u014A: "N", \u0144: "n", \u0146: "n", \u0148: "n", \u014B: "n", \u014C: "O", \u014E: "O", \u0150: "O", \u014D: "o", \u014F: "o", \u0151: "o", \u0154: "R", \u0156: "R", \u0158: "R", \u0155: "r", \u0157: "r", \u0159: "r", \u015A: "S", \u015C: "S", \u015E: "S", \u0160: "S", \u015B: "s", \u015D: "s", \u015F: "s", \u0161: "s", \u0162: "T", \u0164: "T", \u0166: "T", \u0163: "t", \u0165: "t", \u0167: "t", \u0168: "U", \u016A: "U", \u016C: "U", \u016E: "U", \u0170: "U", \u0172: "U", \u0169: "u", \u016B: "u", \u016D: "u", \u016F: "u", \u0171: "u", \u0173: "u", \u0174: "W", \u0175: "w", \u0176: "Y", \u0177: "y", \u0178: "Y", \u0179: "Z", \u017B: "Z", \u017D: "Z", \u017A: "z", \u017C: "z", \u017E: "z", \u0132: "IJ", \u0133: "ij", \u0152: "Oe", \u0153: "oe", \u0149: "'n", \u017F: "s" }, u = r(n);
  e.exports = u;
}), Qe = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
  e.exports = r;
}), et = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = Qe(), n = typeof self == "object" && self && self.Object === Object && self, u = r || n || Function("return this")();
  e.exports = u;
}), _e = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = et(), n = r.Symbol;
  e.exports = n;
}), tt = A((t, e) => {
  b(), m(), g(), h(), _();
  function r(n, u) {
    for (var i = -1, c = n == null ? 0 : n.length, f = Array(c); ++i < c; )
      f[i] = u(n[i], i, n);
    return f;
  }
  e.exports = r;
}), rt = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = Array.isArray;
  e.exports = r;
}), nt = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = _e(), n = Object.prototype, u = n.hasOwnProperty, i = n.toString, c = r ? r.toStringTag : void 0;
  function f(p) {
    var O = u.call(p, c), j = p[c];
    try {
      p[c] = void 0;
      var C = true;
    } catch {
    }
    var T = i.call(p);
    return C && (O ? p[c] = j : delete p[c]), T;
  }
  e.exports = f;
}), ot = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = Object.prototype, n = r.toString;
  function u(i) {
    return n.call(i);
  }
  e.exports = u;
}), at = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = _e(), n = nt(), u = ot(), i = "[object Null]", c = "[object Undefined]", f = r ? r.toStringTag : void 0;
  function p(O) {
    return O == null ? O === void 0 ? c : i : f && f in Object(O) ? n(O) : u(O);
  }
  e.exports = p;
}), ut = A((t, e) => {
  b(), m(), g(), h(), _();
  function r(n) {
    return n != null && typeof n == "object";
  }
  e.exports = r;
}), it = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = at(), n = ut(), u = "[object Symbol]";
  function i(c) {
    return typeof c == "symbol" || n(c) && r(c) == u;
  }
  e.exports = i;
}), ct = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = _e(), n = tt(), u = rt(), i = it(), c = 1 / 0, f = r ? r.prototype : void 0, p = f ? f.toString : void 0;
  function O(j) {
    if (typeof j == "string")
      return j;
    if (u(j))
      return n(j, O) + "";
    if (i(j))
      return p ? p.call(j) : "";
    var C = j + "";
    return C == "0" && 1 / j == -c ? "-0" : C;
  }
  e.exports = O;
}), Oe = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = ct();
  function n(u) {
    return u == null ? "" : r(u);
  }
  e.exports = n;
}), st = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = qe(), n = Oe(), u = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, i = "\\u0300-\\u036f", c = "\\ufe20-\\ufe2f", f = "\\u20d0-\\u20ff", p = i + c + f, O = "[" + p + "]", j = RegExp(O, "g");
  function C(T) {
    return T = n(T), T && T.replace(u, r).replace(j, "");
  }
  e.exports = C;
}), lt = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
  function n(u) {
    return u.match(r) || [];
  }
  e.exports = n;
}), ft = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
  function n(u) {
    return r.test(u);
  }
  e.exports = n;
}), pt = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = "\\ud800-\\udfff", n = "\\u0300-\\u036f", u = "\\ufe20-\\ufe2f", i = "\\u20d0-\\u20ff", c = n + u + i, f = "\\u2700-\\u27bf", p = "a-z\\xdf-\\xf6\\xf8-\\xff", O = "\\xac\\xb1\\xd7\\xf7", j = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", C = "\\u2000-\\u206f", T = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", R2 = "A-Z\\xc0-\\xd6\\xd8-\\xde", N = "\\ufe0e\\ufe0f", k = O + j + C + T, L = "['\u2019]", G = "[" + k + "]", v = "[" + c + "]", S2 = "\\d+", E = "[" + f + "]", F = "[" + p + "]", z2 = "[^" + r + k + S2 + f + p + R2 + "]", B = "\\ud83c[\\udffb-\\udfff]", H2 = "(?:" + v + "|" + B + ")", D = "[^" + r + "]", I = "(?:\\ud83c[\\udde6-\\uddff]){2}", J = "[\\ud800-\\udbff][\\udc00-\\udfff]", W = "[" + R2 + "]", ae = "\\u200d", Q = "(?:" + F + "|" + z2 + ")", P = "(?:" + W + "|" + z2 + ")", X = "(?:" + L + "(?:d|ll|m|re|s|t|ve))?", Z = "(?:" + L + "(?:D|LL|M|RE|S|T|VE))?", o = H2 + "?", a = "[" + N + "]?", s = "(?:" + ae + "(?:" + [D, I, J].join("|") + ")" + a + o + ")*", l = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", y = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", d2 = a + o + s, w = "(?:" + [E, I, J].join("|") + ")" + d2, $ = RegExp([W + "?" + F + "+" + X + "(?=" + [G, W, "$"].join("|") + ")", P + "+" + Z + "(?=" + [G, W + Q, "$"].join("|") + ")", W + "?" + Q + "+" + X, W + "+" + Z, y, l, S2, w].join("|"), "g");
  function Y(x) {
    return x.match($) || [];
  }
  e.exports = Y;
}), dt = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = lt(), n = ft(), u = Oe(), i = pt();
  function c(f, p, O) {
    return f = u(f), p = O ? void 0 : p, p === void 0 ? n(f) ? i(f) : r(f) : f.match(p) || [];
  }
  e.exports = c;
}), yt = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = We(), n = st(), u = dt(), i = "['\u2019]", c = RegExp(i, "g");
  function f(p) {
    return function(O) {
      return r(u(n(O).replace(c, "")), p, "");
    };
  }
  e.exports = f;
}), vt = A((t, e) => {
  b(), m(), g(), h(), _();
  function r(n, u, i) {
    var c = -1, f = n.length;
    u < 0 && (u = -u > f ? 0 : f + u), i = i > f ? f : i, i < 0 && (i += f), f = u > i ? 0 : i - u >>> 0, u >>>= 0;
    for (var p = Array(f); ++c < f; )
      p[c] = n[c + u];
    return p;
  }
  e.exports = r;
}), bt = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = vt();
  function n(u, i, c) {
    var f = u.length;
    return c = c === void 0 ? f : c, !i && c >= f ? u : r(u, i, c);
  }
  e.exports = n;
}), Ne = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = "\\ud800-\\udfff", n = "\\u0300-\\u036f", u = "\\ufe20-\\ufe2f", i = "\\u20d0-\\u20ff", c = n + u + i, f = "\\ufe0e\\ufe0f", p = "\\u200d", O = RegExp("[" + p + r + c + f + "]");
  function j(C) {
    return O.test(C);
  }
  e.exports = j;
}), mt = A((t, e) => {
  b(), m(), g(), h(), _();
  function r(n) {
    return n.split("");
  }
  e.exports = r;
}), gt = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = "\\ud800-\\udfff", n = "\\u0300-\\u036f", u = "\\ufe20-\\ufe2f", i = "\\u20d0-\\u20ff", c = n + u + i, f = "\\ufe0e\\ufe0f", p = "[" + r + "]", O = "[" + c + "]", j = "\\ud83c[\\udffb-\\udfff]", C = "(?:" + O + "|" + j + ")", T = "[^" + r + "]", R2 = "(?:\\ud83c[\\udde6-\\uddff]){2}", N = "[\\ud800-\\udbff][\\udc00-\\udfff]", k = "\\u200d", L = C + "?", G = "[" + f + "]?", v = "(?:" + k + "(?:" + [T, R2, N].join("|") + ")" + G + L + ")*", S2 = G + L + v, E = "(?:" + [T + O + "?", O, R2, N, p].join("|") + ")", F = RegExp(j + "(?=" + j + ")|" + E + S2, "g");
  function z2(B) {
    return B.match(F) || [];
  }
  e.exports = z2;
}), ht = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = mt(), n = Ne(), u = gt();
  function i(c) {
    return n(c) ? u(c) : r(c);
  }
  e.exports = i;
}), _t = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = bt(), n = Ne(), u = ht(), i = Oe();
  function c(f) {
    return function(p) {
      p = i(p);
      var O = n(p) ? u(p) : void 0, j = O ? O[0] : p.charAt(0), C = O ? r(O, 1).join("") : p.slice(1);
      return j[f]() + C;
    };
  }
  e.exports = c;
}), Ot = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = _t(), n = r("toUpperCase");
  e.exports = n;
}), wt = A((t, e) => {
  b(), m(), g(), h(), _();
  var r = yt(), n = Ot(), u = r(function(i, c, f) {
    return i + (f ? " " : "") + n(c);
  });
  e.exports = u;
}), xt = A(() => {
  b(), m(), g(), h(), _();
}), jt = A((t) => {
  b(), m(), g(), h(), _(), Object.defineProperty(t, "__esModule", { value: true });
  var e = xt();
  Object.keys(e).forEach(function(r) {
    r === "default" || r === "__esModule" || Object.defineProperty(t, r, { enumerable: true, get: function() {
      return e[r];
    } });
  });
}), te = A((t) => {
  b(), m(), g(), h(), _(), Object.defineProperty(t, "__esModule", { value: true });
  var e = { sanitize: true, toId: true, storyNameFromExport: true, isExportStory: true, parseKind: true };
  t.isExportStory = L, t.parseKind = t.storyNameFromExport = t.toId = t.sanitize = void 0;
  var r = u(wt()), n = jt();
  Object.keys(n).forEach(function(v) {
    v === "default" || v === "__esModule" || Object.prototype.hasOwnProperty.call(e, v) || Object.defineProperty(t, v, { enumerable: true, get: function() {
      return n[v];
    } });
  });
  function u(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function i(v, S2) {
    return j(v) || O(v, S2) || f(v, S2) || c();
  }
  function c() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function f(v, S2) {
    if (v) {
      if (typeof v == "string")
        return p(v, S2);
      var E = Object.prototype.toString.call(v).slice(8, -1);
      if (E === "Object" && v.constructor && (E = v.constructor.name), E === "Map" || E === "Set")
        return Array.from(E);
      if (E === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))
        return p(v, S2);
    }
  }
  function p(v, S2) {
    (S2 == null || S2 > v.length) && (S2 = v.length);
    for (var E = 0, F = new Array(S2); E < S2; E++)
      F[E] = v[E];
    return F;
  }
  function O(v, S2) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(v)))) {
      var E = [], F = true, z2 = false, B = void 0;
      try {
        for (var H2 = v[Symbol.iterator](), D; !(F = (D = H2.next()).done) && (E.push(D.value), !(S2 && E.length === S2)); F = true)
          ;
      } catch (I) {
        z2 = true, B = I;
      } finally {
        try {
          !F && H2.return != null && H2.return();
        } finally {
          if (z2)
            throw B;
        }
      }
      return E;
    }
  }
  function j(v) {
    if (Array.isArray(v))
      return v;
  }
  var C = function(v) {
    return v.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-").replace(/-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
  };
  t.sanitize = C;
  var T = function(v, S2) {
    var E = C(v);
    if (E === "")
      throw new Error("Invalid ".concat(S2, " '").concat(v, "', must include alphanumeric characters"));
    return E;
  }, R2 = function(v, S2) {
    return "".concat(T(v, "kind")).concat(S2 ? "--".concat(T(S2, "name")) : "");
  };
  t.toId = R2;
  var N = function(v) {
    return (0, r.default)(v);
  };
  t.storyNameFromExport = N;
  function k(v, S2) {
    return Array.isArray(S2) ? S2.includes(v) : v.match(S2);
  }
  function L(v, S2) {
    var E = S2.includeStories, F = S2.excludeStories;
    return v !== "__esModule" && (!E || k(v, E)) && (!F || !k(v, F));
  }
  var G = function(v, S2) {
    var E = S2.rootSeparator, F = S2.groupSeparator, z2 = v.split(E, 2), B = i(z2, 2), H2 = B[0], D = B[1], I = (D || v).split(F).filter(function(J) {
      return !!J;
    });
    return { root: D ? H2 : null, groups: I };
  };
  t.parseKind = G;
}), St = A((t, e) => {
  b(), m(), g(), h(), _();
  var r, n, u, i, c, f, p, O, j, C, T, R2, N, k, L, G, v, S2, E, F, z2, B, H2, D, I, J, W, ae, Q;
  (function(P) {
    var X = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof this == "object" ? this : {};
    typeof define == "function" && define.amd ? define("tslib", ["exports"], function(o) {
      P(Z(X, Z(o)));
    }) : typeof e == "object" && typeof e.exports == "object" ? P(Z(X, Z(e.exports))) : P(Z(X));
    function Z(o, a) {
      return o !== X && (typeof Object.create == "function" ? Object.defineProperty(o, "__esModule", { value: true }) : o.__esModule = true), function(s, l) {
        return o[s] = a ? a(s, l) : l;
      };
    }
  })(function(P) {
    var X = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, a) {
      o.__proto__ = a;
    } || function(o, a) {
      for (var s in a)
        Object.prototype.hasOwnProperty.call(a, s) && (o[s] = a[s]);
    };
    r = function(o, a) {
      if (typeof a != "function" && a !== null)
        throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
      X(o, a);
      function s() {
        this.constructor = o;
      }
      o.prototype = a === null ? Object.create(a) : (s.prototype = a.prototype, new s());
    }, n = Object.assign || function(o) {
      for (var a, s = 1, l = arguments.length; s < l; s++) {
        a = arguments[s];
        for (var y in a)
          Object.prototype.hasOwnProperty.call(a, y) && (o[y] = a[y]);
      }
      return o;
    }, u = function(o, a) {
      var s = {};
      for (var l in o)
        Object.prototype.hasOwnProperty.call(o, l) && a.indexOf(l) < 0 && (s[l] = o[l]);
      if (o != null && typeof Object.getOwnPropertySymbols == "function")
        for (var y = 0, l = Object.getOwnPropertySymbols(o); y < l.length; y++)
          a.indexOf(l[y]) < 0 && Object.prototype.propertyIsEnumerable.call(o, l[y]) && (s[l[y]] = o[l[y]]);
      return s;
    }, i = function(o, a, s, l) {
      var y = arguments.length, d2 = y < 3 ? a : l === null ? l = Object.getOwnPropertyDescriptor(a, s) : l, w;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        d2 = Reflect.decorate(o, a, s, l);
      else
        for (var $ = o.length - 1; $ >= 0; $--)
          (w = o[$]) && (d2 = (y < 3 ? w(d2) : y > 3 ? w(a, s, d2) : w(a, s)) || d2);
      return y > 3 && d2 && Object.defineProperty(a, s, d2), d2;
    }, c = function(o, a) {
      return function(s, l) {
        a(s, l, o);
      };
    }, f = function(o, a, s, l, y, d2) {
      function w(ce) {
        if (ce !== void 0 && typeof ce != "function")
          throw new TypeError("Function expected");
        return ce;
      }
      for (var $ = l.kind, Y = $ === "getter" ? "get" : $ === "setter" ? "set" : "value", x = !a && o ? l.static ? o : o.prototype : null, M = a || (x ? Object.getOwnPropertyDescriptor(x, l.name) : {}), K2, V = false, ee = s.length - 1; ee >= 0; ee--) {
        var ne = {};
        for (var oe in l)
          ne[oe] = oe === "access" ? {} : l[oe];
        for (var oe in l.access)
          ne.access[oe] = l.access[oe];
        ne.addInitializer = function(ce) {
          if (V)
            throw new TypeError("Cannot add initializers after decoration has completed");
          d2.push(w(ce || null));
        };
        var ue = (0, s[ee])($ === "accessor" ? { get: M.get, set: M.set } : M[Y], ne);
        if ($ === "accessor") {
          if (ue === void 0)
            continue;
          if (ue === null || typeof ue != "object")
            throw new TypeError("Object expected");
          (K2 = w(ue.get)) && (M.get = K2), (K2 = w(ue.set)) && (M.set = K2), (K2 = w(ue.init)) && y.push(K2);
        } else
          (K2 = w(ue)) && ($ === "field" ? y.push(K2) : M[Y] = K2);
      }
      x && Object.defineProperty(x, l.name, M), V = true;
    }, p = function(o, a, s) {
      for (var l = arguments.length > 2, y = 0; y < a.length; y++)
        s = l ? a[y].call(o, s) : a[y].call(o);
      return l ? s : void 0;
    }, O = function(o) {
      return typeof o == "symbol" ? o : "".concat(o);
    }, j = function(o, a, s) {
      return typeof a == "symbol" && (a = a.description ? "[".concat(a.description, "]") : ""), Object.defineProperty(o, "name", { configurable: true, value: s ? "".concat(s, " ", a) : a });
    }, C = function(o, a) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, a);
    }, T = function(o, a, s, l) {
      function y(d2) {
        return d2 instanceof s ? d2 : new s(function(w) {
          w(d2);
        });
      }
      return new (s || (s = Promise))(function(d2, w) {
        function $(M) {
          try {
            x(l.next(M));
          } catch (K2) {
            w(K2);
          }
        }
        function Y(M) {
          try {
            x(l.throw(M));
          } catch (K2) {
            w(K2);
          }
        }
        function x(M) {
          M.done ? d2(M.value) : y(M.value).then($, Y);
        }
        x((l = l.apply(o, a || [])).next());
      });
    }, R2 = function(o, a) {
      var s = { label: 0, sent: function() {
        if (d2[0] & 1)
          throw d2[1];
        return d2[1];
      }, trys: [], ops: [] }, l, y, d2, w;
      return w = { next: $(0), throw: $(1), return: $(2) }, typeof Symbol == "function" && (w[Symbol.iterator] = function() {
        return this;
      }), w;
      function $(x) {
        return function(M) {
          return Y([x, M]);
        };
      }
      function Y(x) {
        if (l)
          throw new TypeError("Generator is already executing.");
        for (; w && (w = 0, x[0] && (s = 0)), s; )
          try {
            if (l = 1, y && (d2 = x[0] & 2 ? y.return : x[0] ? y.throw || ((d2 = y.return) && d2.call(y), 0) : y.next) && !(d2 = d2.call(y, x[1])).done)
              return d2;
            switch (y = 0, d2 && (x = [x[0] & 2, d2.value]), x[0]) {
              case 0:
              case 1:
                d2 = x;
                break;
              case 4:
                return s.label++, { value: x[1], done: false };
              case 5:
                s.label++, y = x[1], x = [0];
                continue;
              case 7:
                x = s.ops.pop(), s.trys.pop();
                continue;
              default:
                if (d2 = s.trys, !(d2 = d2.length > 0 && d2[d2.length - 1]) && (x[0] === 6 || x[0] === 2)) {
                  s = 0;
                  continue;
                }
                if (x[0] === 3 && (!d2 || x[1] > d2[0] && x[1] < d2[3])) {
                  s.label = x[1];
                  break;
                }
                if (x[0] === 6 && s.label < d2[1]) {
                  s.label = d2[1], d2 = x;
                  break;
                }
                if (d2 && s.label < d2[2]) {
                  s.label = d2[2], s.ops.push(x);
                  break;
                }
                d2[2] && s.ops.pop(), s.trys.pop();
                continue;
            }
            x = a.call(o, s);
          } catch (M) {
            x = [6, M], y = 0;
          } finally {
            l = d2 = 0;
          }
        if (x[0] & 5)
          throw x[1];
        return { value: x[0] ? x[1] : void 0, done: true };
      }
    }, N = function(o, a) {
      for (var s in o)
        s !== "default" && !Object.prototype.hasOwnProperty.call(a, s) && Q(a, o, s);
    }, Q = Object.create ? function(o, a, s, l) {
      l === void 0 && (l = s);
      var y = Object.getOwnPropertyDescriptor(a, s);
      (!y || ("get" in y ? !a.__esModule : y.writable || y.configurable)) && (y = { enumerable: true, get: function() {
        return a[s];
      } }), Object.defineProperty(o, l, y);
    } : function(o, a, s, l) {
      l === void 0 && (l = s), o[l] = a[s];
    }, k = function(o) {
      var a = typeof Symbol == "function" && Symbol.iterator, s = a && o[a], l = 0;
      if (s)
        return s.call(o);
      if (o && typeof o.length == "number")
        return { next: function() {
          return o && l >= o.length && (o = void 0), { value: o && o[l++], done: !o };
        } };
      throw new TypeError(a ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, L = function(o, a) {
      var s = typeof Symbol == "function" && o[Symbol.iterator];
      if (!s)
        return o;
      var l = s.call(o), y, d2 = [], w;
      try {
        for (; (a === void 0 || a-- > 0) && !(y = l.next()).done; )
          d2.push(y.value);
      } catch ($) {
        w = { error: $ };
      } finally {
        try {
          y && !y.done && (s = l.return) && s.call(l);
        } finally {
          if (w)
            throw w.error;
        }
      }
      return d2;
    }, G = function() {
      for (var o = [], a = 0; a < arguments.length; a++)
        o = o.concat(L(arguments[a]));
      return o;
    }, v = function() {
      for (var o = 0, a = 0, s = arguments.length; a < s; a++)
        o += arguments[a].length;
      for (var l = Array(o), y = 0, a = 0; a < s; a++)
        for (var d2 = arguments[a], w = 0, $ = d2.length; w < $; w++, y++)
          l[y] = d2[w];
      return l;
    }, S2 = function(o, a, s) {
      if (s || arguments.length === 2)
        for (var l = 0, y = a.length, d2; l < y; l++)
          (d2 || !(l in a)) && (d2 || (d2 = Array.prototype.slice.call(a, 0, l)), d2[l] = a[l]);
      return o.concat(d2 || Array.prototype.slice.call(a));
    }, E = function(o) {
      return this instanceof E ? (this.v = o, this) : new E(o);
    }, F = function(o, a, s) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var l = s.apply(o, a || []), y, d2 = [];
      return y = {}, w("next"), w("throw"), w("return"), y[Symbol.asyncIterator] = function() {
        return this;
      }, y;
      function w(V) {
        l[V] && (y[V] = function(ee) {
          return new Promise(function(ne, oe) {
            d2.push([V, ee, ne, oe]) > 1 || $(V, ee);
          });
        });
      }
      function $(V, ee) {
        try {
          Y(l[V](ee));
        } catch (ne) {
          K2(d2[0][3], ne);
        }
      }
      function Y(V) {
        V.value instanceof E ? Promise.resolve(V.value.v).then(x, M) : K2(d2[0][2], V);
      }
      function x(V) {
        $("next", V);
      }
      function M(V) {
        $("throw", V);
      }
      function K2(V, ee) {
        V(ee), d2.shift(), d2.length && $(d2[0][0], d2[0][1]);
      }
    }, z2 = function(o) {
      var a, s;
      return a = {}, l("next"), l("throw", function(y) {
        throw y;
      }), l("return"), a[Symbol.iterator] = function() {
        return this;
      }, a;
      function l(y, d2) {
        a[y] = o[y] ? function(w) {
          return (s = !s) ? { value: E(o[y](w)), done: false } : d2 ? d2(w) : w;
        } : d2;
      }
    }, B = function(o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var a = o[Symbol.asyncIterator], s;
      return a ? a.call(o) : (o = typeof k == "function" ? k(o) : o[Symbol.iterator](), s = {}, l("next"), l("throw"), l("return"), s[Symbol.asyncIterator] = function() {
        return this;
      }, s);
      function l(d2) {
        s[d2] = o[d2] && function(w) {
          return new Promise(function($, Y) {
            w = o[d2](w), y($, Y, w.done, w.value);
          });
        };
      }
      function y(d2, w, $, Y) {
        Promise.resolve(Y).then(function(x) {
          d2({ value: x, done: $ });
        }, w);
      }
    }, H2 = function(o, a) {
      return Object.defineProperty ? Object.defineProperty(o, "raw", { value: a }) : o.raw = a, o;
    };
    var Z = Object.create ? function(o, a) {
      Object.defineProperty(o, "default", { enumerable: true, value: a });
    } : function(o, a) {
      o.default = a;
    };
    D = function(o) {
      if (o && o.__esModule)
        return o;
      var a = {};
      if (o != null)
        for (var s in o)
          s !== "default" && Object.prototype.hasOwnProperty.call(o, s) && Q(a, o, s);
      return Z(a, o), a;
    }, I = function(o) {
      return o && o.__esModule ? o : { default: o };
    }, J = function(o, a, s, l) {
      if (s === "a" && !l)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof a == "function" ? o !== a || !l : !a.has(o))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return s === "m" ? l : s === "a" ? l.call(o) : l ? l.value : a.get(o);
    }, W = function(o, a, s, l, y) {
      if (l === "m")
        throw new TypeError("Private method is not writable");
      if (l === "a" && !y)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof a == "function" ? o !== a || !y : !a.has(o))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return l === "a" ? y.call(o, s) : y ? y.value = s : a.set(o, s), s;
    }, ae = function(o, a) {
      if (a === null || typeof a != "object" && typeof a != "function")
        throw new TypeError("Cannot use 'in' operator on non-object");
      return typeof o == "function" ? a === o : o.has(a);
    }, P("__extends", r), P("__assign", n), P("__rest", u), P("__decorate", i), P("__param", c), P("__esDecorate", f), P("__runInitializers", p), P("__propKey", O), P("__setFunctionName", j), P("__metadata", C), P("__awaiter", T), P("__generator", R2), P("__exportStar", N), P("__createBinding", Q), P("__values", k), P("__read", L), P("__spread", G), P("__spreadArrays", v), P("__spreadArray", S2), P("__await", E), P("__asyncGenerator", F), P("__asyncDelegator", z2), P("__asyncValues", B), P("__makeTemplateObject", H2), P("__importStar", D), P("__importDefault", I), P("__classPrivateFieldGet", J), P("__classPrivateFieldSet", W), P("__classPrivateFieldIn", ae);
  });
});
b();
m();
g();
h();
_();
b();
m();
g();
h();
_();
q$1(te());
function Et(t, e, r = 20) {
  if (e === "%grid%")
    t.setAttribute("style", `background-color: rgb(0, 102, 204); background-image: linear-gradient(rgba(255, 255, 255, 0.2) 2px, transparent 2px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 2px, transparent 1px), linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px); background-size: ${r * 5}px ${r * 5}px, ${r * 5}px ${r * 5}px, ${r}px ${r}px, ${r}px ${r}px; background-position: -1px -1px, -1px -1px, -1px -1px, -1px -1px; background-blend-mode: difference;`);
  else {
    let n;
    switch (e) {
      case void 0:
      case "light":
        n = "#FFF";
        break;
      case "dark":
        n = "#222";
        break;
      case "transparent":
        n = "#00000000";
        break;
      default:
        n = e;
        break;
    }
    t.setAttribute("style", `background: ${n}`);
  }
}
b();
m();
g();
h();
_();
b();
m();
g();
h();
_();
var we = q$1(te(), 1);
b();
m();
g();
h();
_();
var Pt = Object.defineProperty, de = Object.getOwnPropertySymbols, Le = Object.prototype.hasOwnProperty, Me = Object.prototype.propertyIsEnumerable, xe = (t, e, r) => e in t ? Pt(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r, Tt = (t, e) => {
  for (var r in e || (e = {}))
    Le.call(e, r) && xe(t, r, e[r]);
  if (de)
    for (var r of de(e))
      Me.call(e, r) && xe(t, r, e[r]);
  return t;
}, At = (t, e) => {
  var r = {};
  for (var n in t)
    Le.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && de)
    for (var n of de(t))
      e.indexOf(n) < 0 && Me.call(t, n) && (r[n] = t[n]);
  return r;
}, Ct = (t) => typeof t == "string" ? { name: t } : t, $t = (t) => typeof t == "string" ? { type: t } : t, Dt = (t, e) => {
  let r = t, { type: n, control: u } = r, i = At(r, ["type", "control"]), c = Tt({ name: e }, i);
  return n && (c.type = Ct(n)), u ? c.control = $t(u) : u === false && (c.control = { disable: true }), c;
}, Re = (t) => Object.fromEntries(Object.entries(t).map(([e, r]) => [e, Dt(r, e)])), Ft = Object.defineProperty, je = Object.getOwnPropertySymbols, It = Object.prototype.hasOwnProperty, kt = Object.prototype.propertyIsEnumerable, Se = (t, e, r) => e in t ? Ft(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r, re = (t, e) => {
  for (var r in e || (e = {}))
    It.call(e, r) && Se(t, r, e[r]);
  if (je)
    for (var r of je(e))
      kt.call(e, r) && Se(t, r, e[r]);
  return t;
};
function Nt(t, e, r) {
  let n, u;
  typeof e == "function" && (n = e), u = e;
  let { story: i } = u;
  i && console.warn("storyFn.story in now deprecated in StoryBook 6.0");
  let c = (0, we.storyNameFromExport)(t), f = typeof u != "function" && u.name || u.storyName || (i == null ? void 0 : i.name) || c, p = [...u.decorators || [], ...(i == null ? void 0 : i.decorators) || []], O = re(re({}, i == null ? void 0 : i.parameters), u.parameters), j = re(re({}, i == null ? void 0 : i.args), u.args), C = re(re({}, i == null ? void 0 : i.argTypes), u.argTypes), T = [...u.loaders || [], ...(i == null ? void 0 : i.loaders) || []], { render: R2, play: N } = u, k = O.__id || (0, we.toId)(r.id || r.title, c);
  return re(re(re({ id: k, name: f, decorators: p, parameters: O, args: j, argTypes: Re(C), loaders: T }, R2 && { render: R2 }), n && { userStoryFn: n }), N && { play: N });
}
b();
m();
g();
h();
_();
var Lt = q$1(te(), 1), Mt = Object.defineProperty, Rt = Object.defineProperties, Vt = Object.getOwnPropertyDescriptors, ye = Object.getOwnPropertySymbols, Ve = Object.prototype.hasOwnProperty, ze = Object.prototype.propertyIsEnumerable, Ee = (t, e, r) => e in t ? Mt(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r, be = (t, e) => {
  for (var r in e || (e = {}))
    Ve.call(e, r) && Ee(t, r, e[r]);
  if (ye)
    for (var r of ye(e))
      ze.call(e, r) && Ee(t, r, e[r]);
  return t;
}, Pe = (t, e) => Rt(t, Vt(e)), zt = (t, e) => {
  var r = {};
  for (var n in t)
    Ve.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && ye)
    for (var n of ye(t))
      e.indexOf(n) < 0 && ze.call(t, n) && (r[n] = t[n]);
  return r;
};
function Bt(t, e, r) {
  let n = t, { id: u, argTypes: i } = n, c = zt(n, ["id", "argTypes"]);
  return Pe(be(Pe(be({ id: (0, Lt.sanitize)(u || e) }, c), { title: e }), i && { argTypes: Re(i) }), { parameters: be({ fileName: r }, t.parameters) });
}
b();
m();
g();
h();
_();
b();
m();
g();
h();
_();
b();
m();
g();
h();
_();
b();
m();
g();
h();
_();
var Ut = Object.defineProperty, ve = Object.getOwnPropertySymbols, Be = Object.prototype.hasOwnProperty, Ue = Object.prototype.propertyIsEnumerable, Te = (t, e, r) => e in t ? Ut(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r, Ae = (t, e) => {
  for (var r in e || (e = {}))
    Be.call(e, r) && Te(t, r, e[r]);
  if (ve)
    for (var r of ve(e))
      Ue.call(e, r) && Te(t, r, e[r]);
  return t;
}, Kt = (t, e) => {
  var r = {};
  for (var n in t)
    Be.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && ve)
    for (var n of ve(t))
      e.indexOf(n) < 0 && Ue.call(t, n) && (r[n] = t[n]);
  return r;
};
function Gt(t, e, r) {
  let n = r(t);
  return (u) => e(n, u);
}
function Ht(t = {}) {
  var e = t, C = Kt(e, ["componentId", "title", "kind", "id", "name", "story", "parameters", "initialArgs", "argTypes"]);
  return C;
}
function Zt(t, e) {
  let r = {}, n = (i) => (c) => (r.value = Ae(Ae({}, r.value), Ht(c)), i(r.value)), u = e.reduce((i, c) => Gt(i, c, n), t);
  return (i) => (r.value = i, u(i));
}
b();
m();
g();
h();
_();
var Yt = (t = {}) => Object.entries(t).reduce((e, [r, { defaultValue: n }]) => (typeof n < "u" && (e[r] = n), e), {}), Jt = Object.defineProperty, Wt = Object.defineProperties, Xt = Object.getOwnPropertyDescriptors, Ce = Object.getOwnPropertySymbols, qt = Object.prototype.hasOwnProperty, Qt = Object.prototype.propertyIsEnumerable, $e = (t, e, r) => e in t ? Jt(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r, U$1 = (t, e) => {
  for (var r in e || (e = {}))
    qt.call(e, r) && $e(t, r, e[r]);
  if (Ce)
    for (var r of Ce(e))
      Qt.call(e, r) && $e(t, r, e[r]);
  return t;
}, se = (t, e) => Wt(t, Xt(e));
function er(t, e, r) {
  let { id: n, name: u } = t, { title: i } = e, c = U$1(U$1(U$1({}, r.parameters), e.parameters), t.parameters), f = [...t.decorators || [], ...e.decorators || [], ...r.decorators || []], { applyDecorators: p = Zt, argTypesEnhancers: O = [], argsEnhancers: j = [] } = r, C = [...r.loaders || [], ...e.loaders || [], ...t.loaders || []], T = t.userStoryFn || t.render || e.render || r.render, R2 = U$1(U$1(U$1({}, r.argTypes), e.argTypes), t.argTypes), { passArgsFirst: N = true } = c;
  c.__isArgsStory = N && (!T || T.length > 0);
  let k = U$1(U$1(U$1({}, r.args), e.args), t.args), L = { componentId: e.id, title: i, kind: i, id: n, name: u, story: u, component: e.component, subcomponents: e.subcomponents, parameters: c, initialArgs: k, argTypes: R2 };
  L.argTypes = O.reduce((D, I) => I(se(U$1({}, L), { argTypes: D })), L.argTypes);
  let G = Yt(L.argTypes);
  Object.keys(G).length > 0 && console.warn("`argType.defaultValue` is deprecated and will be removed in Storybook 7.0.");
  let v = U$1(U$1({}, G), k);
  L.initialArgs = j.reduce((D, I) => U$1(U$1({}, D), I(se(U$1({}, L), { initialArgs: D }))), v);
  let S2 = async (D) => {
    let I = await Promise.all(C.map((W) => W(D))), J = Object.assign({}, ...I);
    return se(U$1({}, D), { loaded: J });
  }, E = (D) => {
    let I = Object.entries(D.args).reduce((ae, [Q, P]) => {
      var X;
      let Z = (X = D.argTypes[Q]) == null ? void 0 : X.mapping;
      return ae[Q] = Z && P in Z ? Z[P] : P, ae;
    }, {}), J = se(U$1({}, D), { args: I }), { passArgsFirst: W = true } = D.parameters;
    return W ? T(J.args, J) : T(J);
  }, F = p(E, f), z2 = (D) => F(D), B = t.play, H2 = t.renderToDOM || e.renderToDOM || r.renderToDOM;
  return Object.freeze(se(U$1({}, L), { originalStoryFn: T, undecoratedStoryFn: E, unboundStoryFn: z2, applyLoaders: S2, playFunction: B, renderToDOM: H2 }));
}
b();
m();
g();
h();
_();
q$1(te(), 1);
b();
m();
g();
h();
_();
q$1(te(), 1);
b();
m();
g();
h();
_();
b();
m();
g();
h();
_();
function tr(t) {
  let e = t.replace(/([^/])\.[^/.]*?$/, "$1").split("/").map((r) => r.replace(/\.stories$/, "")).filter((r) => r && r !== "stories" && r !== "index" && r !== "src" && r !== ".." && r !== ".");
  return e.filter((r, n) => r !== e[n - 1]).join("/");
}
q$1(te(), 1);
function rr(t, e, r = {}, n, u = {}) {
  let i = Bt(r, r.title || tr(n) || "Stories", n), c = Nt(e, t, i);
  return er(c, i, u);
}
b();
m();
g();
h();
_();
var nr = Object.defineProperty, or = Object.defineProperties, ar = Object.getOwnPropertyDescriptors, De = Object.getOwnPropertySymbols, ur = Object.prototype.hasOwnProperty, ir = Object.prototype.propertyIsEnumerable, Fe = (t, e, r) => e in t ? nr(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r, ie = (t, e) => {
  for (var r in e || (e = {}))
    ur.call(e, r) && Fe(t, r, e[r]);
  if (De)
    for (var r of De(e))
      ir.call(e, r) && Fe(t, r, e[r]);
  return t;
}, me = (t, e) => or(t, ar(e));
async function cr(t, e, r, n, u) {
  let { applyLoaders: i } = t, c = ie(ie({}, t.initialArgs), u), f = me(ie({}, t), { args: c, globals: {}, hooks: null }), p = await i(me(ie({}, f), { viewMode: r }));
  return n != null && n.aborted ? {} : me(ie(ie({}, p), f), { abortSignal: n, canvasElement: e });
}
b();
m();
g();
h();
_();
b();
m();
g();
h();
_();
q$1(te(), 1);
b();
m();
g();
h();
_();
b();
m();
g();
h();
_();
q$1(te(), 1);
q$1(te(), 1);
q$1(te(), 1);
b();
m();
g();
h();
_();
b();
m();
g();
h();
_();
b();
m();
g();
h();
_();
function fe(t) {
  let e = Object.prototype.toString.call(t).slice(8, -1);
  if (e === "Object")
    return t._$story_type$ !== void 0 ? t._$story_type$ : typeof t[Symbol.iterator] == "function" ? "Iterable" : String(t.$$typeof) === "Symbol(react.element)" ? "React" : t.$flags$ !== void 0 ? "Stencil" : t.constructor === void 0 ? "Preact" : t._$litType$ !== void 0 ? "TemplateResult" : "nodeName" in t && "children" in t ? "Omi" : "css" in t && "template" in t && "exports" in t && "name" in t ? "Riot" : "Component" in t && fe(t.Component) === "Riot" ? "RiotStory" : "Component" in t && fe(t.Component) === "Svelte" ? "SvelteStory" : "__v_isVNode" in t || "__scopeId" in t || "components" in t && ("template" in t || "render" in t) ? "Vue" : t.component && t.component.__annotations__ && t.component.__annotations__[0] && t.component.__annotations__[0].ngMetadataName === "Component" ? "Angular" : t.constructor.name;
  if (e === "Array") {
    let r = false;
    for (let n of t)
      if (!(n === null || typeof n == "boolean" || typeof n == "string" || typeof n == "number"))
        if (fe(n) === "Omi")
          r = true;
        else {
          r = false;
          break;
        }
    if (r)
      return "Omi";
  } else if (e === "Function") {
    if (t._$story_type$ !== void 0)
      return t._$story_type$;
    let r = t.toString();
    if ("CustomElementConstructor" in t)
      return "Lwc";
    if (r.includes("extends SvelteComponent") || r.includes("extends ProxyComponent"))
      return "Svelte";
    if (r.includes("_tmpl$.cloneNode(true)") || r.includes("_$createComponent("))
      return "Solid";
  } else if (t instanceof Element && t.nodeType === 1)
    return "Element";
  return e;
}
b();
m();
g();
h();
_();
b();
m();
g();
h();
_();
var sr = q$1(St(), 1), { __extends: _r, __assign: Or, __rest: wr, __decorate: ge, __param: xr, __esDecorate: jr, __runInitializers: Sr, __propKey: Er, __setFunctionName: Pr, __metadata: Ie, __awaiter: Tr, __generator: Ar, __exportStar: Cr, __createBinding: $r, __values: Dr, __read: Fr, __spread: Ir, __spreadArrays: kr, __spreadArray: Nr, __await: Lr, __asyncGenerator: Mr, __asyncDelegator: Rr, __asyncValues: Vr, __makeTemplateObject: zr, __importStar: Br, __importDefault: Ur, __classPrivateFieldGet: Kr, __classPrivateFieldSet: Gr, __classPrivateFieldIn: Hr } = sr.default;
async function lr(t, e, r, n) {
  var u, i;
  switch (r) {
    case "RenderFn":
      return e(n), true;
    case "RenderProp":
      return e.render(n), true;
    case "Lwc":
      return n.appendChild((await t("lwc")).createElement("c-story", { is: e })), true;
    case "TemplateResult":
      return (await t("lit-html")).render(e, n), true;
    case "ViewTemplate": {
      let c = e.render({}, n);
      return () => c.dispose();
    }
    case "Hole":
      return (await t("uhtml")).render(n, e), true;
    case "LighterHole":
      return (await t("lighterhtml")).render(n, e), true;
    case "Stencil": {
      let c = await t("@stencil/core/internal/client");
      return "BUILD" in c ? c.renderVdom({ $hostElement$: n, $cmpMeta$: {} }, e) : c.renderVdom(n, {}, {}, e), true;
    }
    case "React": {
      let c = await t("react-dom");
      return c.render(e, n), () => {
        c.unmountComponentAtNode(n);
      };
    }
    case "Preact":
      return (await t("preact")).render(e, n), true;
    case "Omi":
      return (await t("omi")).render(e, n), true;
    case "Riot":
      return (await t("riot")).component(e)(n, {}), true;
    case "RiotStory": {
      let { Component: c, props: f, options: p } = e;
      return (await t("riot")).component(c)(n, f, p), true;
    }
    case "Solid":
      return (await t("solid-js/web")).render(e, n), true;
    case "Svelte": {
      let c = new e({ target: n });
      return () => c.$destroy();
    }
    case "SvelteStory": {
      let _a = e, { Component: c } = _a, f = __objRest(_a, ["Component"]), p = new c(__spreadValues({ target: n }, f));
      return () => p.$destroy();
    }
    case "Vue": {
      let c = await t("vue"), f = e.app || n.__vue_app__, p;
      if (!f)
        p = c.createApp({ setup: () => () => c.h(e) }), p.mount(n);
      else {
        let O = c.h(e);
        O.appContext = f._context, c.render(O, n);
      }
      return () => {
        f ? f.unmount() : p.unmount();
      };
    }
    case "Element":
    case "DocumentFragment":
      return n.appendChild(e), true;
    case "Angular": {
      let { props: c, component: f } = e, { platformBrowserDynamic: p } = await t("@angular/platform-browser-dynamic"), { Component: O, NgModule: j, destroyPlatform: C, ComponentFactoryResolver: T, ViewChild: R2, ViewContainerRef: N } = await t("@angular/core"), { BrowserModule: k } = await t("@angular/platform-browser"), { moduleMetadata: { imports: L = [], declarations: G = [], bootstrap: v = [], providers: S2 = [], schemas: E = [] } = {} } = e, F = class {
        constructor(B) {
          this.resolver = B;
        }
        ngAfterViewInit() {
          let B = this.resolver.resolveComponentFactory(f), H2 = this.container.createComponent(B), D = f.__prop__metadata__;
          Object.keys(c).map((I) => {
            D[I] && D[I][0].ngMetadataName === "Output" ? H2.instance[I].subscribe(c[I]) : H2.instance[I] = c[I];
          });
        }
      };
      ge([R2("container", { read: N }), Ie("design:type", typeof (u = typeof N < "u" && N) == "function" ? u : Object)], F.prototype, "vc", void 0), F = ge([O({ selector: n, template: "<ng-container #container></ng-container>" }), Ie("design:paramtypes", [typeof (i = typeof T < "u" && T) == "function" ? i : Object])], F);
      let z2 = class {
      };
      return z2 = ge([j({ imports: [k, ...L], declarations: [F, f, ...G], bootstrap: [F, ...v], entryComponents: [f], schemas: E, providers: S2 })], z2), p().bootstrapModule(z2), () => C();
    }
  }
  return false;
}
b();
m();
g();
h();
_();
var he = { CLOSED: "closed", TOPONLY: "top-only", FULL: "full" }, pe = class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._value = {}, this.open = he.CLOSED;
  }
  set value(t) {
    this._value = t, this.render();
  }
  get value() {
    return this._value;
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = `
    <style>
      ${pe.styles}
    </style>
    ${this.renderNode(void 0, this._value, 0)}`;
  }
  renderNode(t, e, r) {
    let n = pe.objType(e);
    switch (n) {
      case "Object":
      case "Array":
        return this.renderParent(n, t, e, r);
      default:
        return this.renderKeyValue(t, this.renderValue(n, e));
    }
  }
  renderValue(t, e) {
    switch (t) {
      case "Boolean":
        return `${e ? "true" : "false"}`;
      case "String":
        return `"${e}"`;
      case "Number":
        return `${e}`;
      case "Date":
        return `${e.toISOString()}`;
      case "Null":
        return "null";
      case "Undefined":
        return "undefined";
      case "Function":
      case "Symbol":
        return `${e.toString()}`;
      default:
        return "###unsupported yet###";
    }
  }
  renderParent(t, e, r, n) {
    let u = this.open === he.FULL || this.open === he.TOPONLY && n == 0, i = `<summary>${this.renderSummaryObject(t, e, r)}</summary>`, c = "", f = Reflect.ownKeys(r), p = n + 1;
    return f.forEach((O) => {
      c += this.renderNode(O, r[O], p);
    }), `<details${u ? " open" : ""}>${i}<div>${c}</div></details>`;
  }
  renderKeyValue(t, e) {
    return `<div>${this.renderSpanKey(t)}${this.renderSpanValue(e)}</div>`;
  }
  renderSpanKey(t) {
    return t ? `<span class="key">${t}: </span>` : "";
  }
  renderSpanValue(t) {
    return t ? `<pre class="value">${t}</pre>` : "";
  }
  renderSpanLessImportant(t) {
    return t ? `<span class="less">${t}</span>` : "";
  }
  renderSummaryObject(t, e, r) {
    let n = this.renderSpanKey(e), u = "", i = "", c = "";
    switch (t) {
      case "Object":
        u = "Object {", i = "}", c = Reflect.ownKeys(r).reduce((p, O, j) => {
          if (j > 5)
            return false;
          if (j == 5)
            return p + ` ${this.renderSpanLessImportant("...")}`;
          let C = r[O];
          return p + ` ${this.renderSpanKey(O)}${this.renderSummaryValue(C)}`;
        }, "");
        break;
      case "Array":
        u = `Array(${r.length}) [`, i = " ]";
        let f = r.slice(0, 5);
        f.forEach((p, O) => {
          c += ` ${this.renderSpanKey("" + O)}${this.renderSummaryValue(p)}`;
        }), f.length < r.length && (c += ` ${this.renderSpanLessImportant("...")}`);
        break;
    }
    return `${n}${u} <span class="show-when-closed">${c}</span> ${i}`;
  }
  renderSummaryValue(t) {
    let e = pe.objType(t);
    switch (e) {
      case "Object":
        return this.renderSpanLessImportant("{...}");
      case "Array":
        return this.renderSpanLessImportant("[...]");
      default:
        return this.renderSpanValue(this.renderValue(e, t));
    }
  }
  static objType(t) {
    let e = Object.prototype.toString.call(t).slice(8, -1);
    return e === "Object" ? typeof t[Symbol.iterator] == "function" ? "Iterable" : t.constructor.name : e;
  }
  static get styles() {
    return `
      :host {
        font-family: monospace;
      }

      pre {
        display: inline;
      }

      details > summary:focus {
        outline: none;
      }
      
      details > div {
        padding-left: 15px;
      }

      details[open=""] > summary > .show-when-closed {
        display : none;
      }

      .key {
        color: purple;
      }

      .value {
        color: green;
      }

      .less {
        color: grey;
      }

    `;
  }
};
try {
  customElements.define("json-element", pe);
} catch {
}
async function Zr(t, e, r) {
  let n = fe(e), u = await lr(t, e, n, r);
  if (typeof u == "function") {
    r.ownerDocument.defaultView.addEventListener("unload", u);
    let i = new MutationObserver((c) => {
      for (let f of c)
        for (let p of Array.from(f.removedNodes || []))
          if (p == r) {
            u(), i.disconnect();
            return;
          }
    });
    return r.parentNode && i.observe(r.parentNode, { childList: true }), u;
  }
  if (!u)
    switch (n) {
      case "String": {
        let i = e.trim();
        if (i.match(/^<[^>]*>[\s\S]*<\/[^>]*>$/g)) {
          r.innerHTML = i;
          break;
        }
      }
      default: {
        let i = document.createElement("json-element");
        i.value = e, i.open = "full", r.insertAdjacentElement("beforeend", i);
        break;
      }
    }
}
async function fr(t, e, r, n) {
  if (!e)
    return () => "Missing 'framework' for CSF v3 story format, either add 'framework' to default export or add @storybook/react (or other) to dependencies";
  switch (e) {
    case "react":
      let u = await t("react");
      return (f, { component: p }) => u.createElement(p, f);
    case "preact":
      let i = await t("preact");
      return (f, { component: p }) => i.h(p, f);
    case "vue3":
      let c = await t("vue");
      return (f, { component: p }) => c.createVNode(p, f);
  }
  return () => `Unsupported story framework for CSF v3: ${e}`;
}
async function Yr(t, e, r, n, u, i, c, f, p) {
  let O = e.framework || (n == null ? void 0 : n.framework), j = rr(e, r, n, c, { render: await fr(u, O) }), { unboundStoryFn: C } = j, T = await cr(j, t, i, f, p), R2 = "padded";
  T.parameters.layout && (["padded", "centered", "fullscreen"].includes(T.parameters.layout) ? R2 = T.parameters.layout : console.error(`Unsupported layout: ${T.parameters.layout}`)), t.className = `story_${R2}`;
  let { backgrounds: N, grid: k } = T.parameters;
  return (N || k) && Et(t, N == null ? void 0 : N.default, k == null ? void 0 : k.cellSize), { story: j, storyContext: T, storyFn: () => C(T) };
}
var CA = Object.create, iA = Object.defineProperty, EA = Object.getOwnPropertyDescriptor, cA = Object.getOwnPropertyNames, BA = Object.getPrototypeOf, uA = Object.prototype.hasOwnProperty, q = (A2, e) => () => (A2 && (e = A2(A2 = 0)), e), dA = (A2, e) => () => (e || A2((e = { exports: {} }).exports, e), e.exports), hA = (A2, e, i, t) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let Q of cA(e))
      !uA.call(A2, Q) && Q !== i && iA(A2, Q, { get: () => e[Q], enumerable: !(t = EA(e, Q)) || t.enumerable });
  return A2;
}, IA = (A2, e, i) => (i = A2 != null ? CA(BA(A2)) : {}, hA(e || !A2 || !A2.__esModule ? iA(i, "default", { value: A2, enumerable: true }) : i, A2)), H = q(() => {
}), R = q(() => {
}), S = q(() => {
}), U = q(() => {
}), K = q(() => {
}), pA = dA((A2, e) => {
  H(), R(), S(), U(), K();
  var i = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {}, t = function(Q) {
    var E = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, B = 0, I = {}, o = { manual: Q.Prism && Q.Prism.manual, disableWorkerMessageHandler: Q.Prism && Q.Prism.disableWorkerMessageHandler, util: { encode: function n(a) {
      return a instanceof p ? new p(a.type, n(a.content), a.alias) : Array.isArray(a) ? a.map(n) : a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(n) {
      return Object.prototype.toString.call(n).slice(8, -1);
    }, objId: function(n) {
      return n.__id || Object.defineProperty(n, "__id", { value: ++B }), n.__id;
    }, clone: function n(a, r) {
      r = r || {};
      var s, g2;
      switch (o.util.type(a)) {
        case "Object":
          if (g2 = o.util.objId(a), r[g2])
            return r[g2];
          s = {}, r[g2] = s;
          for (var C in a)
            a.hasOwnProperty(C) && (s[C] = n(a[C], r));
          return s;
        case "Array":
          return g2 = o.util.objId(a), r[g2] ? r[g2] : (s = [], r[g2] = s, a.forEach(function(c, l) {
            s[l] = n(c, r);
          }), s);
        default:
          return a;
      }
    }, getLanguage: function(n) {
      for (; n; ) {
        var a = E.exec(n.className);
        if (a)
          return a[1].toLowerCase();
        n = n.parentElement;
      }
      return "none";
    }, setLanguage: function(n, a) {
      n.className = n.className.replace(RegExp(E, "gi"), ""), n.classList.add("language-" + a);
    }, currentScript: function() {
      if (typeof document > "u")
        return null;
      if ("currentScript" in document && 1 < 2)
        return document.currentScript;
      try {
        throw new Error();
      } catch (s) {
        var n = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(s.stack) || [])[1];
        if (n) {
          var a = document.getElementsByTagName("script");
          for (var r in a)
            if (a[r].src == n)
              return a[r];
        }
        return null;
      }
    }, isActive: function(n, a, r) {
      for (var s = "no-" + a; n; ) {
        var g2 = n.classList;
        if (g2.contains(a))
          return true;
        if (g2.contains(s))
          return false;
        n = n.parentElement;
      }
      return !!r;
    } }, languages: { plain: I, plaintext: I, text: I, txt: I, extend: function(n, a) {
      var r = o.util.clone(o.languages[n]);
      for (var s in a)
        r[s] = a[s];
      return r;
    }, insertBefore: function(n, a, r, s) {
      s = s || o.languages;
      var g2 = s[n], C = {};
      for (var c in g2)
        if (g2.hasOwnProperty(c)) {
          if (c == a)
            for (var l in r)
              r.hasOwnProperty(l) && (C[l] = r[l]);
          r.hasOwnProperty(c) || (C[c] = g2[c]);
        }
      var h2 = s[n];
      return s[n] = C, o.languages.DFS(o.languages, function(m2, F) {
        F === h2 && m2 != n && (this[m2] = C);
      }), C;
    }, DFS: function n(a, r, s, g2) {
      g2 = g2 || {};
      var C = o.util.objId;
      for (var c in a)
        if (a.hasOwnProperty(c)) {
          r.call(a, c, a[c], s || c);
          var l = a[c], h2 = o.util.type(l);
          h2 === "Object" && !g2[C(l)] ? (g2[C(l)] = true, n(l, r, null, g2)) : h2 === "Array" && !g2[C(l)] && (g2[C(l)] = true, n(l, r, c, g2));
        }
    } }, plugins: {}, highlightAll: function(n, a) {
      o.highlightAllUnder(document, n, a);
    }, highlightAllUnder: function(n, a, r) {
      var s = { callback: r, container: n, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
      o.hooks.run("before-highlightall", s), s.elements = Array.prototype.slice.apply(s.container.querySelectorAll(s.selector)), o.hooks.run("before-all-elements-highlight", s);
      for (var g2 = 0, C; C = s.elements[g2++]; )
        o.highlightElement(C, a === true, s.callback);
    }, highlightElement: function(n, a, r) {
      var s = o.util.getLanguage(n), g2 = o.languages[s];
      o.util.setLanguage(n, s);
      var C = n.parentElement;
      C && C.nodeName.toLowerCase() === "pre" && o.util.setLanguage(C, s);
      var c = n.textContent, l = { element: n, language: s, grammar: g2, code: c };
      function h2(F) {
        l.highlightedCode = F, o.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, o.hooks.run("after-highlight", l), o.hooks.run("complete", l), r && r.call(l.element);
      }
      if (o.hooks.run("before-sanity-check", l), C = l.element.parentElement, C && C.nodeName.toLowerCase() === "pre" && !C.hasAttribute("tabindex") && C.setAttribute("tabindex", "0"), !l.code) {
        o.hooks.run("complete", l), r && r.call(l.element);
        return;
      }
      if (o.hooks.run("before-highlight", l), !l.grammar) {
        h2(o.util.encode(l.code));
        return;
      }
      if (a && Q.Worker) {
        var m2 = new Worker(o.filename);
        m2.onmessage = function(F) {
          h2(F.data);
        }, m2.postMessage(JSON.stringify({ language: l.language, code: l.code, immediateClose: true }));
      } else
        h2(o.highlight(l.code, l.grammar, l.language));
    }, highlight: function(n, a, r) {
      var s = { code: n, grammar: a, language: r };
      if (o.hooks.run("before-tokenize", s), !s.grammar)
        throw new Error('The language "' + s.language + '" has no grammar.');
      return s.tokens = o.tokenize(s.code, s.grammar), o.hooks.run("after-tokenize", s), p.stringify(o.util.encode(s.tokens), s.language);
    }, tokenize: function(n, a) {
      var r = a.rest;
      if (r) {
        for (var s in r)
          a[s] = r[s];
        delete a.rest;
      }
      var g2 = new J();
      return L(g2, g2.head, n), D(n, g2, a, g2.head, 0), G(g2);
    }, hooks: { all: {}, add: function(n, a) {
      var r = o.hooks.all;
      r[n] = r[n] || [], r[n].push(a);
    }, run: function(n, a) {
      var r = o.hooks.all[n];
      if (!(!r || !r.length))
        for (var s = 0, g2; g2 = r[s++]; )
          g2(a);
    } }, Token: p };
    Q.Prism = o;
    function p(n, a, r, s) {
      this.type = n, this.content = a, this.alias = r, this.length = (s || "").length | 0;
    }
    p.stringify = function n(a, r) {
      if (typeof a == "string")
        return a;
      if (Array.isArray(a)) {
        var s = "";
        return a.forEach(function(h2) {
          s += n(h2, r);
        }), s;
      }
      var g2 = { type: a.type, content: n(a.content, r), tag: "span", classes: ["token", a.type], attributes: {}, language: r }, C = a.alias;
      C && (Array.isArray(C) ? Array.prototype.push.apply(g2.classes, C) : g2.classes.push(C)), o.hooks.run("wrap", g2);
      var c = "";
      for (var l in g2.attributes)
        c += " " + l + '="' + (g2.attributes[l] || "").replace(/"/g, "&quot;") + '"';
      return "<" + g2.tag + ' class="' + g2.classes.join(" ") + '"' + c + ">" + g2.content + "</" + g2.tag + ">";
    };
    function N(n, a, r, s) {
      n.lastIndex = a;
      var g2 = n.exec(r);
      if (g2 && s && g2[1]) {
        var C = g2[1].length;
        g2.index += C, g2[0] = g2[0].slice(C);
      }
      return g2;
    }
    function D(n, a, r, s, g2, C) {
      for (var c in r)
        if (!(!r.hasOwnProperty(c) || !r[c])) {
          var l = r[c];
          l = Array.isArray(l) ? l : [l];
          for (var h2 = 0; h2 < l.length; ++h2) {
            if (C && C.cause == c + "," + h2)
              return;
            var m2 = l[h2], F = m2.inside, Z = !!m2.lookbehind, V = !!m2.greedy, oA = m2.alias;
            if (V && !m2.pattern.global) {
              var gA = m2.pattern.toString().match(/[imsuy]*$/)[0];
              m2.pattern = RegExp(m2.pattern.source, gA + "g");
            }
            for (var W = m2.pattern || m2, k = s.next, v = g2; k !== a.tail && !(C && v >= C.reach); v += k.value.length, k = k.next) {
              var x = k.value;
              if (a.length > n.length)
                return;
              if (!(x instanceof p)) {
                var M = 1, y;
                if (V) {
                  if (y = N(W, v, n, Z), !y || y.index >= n.length)
                    break;
                  var $ = y.index, QA = y.index + y[0].length, b2 = v;
                  for (b2 += k.value.length; $ >= b2; )
                    k = k.next, b2 += k.value.length;
                  if (b2 -= k.value.length, v = b2, k.value instanceof p)
                    continue;
                  for (var Y = k; Y !== a.tail && (b2 < QA || typeof Y.value == "string"); Y = Y.next)
                    M++, b2 += Y.value.length;
                  M--, x = n.slice(v, b2), y.index -= v;
                } else if (y = N(W, 0, x, Z), !y)
                  continue;
                var $ = y.index, j = y[0], P = x.slice(0, $), AA = x.slice($ + j.length), T = v + x.length;
                C && T > C.reach && (C.reach = T);
                var O = k.prev;
                P && (O = L(a, O, P), v += P.length), _2(a, O, M);
                var lA = new p(c, F ? o.tokenize(j, F) : j, oA, j);
                if (k = L(a, O, lA), AA && L(a, k, AA), M > 1) {
                  var X = { cause: c + "," + h2, reach: T };
                  D(n, a, r, k.prev, v, X), C && X.reach > C.reach && (C.reach = X.reach);
                }
              }
            }
          }
        }
    }
    function J() {
      var n = { value: null, prev: null, next: null }, a = { value: null, prev: n, next: null };
      n.next = a, this.head = n, this.tail = a, this.length = 0;
    }
    function L(n, a, r) {
      var s = a.next, g2 = { value: r, prev: a, next: s };
      return a.next = g2, s.prev = g2, n.length++, g2;
    }
    function _2(n, a, r) {
      for (var s = a.next, g2 = 0; g2 < r && s !== n.tail; g2++)
        s = s.next;
      a.next = s, s.prev = a, n.length -= g2;
    }
    function G(n) {
      for (var a = [], r = n.head.next; r !== n.tail; )
        a.push(r.value), r = r.next;
      return a;
    }
    if (!Q.document)
      return Q.addEventListener && (o.disableWorkerMessageHandler || Q.addEventListener("message", function(n) {
        var a = JSON.parse(n.data), r = a.language, s = a.code, g2 = a.immediateClose;
        Q.postMessage(o.highlight(s, o.languages[r], r)), g2 && Q.close();
      }, false)), o;
    var f = o.util.currentScript();
    f && (o.filename = f.src, f.hasAttribute("data-manual") && (o.manual = true));
    function u() {
      o.manual || o.highlightAll();
    }
    if (!o.manual) {
      var w = document.readyState;
      w === "loading" || w === "interactive" && f && f.defer ? document.addEventListener("DOMContentLoaded", u) : window.requestAnimationFrame ? window.requestAnimationFrame(u) : window.setTimeout(u, 16);
    }
    return o;
  }(i);
  typeof e < "u" && e.exports && (e.exports = t), typeof globalThis < "u" && (globalThis.Prism = t), t.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: true }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: true }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: true, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: true, greedy: true, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: true }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: true }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: true, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, t.languages.markup.tag.inside["attr-value"].inside.entity = t.languages.markup.entity, t.languages.markup.doctype.inside["internal-subset"].inside = t.languages.markup, t.hooks.add("wrap", function(Q) {
    Q.type === "entity" && (Q.attributes.title = Q.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(t.languages.markup.tag, "addInlined", { value: function(Q, E) {
    var B = {};
    B["language-" + E] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: true, inside: t.languages[E] }, B.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var I = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: B } };
    I["language-" + E] = { pattern: /[\s\S]+/, inside: t.languages[E] };
    var o = {};
    o[Q] = { pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
      return Q;
    }), "i"), lookbehind: true, greedy: true, inside: I }, t.languages.insertBefore("markup", "cdata", o);
  } }), Object.defineProperty(t.languages.markup.tag, "addAttribute", { value: function(Q, E) {
    t.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(/(^|["'\s])/.source + "(?:" + Q + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"), lookbehind: true, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: true, alias: [E, "language-" + E], inside: t.languages[E] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
  } }), t.languages.html = t.languages.markup, t.languages.mathml = t.languages.markup, t.languages.svg = t.languages.markup, t.languages.xml = t.languages.extend("markup", {}), t.languages.ssml = t.languages.xml, t.languages.atom = t.languages.xml, t.languages.rss = t.languages.xml, function(Q) {
    var E = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    Q.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: true, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: true } } }, url: { pattern: RegExp("\\burl\\((?:" + E.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: true, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + E.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + E.source + ")*(?=\\s*\\{)"), lookbehind: true }, string: { pattern: E, greedy: true }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: true }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: true }, punctuation: /[(){};:,]/ }, Q.languages.css.atrule.inside.rest = Q.languages.css;
    var B = Q.languages.markup;
    B && (B.tag.addInlined("style", "css"), B.tag.addAttribute("style", "css"));
  }(t), t.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true, greedy: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ }, t.languages.javascript = t.languages.extend("clike", { "class-name": [t.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: true }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: true }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source), lookbehind: true }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), t.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, t.languages.insertBefore("javascript", "keyword", { regex: { pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source), lookbehind: true, greedy: true, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: true, alias: "language-regex", inside: t.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: true, inside: t.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: true, inside: t.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: true, inside: t.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: true, inside: t.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), t.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: true, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: true, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: true, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: t.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: true, greedy: true, alias: "property" } }), t.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: true, alias: "property" } }), t.languages.markup && (t.languages.markup.tag.addInlined("script", "javascript"), t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), t.languages.js = t.languages.javascript, function() {
    if (typeof t > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var Q = "Loading\u2026", E = function(f, u) {
      return "\u2716 Error " + f + " while fetching file: " + u;
    }, B = "\u2716 Error: File does not exist or is empty", I = { js: "javascript", py: "python", rb: "ruby", ps1: "powershell", psm1: "powershell", sh: "bash", bat: "batch", h: "c", tex: "latex" }, o = "data-src-status", p = "loading", N = "loaded", D = "failed", J = "pre[data-src]:not([" + o + '="' + N + '"]):not([' + o + '="' + p + '"])';
    function L(f, u, w) {
      var n = new XMLHttpRequest();
      n.open("GET", f, true), n.onreadystatechange = function() {
        n.readyState == 4 && (n.status < 400 && n.responseText ? u(n.responseText) : n.status >= 400 ? w(E(n.status, n.statusText)) : w(B));
      }, n.send(null);
    }
    function _2(f) {
      var u = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(f || "");
      if (u) {
        var w = Number(u[1]), n = u[2], a = u[3];
        return n ? a ? [w, Number(a)] : [w, void 0] : [w, w];
      }
    }
    t.hooks.add("before-highlightall", function(f) {
      f.selector += ", " + J;
    }), t.hooks.add("before-sanity-check", function(f) {
      var u = f.element;
      if (u.matches(J)) {
        f.code = "", u.setAttribute(o, p);
        var w = u.appendChild(document.createElement("CODE"));
        w.textContent = Q;
        var n = u.getAttribute("data-src"), a = f.language;
        if (a === "none") {
          var r = (/\.(\w+)$/.exec(n) || [, "none"])[1];
          a = I[r] || r;
        }
        t.util.setLanguage(w, a), t.util.setLanguage(u, a);
        var s = t.plugins.autoloader;
        s && s.loadLanguages(a), L(n, function(g2) {
          u.setAttribute(o, N);
          var C = _2(u.getAttribute("data-range"));
          if (C) {
            var c = g2.split(/\r\n?|\n/g), l = C[0], h2 = C[1] == null ? c.length : C[1];
            l < 0 && (l += c.length), l = Math.max(0, Math.min(l - 1, c.length)), h2 < 0 && (h2 += c.length), h2 = Math.max(0, Math.min(h2, c.length)), g2 = c.slice(l, h2).join(`
`), u.hasAttribute("data-start") || u.setAttribute("data-start", String(l + 1));
          }
          w.textContent = g2, t.highlightElement(w);
        }, function(g2) {
          u.setAttribute(o, D), w.textContent = g2;
        });
      }
    }), t.plugins.fileHighlight = { highlight: function(f) {
      for (var u = (f || document).querySelectorAll(J), w = 0, n; n = u[w++]; )
        t.highlightElement(n);
    } };
    var G = false;
    t.fileHighlight = function() {
      G || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), G = true), t.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
});
H();
R();
S();
U();
K();
H();
R();
S();
U();
K();
H();
R();
S();
U();
K();
function* fA(A2) {
  let e = A2.ownerDocument.getSelection(), i = e.rangeCount === 1 && e.getRangeAt(0), t = wA(A2, i);
  yield t;
  let Q = mA(A2, t);
  Q && (e.removeAllRanges(), e.addRange(Q));
}
function wA(A2, e) {
  if (!e || !e.intersectsNode(A2))
    return;
  let i = A2.ownerDocument.createRange();
  if (i.selectNode(A2), e.compareBoundaryPoints(Range.START_TO_START, i) !== -1 && e.compareBoundaryPoints(Range.END_TO_END, i) !== 1)
    return { start: eA(A2, e.startContainer, e.startOffset), end: eA(A2, e.endContainer, e.endOffset) };
}
function mA(A2, e) {
  if (!e)
    return;
  let i = tA(A2, e.start), t = tA(A2, e.end);
  if (i && t) {
    let Q = A2.ownerDocument.createRange();
    return Q.setStart(i[0], i[1]), Q.setEnd(t[0], t[1]), Q;
  }
}
function eA(A2, e, i) {
  for (; e !== A2; ) {
    let t = e;
    e = e.parentNode;
    for (let Q of e.childNodes)
      if (Q !== t)
        i += Q.textContent.length;
      else
        break;
  }
  return i;
}
function tA(A2, e) {
  if (e > A2.textContent.length)
    return;
  let i = A2.childNodes[0];
  for (; i; ) {
    let t = i.textContent.length;
    if (t < e)
      e -= t, i = i.nextSibling;
    else {
      if (i.nodeType === 3)
        return [i, e];
      i = i.childNodes[0];
    }
  }
}
function kA() {
  let A2, e = new Set();
  return i;
  function i(Q) {
    Q && e.add(Q), A2 === void 0 && e.size !== 0 && (A2 = requestAnimationFrame(t));
  }
  async function t() {
    let Q = e;
    e = new Set();
    for (let E of Q)
      await E();
    A2 = void 0, i();
  }
}
var yA = class {
  constructor(A2, e = null) {
    this._duringUpdate = false, this._stack = [e], this._ctrl = document.createElement("div"), this._ctrl.setAttribute("aria-hidden", "true"), this._ctrl.style.opacity = 0, this._ctrl.style.position = "fixed", this._ctrl.style.top = "-1000px", this._ctrl.style.pointerEvents = "none", this._ctrl.tabIndex = -1, this._ctrl.contentEditable = true, this._ctrl.textContent = "0", this._ctrl.style.visibility = "hidden", this._ctrl.addEventListener("focus", (i) => {
      window.setTimeout(() => void this._ctrl.blur(), 0);
    }), this._ctrl.addEventListener("input", (i) => {
      this._duringUpdate || A2(this.data);
      let t = window.getSelection();
      t.containsNode(this._ctrl, true) && t.removeAllRanges();
    });
  }
  get _depth() {
    return +this._ctrl.textContent || 0;
  }
  get data() {
    return this._stack[this._depth];
  }
  push(A2, e) {
    this._ctrl.parentNode || (e || document.body).appendChild(this._ctrl);
    let i = this._depth + 1;
    this._stack.splice(i, this._stack.length - i, A2);
    let t = document.activeElement;
    try {
      this._duringUpdate = true, this._ctrl.style.visibility = null, this._ctrl.focus(), document.execCommand("selectAll"), document.execCommand("insertText", false, i);
    } finally {
      this._duringUpdate = false, this._ctrl.style.visibility = "hidden";
    }
    t && t.focus();
  }
};
function nA(A2, e, i, t) {
  _A(e, t), FA(A2, e, i);
  let Q = t.events || vA, E = DA(Q, A2, t);
  for (let B of Q.keys)
    e.addEventListener(B, E);
  return () => {
    for (let B of Q.keys)
      e.removeEventListener(B, E);
  };
}
var vA = Object.freeze({ keys: Object.freeze(["keydown", "keyup", "paste", "input", "blur"]), attrs: Object.freeze(["key"]), table: Object.freeze(__spreadProps(__spreadValues({}, LA()), { "evt:keydown,key:Tab"(A2, e, i) {
  A2.preventDefault(), document.execCommand("insertText", false, i.tabs || "    ");
}, "evt:paste"(A2, e) {
  A2.preventDefault();
  let i = A2.clipboardData.getData("text/plain");
  i && (document.execCommand("insertText", false, i), e.dirty());
} })) });
function DA(A2, ...e) {
  let { table: i, attrs: t } = A2;
  return (Q) => {
    let E = [`evt:${Q.type}`, ...t.map((B) => `${B}:${Q[B]}`).filter(Boolean)];
    for (let B = E.length; B > 0; B--) {
      let I = i[E.slice(0, B)];
      if (I)
        return I(Q, ...e);
    }
  };
}
function LA() {
  let A2 = new WeakSet();
  return { "evt:blur"(e, i) {
    A2.has(i) ? e.preventDefault() : i._emit_code_change();
  }, async "evt:input"(e, i) {
    if (!A2.has(i)) {
      A2.add(i), await null;
      try {
        let t = i.src_code;
        for (let Q of i.with_selection())
          document.execCommand("undo", false), i.raw_src_code = t, i.dirty();
      } finally {
        A2.delete(i);
      }
    }
  } };
}
function FA(A2, e, i) {
  let t = new yA(Q, i);
  function Q(I) {
    let o = t;
    t = null;
    try {
      A2._restore_state(I);
    } finally {
      t = o;
    }
  }
  let E = kA(), B = A2._event_from_state(i);
  return Object.assign(A2, { *with_selection() {
    for (let I of fA(e))
      yield;
  }, dirty() {
    E(A2.refresh);
  }, refresh() {
    for (let I of A2.with_selection())
      A2.src_code = A2.src_code + "";
  }, _emit_code_change() {
    aA(A2, B, "");
  }, _emit_src_code(I, o, p = ["lang", "src_code"]) {
    bA(o, i, p) || (i = o, t !== null && t.push(A2._save_state(o), I), B = A2._event_from_state(o), aA(A2, B, ":input"));
  } }), E(A2._emit_code_change), A2;
}
function aA(A2, e, i) {
  if (e)
    return A2.dispatchEvent(new CustomEvent("src_code" + i, { detail: e, bubbles: true }));
}
function bA(A2, e, i) {
  for (let t of i)
    if (A2[t] !== e[t])
      return false;
  return true;
}
var NA = { contentEditable: true, spellcheck: false }, JA = { outline: "none", overflowWrap: "break-word", overflowY: "auto", resize: "vertical", whiteSpace: "pre-wrap" };
function _A(A2, e) {
  let i = __spreadValues(__spreadValues({}, NA), e.attrs || {});
  for (let t in i)
    A2.setAttribute(t, i[t]);
  Object.assign(A2.style, __spreadValues(__spreadValues({}, JA), e.style || {}));
}
var xA = class extends HTMLPreElement {
  static with_options(A2 = {}) {
    return class extends this {
      _dom_connect(e, i) {
        nA(this, e, i, A2);
      }
    };
  }
  static define_as(A2) {
    customElements.define(A2, this);
  }
  connectedCallback() {
    let A2 = this.textContent.replace(/^\s*\r?\n/, "");
    this.textContent = "";
    let e = { src_code: A2, lang: this.lang }, i = this._el_code = this._init_dom(this.ownerDocument);
    this._dom_connect(i, e), this.src_code = A2;
  }
  _dom_connect(A2, e) {
    nA(this, A2, e, {});
  }
  disconnectedCallback() {
    this._dom_disconnect && this._dom_disconnect();
  }
  _init_dom(A2) {
    let e = A2.createElement("code"), i = A2.createElement("pre");
    return i.appendChild(e), this.appendChild(i), e;
  }
  static get observedAttributes() {
    return ["lang"];
  }
  attributeChangedCallback() {
    this.dirty();
  }
  dirty() {
  }
  refresh() {
  }
  get lang() {
    return this.getAttribute("lang") || this.default_lang;
  }
  set lang(A2) {
    this.setAttribute("lang", A2);
  }
  get raw_src_code() {
    return this._el_code.textContent;
  }
  set raw_src_code(A2) {
    let { _el_code: e, lang: i } = this;
    if (e.innerHTML = "", e.textContent = A2, i) {
      let t = `language-${i}`;
      e.className = t || "", e.parentNode.className = t || "";
    }
    this._emit_src_code(this, { src_code: A2, lang: i });
  }
  get src_code() {
    return this._el_code.textContent;
  }
  set src_code(A2) {
    this.raw_src_code = A2, this._highlight_src(A2, this._el_code);
  }
  _save_state(A2) {
    return A2;
  }
  _restore_state({ lang: A2, src_code: e }) {
    this.lang = A2, this.src_code = e;
  }
  _event_from_state(A2) {
    return __spreadValues({}, A2);
  }
  _highlight_src(A2, e) {
  }
}, HA = IA(pA()), RA = class extends xA {
  getCode() {
    return this.src_code;
  }
  set lang(A2) {
  }
  get lang() {
    return Array.from(this.classList).find((A2) => A2.startsWith("language-")).replace("language-", "");
  }
  constructor() {
    super(), this.redispatchEvent = this.redispatchEvent.bind(this);
  }
  connectedCallback() {
    this.addEventListener("src_code", this.redispatchEvent), this.addEventListener("src_code:input", this.redispatchEvent), this._el_code = this.querySelector("code");
    let A2 = this._el_code.textContent, e = { src_code: A2, lang: this.lang };
    this._dom_connect(this._el_code, e), this.src_code = A2;
  }
  disconnectedCallback() {
    this.removeEventListener("src_code", this.redispatchEvent), this.removeEventListener("src_code:input", this.redispatchEvent), super.disconnectedCallback();
  }
  redispatchEvent(A2) {
    A2.stopImmediatePropagation(), A2.type === "src_code:input" && this.dispatchEvent(new CustomEvent("update"));
  }
  _highlight_src(A2, e) {
    HA.default.highlightElement(e);
  }
};
H();
R();
S();
U();
K();
H();
R();
S();
U();
K();
var SA = new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
function rA(A2, e = "@") {
  if (!d)
    return sA.then(() => rA(A2));
  let i = A2.length + 1, t = (d.__heap_base.value || d.__heap_base) + 4 * i - d.memory.buffer.byteLength;
  t > 0 && d.memory.grow(Math.ceil(t / 65536));
  let Q = d.sa(i - 1);
  if ((SA ? KA : UA)(A2, new Uint16Array(d.memory.buffer, Q, i)), !d.parse())
    throw Object.assign(new Error(`Parse error ${e}:${A2.slice(0, d.e()).split(`
`).length}:${d.e() - A2.lastIndexOf(`
`, d.e() - 1)}`), { idx: d.e() });
  let E = [], B = [];
  for (; d.ri(); ) {
    let o = d.is(), p = d.ie(), N = d.ai(), D = d.id(), J = d.ss(), L = d.se(), _2;
    d.ip() && (_2 = I(A2.slice(D === -1 ? o - 1 : o, D === -1 ? p + 1 : p))), E.push({ n: _2, s: o, e: p, ss: J, se: L, d: D, a: N });
  }
  for (; d.re(); ) {
    let o = A2.slice(d.es(), d.ee()), p = o[0];
    B.push(p === '"' || p === "'" ? I(o) : o);
  }
  function I(o) {
    try {
      return (0, eval)(o);
    } catch {
    }
  }
  return [E, B, !!d.f()];
}
function UA(A2, e) {
  let i = A2.length, t = 0;
  for (; t < i; ) {
    let Q = A2.charCodeAt(t);
    e[t++] = (255 & Q) << 8 | Q >>> 8;
  }
}
function KA(A2, e) {
  let i = A2.length, t = 0;
  for (; t < i; )
    e[t] = A2.charCodeAt(t++);
}
var d, sA = WebAssembly.compile((z = "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", typeof Buffer < "u" ? Buffer.from(z, "base64") : Uint8Array.from(atob(z), (A2) => A2.charCodeAt(0)))).then(WebAssembly.instantiate).then(({ exports: A2 }) => {
  d = A2;
}), z;
function YA(A2, e) {
  let i;
  return () => {
    clearTimeout(i), i = window.setTimeout(A2, e);
  };
}
function qA(A2, ...e) {
  let i = A2.raw[0];
  for (let t = 0; t < e.length; t++)
    i += e[t] + A2.raw[t + 1];
  return URL.createObjectURL(new Blob([i], { type: "text/javascript" }));
}
var GA = class extends HTMLDivElement {
  constructor() {
    super(), this.onCodeUpdate = YA(this.onCodeUpdate.bind(this), 50);
  }
  connectedCallback() {
    this.$storyContainer = this.querySelector("[data-story-id]"), this.$codeEditor = this.querySelector("pre"), this.$codeEditor.addEventListener("update", this.onCodeUpdate);
  }
  disconnectedCallback() {
    this.$codeEditor.removeEventListener("update", this.onCodeUpdate);
  }
  onCodeUpdate() {
    this.renderCode();
  }
  async renderCode() {
    var A2;
    let e = this.$codeEditor.getCode();
    if (e)
      try {
        ((A2 = this.firstElementChild) == null ? void 0 : A2.tagName) === "PRE" && (this.removeChild(this.firstElementChild), this.$storyContainer.style.display = ""), typeof this.disposePreviousRender == "function" && (this.disposePreviousRender(), this.disposePreviousRender = void 0), this.language === "html" ? await this.renderHtml(e) : this.language === "js" && await this.renderJs(e);
      } catch (i) {
        this.$storyContainer.style.display = "none";
        let t = document.createElement("pre");
        t.textContent = `${i}`, this.prepend(t);
      }
  }
  async renderHtml(A2) {
    this.$storyContainer.innerHTML = A2;
  }
  async renderJs(A2) {
    await sA;
    let e = await (await import(qA`
      ${this.getDefineScopeCode()}
      ${this.rewriteImportMaps(A2)}
    `))[this.exportName];
    if (!e || typeof e != "function")
      throw `code must contain an export "${this.exportName}" with a story function`;
    return this.renderStoryFunction(e);
  }
  getDefineScopeCode() {
    if (!this.scope)
      return "";
    window.$$playgroundScope != null || (window.$$playgroundScope = {}), window.$$playgroundScope[this.exportName] = {};
    let e = [];
    for (let [i, t] of Object.entries(this.scope))
      window.$$playgroundScope[this.exportName][i] = t, e.push(`const ${i} = window.$$playgroundScope['${this.exportName}'].${i};`);
    return e.join(`
`);
  }
  rewriteImportMaps(A2) {
    if (!this.importMaps)
      return A2;
    let e = A2, i = this.importMaps, [t] = rA(A2);
    return [...t].reverse().forEach((Q) => {
      let E = A2.substring(Q.s, Q.e);
      i[E] && (e = e.substring(0, Q.s) + i[E] + e.substring(Q.e));
    }), e;
  }
  async renderStoryFunction(A2) {
    this.disposePreviousRender = await this.renderStory(A2, this.$storyContainer) || void 0;
  }
};
customElements.define("private-divriots-preview-story-code-editor", RA, { extends: "pre" });
customElements.define("private-divriots-preview-story-playground", GA, { extends: "div" });
/**
* Prism: Lightweight, robust, elegant syntax highlighting
*
* @license MIT <https://opensource.org/licenses/MIT>
* @author Lea Verou <https://lea.verou.me>
* @namespace
* @public
*/
const base = "/";
const mapPageUrlToRenderModuleUrl = function mapPageUrlToRenderModuleUrl2(url) {
  const normalizeUrl = (url2) => new URL(url2, location.href).href;
  const normalizedUrl = normalizeUrl(url);
  for (const { url: url2, input } of pages) {
    if (normalizedUrl === normalizeUrl(base + url2)) {
      return normalizeUrl(base + input.replace(/\.(mdx?|svx)$/, ".render-doc.js"));
    }
  }
};
const pages = [];
const pagesGraph = [];
var _docContext = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base,
  mapPageUrlToRenderModuleUrl,
  pages,
  pagesGraph
}, Symbol.toStringTag, { value: "Module" }));
const __content$1 = '<h1 id="standard-js-webcomponent-starter-kit"><a aria-hidden="true" tabindex="-1" href="#standard-js-webcomponent-starter-kit"><span class="icon icon-link"></span></a>Standard JS WebComponent Starter-kit</h1>\n<h2 id="links"><a aria-hidden="true" tabindex="-1" href="#links"><span class="icon icon-link"></span></a>Links</h2>\n<ul>\n<li><a href="https://www.webcomponents.org/introduction" target="_blank" rel="nofollow noopener">A Brief Introduction</a></li>\n<li><a href="https://github.com/w3c/webcomponents/" target="_blank" rel="nofollow noopener">W3C Specifications</a></li>\n<li><a href="https://developers.google.com/web/fundamentals/web-components/shadowdom" target="_blank" rel="nofollow noopener">ShadowDOM</a></li>\n<li><a href="https://developers.google.com/web/fundamentals/web-components/customelements" target="_blank" rel="nofollow noopener">CustomElements</a></li>\n</ul>';
const __internals$1 = {};
var mdjs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __content: __content$1,
  __internals: __internals$1,
  __context: _docContext
}, Symbol.toStringTag, { value: "Module" }));
const _a = mdjs, { default: mdjsConfig = {}, __context, __content, __internals = {} } = _a, stories = __objRest(_a, ["default", "__context", "__content", "__internals"]);
const rootEl = document.querySelector("#root");
if (!rootEl) {
  throw new Error("Unable to find root element root");
}
const storiesCount = Object.keys(stories).length;
const hasStories = storiesCount > 0;
let storiesRenderedCount;
let storiesRenderingPromise;
let resolveStoriesRenderingPromise;
let storiesObserver;
let storiesQueue;
function scheduleStoriesRender() {
  storiesRenderedCount = storiesCount;
  storiesRenderingPromise = hasStories ? new Promise((resolve) => {
    resolveStoriesRenderingPromise = resolve;
  }) : null;
  storiesQueue = __spreadValues({}, stories);
  storiesObserver = new MutationObserver((mutations, observer) => {
    const childListMutations = mutations.filter((mutation) => mutation.type === "childList");
    const addedNodes = childListMutations.flatMap((mutation) => [...mutation.addedNodes]);
    if (addedNodes.length > 0) {
      renderStoryElements();
    }
  });
  storiesObserver.observe(rootEl.parentNode, {
    attributes: true,
    childList: true,
    subtree: true
  });
}
function getStoryFromQueue(storyNode, storyId) {
  const story = storiesQueue[storyId];
  if (story) {
    delete storiesQueue[storyId];
    if (Object.keys(storiesQueue).length === 0) {
      storiesObserver.disconnect();
    }
  }
  return story;
}
function renderStoryElements() {
  const mdjsStoryNodes = rootEl.querySelectorAll("div[data-story-id]");
  for (const node of mdjsStoryNodes) {
    const storyId = node.getAttribute("data-story-id");
    const story = getStoryFromQueue(node, storyId);
    if (!story) {
      return;
    }
    const $playground = node.parentElement.getAttribute("is") === "private-divriots-preview-story-playground" ? node.parentElement : void 0;
    if ($playground) {
      $playground.language = story.$$playgroundLanguage;
      $playground.renderStory = (story2, container) => Zr(require2, story2(), container);
      if (story.$$playgroundExportName) {
        $playground.exportName = story.$$playgroundExportName;
      }
      if (story.$$playgroundScope) {
        $playground.scope = story.$$playgroundScope;
      }
      if (story.$$playgroundImportMaps) {
        $playground.importMaps = story.$$playgroundImportMaps;
      }
    }
    Yr(node, story, storyId, mdjsConfig, require2, "docs", "/README.md?code").then(async ({ story: story2, storyContext, storyFn }) => {
      const dispose = await Zr(require2, storyFn(), node);
      if ($playground && typeof dispose === "function") {
        $playground.disposePreviousRender = dispose;
      }
      if (story2.playFunction)
        story2.playFunction(storyContext);
    }).then(() => updateStoryRenderingPromise());
  }
  const htmlStoryNodes = rootEl.querySelectorAll("div[id]");
  for (const node of htmlStoryNodes) {
    const storyId = node.id;
    const story = getStoryFromQueue(node, storyId);
    if (!story) {
      return;
    }
    Zr(require2, story, node).then(() => updateStoryRenderingPromise());
  }
}
function updateStoryRenderingPromise() {
  storiesRenderedCount--;
  if (storiesRenderedCount === 0) {
    resolveStoriesRenderingPromise();
  }
}
let layout;
if (mdjsConfig) {
  if (mdjsConfig.htmlParser) {
    __internals.htmlParser = mdjsConfig.htmlParser;
  }
  if (mdjsConfig.layout) {
    layout = mdjsConfig.layout;
  }
}
const renderDoc = async () => {
  if (hasStories) {
    scheduleStoriesRender();
  }
  if (layout) {
    await Zr(require2, layout(__content, __context), rootEl);
  } else {
    rootEl.innerHTML = __content;
  }
  if (hasStories) {
    await storiesRenderingPromise;
  }
};
export { renderDoc as default };
