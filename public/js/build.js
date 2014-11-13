"format register";

(function() {
function define(){};  define.amd = {};
  !function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
      if (!a.document)
        throw new Error("jQuery requires a window with a document");
      return b(a);
    } : b(a);
  }("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = a.document,
        m = "2.1.1",
        n = function(a, b) {
          return new n.fn.init(a, b);
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
          return b.toUpperCase();
        };
    n.fn = n.prototype = {
      jquery: m,
      constructor: n,
      selector: "",
      length: 0,
      toArray: function() {
        return d.call(this);
      },
      get: function(a) {
        return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
      },
      pushStack: function(a) {
        var b = n.merge(this.constructor(), a);
        return b.prevObject = this, b.context = this.context, b;
      },
      each: function(a, b) {
        return n.each(this, a, b);
      },
      map: function(a) {
        return this.pushStack(n.map(this, function(b, c) {
          return a.call(b, c, b);
        }));
      },
      slice: function() {
        return this.pushStack(d.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      eq: function(a) {
        var b = this.length,
            c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor(null);
      },
      push: f,
      sort: c.sort,
      splice: c.splice
    }, n.extend = n.fn.extend = function() {
      var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
      for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
        if (null != (a = arguments[h]))
          for (b in a)
            c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      return g;
    }, n.extend({
      expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(a) {
        throw new Error(a);
      },
      noop: function() {},
      isFunction: function(a) {
        return "function" === n.type(a);
      },
      isArray: Array.isArray,
      isWindow: function(a) {
        return null != a && a === a.window;
      },
      isNumeric: function(a) {
        return !n.isArray(a) && a - parseFloat(a) >= 0;
      },
      isPlainObject: function(a) {
        return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
      },
      isEmptyObject: function(a) {
        var b;
        for (b in a)
          return !1;
        return !0;
      },
      type: function(a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
      },
      globalEval: function(a) {
        var b,
            c = eval;
        a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
      },
      camelCase: function(a) {
        return a.replace(p, "ms-").replace(q, r);
      },
      nodeName: function(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function(a, b, c) {
        var d,
            e = 0,
            f = a.length,
            g = s(a);
        if (c) {
          if (g) {
            for (; f > e; e++)
              if (d = b.apply(a[e], c), d === !1)
                break;
          } else
            for (e in a)
              if (d = b.apply(a[e], c), d === !1)
                break;
        } else if (g) {
          for (; f > e; e++)
            if (d = b.call(a[e], e, a[e]), d === !1)
              break;
        } else
          for (e in a)
            if (d = b.call(a[e], e, a[e]), d === !1)
              break;
        return a;
      },
      trim: function(a) {
        return null == a ? "" : (a + "").replace(o, "");
      },
      makeArray: function(a, b) {
        var c = b || [];
        return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
      },
      inArray: function(a, b, c) {
        return null == b ? -1 : g.call(b, a, c);
      },
      merge: function(a, b) {
        for (var c = +b.length,
            d = 0,
            e = a.length; c > d; d++)
          a[e++] = b[d];
        return a.length = e, a;
      },
      grep: function(a, b, c) {
        for (var d,
            e = [],
            f = 0,
            g = a.length,
            h = !c; g > f; f++)
          d = !b(a[f], f), d !== h && e.push(a[f]);
        return e;
      },
      map: function(a, b, c) {
        var d,
            f = 0,
            g = a.length,
            h = s(a),
            i = [];
        if (h)
          for (; g > f; f++)
            d = b(a[f], f, c), null != d && i.push(d);
        else
          for (f in a)
            d = b(a[f], f, c), null != d && i.push(d);
        return e.apply([], i);
      },
      guid: 1,
      proxy: function(a, b) {
        var c,
            e,
            f;
        return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function() {
          return a.apply(b || this, e.concat(d.call(arguments)));
        }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
      },
      now: Date.now,
      support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
      h["[object " + b + "]"] = b.toLowerCase();
    });
    function s(a) {
      var b = a.length,
          c = n.type(a);
      return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    var t = function(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u = "sizzle" + -new Date,
          v = a.document,
          w = 0,
          x = 0,
          y = gb(),
          z = gb(),
          A = gb(),
          B = function(a, b) {
            return a === b && (l = !0), 0;
          },
          C = "undefined",
          D = 1 << 31,
          E = {}.hasOwnProperty,
          F = [],
          G = F.pop,
          H = F.push,
          I = F.push,
          J = F.slice,
          K = F.indexOf || function(a) {
            for (var b = 0,
                c = this.length; c > b; b++)
              if (this[b] === a)
                return b;
            return -1;
          },
          L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          M = "[\\x20\\t\\r\\n\\f]",
          N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          O = N.replace("w", "w#"),
          P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
          Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
          R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
          S = new RegExp("^" + M + "*," + M + "*"),
          T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
          U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
          V = new RegExp(Q),
          W = new RegExp("^" + O + "$"),
          X = {
            ID: new RegExp("^#(" + N + ")"),
            CLASS: new RegExp("^\\.(" + N + ")"),
            TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + Q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + L + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
          },
          Y = /^(?:input|select|textarea|button)$/i,
          Z = /^h\d$/i,
          $ = /^[^{]+\{\s*\[native \w/,
          _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ab = /[+~]/,
          bb = /'|\\/g,
          cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
          db = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
          };
      try {
        I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType;
      } catch (eb) {
        I = {apply: F.length ? function(a, b) {
            H.apply(a, J.call(b));
          } : function(a, b) {
            var c = a.length,
                d = 0;
            while (a[c++] = b[d++])
              ;
            a.length = c - 1;
          }};
      }
      function fb(a, b, d, e) {
        var f,
            h,
            j,
            k,
            l,
            o,
            r,
            s,
            w,
            x;
        if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a)
          return d;
        if (1 !== (k = b.nodeType) && 9 !== k)
          return [];
        if (p && !e) {
          if (f = _.exec(a))
            if (j = f[1]) {
              if (9 === k) {
                if (h = b.getElementById(j), !h || !h.parentNode)
                  return d;
                if (h.id === j)
                  return d.push(h), d;
              } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                return d.push(h), d;
            } else {
              if (f[2])
                return I.apply(d, b.getElementsByTagName(a)), d;
              if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)
                return I.apply(d, b.getElementsByClassName(j)), d;
            }
          if (c.qsa && (!q || !q.test(a))) {
            if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
              o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
              while (l--)
                o[l] = s + qb(o[l]);
              w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",");
            }
            if (x)
              try {
                return I.apply(d, w.querySelectorAll(x)), d;
              } catch (y) {} finally {
                r || b.removeAttribute("id");
              }
          }
        }
        return i(a.replace(R, "$1"), b, d, e);
      }
      function gb() {
        var a = [];
        function b(c, e) {
          return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
        }
        return b;
      }
      function hb(a) {
        return a[u] = !0, a;
      }
      function ib(a) {
        var b = n.createElement("div");
        try {
          return !!a(b);
        } catch (c) {
          return !1;
        } finally {
          b.parentNode && b.parentNode.removeChild(b), b = null;
        }
      }
      function jb(a, b) {
        var c = a.split("|"),
            e = a.length;
        while (e--)
          d.attrHandle[c[e]] = b;
      }
      function kb(a, b) {
        var c = b && a,
            d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
        if (d)
          return d;
        if (c)
          while (c = c.nextSibling)
            if (c === b)
              return -1;
        return a ? 1 : -1;
      }
      function lb(a) {
        return function(b) {
          var c = b.nodeName.toLowerCase();
          return "input" === c && b.type === a;
        };
      }
      function mb(a) {
        return function(b) {
          var c = b.nodeName.toLowerCase();
          return ("input" === c || "button" === c) && b.type === a;
        };
      }
      function nb(a) {
        return hb(function(b) {
          return b = +b, hb(function(c, d) {
            var e,
                f = a([], c.length, b),
                g = f.length;
            while (g--)
              c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          });
        });
      }
      function ob(a) {
        return a && typeof a.getElementsByTagName !== C && a;
      }
      c = fb.support = {}, f = fb.isXML = function(a) {
        var b = a && (a.ownerDocument || a).documentElement;
        return b ? "HTML" !== b.nodeName : !1;
      }, m = fb.setDocument = function(a) {
        var b,
            e = a ? a.ownerDocument || a : v,
            g = e.defaultView;
        return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
          m();
        }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
          m();
        })), c.attributes = ib(function(a) {
          return a.className = "i", !a.getAttribute("className");
        }), c.getElementsByTagName = ib(function(a) {
          return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length;
        }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
          return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length;
        }), c.getById = ib(function(a) {
          return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length;
        }), c.getById ? (d.find.ID = function(a, b) {
          if (typeof b.getElementById !== C && p) {
            var c = b.getElementById(a);
            return c && c.parentNode ? [c] : [];
          }
        }, d.filter.ID = function(a) {
          var b = a.replace(cb, db);
          return function(a) {
            return a.getAttribute("id") === b;
          };
        }) : (delete d.find.ID, d.filter.ID = function(a) {
          var b = a.replace(cb, db);
          return function(a) {
            var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
            return c && c.value === b;
          };
        }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
          return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0;
        } : function(a, b) {
          var c,
              d = [],
              e = 0,
              f = b.getElementsByTagName(a);
          if ("*" === a) {
            while (c = f[e++])
              1 === c.nodeType && d.push(c);
            return d;
          }
          return f;
        }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
          return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0;
        }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
          a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked");
        }), ib(function(a) {
          var b = e.createElement("input");
          b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
        })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
          c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q);
        }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
          var c = 9 === a.nodeType ? a.documentElement : a,
              d = b && b.parentNode;
          return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
        } : function(a, b) {
          if (b)
            while (b = b.parentNode)
              if (b === a)
                return !0;
          return !1;
        }, B = b ? function(a, b) {
          if (a === b)
            return l = !0, 0;
          var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
          return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1);
        } : function(a, b) {
          if (a === b)
            return l = !0, 0;
          var c,
              d = 0,
              f = a.parentNode,
              g = b.parentNode,
              h = [a],
              i = [b];
          if (!f || !g)
            return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
          if (f === g)
            return kb(a, b);
          c = a;
          while (c = c.parentNode)
            h.unshift(c);
          c = b;
          while (c = c.parentNode)
            i.unshift(c);
          while (h[d] === i[d])
            d++;
          return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
        }, e) : n;
      }, fb.matches = function(a, b) {
        return fb(a, null, null, b);
      }, fb.matchesSelector = function(a, b) {
        if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
          try {
            var d = s.call(a, b);
            if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
              return d;
          } catch (e) {}
        return fb(b, n, null, [a]).length > 0;
      }, fb.contains = function(a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }, fb.attr = function(a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
            f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
      }, fb.error = function(a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }, fb.uniqueSort = function(a) {
        var b,
            d = [],
            e = 0,
            f = 0;
        if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
          while (b = a[f++])
            b === a[f] && (e = d.push(f));
          while (e--)
            a.splice(d[e], 1);
        }
        return k = null, a;
      }, e = fb.getText = function(a) {
        var b,
            c = "",
            d = 0,
            f = a.nodeType;
        if (f) {
          if (1 === f || 9 === f || 11 === f) {
            if ("string" == typeof a.textContent)
              return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling)
              c += e(a);
          } else if (3 === f || 4 === f)
            return a.nodeValue;
        } else
          while (b = a[d++])
            c += e(b);
        return c;
      }, d = fb.selectors = {
        cacheLength: 50,
        createPseudo: hb,
        match: X,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {dir: "parentNode"},
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {dir: "previousSibling"}
        },
        preFilter: {
          ATTR: function(a) {
            return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
          },
          CHILD: function(a) {
            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a;
          },
          PSEUDO: function(a) {
            var b,
                c = !a[6] && a[2];
            return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
          }
        },
        filter: {
          TAG: function(a) {
            var b = a.replace(cb, db).toLowerCase();
            return "*" === a ? function() {
              return !0;
            } : function(a) {
              return a.nodeName && a.nodeName.toLowerCase() === b;
            };
          },
          CLASS: function(a) {
            var b = y[a + " "];
            return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
              return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "");
            });
          },
          ATTR: function(a, b, c) {
            return function(d) {
              var e = fb.attr(d, a);
              return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
            };
          },
          CHILD: function(a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
            return 1 === d && 0 === e ? function(a) {
              return !!a.parentNode;
            } : function(b, c, i) {
              var j,
                  k,
                  l,
                  m,
                  n,
                  o,
                  p = f !== g ? "nextSibling" : "previousSibling",
                  q = b.parentNode,
                  r = h && b.nodeName.toLowerCase(),
                  s = !i && !h;
              if (q) {
                if (f) {
                  while (p) {
                    l = b;
                    while (l = l[p])
                      if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                        return !1;
                    o = p = "only" === a && !o && "nextSibling";
                  }
                  return !0;
                }
                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                  k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                  while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                    if (1 === l.nodeType && ++m && l === b) {
                      k[a] = [w, n, m];
                      break;
                    }
                } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                  m = j[1];
                else
                  while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))
                      break;
                return m -= e, m === d || m % d === 0 && m / d >= 0;
              }
            };
          },
          PSEUDO: function(a, b) {
            var c,
                e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
            return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
              var d,
                  f = e(a, b),
                  g = f.length;
              while (g--)
                d = K.call(a, f[g]), a[d] = !(c[d] = f[g]);
            }) : function(a) {
              return e(a, 0, c);
            }) : e;
          }
        },
        pseudos: {
          not: hb(function(a) {
            var b = [],
                c = [],
                d = h(a.replace(R, "$1"));
            return d[u] ? hb(function(a, b, c, e) {
              var f,
                  g = d(a, null, e, []),
                  h = a.length;
              while (h--)
                (f = g[h]) && (a[h] = !(b[h] = f));
            }) : function(a, e, f) {
              return b[0] = a, d(b, null, f, c), !c.pop();
            };
          }),
          has: hb(function(a) {
            return function(b) {
              return fb(a, b).length > 0;
            };
          }),
          contains: hb(function(a) {
            return function(b) {
              return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
            };
          }),
          lang: hb(function(a) {
            return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function(b) {
              var c;
              do
                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                  return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
   while ((b = b.parentNode) && 1 === b.nodeType);
              return !1;
            };
          }),
          target: function(b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id;
          },
          root: function(a) {
            return a === o;
          },
          focus: function(a) {
            return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
          },
          enabled: function(a) {
            return a.disabled === !1;
          },
          disabled: function(a) {
            return a.disabled === !0;
          },
          checked: function(a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && !!a.checked || "option" === b && !!a.selected;
          },
          selected: function(a) {
            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
          },
          empty: function(a) {
            for (a = a.firstChild; a; a = a.nextSibling)
              if (a.nodeType < 6)
                return !1;
            return !0;
          },
          parent: function(a) {
            return !d.pseudos.empty(a);
          },
          header: function(a) {
            return Z.test(a.nodeName);
          },
          input: function(a) {
            return Y.test(a.nodeName);
          },
          button: function(a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && "button" === a.type || "button" === b;
          },
          text: function(a) {
            var b;
            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
          },
          first: nb(function() {
            return [0];
          }),
          last: nb(function(a, b) {
            return [b - 1];
          }),
          eq: nb(function(a, b, c) {
            return [0 > c ? c + b : c];
          }),
          even: nb(function(a, b) {
            for (var c = 0; b > c; c += 2)
              a.push(c);
            return a;
          }),
          odd: nb(function(a, b) {
            for (var c = 1; b > c; c += 2)
              a.push(c);
            return a;
          }),
          lt: nb(function(a, b, c) {
            for (var d = 0 > c ? c + b : c; --d >= 0; )
              a.push(d);
            return a;
          }),
          gt: nb(function(a, b, c) {
            for (var d = 0 > c ? c + b : c; ++d < b; )
              a.push(d);
            return a;
          })
        }
      }, d.pseudos.nth = d.pseudos.eq;
      for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      })
        d.pseudos[b] = lb(b);
      for (b in {
        submit: !0,
        reset: !0
      })
        d.pseudos[b] = mb(b);
      function pb() {}
      pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function(a, b) {
        var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
        if (k)
          return b ? 0 : k.slice(0);
        h = a, i = [], j = d.preFilter;
        while (h) {
          (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
            value: c,
            type: e[0].replace(R, " ")
          }), h = h.slice(c.length));
          for (g in d.filter)
            !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
              value: c,
              type: g,
              matches: e
            }), h = h.slice(c.length));
          if (!c)
            break;
        }
        return b ? h.length : h ? fb.error(a) : z(a, i).slice(0);
      };
      function qb(a) {
        for (var b = 0,
            c = a.length,
            d = ""; c > b; b++)
          d += a[b].value;
        return d;
      }
      function rb(a, b, c) {
        var d = b.dir,
            e = c && "parentNode" === d,
            f = x++;
        return b.first ? function(b, c, f) {
          while (b = b[d])
            if (1 === b.nodeType || e)
              return a(b, c, f);
        } : function(b, c, g) {
          var h,
              i,
              j = [w, f];
          if (g) {
            while (b = b[d])
              if ((1 === b.nodeType || e) && a(b, c, g))
                return !0;
          } else
            while (b = b[d])
              if (1 === b.nodeType || e) {
                if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)
                  return j[2] = h[2];
                if (i[d] = j, j[2] = a(b, c, g))
                  return !0;
              }
        };
      }
      function sb(a) {
        return a.length > 1 ? function(b, c, d) {
          var e = a.length;
          while (e--)
            if (!a[e](b, c, d))
              return !1;
          return !0;
        } : a[0];
      }
      function tb(a, b, c) {
        for (var d = 0,
            e = b.length; e > d; d++)
          fb(a, b[d], c);
        return c;
      }
      function ub(a, b, c, d, e) {
        for (var f,
            g = [],
            h = 0,
            i = a.length,
            j = null != b; i > h; h++)
          (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
        return g;
      }
      function vb(a, b, c, d, e, f) {
        return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function(f, g, h, i) {
          var j,
              k,
              l,
              m = [],
              n = [],
              o = g.length,
              p = f || tb(b || "*", h.nodeType ? [h] : h, []),
              q = !a || !f && b ? p : ub(p, m, a, h, i),
              r = c ? e || (f ? a : o || d) ? [] : g : q;
          if (c && c(q, r, h, i), d) {
            j = ub(r, n), d(j, [], h, i), k = j.length;
            while (k--)
              (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                j = [], k = r.length;
                while (k--)
                  (l = r[k]) && j.push(q[k] = l);
                e(null, r = [], j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          } else
            r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r);
        });
      }
      function wb(a) {
        for (var b,
            c,
            e,
            f = a.length,
            g = d.relative[a[0].type],
            h = g || d.relative[" "],
            i = g ? 1 : 0,
            k = rb(function(a) {
              return a === b;
            }, h, !0),
            l = rb(function(a) {
              return K.call(b, a) > -1;
            }, h, !0),
            m = [function(a, c, d) {
              return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
            }]; f > i; i++)
          if (c = d.relative[a[i].type])
            m = [rb(sb(m), c)];
          else {
            if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
              for (e = ++i; f > e; e++)
                if (d.relative[a[e].type])
                  break;
              return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a));
            }
            m.push(c);
          }
        return sb(m);
      }
      function xb(a, b) {
        var c = b.length > 0,
            e = a.length > 0,
            f = function(f, g, h, i, k) {
              var l,
                  m,
                  o,
                  p = 0,
                  q = "0",
                  r = f && [],
                  s = [],
                  t = j,
                  u = f || e && d.find.TAG("*", k),
                  v = w += null == t ? 1 : Math.random() || .1,
                  x = u.length;
              for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                if (e && l) {
                  m = 0;
                  while (o = a[m++])
                    if (o(l, g, h)) {
                      i.push(l);
                      break;
                    }
                  k && (w = v);
                }
                c && ((l = !o && l) && p--, f && r.push(l));
              }
              if (p += q, c && q !== p) {
                m = 0;
                while (o = b[m++])
                  o(r, s, g, h);
                if (f) {
                  if (p > 0)
                    while (q--)
                      r[q] || s[q] || (s[q] = G.call(i));
                  s = ub(s);
                }
                I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i);
              }
              return k && (w = v, j = t), r;
            };
        return c ? hb(f) : f;
      }
      return h = fb.compile = function(a, b) {
        var c,
            d = [],
            e = [],
            f = A[a + " "];
        if (!f) {
          b || (b = g(a)), c = b.length;
          while (c--)
            f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
          f = A(a, xb(e, d)), f.selector = a;
        }
        return f;
      }, i = fb.select = function(a, b, e, f) {
        var i,
            j,
            k,
            l,
            m,
            n = "function" == typeof a && a,
            o = !f && g(a = n.selector || a);
        if (e = e || [], 1 === o.length) {
          if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
            if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)
              return e;
            n && (b = b.parentNode), a = a.slice(j.shift().value.length);
          }
          i = X.needsContext.test(a) ? 0 : j.length;
          while (i--) {
            if (k = j[i], d.relative[l = k.type])
              break;
            if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
              if (j.splice(i, 1), a = f.length && qb(j), !a)
                return I.apply(e, f), e;
              break;
            }
          }
        }
        return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e;
      }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function(a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      }), ib(function(a) {
        return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
      }) || jb("type|href|height|width", function(a, b, c) {
        return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
      }), c.attributes && ib(function(a) {
        return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
      }) || jb("value", function(a, b, c) {
        return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
      }), ib(function(a) {
        return null == a.getAttribute("disabled");
      }) || jb(L, function(a, b, c) {
        var d;
        return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
      }), fb;
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;
    function x(a, b, c) {
      if (n.isFunction(b))
        return n.grep(a, function(a, d) {
          return !!b.call(a, d, a) !== c;
        });
      if (b.nodeType)
        return n.grep(a, function(a) {
          return a === b !== c;
        });
      if ("string" == typeof b) {
        if (w.test(b))
          return n.filter(b, a, c);
        b = n.filter(b, a);
      }
      return n.grep(a, function(a) {
        return g.call(b, a) >= 0 !== c;
      });
    }
    n.filter = function(a, b, c) {
      var d = b[0];
      return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
        return 1 === a.nodeType;
      }));
    }, n.fn.extend({
      find: function(a) {
        var b,
            c = this.length,
            d = [],
            e = this;
        if ("string" != typeof a)
          return this.pushStack(n(a).filter(function() {
            for (b = 0; c > b; b++)
              if (n.contains(e[b], this))
                return !0;
          }));
        for (b = 0; c > b; b++)
          n.find(a, e[b], d);
        return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
      },
      filter: function(a) {
        return this.pushStack(x(this, a || [], !1));
      },
      not: function(a) {
        return this.pushStack(x(this, a || [], !0));
      },
      is: function(a) {
        return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
      }
    });
    var y,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = n.fn.init = function(a, b) {
          var c,
              d;
          if (!a)
            return this;
          if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)
              return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
              if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
                for (c in b)
                  n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
              return this;
            }
            return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this;
          }
          return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
        };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
        };
    n.extend({
      dir: function(a, b, c) {
        var d = [],
            e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)
          if (1 === a.nodeType) {
            if (e && n(a).is(c))
              break;
            d.push(a);
          }
        return d;
      },
      sibling: function(a, b) {
        for (var c = []; a; a = a.nextSibling)
          1 === a.nodeType && a !== b && c.push(a);
        return c;
      }
    }), n.fn.extend({
      has: function(a) {
        var b = n(a, this),
            c = b.length;
        return this.filter(function() {
          for (var a = 0; c > a; a++)
            if (n.contains(this, b[a]))
              return !0;
        });
      },
      closest: function(a, b) {
        for (var c,
            d = 0,
            e = this.length,
            f = [],
            g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
              f.push(c);
              break;
            }
        return this.pushStack(f.length > 1 ? n.unique(f) : f);
      },
      index: function(a) {
        return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function(a, b) {
        return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
      },
      addBack: function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
      }
    });
    function D(a, b) {
      while ((a = a[b]) && 1 !== a.nodeType)
        ;
      return a;
    }
    n.each({
      parent: function(a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function(a) {
        return n.dir(a, "parentNode");
      },
      parentsUntil: function(a, b, c) {
        return n.dir(a, "parentNode", c);
      },
      next: function(a) {
        return D(a, "nextSibling");
      },
      prev: function(a) {
        return D(a, "previousSibling");
      },
      nextAll: function(a) {
        return n.dir(a, "nextSibling");
      },
      prevAll: function(a) {
        return n.dir(a, "previousSibling");
      },
      nextUntil: function(a, b, c) {
        return n.dir(a, "nextSibling", c);
      },
      prevUntil: function(a, b, c) {
        return n.dir(a, "previousSibling", c);
      },
      siblings: function(a) {
        return n.sibling((a.parentNode || {}).firstChild, a);
      },
      children: function(a) {
        return n.sibling(a.firstChild);
      },
      contents: function(a) {
        return a.contentDocument || n.merge([], a.childNodes);
      }
    }, function(a, b) {
      n.fn[a] = function(c, d) {
        var e = n.map(this, b, c);
        return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
      };
    });
    var E = /\S+/g,
        F = {};
    function G(a) {
      var b = F[a] = {};
      return n.each(a.match(E) || [], function(a, c) {
        b[c] = !0;
      }), b;
    }
    n.Callbacks = function(a) {
      a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
      var b,
          c,
          d,
          e,
          f,
          g,
          h = [],
          i = !a.once && [],
          j = function(l) {
            for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
              if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break;
              }
            d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
          },
          k = {
            add: function() {
              if (h) {
                var c = h.length;
                !function g(b) {
                  n.each(b, function(b, c) {
                    var d = n.type(c);
                    "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
                  });
                }(arguments), d ? f = h.length : b && (e = c, j(b));
              }
              return this;
            },
            remove: function() {
              return h && n.each(arguments, function(a, b) {
                var c;
                while ((c = n.inArray(b, h, c)) > -1)
                  h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
              }), this;
            },
            has: function(a) {
              return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
            },
            empty: function() {
              return h = [], f = 0, this;
            },
            disable: function() {
              return h = i = b = void 0, this;
            },
            disabled: function() {
              return !h;
            },
            lock: function() {
              return i = void 0, b || k.disable(), this;
            },
            locked: function() {
              return !i;
            },
            fireWith: function(a, b) {
              return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this;
            },
            fire: function() {
              return k.fireWith(this, arguments), this;
            },
            fired: function() {
              return !!c;
            }
          };
      return k;
    }, n.extend({
      Deferred: function(a) {
        var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
            c = "pending",
            d = {
              state: function() {
                return c;
              },
              always: function() {
                return e.done(arguments).fail(arguments), this;
              },
              then: function() {
                var a = arguments;
                return n.Deferred(function(c) {
                  n.each(b, function(b, f) {
                    var g = n.isFunction(a[b]) && a[b];
                    e[f[1]](function() {
                      var a = g && g.apply(this, arguments);
                      a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
                    });
                  }), a = null;
                }).promise();
              },
              promise: function(a) {
                return null != a ? n.extend(a, d) : d;
              }
            },
            e = {};
        return d.pipe = d.then, n.each(b, function(a, f) {
          var g = f[2],
              h = f[3];
          d[f[1]] = g.add, h && g.add(function() {
            c = h;
          }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
            return e[f[0] + "With"](this === e ? d : this, arguments), this;
          }, e[f[0] + "With"] = g.fireWith;
        }), d.promise(e), a && a.call(e, e), e;
      },
      when: function(a) {
        var b = 0,
            c = d.call(arguments),
            e = c.length,
            f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
            g = 1 === f ? a : n.Deferred(),
            h = function(a, b, c) {
              return function(e) {
                b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
              };
            },
            i,
            j,
            k;
        if (e > 1)
          for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
            c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
        return f || g.resolveWith(k, c), g.promise();
      }
    });
    var H;
    n.fn.ready = function(a) {
      return n.ready.promise().done(a), this;
    }, n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(a) {
        a ? n.readyWait++ : n.ready(!0);
      },
      ready: function(a) {
        (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
      }
    });
    function I() {
      l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready();
    }
    n.ready.promise = function(b) {
      return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b);
    }, n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
      var h = 0,
          i = a.length,
          j = null == c;
      if ("object" === n.type(c)) {
        e = !0;
        for (h in c)
          n.access(a, b, h, c[h], !0, f, g);
      } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
        return j.call(n(a), c);
      })), b))
        for (; i > h; h++)
          b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };
    n.acceptData = function(a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
    function K() {
      Object.defineProperty(this.cache = {}, 0, {get: function() {
          return {};
        }}), this.expando = n.expando + Math.random();
    }
    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
      key: function(a) {
        if (!K.accepts(a))
          return 0;
        var b = {},
            c = a[this.expando];
        if (!c) {
          c = K.uid++;
          try {
            b[this.expando] = {value: c}, Object.defineProperties(a, b);
          } catch (d) {
            b[this.expando] = c, n.extend(a, b);
          }
        }
        return this.cache[c] || (this.cache[c] = {}), c;
      },
      set: function(a, b, c) {
        var d,
            e = this.key(a),
            f = this.cache[e];
        if ("string" == typeof b)
          f[b] = c;
        else if (n.isEmptyObject(f))
          n.extend(this.cache[e], b);
        else
          for (d in b)
            f[d] = b[d];
        return f;
      },
      get: function(a, b) {
        var c = this.cache[this.key(a)];
        return void 0 === b ? c : c[b];
      },
      access: function(a, b, c) {
        var d;
        return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function(a, b) {
        var c,
            d,
            e,
            f = this.key(a),
            g = this.cache[f];
        if (void 0 === b)
          this.cache[f] = {};
        else {
          n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
          while (c--)
            delete g[d[c]];
        }
      },
      hasData: function(a) {
        return !n.isEmptyObject(this.cache[a[this.expando]] || {});
      },
      discard: function(a) {
        a[this.expando] && delete this.cache[a[this.expando]];
      }
    };
    var L = new K,
        M = new K,
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;
    function P(a, b, c) {
      var d;
      if (void 0 === c && 1 === a.nodeType)
        if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
          try {
            c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
          } catch (e) {}
          M.set(a, b, c);
        } else
          c = void 0;
      return c;
    }
    n.extend({
      hasData: function(a) {
        return M.hasData(a) || L.hasData(a);
      },
      data: function(a, b, c) {
        return M.access(a, b, c);
      },
      removeData: function(a, b) {
        M.remove(a, b);
      },
      _data: function(a, b, c) {
        return L.access(a, b, c);
      },
      _removeData: function(a, b) {
        L.remove(a, b);
      }
    }), n.fn.extend({
      data: function(a, b) {
        var c,
            d,
            e,
            f = this[0],
            g = f && f.attributes;
        if (void 0 === a) {
          if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
            c = g.length;
            while (c--)
              g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
            L.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a ? this.each(function() {
          M.set(this, a);
        }) : J(this, function(b) {
          var c,
              d = n.camelCase(a);
          if (f && void 0 === b) {
            if (c = M.get(f, a), void 0 !== c)
              return c;
            if (c = M.get(f, d), void 0 !== c)
              return c;
            if (c = P(f, d, void 0), void 0 !== c)
              return c;
          } else
            this.each(function() {
              var c = M.get(this, d);
              M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
            });
        }, null, b, arguments.length > 1, null, !0);
      },
      removeData: function(a) {
        return this.each(function() {
          M.remove(this, a);
        });
      }
    }), n.extend({
      queue: function(a, b, c) {
        var d;
        return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
      },
      dequeue: function(a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
            d = c.length,
            e = c.shift(),
            f = n._queueHooks(a, b),
            g = function() {
              n.dequeue(a, b);
            };
        "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
      },
      _queueHooks: function(a, b) {
        var c = b + "queueHooks";
        return L.get(a, c) || L.access(a, c, {empty: n.Callbacks("once memory").add(function() {
            L.remove(a, [b + "queue", c]);
          })});
      }
    }), n.fn.extend({
      queue: function(a, b) {
        var c = 2;
        return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
          var c = n.queue(this, a, b);
          n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
        });
      },
      dequeue: function(a) {
        return this.each(function() {
          n.dequeue(this, a);
        });
      },
      clearQueue: function(a) {
        return this.queue(a || "fx", []);
      },
      promise: function(a, b) {
        var c,
            d = 1,
            e = n.Deferred(),
            f = this,
            g = this.length,
            h = function() {
              --d || e.resolveWith(f, [f]);
            };
        "string" != typeof a && (b = a, a = void 0), a = a || "fx";
        while (g--)
          c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        R = ["Top", "Right", "Bottom", "Left"],
        S = function(a, b) {
          return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
        },
        T = /^(?:checkbox|radio)$/i;
    !function() {
      var a = l.createDocumentFragment(),
          b = a.appendChild(l.createElement("div")),
          c = l.createElement("input");
      c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/,
        W = /^(?:mouse|pointer|contextmenu)|click/,
        X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;
    function Z() {
      return !0;
    }
    function $() {
      return !1;
    }
    function _() {
      try {
        return l.activeElement;
      } catch (a) {}
    }
    n.event = {
      global: {},
      add: function(a, b, c, d, e) {
        var f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            o,
            p,
            q,
            r = L.get(a);
        if (r) {
          c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
            return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
          }), b = (b || "").match(E) || [""], j = b.length;
          while (j--)
            h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
              type: o,
              origType: q,
              data: d,
              handler: c,
              guid: c.guid,
              selector: e,
              needsContext: e && n.expr.match.needsContext.test(e),
              namespace: p.join(".")
            }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
        }
      },
      remove: function(a, b, c, d, e) {
        var f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            o,
            p,
            q,
            r = L.hasData(a) && L.get(a);
        if (r && (i = r.events)) {
          b = (b || "").match(E) || [""], j = b.length;
          while (j--)
            if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
              l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
              while (f--)
                k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
              g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
            } else
              for (o in i)
                n.event.remove(a, o + b[j], c, d, !0);
          n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
        }
      },
      trigger: function(b, c, d, e) {
        var f,
            g,
            h,
            i,
            k,
            m,
            o,
            p = [d || l],
            q = j.call(b, "type") ? b.type : b,
            r = j.call(b, "namespace") ? b.namespace.split(".") : [];
        if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
          if (!e && !o.noBubble && !n.isWindow(d)) {
            for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)
              p.push(g), h = g;
            h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
          }
          f = 0;
          while ((g = p[f++]) && !b.isPropagationStopped())
            b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
          return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result;
        }
      },
      dispatch: function(a) {
        a = n.event.fix(a);
        var b,
            c,
            e,
            f,
            g,
            h = [],
            i = d.call(arguments),
            j = (L.get(this, "events") || {})[a.type] || [],
            k = n.event.special[a.type] || {};
        if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
          h = n.event.handlers.call(this, a, j), b = 0;
          while ((f = h[b++]) && !a.isPropagationStopped()) {
            a.currentTarget = f.elem, c = 0;
            while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
              (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
          return k.postDispatch && k.postDispatch.call(this, a), a.result;
        }
      },
      handlers: function(a, b) {
        var c,
            d,
            e,
            f,
            g = [],
            h = b.delegateCount,
            i = a.target;
        if (h && i.nodeType && (!a.button || "click" !== a.type))
          for (; i !== this; i = i.parentNode || this)
            if (i.disabled !== !0 || "click" !== a.type) {
              for (d = [], c = 0; h > c; c++)
                f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
              d.length && g.push({
                elem: i,
                handlers: d
              });
            }
        return h < b.length && g.push({
          elem: this,
          handlers: b.slice(h)
        }), g;
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(a, b) {
          return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(a, b) {
          var c,
              d,
              e,
              f = b.button;
          return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
        }
      },
      fix: function(a) {
        if (a[n.expando])
          return a;
        var b,
            c,
            d,
            e = a.type,
            f = a,
            g = this.fixHooks[e];
        g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
        while (b--)
          c = d[b], a[c] = f[c];
        return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
      },
      special: {
        load: {noBubble: !0},
        focus: {
          trigger: function() {
            return this !== _() && this.focus ? (this.focus(), !1) : void 0;
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            return this === _() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
          },
          _default: function(a) {
            return n.nodeName(a.target, "a");
          }
        },
        beforeunload: {postDispatch: function(a) {
            void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
          }}
      },
      simulate: function(a, b, c, d) {
        var e = n.extend(new n.Event, c, {
          type: a,
          isSimulated: !0,
          originalEvent: {}
        });
        d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
      }
    }, n.removeEvent = function(a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    }, n.Event = function(a, b) {
      return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b);
    }, n.Event.prototype = {
      isDefaultPrevented: $,
      isPropagationStopped: $,
      isImmediatePropagationStopped: $,
      preventDefault: function() {
        var a = this.originalEvent;
        this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
      },
      stopPropagation: function() {
        var a = this.originalEvent;
        this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
      },
      stopImmediatePropagation: function() {
        var a = this.originalEvent;
        this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
      }
    }, n.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(a, b) {
      n.event.special[a] = {
        delegateType: b,
        bindType: b,
        handle: function(a) {
          var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
          return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
        }
      };
    }), k.focusinBubbles || n.each({
      focus: "focusin",
      blur: "focusout"
    }, function(a, b) {
      var c = function(a) {
        n.event.simulate(b, a.target, n.event.fix(a), !0);
      };
      n.event.special[b] = {
        setup: function() {
          var d = this.ownerDocument || this,
              e = L.access(d, b);
          e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
        },
        teardown: function() {
          var d = this.ownerDocument || this,
              e = L.access(d, b) - 1;
          e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
        }
      };
    }), n.fn.extend({
      on: function(a, b, c, d, e) {
        var f,
            g;
        if ("object" == typeof a) {
          "string" != typeof b && (c = c || b, b = void 0);
          for (g in a)
            this.on(g, b, c, a[g], e);
          return this;
        }
        if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)
          d = $;
        else if (!d)
          return this;
        return 1 === e && (f = d, d = function(a) {
          return n().off(a), f.apply(this, arguments);
        }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
          n.event.add(this, a, d, c, b);
        });
      },
      one: function(a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function(a, b, c) {
        var d,
            e;
        if (a && a.preventDefault && a.handleObj)
          return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
        if ("object" == typeof a) {
          for (e in a)
            this.off(e, b, a[e]);
          return this;
        }
        return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function() {
          n.event.remove(this, a, c, b);
        });
      },
      trigger: function(a, b) {
        return this.each(function() {
          n.event.trigger(a, b, this);
        });
      },
      triggerHandler: function(a, b) {
        var c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0;
      }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bb = /<([\w:]+)/,
        cb = /<|&#?\w+;/,
        db = /<(?:script|style|link)/i,
        eb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fb = /^$|\/(?:java|ecma)script/i,
        gb = /^true\/(.*)/,
        hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ib = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
    ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;
    function jb(a, b) {
      return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function kb(a) {
      return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function lb(a) {
      var b = gb.exec(a.type);
      return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function mb(a, b) {
      for (var c = 0,
          d = a.length; d > c; c++)
        L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
    }
    function nb(a, b) {
      var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j;
      if (1 === b.nodeType) {
        if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
          delete g.handle, g.events = {};
          for (e in j)
            for (c = 0, d = j[e].length; d > c; c++)
              n.event.add(b, e, j[e][c]);
        }
        M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
      }
    }
    function ob(a, b) {
      var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
      return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
    }
    function pb(a, b) {
      var c = b.nodeName.toLowerCase();
      "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
    n.extend({
      clone: function(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.cloneNode(!0),
            i = n.contains(a.ownerDocument, a);
        if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
          for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++)
            pb(f[d], g[d]);
        if (b)
          if (c)
            for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++)
              nb(f[d], g[d]);
          else
            nb(a, h);
        return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h;
      },
      buildFragment: function(a, b, c, d) {
        for (var e,
            f,
            g,
            h,
            i,
            j,
            k = b.createDocumentFragment(),
            l = [],
            m = 0,
            o = a.length; o > m; m++)
          if (e = a[m], e || 0 === e)
            if ("object" === n.type(e))
              n.merge(l, e.nodeType ? [e] : e);
            else if (cb.test(e)) {
              f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0];
              while (j--)
                f = f.lastChild;
              n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
            } else
              l.push(b.createTextNode(e));
        k.textContent = "", m = 0;
        while (e = l[m++])
          if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
            j = 0;
            while (e = f[j++])
              fb.test(e.type || "") && c.push(e);
          }
        return k;
      },
      cleanData: function(a) {
        for (var b,
            c,
            d,
            e,
            f = n.event.special,
            g = 0; void 0 !== (c = a[g]); g++) {
          if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
            if (b.events)
              for (d in b.events)
                f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
            L.cache[e] && delete L.cache[e];
          }
          delete M.cache[c[M.expando]];
        }
      }
    }), n.fn.extend({
      text: function(a) {
        return J(this, function(a) {
          return void 0 === a ? n.text(this) : this.empty().each(function() {
            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
          });
        }, null, a, arguments.length);
      },
      append: function() {
        return this.domManip(arguments, function(a) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b = jb(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function() {
        return this.domManip(arguments, function(a) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b = jb(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function() {
        return this.domManip(arguments, function(a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function() {
        return this.domManip(arguments, function(a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      remove: function(a, b) {
        for (var c,
            d = a ? n.filter(a, this) : this,
            e = 0; null != (c = d[e]); e++)
          b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
        return this;
      },
      empty: function() {
        for (var a,
            b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = "");
        return this;
      },
      clone: function(a, b) {
        return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
          return n.clone(this, a, b);
        });
      },
      html: function(a) {
        return J(this, function(a) {
          var b = this[0] || {},
              c = 0,
              d = this.length;
          if (void 0 === a && 1 === b.nodeType)
            return b.innerHTML;
          if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
            a = a.replace(ab, "<$1></$2>");
            try {
              for (; d > c; c++)
                b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a);
              b = 0;
            } catch (e) {}
          }
          b && this.empty().append(a);
        }, null, a, arguments.length);
      },
      replaceWith: function() {
        var a = arguments[0];
        return this.domManip(arguments, function(b) {
          a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this);
        }), a && (a.length || a.nodeType) ? this : this.remove();
      },
      detach: function(a) {
        return this.remove(a, !0);
      },
      domManip: function(a, b) {
        a = e.apply([], a);
        var c,
            d,
            f,
            g,
            h,
            i,
            j = 0,
            l = this.length,
            m = this,
            o = l - 1,
            p = a[0],
            q = n.isFunction(p);
        if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p))
          return this.each(function(c) {
            var d = m.eq(c);
            q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
          });
        if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
          for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++)
            h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j);
          if (g)
            for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++)
              h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")));
        }
        return this;
      }
    }), n.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(a, b) {
      n.fn[a] = function(a) {
        for (var c,
            d = [],
            e = n(a),
            g = e.length - 1,
            h = 0; g >= h; h++)
          c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
        return this.pushStack(d);
      };
    });
    var qb,
        rb = {};
    function sb(b, c) {
      var d,
          e = n(c.createElement(b)).appendTo(c.body),
          f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
      return e.detach(), f;
    }
    function tb(a) {
      var b = l,
          c = rb[a];
      return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c;
    }
    var ub = /^margin/,
        vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        wb = function(a) {
          return a.ownerDocument.defaultView.getComputedStyle(a, null);
        };
    function xb(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.style;
      return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }
    function yb(a, b) {
      return {get: function() {
          return a() ? void delete this.get : (this.get = b).apply(this, arguments);
        }};
    }
    !function() {
      var b,
          c,
          d = l.documentElement,
          e = l.createElement("div"),
          f = l.createElement("div");
      if (f.style) {
        f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);
        function g() {
          f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
          var g = a.getComputedStyle(f, null);
          b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
        }
        a.getComputedStyle && n.extend(k, {
          pixelPosition: function() {
            return g(), b;
          },
          boxSizingReliable: function() {
            return null == c && g(), c;
          },
          reliableMarginRight: function() {
            var b,
                c = f.appendChild(l.createElement("div"));
            return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), b;
          }
        });
      }
    }(), n.swap = function(a, b, c, d) {
      var e,
          f,
          g = {};
      for (f in b)
        g[f] = a.style[f], a.style[f] = b[f];
      e = c.apply(a, d || []);
      for (f in b)
        a.style[f] = g[f];
      return e;
    };
    var zb = /^(none|table(?!-c[ea]).+)/,
        Ab = new RegExp("^(" + Q + ")(.*)$", "i"),
        Bb = new RegExp("^([+-])=(" + Q + ")", "i"),
        Cb = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
        },
        Db = {
          letterSpacing: "0",
          fontWeight: "400"
        },
        Eb = ["Webkit", "O", "Moz", "ms"];
    function Fb(a, b) {
      if (b in a)
        return b;
      var c = b[0].toUpperCase() + b.slice(1),
          d = b,
          e = Eb.length;
      while (e--)
        if (b = Eb[e] + c, b in a)
          return b;
      return d;
    }
    function Gb(a, b, c) {
      var d = Ab.exec(b);
      return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function Hb(a, b, c, d, e) {
      for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
          g = 0; 4 > f; f += 2)
        "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
      return g;
    }
    function Ib(a, b, c) {
      var d = !0,
          e = "width" === b ? a.offsetWidth : a.offsetHeight,
          f = wb(a),
          g = "border-box" === n.css(a, "boxSizing", !1, f);
      if (0 >= e || null == e) {
        if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e))
          return e;
        d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
      }
      return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function Jb(a, b) {
      for (var c,
          d,
          e,
          f = [],
          g = 0,
          h = a.length; h > g; g++)
        d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
      for (g = 0; h > g; g++)
        d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
      return a;
    }
    n.extend({
      cssHooks: {opacity: {get: function(a, b) {
            if (b) {
              var c = xb(a, "opacity");
              return "" === c ? "1" : c;
            }
          }}},
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {"float": "cssFloat"},
      style: function(a, b, c, d) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
          var e,
              f,
              g,
              h = n.camelCase(b),
              i = a.style;
          return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
        }
      },
      css: function(a, b, c, d) {
        var e,
            f,
            g,
            h = n.camelCase(b);
        return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
      }
    }), n.each(["height", "width"], function(a, b) {
      n.cssHooks[b] = {
        get: function(a, c, d) {
          return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function() {
            return Ib(a, b, d);
          }) : Ib(a, b, d) : void 0;
        },
        set: function(a, c, d) {
          var e = d && wb(a);
          return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
        }
      };
    }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function(a, b) {
      return b ? n.swap(a, {display: "inline-block"}, xb, [a, "marginRight"]) : void 0;
    }), n.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(a, b) {
      n.cssHooks[a + b] = {expand: function(c) {
          for (var d = 0,
              e = {},
              f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
            e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        }}, ub.test(a) || (n.cssHooks[a + b].set = Gb);
    }), n.fn.extend({
      css: function(a, b) {
        return J(this, function(a, b, c) {
          var d,
              e,
              f = {},
              g = 0;
          if (n.isArray(b)) {
            for (d = wb(a), e = b.length; e > g; g++)
              f[b[g]] = n.css(a, b[g], !1, d);
            return f;
          }
          return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
        }, a, b, arguments.length > 1);
      },
      show: function() {
        return Jb(this, !0);
      },
      hide: function() {
        return Jb(this);
      },
      toggle: function(a) {
        return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
          S(this) ? n(this).show() : n(this).hide();
        });
      }
    });
    function Kb(a, b, c, d, e) {
      return new Kb.prototype.init(a, b, c, d, e);
    }
    n.Tween = Kb, Kb.prototype = {
      constructor: Kb,
      init: function(a, b, c, d, e, f) {
        this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
      },
      cur: function() {
        var a = Kb.propHooks[this.prop];
        return a && a.get ? a.get(this) : Kb.propHooks._default.get(this);
      },
      run: function(a) {
        var b,
            c = Kb.propHooks[this.prop];
        return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this;
      }
    }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {_default: {
        get: function(a) {
          var b;
          return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
        },
        set: function(a) {
          n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
        }
      }}, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {set: function(a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
      }}, n.easing = {
      linear: function(a) {
        return a;
      },
      swing: function(a) {
        return .5 - Math.cos(a * Math.PI) / 2;
      }
    }, n.fx = Kb.prototype.init, n.fx.step = {};
    var Lb,
        Mb,
        Nb = /^(?:toggle|show|hide)$/,
        Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pb = /queueHooks$/,
        Qb = [Vb],
        Rb = {"*": [function(a, b) {
            var c = this.createTween(a, b),
                d = c.cur(),
                e = Ob.exec(b),
                f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a)),
                h = 1,
                i = 20;
            if (g && g[3] !== f) {
              f = f || g[3], e = e || [], g = +d || 1;
              do
                h = h || ".5", g /= h, n.style(c.elem, a, g + f);
   while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
          }]};
    function Sb() {
      return setTimeout(function() {
        Lb = void 0;
      }), Lb = n.now();
    }
    function Tb(a, b) {
      var c,
          d = 0,
          e = {height: a};
      for (b = b ? 1 : 0; 4 > d; d += 2 - b)
        c = R[d], e["margin" + c] = e["padding" + c] = a;
      return b && (e.opacity = e.width = a), e;
    }
    function Ub(a, b, c) {
      for (var d,
          e = (Rb[b] || []).concat(Rb["*"]),
          f = 0,
          g = e.length; g > f; f++)
        if (d = e[f].call(c, b, a))
          return d;
    }
    function Vb(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = this,
          m = {},
          o = a.style,
          p = a.nodeType && S(a),
          q = L.get(a, "fxshow");
      c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
        h.unqueued || i();
      }), h.unqueued++, l.always(function() {
        l.always(function() {
          h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
        });
      })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
      }));
      for (d in b)
        if (e = b[d], Nb.exec(e)) {
          if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
            if ("show" !== e || !q || void 0 === q[d])
              continue;
            p = !0;
          }
          m[d] = q && q[d] || n.style(a, d);
        } else
          j = void 0;
      if (n.isEmptyObject(m))
        "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j);
      else {
        q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
          n(a).hide();
        }), l.done(function() {
          var b;
          L.remove(a, "fxshow");
          for (b in m)
            n.style(a, b, m[b]);
        });
        for (d in m)
          g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
      }
    }
    function Wb(a, b) {
      var c,
          d,
          e,
          f,
          g;
      for (c in a)
        if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
          f = g.expand(f), delete a[d];
          for (c in f)
            c in a || (a[c] = f[c], b[c] = e);
        } else
          b[d] = e;
    }
    function Xb(a, b, c) {
      var d,
          e,
          f = 0,
          g = Qb.length,
          h = n.Deferred().always(function() {
            delete i.elem;
          }),
          i = function() {
            if (e)
              return !1;
            for (var b = Lb || Sb(),
                c = Math.max(0, j.startTime + j.duration - b),
                d = c / j.duration || 0,
                f = 1 - d,
                g = 0,
                i = j.tweens.length; i > g; g++)
              j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
          },
          j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Lb || Sb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
              var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
              return j.tweens.push(d), d;
            },
            stop: function(b) {
              var c = 0,
                  d = b ? j.tweens.length : 0;
              if (e)
                return this;
              for (e = !0; d > c; c++)
                j.tweens[c].run(1);
              return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
            }
          }),
          k = j.props;
      for (Wb(k, j.opts.specialEasing); g > f; f++)
        if (d = Qb[f].call(j, a, k, j.opts))
          return d;
      return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
        elem: a,
        anim: j,
        queue: j.opts.queue
      })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    n.Animation = n.extend(Xb, {
      tweener: function(a, b) {
        n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
        for (var c,
            d = 0,
            e = a.length; e > d; d++)
          c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b);
      },
      prefilter: function(a, b) {
        b ? Qb.unshift(a) : Qb.push(a);
      }
    }), n.speed = function(a, b, c) {
      var d = a && "object" == typeof a ? n.extend({}, a) : {
        complete: c || !c && b || n.isFunction(a) && a,
        duration: a,
        easing: c && b || b && !n.isFunction(b) && b
      };
      return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
        n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
      }, d;
    }, n.fn.extend({
      fadeTo: function(a, b, c, d) {
        return this.filter(S).css("opacity", 0).show().end().animate({opacity: b}, a, c, d);
      },
      animate: function(a, b, c, d) {
        var e = n.isEmptyObject(a),
            f = n.speed(b, c, d),
            g = function() {
              var b = Xb(this, n.extend({}, a), f);
              (e || L.get(this, "finish")) && b.stop(!0);
            };
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
      },
      stop: function(a, b, c) {
        var d = function(a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
          var b = !0,
              e = null != a && a + "queueHooks",
              f = n.timers,
              g = L.get(this);
          if (e)
            g[e] && g[e].stop && d(g[e]);
          else
            for (e in g)
              g[e] && g[e].stop && Pb.test(e) && d(g[e]);
          for (e = f.length; e--; )
            f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
          (b || !c) && n.dequeue(this, a);
        });
      },
      finish: function(a) {
        return a !== !1 && (a = a || "fx"), this.each(function() {
          var b,
              c = L.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = n.timers,
              g = d ? d.length : 0;
          for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--; )
            f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
          for (b = 0; g > b; b++)
            d[b] && d[b].finish && d[b].finish.call(this);
          delete c.finish;
        });
      }
    }), n.each(["toggle", "show", "hide"], function(a, b) {
      var c = n.fn[b];
      n.fn[b] = function(a, d, e) {
        return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e);
      };
    }), n.each({
      slideDown: Tb("show"),
      slideUp: Tb("hide"),
      slideToggle: Tb("toggle"),
      fadeIn: {opacity: "show"},
      fadeOut: {opacity: "hide"},
      fadeToggle: {opacity: "toggle"}
    }, function(a, b) {
      n.fn[a] = function(a, c, d) {
        return this.animate(b, a, c, d);
      };
    }), n.timers = [], n.fx.tick = function() {
      var a,
          b = 0,
          c = n.timers;
      for (Lb = n.now(); b < c.length; b++)
        a = c[b], a() || c[b] !== a || c.splice(b--, 1);
      c.length || n.fx.stop(), Lb = void 0;
    }, n.fx.timer = function(a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }, n.fx.interval = 13, n.fx.start = function() {
      Mb || (Mb = setInterval(n.fx.tick, n.fx.interval));
    }, n.fx.stop = function() {
      clearInterval(Mb), Mb = null;
    }, n.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, n.fn.delay = function(a, b) {
      return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
        var d = setTimeout(b, a);
        c.stop = function() {
          clearTimeout(d);
        };
      });
    }, function() {
      var a = l.createElement("input"),
          b = l.createElement("select"),
          c = b.appendChild(l.createElement("option"));
      a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value;
    }();
    var Yb,
        Zb,
        $b = n.expr.attrHandle;
    n.fn.extend({
      attr: function(a, b) {
        return J(this, n.attr, a, b, arguments.length > 1);
      },
      removeAttr: function(a) {
        return this.each(function() {
          n.removeAttr(this, a);
        });
      }
    }), n.extend({
      attr: function(a, b, c) {
        var d,
            e,
            f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)
          return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b));
      },
      removeAttr: function(a, b) {
        var c,
            d,
            e = 0,
            f = b && b.match(E);
        if (f && 1 === a.nodeType)
          while (c = f[e++])
            d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
      },
      attrHooks: {type: {set: function(a, b) {
            if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          }}}
    }), Zb = {set: function(a, b, c) {
        return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
      }}, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
      var c = $b[b] || n.find.attr;
      $b[b] = function(a, b, d) {
        var e,
            f;
        return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e;
      };
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
      prop: function(a, b) {
        return J(this, n.prop, a, b, arguments.length > 1);
      },
      removeProp: function(a) {
        return this.each(function() {
          delete this[n.propFix[a] || a];
        });
      }
    }), n.extend({
      propFix: {
        "for": "htmlFor",
        "class": "className"
      },
      prop: function(a, b, c) {
        var d,
            e,
            f,
            g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)
          return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
      },
      propHooks: {tabIndex: {get: function(a) {
            return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1;
          }}}
    }), k.optSelected || (n.propHooks.selected = {get: function(a) {
        var b = a.parentNode;
        return b && b.parentNode && b.parentNode.selectedIndex, null;
      }}), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      n.propFix[this.toLowerCase()] = this;
    });
    var ac = /[\t\r\n\f]/g;
    n.fn.extend({
      addClass: function(a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h = "string" == typeof a && a,
            i = 0,
            j = this.length;
        if (n.isFunction(a))
          return this.each(function(b) {
            n(this).addClass(a.call(this, b, this.className));
          });
        if (h)
          for (b = (a || "").match(E) || []; j > i; i++)
            if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
              f = 0;
              while (e = b[f++])
                d.indexOf(" " + e + " ") < 0 && (d += e + " ");
              g = n.trim(d), c.className !== g && (c.className = g);
            }
        return this;
      },
      removeClass: function(a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h = 0 === arguments.length || "string" == typeof a && a,
            i = 0,
            j = this.length;
        if (n.isFunction(a))
          return this.each(function(b) {
            n(this).removeClass(a.call(this, b, this.className));
          });
        if (h)
          for (b = (a || "").match(E) || []; j > i; i++)
            if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
              f = 0;
              while (e = b[f++])
                while (d.indexOf(" " + e + " ") >= 0)
                  d = d.replace(" " + e + " ", " ");
              g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
            }
        return this;
      },
      toggleClass: function(a, b) {
        var c = typeof a;
        return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
          n(this).toggleClass(a.call(this, c, this.className, b), b);
        } : function() {
          if ("string" === c) {
            var b,
                d = 0,
                e = n(this),
                f = a.match(E) || [];
            while (b = f[d++])
              e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          } else
            (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
        });
      },
      hasClass: function(a) {
        for (var b = " " + a + " ",
            c = 0,
            d = this.length; d > c; c++)
          if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0)
            return !0;
        return !1;
      }
    });
    var bc = /\r/g;
    n.fn.extend({val: function(a) {
        var b,
            c,
            d,
            e = this[0];
        {
          if (arguments.length)
            return d = n.isFunction(a), this.each(function(c) {
              var e;
              1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                return null == a ? "" : a + "";
              })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
            });
          if (e)
            return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c);
        }
      }}), n.extend({valHooks: {
        option: {get: function(a) {
            var b = n.find.attr(a, "value");
            return null != b ? b : n.trim(n.text(a));
          }},
        select: {
          get: function(a) {
            for (var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0; h > i; i++)
              if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                if (b = n(c).val(), f)
                  return b;
                g.push(b);
              }
            return g;
          },
          set: function(a, b) {
            var c,
                d,
                e = a.options,
                f = n.makeArray(b),
                g = e.length;
            while (g--)
              d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
            return c || (a.selectedIndex = -1), f;
          }
        }
      }}), n.each(["radio", "checkbox"], function() {
      n.valHooks[this] = {set: function(a, b) {
          return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
        }}, k.checkOn || (n.valHooks[this].get = function(a) {
        return null === a.getAttribute("value") ? "on" : a.value;
      });
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
      n.fn[b] = function(a, c) {
        return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
      };
    }), n.fn.extend({
      hover: function(a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
      bind: function(a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function(a, b) {
        return this.off(a, null, b);
      },
      delegate: function(a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function(a, b, c) {
        return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
      }
    });
    var cc = n.now(),
        dc = /\?/;
    n.parseJSON = function(a) {
      return JSON.parse(a + "");
    }, n.parseXML = function(a) {
      var b,
          c;
      if (!a || "string" != typeof a)
        return null;
      try {
        c = new DOMParser, b = c.parseFromString(a, "text/xml");
      } catch (d) {
        b = void 0;
      }
      return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b;
    };
    var ec,
        fc,
        gc = /#.*$/,
        hc = /([?&])_=[^&]*/,
        ic = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        kc = /^(?:GET|HEAD)$/,
        lc = /^\/\//,
        mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        nc = {},
        oc = {},
        pc = "*/".concat("*");
    try {
      fc = location.href;
    } catch (qc) {
      fc = l.createElement("a"), fc.href = "", fc = fc.href;
    }
    ec = mc.exec(fc.toLowerCase()) || [];
    function rc(a) {
      return function(b, c) {
        "string" != typeof b && (c = b, b = "*");
        var d,
            e = 0,
            f = b.toLowerCase().match(E) || [];
        if (n.isFunction(c))
          while (d = f[e++])
            "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      };
    }
    function sc(a, b, c, d) {
      var e = {},
          f = a === oc;
      function g(h) {
        var i;
        return e[h] = !0, n.each(a[h] || [], function(a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
        }), i;
      }
      return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function tc(a, b) {
      var c,
          d,
          e = n.ajaxSettings.flatOptions || {};
      for (c in b)
        void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
      return d && n.extend(!0, a, d), a;
    }
    function uc(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.contents,
          i = a.dataTypes;
      while ("*" === i[0])
        i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
      if (d)
        for (e in h)
          if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
          }
      if (i[0] in c)
        f = i[0];
      else {
        for (e in c) {
          if (!i[0] || a.converters[e + " " + i[0]]) {
            f = e;
            break;
          }
          g || (g = e);
        }
        f = f || g;
      }
      return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function vc(a, b, c, d) {
      var e,
          f,
          g,
          h,
          i,
          j = {},
          k = a.dataTypes.slice();
      if (k[1])
        for (g in a.converters)
          j[g.toLowerCase()] = a.converters[g];
      f = k.shift();
      while (f)
        if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
          if ("*" === f)
            f = i;
          else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
              for (e in j)
                if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                  g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                  break;
                }
            if (g !== !0)
              if (g && a["throws"])
                b = g(b);
              else
                try {
                  b = g(b);
                } catch (l) {
                  return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                  };
                }
          }
      return {
        state: "success",
        data: b
      };
    }
    n.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: fc,
        type: "GET",
        isLocal: jc.test(ec[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": pc,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /xml/,
          html: /html/,
          json: /json/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": n.parseJSON,
          "text xml": n.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(a, b) {
        return b ? tc(tc(a, n.ajaxSettings), b) : tc(n.ajaxSettings, a);
      },
      ajaxPrefilter: rc(nc),
      ajaxTransport: rc(oc),
      ajax: function(a, b) {
        "object" == typeof a && (b = a, a = void 0), b = b || {};
        var c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k = n.ajaxSetup({}, b),
            l = k.context || k,
            m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
            o = n.Deferred(),
            p = n.Callbacks("once memory"),
            q = k.statusCode || {},
            r = {},
            s = {},
            t = 0,
            u = "canceled",
            v = {
              readyState: 0,
              getResponseHeader: function(a) {
                var b;
                if (2 === t) {
                  if (!f) {
                    f = {};
                    while (b = ic.exec(e))
                      f[b[1].toLowerCase()] = b[2];
                  }
                  b = f[a.toLowerCase()];
                }
                return null == b ? null : b;
              },
              getAllResponseHeaders: function() {
                return 2 === t ? e : null;
              },
              setRequestHeader: function(a, b) {
                var c = a.toLowerCase();
                return t || (a = s[c] = s[c] || a, r[a] = b), this;
              },
              overrideMimeType: function(a) {
                return t || (k.mimeType = a), this;
              },
              statusCode: function(a) {
                var b;
                if (a)
                  if (2 > t)
                    for (b in a)
                      q[b] = [q[b], a[b]];
                  else
                    v.always(a[v.status]);
                return this;
              },
              abort: function(a) {
                var b = a || u;
                return c && c.abort(b), x(0, b), this;
              }
            };
        if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + "").replace(gc, "").replace(lc, ec[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (ec[3] || ("http:" === ec[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t)
          return v;
        i = k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = hc.test(d) ? d.replace(hc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : k.accepts["*"]);
        for (j in k.headers)
          v.setRequestHeader(j, k.headers[j]);
        if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
          return v.abort();
        u = "abort";
        for (j in {
          success: 1,
          error: 1,
          complete: 1
        })
          v[j](k[j]);
        if (c = sc(oc, k, b, v)) {
          v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
            v.abort("timeout");
          }, k.timeout));
          try {
            t = 1, c.send(r, x);
          } catch (w) {
            if (!(2 > t))
              throw w;
            x(-1, w);
          }
        } else
          x(-1, "No Transport");
        function x(a, b, f, h) {
          var j,
              r,
              s,
              u,
              w,
              x = b;
          2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")));
        }
        return v;
      },
      getJSON: function(a, b, c) {
        return n.get(a, b, c, "json");
      },
      getScript: function(a, b) {
        return n.get(a, void 0, b, "script");
      }
    }), n.each(["get", "post"], function(a, b) {
      n[b] = function(a, c, d, e) {
        return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
          url: a,
          type: b,
          dataType: e,
          data: c,
          success: d
        });
      };
    }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
      n.fn[b] = function(a) {
        return this.on(b, a);
      };
    }), n._evalUrl = function(a) {
      return n.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        "throws": !0
      });
    }, n.fn.extend({
      wrapAll: function(a) {
        var b;
        return n.isFunction(a) ? this.each(function(b) {
          n(this).wrapAll(a.call(this, b));
        }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
          var a = this;
          while (a.firstElementChild)
            a = a.firstElementChild;
          return a;
        }).append(this)), this);
      },
      wrapInner: function(a) {
        return this.each(n.isFunction(a) ? function(b) {
          n(this).wrapInner(a.call(this, b));
        } : function() {
          var b = n(this),
              c = b.contents();
          c.length ? c.wrapAll(a) : b.append(a);
        });
      },
      wrap: function(a) {
        var b = n.isFunction(a);
        return this.each(function(c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function() {
        return this.parent().each(function() {
          n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
        }).end();
      }
    }), n.expr.filters.hidden = function(a) {
      return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, n.expr.filters.visible = function(a) {
      return !n.expr.filters.hidden(a);
    };
    var wc = /%20/g,
        xc = /\[\]$/,
        yc = /\r?\n/g,
        zc = /^(?:submit|button|image|reset|file)$/i,
        Ac = /^(?:input|select|textarea|keygen)/i;
    function Bc(a, b, c, d) {
      var e;
      if (n.isArray(b))
        n.each(b, function(b, e) {
          c || xc.test(a) ? d(a, e) : Bc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        });
      else if (c || "object" !== n.type(b))
        d(a, b);
      else
        for (e in b)
          Bc(a + "[" + e + "]", b[e], c, d);
    }
    n.param = function(a, b) {
      var c,
          d = [],
          e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
          };
      if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))
        n.each(a, function() {
          e(this.name, this.value);
        });
      else
        for (c in a)
          Bc(c, a[c], b, e);
      return d.join("&").replace(wc, "+");
    }, n.fn.extend({
      serialize: function() {
        return n.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var a = n.prop(this, "elements");
          return a ? n.makeArray(a) : this;
        }).filter(function() {
          var a = this.type;
          return this.name && !n(this).is(":disabled") && Ac.test(this.nodeName) && !zc.test(a) && (this.checked || !T.test(a));
        }).map(function(a, b) {
          var c = n(this).val();
          return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
            return {
              name: b.name,
              value: a.replace(yc, "\r\n")
            };
          }) : {
            name: b.name,
            value: c.replace(yc, "\r\n")
          };
        }).get();
      }
    }), n.ajaxSettings.xhr = function() {
      try {
        return new XMLHttpRequest;
      } catch (a) {}
    };
    var Cc = 0,
        Dc = {},
        Ec = {
          0: 200,
          1223: 204
        },
        Fc = n.ajaxSettings.xhr();
    a.ActiveXObject && n(a).on("unload", function() {
      for (var a in Dc)
        Dc[a]();
    }), k.cors = !!Fc && "withCredentials" in Fc, k.ajax = Fc = !!Fc, n.ajaxTransport(function(a) {
      var b;
      return k.cors || Fc && !a.crossDomain ? {
        send: function(c, d) {
          var e,
              f = a.xhr(),
              g = ++Cc;
          if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
            for (e in a.xhrFields)
              f[e] = a.xhrFields[e];
          a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
          for (e in c)
            f.setRequestHeader(e, c[e]);
          b = function(a) {
            return function() {
              b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()));
            };
          }, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort");
          try {
            f.send(a.hasContent && a.data || null);
          } catch (h) {
            if (b)
              throw h;
          }
        },
        abort: function() {
          b && b();
        }
      } : void 0;
    }), n.ajaxSetup({
      accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
      contents: {script: /(?:java|ecma)script/},
      converters: {"text script": function(a) {
          return n.globalEval(a), a;
        }}
    }), n.ajaxPrefilter("script", function(a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), n.ajaxTransport("script", function(a) {
      if (a.crossDomain) {
        var b,
            c;
        return {
          send: function(d, e) {
            b = n("<script>").prop({
              async: !0,
              charset: a.scriptCharset,
              src: a.url
            }).on("load error", c = function(a) {
              b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
            }), l.head.appendChild(b[0]);
          },
          abort: function() {
            c && c();
          }
        };
      }
    });
    var Gc = [],
        Hc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var a = Gc.pop() || n.expando + "_" + cc++;
        return this[a] = !0, a;
      }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
      var e,
          f,
          g,
          h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
      return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
        return g || n.error(e + " was not called"), g[0];
      }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
        g = arguments;
      }, d.always(function() {
        a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
      }), "script") : void 0;
    }), n.parseHTML = function(a, b, c) {
      if (!a || "string" != typeof a)
        return null;
      "boolean" == typeof b && (c = b, b = !1), b = b || l;
      var d = v.exec(a),
          e = !c && [];
      return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
    };
    var Ic = n.fn.load;
    n.fn.load = function(a, b, c) {
      if ("string" != typeof a && Ic)
        return Ic.apply(this, arguments);
      var d,
          e,
          f,
          g = this,
          h = a.indexOf(" ");
      return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
        url: a,
        type: e,
        dataType: "html",
        data: b
      }).done(function(a) {
        f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
      }).complete(c && function(a, b) {
        g.each(c, f || [a.responseText, b, a]);
      }), this;
    }, n.expr.filters.animated = function(a) {
      return n.grep(n.timers, function(b) {
        return a === b.elem;
      }).length;
    };
    var Jc = a.document.documentElement;
    function Kc(a) {
      return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    n.offset = {setOffset: function(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k = n.css(a, "position"),
            l = n(a),
            m = {};
        "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
      }}, n.fn.extend({
      offset: function(a) {
        if (arguments.length)
          return void 0 === a ? this : this.each(function(b) {
            n.offset.setOffset(this, a, b);
          });
        var b,
            c,
            d = this[0],
            e = {
              top: 0,
              left: 0
            },
            f = d && d.ownerDocument;
        if (f)
          return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Kc(f), {
            top: e.top + c.pageYOffset - b.clientTop,
            left: e.left + c.pageXOffset - b.clientLeft
          }) : e;
      },
      position: function() {
        if (this[0]) {
          var a,
              b,
              c = this[0],
              d = {
                top: 0,
                left: 0
              };
          return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
            top: b.top - d.top - n.css(c, "marginTop", !0),
            left: b.left - d.left - n.css(c, "marginLeft", !0)
          };
        }
      },
      offsetParent: function() {
        return this.map(function() {
          var a = this.offsetParent || Jc;
          while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))
            a = a.offsetParent;
          return a || Jc;
        });
      }
    }), n.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(b, c) {
      var d = "pageYOffset" === c;
      n.fn[b] = function(e) {
        return J(this, function(b, e, f) {
          var g = Kc(b);
          return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
        }, b, e, arguments.length, null);
      };
    }), n.each(["top", "left"], function(a, b) {
      n.cssHooks[b] = yb(k.pixelPosition, function(a, c) {
        return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0;
      });
    }), n.each({
      Height: "height",
      Width: "width"
    }, function(a, b) {
      n.each({
        padding: "inner" + a,
        content: b,
        "": "outer" + a
      }, function(c, d) {
        n.fn[d] = function(d, e) {
          var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (d === !0 || e === !0 ? "margin" : "border");
          return J(this, function(b, c, d) {
            var e;
            return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
          }, b, f ? d : void 0, f, null);
        };
      });
    }), n.fn.size = function() {
      return this.length;
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && System.register("github:components/jquery@2.1.1/jquery.min", [], false, function(__require, __exports, __module) {
      return (function() {
        return n;
      }).call(this);
    });
    var Lc = a.jQuery,
        Mc = a.$;
    return n.noConflict = function(b) {
      return a.$ === n && (a.$ = Mc), b && a.jQuery === n && (a.jQuery = Lc), n;
    }, typeof b === U && (a.jQuery = a.$ = n), n;
  });
  })();
