import X, { useState as ue, useEffect as Ye } from "react";
import { Transition as Ve } from "react-transition-group";
var H = { exports: {} }, V = {};
/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var le;
function Le() {
  if (le)
    return V;
  le = 1;
  var n = X, b = 60103;
  if (V.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var h = Symbol.for;
    b = h("react.element"), V.Fragment = h("react.fragment");
  }
  var P = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = Object.prototype.hasOwnProperty, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(j, o, k) {
    var v, y = {}, w = null, A = null;
    k !== void 0 && (w = "" + k), o.key !== void 0 && (w = "" + o.key), o.ref !== void 0 && (A = o.ref);
    for (v in o)
      O.call(o, v) && !x.hasOwnProperty(v) && (y[v] = o[v]);
    if (j && j.defaultProps)
      for (v in o = j.defaultProps, o)
        y[v] === void 0 && (y[v] = o[v]);
    return { $$typeof: b, type: j, key: w, ref: A, props: y, _owner: P.current };
  }
  return V.jsx = C, V.jsxs = C, V;
}
var G = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oe;
function We() {
  return oe || (oe = 1, function(n) {
    process.env.NODE_ENV !== "production" && function() {
      var b = X, h = 60103, P = 60106;
      n.Fragment = 60107;
      var O = 60108, x = 60114, C = 60109, j = 60110, o = 60112, k = 60113, v = 60120, y = 60115, w = 60116, A = 60121, s = 60122, d = 60117, _ = 60129, p = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var a = Symbol.for;
        h = a("react.element"), P = a("react.portal"), n.Fragment = a("react.fragment"), O = a("react.strict_mode"), x = a("react.profiler"), C = a("react.provider"), j = a("react.context"), o = a("react.forward_ref"), k = a("react.suspense"), v = a("react.suspense_list"), y = a("react.memo"), w = a("react.lazy"), A = a("react.block"), s = a("react.server.block"), d = a("react.fundamental"), a("react.scope"), a("react.opaque.id"), _ = a("react.debug_trace_mode"), a("react.offscreen"), p = a("react.legacy_hidden");
      }
      var T = typeof Symbol == "function" && Symbol.iterator, L = "@@iterator";
      function fe(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = T && e[T] || e[L];
        return typeof r == "function" ? r : null;
      }
      var W = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function E(e) {
        {
          for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
            t[i - 1] = arguments[i];
          de("error", e, t);
        }
      }
      function de(e, r, t) {
        {
          var i = W.ReactDebugCurrentFrame, c = "";
          if ($) {
            var f = m($.type), l = $._owner;
            c += Re(f, $._source, l && m(l.type));
          }
          c += i.getStackAddendum(), c !== "" && (r += "%s", t = t.concat([c]));
          var u = t.map(function(R) {
            return "" + R;
          });
          u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
        }
      }
      var ve = !1;
      function _e(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === n.Fragment || e === x || e === _ || e === O || e === k || e === v || e === p || ve || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === y || e.$$typeof === C || e.$$typeof === j || e.$$typeof === o || e.$$typeof === d || e.$$typeof === A || e[0] === s));
      }
      var M = /^(.*)[\\\/]/;
      function Re(e, r, t) {
        var i = "";
        if (r) {
          var c = r.fileName, f = c.replace(M, "");
          if (/^index\./.test(f)) {
            var l = c.match(M);
            if (l) {
              var u = l[1];
              if (u) {
                var R = u.replace(M, "");
                f = R + "/" + f;
              }
            }
          }
          i = " (at " + f + ":" + r.lineNumber + ")";
        } else
          t && (i = " (created by " + t + ")");
        return `
    in ` + (e || "Unknown") + i;
      }
      var he = 1;
      function Ee(e) {
        return e._status === he ? e._result : null;
      }
      function ge(e, r, t) {
        var i = r.displayName || r.name || "";
        return e.displayName || (i !== "" ? t + "(" + i + ")" : t);
      }
      function m(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && E("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case n.Fragment:
            return "Fragment";
          case P:
            return "Portal";
          case x:
            return "Profiler";
          case O:
            return "StrictMode";
          case k:
            return "Suspense";
          case v:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case j:
              return "Context.Consumer";
            case C:
              return "Context.Provider";
            case o:
              return ge(e, e.render, "ForwardRef");
            case y:
              return m(e.type);
            case A:
              return m(e.render);
            case w: {
              var r = e, t = Ee(r);
              if (t)
                return m(t);
              break;
            }
          }
        return null;
      }
      var Z = {};
      W.ReactDebugCurrentFrame;
      var $ = null;
      function B(e) {
        $ = e;
      }
      function xe(e, r, t, i, c) {
        {
          var f = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var l in e)
            if (f(e, l)) {
              var u = void 0;
              try {
                if (typeof e[l] != "function") {
                  var R = Error((i || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw R.name = "Invariant Violation", R;
                }
                u = e[l](r, l, i, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (S) {
                u = S;
              }
              u && !(u instanceof Error) && (B(c), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", t, l, typeof u), B(null)), u instanceof Error && !(u.message in Z) && (Z[u.message] = !0, B(c), E("Failed %s type: %s", t, u.message), B(null));
            }
        }
      }
      var U = W.ReactCurrentOwner, F = Object.prototype.hasOwnProperty, me = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Q, ee, q;
      q = {};
      function ye(e) {
        if (F.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Te(e) {
        if (F.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function be(e, r) {
        if (typeof e.ref == "string" && U.current && r && U.current.stateNode !== r) {
          var t = m(U.current.type);
          q[t] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', m(U.current.type), e.ref), q[t] = !0);
        }
      }
      function Oe(e, r) {
        {
          var t = function() {
            Q || (Q = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          t.isReactWarning = !0, Object.defineProperty(e, "key", {
            get: t,
            configurable: !0
          });
        }
      }
      function je(e, r) {
        {
          var t = function() {
            ee || (ee = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          t.isReactWarning = !0, Object.defineProperty(e, "ref", {
            get: t,
            configurable: !0
          });
        }
      }
      var Se = function(e, r, t, i, c, f, l) {
        var u = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: h,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: t,
          props: l,
          // Record the component responsible for creating this element.
          _owner: f
        };
        return u._store = {}, Object.defineProperty(u._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(u, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: i
        }), Object.defineProperty(u, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: c
        }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
      };
      function Pe(e, r, t, i, c) {
        {
          var f, l = {}, u = null, R = null;
          t !== void 0 && (u = "" + t), Te(r) && (u = "" + r.key), ye(r) && (R = r.ref, be(r, c));
          for (f in r)
            F.call(r, f) && !me.hasOwnProperty(f) && (l[f] = r[f]);
          if (e && e.defaultProps) {
            var S = e.defaultProps;
            for (f in S)
              l[f] === void 0 && (l[f] = S[f]);
          }
          if (u || R) {
            var I = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
            u && Oe(l, I), R && je(l, I);
          }
          return Se(e, u, R, c, i, U.current, l);
        }
      }
      var N = W.ReactCurrentOwner;
      W.ReactDebugCurrentFrame;
      function D(e) {
        $ = e;
      }
      var J;
      J = !1;
      function z(e) {
        return typeof e == "object" && e !== null && e.$$typeof === h;
      }
      function re() {
        {
          if (N.current) {
            var e = m(N.current.type);
            if (e)
              return `

Check the render method of \`` + e + "`.";
          }
          return "";
        }
      }
      function Ce(e) {
        {
          if (e !== void 0) {
            var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
            return `

Check your code at ` + r + ":" + t + ".";
          }
          return "";
        }
      }
      var te = {};
      function we(e) {
        {
          var r = re();
          if (!r) {
            var t = typeof e == "string" ? e : e.displayName || e.name;
            t && (r = `

Check the top-level render call using <` + t + ">.");
          }
          return r;
        }
      }
      function ne(e, r) {
        {
          if (!e._store || e._store.validated || e.key != null)
            return;
          e._store.validated = !0;
          var t = we(r);
          if (te[t])
            return;
          te[t] = !0;
          var i = "";
          e && e._owner && e._owner !== N.current && (i = " It was passed a child from " + m(e._owner.type) + "."), D(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, i), D(null);
        }
      }
      function ae(e, r) {
        {
          if (typeof e != "object")
            return;
          if (Array.isArray(e))
            for (var t = 0; t < e.length; t++) {
              var i = e[t];
              z(i) && ne(i, r);
            }
          else if (z(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var c = fe(e);
            if (typeof c == "function" && c !== e.entries)
              for (var f = c.call(e), l; !(l = f.next()).done; )
                z(l.value) && ne(l.value, r);
          }
        }
      }
      function pe(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var t;
          if (typeof r == "function")
            t = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === o || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === y))
            t = r.propTypes;
          else
            return;
          if (t) {
            var i = m(r);
            xe(t, e.props, "prop", i, e);
          } else if (r.PropTypes !== void 0 && !J) {
            J = !0;
            var c = m(r);
            E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function ke(e) {
        {
          for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
            var i = r[t];
            if (i !== "children" && i !== "key") {
              D(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), D(null);
              break;
            }
          }
          e.ref !== null && (D(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
        }
      }
      function ie(e, r, t, i, c, f) {
        {
          var l = _e(e);
          if (!l) {
            var u = "";
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var R = Ce(c);
            R ? u += R : u += re();
            var S;
            e === null ? S = "null" : Array.isArray(e) ? S = "array" : e !== void 0 && e.$$typeof === h ? (S = "<" + (m(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : S = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, u);
          }
          var I = Pe(e, r, t, c, f);
          if (I == null)
            return I;
          if (l) {
            var Y = r.children;
            if (Y !== void 0)
              if (i)
                if (Array.isArray(Y)) {
                  for (var K = 0; K < Y.length; K++)
                    ae(Y[K], e);
                  Object.freeze && Object.freeze(Y);
                } else
                  E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                ae(Y, e);
          }
          return e === n.Fragment ? ke(I) : pe(I), I;
        }
      }
      function Ae(e, r, t) {
        return ie(e, r, t, !0);
      }
      function Ie(e, r, t) {
        return ie(e, r, t, !1);
      }
      var $e = Ie, De = Ae;
      n.jsx = $e, n.jsxs = De;
    }();
  }(G)), G;
}
process.env.NODE_ENV === "production" ? H.exports = Le() : H.exports = We();
var g = H.exports;
const se = {
  bar: {
    position: "relative"
  },
  container: {
    width: "100%",
    display: "flex",
    position: "absolute"
  }
};
function Ue(n) {
  const b = {
    transition: `all ${n.timeout}ms ease-in-out`,
    ...n.prevStyle
  }, h = {
    transition: `all ${n.timeout}ms ease-in-out`,
    marginTop: n.prevStyle.marginTop
  }, P = {
    entering: n.prevStyle,
    entered: n.currStyle,
    exiting: n.currStyle
  }, O = {
    entering: { marginTop: n.prevStyle.marginTop },
    entered: { marginTop: n.currStyle.marginTop },
    exiting: { marginTop: n.currStyle.marginTop }
  };
  return /* @__PURE__ */ g.jsx("div", { style: se.container, children: /* @__PURE__ */ g.jsx(Ve, { in: !0, timeout: n.timeout, children: (x) => /* @__PURE__ */ g.jsxs(X.Fragment, { children: [
    /* @__PURE__ */ g.jsx("div", { style: {
      ...h,
      ...O[x],
      width: `${n.width[0]}%`
    }, children: n.label }),
    /* @__PURE__ */ g.jsx("div", { style: { width: `${n.width[1]}%` }, children: /* @__PURE__ */ g.jsx(
      "div",
      {
        style: {
          ...se.bar,
          ...b,
          ...P[x]
        }
      }
    ) }),
    /* @__PURE__ */ g.jsx("div", { style: {
      ...h,
      ...O[x],
      width: `${n.width[2]}%`
    }, children: /* @__PURE__ */ g.jsx("div", { style: { ...n.textBoxStyle }, children: n.value }) })
  ] }) }) });
}
const ce = {
  barChart: {
    width: "100%",
    position: "relative"
  },
  container: {
    width: "100%"
  }
}, Fe = (n) => {
  const b = `calc(${n.barStyle.height} + ${n.barStyle.marginTop})`, h = Object.keys(n.data).length, P = n.maxItems <= h ? n.maxItems : h, O = {
    height: `calc(${P} * ${b})`
  }, x = (s, d) => {
    d === void 0 && (d = !0);
    let _ = Object.keys(n.data).map((a) => ({
      name: a,
      val: n.data[a][s]
    }));
    _.sort((a, T) => d ? a.val < T.val ? 1 : a.val > T.val ? -1 : 0 : a.val < T.val ? 1 : a.val < T.val ? -1 : 0), _ = _.slice(0, P);
    const p = Math.max.apply(Math, _.map((a) => a.val));
    return [_.reduce((a, T, L) => ({
      ...a,
      [T.name]: L
    }), {}), p];
  };
  let [C, j] = x(0);
  const [o, k] = ue({
    idx: 0,
    prevRank: C,
    currRank: C,
    maxVal: j,
    started: n.start
  }), [v, y] = ue(null);
  Ye(() => {
    const s = setInterval(w, n.timeout + n.delay);
    return y(s), () => {
      clearInterval(s);
    };
  }, [o.started]);
  const w = () => {
    if (o.idx + 1 === n.timeline.length) {
      clearInterval(o.intervalId);
      return;
    }
    k((s) => {
      let [d, _] = x(s.idx + 1);
      return {
        idx: s.idx + 1,
        prevRank: s.currRank,
        currRank: d,
        maxVal: _
      };
    });
  }, A = (s) => {
    const d = o.idx, _ = d > 0 ? d - 1 : 0, p = n.data[s][d], a = o.currRank[s] === void 0, T = {
      ...n.barStyle,
      marginTop: `calc(${o.currRank[s]} * ${b})`,
      width: `${100 * n.data[s][d] / o.maxVal}%`,
      backgroundColor: n.colors[s]
    }, L = {
      ...n.barStyle,
      marginTop: `calc(${o.prevRank[s]} * ${b})`,
      width: `${100 * n.data[s][_] / o.maxVal}%`,
      backgroundColor: n.colors[s]
    };
    return [p, a, T, L];
  };
  return /* @__PURE__ */ g.jsxs("div", { style: ce.container, children: [
    /* @__PURE__ */ g.jsx("div", { style: n.timelineStyle, children: n.timeline[o.idx] }),
    /* @__PURE__ */ g.jsx("div", { style: { ...ce.barChart, ...O }, children: Object.keys(n.data).map((s) => {
      const [d, _, p, a] = A(s);
      return _ ? /* @__PURE__ */ g.jsx("div", {}, s) : /* @__PURE__ */ g.jsx(
        Ue,
        {
          name: s,
          value: d,
          label: n.labels[s],
          currStyle: p,
          prevStyle: a,
          timeout: n.timeout,
          textBoxStyle: n.textBoxStyle,
          width: n.width
        },
        s
      );
    }) })
  ] });
};
export {
  Fe as default
};