(function() {
function define(){};  define.amd = {};
  System.register("app/mixer", ["lodash"], false, function(require) {
    var lodash = require("lodash");
    function patch(dest) {
      var mixins = lodash(arguments).toArray().rest();
      var collisions = {};
      lodash(mixins).each(function(mixin) {
        lodash(mixin).forOwn(function(value, key) {
          if (lodash.isFunction(value)) {
            if (dest[key]) {
              collisions[key] = collisions[key] || [dest[key]];
              collisions[key].push(value);
            }
            dest[key] = value;
          } else if (lodash.isPlainObject(value)) {
            dest[key] = lodash.extend({}, value, dest[key] || {});
          } else if (lodash.isArray(value)) {
            dest[key] = value.concat(dest[key] || []);
          } else {
            dest[key] = value;
          }
        });
      });
      lodash(collisions).forOwn(function(fnValues, propName) {
        dest[propName] = wrapFuncs(fnValues);
      });
    }
    function wrapFuncs(funcs) {
      return function() {
        var that = this,
            args = arguments,
            returnValue;
        lodash(funcs).each(function(value) {
          var returnedValue = lodash.isFunction(value) ? value.apply(that, args) : value;
          returnValue = (returnedValue === undefined ? returnValue : returnedValue);
        });
        return returnValue;
      };
    }
    return {
      mixin: lodash.defaults,
      assign: lodash.assign,
      patch: patch
    };
  });
  })();
(function() {
function define(){};  define.amd = {};
  System.register("app/models/egg", ["backbone"], false, function(require) {
    var Backbone = require("backbone");
    var Egg = Backbone.Model.extend({
      defaults: {
        id: null,
        name: null,
        cracked: false
      },
      initialize: function() {}
    });
    return Egg;
  });
  })();
(function() {
function define(){};  define.amd = {};
  System.register("app/collections/eggs", ["backbone", "app/models/egg"], false, function(require) {
    var Backbone = require("backbone"),
        Egg = require("app/models/egg");
    var Eggs = Backbone.Collection.extend({
      url: function() {
        return 'api/eggs';
      },
      model: Egg,
      crackedCount: function() {
        return this.where({cracked: true}).length;
      }
    });
    return Eggs;
  });
  })();
(function() {
function define(){};  define.amd = {};
  System.register("src/collections/eggs", ["backbone", "app/models/egg"], false, function(require) {
    var Backbone = require("backbone"),
        Egg = require("app/models/egg");
    var Eggs = Backbone.Collection.extend({
      url: function() {
        return 'api/eggs';
      },
      model: Egg,
      crackedCount: function() {
        return this.where({cracked: true}).length;
      }
    });
    return Eggs;
  });
  })();
(function() {
function define(){};  define.amd = {};
  (function(root, factory) {
    if (typeof exports === "object" && exports) {
      factory(exports);
    } else {
      var mustache = {};
      factory(mustache);
      if (typeof define === "function" && define.amd) {
        System.register("github:janl/mustache.js@0.8.2/mustache", [], false, typeof mustache == "function" ? mustache : function() {
          return mustache;
        });
      } else {
        root.Mustache = mustache;
      }
    }
  }(this, function(mustache) {
    var RegExp_test = RegExp.prototype.test;
    function testRegExp(re, string) {
      return RegExp_test.call(re, string);
    }
    var nonSpaceRe = /\S/;
    function isWhitespace(string) {
      return !testRegExp(nonSpaceRe, string);
    }
    var Object_toString = Object.prototype.toString;
    var isArray = Array.isArray || function(object) {
      return Object_toString.call(object) === '[object Array]';
    };
    function isFunction(object) {
      return typeof object === 'function';
    }
    function escapeRegExp(string) {
      return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    }
    var entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': '&quot;',
      "'": '&#39;',
      "/": '&#x2F;'
    };
    function escapeHtml(string) {
      return String(string).replace(/[&<>"'\/]/g, function(s) {
        return entityMap[s];
      });
    }
    function escapeTags(tags) {
      if (!isArray(tags) || tags.length !== 2) {
        throw new Error('Invalid tags: ' + tags);
      }
      return [new RegExp(escapeRegExp(tags[0]) + "\\s*"), new RegExp("\\s*" + escapeRegExp(tags[1]))];
    }
    var whiteRe = /\s*/;
    var spaceRe = /\s+/;
    var equalsRe = /\s*=/;
    var curlyRe = /\s*\}/;
    var tagRe = /#|\^|\/|>|\{|&|=|!/;
    function parseTemplate(template, tags) {
      tags = tags || mustache.tags;
      template = template || '';
      if (typeof tags === 'string') {
        tags = tags.split(spaceRe);
      }
      var tagRes = escapeTags(tags);
      var scanner = new Scanner(template);
      var sections = [];
      var tokens = [];
      var spaces = [];
      var hasTag = false;
      var nonSpace = false;
      function stripSpace() {
        if (hasTag && !nonSpace) {
          while (spaces.length) {
            delete tokens[spaces.pop()];
          }
        } else {
          spaces = [];
        }
        hasTag = false;
        nonSpace = false;
      }
      var start,
          type,
          value,
          chr,
          token,
          openSection;
      while (!scanner.eos()) {
        start = scanner.pos;
        value = scanner.scanUntil(tagRes[0]);
        if (value) {
          for (var i = 0,
              len = value.length; i < len; ++i) {
            chr = value.charAt(i);
            if (isWhitespace(chr)) {
              spaces.push(tokens.length);
            } else {
              nonSpace = true;
            }
            tokens.push(['text', chr, start, start + 1]);
            start += 1;
            if (chr === '\n') {
              stripSpace();
            }
          }
        }
        if (!scanner.scan(tagRes[0]))
          break;
        hasTag = true;
        type = scanner.scan(tagRe) || 'name';
        scanner.scan(whiteRe);
        if (type === '=') {
          value = scanner.scanUntil(equalsRe);
          scanner.scan(equalsRe);
          scanner.scanUntil(tagRes[1]);
        } else if (type === '{') {
          value = scanner.scanUntil(new RegExp('\\s*' + escapeRegExp('}' + tags[1])));
          scanner.scan(curlyRe);
          scanner.scanUntil(tagRes[1]);
          type = '&';
        } else {
          value = scanner.scanUntil(tagRes[1]);
        }
        if (!scanner.scan(tagRes[1])) {
          throw new Error('Unclosed tag at ' + scanner.pos);
        }
        token = [type, value, start, scanner.pos];
        tokens.push(token);
        if (type === '#' || type === '^') {
          sections.push(token);
        } else if (type === '/') {
          openSection = sections.pop();
          if (!openSection) {
            throw new Error('Unopened section "' + value + '" at ' + start);
          }
          if (openSection[1] !== value) {
            throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
          }
        } else if (type === 'name' || type === '{' || type === '&') {
          nonSpace = true;
        } else if (type === '=') {
          tagRes = escapeTags(tags = value.split(spaceRe));
        }
      }
      openSection = sections.pop();
      if (openSection) {
        throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
      }
      return nestTokens(squashTokens(tokens));
    }
    function squashTokens(tokens) {
      var squashedTokens = [];
      var token,
          lastToken;
      for (var i = 0,
          len = tokens.length; i < len; ++i) {
        token = tokens[i];
        if (token) {
          if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
            lastToken[1] += token[1];
            lastToken[3] = token[3];
          } else {
            squashedTokens.push(token);
            lastToken = token;
          }
        }
      }
      return squashedTokens;
    }
    function nestTokens(tokens) {
      var nestedTokens = [];
      var collector = nestedTokens;
      var sections = [];
      var token,
          section;
      for (var i = 0,
          len = tokens.length; i < len; ++i) {
        token = tokens[i];
        switch (token[0]) {
          case '#':
          case '^':
            collector.push(token);
            sections.push(token);
            collector = token[4] = [];
            break;
          case '/':
            section = sections.pop();
            section[5] = token[2];
            collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
            break;
          default:
            collector.push(token);
        }
      }
      return nestedTokens;
    }
    function Scanner(string) {
      this.string = string;
      this.tail = string;
      this.pos = 0;
    }
    Scanner.prototype.eos = function() {
      return this.tail === "";
    };
    Scanner.prototype.scan = function(re) {
      var match = this.tail.match(re);
      if (match && match.index === 0) {
        var string = match[0];
        this.tail = this.tail.substring(string.length);
        this.pos += string.length;
        return string;
      }
      return "";
    };
    Scanner.prototype.scanUntil = function(re) {
      var index = this.tail.search(re),
          match;
      switch (index) {
        case -1:
          match = this.tail;
          this.tail = "";
          break;
        case 0:
          match = "";
          break;
        default:
          match = this.tail.substring(0, index);
          this.tail = this.tail.substring(index);
      }
      this.pos += match.length;
      return match;
    };
    function Context(view, parentContext) {
      this.view = view == null ? {} : view;
      this.cache = {'.': this.view};
      this.parent = parentContext;
    }
    Context.prototype.push = function(view) {
      return new Context(view, this);
    };
    Context.prototype.lookup = function(name) {
      var value;
      if (name in this.cache) {
        value = this.cache[name];
      } else {
        var context = this;
        while (context) {
          if (name.indexOf('.') > 0) {
            value = context.view;
            var names = name.split('.'),
                i = 0;
            while (value != null && i < names.length) {
              value = value[names[i++]];
            }
          } else {
            value = context.view[name];
          }
          if (value != null)
            break;
          context = context.parent;
        }
        this.cache[name] = value;
      }
      if (isFunction(value)) {
        value = value.call(this.view);
      }
      return value;
    };
    function Writer() {
      this.cache = {};
    }
    Writer.prototype.clearCache = function() {
      this.cache = {};
    };
    Writer.prototype.parse = function(template, tags) {
      var cache = this.cache;
      var tokens = cache[template];
      if (tokens == null) {
        tokens = cache[template] = parseTemplate(template, tags);
      }
      return tokens;
    };
    Writer.prototype.render = function(template, view, partials) {
      var tokens = this.parse(template);
      var context = (view instanceof Context) ? view : new Context(view);
      return this.renderTokens(tokens, context, partials, template);
    };
    Writer.prototype.renderTokens = function(tokens, context, partials, originalTemplate) {
      var buffer = '';
      var self = this;
      function subRender(template) {
        return self.render(template, context, partials);
      }
      var token,
          value;
      for (var i = 0,
          len = tokens.length; i < len; ++i) {
        token = tokens[i];
        switch (token[0]) {
          case '#':
            value = context.lookup(token[1]);
            if (!value)
              continue;
            if (isArray(value)) {
              for (var j = 0,
                  jlen = value.length; j < jlen; ++j) {
                buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
              }
            } else if (typeof value === 'object' || typeof value === 'string') {
              buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
            } else if (isFunction(value)) {
              if (typeof originalTemplate !== 'string') {
                throw new Error('Cannot use higher-order sections without the original template');
              }
              value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);
              if (value != null)
                buffer += value;
            } else {
              buffer += this.renderTokens(token[4], context, partials, originalTemplate);
            }
            break;
          case '^':
            value = context.lookup(token[1]);
            if (!value || (isArray(value) && value.length === 0)) {
              buffer += this.renderTokens(token[4], context, partials, originalTemplate);
            }
            break;
          case '>':
            if (!partials)
              continue;
            value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
            if (value != null)
              buffer += this.renderTokens(this.parse(value), context, partials, value);
            break;
          case '&':
            value = context.lookup(token[1]);
            if (value != null)
              buffer += value;
            break;
          case 'name':
            value = context.lookup(token[1]);
            if (value != null)
              buffer += mustache.escape(value);
            break;
          case 'text':
            buffer += token[1];
            break;
        }
      }
      return buffer;
    };
    mustache.name = "mustache.js";
    mustache.version = "0.8.1";
    mustache.tags = ["{{", "}}"];
    var defaultWriter = new Writer();
    mustache.clearCache = function() {
      return defaultWriter.clearCache();
    };
    mustache.parse = function(template, tags) {
      return defaultWriter.parse(template, tags);
    };
    mustache.render = function(template, view, partials) {
      return defaultWriter.render(template, view, partials);
    };
    mustache.to_html = function(template, view, partials, send) {
      var result = mustache.render(template, view, partials);
      if (isFunction(send)) {
        send(result);
      } else {
        return result;
      }
    };
    mustache.escape = escapeHtml;
    mustache.Scanner = Scanner;
    mustache.Context = Context;
    mustache.Writer = Writer;
  }));
  })();
System.register("github:components/jquery@2.1.1", ["github:components/jquery@2.1.1/jquery.min"], function($__export) {
  "use strict";
  var __moduleName = "github:components/jquery@2.1.1";
  return {
    setters: [function(m) {
      Object.keys(m).forEach(function(p) {
        $__export(p, m[p]);
      });
    }],
    execute: function() {}
  };
});

(function() {
function define(){};  define.amd = {};
  System.register("app/nav", ["backbone", "./mixer"], false, function(require) {
    var Backbone = require("backbone"),
        mixer = require("./mixer");
    var nav = {
      start: function() {
        var startingUrl = '/';
        if (!(window.history && window.history.pushState)) {
          window.location.hash = window.location.pathname.replace(startingUrl, '');
          startingUrl = window.location.pathname;
        }
        Backbone.history.start({
          pushState: true,
          root: startingUrl
        });
      },
      go: function(path) {
        var from = Backbone.history.getFragment();
        var to = path;
        Backbone.history.navigate(to, {trigger: true});
        nav.trigger('nav:go', to);
      },
      reload: function() {
        Backbone.history.loadUrl(Backbone.history.fragment);
      },
      hardRedirectTo: function(url) {
        window.location.href = url;
      },
      onPushLinkClick: function(e) {
        e.preventDefault();
        var url = e.currentTarget.getAttribute('href');
        this.go(url);
      }
    };
    mixer.mixin(nav, Backbone.Events);
    return nav;
  });
  })();
System.register("github:janl/mustache.js@0.8.2", ["github:janl/mustache.js@0.8.2/mustache"], function($__export) {
  "use strict";
  var __moduleName = "github:janl/mustache.js@0.8.2";
  return {
    setters: [function(m) {
      Object.keys(m).forEach(function(p) {
        $__export(p, m[p]);
      });
    }],
    execute: function() {}
  };
});

System.register("npm:lodash@2.4.1", ["npm:lodash@2.4.1/dist/lodash"], function($__export) {
  "use strict";
  var __moduleName = "npm:lodash@2.4.1";
  return {
    setters: [function(m) {
      Object.keys(m).forEach(function(p) {
        $__export(p, m[p]);
      });
    }],
    execute: function() {}
  };
});

(function() {
function define(){};  define.amd = {};
  System.register("src/views/eggs/eggs", ["backbone", "lodash", "mustache", "jquery", "src/views/eggs/eggs.mustache!text"], false, function(__require, __exports, __module) {
    return (function(require, exports, module) {
      var Backbone = require("backbone"),
          lodash = require("lodash"),
          Mustache = require("mustache"),
          jQuery = require("jquery");
      var EggsView = Backbone.View.extend({
        template: require("src/views/eggs/eggs.mustache!text"),
        className: 'eggs',
        events: {'click li': 'onClick'},
        initialize: function(options) {
          this.listenTo(this.collection, 'sync', this.render);
        },
        onClick: function(e) {
          e.preventDefault();
          var id = jQuery(e.currentTarget).data('id');
          var model = this.collection.get(id);
          model.save({cracked: !model.get('cracked')});
        },
        render: function() {
          this.$el.html(Mustache.render(this.template, {
            eggs: this.collection.toJSON(),
            crackedCount: this.collection.crackedCount()
          }));
          return this;
        }
      });
      return EggsView;
    }).call(__exports, __require, __exports, __module);
  });
  })();
(function() {
function define(){};  define.amd = {};
  System.register("app/routers/eggs", ["backbone", "jquery", "src/collections/eggs", "src/views/eggs/eggs"], false, function(require) {
    var Backbone = require("backbone"),
        jQuery = require("jquery"),
        Eggs = require("src/collections/eggs"),
        EggsView = require("src/views/eggs/eggs");
    return Backbone.Router.extend({
      routes: {'': 'list'},
      initialize: function(options) {
        this.elRoot = options.elRoot;
      },
      list: function() {
        var eggs = new Eggs();
        var eggsView = new EggsView({collection: eggs});
        this.elRoot.html(eggsView.el);
        eggs.fetch();
      }
    });
  });
  })();
System.register("npm:lodash-node@2.4.1", ["npm:lodash-node@2.4.1/modern/index"], function($__export) {
  "use strict";
  var __moduleName = "npm:lodash-node@2.4.1";
  return {
    setters: [function(m) {
      Object.keys(m).forEach(function(p) {
        $__export(p, m[p]);
      });
    }],
    execute: function() {}
  };
});

System.register("npm:backbone@1.1.2", ["npm:backbone@1.1.2/backbone"], function($__export) {
  "use strict";
  var __moduleName = "npm:backbone@1.1.2";
  return {
    setters: [function(m) {
      Object.keys(m).forEach(function(p) {
        $__export(p, m[p]);
      });
    }],
    execute: function() {}
  };
});

(function() {
function define(){};  define.amd = {};
  System.register("src/app", ["jquery", "lodash", "backbone", "app/nav", "app/models/egg", "app/collections/eggs", "app/routers/eggs"], false, function(require) {
    var jQuery = require("jquery"),
        lodash = require("lodash"),
        Backbone = require("backbone"),
        nav = require("app/nav"),
        Egg = require("app/models/egg"),
        Eggs = require("app/collections/eggs"),
        EggsRouter = require("app/routers/eggs");
    var app = {
      versions: {
        jquery: jQuery.fn.jquery,
        lodash: lodash.VERSION,
        backbone: Backbone.VERSION
      },
      init: function(bootdata) {
        console.log('Backbone', Backbone.$ = jQuery);
        var rootView = this.rootView = new Backbone.View({el: jQuery('#content')});
        new EggsRouter({elRoot: rootView.$el});
        nav.start();
        rootView.$el.on('click', 'a[data-pushlink]', nav.onPushLinkClick.bind(nav));
        return this;
      }
    };
    console.log('hello');
    lodash.bindAll(app);
    return app;
  });
  })();
System.register("github:jspm/nodelibs@0.0.5/process", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/github/jspm/nodelibs@0.0.5/process.js";
  var __dirname = "jspm_packages/github/jspm/nodelibs@0.0.5";
  /* */
  "format cjs";function noop(){}var process=module.exports={};process.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var r=[];return window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),r.length>0)){var n=r.shift();n()}},!0),function(e){r.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),process.title="browser",process.browser=!0,process.env={},process.argv=[],process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.binding=function(){throw new Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(){throw new Error("process.chdir is not supported")};
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/compact", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/compact.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  /* */
  "format cjs";function compact(e){for(var r=-1,t=e?e.length:0,a=[];++r<t;){var o=e[r];o&&a.push(o)}return a}module.exports=compact;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseIndexOf", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseIndexOf.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function baseIndexOf(e,r,t){for(var a=(t||0)-1,n=e?e.length:0;++a<n;)if(e[a]===r)return a;return-1}module.exports=baseIndexOf;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/keyPrefix", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/keyPrefix.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";var keyPrefix=+new Date+"";module.exports=keyPrefix;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/cachePush", ["./keyPrefix"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/cachePush.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function cachePush(e){var r=this.cache,t=typeof e;if("boolean"==t||null==e)r[e]=!0;else{"number"!=t&&"string"!=t&&(t="object");var a="number"==t?e:keyPrefix+e,n=r[t]||(r[t]={});"object"==t?(n[a]||(n[a]=[])).push(e):n[a]=!0}}var keyPrefix=require("./keyPrefix");module.exports=cachePush;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/objectPool", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/objectPool.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";var objectPool=[];module.exports=objectPool;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/maxPoolSize", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/maxPoolSize.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";var maxPoolSize=40;module.exports=maxPoolSize;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/largeArraySize", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/largeArraySize.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";var largeArraySize=75;module.exports=largeArraySize;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isArguments", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isArguments.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function isArguments(e){return e&&"object"==typeof e&&"number"==typeof e.length&&toString.call(e)==argsClass||!1}var argsClass="[object Arguments]",objectProto=Object.prototype,toString=objectProto.toString;module.exports=isArguments;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/isNative", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/isNative.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function isNative(e){return"function"==typeof e&&reNative.test(e)}var objectProto=Object.prototype,toString=objectProto.toString,reNative=RegExp("^"+String(toString).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$");module.exports=isNative;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/objectTypes", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/objectTypes.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";var objectTypes={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1};module.exports=objectTypes;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/noop", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/noop.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  /* */
  "format cjs";function noop(){}module.exports=noop;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/setBindData", ["./isNative","../utilities/noop"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/setBindData.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";var isNative=require("./isNative"),noop=require("../utilities/noop"),descriptor={configurable:!1,enumerable:!1,value:null,writable:!1},defineProperty=function(){try{var e={},r=isNative(r=Object.defineProperty)&&r,t=r(e,e,e)&&r}catch(a){}return t}(),setBindData=defineProperty?function(e,r){descriptor.value=r,defineProperty(e,"__bindData__",descriptor)}:noop;module.exports=setBindData;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/slice", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/slice.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function slice(e,r,t){r||(r=0),"undefined"==typeof t&&(t=e?e.length:0);for(var a=-1,o=t-r||0,n=Array(0>o?0:o);++a<o;)n[a]=e[r+a];return n}module.exports=slice;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseCreateWrapper", ["./baseCreate","../objects/isObject","./setBindData","./slice"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseCreateWrapper.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function baseCreateWrapper(e){function r(){var e=l?s:this;if(n){var b=slice(n);push.apply(b,arguments)}if((o||u)&&(b||(b=slice(arguments)),o&&push.apply(b,o),u&&b.length<i))return a|=16,baseCreateWrapper([t,f?a:-4&a,b,null,s,i]);if(b||(b=arguments),c&&(t=e[p]),this instanceof r){e=baseCreate(t.prototype);var d=t.apply(e,b);return isObject(d)?d:e}return t.apply(e,b)}var t=e[0],a=e[1],n=e[2],o=e[3],s=e[4],i=e[5],l=1&a,c=2&a,u=4&a,f=8&a,p=t;return setBindData(r,e),r}var baseCreate=require("./baseCreate"),isObject=require("../objects/isObject"),setBindData=require("./setBindData"),slice=require("./slice"),arrayRef=[],push=arrayRef.push;module.exports=baseCreateWrapper;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isFunction", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isFunction.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function isFunction(e){return"function"==typeof e}module.exports=isFunction;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/identity", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/identity.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  /* */
  "format cjs";function identity(e){return e}module.exports=identity;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/support", ["./internals/isNative"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/support.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern";
  /* */
  "format cjs";var isNative=require("./internals/isNative"),reThis=/\bthis\b/,support={};support.funcDecomp=!isNative(global.WinRTError)&&reThis.test(function(){return this}),support.funcNames="string"==typeof Function.name,module.exports=support;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/forIn", ["../internals/baseCreateCallback","../internals/objectTypes"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/forIn.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";var baseCreateCallback=require("../internals/baseCreateCallback"),objectTypes=require("../internals/objectTypes"),forIn=function(e,r,t){var a,o=e,n=o;if(!o)return n;if(!objectTypes[typeof o])return n;r=r&&"undefined"==typeof t?r:baseCreateCallback(r,t,3);for(a in o)if(r(o[a],a,e)===!1)return n;return n};module.exports=forIn;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/arrayPool", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/arrayPool.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";var arrayPool=[];module.exports=arrayPool;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/releaseArray", ["./arrayPool","./maxPoolSize"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/releaseArray.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function releaseArray(e){e.length=0,arrayPool.length<maxPoolSize&&arrayPool.push(e)}var arrayPool=require("./arrayPool"),maxPoolSize=require("./maxPoolSize");module.exports=releaseArray;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/shimKeys", ["./objectTypes"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/shimKeys.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";var objectTypes=require("./objectTypes"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,shimKeys=function(e){var r,t=e,a=[];if(!t)return a;if(!objectTypes[typeof e])return a;for(r in t)hasOwnProperty.call(t,r)&&a.push(r);return a};module.exports=shimKeys;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/property", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/property.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  /* */
  "format cjs";function property(e){return function(r){return r[e]}}module.exports=property;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/findIndex", ["../functions/createCallback"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/findIndex.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  /* */
  "format cjs";function findIndex(e,r,t){var a=-1,o=e?e.length:0;for(r=createCallback(r,t,3);++a<o;)if(r(e[a],a,e))return a;return-1}var createCallback=require("../functions/createCallback");module.exports=findIndex;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/findLastIndex", ["../functions/createCallback"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/findLastIndex.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  /* */
  "format cjs";function findLastIndex(e,r,t){var a=e?e.length:0;for(r=createCallback(r,t,3);a--;)if(r(e[a],a,e))return a;return-1}var createCallback=require("../functions/createCallback");module.exports=findLastIndex;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/first", ["../functions/createCallback","../internals/slice"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/first.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  /* */
  "format cjs";function first(e,r,t){var a=0,o=e?e.length:0;if("number"!=typeof r&&null!=r){var s=-1;for(r=createCallback(r,t,3);++s<o&&r(e[s],s,e);)a++}else if(a=r,null==a||t)return e?e[0]:void 0;return slice(e,0,nativeMin(nativeMax(0,a),o))}var createCallback=require("../functions/createCallback"),slice=require("../internals/slice"),nativeMax=Math.max,nativeMin=Math.min;module.exports=first;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/forOwn", ["../internals/baseCreateCallback","./keys","../internals/objectTypes"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/forOwn.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";var baseCreateCallback=require("../internals/baseCreateCallback"),keys=require("./keys"),objectTypes=require("../internals/objectTypes"),forOwn=function(e,r,t){var a,o=e,n=o;if(!o)return n;if(!objectTypes[typeof o])return n;r=r&&"undefined"==typeof t?r:baseCreateCallback(r,t,3);for(var s=-1,i=objectTypes[typeof o]&&keys(o),c=i?i.length:0;++s<c;)if(a=i[s],r(o[a],a,e)===!1)return n;return n};module.exports=forOwn;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/sortedIndex", ["../functions/createCallback","../utilities/identity"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/sortedIndex.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  /* */
  "format cjs";function sortedIndex(e,r,t,a){var n=0,s=e?e.length:n;for(t=t?createCallback(t,a,1):identity,r=t(r);s>n;){var o=n+s>>>1;t(e[o])<r?n=o+1:s=o}return n}var createCallback=require("../functions/createCallback"),identity=require("../utilities/identity");module.exports=sortedIndex;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/initial", ["../functions/createCallback","../internals/slice"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/initial.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  /* */
  "format cjs";function initial(e,r,t){var a=0,n=e?e.length:0;if("number"!=typeof r&&null!=r){var s=n;for(r=createCallback(r,t,3);s--&&r(e[s],s,e);)a++}else a=null==r||t?1:r||a;return slice(e,0,nativeMin(nativeMax(0,n-a),n))}var createCallback=require("../functions/createCallback"),slice=require("../internals/slice"),nativeMax=Math.max,nativeMin=Math.min;module.exports=initial;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/intersection", ["../internals/baseIndexOf","../internals/cacheIndexOf","../internals/createCache","../internals/getArray","../objects/isArguments","../objects/isArray","../internals/largeArraySize","../internals/releaseArray","../internals/releaseObject"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/intersection.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  /* */
  "format cjs";function intersection(){for(var e=[],r=-1,t=arguments.length,a=getArray(),n=baseIndexOf,s=n===baseIndexOf,o=getArray();++r<t;){var i=arguments[r];(isArray(i)||isArguments(i))&&(e.push(i),a.push(s&&i.length>=largeArraySize&&createCache(r?e[r]:o)))}var l=e[0],c=-1,u=l?l.length:0,p=[];e:for(;++c<u;){var f=a[0];if(i=l[c],(f?cacheIndexOf(f,i):n(o,i))<0){for(r=t,(f||o).push(i);--r;)if(f=a[r],(f?cacheIndexOf(f,i):n(e[r],i))<0)continue e;p.push(i)}}for(;t--;)f=a[t],f&&releaseObject(f);return releaseArray(a),releaseArray(o),p}var baseIndexOf=require("../internals/baseIndexOf"),cacheIndexOf=require("../internals/cacheIndexOf"),createCache=require("../internals/createCache"),getArray=require("../internals/getArray"),isArguments=require("../objects/isArguments"),isArray=require("../objects/isArray"),largeArraySize=require("../internals/largeArraySize"),releaseArray=require("../internals/releaseArray"),releaseObject=require("../internals/releaseObject");module.exports=intersection;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/last", ["../functions/createCallback","../internals/slice"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/last.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  /* */
  "format cjs";function last(e,r,t){var a=0,n=e?e.length:0;if("number"!=typeof r&&null!=r){var s=n;for(r=createCallback(r,t,3);s--&&r(e[s],s,e);)a++}else if(a=r,null==a||t)return e?e[n-1]:void 0;return slice(e,nativeMax(0,n-a))}var createCallback=require("../functions/createCallback"),slice=require("../internals/slice"),nativeMax=Math.max;module.exports=last;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/lastIndexOf", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/lastIndexOf.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  /* */
  "format cjs";function lastIndexOf(e,r,t){var a=e?e.length:0;for("number"==typeof t&&(a=(0>t?nativeMax(0,a+t):nativeMin(t,a-1))+1);a--;)if(e[a]===r)return a;return-1}var nativeMax=Math.max,nativeMin=Math.min;module.exports=lastIndexOf;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/zipObject", ["../objects/isArray"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/zipObject.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  /* */
  "format cjs";function zipObject(e,r){var t=-1,a=e?e.length:0,n={};for(r||!a||isArray(e[0])||(r=[]);++t<a;){var s=e[t];r?n[s]=r[t]:s&&(n[s[0]]=s[1])}return n}var isArray=require("../objects/isArray");module.exports=zipObject;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/pull", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/pull.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  /* */
  "format cjs";function pull(e){for(var r=arguments,t=0,a=r.length,n=e?e.length:0;++t<a;)for(var s=-1,o=r[t];++s<n;)e[s]===o&&(splice.call(e,s--,1),n--);return e}var arrayRef=[],splice=arrayRef.splice;module.exports=pull;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/range", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/range.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  /* */
  "format cjs";function range(e,r,t){e=+e||0,t="number"==typeof t?t:+t||1,null==r&&(r=e,e=0);for(var a=-1,n=nativeMax(0,ceil((r-e)/(t||1))),s=Array(n);++a<n;)s[a]=e,e+=t;return s}var ceil=Math.ceil,nativeMax=Math.max;module.exports=range;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/remove", ["../functions/createCallback"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/remove.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  /* */
  "format cjs";function remove(e,r,t){var a=-1,n=e?e.length:0,s=[];for(r=createCallback(r,t,3);++a<n;){var o=e[a];r(o,a,e)&&(s.push(o),splice.call(e,a--,1),n--)}return s}var createCallback=require("../functions/createCallback"),arrayRef=[],splice=arrayRef.splice;module.exports=remove;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseUniq", ["./baseIndexOf","./cacheIndexOf","./createCache","./getArray","./largeArraySize","./releaseArray","./releaseObject","github:jspm/nodelibs@0.0.5/process"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseUniq.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";!function(){function e(e,l,c){var u=-1,f=r,p=e?e.length:0,b=[],d=!l&&p>=o,h=c||d?n():b;if(d){var m=a(h);f=t,h=m}for(;++u<p;){var y=e[u],g=c?c(y,u,e):y;(l?!u||h[h.length-1]!==g:f(h,g)<0)&&((c||d)&&h.push(g),b.push(y))}return d?(s(h.array),i(h)):c&&s(h),b}var r=require("./baseIndexOf"),t=require("./cacheIndexOf"),a=require("./createCache"),n=require("./getArray"),o=require("./largeArraySize"),s=require("./releaseArray"),i=require("./releaseObject");module.exports=e}(require("github:jspm/nodelibs@0.0.5/process"));
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/uniq", ["../internals/baseUniq","../functions/createCallback","github:jspm/nodelibs@0.0.5/process"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/uniq.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  /* */
  "format cjs";!function(){function e(e,a,n,s){return"boolean"!=typeof a&&null!=a&&(s=n,n="function"!=typeof a&&s&&s[a]===e?null:a,a=!1),null!=n&&(n=t(n,s,3)),r(e,a,n)}var r=require("../internals/baseUniq"),t=require("../functions/createCallback");module.exports=e}(require("github:jspm/nodelibs@0.0.5/process"));
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/charAtCallback", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/charAtCallback.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function charAtCallback(e){return e.charCodeAt(0)}module.exports=charAtCallback;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/forEach", ["../internals/baseCreateCallback","../objects/forOwn"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/forEach.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";function forEach(e,r,t){var a=-1,n=e?e.length:0;if(r=r&&"undefined"==typeof t?r:baseCreateCallback(r,t,3),"number"==typeof n)for(;++a<n&&r(e[a],a,e)!==!1;);else forOwn(e,r);return e}var baseCreateCallback=require("../internals/baseCreateCallback"),forOwn=require("../objects/forOwn");module.exports=forEach;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isString", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isString.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function isString(e){return"string"==typeof e||e&&"object"==typeof e&&toString.call(e)==stringClass||!1}var stringClass="[object String]",objectProto=Object.prototype,toString=objectProto.toString;module.exports=isString;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/pluck", ["./map"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/pluck.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";var map=require("./map"),pluck=map;module.exports=pluck;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/without", ["../internals/baseDifference","../internals/slice"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/without.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  /* */
  "format cjs";function without(e){return baseDifference(e,slice(arguments,1))}var baseDifference=require("../internals/baseDifference"),slice=require("../internals/slice");module.exports=without;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/xor", ["../internals/baseDifference","../internals/baseUniq","../objects/isArguments","../objects/isArray"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/xor.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  /* */
  "format cjs";function xor(){for(var e=-1,r=arguments.length;++e<r;){var t=arguments[e];if(isArray(t)||isArguments(t))var a=a?baseUniq(baseDifference(a,t).concat(baseDifference(t,a))):t}return a||[]}var baseDifference=require("../internals/baseDifference"),baseUniq=require("../internals/baseUniq"),isArguments=require("../objects/isArguments"),isArray=require("../objects/isArray");module.exports=xor;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/lodashWrapper", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/lodashWrapper.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function lodashWrapper(e,r){this.__chain__=!!r,this.__wrapped__=e}module.exports=lodashWrapper;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/chaining/tap", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/chaining/tap.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/chaining";
  /* */
  "format cjs";function tap(e,r){return r(e),e}module.exports=tap;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/chaining/wrapperValueOf", ["../collections/forEach","../support"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/chaining/wrapperValueOf.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/chaining";
  /* */
  "format cjs";function wrapperValueOf(){return this.__wrapped__}var forEach=require("../collections/forEach"),support=require("../support");module.exports=wrapperValueOf;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/chaining/wrapperChain", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/chaining/wrapperChain.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/chaining";
  /* */
  "format cjs";function wrapperChain(){return this.__chain__=!0,this}module.exports=wrapperChain;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/chaining/wrapperToString", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/chaining/wrapperToString.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/chaining";
  /* */
  "format cjs";function wrapperToString(){return String(this.__wrapped__)}module.exports=wrapperToString;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/every", ["../functions/createCallback","../objects/forOwn"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/every.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";function every(e,r,t){var a=!0;r=createCallback(r,t,3);var n=-1,o=e?e.length:0;if("number"==typeof o)for(;++n<o&&(a=!!r(e[n],n,e)););else forOwn(e,function(e,t,n){return a=!!r(e,t,n)});return a}var createCallback=require("../functions/createCallback"),forOwn=require("../objects/forOwn");module.exports=every;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/some", ["../functions/createCallback","../objects/forOwn","../objects/isArray"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/some.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";function some(e,r,t){var a;r=createCallback(r,t,3);var n=-1,o=e?e.length:0;if("number"==typeof o)for(;++n<o&&!(a=r(e[n],n,e)););else forOwn(e,function(e,t,n){return!(a=r(e,t,n))});return!!a}var createCallback=require("../functions/createCallback"),forOwn=require("../objects/forOwn"),isArray=require("../objects/isArray");module.exports=some;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/at", ["../internals/baseFlatten","../objects/isString"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/at.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";function at(e){for(var r=arguments,t=-1,a=baseFlatten(r,!0,!1,1),n=r[2]&&r[2][r[1]]===e?1:a.length,o=Array(n);++t<n;)o[t]=e[a[t]];return o}var baseFlatten=require("../internals/baseFlatten"),isString=require("../objects/isString");module.exports=at;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/contains", ["../internals/baseIndexOf","../objects/forOwn","../objects/isArray","../objects/isString"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/contains.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";function contains(e,r,t){var a=-1,n=baseIndexOf,o=e?e.length:0,s=!1;return t=(0>t?nativeMax(0,o+t):t)||0,isArray(e)?s=n(e,r,t)>-1:"number"==typeof o?s=(isString(e)?e.indexOf(r,t):n(e,r,t))>-1:forOwn(e,function(e){return++a>=t?!(s=e===r):void 0}),s}var baseIndexOf=require("../internals/baseIndexOf"),forOwn=require("../objects/forOwn"),isArray=require("../objects/isArray"),isString=require("../objects/isString"),nativeMax=Math.max;module.exports=contains;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/createAggregator", ["../functions/createCallback","../objects/forOwn","../objects/isArray"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/createAggregator.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function createAggregator(e){return function(r,t,a){var n={};t=createCallback(t,a,3);var o=-1,s=r?r.length:0;if("number"==typeof s)for(;++o<s;){var i=r[o];e(n,i,t(i,o,r),r)}else forOwn(r,function(r,a,o){e(n,r,t(r,a,o),o)});return n}}var createCallback=require("../functions/createCallback"),forOwn=require("../objects/forOwn"),isArray=require("../objects/isArray");module.exports=createAggregator;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/find", ["../functions/createCallback","../objects/forOwn"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/find.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";function find(e,r,t){r=createCallback(r,t,3);var a=-1,n=e?e.length:0;if("number"!=typeof n){var o;return forOwn(e,function(e,t,a){return r(e,t,a)?(o=e,!1):void 0}),o}for(;++a<n;){var s=e[a];if(r(s,a,e))return s}}var createCallback=require("../functions/createCallback"),forOwn=require("../objects/forOwn");module.exports=find;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/forEachRight", ["../internals/baseCreateCallback","../objects/forOwn","../objects/isArray","../objects/isString","../objects/keys"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/forEachRight.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";function forEachRight(e,r,t){var a=e?e.length:0;if(r=r&&"undefined"==typeof t?r:baseCreateCallback(r,t,3),"number"==typeof a)for(;a--&&r(e[a],a,e)!==!1;);else{var n=keys(e);a=n.length,forOwn(e,function(e,t,o){return t=n?n[--a]:--a,r(o[t],t,o)})}return e}var baseCreateCallback=require("../internals/baseCreateCallback"),forOwn=require("../objects/forOwn"),isArray=require("../objects/isArray"),isString=require("../objects/isString"),keys=require("../objects/keys");module.exports=forEachRight;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/filter", ["../functions/createCallback","../objects/forOwn"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/filter.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";function filter(e,r,t){var a=[];r=createCallback(r,t,3);var n=-1,o=e?e.length:0;if("number"==typeof o)for(;++n<o;){var s=e[n];r(s,n,e)&&a.push(s)}else forOwn(e,function(e,t,n){r(e,t,n)&&a.push(e)});return a}var createCallback=require("../functions/createCallback"),forOwn=require("../objects/forOwn");module.exports=filter;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/findLast", ["../functions/createCallback","./forEachRight"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/findLast.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";function findLast(e,r,t){var a;return r=createCallback(r,t,3),forEachRight(e,function(e,t,n){return r(e,t,n)?(a=e,!1):void 0}),a}var createCallback=require("../functions/createCallback"),forEachRight=require("./forEachRight");module.exports=findLast;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/reduce", ["../functions/createCallback","../objects/forOwn"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/reduce.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";function reduce(e,r,t,a){if(!e)return t;var n=arguments.length<3;r=createCallback(r,a,4);var o=-1,s=e.length;if("number"==typeof s)for(n&&(t=e[++o]);++o<s;)t=r(t,e[o],o,e);else forOwn(e,function(e,a,o){t=n?(n=!1,e):r(t,e,a,o)});return t}var createCallback=require("../functions/createCallback"),forOwn=require("../objects/forOwn");module.exports=reduce;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/reduceRight", ["../functions/createCallback","./forEachRight"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/reduceRight.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";function reduceRight(e,r,t,a){var n=arguments.length<3;return r=createCallback(r,a,4),forEachRight(e,function(e,a,o){t=n?(n=!1,e):r(t,e,a,o)}),t}var createCallback=require("../functions/createCallback"),forEachRight=require("./forEachRight");module.exports=reduceRight;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/groupBy", ["../internals/createAggregator"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/groupBy.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";var createAggregator=require("../internals/createAggregator"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,groupBy=createAggregator(function(e,r,t){(hasOwnProperty.call(e,t)?e[t]:e[t]=[]).push(r)});module.exports=groupBy;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/indexBy", ["../internals/createAggregator"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/indexBy.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";var createAggregator=require("../internals/createAggregator"),indexBy=createAggregator(function(e,r,t){e[t]=r});module.exports=indexBy;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/invoke", ["./forEach","../internals/slice"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/invoke.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";function invoke(e,r){var t=slice(arguments,2),a=-1,n="function"==typeof r,o=e?e.length:0,s=Array("number"==typeof o?o:0);return forEach(e,function(e){s[++a]=(n?r:e[r]).apply(e,t)}),s}var forEach=require("./forEach"),slice=require("../internals/slice");module.exports=invoke;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/min", ["../internals/charAtCallback","../functions/createCallback","./forEach","../objects/forOwn","../objects/isArray","../objects/isString"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/min.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";function min(e,r,t){var a=1/0,n=a;if("function"!=typeof r&&t&&t[r]===e&&(r=null),null==r&&isArray(e))for(var o=-1,s=e.length;++o<s;){var i=e[o];n>i&&(n=i)}else r=null==r&&isString(e)?charAtCallback:createCallback(r,t,3),forEach(e,function(e,t,o){var s=r(e,t,o);a>s&&(a=s,n=e)});return n}var charAtCallback=require("../internals/charAtCallback"),createCallback=require("../functions/createCallback"),forEach=require("./forEach"),forOwn=require("../objects/forOwn"),isArray=require("../objects/isArray"),isString=require("../objects/isString");module.exports=min;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/reject", ["../functions/createCallback","./filter"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/reject.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";function reject(e,r,t){return r=createCallback(r,t,3),filter(e,function(e,t,a){return!r(e,t,a)})}var createCallback=require("../functions/createCallback"),filter=require("./filter");module.exports=reject;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseRandom", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseRandom.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function baseRandom(e,r){return e+floor(nativeRandom()*(r-e+1))}var floor=Math.floor,nativeRandom=Math.random;module.exports=baseRandom;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/shuffle", ["../internals/baseRandom","./forEach"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/shuffle.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";function shuffle(e){var r=-1,t=e?e.length:0,a=Array("number"==typeof t?t:0);return forEach(e,function(e){var t=baseRandom(0,++r);a[r]=a[t],a[t]=e}),a}var baseRandom=require("../internals/baseRandom"),forEach=require("./forEach");module.exports=shuffle;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/values", ["./keys"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/values.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function values(e){for(var r=-1,t=keys(e),a=t.length,o=Array(a);++r<a;)o[r]=e[t[r]];return o}var keys=require("./keys");module.exports=values;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/size", ["../objects/keys"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/size.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";function size(e){var r=e?e.length:0;return"number"==typeof r?r:keys(e).length}var keys=require("../objects/keys");module.exports=size;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/compareAscending", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/compareAscending.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function compareAscending(e,r){for(var t=e.criteria,a=r.criteria,n=-1,o=t.length;++n<o;){var s=t[n],i=a[n];if(s!==i){if(s>i||"undefined"==typeof s)return 1;if(i>s||"undefined"==typeof i)return-1}}return e.index-r.index}module.exports=compareAscending;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/toArray", ["../objects/isString","../internals/slice","../objects/values"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/toArray.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";function toArray(e){return e&&"number"==typeof e.length?slice(e):values(e)}var isString=require("../objects/isString"),slice=require("../internals/slice"),values=require("../objects/values");module.exports=toArray;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/where", ["./filter"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/where.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";var filter=require("./filter"),where=filter;module.exports=where;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/after", ["../objects/isFunction"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/after.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  /* */
  "format cjs";function after(e,r){if(!isFunction(r))throw new TypeError;return function(){return--e<1?r.apply(this,arguments):void 0}}var isFunction=require("../objects/isFunction");module.exports=after;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/functions", ["./forIn","./isFunction"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/functions.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function functions(e){var r=[];return forIn(e,function(e,t){isFunction(e)&&r.push(t)}),r.sort()}var forIn=require("./forIn"),isFunction=require("./isFunction");module.exports=functions;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/bindKey", ["../internals/createWrapper","../internals/slice"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/bindKey.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  /* */
  "format cjs";function bindKey(e,r){return arguments.length>2?createWrapper(r,19,slice(arguments,2),null,e):createWrapper(r,3,null,null,e)}var createWrapper=require("../internals/createWrapper"),slice=require("../internals/slice");module.exports=bindKey;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/compose", ["../objects/isFunction"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/compose.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  /* */
  "format cjs";function compose(){for(var e=arguments,r=e.length;r--;)if(!isFunction(e[r]))throw new TypeError;return function(){for(var r=arguments,t=e.length;t--;)r=[e[t].apply(this,r)];return r[0]}}var isFunction=require("../objects/isFunction");module.exports=compose;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/curry", ["../internals/createWrapper"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/curry.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  /* */
  "format cjs";function curry(e,r){return r="number"==typeof r?r:+r||e.length,createWrapper(e,4,null,null,null,r)}var createWrapper=require("../internals/createWrapper");module.exports=curry;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/now", ["../internals/isNative"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/now.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  /* */
  "format cjs";var isNative=require("../internals/isNative"),now=isNative(now=Date.now)&&now||function(){return(new Date).getTime()};module.exports=now;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/defer", ["../objects/isFunction","../internals/slice"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/defer.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  /* */
  "format cjs";function defer(e){if(!isFunction(e))throw new TypeError;var r=slice(arguments,1);return setTimeout(function(){e.apply(void 0,r)},1)}var isFunction=require("../objects/isFunction"),slice=require("../internals/slice");module.exports=defer;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/delay", ["../objects/isFunction","../internals/slice"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/delay.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  /* */
  "format cjs";function delay(e,r){if(!isFunction(e))throw new TypeError;var t=slice(arguments,2);return setTimeout(function(){e.apply(void 0,t)},r)}var isFunction=require("../objects/isFunction"),slice=require("../internals/slice");module.exports=delay;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/memoize", ["../objects/isFunction","../internals/keyPrefix"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/memoize.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  /* */
  "format cjs";function memoize(e,r){if(!isFunction(e))throw new TypeError;var t=function(){var a=t.cache,n=r?r.apply(this,arguments):keyPrefix+arguments[0];return hasOwnProperty.call(a,n)?a[n]:a[n]=e.apply(this,arguments)};return t.cache={},t}var isFunction=require("../objects/isFunction"),keyPrefix=require("../internals/keyPrefix"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=memoize;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/once", ["../objects/isFunction"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/once.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  /* */
  "format cjs";function once(e){var r,t;if(!isFunction(e))throw new TypeError;return function(){return r?t:(r=!0,t=e.apply(this,arguments),e=null,t)}}var isFunction=require("../objects/isFunction");module.exports=once;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/partial", ["../internals/createWrapper","../internals/slice"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/partial.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  /* */
  "format cjs";function partial(e){return createWrapper(e,16,slice(arguments,1))}var createWrapper=require("../internals/createWrapper"),slice=require("../internals/slice");module.exports=partial;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/partialRight", ["../internals/createWrapper","../internals/slice"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/partialRight.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  /* */
  "format cjs";function partialRight(e){return createWrapper(e,32,null,slice(arguments,1))}var createWrapper=require("../internals/createWrapper"),slice=require("../internals/slice");module.exports=partialRight;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/throttle", ["./debounce","../objects/isFunction","../objects/isObject"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/throttle.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  /* */
  "format cjs";function throttle(e,r,t){var a=!0,n=!0;if(!isFunction(e))throw new TypeError;return t===!1?a=!1:isObject(t)&&(a="leading"in t?t.leading:a,n="trailing"in t?t.trailing:n),debounceOptions.leading=a,debounceOptions.maxWait=r,debounceOptions.trailing=n,debounce(e,r,debounceOptions)}var debounce=require("./debounce"),isFunction=require("../objects/isFunction"),isObject=require("../objects/isObject"),debounceOptions={leading:!1,maxWait:0,trailing:!1};module.exports=throttle;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/wrap", ["../internals/createWrapper"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/wrap.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  /* */
  "format cjs";function wrap(e,r){return createWrapper(r,16,[e])}var createWrapper=require("../internals/createWrapper");module.exports=wrap;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/assign", ["../internals/baseCreateCallback","./keys","../internals/objectTypes"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/assign.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";var baseCreateCallback=require("../internals/baseCreateCallback"),keys=require("./keys"),objectTypes=require("../internals/objectTypes"),assign=function(e,r,t){var a,o=e,s=o;if(!o)return s;var n=arguments,i=0,c="number"==typeof t?2:n.length;if(c>3&&"function"==typeof n[c-2])var l=baseCreateCallback(n[--c-1],n[c--],2);else c>2&&"function"==typeof n[c-1]&&(l=n[--c]);for(;++i<c;)if(o=n[i],o&&objectTypes[typeof o])for(var u=-1,f=objectTypes[typeof o]&&keys(o),p=f?f.length:0;++u<p;)a=f[u],s[a]=l?l(s[a],o[a]):o[a];return s};module.exports=assign;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseClone", ["../objects/assign","../collections/forEach","../objects/forOwn","./getArray","../objects/isArray","../objects/isObject","./releaseArray","./slice"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseClone.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function baseClone(e,r,t,a,n){if(t){var o=t(e);if("undefined"!=typeof o)return o}var s=isObject(e);if(!s)return e;var i=toString.call(e);if(!cloneableClasses[i])return e;var l=ctorByClass[i];switch(i){case boolClass:case dateClass:return new l(+e);case numberClass:case stringClass:return new l(e);case regexpClass:return o=l(e.source,reFlags.exec(e)),o.lastIndex=e.lastIndex,o}var c=isArray(e);if(r){var u=!a;a||(a=getArray()),n||(n=getArray());for(var f=a.length;f--;)if(a[f]==e)return n[f];o=c?l(e.length):{}}else o=c?slice(e):assign({},e);return c&&(hasOwnProperty.call(e,"index")&&(o.index=e.index),hasOwnProperty.call(e,"input")&&(o.input=e.input)),r?(a.push(e),n.push(o),(c?forEach:forOwn)(e,function(e,s){o[s]=baseClone(e,r,t,a,n)}),u&&(releaseArray(a),releaseArray(n)),o):o}var assign=require("../objects/assign"),forEach=require("../collections/forEach"),forOwn=require("../objects/forOwn"),getArray=require("./getArray"),isArray=require("../objects/isArray"),isObject=require("../objects/isObject"),releaseArray=require("./releaseArray"),slice=require("./slice"),reFlags=/\w*$/,argsClass="[object Arguments]",arrayClass="[object Array]",boolClass="[object Boolean]",dateClass="[object Date]",funcClass="[object Function]",numberClass="[object Number]",objectClass="[object Object]",regexpClass="[object RegExp]",stringClass="[object String]",cloneableClasses={};cloneableClasses[funcClass]=!1,cloneableClasses[argsClass]=cloneableClasses[arrayClass]=cloneableClasses[boolClass]=cloneableClasses[dateClass]=cloneableClasses[numberClass]=cloneableClasses[objectClass]=cloneableClasses[regexpClass]=cloneableClasses[stringClass]=!0;var objectProto=Object.prototype,toString=objectProto.toString,hasOwnProperty=objectProto.hasOwnProperty,ctorByClass={};ctorByClass[arrayClass]=Array,ctorByClass[boolClass]=Boolean,ctorByClass[dateClass]=Date,ctorByClass[funcClass]=Function,ctorByClass[objectClass]=Object,ctorByClass[numberClass]=Number,ctorByClass[regexpClass]=RegExp,ctorByClass[stringClass]=String,module.exports=baseClone;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/cloneDeep", ["../internals/baseClone","../internals/baseCreateCallback"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/cloneDeep.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function cloneDeep(e,r,t){return baseClone(e,!0,"function"==typeof r&&baseCreateCallback(r,t,1))}var baseClone=require("../internals/baseClone"),baseCreateCallback=require("../internals/baseCreateCallback");module.exports=cloneDeep;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/create", ["./assign","../internals/baseCreate"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/create.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function create(e,r){var t=baseCreate(e);return r?assign(t,r):t}var assign=require("./assign"),baseCreate=require("../internals/baseCreate");module.exports=create;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/defaults", ["./keys","../internals/objectTypes"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/defaults.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";var keys=require("./keys"),objectTypes=require("../internals/objectTypes"),defaults=function(e,r,t){var a,o=e,s=o;if(!o)return s;for(var n=arguments,i=0,c="number"==typeof t?2:n.length;++i<c;)if(o=n[i],o&&objectTypes[typeof o])for(var l=-1,u=objectTypes[typeof o]&&keys(o),f=u?u.length:0;++l<f;)a=u[l],"undefined"==typeof s[a]&&(s[a]=o[a]);return s};module.exports=defaults;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/findKey", ["../functions/createCallback","./forOwn"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/findKey.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function findKey(e,r,t){var a;return r=createCallback(r,t,3),forOwn(e,function(e,t,o){return r(e,t,o)?(a=t,!1):void 0}),a}var createCallback=require("../functions/createCallback"),forOwn=require("./forOwn");module.exports=findKey;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/forOwnRight", ["../internals/baseCreateCallback","./keys"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/forOwnRight.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function forOwnRight(e,r,t){var a=keys(e),o=a.length;for(r=baseCreateCallback(r,t,3);o--;){var n=a[o];if(r(e[n],n,e)===!1)break}return e}var baseCreateCallback=require("../internals/baseCreateCallback"),keys=require("./keys");module.exports=forOwnRight;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/forInRight", ["../internals/baseCreateCallback","./forIn"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/forInRight.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function forInRight(e,r,t){var a=[];forIn(e,function(e,r){a.push(r,e)});var o=a.length;for(r=baseCreateCallback(r,t,3);o--&&r(a[o--],a[o],e)!==!1;);return e}var baseCreateCallback=require("../internals/baseCreateCallback"),forIn=require("./forIn");module.exports=forInRight;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/has", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/has.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function has(e,r){return e?hasOwnProperty.call(e,r):!1}var objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=has;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/invert", ["./keys"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/invert.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function invert(e){for(var r=-1,t=keys(e),a=t.length,o={};++r<a;){var n=t[r];o[e[n]]=n}return o}var keys=require("./keys");module.exports=invert;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isBoolean", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isBoolean.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function isBoolean(e){return e===!0||e===!1||e&&"object"==typeof e&&toString.call(e)==boolClass||!1}var boolClass="[object Boolean]",objectProto=Object.prototype,toString=objectProto.toString;module.exports=isBoolean;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isDate", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isDate.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function isDate(e){return e&&"object"==typeof e&&toString.call(e)==dateClass||!1}var dateClass="[object Date]",objectProto=Object.prototype,toString=objectProto.toString;module.exports=isDate;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isElement", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isElement.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function isElement(e){return e&&1===e.nodeType||!1}module.exports=isElement;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isEmpty", ["./forOwn","./isFunction"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isEmpty.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function isEmpty(e){var r=!0;if(!e)return r;var t=toString.call(e),a=e.length;return t==arrayClass||t==stringClass||t==argsClass||t==objectClass&&"number"==typeof a&&isFunction(e.splice)?!a:(forOwn(e,function(){return r=!1}),r)}var forOwn=require("./forOwn"),isFunction=require("./isFunction"),argsClass="[object Arguments]",arrayClass="[object Array]",objectClass="[object Object]",stringClass="[object String]",objectProto=Object.prototype,toString=objectProto.toString;module.exports=isEmpty;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isEqual", ["../internals/baseCreateCallback","../internals/baseIsEqual"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isEqual.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function isEqual(e,r,t,a){return baseIsEqual(e,r,"function"==typeof t&&baseCreateCallback(t,a,2))}var baseCreateCallback=require("../internals/baseCreateCallback"),baseIsEqual=require("../internals/baseIsEqual");module.exports=isEqual;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isFinite", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isFinite.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function isFinite(e){return nativeIsFinite(e)&&!nativeIsNaN(parseFloat(e))}var nativeIsFinite=global.isFinite,nativeIsNaN=global.isNaN;module.exports=isFinite;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isNumber", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isNumber.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function isNumber(e){return"number"==typeof e||e&&"object"==typeof e&&toString.call(e)==numberClass||!1}var numberClass="[object Number]",objectProto=Object.prototype,toString=objectProto.toString;module.exports=isNumber;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isNull", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isNull.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function isNull(e){return null===e}module.exports=isNull;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/shimIsPlainObject", ["../objects/forIn","../objects/isFunction"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/shimIsPlainObject.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function shimIsPlainObject(e){var r,t;return e&&toString.call(e)==objectClass&&(r=e.constructor,!isFunction(r)||r instanceof r)?(forIn(e,function(e,r){t=r}),"undefined"==typeof t||hasOwnProperty.call(e,t)):!1}var forIn=require("../objects/forIn"),isFunction=require("../objects/isFunction"),objectClass="[object Object]",objectProto=Object.prototype,toString=objectProto.toString,hasOwnProperty=objectProto.hasOwnProperty;module.exports=shimIsPlainObject;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isRegExp", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isRegExp.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function isRegExp(e){return e&&"object"==typeof e&&toString.call(e)==regexpClass||!1}var regexpClass="[object RegExp]",objectProto=Object.prototype,toString=objectProto.toString;module.exports=isRegExp;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isUndefined", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isUndefined.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function isUndefined(e){return"undefined"==typeof e}module.exports=isUndefined;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/mapValues", ["../functions/createCallback","./forOwn"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/mapValues.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function mapValues(e,r,t){var a={};return r=createCallback(r,t,3),forOwn(e,function(e,t,o){a[t]=r(e,t,o)}),a}var createCallback=require("../functions/createCallback"),forOwn=require("./forOwn");module.exports=mapValues;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseMerge", ["../collections/forEach","../objects/forOwn","../objects/isArray","../objects/isPlainObject"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseMerge.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function baseMerge(e,r,t,a,n){(isArray(r)?forEach:forOwn)(r,function(r,o){var s,i,l=r,c=e[o];if(r&&((i=isArray(r))||isPlainObject(r))){for(var u=a.length;u--;)if(s=a[u]==r){c=n[u];break}if(!s){var f;t&&(l=t(c,r),(f="undefined"!=typeof l)&&(c=l)),f||(c=i?isArray(c)?c:[]:isPlainObject(c)?c:{}),a.push(r),n.push(c),f||baseMerge(c,r,t,a,n)}}else t&&(l=t(c,r),"undefined"==typeof l&&(l=r)),"undefined"!=typeof l&&(c=l);e[o]=c})}var forEach=require("../collections/forEach"),forOwn=require("../objects/forOwn"),isArray=require("../objects/isArray"),isPlainObject=require("../objects/isPlainObject");module.exports=baseMerge;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/omit", ["../internals/baseDifference","../internals/baseFlatten","../functions/createCallback","./forIn"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/omit.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function omit(e,r,t){var a={};if("function"!=typeof r){var o=[];forIn(e,function(e,r){o.push(r)}),o=baseDifference(o,baseFlatten(arguments,!0,!1,1));for(var n=-1,s=o.length;++n<s;){var i=o[n];a[i]=e[i]}}else r=createCallback(r,t,3),forIn(e,function(e,t,o){r(e,t,o)||(a[t]=e)});return a}var baseDifference=require("../internals/baseDifference"),baseFlatten=require("../internals/baseFlatten"),createCallback=require("../functions/createCallback"),forIn=require("./forIn");module.exports=omit;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/pairs", ["./keys"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/pairs.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function pairs(e){for(var r=-1,t=keys(e),a=t.length,o=Array(a);++r<a;){var n=t[r];o[r]=[n,e[n]]}return o}var keys=require("./keys");module.exports=pairs;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/pick", ["../internals/baseFlatten","../functions/createCallback","./forIn","./isObject"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/pick.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function pick(e,r,t){var a={};if("function"!=typeof r)for(var o=-1,n=baseFlatten(arguments,!0,!1,1),s=isObject(e)?n.length:0;++o<s;){var i=n[o];i in e&&(a[i]=e[i])}else r=createCallback(r,t,3),forIn(e,function(e,t,o){r(e,t,o)&&(a[t]=e)});return a}var baseFlatten=require("../internals/baseFlatten"),createCallback=require("../functions/createCallback"),forIn=require("./forIn"),isObject=require("./isObject");module.exports=pick;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/transform", ["../internals/baseCreate","../functions/createCallback","../collections/forEach","./forOwn","./isArray"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/transform.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function transform(e,r,t,a){var o=isArray(e);if(null==t)if(o)t=[];else{var n=e&&e.constructor,s=n&&n.prototype;t=baseCreate(s)}return r&&(r=createCallback(r,a,4),(o?forEach:forOwn)(e,function(e,a,o){return r(t,e,a,o)})),t}var baseCreate=require("../internals/baseCreate"),createCallback=require("../functions/createCallback"),forEach=require("../collections/forEach"),forOwn=require("./forOwn"),isArray=require("./isArray");module.exports=transform;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/constant", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/constant.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  /* */
  "format cjs";function constant(e){return function(){return e}}module.exports=constant;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/htmlEscapes", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/htmlEscapes.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";var htmlEscapes={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};module.exports=htmlEscapes;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/reUnescapedHtml", ["./htmlEscapes","../objects/keys"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/reUnescapedHtml.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";var htmlEscapes=require("./htmlEscapes"),keys=require("../objects/keys"),reUnescapedHtml=RegExp("["+keys(htmlEscapes).join("")+"]","g");module.exports=reUnescapedHtml;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/mixin", ["../collections/forEach","../objects/functions","../objects/isFunction","../objects/isObject"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/mixin.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  /* */
  "format cjs";function mixin(e,r,t){var a=!0,o=r&&functions(r);t===!1?a=!1:isObject(t)&&"chain"in t&&(a=t.chain);var n=e,s=isFunction(n);forEach(o,function(t){var o=e[t]=r[t];s&&(n.prototype[t]=function(){var r=this.__chain__,t=this.__wrapped__,s=[t];push.apply(s,arguments);var i=o.apply(e,s);if(a||r){if(t===i&&isObject(i))return this;i=new n(i),i.__chain__=r}return i})})}var forEach=require("../collections/forEach"),functions=require("../objects/functions"),isFunction=require("../objects/isFunction"),isObject=require("../objects/isObject"),arrayRef=[],push=arrayRef.push;module.exports=mixin;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/noConflict", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/noConflict.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  /* */
  "format cjs";function noConflict(){return global._=oldDash,this}var oldDash=global._;module.exports=noConflict;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/parseInt", ["../objects/isString"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/parseInt.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  /* */
  "format cjs";var isString=require("../objects/isString"),whitespace=" 	\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",reLeadingSpacesAndZeros=RegExp("^["+whitespace+"]*0+(?=.$)"),nativeParseInt=global.parseInt,parseInt=8==nativeParseInt(whitespace+"08")?nativeParseInt:function(e,r){return nativeParseInt(isString(e)?e.replace(reLeadingSpacesAndZeros,""):e,r||0)};module.exports=parseInt;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/random", ["../internals/baseRandom"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/random.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  /* */
  "format cjs";function random(e,r,t){var a=null==e,o=null==r;if(null==t&&("boolean"==typeof e&&o?(t=e,e=1):o||"boolean"!=typeof r||(t=r,o=!0)),a&&o&&(r=1),e=+e||0,o?(r=e,e=0):r=+r||0,t||e%1||r%1){var n=nativeRandom();return nativeMin(e+n*(r-e+parseFloat("1e-"+((n+"").length-1))),r)}return baseRandom(e,r)}var baseRandom=require("../internals/baseRandom"),nativeMin=Math.min,nativeRandom=Math.random;module.exports=random;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/result", ["../objects/isFunction"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/result.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  /* */
  "format cjs";function result(e,r){if(e){var t=e[r];return isFunction(t)?e[r]():t}}var isFunction=require("../objects/isFunction");module.exports=result;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/escapeStringChar", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/escapeStringChar.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function escapeStringChar(e){return"\\"+stringEscapes[e]}var stringEscapes={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"};module.exports=escapeStringChar;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/reInterpolate", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/reInterpolate.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";var reInterpolate=/<%=([\s\S]+?)%>/g;module.exports=reInterpolate;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/templateSettings", ["./escape","../internals/reInterpolate"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/templateSettings.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  /* */
  "format cjs";var escape=require("./escape"),reInterpolate=require("../internals/reInterpolate"),templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:reInterpolate,variable:"",imports:{_:{escape:escape}}};module.exports=templateSettings;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/times", ["../internals/baseCreateCallback"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/times.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  /* */
  "format cjs";function times(e,r,t){e=(e=+e)>-1?e:0;var a=-1,o=Array(e);for(r=baseCreateCallback(r,t,1);++a<e;)o[a]=r(a);return o}var baseCreateCallback=require("../internals/baseCreateCallback");module.exports=times;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/htmlUnescapes", ["./htmlEscapes","../objects/invert"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/htmlUnescapes.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";var htmlEscapes=require("./htmlEscapes"),invert=require("../objects/invert"),htmlUnescapes=invert(htmlEscapes);module.exports=htmlUnescapes;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/unescapeHtmlChar", ["./htmlUnescapes"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/unescapeHtmlChar.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function unescapeHtmlChar(e){return htmlUnescapes[e]}var htmlUnescapes=require("./htmlUnescapes");module.exports=unescapeHtmlChar;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/uniqueId", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/uniqueId.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  /* */
  "format cjs";function uniqueId(e){var r=++idCounter;return String(null==e?"":e)+r}var idCounter=0;module.exports=uniqueId;
  
  global.define = __define;
  return module.exports;
});

System.register("src/views/eggs/eggs.mustache!github:systemjs/plugin-text@0.0.2", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "src/views/eggs/eggs.mustache";
  var __dirname = "src/views/eggs";
  module.exports = "<aside class=\"crack-count\">\n  <b class=\"count\">{{crackedCount}}</b>\n  eggs cracked.\n</aside>\n<p>and/or get crackin' on the client!</p>\n<p>Crack an egg:</p>\n<ul class=\"egglist\">\n  {{#eggs}}\n    <li{{#cracked}} class=\"cracked\"{{/cracked}} data-id=\"{{id}}\">{{name}}</li>\n  {{/eggs}}\n</ul>\n<p>ooh, and don't forget to write some <a href=\"/client-tests/app\">client-tests</a>.</p>\n";
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash@2.4.1/dist/lodash", ["github:jspm/nodelibs@0.0.5/process"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash@2.4.1/dist/lodash.js";
  var __dirname = "jspm_packages/npm/lodash@2.4.1/dist";
  /* */
  "format cjs";!function(){(function(){function n(n,t,r){for(var e=(r||0)-1,u=n?n.length:0;++e<u;)if(n[e]===t)return e;return-1}function t(t,r){var e=typeof r;if(t=t.cache,"boolean"==e||null==r)return t[r]?0:-1;"number"!=e&&"string"!=e&&(e="object");var u="number"==e?r:m+r;return t=(t=t[e])&&t[u],"object"==e?t&&n(t,r)>-1?0:-1:t?0:-1}function r(n){var t=this.cache,r=typeof n;if("boolean"==r||null==n)t[n]=!0;else{"number"!=r&&"string"!=r&&(r="object");var e="number"==r?n:m+n,u=t[r]||(t[r]={});"object"==r?(u[e]||(u[e]=[])).push(n):u[e]=!0}}function e(n){return n.charCodeAt(0)}function u(n,t){for(var r=n.criteria,e=t.criteria,u=-1,o=r.length;++u<o;){var i=r[u],a=e[u];if(i!==a){if(i>a||"undefined"==typeof i)return 1;if(a>i||"undefined"==typeof a)return-1}}return n.index-t.index}function o(n){var t=-1,e=n.length,u=n[0],o=n[e/2|0],i=n[e-1];if(u&&"object"==typeof u&&o&&"object"==typeof o&&i&&"object"==typeof i)return!1;var a=f();a["false"]=a["null"]=a["true"]=a.undefined=!1;var l=f();for(l.array=n,l.cache=a,l.push=r;++t<e;)l.push(n[t]);return l}function i(n){return"\\"+H[n]}function a(){return h.pop()||[]}function f(){return v.pop()||{array:null,cache:null,criteria:null,"false":!1,index:0,"null":!1,number:null,object:null,push:null,string:null,"true":!1,undefined:!1,value:null}}function l(n){n.length=0,h.length<d&&h.push(n)}function c(n){var t=n.cache;t&&c(t),n.array=n.cache=n.criteria=n.object=n.number=n.string=n.value=null,v.length<d&&v.push(n)}function p(n,t,r){t||(t=0),"undefined"==typeof r&&(r=n?n.length:0);for(var e=-1,u=r-t||0,o=Array(0>u?0:u);++e<u;)o[e]=n[t+e];return o}function s(r){function h(n){return n&&"object"==typeof n&&!Xe(n)&&Re.call(n,"__wrapped__")?n:new v(n)}function v(n,t){this.__chain__=!!t,this.__wrapped__=n}function d(n){function t(){if(e){var n=p(e);Pe.apply(n,arguments)}if(this instanceof t){var o=J(r.prototype),i=r.apply(o,n||arguments);return Tt(i)?i:o}return r.apply(u,n||arguments)}var r=n[0],e=n[2],u=n[4];return Qe(t,n),t}function H(n,t,r,e,u){if(r){var o=r(n);if("undefined"!=typeof o)return o}var i=Tt(n);if(!i)return n;var f=Ee.call(n);if(!M[f])return n;var c=Ge[f];switch(f){case F:case $:return new c(+n);case L:case z:return new c(n);case W:return o=c(n.source,C.exec(n)),o.lastIndex=n.lastIndex,o}var s=Xe(n);if(t){var g=!e;e||(e=a()),u||(u=a());for(var h=e.length;h--;)if(e[h]==n)return u[h];o=s?c(n.length):{}}else o=s?p(n):uu({},n);return s&&(Re.call(n,"index")&&(o.index=n.index),Re.call(n,"input")&&(o.input=n.input)),t?(e.push(n),u.push(o),(s?Qt:au)(n,function(n,i){o[i]=H(n,t,r,e,u)}),g&&(l(e),l(u)),o):o}function J(n){return Tt(n)?Le(n):{}}function Q(n,t,r){if("function"!=typeof n)return Xr;if("undefined"==typeof t||!("prototype"in n))return n;var e=n.__bindData__;if("undefined"==typeof e&&(Je.funcNames&&(e=!n.name),e=e||!Je.funcDecomp,!e)){var u=Ie.call(n);Je.funcNames||(e=!E.test(u)),e||(e=T.test(u),Qe(n,e))}if(e===!1||e!==!0&&1&e[1])return n;switch(r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)}}return Pr(n,t)}function X(n){function t(){var n=f?i:this;if(u){var h=p(u);Pe.apply(h,arguments)}if((o||c)&&(h||(h=p(arguments)),o&&Pe.apply(h,o),c&&h.length<a))return e|=16,X([r,s?e:-4&e,h,null,i,a]);if(h||(h=arguments),l&&(r=n[g]),this instanceof t){n=J(r.prototype);var v=r.apply(n,h);return Tt(v)?v:n}return r.apply(n,h)}var r=n[0],e=n[1],u=n[2],o=n[3],i=n[4],a=n[5],f=1&e,l=2&e,c=4&e,s=8&e,g=r;return Qe(t,n),t}function Y(r,e){var u=-1,i=ft(),a=r?r.length:0,f=a>=b&&i===n,l=[];if(f){var p=o(e);p?(i=t,e=p):f=!1}for(;++u<a;){var s=r[u];i(e,s)<0&&l.push(s)}return f&&c(e),l}function nt(n,t,r,e){for(var u=(e||0)-1,o=n?n.length:0,i=[];++u<o;){var a=n[u];if(a&&"object"==typeof a&&"number"==typeof a.length&&(Xe(a)||st(a))){t||(a=nt(a,t,r));var f=-1,l=a.length,c=i.length;for(i.length+=l;++f<l;)i[c++]=a[f]}else r||i.push(a)}return i}function tt(n,t,r,e,u,o){if(r){var i=r(n,t);if("undefined"!=typeof i)return!!i}if(n===t)return 0!==n||1/n==1/t;var f=typeof n,c=typeof t;if(!(n!==n||n&&U[f]||t&&U[c]))return!1;if(null==n||null==t)return n===t;var p=Ee.call(n),s=Ee.call(t);if(p==P&&(p=q),s==P&&(s=q),p!=s)return!1;switch(p){case F:case $:return+n==+t;case L:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case W:case z:return n==we(t)}var g=p==D;if(!g){var h=Re.call(n,"__wrapped__"),v=Re.call(t,"__wrapped__");if(h||v)return tt(h?n.__wrapped__:n,v?t.__wrapped__:t,r,e,u,o);if(p!=q)return!1;var y=n.constructor,m=t.constructor;if(y!=m&&!(St(y)&&y instanceof y&&St(m)&&m instanceof m)&&"constructor"in n&&"constructor"in t)return!1}var b=!u;u||(u=a()),o||(o=a());for(var d=u.length;d--;)if(u[d]==n)return o[d]==t;var _=0;if(i=!0,u.push(n),o.push(t),g){if(d=n.length,_=t.length,i=_==d,i||e)for(;_--;){var w=d,j=t[_];if(e)for(;w--&&!(i=tt(n[w],j,r,e,u,o)););else if(!(i=tt(n[_],j,r,e,u,o)))break}}else iu(t,function(t,a,f){return Re.call(f,a)?(_++,i=Re.call(n,a)&&tt(n[a],t,r,e,u,o)):void 0}),i&&!e&&iu(n,function(n,t,r){return Re.call(r,t)?i=--_>-1:void 0});return u.pop(),o.pop(),b&&(l(u),l(o)),i}function rt(n,t,r,e,u){(Xe(t)?Qt:au)(t,function(t,o){var i,a,f=t,l=n[o];if(t&&((a=Xe(t))||fu(t))){for(var c=e.length;c--;)if(i=e[c]==t){l=u[c];break}if(!i){var p;r&&(f=r(l,t),(p="undefined"!=typeof f)&&(l=f)),p||(l=a?Xe(l)?l:[]:fu(l)?l:{}),e.push(t),u.push(l),p||rt(l,t,r,e,u)}}else r&&(f=r(l,t),"undefined"==typeof f&&(f=t)),"undefined"!=typeof f&&(l=f);n[o]=l})}function et(n,t){return n+Te(He()*(t-n+1))}function ut(r,e,u){var i=-1,f=ft(),p=r?r.length:0,s=[],g=!e&&p>=b&&f===n,h=u||g?a():s;if(g){var v=o(h);f=t,h=v}for(;++i<p;){var y=r[i],m=u?u(y,i,r):y;(e?!i||h[h.length-1]!==m:f(h,m)<0)&&((u||g)&&h.push(m),s.push(y))}return g?(l(h.array),c(h)):u&&l(h),s}function ot(n){return function(t,r,e){var u={};r=h.createCallback(r,e,3);var o=-1,i=t?t.length:0;if("number"==typeof i)for(;++o<i;){var a=t[o];n(u,a,r(a,o,t),t)}else au(t,function(t,e,o){n(u,t,r(t,e,o),o)});return u}}function it(n,t,r,e,u,o){var i=1&t,a=2&t,f=4&t,l=16&t,c=32&t;if(!a&&!St(n))throw new je;l&&!r.length&&(t&=-17,l=r=!1),c&&!e.length&&(t&=-33,c=e=!1);var s=n&&n.__bindData__;if(s&&s!==!0)return s=p(s),s[2]&&(s[2]=p(s[2])),s[3]&&(s[3]=p(s[3])),!i||1&s[1]||(s[4]=u),!i&&1&s[1]&&(t|=8),!f||4&s[1]||(s[5]=o),l&&Pe.apply(s[2]||(s[2]=[]),r),c&&$e.apply(s[3]||(s[3]=[]),e),s[1]|=t,it.apply(null,s);var g=1==t||17===t?d:X;return g([n,t,r,e,u,o])}function at(n){return nu[n]}function ft(){var t=(t=h.indexOf)===mr?n:t;return t}function lt(n){return"function"==typeof n&&Oe.test(n)}function ct(n){var t,r;return n&&Ee.call(n)==q&&(t=n.constructor,!St(t)||t instanceof t)?(iu(n,function(n,t){r=t}),"undefined"==typeof r||Re.call(n,r)):!1}function pt(n){return tu[n]}function st(n){return n&&"object"==typeof n&&"number"==typeof n.length&&Ee.call(n)==P||!1}function gt(n,t,r,e){return"boolean"!=typeof t&&null!=t&&(e=r,r=t,t=!1),H(n,t,"function"==typeof r&&Q(r,e,1))}function ht(n,t,r){return H(n,!0,"function"==typeof t&&Q(t,r,1))}function vt(n,t){var r=J(n);return t?uu(r,t):r}function yt(n,t,r){var e;return t=h.createCallback(t,r,3),au(n,function(n,r,u){return t(n,r,u)?(e=r,!1):void 0}),e}function mt(n,t,r){var e;return t=h.createCallback(t,r,3),dt(n,function(n,r,u){return t(n,r,u)?(e=r,!1):void 0}),e}function bt(n,t,r){var e=[];iu(n,function(n,t){e.push(t,n)});var u=e.length;for(t=Q(t,r,3);u--&&t(e[u--],e[u],n)!==!1;);return n}function dt(n,t,r){var e=Ze(n),u=e.length;for(t=Q(t,r,3);u--;){var o=e[u];if(t(n[o],o,n)===!1)break}return n}function _t(n){var t=[];return iu(n,function(n,r){St(n)&&t.push(r)}),t.sort()}function wt(n,t){return n?Re.call(n,t):!1}function jt(n){for(var t=-1,r=Ze(n),e=r.length,u={};++t<e;){var o=r[t];u[n[o]]=o}return u}function xt(n){return n===!0||n===!1||n&&"object"==typeof n&&Ee.call(n)==F||!1}function kt(n){return n&&"object"==typeof n&&Ee.call(n)==$||!1}function Ct(n){return n&&1===n.nodeType||!1}function Et(n){var t=!0;if(!n)return t;var r=Ee.call(n),e=n.length;return r==D||r==z||r==P||r==q&&"number"==typeof e&&St(n.splice)?!e:(au(n,function(){return t=!1}),t)}function Ot(n,t,r,e){return tt(n,t,"function"==typeof r&&Q(r,e,2))}function At(n){return We(n)&&!ze(parseFloat(n))}function St(n){return"function"==typeof n}function Tt(n){return!(!n||!U[typeof n])}function It(n){return Rt(n)&&n!=+n}function Nt(n){return null===n}function Rt(n){return"number"==typeof n||n&&"object"==typeof n&&Ee.call(n)==L||!1}function Pt(n){return n&&"object"==typeof n&&Ee.call(n)==W||!1}function Dt(n){return"string"==typeof n||n&&"object"==typeof n&&Ee.call(n)==z||!1}function Ft(n){return"undefined"==typeof n}function $t(n,t,r){var e={};return t=h.createCallback(t,r,3),au(n,function(n,r,u){e[r]=t(n,r,u)}),e}function Bt(n){var t=arguments,r=2;if(!Tt(n))return n;if("number"!=typeof t[2]&&(r=t.length),r>3&&"function"==typeof t[r-2])var e=Q(t[--r-1],t[r--],2);else r>2&&"function"==typeof t[r-1]&&(e=t[--r]);for(var u=p(arguments,1,r),o=-1,i=a(),f=a();++o<r;)rt(n,u[o],e,i,f);return l(i),l(f),n}function Lt(n,t,r){var e={};if("function"!=typeof t){var u=[];iu(n,function(n,t){u.push(t)}),u=Y(u,nt(arguments,!0,!1,1));for(var o=-1,i=u.length;++o<i;){var a=u[o];e[a]=n[a]}}else t=h.createCallback(t,r,3),iu(n,function(n,r,u){t(n,r,u)||(e[r]=n)});return e}function qt(n){for(var t=-1,r=Ze(n),e=r.length,u=ge(e);++t<e;){var o=r[t];u[t]=[o,n[o]]}return u}function Wt(n,t,r){var e={};if("function"!=typeof t)for(var u=-1,o=nt(arguments,!0,!1,1),i=Tt(n)?o.length:0;++u<i;){var a=o[u];a in n&&(e[a]=n[a])}else t=h.createCallback(t,r,3),iu(n,function(n,r,u){t(n,r,u)&&(e[r]=n)});return e}function zt(n,t,r,e){var u=Xe(n);if(null==r)if(u)r=[];else{var o=n&&n.constructor,i=o&&o.prototype;r=J(i)}return t&&(t=h.createCallback(t,e,4),(u?Qt:au)(n,function(n,e,u){return t(r,n,e,u)})),r}function Mt(n){for(var t=-1,r=Ze(n),e=r.length,u=ge(e);++t<e;)u[t]=n[r[t]];return u}function Kt(n){for(var t=arguments,r=-1,e=nt(t,!0,!1,1),u=t[2]&&t[2][t[1]]===n?1:e.length,o=ge(u);++r<u;)o[r]=n[e[r]];return o}function Vt(n,t,r){var e=-1,u=ft(),o=n?n.length:0,i=!1;return r=(0>r?Ke(0,o+r):r)||0,Xe(n)?i=u(n,t,r)>-1:"number"==typeof o?i=(Dt(n)?n.indexOf(t,r):u(n,t,r))>-1:au(n,function(n){return++e>=r?!(i=n===t):void 0}),i}function Ut(n,t,r){var e=!0;t=h.createCallback(t,r,3);var u=-1,o=n?n.length:0;if("number"==typeof o)for(;++u<o&&(e=!!t(n[u],u,n)););else au(n,function(n,r,u){return e=!!t(n,r,u)});return e}function Ht(n,t,r){var e=[];t=h.createCallback(t,r,3);var u=-1,o=n?n.length:0;if("number"==typeof o)for(;++u<o;){var i=n[u];t(i,u,n)&&e.push(i)}else au(n,function(n,r,u){t(n,r,u)&&e.push(n)});return e}function Gt(n,t,r){t=h.createCallback(t,r,3);var e=-1,u=n?n.length:0;if("number"!=typeof u){var o;return au(n,function(n,r,e){return t(n,r,e)?(o=n,!1):void 0}),o}for(;++e<u;){var i=n[e];if(t(i,e,n))return i}}function Jt(n,t,r){var e;return t=h.createCallback(t,r,3),Xt(n,function(n,r,u){return t(n,r,u)?(e=n,!1):void 0}),e}function Qt(n,t,r){var e=-1,u=n?n.length:0;if(t=t&&"undefined"==typeof r?t:Q(t,r,3),"number"==typeof u)for(;++e<u&&t(n[e],e,n)!==!1;);else au(n,t);return n}function Xt(n,t,r){var e=n?n.length:0;if(t=t&&"undefined"==typeof r?t:Q(t,r,3),"number"==typeof e)for(;e--&&t(n[e],e,n)!==!1;);else{var u=Ze(n);e=u.length,au(n,function(n,r,o){return r=u?u[--e]:--e,t(o[r],r,o)})}return n}function Yt(n,t){var r=p(arguments,2),e=-1,u="function"==typeof t,o=n?n.length:0,i=ge("number"==typeof o?o:0);return Qt(n,function(n){i[++e]=(u?t:n[t]).apply(n,r)}),i}function Zt(n,t,r){var e=-1,u=n?n.length:0;if(t=h.createCallback(t,r,3),"number"==typeof u)for(var o=ge(u);++e<u;)o[e]=t(n[e],e,n);else o=[],au(n,function(n,r,u){o[++e]=t(n,r,u)});return o}function nr(n,t,r){var u=-1/0,o=u;if("function"!=typeof t&&r&&r[t]===n&&(t=null),null==t&&Xe(n))for(var i=-1,a=n.length;++i<a;){var f=n[i];f>o&&(o=f)}else t=null==t&&Dt(n)?e:h.createCallback(t,r,3),Qt(n,function(n,r,e){var i=t(n,r,e);i>u&&(u=i,o=n)});return o}function tr(n,t,r){var u=1/0,o=u;if("function"!=typeof t&&r&&r[t]===n&&(t=null),null==t&&Xe(n))for(var i=-1,a=n.length;++i<a;){var f=n[i];o>f&&(o=f)}else t=null==t&&Dt(n)?e:h.createCallback(t,r,3),Qt(n,function(n,r,e){var i=t(n,r,e);u>i&&(u=i,o=n)});return o}function rr(n,t,r,e){if(!n)return r;var u=arguments.length<3;t=h.createCallback(t,e,4);var o=-1,i=n.length;if("number"==typeof i)for(u&&(r=n[++o]);++o<i;)r=t(r,n[o],o,n);else au(n,function(n,e,o){r=u?(u=!1,n):t(r,n,e,o)});return r}function er(n,t,r,e){var u=arguments.length<3;return t=h.createCallback(t,e,4),Xt(n,function(n,e,o){r=u?(u=!1,n):t(r,n,e,o)}),r}function ur(n,t,r){return t=h.createCallback(t,r,3),Ht(n,function(n,r,e){return!t(n,r,e)})}function or(n,t,r){if(n&&"number"!=typeof n.length&&(n=Mt(n)),null==t||r)return n?n[et(0,n.length-1)]:g;var e=ir(n);return e.length=Ve(Ke(0,t),e.length),e}function ir(n){var t=-1,r=n?n.length:0,e=ge("number"==typeof r?r:0);return Qt(n,function(n){var r=et(0,++t);e[t]=e[r],e[r]=n}),e}function ar(n){var t=n?n.length:0;return"number"==typeof t?t:Ze(n).length}function fr(n,t,r){var e;t=h.createCallback(t,r,3);var u=-1,o=n?n.length:0;if("number"==typeof o)for(;++u<o&&!(e=t(n[u],u,n)););else au(n,function(n,r,u){return!(e=t(n,r,u))});return!!e}function lr(n,t,r){var e=-1,o=Xe(t),i=n?n.length:0,p=ge("number"==typeof i?i:0);for(o||(t=h.createCallback(t,r,3)),Qt(n,function(n,r,u){var i=p[++e]=f();o?i.criteria=Zt(t,function(t){return n[t]}):(i.criteria=a())[0]=t(n,r,u),i.index=e,i.value=n}),i=p.length,p.sort(u);i--;){var s=p[i];p[i]=s.value,o||l(s.criteria),c(s)}return p}function cr(n){return n&&"number"==typeof n.length?p(n):Mt(n)}function pr(n){for(var t=-1,r=n?n.length:0,e=[];++t<r;){var u=n[t];u&&e.push(u)}return e}function sr(n){return Y(n,nt(arguments,!0,!0,1))}function gr(n,t,r){var e=-1,u=n?n.length:0;for(t=h.createCallback(t,r,3);++e<u;)if(t(n[e],e,n))return e;return-1}function hr(n,t,r){var e=n?n.length:0;for(t=h.createCallback(t,r,3);e--;)if(t(n[e],e,n))return e;return-1}function vr(n,t,r){var e=0,u=n?n.length:0;if("number"!=typeof t&&null!=t){var o=-1;for(t=h.createCallback(t,r,3);++o<u&&t(n[o],o,n);)e++}else if(e=t,null==e||r)return n?n[0]:g;return p(n,0,Ve(Ke(0,e),u))}function yr(n,t,r,e){return"boolean"!=typeof t&&null!=t&&(e=r,r="function"!=typeof t&&e&&e[t]===n?null:t,t=!1),null!=r&&(n=Zt(n,r,e)),nt(n,t)}function mr(t,r,e){if("number"==typeof e){var u=t?t.length:0;e=0>e?Ke(0,u+e):e||0}else if(e){var o=Er(t,r);return t[o]===r?o:-1}return n(t,r,e)}function br(n,t,r){var e=0,u=n?n.length:0;if("number"!=typeof t&&null!=t){var o=u;for(t=h.createCallback(t,r,3);o--&&t(n[o],o,n);)e++}else e=null==t||r?1:t||e;return p(n,0,Ve(Ke(0,u-e),u))}function dr(){for(var r=[],e=-1,u=arguments.length,i=a(),f=ft(),p=f===n,s=a();++e<u;){var g=arguments[e];(Xe(g)||st(g))&&(r.push(g),i.push(p&&g.length>=b&&o(e?r[e]:s)))}var h=r[0],v=-1,y=h?h.length:0,m=[];n:for(;++v<y;){var d=i[0];if(g=h[v],(d?t(d,g):f(s,g))<0){for(e=u,(d||s).push(g);--e;)if(d=i[e],(d?t(d,g):f(r[e],g))<0)continue n;m.push(g)}}for(;u--;)d=i[u],d&&c(d);return l(i),l(s),m}function _r(n,t,r){var e=0,u=n?n.length:0;if("number"!=typeof t&&null!=t){var o=u;for(t=h.createCallback(t,r,3);o--&&t(n[o],o,n);)e++}else if(e=t,null==e||r)return n?n[u-1]:g;return p(n,Ke(0,u-e))}function wr(n,t,r){var e=n?n.length:0;for("number"==typeof r&&(e=(0>r?Ke(0,e+r):Ve(r,e-1))+1);e--;)if(n[e]===t)return e;return-1}function jr(n){for(var t=arguments,r=0,e=t.length,u=n?n.length:0;++r<e;)for(var o=-1,i=t[r];++o<u;)n[o]===i&&(Fe.call(n,o--,1),u--);return n}function xr(n,t,r){n=+n||0,r="number"==typeof r?r:+r||1,null==t&&(t=n,n=0);for(var e=-1,u=Ke(0,Ae((t-n)/(r||1))),o=ge(u);++e<u;)o[e]=n,n+=r;return o}function kr(n,t,r){var e=-1,u=n?n.length:0,o=[];for(t=h.createCallback(t,r,3);++e<u;){var i=n[e];t(i,e,n)&&(o.push(i),Fe.call(n,e--,1),u--)}return o}function Cr(n,t,r){if("number"!=typeof t&&null!=t){var e=0,u=-1,o=n?n.length:0;for(t=h.createCallback(t,r,3);++u<o&&t(n[u],u,n);)e++}else e=null==t||r?1:Ke(0,t);return p(n,e)}function Er(n,t,r,e){var u=0,o=n?n.length:u;for(r=r?h.createCallback(r,e,1):Xr,t=r(t);o>u;){var i=u+o>>>1;r(n[i])<t?u=i+1:o=i}return u}function Or(){return ut(nt(arguments,!0,!0))}function Ar(n,t,r,e){return"boolean"!=typeof t&&null!=t&&(e=r,r="function"!=typeof t&&e&&e[t]===n?null:t,t=!1),null!=r&&(r=h.createCallback(r,e,3)),ut(n,t,r)}function Sr(n){return Y(n,p(arguments,1))}function Tr(){for(var n=-1,t=arguments.length;++n<t;){var r=arguments[n];if(Xe(r)||st(r))var e=e?ut(Y(e,r).concat(Y(r,e))):r}return e||[]}function Ir(){for(var n=arguments.length>1?arguments:arguments[0],t=-1,r=n?nr(su(n,"length")):0,e=ge(0>r?0:r);++t<r;)e[t]=su(n,t);return e}function Nr(n,t){var r=-1,e=n?n.length:0,u={};for(t||!e||Xe(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1])}return u}function Rr(n,t){if(!St(t))throw new je;return function(){return--n<1?t.apply(this,arguments):void 0}}function Pr(n,t){return arguments.length>2?it(n,17,p(arguments,2),null,t):it(n,1,null,null,t)}function Dr(n){for(var t=arguments.length>1?nt(arguments,!0,!1,1):_t(n),r=-1,e=t.length;++r<e;){var u=t[r];n[u]=it(n[u],1,null,null,n)}return n}function Fr(n,t){return arguments.length>2?it(t,19,p(arguments,2),null,n):it(t,3,null,null,n)}function $r(){for(var n=arguments,t=n.length;t--;)if(!St(n[t]))throw new je;return function(){for(var t=arguments,r=n.length;r--;)t=[n[r].apply(this,t)];return t[0]}}function Br(n,t){return t="number"==typeof t?t:+t||n.length,it(n,4,null,null,null,t)}function Lr(n,t,r){var e,u,o,i,a,f,l,c=0,p=!1,s=!0;if(!St(n))throw new je;if(t=Ke(0,t)||0,r===!0){var h=!0;s=!1}else Tt(r)&&(h=r.leading,p="maxWait"in r&&(Ke(t,r.maxWait)||0),s="trailing"in r?r.trailing:s);var v=function(){var r=t-(hu()-i);if(0>=r){u&&Se(u);var p=l;u=f=l=g,p&&(c=hu(),o=n.apply(a,e),f||u||(e=a=null))}else f=De(v,r)},y=function(){f&&Se(f),u=f=l=g,(s||p!==t)&&(c=hu(),o=n.apply(a,e),f||u||(e=a=null))};return function(){if(e=arguments,i=hu(),a=this,l=s&&(f||!h),p===!1)var r=h&&!f;else{u||h||(c=i);var g=p-(i-c),m=0>=g;m?(u&&(u=Se(u)),c=i,o=n.apply(a,e)):u||(u=De(y,g))}return m&&f?f=Se(f):f||t===p||(f=De(v,t)),r&&(m=!0,o=n.apply(a,e)),!m||f||u||(e=a=null),o}}function qr(n){if(!St(n))throw new je;var t=p(arguments,1);return De(function(){n.apply(g,t)},1)}function Wr(n,t){if(!St(n))throw new je;var r=p(arguments,2);return De(function(){n.apply(g,r)},t)}function zr(n,t){if(!St(n))throw new je;var r=function(){var e=r.cache,u=t?t.apply(this,arguments):m+arguments[0];return Re.call(e,u)?e[u]:e[u]=n.apply(this,arguments)};return r.cache={},r}function Mr(n){var t,r;if(!St(n))throw new je;return function(){return t?r:(t=!0,r=n.apply(this,arguments),n=null,r)}}function Kr(n){return it(n,16,p(arguments,1))}function Vr(n){return it(n,32,null,p(arguments,1))}function Ur(n,t,r){var e=!0,u=!0;if(!St(n))throw new je;return r===!1?e=!1:Tt(r)&&(e="leading"in r?r.leading:e,u="trailing"in r?r.trailing:u),K.leading=e,K.maxWait=t,K.trailing=u,Lr(n,t,K)}function Hr(n,t){return it(t,16,[n])}function Gr(n){return function(){return n}}function Jr(n,t,r){var e=typeof n;if(null==n||"function"==e)return Q(n,t,r);if("object"!=e)return te(n);var u=Ze(n),o=u[0],i=n[o];return 1!=u.length||i!==i||Tt(i)?function(t){for(var r=u.length,e=!1;r--&&(e=tt(t[u[r]],n[u[r]],null,!0)););return e}:function(n){var t=n[o];return i===t&&(0!==i||1/i==1/t)}}function Qr(n){return null==n?"":we(n).replace(eu,at)}function Xr(n){return n}function Yr(n,t,r){var e=!0,u=t&&_t(t);t&&(r||u.length)||(null==r&&(r=t),o=v,t=n,n=h,u=_t(t)),r===!1?e=!1:Tt(r)&&"chain"in r&&(e=r.chain);var o=n,i=St(o);Qt(u,function(r){var u=n[r]=t[r];i&&(o.prototype[r]=function(){var t=this.__chain__,r=this.__wrapped__,i=[r];Pe.apply(i,arguments);var a=u.apply(n,i);if(e||t){if(r===a&&Tt(a))return this;a=new o(a),a.__chain__=t}return a})})}function Zr(){return r._=Ce,this}function ne(){}function te(n){return function(t){return t[n]}}function re(n,t,r){var e=null==n,u=null==t;if(null==r&&("boolean"==typeof n&&u?(r=n,n=1):u||"boolean"!=typeof t||(r=t,u=!0)),e&&u&&(t=1),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1){var o=He();return Ve(n+o*(t-n+parseFloat("1e-"+((o+"").length-1))),t)}return et(n,t)}function ee(n,t){if(n){var r=n[t];return St(r)?n[t]():r}}function ue(n,t,r){var e=h.templateSettings;n=we(n||""),r=ou({},r,e);var u,o=ou({},r.imports,e.imports),a=Ze(o),f=Mt(o),l=0,c=r.interpolate||S,p="__p += '",s=_e((r.escape||S).source+"|"+c.source+"|"+(c===O?k:S).source+"|"+(r.evaluate||S).source+"|$","g");n.replace(s,function(t,r,e,o,a,f){return e||(e=o),p+=n.slice(l,f).replace(I,i),r&&(p+="' +\n__e("+r+") +\n'"),a&&(u=!0,p+="';\n"+a+";\n__p += '"),e&&(p+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),l=f+t.length,t}),p+="';\n";var v=r.variable,y=v;y||(v="obj",p="with ("+v+") {\n"+p+"\n}\n"),p=(u?p.replace(w,""):p).replace(j,"$1").replace(x,"$1;"),p="function("+v+") {\n"+(y?"":v+" || ("+v+" = {});\n")+"var __t, __p = '', __e = _.escape"+(u?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";var m="\n/*\n//# sourceURL="+(r.sourceURL||"/lodash/template/source["+R++ +"]")+"\n*/";try{var b=ye(a,"return "+p+m).apply(g,f)}catch(d){throw d.source=p,d}return t?b(t):(b.source=p,b)}function oe(n,t,r){n=(n=+n)>-1?n:0;var e=-1,u=ge(n);for(t=Q(t,r,1);++e<n;)u[e]=t(e);return u}function ie(n){return null==n?"":we(n).replace(ru,pt)}function ae(n){var t=++y;return we(null==n?"":n)+t}function fe(n){return n=new v(n),n.__chain__=!0,n}function le(n,t){return t(n),n}function ce(){return this.__chain__=!0,this}function pe(){return we(this.__wrapped__)}function se(){return this.__wrapped__}r=r?Z.defaults(G.Object(),r,Z.pick(G,N)):G;var ge=r.Array,he=r.Boolean,ve=r.Date,ye=r.Function,me=r.Math,be=r.Number,de=r.Object,_e=r.RegExp,we=r.String,je=r.TypeError,xe=[],ke=de.prototype,Ce=r._,Ee=ke.toString,Oe=_e("^"+we(Ee).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),Ae=me.ceil,Se=r.clearTimeout,Te=me.floor,Ie=ye.prototype.toString,Ne=lt(Ne=de.getPrototypeOf)&&Ne,Re=ke.hasOwnProperty,Pe=xe.push,De=r.setTimeout,Fe=xe.splice,$e=xe.unshift,Be=function(){try{var n={},t=lt(t=de.defineProperty)&&t,r=t(n,n,n)&&t}catch(e){}return r}(),Le=lt(Le=de.create)&&Le,qe=lt(qe=ge.isArray)&&qe,We=r.isFinite,ze=r.isNaN,Me=lt(Me=de.keys)&&Me,Ke=me.max,Ve=me.min,Ue=r.parseInt,He=me.random,Ge={};Ge[D]=ge,Ge[F]=he,Ge[$]=ve,Ge[B]=ye,Ge[q]=de,Ge[L]=be,Ge[W]=_e,Ge[z]=we,v.prototype=h.prototype;var Je=h.support={};Je.funcDecomp=!lt(r.WinRTError)&&T.test(s),Je.funcNames="string"==typeof ye.name,h.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:O,variable:"",imports:{_:h}},Le||(J=function(){function n(){}return function(t){if(Tt(t)){n.prototype=t;var e=new n;n.prototype=null}return e||r.Object()}}());var Qe=Be?function(n,t){V.value=t,Be(n,"__bindData__",V)}:ne,Xe=qe||function(n){return n&&"object"==typeof n&&"number"==typeof n.length&&Ee.call(n)==D||!1},Ye=function(n){var t,r=n,e=[];if(!r)return e;if(!U[typeof n])return e;for(t in r)Re.call(r,t)&&e.push(t);return e},Ze=Me?function(n){return Tt(n)?Me(n):[]}:Ye,nu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},tu=jt(nu),ru=_e("("+Ze(tu).join("|")+")","g"),eu=_e("["+Ze(nu).join("")+"]","g"),uu=function(n,t,r){var e,u=n,o=u;if(!u)return o;var i=arguments,a=0,f="number"==typeof r?2:i.length;if(f>3&&"function"==typeof i[f-2])var l=Q(i[--f-1],i[f--],2);else f>2&&"function"==typeof i[f-1]&&(l=i[--f]);for(;++a<f;)if(u=i[a],u&&U[typeof u])for(var c=-1,p=U[typeof u]&&Ze(u),s=p?p.length:0;++c<s;)e=p[c],o[e]=l?l(o[e],u[e]):u[e];return o},ou=function(n,t,r){var e,u=n,o=u;if(!u)return o;for(var i=arguments,a=0,f="number"==typeof r?2:i.length;++a<f;)if(u=i[a],u&&U[typeof u])for(var l=-1,c=U[typeof u]&&Ze(u),p=c?c.length:0;++l<p;)e=c[l],"undefined"==typeof o[e]&&(o[e]=u[e]);return o},iu=function(n,t,r){var e,u=n,o=u;if(!u)return o;if(!U[typeof u])return o;t=t&&"undefined"==typeof r?t:Q(t,r,3);for(e in u)if(t(u[e],e,n)===!1)return o;return o},au=function(n,t,r){var e,u=n,o=u;if(!u)return o;if(!U[typeof u])return o;t=t&&"undefined"==typeof r?t:Q(t,r,3);for(var i=-1,a=U[typeof u]&&Ze(u),f=a?a.length:0;++i<f;)if(e=a[i],t(u[e],e,n)===!1)return o;return o},fu=Ne?function(n){if(!n||Ee.call(n)!=q)return!1;var t=n.valueOf,r=lt(t)&&(r=Ne(t))&&Ne(r);return r?n==r||Ne(n)==r:ct(n)}:ct,lu=ot(function(n,t,r){Re.call(n,r)?n[r]++:n[r]=1}),cu=ot(function(n,t,r){(Re.call(n,r)?n[r]:n[r]=[]).push(t)}),pu=ot(function(n,t,r){n[r]=t}),su=Zt,gu=Ht,hu=lt(hu=ve.now)&&hu||function(){return(new ve).getTime()},vu=8==Ue(_+"08")?Ue:function(n,t){return Ue(Dt(n)?n.replace(A,""):n,t||0)};return h.after=Rr,h.assign=uu,h.at=Kt,h.bind=Pr,h.bindAll=Dr,h.bindKey=Fr,h.chain=fe,h.compact=pr,h.compose=$r,h.constant=Gr,h.countBy=lu,h.create=vt,h.createCallback=Jr,h.curry=Br,h.debounce=Lr,h.defaults=ou,h.defer=qr,h.delay=Wr,h.difference=sr,h.filter=Ht,h.flatten=yr,h.forEach=Qt,h.forEachRight=Xt,h.forIn=iu,h.forInRight=bt,h.forOwn=au,h.forOwnRight=dt,h.functions=_t,h.groupBy=cu,h.indexBy=pu,h.initial=br,h.intersection=dr,h.invert=jt,h.invoke=Yt,h.keys=Ze,h.map=Zt,h.mapValues=$t,h.max=nr,h.memoize=zr,h.merge=Bt,h.min=tr,h.omit=Lt,h.once=Mr,h.pairs=qt,h.partial=Kr,h.partialRight=Vr,h.pick=Wt,h.pluck=su,h.property=te,h.pull=jr,h.range=xr,h.reject=ur,h.remove=kr,h.rest=Cr,h.shuffle=ir,h.sortBy=lr,h.tap=le,h.throttle=Ur,h.times=oe,h.toArray=cr,h.transform=zt,h.union=Or,h.uniq=Ar,h.values=Mt,h.where=gu,h.without=Sr,h.wrap=Hr,h.xor=Tr,h.zip=Ir,h.zipObject=Nr,h.collect=Zt,h.drop=Cr,h.each=Qt,h.eachRight=Xt,h.extend=uu,h.methods=_t,h.object=Nr,h.select=Ht,h.tail=Cr,h.unique=Ar,h.unzip=Ir,Yr(h),h.clone=gt,h.cloneDeep=ht,h.contains=Vt,h.escape=Qr,h.every=Ut,h.find=Gt,h.findIndex=gr,h.findKey=yt,h.findLast=Jt,h.findLastIndex=hr,h.findLastKey=mt,h.has=wt,h.identity=Xr,h.indexOf=mr,h.isArguments=st,h.isArray=Xe,h.isBoolean=xt,h.isDate=kt,h.isElement=Ct,h.isEmpty=Et,h.isEqual=Ot,h.isFinite=At,h.isFunction=St,h.isNaN=It,h.isNull=Nt,h.isNumber=Rt,h.isObject=Tt,h.isPlainObject=fu,h.isRegExp=Pt,h.isString=Dt,h.isUndefined=Ft,h.lastIndexOf=wr,h.mixin=Yr,h.noConflict=Zr,h.noop=ne,h.now=hu,h.parseInt=vu,h.random=re,h.reduce=rr,h.reduceRight=er,h.result=ee,h.runInContext=s,h.size=ar,h.some=fr,h.sortedIndex=Er,h.template=ue,h.unescape=ie,h.uniqueId=ae,h.all=Ut,h.any=fr,h.detect=Gt,h.findWhere=Gt,h.foldl=rr,h.foldr=er,h.include=Vt,h.inject=rr,Yr(function(){var n={};return au(h,function(t,r){h.prototype[r]||(n[r]=t)}),n}(),!1),h.first=vr,h.last=_r,h.sample=or,h.take=vr,h.head=vr,au(h,function(n,t){var r="sample"!==t;h.prototype[t]||(h.prototype[t]=function(t,e){var u=this.__chain__,o=n(this.__wrapped__,t,e);return u||null!=t&&(!e||r&&"function"==typeof t)?new v(o,u):o})}),h.VERSION="2.4.1",h.prototype.chain=ce,h.prototype.toString=pe,h.prototype.value=se,h.prototype.valueOf=se,Qt(["join","pop","shift"],function(n){var t=xe[n];h.prototype[n]=function(){var n=this.__chain__,r=t.apply(this.__wrapped__,arguments);return n?new v(r,n):r}}),Qt(["push","reverse","sort","unshift"],function(n){var t=xe[n];h.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),Qt(["concat","slice","splice"],function(n){var t=xe[n];h.prototype[n]=function(){return new v(t.apply(this.__wrapped__,arguments),this.__chain__)}}),h}var g,h=[],v=[],y=0,m=+new Date+"",b=75,d=40,_=" 	\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",w=/\b__p \+= '';/g,j=/\b(__p \+=) '' \+/g,x=/(__e\(.*?\)|\b__t\)) \+\n'';/g,k=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C=/\w*$/,E=/^\s*function[ \n\r\t]+\w/,O=/<%=([\s\S]+?)%>/g,A=RegExp("^["+_+"]*0+(?=.$)"),S=/($^)/,T=/\bthis\b/,I=/['\n\r\t\u2028\u2029\\]/g,N=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"],R=0,P="[object Arguments]",D="[object Array]",F="[object Boolean]",$="[object Date]",B="[object Function]",L="[object Number]",q="[object Object]",W="[object RegExp]",z="[object String]",M={};M[B]=!1,M[P]=M[D]=M[F]=M[$]=M[L]=M[q]=M[W]=M[z]=!0;var K={leading:!1,maxWait:0,trailing:!1},V={configurable:!1,enumerable:!1,value:null,writable:!1},U={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},H={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},G=U[typeof window]&&window||this,J=U[typeof exports]&&exports&&!exports.nodeType&&exports,Q=U[typeof module]&&module&&!module.nodeType&&module,X=Q&&Q.exports===J&&J,Y=U[typeof global]&&global;!Y||Y.global!==Y&&Y.window!==Y||(G=Y);var Z=s();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(G._=Z,define(function(){return Z})):J&&Q?X?(Q.exports=Z)._=Z:J._=Z:G._=Z}).call(this)}(require("github:jspm/nodelibs@0.0.5/process"));
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/cacheIndexOf", ["./baseIndexOf","./keyPrefix"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/cacheIndexOf.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function cacheIndexOf(e,r){var t=typeof r;if(e=e.cache,"boolean"==t||null==r)return e[r]?0:-1;"number"!=t&&"string"!=t&&(t="object");var a="number"==t?r:keyPrefix+r;return e=(e=e[t])&&e[a],"object"==t?e&&baseIndexOf(e,r)>-1?0:-1:e?0:-1}var baseIndexOf=require("./baseIndexOf"),keyPrefix=require("./keyPrefix");module.exports=cacheIndexOf;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/getObject", ["./objectPool"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/getObject.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function getObject(){return objectPool.pop()||{array:null,cache:null,criteria:null,"false":!1,index:0,"null":!1,number:null,object:null,push:null,string:null,"true":!1,undefined:!1,value:null}}var objectPool=require("./objectPool");module.exports=getObject;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/releaseObject", ["./maxPoolSize","./objectPool"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/releaseObject.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function releaseObject(e){var r=e.cache;r&&releaseObject(r),e.array=e.cache=e.criteria=e.object=e.number=e.string=e.value=null,objectPool.length<maxPoolSize&&objectPool.push(e)}var maxPoolSize=require("./maxPoolSize"),objectPool=require("./objectPool");module.exports=releaseObject;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isArray", ["../internals/isNative"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isArray.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";var isNative=require("../internals/isNative"),arrayClass="[object Array]",objectProto=Object.prototype,toString=objectProto.toString,nativeIsArray=isNative(nativeIsArray=Array.isArray)&&nativeIsArray,isArray=nativeIsArray||function(e){return e&&"object"==typeof e&&"number"==typeof e.length&&toString.call(e)==arrayClass||!1};module.exports=isArray;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isObject", ["../internals/objectTypes"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isObject.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function isObject(e){return!(!e||!objectTypes[typeof e])}var objectTypes=require("../internals/objectTypes");module.exports=isObject;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/getArray", ["./arrayPool"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/getArray.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function getArray(){return arrayPool.pop()||[]}var arrayPool=require("./arrayPool");module.exports=getArray;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/keys", ["../internals/isNative","./isObject","../internals/shimKeys"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/keys.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";var isNative=require("../internals/isNative"),isObject=require("./isObject"),shimKeys=require("../internals/shimKeys"),nativeKeys=isNative(nativeKeys=Object.keys)&&nativeKeys,keys=nativeKeys?function(e){return isObject(e)?nativeKeys(e):[]}:shimKeys;module.exports=keys;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/map", ["../functions/createCallback","../objects/forOwn"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/map.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";function map(e,r,t){var a=-1,n=e?e.length:0;if(r=createCallback(r,t,3),"number"==typeof n)for(var o=Array(n);++a<n;)o[a]=r(e[a],a,e);else o=[],forOwn(e,function(e,t,n){o[++a]=r(e,t,n)});return o}var createCallback=require("../functions/createCallback"),forOwn=require("../objects/forOwn");module.exports=map;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/indexOf", ["../internals/baseIndexOf","./sortedIndex"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/indexOf.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  /* */
  "format cjs";function indexOf(e,r,t){if("number"==typeof t){var a=e?e.length:0;t=0>t?nativeMax(0,a+t):t||0}else if(t){var n=sortedIndex(e,r);return e[n]===r?n:-1}return baseIndexOf(e,r,t)}var baseIndexOf=require("../internals/baseIndexOf"),sortedIndex=require("./sortedIndex"),nativeMax=Math.max;module.exports=indexOf;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/union", ["../internals/baseFlatten","../internals/baseUniq"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/union.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  /* */
  "format cjs";function union(){return baseUniq(baseFlatten(arguments,!0,!0))}var baseFlatten=require("../internals/baseFlatten"),baseUniq=require("../internals/baseUniq");module.exports=union;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/max", ["../internals/charAtCallback","../functions/createCallback","./forEach","../objects/forOwn","../objects/isArray","../objects/isString"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/max.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";function max(e,r,t){var a=-1/0,n=a;if("function"!=typeof r&&t&&t[r]===e&&(r=null),null==r&&isArray(e))for(var o=-1,s=e.length;++o<s;){var i=e[o];i>n&&(n=i)}else r=null==r&&isString(e)?charAtCallback:createCallback(r,t,3),forEach(e,function(e,t,o){var s=r(e,t,o);s>a&&(a=s,n=e)});return n}var charAtCallback=require("../internals/charAtCallback"),createCallback=require("../functions/createCallback"),forEach=require("./forEach"),forOwn=require("../objects/forOwn"),isArray=require("../objects/isArray"),isString=require("../objects/isString");module.exports=max;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/chaining/chain", ["../internals/lodashWrapper"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/chaining/chain.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/chaining";
  /* */
  "format cjs";function chain(e){return e=new lodashWrapper(e),e.__chain__=!0,e}var lodashWrapper=require("../internals/lodashWrapper");module.exports=chain;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/countBy", ["../internals/createAggregator"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/countBy.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";var createAggregator=require("../internals/createAggregator"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,countBy=createAggregator(function(e,r,t){hasOwnProperty.call(e,t)?e[t]++:e[t]=1});module.exports=countBy;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/sample", ["../internals/baseRandom","../objects/isString","./shuffle","../objects/values"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/sample.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";function sample(e,r,t){if(e&&"number"!=typeof e.length&&(e=values(e)),null==r||t)return e?e[baseRandom(0,e.length-1)]:void 0;var a=shuffle(e);return a.length=nativeMin(nativeMax(0,r),a.length),a}var baseRandom=require("../internals/baseRandom"),isString=require("../objects/isString"),shuffle=require("./shuffle"),values=require("../objects/values"),nativeMax=Math.max,nativeMin=Math.min;module.exports=sample;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/sortBy", ["../internals/compareAscending","../functions/createCallback","./forEach","../internals/getArray","../internals/getObject","../objects/isArray","./map","../internals/releaseArray","../internals/releaseObject"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/sortBy.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  /* */
  "format cjs";function sortBy(e,r,t){var a=-1,n=isArray(r),o=e?e.length:0,s=Array("number"==typeof o?o:0);for(n||(r=createCallback(r,t,3)),forEach(e,function(e,t,o){var i=s[++a]=getObject();n?i.criteria=map(r,function(r){return e[r]}):(i.criteria=getArray())[0]=r(e,t,o),i.index=a,i.value=e}),o=s.length,s.sort(compareAscending);o--;){var i=s[o];s[o]=i.value,n||releaseArray(i.criteria),releaseObject(i)}return s}var compareAscending=require("../internals/compareAscending"),createCallback=require("../functions/createCallback"),forEach=require("./forEach"),getArray=require("../internals/getArray"),getObject=require("../internals/getObject"),isArray=require("../objects/isArray"),map=require("./map"),releaseArray=require("../internals/releaseArray"),releaseObject=require("../internals/releaseObject");module.exports=sortBy;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/bindAll", ["../internals/baseFlatten","../internals/createWrapper","../objects/functions"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/bindAll.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  /* */
  "format cjs";function bindAll(e){for(var r=arguments.length>1?baseFlatten(arguments,!0,!1,1):functions(e),t=-1,a=r.length;++t<a;){var n=r[t];e[n]=createWrapper(e[n],1,null,null,e)}return e}var baseFlatten=require("../internals/baseFlatten"),createWrapper=require("../internals/createWrapper"),functions=require("../objects/functions");module.exports=bindAll;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/debounce", ["../objects/isFunction","../objects/isObject","../utilities/now"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/debounce.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  /* */
  "format cjs";function debounce(e,r,t){var a,n,o,s,i,c,l,u=0,f=!1,p=!0;if(!isFunction(e))throw new TypeError;if(r=nativeMax(0,r)||0,t===!0){var b=!0;p=!1}else isObject(t)&&(b=t.leading,f="maxWait"in t&&(nativeMax(r,t.maxWait)||0),p="trailing"in t?t.trailing:p);var m=function(){var t=r-(now()-s);if(0>=t){n&&clearTimeout(n);var f=l;n=c=l=void 0,f&&(u=now(),o=e.apply(i,a),c||n||(a=i=null))}else c=setTimeout(m,t)},d=function(){c&&clearTimeout(c),n=c=l=void 0,(p||f!==r)&&(u=now(),o=e.apply(i,a),c||n||(a=i=null))};return function(){if(a=arguments,s=now(),i=this,l=p&&(c||!b),f===!1)var t=b&&!c;else{n||b||(u=s);var h=f-(s-u),y=0>=h;y?(n&&(n=clearTimeout(n)),u=s,o=e.apply(i,a)):n||(n=setTimeout(d,h))}return y&&c?c=clearTimeout(c):c||r===f||(c=setTimeout(m,r)),t&&(y=!0,o=e.apply(i,a)),!y||c||n||(a=i=null),o}}var isFunction=require("../objects/isFunction"),isObject=require("../objects/isObject"),now=require("../utilities/now"),nativeMax=Math.max;module.exports=debounce;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/clone", ["../internals/baseClone","../internals/baseCreateCallback"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/clone.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function clone(e,r,t,a){return"boolean"!=typeof r&&null!=r&&(a=t,t=r,r=!1),baseClone(e,r,"function"==typeof t&&baseCreateCallback(t,a,1))}var baseClone=require("../internals/baseClone"),baseCreateCallback=require("../internals/baseCreateCallback");module.exports=clone;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/findLastKey", ["../functions/createCallback","./forOwnRight"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/findLastKey.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function findLastKey(e,r,t){var a;return r=createCallback(r,t,3),forOwnRight(e,function(e,t,o){return r(e,t,o)?(a=t,!1):void 0}),a}var createCallback=require("../functions/createCallback"),forOwnRight=require("./forOwnRight");module.exports=findLastKey;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isNaN", ["./isNumber"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isNaN.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function isNaN(e){return isNumber(e)&&e!=+e}var isNumber=require("./isNumber");module.exports=isNaN;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isPlainObject", ["../internals/isNative","../internals/shimIsPlainObject"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isPlainObject.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";var isNative=require("../internals/isNative"),shimIsPlainObject=require("../internals/shimIsPlainObject"),objectClass="[object Object]",objectProto=Object.prototype,toString=objectProto.toString,getPrototypeOf=isNative(getPrototypeOf=Object.getPrototypeOf)&&getPrototypeOf,isPlainObject=getPrototypeOf?function(e){if(!e||toString.call(e)!=objectClass)return!1;var r=e.valueOf,t=isNative(r)&&(t=getPrototypeOf(r))&&getPrototypeOf(t);return t?e==t||getPrototypeOf(e)==t:shimIsPlainObject(e)}:shimIsPlainObject;module.exports=isPlainObject;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/merge", ["../internals/baseCreateCallback","../internals/baseMerge","../internals/getArray","./isObject","../internals/releaseArray","../internals/slice"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/merge.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  /* */
  "format cjs";function merge(e){var r=arguments,t=2;if(!isObject(e))return e;if("number"!=typeof r[2]&&(t=r.length),t>3&&"function"==typeof r[t-2])var a=baseCreateCallback(r[--t-1],r[t--],2);else t>2&&"function"==typeof r[t-1]&&(a=r[--t]);for(var o=slice(arguments,1,t),n=-1,s=getArray(),i=getArray();++n<t;)baseMerge(e,o[n],a,s,i);return releaseArray(s),releaseArray(i),e}var baseCreateCallback=require("../internals/baseCreateCallback"),baseMerge=require("../internals/baseMerge"),getArray=require("../internals/getArray"),isObject=require("./isObject"),releaseArray=require("../internals/releaseArray"),slice=require("../internals/slice");module.exports=merge;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/escapeHtmlChar", ["./htmlEscapes"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/escapeHtmlChar.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function escapeHtmlChar(e){return htmlEscapes[e]}var htmlEscapes=require("./htmlEscapes");module.exports=escapeHtmlChar;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/template", ["../objects/defaults","./escape","../internals/escapeStringChar","../objects/keys","../internals/reInterpolate","./templateSettings","../objects/values","github:jspm/nodelibs@0.0.5/process"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/template.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  /* */
  "format cjs";!function(){function e(e,b,d){var m=n.imports._.templateSettings||n;e=String(e||""),d=r({},d,m);var h,y=r({},d.imports,m.imports),j=a(y),g=s(y),q=0,v=d.interpolate||f,x="__p += '",C=RegExp((d.escape||f).source+"|"+v.source+"|"+(v===o?u:f).source+"|"+(d.evaluate||f).source+"|$","g");e.replace(C,function(r,a,o,n,s,i){return o||(o=n),x+=e.slice(q,i).replace(p,t),a&&(x+="' +\n__e("+a+") +\n'"),s&&(h=!0,x+="';\n"+s+";\n__p += '"),o&&(x+="' +\n((__t = ("+o+")) == null ? '' : __t) +\n'"),q=i+r.length,r}),x+="';\n";var O=d.variable,k=O;k||(O="obj",x="with ("+O+") {\n"+x+"\n}\n"),x=(h?x.replace(i,""):x).replace(c,"$1").replace(l,"$1;"),x="function("+O+") {\n"+(k?"":O+" || ("+O+" = {});\n")+"var __t, __p = '', __e = _.escape"+(h?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+x+"return __p\n}";try{var A=Function(j,"return "+x).apply(void 0,g)}catch(w){throw w.source=x,w}return b?A(b):(A.source=x,A)}var r=require("../objects/defaults"),t=(require("./escape"),require("../internals/escapeStringChar")),a=require("../objects/keys"),o=require("../internals/reInterpolate"),n=require("./templateSettings"),s=require("../objects/values"),i=/\b__p \+= '';/g,c=/\b(__p \+=) '' \+/g,l=/(__e\(.*?\)|\b__t\)) \+\n'';/g,u=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,f=/($^)/,p=/['\n\r\t\u2028\u2029\\]/g;module.exports=e}(require("github:jspm/nodelibs@0.0.5/process"));
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/reEscapedHtml", ["./htmlUnescapes","../objects/keys"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/reEscapedHtml.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";var htmlUnescapes=require("./htmlUnescapes"),keys=require("../objects/keys"),reEscapedHtml=RegExp("("+keys(htmlUnescapes).join("|")+")","g");module.exports=reEscapedHtml;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/createCache", ["./cachePush","./getObject","./releaseObject"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/createCache.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function createCache(e){var r=-1,t=e.length,a=e[0],n=e[t/2|0],o=e[t-1];if(a&&"object"==typeof a&&n&&"object"==typeof n&&o&&"object"==typeof o)return!1;var s=getObject();s["false"]=s["null"]=s["true"]=s.undefined=!1;var i=getObject();for(i.array=e,i.cache=s,i.push=cachePush;++r<t;)i.push(e[r]);return i}var cachePush=require("./cachePush"),getObject=require("./getObject"),releaseObject=require("./releaseObject");module.exports=createCache;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseFlatten", ["../objects/isArguments","../objects/isArray"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseFlatten.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function baseFlatten(e,r,t,a){for(var n=(a||0)-1,o=e?e.length:0,s=[];++n<o;){var i=e[n];if(i&&"object"==typeof i&&"number"==typeof i.length&&(isArray(i)||isArguments(i))){r||(i=baseFlatten(i,r,t));var l=-1,c=i.length,u=s.length;for(s.length+=c;++l<c;)s[u++]=i[l]}else t||s.push(i)}return s}var isArguments=require("../objects/isArguments"),isArray=require("../objects/isArray");module.exports=baseFlatten;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseCreate", ["./isNative","../objects/isObject","../utilities/noop"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseCreate.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function baseCreate(e){return isObject(e)?nativeCreate(e):{}}var isNative=require("./isNative"),isObject=require("../objects/isObject"),noop=require("../utilities/noop"),nativeCreate=isNative(nativeCreate=Object.create)&&nativeCreate;nativeCreate||(baseCreate=function(){function e(){}return function(r){if(isObject(r)){e.prototype=r;var t=new e;e.prototype=null}return t||global.Object()}}()),module.exports=baseCreate;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseIsEqual", ["../objects/forIn","./getArray","../objects/isFunction","./objectTypes","./releaseArray"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseIsEqual.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function baseIsEqual(e,r,t,a,n,o){if(t){var s=t(e,r);if("undefined"!=typeof s)return!!s}if(e===r)return 0!==e||1/e==1/r;var i=typeof e,l=typeof r;if(!(e!==e||e&&objectTypes[i]||r&&objectTypes[l]))return!1;if(null==e||null==r)return e===r;var c=toString.call(e),u=toString.call(r);if(c==argsClass&&(c=objectClass),u==argsClass&&(u=objectClass),c!=u)return!1;switch(c){case boolClass:case dateClass:return+e==+r;case numberClass:return e!=+e?r!=+r:0==e?1/e==1/r:e==+r;case regexpClass:case stringClass:return e==String(r)}var f=c==arrayClass;if(!f){var p=hasOwnProperty.call(e,"__wrapped__"),b=hasOwnProperty.call(r,"__wrapped__");if(p||b)return baseIsEqual(p?e.__wrapped__:e,b?r.__wrapped__:r,t,a,n,o);if(c!=objectClass)return!1;var d=e.constructor,h=r.constructor;if(d!=h&&!(isFunction(d)&&d instanceof d&&isFunction(h)&&h instanceof h)&&"constructor"in e&&"constructor"in r)return!1}var m=!n;n||(n=getArray()),o||(o=getArray());for(var y=n.length;y--;)if(n[y]==e)return o[y]==r;var g=0;if(s=!0,n.push(e),o.push(r),f){if(y=e.length,g=r.length,s=g==y,s||a)for(;g--;){var j=y,q=r[g];if(a)for(;j--&&!(s=baseIsEqual(e[j],q,t,a,n,o)););else if(!(s=baseIsEqual(e[g],q,t,a,n,o)))break}}else forIn(r,function(r,i,l){return hasOwnProperty.call(l,i)?(g++,s=hasOwnProperty.call(e,i)&&baseIsEqual(e[i],r,t,a,n,o)):void 0}),s&&!a&&forIn(e,function(e,r,t){return hasOwnProperty.call(t,r)?s=--g>-1:void 0});return n.pop(),o.pop(),m&&(releaseArray(n),releaseArray(o)),s}var forIn=require("../objects/forIn"),getArray=require("./getArray"),isFunction=require("../objects/isFunction"),objectTypes=require("./objectTypes"),releaseArray=require("./releaseArray"),argsClass="[object Arguments]",arrayClass="[object Array]",boolClass="[object Boolean]",dateClass="[object Date]",numberClass="[object Number]",objectClass="[object Object]",regexpClass="[object RegExp]",stringClass="[object String]",objectProto=Object.prototype,toString=objectProto.toString,hasOwnProperty=objectProto.hasOwnProperty;module.exports=baseIsEqual;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/flatten", ["../internals/baseFlatten","../collections/map"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/flatten.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  /* */
  "format cjs";function flatten(e,r,t,a){return"boolean"!=typeof r&&null!=r&&(a=t,t="function"!=typeof r&&a&&a[r]===e?null:r,r=!1),null!=t&&(e=map(e,t,a)),baseFlatten(e,r)}var baseFlatten=require("../internals/baseFlatten"),map=require("../collections/map");module.exports=flatten;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/zip", ["../collections/max","../collections/pluck","github:jspm/nodelibs@0.0.5/process"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/zip.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  /* */
  "format cjs";!function(){function e(){for(var e=arguments.length>1?arguments:arguments[0],a=-1,n=e?r(t(e,"length")):0,s=Array(0>n?0:n);++a<n;)s[a]=t(e,a);return s}var r=require("../collections/max"),t=require("../collections/pluck");module.exports=e}(require("github:jspm/nodelibs@0.0.5/process"));
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/chaining", ["./chaining/chain","./chaining/tap","./chaining/wrapperValueOf","./chaining/wrapperChain","./chaining/wrapperToString","./chaining/wrapperValueOf"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/chaining.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern";
  /* */
  "format cjs";module.exports={chain:require("./chaining/chain"),tap:require("./chaining/tap"),value:require("./chaining/wrapperValueOf"),wrapperChain:require("./chaining/wrapperChain"),wrapperToString:require("./chaining/wrapperToString"),wrapperValueOf:require("./chaining/wrapperValueOf")};
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections", ["./collections/every","./collections/some","./collections/at","./collections/map","./collections/contains","./collections/countBy","./collections/find","./collections/forEach","./collections/forEachRight","./collections/every","./collections/filter","./collections/find","./collections/findLast","./collections/find","./collections/reduce","./collections/reduceRight","./collections/forEach","./collections/forEachRight","./collections/groupBy","./collections/contains","./collections/indexBy","./collections/reduce","./collections/invoke","./collections/map","./collections/max","./collections/min","./collections/pluck","./collections/reduce","./collections/reduceRight","./collections/reject","./collections/sample","./collections/filter","./collections/shuffle","./collections/size","./collections/some","./collections/sortBy","./collections/toArray","./collections/where"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern";
  /* */
  "format cjs";module.exports={all:require("./collections/every"),any:require("./collections/some"),at:require("./collections/at"),collect:require("./collections/map"),contains:require("./collections/contains"),countBy:require("./collections/countBy"),detect:require("./collections/find"),each:require("./collections/forEach"),eachRight:require("./collections/forEachRight"),every:require("./collections/every"),filter:require("./collections/filter"),find:require("./collections/find"),findLast:require("./collections/findLast"),findWhere:require("./collections/find"),foldl:require("./collections/reduce"),foldr:require("./collections/reduceRight"),forEach:require("./collections/forEach"),forEachRight:require("./collections/forEachRight"),groupBy:require("./collections/groupBy"),include:require("./collections/contains"),indexBy:require("./collections/indexBy"),inject:require("./collections/reduce"),invoke:require("./collections/invoke"),map:require("./collections/map"),max:require("./collections/max"),min:require("./collections/min"),pluck:require("./collections/pluck"),reduce:require("./collections/reduce"),reduceRight:require("./collections/reduceRight"),reject:require("./collections/reject"),sample:require("./collections/sample"),select:require("./collections/filter"),shuffle:require("./collections/shuffle"),size:require("./collections/size"),some:require("./collections/some"),sortBy:require("./collections/sortBy"),toArray:require("./collections/toArray"),where:require("./collections/where")};
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions", ["./functions/after","./functions/bind","./functions/bindAll","./functions/bindKey","./functions/compose","./functions/createCallback","./functions/curry","./functions/debounce","./functions/defer","./functions/delay","./functions/memoize","./functions/once","./functions/partial","./functions/partialRight","./functions/throttle","./functions/wrap"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern";
  /* */
  "format cjs";module.exports={after:require("./functions/after"),bind:require("./functions/bind"),bindAll:require("./functions/bindAll"),bindKey:require("./functions/bindKey"),compose:require("./functions/compose"),createCallback:require("./functions/createCallback"),curry:require("./functions/curry"),debounce:require("./functions/debounce"),defer:require("./functions/defer"),delay:require("./functions/delay"),memoize:require("./functions/memoize"),once:require("./functions/once"),partial:require("./functions/partial"),partialRight:require("./functions/partialRight"),throttle:require("./functions/throttle"),wrap:require("./functions/wrap")};
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects", ["./objects/assign","./objects/clone","./objects/cloneDeep","./objects/create","./objects/defaults","./objects/assign","./objects/findKey","./objects/findLastKey","./objects/forIn","./objects/forInRight","./objects/forOwn","./objects/forOwnRight","./objects/functions","./objects/has","./objects/invert","./objects/isArguments","./objects/isArray","./objects/isBoolean","./objects/isDate","./objects/isElement","./objects/isEmpty","./objects/isEqual","./objects/isFinite","./objects/isFunction","./objects/isNaN","./objects/isNull","./objects/isNumber","./objects/isObject","./objects/isPlainObject","./objects/isRegExp","./objects/isString","./objects/isUndefined","./objects/keys","./objects/mapValues","./objects/merge","./objects/functions","./objects/omit","./objects/pairs","./objects/pick","./objects/transform","./objects/values"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern";
  /* */
  "format cjs";module.exports={assign:require("./objects/assign"),clone:require("./objects/clone"),cloneDeep:require("./objects/cloneDeep"),create:require("./objects/create"),defaults:require("./objects/defaults"),extend:require("./objects/assign"),findKey:require("./objects/findKey"),findLastKey:require("./objects/findLastKey"),forIn:require("./objects/forIn"),forInRight:require("./objects/forInRight"),forOwn:require("./objects/forOwn"),forOwnRight:require("./objects/forOwnRight"),functions:require("./objects/functions"),has:require("./objects/has"),invert:require("./objects/invert"),isArguments:require("./objects/isArguments"),isArray:require("./objects/isArray"),isBoolean:require("./objects/isBoolean"),isDate:require("./objects/isDate"),isElement:require("./objects/isElement"),isEmpty:require("./objects/isEmpty"),isEqual:require("./objects/isEqual"),isFinite:require("./objects/isFinite"),isFunction:require("./objects/isFunction"),isNaN:require("./objects/isNaN"),isNull:require("./objects/isNull"),isNumber:require("./objects/isNumber"),isObject:require("./objects/isObject"),isPlainObject:require("./objects/isPlainObject"),isRegExp:require("./objects/isRegExp"),isString:require("./objects/isString"),isUndefined:require("./objects/isUndefined"),keys:require("./objects/keys"),mapValues:require("./objects/mapValues"),merge:require("./objects/merge"),methods:require("./objects/functions"),omit:require("./objects/omit"),pairs:require("./objects/pairs"),pick:require("./objects/pick"),transform:require("./objects/transform"),values:require("./objects/values")};
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/escape", ["../internals/escapeHtmlChar","../objects/keys","../internals/reUnescapedHtml"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/escape.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  /* */
  "format cjs";function escape(e){return null==e?"":String(e).replace(reUnescapedHtml,escapeHtmlChar)}var escapeHtmlChar=require("../internals/escapeHtmlChar"),keys=require("../objects/keys"),reUnescapedHtml=require("../internals/reUnescapedHtml");module.exports=escape;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/unescape", ["../objects/keys","../internals/reEscapedHtml","../internals/unescapeHtmlChar"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/unescape.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  /* */
  "format cjs";function unescape(e){return null==e?"":String(e).replace(reEscapedHtml,unescapeHtmlChar)}var keys=require("../objects/keys"),reEscapedHtml=require("../internals/reEscapedHtml"),unescapeHtmlChar=require("../internals/unescapeHtmlChar");module.exports=unescape;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseDifference", ["./baseIndexOf","./cacheIndexOf","./createCache","./largeArraySize","./releaseObject","github:jspm/nodelibs@0.0.5/process"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseDifference.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";!function(){function e(e,s){var i=-1,l=r,c=e?e.length:0,u=c>=n,f=[];if(u){var p=a(s);p?(l=t,s=p):u=!1}for(;++i<c;){var b=e[i];l(s,b)<0&&f.push(b)}return u&&o(s),f}var r=require("./baseIndexOf"),t=require("./cacheIndexOf"),a=require("./createCache"),n=require("./largeArraySize"),o=require("./releaseObject");module.exports=e}(require("github:jspm/nodelibs@0.0.5/process"));
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseBind", ["./baseCreate","../objects/isObject","./setBindData","./slice"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseBind.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function baseBind(e){function r(){if(a){var e=slice(a);push.apply(e,arguments)}if(this instanceof r){var o=baseCreate(t.prototype),s=t.apply(o,e||arguments);return isObject(s)?s:o}return t.apply(n,e||arguments)}var t=e[0],a=e[2],n=e[4];return setBindData(r,e),r}var baseCreate=require("./baseCreate"),isObject=require("../objects/isObject"),setBindData=require("./setBindData"),slice=require("./slice"),arrayRef=[],push=arrayRef.push;module.exports=baseBind;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities", ["./utilities/constant","./functions/createCallback","./utilities/escape","./utilities/identity","./utilities/mixin","./utilities/noConflict","./utilities/noop","./utilities/now","./utilities/parseInt","./utilities/property","./utilities/random","./utilities/result","./utilities/template","./utilities/templateSettings","./utilities/times","./utilities/unescape","./utilities/uniqueId"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern";
  /* */
  "format cjs";module.exports={constant:require("./utilities/constant"),createCallback:require("./functions/createCallback"),escape:require("./utilities/escape"),identity:require("./utilities/identity"),mixin:require("./utilities/mixin"),noConflict:require("./utilities/noConflict"),noop:require("./utilities/noop"),now:require("./utilities/now"),parseInt:require("./utilities/parseInt"),property:require("./utilities/property"),random:require("./utilities/random"),result:require("./utilities/result"),template:require("./utilities/template"),templateSettings:require("./utilities/templateSettings"),times:require("./utilities/times"),unescape:require("./utilities/unescape"),uniqueId:require("./utilities/uniqueId")};
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/difference", ["../internals/baseDifference","../internals/baseFlatten","github:jspm/nodelibs@0.0.5/process"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/difference.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  /* */
  "format cjs";!function(){function e(e){return r(e,t(arguments,!0,!0,1))}var r=require("../internals/baseDifference"),t=require("../internals/baseFlatten");module.exports=e}(require("github:jspm/nodelibs@0.0.5/process"));
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/createWrapper", ["./baseBind","./baseCreateWrapper","../objects/isFunction","./slice"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/createWrapper.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function createWrapper(e,r,t,a,n,o){var s=1&r,i=2&r,l=4&r,c=16&r,u=32&r;if(!i&&!isFunction(e))throw new TypeError;c&&!t.length&&(r&=-17,c=t=!1),u&&!a.length&&(r&=-33,u=a=!1);var f=e&&e.__bindData__;if(f&&f!==!0)return f=slice(f),f[2]&&(f[2]=slice(f[2])),f[3]&&(f[3]=slice(f[3])),!s||1&f[1]||(f[4]=n),!s&&1&f[1]&&(r|=8),!l||4&f[1]||(f[5]=o),c&&push.apply(f[2]||(f[2]=[]),t),u&&unshift.apply(f[3]||(f[3]=[]),a),f[1]|=r,createWrapper.apply(null,f);var p=1==r||17===r?baseBind:baseCreateWrapper;return p([e,r,t,a,n,o])}var baseBind=require("./baseBind"),baseCreateWrapper=require("./baseCreateWrapper"),isFunction=require("../objects/isFunction"),slice=require("./slice"),arrayRef=[],push=arrayRef.push,unshift=arrayRef.unshift;module.exports=createWrapper;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/bind", ["../internals/createWrapper","../internals/slice"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/bind.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  /* */
  "format cjs";function bind(e,r){return arguments.length>2?createWrapper(e,17,slice(arguments,2),null,r):createWrapper(e,1,null,null,r)}var createWrapper=require("../internals/createWrapper"),slice=require("../internals/slice");module.exports=bind;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseCreateCallback", ["../functions/bind","../utilities/identity","./setBindData","../support"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseCreateCallback.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  /* */
  "format cjs";function baseCreateCallback(e,r,t){if("function"!=typeof e)return identity;if("undefined"==typeof r||!("prototype"in e))return e;var a=e.__bindData__;if("undefined"==typeof a&&(support.funcNames&&(a=!e.name),a=a||!support.funcDecomp,!a)){var n=fnToString.call(e);support.funcNames||(a=!reFuncName.test(n)),a||(a=reThis.test(n),setBindData(e,a))}if(a===!1||a!==!0&&1&a[1])return e;switch(t){case 1:return function(t){return e.call(r,t)};case 2:return function(t,a){return e.call(r,t,a)};case 3:return function(t,a,n){return e.call(r,t,a,n)};case 4:return function(t,a,n,o){return e.call(r,t,a,n,o)}}return bind(e,r)}var bind=require("../functions/bind"),identity=require("../utilities/identity"),setBindData=require("./setBindData"),support=require("../support"),reFuncName=/^\s*function[ \n\r\t]+\w/,reThis=/\bthis\b/,fnToString=Function.prototype.toString;module.exports=baseCreateCallback;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/createCallback", ["../internals/baseCreateCallback","../internals/baseIsEqual","../objects/isObject","../objects/keys","../utilities/property"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/createCallback.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  /* */
  "format cjs";function createCallback(e,r,t){var a=typeof e;if(null==e||"function"==a)return baseCreateCallback(e,r,t);if("object"!=a)return property(e);var n=keys(e),o=n[0],s=e[o];return 1!=n.length||s!==s||isObject(s)?function(r){for(var t=n.length,a=!1;t--&&(a=baseIsEqual(r[n[t]],e[n[t]],null,!0)););return a}:function(e){var r=e[o];return s===r&&(0!==s||1/s==1/r)}}var baseCreateCallback=require("../internals/baseCreateCallback"),baseIsEqual=require("../internals/baseIsEqual"),isObject=require("../objects/isObject"),keys=require("../objects/keys"),property=require("../utilities/property");module.exports=createCallback;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/rest", ["../functions/createCallback","../internals/slice"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/rest.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  /* */
  "format cjs";function rest(e,r,t){if("number"!=typeof r&&null!=r){var a=0,n=-1,s=e?e.length:0;for(r=createCallback(r,t,3);++n<s&&r(e[n],n,e);)a++}else a=null==r||t?1:nativeMax(0,r);return slice(e,a)}var createCallback=require("../functions/createCallback"),slice=require("../internals/slice"),nativeMax=Math.max;module.exports=rest;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays", ["./arrays/compact","./arrays/difference","./arrays/rest","./arrays/findIndex","./arrays/findLastIndex","./arrays/first","./arrays/flatten","./arrays/first","./arrays/indexOf","./arrays/initial","./arrays/intersection","./arrays/last","./arrays/lastIndexOf","./arrays/zipObject","./arrays/pull","./arrays/range","./arrays/remove","./arrays/rest","./arrays/sortedIndex","./arrays/rest","./arrays/first","./arrays/union","./arrays/uniq","./arrays/uniq","./arrays/zip","./arrays/without","./arrays/xor","./arrays/zip","./arrays/zipObject"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern";
  /* */
  "format cjs";module.exports={compact:require("./arrays/compact"),difference:require("./arrays/difference"),drop:require("./arrays/rest"),findIndex:require("./arrays/findIndex"),findLastIndex:require("./arrays/findLastIndex"),first:require("./arrays/first"),flatten:require("./arrays/flatten"),head:require("./arrays/first"),indexOf:require("./arrays/indexOf"),initial:require("./arrays/initial"),intersection:require("./arrays/intersection"),last:require("./arrays/last"),lastIndexOf:require("./arrays/lastIndexOf"),object:require("./arrays/zipObject"),pull:require("./arrays/pull"),range:require("./arrays/range"),remove:require("./arrays/remove"),rest:require("./arrays/rest"),sortedIndex:require("./arrays/sortedIndex"),tail:require("./arrays/rest"),take:require("./arrays/first"),union:require("./arrays/union"),uniq:require("./arrays/uniq"),unique:require("./arrays/uniq"),unzip:require("./arrays/zip"),without:require("./arrays/without"),xor:require("./arrays/xor"),zip:require("./arrays/zip"),zipObject:require("./arrays/zipObject")};
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/index", ["./arrays","./chaining","./collections","./functions","./objects","./utilities","./collections/forEach","./objects/forOwn","./objects/isArray","./internals/lodashWrapper","./utilities/mixin","./support","./utilities/templateSettings"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/index.js";
  var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern";
  /* */
  "format cjs";function lodash(e){return e&&"object"==typeof e&&!isArray(e)&&hasOwnProperty.call(e,"__wrapped__")?e:new lodashWrapper(e)}var arrays=require("./arrays"),chaining=require("./chaining"),collections=require("./collections"),functions=require("./functions"),objects=require("./objects"),utilities=require("./utilities"),forEach=require("./collections/forEach"),forOwn=require("./objects/forOwn"),isArray=require("./objects/isArray"),lodashWrapper=require("./internals/lodashWrapper"),mixin=require("./utilities/mixin"),support=require("./support"),templateSettings=require("./utilities/templateSettings"),arrayRef=[],objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;lodashWrapper.prototype=lodash.prototype,mixin=function(e){var r=objects.functions;return function(t,a,n){return a&&(n||r(a).length)||(null==n&&(n=a),a=t,t=lodash),e(t,a,n)}}(mixin),lodash.after=functions.after,lodash.assign=objects.assign,lodash.at=collections.at,lodash.bind=functions.bind,lodash.bindAll=functions.bindAll,lodash.bindKey=functions.bindKey,lodash.chain=chaining.chain,lodash.compact=arrays.compact,lodash.compose=functions.compose,lodash.constant=utilities.constant,lodash.countBy=collections.countBy,lodash.create=objects.create,lodash.createCallback=functions.createCallback,lodash.curry=functions.curry,lodash.debounce=functions.debounce,lodash.defaults=objects.defaults,lodash.defer=functions.defer,lodash.delay=functions.delay,lodash.difference=arrays.difference,lodash.filter=collections.filter,lodash.flatten=arrays.flatten,lodash.forEach=forEach,lodash.forEachRight=collections.forEachRight,lodash.forIn=objects.forIn,lodash.forInRight=objects.forInRight,lodash.forOwn=forOwn,lodash.forOwnRight=objects.forOwnRight,lodash.functions=objects.functions,lodash.groupBy=collections.groupBy,lodash.indexBy=collections.indexBy,lodash.initial=arrays.initial,lodash.intersection=arrays.intersection,lodash.invert=objects.invert,lodash.invoke=collections.invoke,lodash.keys=objects.keys,lodash.map=collections.map,lodash.mapValues=objects.mapValues,lodash.max=collections.max,lodash.memoize=functions.memoize,lodash.merge=objects.merge,lodash.min=collections.min,lodash.omit=objects.omit,lodash.once=functions.once,lodash.pairs=objects.pairs,lodash.partial=functions.partial,lodash.partialRight=functions.partialRight,lodash.pick=objects.pick,lodash.pluck=collections.pluck,lodash.property=utilities.property,lodash.pull=arrays.pull,lodash.range=arrays.range,lodash.reject=collections.reject,lodash.remove=arrays.remove,lodash.rest=arrays.rest,lodash.shuffle=collections.shuffle,lodash.sortBy=collections.sortBy,lodash.tap=chaining.tap,lodash.throttle=functions.throttle,lodash.times=utilities.times,lodash.toArray=collections.toArray,lodash.transform=objects.transform,lodash.union=arrays.union,lodash.uniq=arrays.uniq,lodash.values=objects.values,lodash.where=collections.where,lodash.without=arrays.without,lodash.wrap=functions.wrap,lodash.xor=arrays.xor,lodash.zip=arrays.zip,lodash.zipObject=arrays.zipObject,lodash.collect=collections.map,lodash.drop=arrays.rest,lodash.each=forEach,lodash.eachRight=collections.forEachRight,lodash.extend=objects.assign,lodash.methods=objects.functions,lodash.object=arrays.zipObject,lodash.select=collections.filter,lodash.tail=arrays.rest,lodash.unique=arrays.uniq,lodash.unzip=arrays.zip,mixin(lodash),lodash.clone=objects.clone,lodash.cloneDeep=objects.cloneDeep,lodash.contains=collections.contains,lodash.escape=utilities.escape,lodash.every=collections.every,lodash.find=collections.find,lodash.findIndex=arrays.findIndex,lodash.findKey=objects.findKey,lodash.findLast=collections.findLast,lodash.findLastIndex=arrays.findLastIndex,lodash.findLastKey=objects.findLastKey,lodash.has=objects.has,lodash.identity=utilities.identity,lodash.indexOf=arrays.indexOf,lodash.isArguments=objects.isArguments,lodash.isArray=isArray,lodash.isBoolean=objects.isBoolean,lodash.isDate=objects.isDate,lodash.isElement=objects.isElement,lodash.isEmpty=objects.isEmpty,lodash.isEqual=objects.isEqual,lodash.isFinite=objects.isFinite,lodash.isFunction=objects.isFunction,lodash.isNaN=objects.isNaN,lodash.isNull=objects.isNull,lodash.isNumber=objects.isNumber,lodash.isObject=objects.isObject,lodash.isPlainObject=objects.isPlainObject,lodash.isRegExp=objects.isRegExp,lodash.isString=objects.isString,lodash.isUndefined=objects.isUndefined,lodash.lastIndexOf=arrays.lastIndexOf,lodash.mixin=mixin,lodash.noConflict=utilities.noConflict,lodash.noop=utilities.noop,lodash.now=utilities.now,lodash.parseInt=utilities.parseInt,lodash.random=utilities.random,lodash.reduce=collections.reduce,lodash.reduceRight=collections.reduceRight,lodash.result=utilities.result,lodash.size=collections.size,lodash.some=collections.some,lodash.sortedIndex=arrays.sortedIndex,lodash.template=utilities.template,lodash.unescape=utilities.unescape,lodash.uniqueId=utilities.uniqueId,lodash.all=collections.every,lodash.any=collections.some,lodash.detect=collections.find,lodash.findWhere=collections.find,lodash.foldl=collections.reduce,lodash.foldr=collections.reduceRight,lodash.include=collections.contains,lodash.inject=collections.reduce,mixin(function(){var e={};return forOwn(lodash,function(r,t){lodash.prototype[t]||(e[t]=r)}),e}(),!1),lodash.first=arrays.first,lodash.last=arrays.last,lodash.sample=collections.sample,lodash.take=arrays.first,lodash.head=arrays.first,forOwn(lodash,function(e,r){var t="sample"!==r;lodash.prototype[r]||(lodash.prototype[r]=function(r,a){var n=this.__chain__,o=e(this.__wrapped__,r,a);return n||null!=r&&(!a||t&&"function"==typeof r)?new lodashWrapper(o,n):o})}),lodash.VERSION="2.4.1",lodash.prototype.chain=chaining.wrapperChain,lodash.prototype.toString=chaining.wrapperToString,lodash.prototype.value=chaining.wrapperValueOf,lodash.prototype.valueOf=chaining.wrapperValueOf,forEach(["join","pop","shift"],function(e){var r=arrayRef[e];lodash.prototype[e]=function(){var e=this.__chain__,t=r.apply(this.__wrapped__,arguments);return e?new lodashWrapper(t,e):t}}),forEach(["push","reverse","sort","unshift"],function(e){var r=arrayRef[e];lodash.prototype[e]=function(){return r.apply(this.__wrapped__,arguments),this}}),forEach(["concat","slice","splice"],function(e){var r=arrayRef[e];lodash.prototype[e]=function(){return new lodashWrapper(r.apply(this.__wrapped__,arguments),this.__chain__)}}),lodash.support=support,(lodash.templateSettings=utilities.templateSettings).imports._=lodash,module.exports=lodash;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:backbone@1.1.2/backbone", ["underscore","github:jspm/nodelibs@0.0.5/process"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/backbone@1.1.2/backbone.js";
  var __dirname = "jspm_packages/npm/backbone@1.1.2";
  /* */
  "format cjs";!function(){!function(t,e){if("function"==typeof define&&define.amd)define(["underscore","jquery","exports"],function(i,s,n){t.Backbone=e(t,n,i,s)});else if("undefined"!=typeof exports){var i=require("underscore");e(t,exports,i)}else t.Backbone=e(t,{},t._,t.jQuery||t.Zepto||t.ender||t.$)}(this,function(t,e,i,s){{var n=t.Backbone,r=[],a=(r.push,r.slice);r.splice}e.VERSION="1.1.2",e.$=s,e.noConflict=function(){return t.Backbone=n,this},e.emulateHTTP=!1,e.emulateJSON=!1;var o=e.Events={on:function(t,e,i){if(!u(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var s=this._events[t]||(this._events[t]=[]);return s.push({callback:e,context:i,ctx:i||this}),this},once:function(t,e,s){if(!u(this,"once",t,[e,s])||!e)return this;var n=this,r=i.once(function(){n.off(t,r),e.apply(this,arguments)});return r._callback=e,this.on(t,r,s)},off:function(t,e,s){var n,r,a,o,h,c,l,d;if(!this._events||!u(this,"off",t,[e,s]))return this;if(!t&&!e&&!s)return this._events=void 0,this;for(o=t?[t]:i.keys(this._events),h=0,c=o.length;c>h;h++)if(t=o[h],a=this._events[t]){if(this._events[t]=n=[],e||s)for(l=0,d=a.length;d>l;l++)r=a[l],(e&&e!==r.callback&&e!==r.callback._callback||s&&s!==r.context)&&n.push(r);n.length||delete this._events[t]}return this},trigger:function(t){if(!this._events)return this;var e=a.call(arguments,1);if(!u(this,"trigger",t,e))return this;var i=this._events[t],s=this._events.all;return i&&c(i,e),s&&c(s,arguments),this},stopListening:function(t,e,s){var n=this._listeningTo;if(!n)return this;var r=!e&&!s;s||"object"!=typeof e||(s=this),t&&((n={})[t._listenId]=t);for(var a in n)t=n[a],t.off(e,s,this),(r||i.isEmpty(t._events))&&delete this._listeningTo[a];return this}},h=/\s+/,u=function(t,e,i,s){if(!i)return!0;if("object"==typeof i){for(var n in i)t[e].apply(t,[n,i[n]].concat(s));return!1}if(h.test(i)){for(var r=i.split(h),a=0,o=r.length;o>a;a++)t[e].apply(t,[r[a]].concat(s));return!1}return!0},c=function(t,e){var i,s=-1,n=t.length,r=e[0],a=e[1],o=e[2];switch(e.length){case 0:for(;++s<n;)(i=t[s]).callback.call(i.ctx);return;case 1:for(;++s<n;)(i=t[s]).callback.call(i.ctx,r);return;case 2:for(;++s<n;)(i=t[s]).callback.call(i.ctx,r,a);return;case 3:for(;++s<n;)(i=t[s]).callback.call(i.ctx,r,a,o);return;default:for(;++s<n;)(i=t[s]).callback.apply(i.ctx,e);return}},l={listenTo:"on",listenToOnce:"once"};i.each(l,function(t,e){o[e]=function(e,s,n){var r=this._listeningTo||(this._listeningTo={}),a=e._listenId||(e._listenId=i.uniqueId("l"));return r[a]=e,n||"object"!=typeof s||(n=this),e[t](s,n,this),this}}),o.bind=o.on,o.unbind=o.off,i.extend(e,o);var d=e.Model=function(t,e){var s=t||{};e||(e={}),this.cid=i.uniqueId("c"),this.attributes={},e.collection&&(this.collection=e.collection),e.parse&&(s=this.parse(s,e)||{}),s=i.defaults({},s,i.result(this,"defaults")),this.set(s,e),this.changed={},this.initialize.apply(this,arguments)};i.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return null!=this.get(t)},set:function(t,e,s){var n,r,a,o,h,u,c,l;if(null==t)return this;if("object"==typeof t?(r=t,s=e):(r={})[t]=e,s||(s={}),!this._validate(r,s))return!1;a=s.unset,h=s.silent,o=[],u=this._changing,this._changing=!0,u||(this._previousAttributes=i.clone(this.attributes),this.changed={}),l=this.attributes,c=this._previousAttributes,this.idAttribute in r&&(this.id=r[this.idAttribute]);for(n in r)e=r[n],i.isEqual(l[n],e)||o.push(n),i.isEqual(c[n],e)?delete this.changed[n]:this.changed[n]=e,a?delete l[n]:l[n]=e;if(!h){o.length&&(this._pending=s);for(var d=0,f=o.length;f>d;d++)this.trigger("change:"+o[d],this,l[o[d]],s)}if(u)return this;if(!h)for(;this._pending;)s=this._pending,this._pending=!1,this.trigger("change",this,s);return this._pending=!1,this._changing=!1,this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:!0}))},clear:function(t){var e={};for(var s in this.attributes)e[s]=void 0;return this.set(e,i.extend({},t,{unset:!0}))},hasChanged:function(t){return null==t?!i.isEmpty(this.changed):i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):!1;var e,s=!1,n=this._changing?this._previousAttributes:this.attributes;for(var r in t)i.isEqual(n[r],e=t[r])||((s||(s={}))[r]=e);return s},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=t?i.clone(t):{},void 0===t.parse&&(t.parse=!0);var e=this,s=t.success;return t.success=function(i){return e.set(e.parse(i,t),t)?(s&&s(e,i,t),void e.trigger("sync",e,i,t)):!1},U(this,t),this.sync("read",this,t)},save:function(t,e,s){var n,r,a,o=this.attributes;if(null==t||"object"==typeof t?(n=t,s=e):(n={})[t]=e,s=i.extend({validate:!0},s),n&&!s.wait){if(!this.set(n,s))return!1}else if(!this._validate(n,s))return!1;n&&s.wait&&(this.attributes=i.extend({},o,n)),void 0===s.parse&&(s.parse=!0);var h=this,u=s.success;return s.success=function(t){h.attributes=o;var e=h.parse(t,s);return s.wait&&(e=i.extend(n||{},e)),i.isObject(e)&&!h.set(e,s)?!1:(u&&u(h,t,s),void h.trigger("sync",h,t,s))},U(this,s),r=this.isNew()?"create":s.patch?"patch":"update","patch"===r&&(s.attrs=n),a=this.sync(r,this,s),n&&s.wait&&(this.attributes=o),a},destroy:function(t){t=t?i.clone(t):{};var e=this,s=t.success,n=function(){e.trigger("destroy",e,e.collection,t)};if(t.success=function(i){(t.wait||e.isNew())&&n(),s&&s(e,i,t),e.isNew()||e.trigger("sync",e,i,t)},this.isNew())return t.success(),!1;U(this,t);var r=this.sync("delete",this,t);return t.wait||n(),r},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||C();return this.isNew()?t:t.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(t){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend(t||{},{validate:!0}))},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=i.extend({},this.attributes,t);var s=this.validationError=this.validate(t,e)||null;return s?(this.trigger("invalid",this,s,i.extend(e,{validationError:s})),!1):!0}});var f=["keys","values","pairs","invert","pick","omit"];i.each(f,function(t){d.prototype[t]=function(){var e=a.call(arguments);return e.unshift(this.attributes),i[t].apply(i,e)}});var p=e.Collection=function(t,e){e||(e={}),e.model&&(this.model=e.model),void 0!==e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,i.extend({silent:!0},e))},g={add:!0,remove:!0,merge:!0},v={add:!0,remove:!1};i.extend(p.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:!1},e,v))},remove:function(t,e){var s=!i.isArray(t);t=s?[t]:i.clone(t),e||(e={});var n,r,a,o;for(n=0,r=t.length;r>n;n++)o=t[n]=this.get(t[n]),o&&(delete this._byId[o.id],delete this._byId[o.cid],a=this.indexOf(o),this.models.splice(a,1),this.length--,e.silent||(e.index=a,o.trigger("remove",o,this,e)),this._removeReference(o,e));return s?t[0]:t},set:function(t,e){e=i.defaults({},e,g),e.parse&&(t=this.parse(t,e));var s=!i.isArray(t);t=s?t?[t]:[]:i.clone(t);var n,r,a,o,h,u,c,l=e.at,f=this.model,p=this.comparator&&null==l&&e.sort!==!1,v=i.isString(this.comparator)?this.comparator:null,m=[],y=[],_={},b=e.add,w=e.merge,x=e.remove,E=!p&&b&&x?[]:!1;for(n=0,r=t.length;r>n;n++){if(h=t[n]||{},a=h instanceof d?o=h:h[f.prototype.idAttribute||"id"],u=this.get(a))x&&(_[u.cid]=!0),w&&(h=h===o?o.attributes:h,e.parse&&(h=u.parse(h,e)),u.set(h,e),p&&!c&&u.hasChanged(v)&&(c=!0)),t[n]=u;else if(b){if(o=t[n]=this._prepareModel(h,e),!o)continue;m.push(o),this._addReference(o,e)}o=u||o,!E||!o.isNew()&&_[o.id]||E.push(o),_[o.id]=!0}if(x){for(n=0,r=this.length;r>n;++n)_[(o=this.models[n]).cid]||y.push(o);y.length&&this.remove(y,e)}if(m.length||E&&E.length)if(p&&(c=!0),this.length+=m.length,null!=l)for(n=0,r=m.length;r>n;n++)this.models.splice(l+n,0,m[n]);else{E&&(this.models.length=0);var k=E||m;for(n=0,r=k.length;r>n;n++)this.models.push(k[n])}if(c&&this.sort({silent:!0}),!e.silent){for(n=0,r=m.length;r>n;n++)(o=m[n]).trigger("add",o,this,e);(c||E&&E.length)&&this.trigger("sort",this,e)}return s?t[0]:t},reset:function(t,e){e||(e={});for(var s=0,n=this.models.length;n>s;s++)this._removeReference(this.models[s],e);return e.previousModels=this.models,this._reset(),t=this.add(t,i.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t),e},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t),e},slice:function(){return a.apply(this.models,arguments)},get:function(t){return null==t?void 0:this._byId[t]||this._byId[t.id]||this._byId[t.cid]},at:function(t){return this.models[t]},where:function(t,e){return i.isEmpty(t)?e?void 0:[]:this[e?"find":"filter"](function(e){for(var i in t)if(t[i]!==e.get(i))return!1;return!0})},findWhere:function(t){return this.where(t,!0)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return t||(t={}),i.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(i.bind(this.comparator,this)),t.silent||this.trigger("sort",this,t),this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=t?i.clone(t):{},void 0===t.parse&&(t.parse=!0);var e=t.success,s=this;return t.success=function(i){var n=t.reset?"reset":"set";s[n](i,t),e&&e(s,i,t),s.trigger("sync",s,i,t)},U(this,t),this.sync("read",this,t)},create:function(t,e){if(e=e?i.clone(e):{},!(t=this._prepareModel(t,e)))return!1;e.wait||this.add(t,e);var s=this,n=e.success;return e.success=function(t,i){e.wait&&s.add(t,e),n&&n(t,i,e)},t.save(null,e),t},parse:function(t){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(t,e){if(t instanceof d)return t;e=e?i.clone(e):{},e.collection=this;var s=new this.model(t,e);return s.validationError?(this.trigger("invalid",this,s.validationError,e),!1):s},_addReference:function(t){this._byId[t.cid]=t,null!=t.id&&(this._byId[t.id]=t),t.collection||(t.collection=this),t.on("all",this._onModelEvent,this)},_removeReference:function(t){this===t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,s){("add"!==t&&"remove"!==t||i===this)&&("destroy"===t&&this.remove(e,s),e&&t==="change:"+e.idAttribute&&(delete this._byId[e.previous(e.idAttribute)],null!=e.id&&(this._byId[e.id]=e)),this.trigger.apply(this,arguments))}});var m=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];i.each(m,function(t){p.prototype[t]=function(){var e=a.call(arguments);return e.unshift(this.models),i[t].apply(i,e)}});var y=["groupBy","countBy","sortBy","indexBy"];i.each(y,function(t){p.prototype[t]=function(e,s){var n=i.isFunction(e)?e:function(t){return t.get(e)};return i[t](this.models,n,s)}});var _=e.View=function(t){this.cid=i.uniqueId("view"),t||(t={}),i.extend(this,i.pick(t,w)),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},b=/^(\S+)\s*(.*)$/,w=["model","collection","el","id","attributes","className","tagName","events"];i.extend(_.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(t,i){return this.$el&&this.undelegateEvents(),this.$el=t instanceof e.$?t:e.$(t),this.el=this.$el[0],i!==!1&&this.delegateEvents(),this},delegateEvents:function(t){if(!t&&!(t=i.result(this,"events")))return this;this.undelegateEvents();for(var e in t){var s=t[e];if(i.isFunction(s)||(s=this[t[e]]),s){var n=e.match(b),r=n[1],a=n[2];s=i.bind(s,this),r+=".delegateEvents"+this.cid,""===a?this.$el.on(r,s):this.$el.on(r,a,s)}}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_ensureElement:function(){if(this.el)this.setElement(i.result(this,"el"),!1);else{var t=i.extend({},i.result(this,"attributes"));this.id&&(t.id=i.result(this,"id")),this.className&&(t["class"]=i.result(this,"className"));var s=e.$("<"+i.result(this,"tagName")+">").attr(t);this.setElement(s,!1)}}}),e.sync=function(t,s,n){var r=E[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:r,dataType:"json"};if(n.url||(a.url=i.result(s,"url")||C()),null!=n.data||!s||"create"!==t&&"update"!==t&&"patch"!==t||(a.contentType="application/json",a.data=JSON.stringify(n.attrs||s.toJSON(n))),n.emulateJSON&&(a.contentType="application/x-www-form-urlencoded",a.data=a.data?{model:a.data}:{}),n.emulateHTTP&&("PUT"===r||"DELETE"===r||"PATCH"===r)){a.type="POST",n.emulateJSON&&(a.data._method=r);var o=n.beforeSend;n.beforeSend=function(t){return t.setRequestHeader("X-HTTP-Method-Override",r),o?o.apply(this,arguments):void 0}}"GET"===a.type||n.emulateJSON||(a.processData=!1),"PATCH"===a.type&&x&&(a.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var h=n.xhr=e.ajax(i.extend(a,n));return s.trigger("request",s,h,n),h};var x=!("undefined"==typeof window||!window.ActiveXObject||window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent),E={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var k=e.Router=function(t){t||(t={}),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},T=/\((.*?)\)/g,$=/(\(\?)?:\w+/g,S=/\*\w+/g,H=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend(k.prototype,o,{initialize:function(){},route:function(t,s,n){i.isRegExp(t)||(t=this._routeToRegExp(t)),i.isFunction(s)&&(n=s,s=""),n||(n=this[s]);var r=this;return e.history.route(t,function(i){var a=r._extractParameters(t,i);r.execute(n,a),r.trigger.apply(r,["route:"+s].concat(a)),r.trigger("route",s,a),e.history.trigger("route",r,s,a)}),this},execute:function(t,e){t&&t.apply(this,e)},navigate:function(t,i){return e.history.navigate(t,i),this},_bindRoutes:function(){if(this.routes){this.routes=i.result(this,"routes");for(var t,e=i.keys(this.routes);null!=(t=e.pop());)this.route(t,this.routes[t])}},_routeToRegExp:function(t){return t=t.replace(H,"\\$&").replace(T,"(?:$1)?").replace($,function(t,e){return e?t:"([^/?]+)"}).replace(S,"([^?]*?)"),new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var s=t.exec(e).slice(1);return i.map(s,function(t,e){return e===s.length-1?t||null:t?decodeURIComponent(t):null})}});var A=e.History=function(){this.handlers=[],i.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},I=/^[#\/]|\s+$/g,N=/^\/+|\/+$/g,R=/msie [\w.]+/,O=/\/$/,P=/#.*$/;A.started=!1,i.extend(A.prototype,o,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(null==t)if(this._hasPushState||!this._wantsHashChange||e){t=decodeURI(this.location.pathname+this.location.search);var i=this.root.replace(O,"");t.indexOf(i)||(t=t.slice(i.length))}else t=this.getHash();return t.replace(I,"")},start:function(t){if(A.started)throw new Error("Backbone.history has already been started");A.started=!0,this.options=i.extend({root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var s=this.getFragment(),n=document.documentMode,r=R.exec(navigator.userAgent.toLowerCase())&&(!n||7>=n);if(this.root=("/"+this.root+"/").replace(N,"/"),r&&this._wantsHashChange){var a=e.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=a.hide().appendTo("body")[0].contentWindow,this.navigate(s)}this._hasPushState?e.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!r?e.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=s;var o=this.location;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot())return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+"#"+this.fragment),!0;this._hasPushState&&this.atRoot()&&o.hash&&(this.fragment=this.getHash().replace(I,""),this.history.replaceState({},document.title,this.root+this.fragment))}return this.options.silent?void 0:this.loadUrl()},stop:function(){e.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),A.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(){var t=this.getFragment();return t===this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe))),t===this.fragment?!1:(this.iframe&&this.navigate(t),void this.loadUrl())},loadUrl:function(t){return t=this.fragment=this.getFragment(t),i.any(this.handlers,function(e){return e.route.test(t)?(e.callback(t),!0):void 0})},navigate:function(t,e){if(!A.started)return!1;e&&e!==!0||(e={trigger:!!e});var i=this.root+(t=this.getFragment(t||""));if(t=t.replace(P,""),this.fragment!==t){if(this.fragment=t,""===t&&"/"!==i&&(i=i.slice(0,-1)),this._hasPushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,i);else{if(!this._wantsHashChange)return this.location.assign(i);this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getFragment(this.getHash(this.iframe))&&(e.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,t,e.replace))}return e.trigger?this.loadUrl(t):void 0}},_updateHash:function(t,e,i){if(i){var s=t.href.replace(/(javascript:|#).*$/,"");t.replace(s+"#"+e)}else t.hash="#"+e}}),e.history=new A;var j=function(t,e){var s,n=this;s=t&&i.has(t,"constructor")?t.constructor:function(){return n.apply(this,arguments)},i.extend(s,n,e);var r=function(){this.constructor=s};return r.prototype=n.prototype,s.prototype=new r,t&&i.extend(s.prototype,t),s.__super__=n.prototype,s};d.extend=p.extend=k.extend=_.extend=A.extend=j;var C=function(){throw new Error('A "url" property or function must be specified')},U=function(t,e){var i=e.error;e.error=function(s){i&&i(t,s,e),t.trigger("error",t,s,e)}};return e})}(require("github:jspm/nodelibs@0.0.5/process"));
  
  global.define = __define;
  return module.exports;
});
