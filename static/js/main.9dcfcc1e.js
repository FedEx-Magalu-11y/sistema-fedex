/*! For license information please see main.9dcfcc1e.js.LICENSE.txt */
(() => {
    "use strict";
    var e = {
        730: (e, t, n) => {
            var r = n(43),
                a = n(853);

            function s(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var o = new Set,
                i = {};

            function l(e, t) {
                c(e, t), c(e + "Capture", t)
            }

            function c(e, t) {
                for (i[e] = t, e = 0; e < t.length; e++) o.add(t[e])
            }
            var u = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                d = Object.prototype.hasOwnProperty,
                h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                f = {},
                p = {};

            function m(e, t, n, r, a, s, o) {
                this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = o
            }
            var g = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                g[e] = new m(e, 0, !1, e, null, !1, !1)
            })), [
                ["acceptCharset", "accept-charset"],
                ["className", "class"],
                ["htmlFor", "for"],
                ["httpEquiv", "http-equiv"]
            ].forEach((function(e) {
                var t = e[0];
                g[t] = new m(t, 1, !1, e[1], null, !1, !1)
            })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1)
            })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                g[e] = new m(e, 2, !1, e, null, !1, !1)
            })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1)
            })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                g[e] = new m(e, 3, !0, e, null, !1, !1)
            })), ["capture", "download"].forEach((function(e) {
                g[e] = new m(e, 4, !1, e, null, !1, !1)
            })), ["cols", "rows", "size", "span"].forEach((function(e) {
                g[e] = new m(e, 6, !1, e, null, !1, !1)
            })), ["rowSpan", "start"].forEach((function(e) {
                g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1)
            }));
            var v = /[\-:]([a-z])/g;

            function y(e) {
                return e[1].toUpperCase()
            }

            function b(e, t, n, r) {
                var a = g.hasOwnProperty(t) ? g[t] : null;
                (null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
                    if (null === t || "undefined" === typeof t || function(e, t, n, r) {
                            if (null !== n && 0 === n.type) return !1;
                            switch (typeof t) {
                                case "function":
                                case "symbol":
                                    return !0;
                                case "boolean":
                                    return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                default:
                                    return !1
                            }
                        }(e, t, n, r)) return !0;
                    if (r) return !1;
                    if (null !== n) switch (n.type) {
                        case 3:
                            return !t;
                        case 4:
                            return !1 === t;
                        case 5:
                            return isNaN(t);
                        case 6:
                            return isNaN(t) || 1 > t
                    }
                    return !1
                }(t, n, a, r) && (n = null), r || null === a ? function(e) {
                    return !!d.call(p, e) || !d.call(f, e) && (h.test(e) ? p[e] = !0 : (f[e] = !0, !1))
                }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                var t = e.replace(v, y);
                g[t] = new m(t, 1, !1, e, null, !1, !1)
            })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                var t = e.replace(v, y);
                g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
            })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                var t = e.replace(v, y);
                g[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
            })), ["tabIndex", "crossOrigin"].forEach((function(e) {
                g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1)
            })), g.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
                g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0)
            }));
            var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                _ = Symbol.for("react.element"),
                k = Symbol.for("react.portal"),
                x = Symbol.for("react.fragment"),
                S = Symbol.for("react.strict_mode"),
                E = Symbol.for("react.profiler"),
                j = Symbol.for("react.provider"),
                T = Symbol.for("react.context"),
                C = Symbol.for("react.forward_ref"),
                N = Symbol.for("react.suspense"),
                R = Symbol.for("react.suspense_list"),
                P = Symbol.for("react.memo"),
                O = Symbol.for("react.lazy");
            Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
            var A = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
            var I = Symbol.iterator;

            function L(e) {
                return null === e || "object" !== typeof e ? null : "function" === typeof(e = I && e[I] || e["@@iterator"]) ? e : null
            }
            var D, U = Object.assign;

            function M(e) {
                if (void 0 === D) try {
                    throw Error()
                } catch (n) {
                    var t = n.stack.trim().match(/\n( *(at )?)/);
                    D = t && t[1] || ""
                }
                return "\n" + D + e
            }
            var z = !1;

            function B(e, t) {
                if (!e || z) return "";
                z = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (t)
                        if (t = function() {
                                throw Error()
                            }, Object.defineProperty(t.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }), "object" === typeof Reflect && Reflect.construct) {
                            try {
                                Reflect.construct(t, [])
                            } catch (c) {
                                var r = c
                            }
                            Reflect.construct(e, [], t)
                        } else {
                            try {
                                t.call()
                            } catch (c) {
                                r = c
                            }
                            e.call(t.prototype)
                        } else {
                        try {
                            throw Error()
                        } catch (c) {
                            r = c
                        }
                        e()
                    }
                } catch (c) {
                    if (c && r && "string" === typeof c.stack) {
                        for (var a = c.stack.split("\n"), s = r.stack.split("\n"), o = a.length - 1, i = s.length - 1; 1 <= o && 0 <= i && a[o] !== s[i];) i--;
                        for (; 1 <= o && 0 <= i; o--, i--)
                            if (a[o] !== s[i]) {
                                if (1 !== o || 1 !== i) do {
                                    if (o--, 0 > --i || a[o] !== s[i]) {
                                        var l = "\n" + a[o].replace(" at new ", " at ");
                                        return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                                    }
                                } while (1 <= o && 0 <= i);
                                break
                            }
                    }
                } finally {
                    z = !1, Error.prepareStackTrace = n
                }
                return (e = e ? e.displayName || e.name : "") ? M(e) : ""
            }

            function F(e) {
                switch (e.tag) {
                    case 5:
                        return M(e.type);
                    case 16:
                        return M("Lazy");
                    case 13:
                        return M("Suspense");
                    case 19:
                        return M("SuspenseList");
                    case 0:
                    case 2:
                    case 15:
                        return e = B(e.type, !1);
                    case 11:
                        return e = B(e.type.render, !1);
                    case 1:
                        return e = B(e.type, !0);
                    default:
                        return ""
                }
            }

            function V(e) {
                if (null == e) return null;
                if ("function" === typeof e) return e.displayName || e.name || null;
                if ("string" === typeof e) return e;
                switch (e) {
                    case x:
                        return "Fragment";
                    case k:
                        return "Portal";
                    case E:
                        return "Profiler";
                    case S:
                        return "StrictMode";
                    case N:
                        return "Suspense";
                    case R:
                        return "SuspenseList"
                }
                if ("object" === typeof e) switch (e.$$typeof) {
                    case T:
                        return (e.displayName || "Context") + ".Consumer";
                    case j:
                        return (e._context.displayName || "Context") + ".Provider";
                    case C:
                        var t = e.render;
                        return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                    case P:
                        return null !== (t = e.displayName || null) ? t : V(e.type) || "Memo";
                    case O:
                        t = e._payload, e = e._init;
                        try {
                            return V(e(t))
                        } catch (n) {}
                }
                return null
            }

            function q(e) {
                var t = e.type;
                switch (e.tag) {
                    case 24:
                        return "Cache";
                    case 9:
                        return (t.displayName || "Context") + ".Consumer";
                    case 10:
                        return (t._context.displayName || "Context") + ".Provider";
                    case 18:
                        return "DehydratedFragment";
                    case 11:
                        return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                    case 7:
                        return "Fragment";
                    case 5:
                        return t;
                    case 4:
                        return "Portal";
                    case 3:
                        return "Root";
                    case 6:
                        return "Text";
                    case 16:
                        return V(t);
                    case 8:
                        return t === S ? "StrictMode" : "Mode";
                    case 22:
                        return "Offscreen";
                    case 12:
                        return "Profiler";
                    case 21:
                        return "Scope";
                    case 13:
                        return "Suspense";
                    case 19:
                        return "SuspenseList";
                    case 25:
                        return "TracingMarker";
                    case 1:
                    case 0:
                    case 17:
                    case 2:
                    case 14:
                    case 15:
                        if ("function" === typeof t) return t.displayName || t.name || null;
                        if ("string" === typeof t) return t
                }
                return null
            }

            function W(e) {
                switch (typeof e) {
                    case "boolean":
                    case "number":
                    case "string":
                    case "undefined":
                    case "object":
                        return e;
                    default:
                        return ""
                }
            }

            function H(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }

            function K(e) {
                e._valueTracker || (e._valueTracker = function(e) {
                    var t = H(e) ? "checked" : "value",
                        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                        r = "" + e[t];
                    if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                        var a = n.get,
                            s = n.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0,
                            get: function() {
                                return a.call(this)
                            },
                            set: function(e) {
                                r = "" + e, s.call(this, e)
                            }
                        }), Object.defineProperty(e, t, {
                            enumerable: n.enumerable
                        }), {
                            getValue: function() {
                                return r
                            },
                            setValue: function(e) {
                                r = "" + e
                            },
                            stopTracking: function() {
                                e._valueTracker = null, delete e[t]
                            }
                        }
                    }
                }(e))
            }

            function G(e) {
                if (!e) return !1;
                var t = e._valueTracker;
                if (!t) return !0;
                var n = t.getValue(),
                    r = "";
                return e && (r = H(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
            }

            function J(e) {
                if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }

            function $(e, t) {
                var n = t.checked;
                return U({}, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != n ? n : e._wrapperState.initialChecked
                })
            }

            function Q(e, t) {
                var n = null == t.defaultValue ? "" : t.defaultValue,
                    r = null != t.checked ? t.checked : t.defaultChecked;
                n = W(null != t.value ? t.value : n), e._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                }
            }

            function Y(e, t) {
                null != (t = t.checked) && b(e, "checked", t, !1)
            }

            function X(e, t) {
                Y(e, t);
                var n = W(t.value),
                    r = t.type;
                if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, W(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
            }

            function Z(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var r = t.type;
                    if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                }
                "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
            }

            function ee(e, t, n) {
                "number" === t && J(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
            }
            var te = Array.isArray;

            function ne(e, t, n, r) {
                if (e = e.options, t) {
                    t = {};
                    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
                    for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + W(n), t = null, a = 0; a < e.length; a++) {
                        if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
                        null !== t || e[a].disabled || (t = e[a])
                    }
                    null !== t && (t.selected = !0)
                }
            }

            function re(e, t) {
                if (null != t.dangerouslySetInnerHTML) throw Error(s(91));
                return U({}, t, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue
                })
            }

            function ae(e, t) {
                var n = t.value;
                if (null == n) {
                    if (n = t.children, t = t.defaultValue, null != n) {
                        if (null != t) throw Error(s(92));
                        if (te(n)) {
                            if (1 < n.length) throw Error(s(93));
                            n = n[0]
                        }
                        t = n
                    }
                    null == t && (t = ""), n = t
                }
                e._wrapperState = {
                    initialValue: W(n)
                }
            }

            function se(e, t) {
                var n = W(t.value),
                    r = W(t.defaultValue);
                null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
            }

            function oe(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
            }

            function ie(e) {
                switch (e) {
                    case "svg":
                        return "http://www.w3.org/2000/svg";
                    case "math":
                        return "http://www.w3.org/1998/Math/MathML";
                    default:
                        return "http://www.w3.org/1999/xhtml"
                }
            }

            function le(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? ie(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
            }
            var ce, ue, de = (ue = function(e, t) {
                if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
                else {
                    for ((ce = ce || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ce.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                    for (; t.firstChild;) e.appendChild(t.firstChild)
                }
            }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                MSApp.execUnsafeLocalFunction((function() {
                    return ue(e, t)
                }))
            } : ue);

            function he(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                }
                e.textContent = t
            }
            var fe = {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            },
                pe = ["Webkit", "ms", "Moz", "O"];

            function me(e, t, n) {
                return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || fe.hasOwnProperty(e) && fe[e] ? ("" + t).trim() : t + "px"
            }

            function ge(e, t) {
                for (var n in e = e.style, t)
                    if (t.hasOwnProperty(n)) {
                        var r = 0 === n.indexOf("--"),
                            a = me(n, t[n], r);
                        "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a
                    }
            }
            Object.keys(fe).forEach((function(e) {
                pe.forEach((function(t) {
                    t = t + e.charAt(0).toUpperCase() + e.substring(1), fe[t] = fe[e]
                }))
            }));
            var ve = U({
                menuitem: !0
            }, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });

            function ye(e, t) {
                if (t) {
                    if (ve[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(s(137, e));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children) throw Error(s(60));
                        if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61))
                    }
                    if (null != t.style && "object" !== typeof t.style) throw Error(s(62))
                }
            }

            function be(e, t) {
                if (-1 === e.indexOf("-")) return "string" === typeof t.is;
                switch (e) {
                    case "annotation-xml":
                    case "color-profile":
                    case "font-face":
                    case "font-face-src":
                    case "font-face-uri":
                    case "font-face-format":
                    case "font-face-name":
                    case "missing-glyph":
                        return !1;
                    default:
                        return !0
                }
            }
            var we = null;

            function _e(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
            }
            var ke = null,
                xe = null,
                Se = null;

            function Ee(e) {
                if (e = ba(e)) {
                    if ("function" !== typeof ke) throw Error(s(280));
                    var t = e.stateNode;
                    t && (t = _a(t), ke(e.stateNode, e.type, t))
                }
            }

            function je(e) {
                xe ? Se ? Se.push(e) : Se = [e] : xe = e
            }

            function Te() {
                if (xe) {
                    var e = xe,
                        t = Se;
                    if (Se = xe = null, Ee(e), t)
                        for (e = 0; e < t.length; e++) Ee(t[e])
                }
            }

            function Ce(e, t) {
                return e(t)
            }

            function Ne() {}
            var Re = !1;

            function Pe(e, t, n) {
                if (Re) return e(t, n);
                Re = !0;
                try {
                    return Ce(e, t, n)
                } finally {
                    Re = !1, (null !== xe || null !== Se) && (Ne(), Te())
                }
            }

            function Oe(e, t) {
                var n = e.stateNode;
                if (null === n) return null;
                var r = _a(n);
                if (null === r) return null;
                n = r[t];
                e: switch (t) {
                    case "onClick":
                    case "onClickCapture":
                    case "onDoubleClick":
                    case "onDoubleClickCapture":
                    case "onMouseDown":
                    case "onMouseDownCapture":
                    case "onMouseMove":
                    case "onMouseMoveCapture":
                    case "onMouseUp":
                    case "onMouseUpCapture":
                    case "onMouseEnter":
                        (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                        break e;
                    default:
                        e = !1
                }
                if (e) return null;
                if (n && "function" !== typeof n) throw Error(s(231, t, typeof n));
                return n
            }
            var Ae = !1;
            if (u) try {
                var Ie = {};
                Object.defineProperty(Ie, "passive", {
                    get: function() {
                        Ae = !0
                    }
                }), window.addEventListener("test", Ie, Ie), window.removeEventListener("test", Ie, Ie)
            } catch (ue) {
                Ae = !1
            }

            function Le(e, t, n, r, a, s, o, i, l) {
                var c = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, c)
                } catch (u) {
                    this.onError(u)
                }
            }
            var De = !1,
                Ue = null,
                Me = !1,
                ze = null,
                Be = {
                    onError: function(e) {
                        De = !0, Ue = e
                    }
                };

            function Fe(e, t, n, r, a, s, o, i, l) {
                De = !1, Ue = null, Le.apply(Be, arguments)
            }

            function Ve(e) {
                var t = e,
                    n = e;
                if (e.alternate)
                    for (; t.return;) t = t.return;
                else {
                    e = t;
                    do {
                        0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return
                    } while (e)
                }
                return 3 === t.tag ? n : null
            }

            function qe(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                }
                return null
            }

            function We(e) {
                if (Ve(e) !== e) throw Error(s(188))
            }

            function He(e) {
                return null !== (e = function(e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = Ve(e))) throw Error(s(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t;;) {
                        var a = n.return;
                        if (null === a) break;
                        var o = a.alternate;
                        if (null === o) {
                            if (null !== (r = a.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (a.child === o.child) {
                            for (o = a.child; o;) {
                                if (o === n) return We(a), e;
                                if (o === r) return We(a), t;
                                o = o.sibling
                            }
                            throw Error(s(188))
                        }
                        if (n.return !== r.return) n = a, r = o;
                        else {
                            for (var i = !1, l = a.child; l;) {
                                if (l === n) {
                                    i = !0, n = a, r = o;
                                    break
                                }
                                if (l === r) {
                                    i = !0, r = a, n = o;
                                    break
                                }
                                l = l.sibling
                            }
                            if (!i) {
                                for (l = o.child; l;) {
                                    if (l === n) {
                                        i = !0, n = o, r = a;
                                        break
                                    }
                                    if (l === r) {
                                        i = !0, r = o, n = a;
                                        break
                                    }
                                    l = l.sibling
                                }
                                if (!i) throw Error(s(189))
                            }
                        }
                        if (n.alternate !== r) throw Error(s(190))
                    }
                    if (3 !== n.tag) throw Error(s(188));
                    return n.stateNode.current === n ? e : t
                }(e)) ? Ke(e) : null
            }

            function Ke(e) {
                if (5 === e.tag || 6 === e.tag) return e;
                for (e = e.child; null !== e;) {
                    var t = Ke(e);
                    if (null !== t) return t;
                    e = e.sibling
                }
                return null
            }
            var Ge = a.unstable_scheduleCallback,
                Je = a.unstable_cancelCallback,
                $e = a.unstable_shouldYield,
                Qe = a.unstable_requestPaint,
                Ye = a.unstable_now,
                Xe = a.unstable_getCurrentPriorityLevel,
                Ze = a.unstable_ImmediatePriority,
                et = a.unstable_UserBlockingPriority,
                tt = a.unstable_NormalPriority,
                nt = a.unstable_LowPriority,
                rt = a.unstable_IdlePriority,
                at = null,
                st = null;
            var ot = Math.clz32 ? Math.clz32 : function(e) {
                    return e >>>= 0, 0 === e ? 32 : 31 - (it(e) / lt | 0) | 0
                },
                it = Math.log,
                lt = Math.LN2;
            var ct = 64,
                ut = 4194304;

            function dt(e) {
                switch (e & -e) {
                    case 1:
                        return 1;
                    case 2:
                        return 2;
                    case 4:
                        return 4;
                    case 8:
                        return 8;
                    case 16:
                        return 16;
                    case 32:
                        return 32;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                        return 4194240 & e;
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        return 130023424 & e;
                    case 134217728:
                        return 134217728;
                    case 268435456:
                        return 268435456;
                    case 536870912:
                        return 536870912;
                    case 1073741824:
                        return 1073741824;
                    default:
                        return e
                }
            }

            function ht(e, t) {
                var n = e.pendingLanes;
                if (0 === n) return 0;
                var r = 0,
                    a = e.suspendedLanes,
                    s = e.pingedLanes,
                    o = 268435455 & n;
                if (0 !== o) {
                    var i = o & ~a;
                    0 !== i ? r = dt(i) : 0 !== (s &= o) && (r = dt(s))
                } else 0 !== (o = n & ~a) ? r = dt(o) : 0 !== s && (r = dt(s));
                if (0 === r) return 0;
                if (0 !== t && t !== r && 0 === (t & a) && ((a = r & -r) >= (s = t & -t) || 16 === a && 0 !== (4194240 & s))) return t;
                if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
                    for (e = e.entanglements, t &= r; 0 < t;) a = 1 << (n = 31 - ot(t)), r |= e[n], t &= ~a;
                return r
            }

            function ft(e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 4:
                        return t + 250;
                    case 8:
                    case 16:
                    case 32:
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                        return t + 5e3;
                    default:
                        return -1
                }
            }

            function pt(e) {
                return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
            }

            function mt() {
                var e = ct;
                return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e
            }

            function gt(e) {
                for (var t = [], n = 0; 31 > n; n++) t.push(e);
                return t
            }

            function vt(e, t, n) {
                e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - ot(t)] = n
            }

            function yt(e, t) {
                var n = e.entangledLanes |= t;
                for (e = e.entanglements; n;) {
                    var r = 31 - ot(n),
                        a = 1 << r;
                    a & t | e[r] & t && (e[r] |= t), n &= ~a
                }
            }
            var bt = 0;

            function wt(e) {
                return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
            }
            var _t, kt, xt, St, Et, jt = !1,
                Tt = [],
                Ct = null,
                Nt = null,
                Rt = null,
                Pt = new Map,
                Ot = new Map,
                At = [],
                It = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

            function Lt(e, t) {
                switch (e) {
                    case "focusin":
                    case "focusout":
                        Ct = null;
                        break;
                    case "dragenter":
                    case "dragleave":
                        Nt = null;
                        break;
                    case "mouseover":
                    case "mouseout":
                        Rt = null;
                        break;
                    case "pointerover":
                    case "pointerout":
                        Pt.delete(t.pointerId);
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                        Ot.delete(t.pointerId)
                }
            }

            function Dt(e, t, n, r, a, s) {
                return null === e || e.nativeEvent !== s ? (e = {
                    blockedOn: t,
                    domEventName: n,
                    eventSystemFlags: r,
                    nativeEvent: s,
                    targetContainers: [a]
                }, null !== t && (null !== (t = ba(t)) && kt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
            }

            function Ut(e) {
                var t = ya(e.target);
                if (null !== t) {
                    var n = Ve(t);
                    if (null !== n)
                        if (13 === (t = n.tag)) {
                            if (null !== (t = qe(n))) return e.blockedOn = t, void Et(e.priority, function() {
                                xt(n)
                            })
                        } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }

            function Mt(e) {
                if (null !== e.blockedOn) return !1;
                for (var t = e.targetContainers; 0 < t.length;) {
                    var n = $t(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                    if (null !== n) return null !== (t = ba(n)) && kt(t), e.blockedOn = n, !1;
                    var r = new(n = e.nativeEvent).constructor(n.type, n);
                    we = r, n.target.dispatchEvent(r), we = null, t.shift()
                }
                return !0
            }

            function zt(e, t, n) {
                Mt(e) && n.delete(t)
            }

            function Bt() {
                jt = !1, null !== Ct && Mt(Ct) && (Ct = null), null !== Nt && Mt(Nt) && (Nt = null), null !== Rt && Mt(Rt) && (Rt = null), Pt.forEach(zt), Ot.forEach(zt)
            }

            function Ft(e, t) {
                e.blockedOn === t && (e.blockedOn = null, jt || (jt = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Bt)))
            }

            function Vt(e) {
                function t(t) {
                    return Ft(t, e)
                }
                if (0 < Tt.length) {
                    Ft(Tt[0], e);
                    for (var n = 1; n < Tt.length; n++) {
                        var r = Tt[n];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                }
                for (null !== Ct && Ft(Ct, e), null !== Nt && Ft(Nt, e), null !== Rt && Ft(Rt, e), Pt.forEach(t), Ot.forEach(t), n = 0; n < At.length; n++)(r = At[n]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < At.length && null === (n = At[0]).blockedOn;) Ut(n), null === n.blockedOn && At.shift()
            }
            var qt = w.ReactCurrentBatchConfig,
                Wt = !0;

            function Ht(e, t, n, r) {
                var a = bt,
                    s = qt.transition;
                qt.transition = null;
                try {
                    bt = 1, Gt(e, t, n, r)
                } finally {
                    bt = a, qt.transition = s
                }
            }

            function Kt(e, t, n, r) {
                var a = bt,
                    s = qt.transition;
                qt.transition = null;
                try {
                    bt = 4, Gt(e, t, n, r)
                } finally {
                    bt = a, qt.transition = s
                }
            }

            function Gt(e, t, n, r) {
                if (Wt) {
                    var a = $t(e, t, n, r);
                    if (null === a) Wr(e, t, r, Jt, n), Lt(e, r);
                    else if (function(e, t, n, r, a) {
                            switch (t) {
                                case "focusin":
                                    return Ct = Dt(Ct, e, t, n, r, a), !0;
                                case "dragenter":
                                    return Nt = Dt(Nt, e, t, n, r, a), !0;
                                case "mouseover":
                                    return Rt = Dt(Rt, e, t, n, r, a), !0;
                                case "pointerover":
                                    var s = a.pointerId;
                                    return Pt.set(s, Dt(Pt.get(s) || null, e, t, n, r, a)), !0;
                                case "gotpointercapture":
                                    return s = a.pointerId, Ot.set(s, Dt(Ot.get(s) || null, e, t, n, r, a)), !0
                            }
                            return !1
                        }(a, e, t, n, r)) r.stopPropagation();
                    else if (Lt(e, r), 4 & t && -1 < It.indexOf(e)) {
                        for (; null !== a;) {
                            var s = ba(a);
                            if (null !== s && _t(s), null === (s = $t(e, t, n, r)) && Wr(e, t, r, Jt, n), s === a) break;
                            a = s
                        }
                        null !== a && r.stopPropagation()
                    } else Wr(e, t, r, null, n)
                }
            }
            var Jt = null;

            function $t(e, t, n, r) {
                if (Jt = null, null !== (e = ya(e = _e(r))))
                    if (null === (t = Ve(e))) e = null;
                    else if (13 === (n = t.tag)) {
                    if (null !== (e = qe(t))) return e;
                    e = null
                } else if (3 === n) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                    e = null
                } else t !== e && (e = null);
                return Jt = e, null
            }

            function Qt(e) {
                switch (e) {
                    case "cancel":
                    case "click":
                    case "close":
                    case "contextmenu":
                    case "copy":
                    case "cut":
                    case "auxclick":
                    case "dblclick":
                    case "dragend":
                    case "dragstart":
                    case "drop":
                    case "focusin":
                    case "focusout":
                    case "input":
                    case "invalid":
                    case "keydown":
                    case "keypress":
                    case "keyup":
                    case "mousedown":
                    case "mouseup":
                    case "paste":
                    case "pause":
                    case "play":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointerup":
                    case "ratechange":
                    case "reset":
                    case "resize":
                    case "seeked":
                    case "submit":
                    case "touchcancel":
                    case "touchend":
                    case "touchstart":
                    case "volumechange":
                    case "change":
                    case "selectionchange":
                    case "textInput":
                    case "compositionstart":
                    case "compositionend":
                    case "compositionupdate":
                    case "beforeblur":
                    case "afterblur":
                    case "beforeinput":
                    case "blur":
                    case "fullscreenchange":
                    case "focus":
                    case "hashchange":
                    case "popstate":
                    case "select":
                    case "selectstart":
                        return 1;
                    case "drag":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "mousemove":
                    case "mouseout":
                    case "mouseover":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "scroll":
                    case "toggle":
                    case "touchmove":
                    case "wheel":
                    case "mouseenter":
                    case "mouseleave":
                    case "pointerenter":
                    case "pointerleave":
                        return 4;
                    case "message":
                        switch (Xe()) {
                            case Ze:
                                return 1;
                            case et:
                                return 4;
                            case tt:
                            case nt:
                                return 16;
                            case rt:
                                return 536870912;
                            default:
                                return 16
                        }
                    default:
                        return 16
                }
            }
            var Yt = null,
                Xt = null,
                Zt = null;

            function en() {
                if (Zt) return Zt;
                var e, t, n = Xt,
                    r = n.length,
                    a = "value" in Yt ? Yt.value : Yt.textContent,
                    s = a.length;
                for (e = 0; e < r && n[e] === a[e]; e++);
                var o = r - e;
                for (t = 1; t <= o && n[r - t] === a[s - t]; t++);
                return Zt = a.slice(e, 1 < t ? 1 - t : void 0)
            }

            function tn(e) {
                var t = e.keyCode;
                return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
            }

            function nn() {
                return !0
            }

            function rn() {
                return !1
            }

            function an(e) {
                function t(t, n, r, a, s) {
                    for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = s, this.currentTarget = null, e)
                        if (e.hasOwnProperty(o)) {
                            t = e[o], this[o] = t ? t(a) : a[o]
                        }
                    return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
                }
                return U(t.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
                    },
                    stopPropagation: function() {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
                    },
                    persist: function() {},
                    isPersistent: nn
                }), t
            }
            var sn, on, ln, cn = {
                    eventPhase: 0,
                    bubbles: 0,
                    cancelable: 0,
                    timeStamp: function(e) {
                        return e.timeStamp || Date.now()
                    },
                    defaultPrevented: 0,
                    isTrusted: 0
                },
                un = an(cn),
                dn = U({}, cn, {
                    view: 0,
                    detail: 0
                }),
                hn = an(dn),
                fn = U({}, dn, {
                    screenX: 0,
                    screenY: 0,
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    getModifierState: En,
                    button: 0,
                    buttons: 0,
                    relatedTarget: function(e) {
                        return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                    },
                    movementX: function(e) {
                        return "movementX" in e ? e.movementX : (e !== ln && (ln && "mousemove" === e.type ? (sn = e.screenX - ln.screenX, on = e.screenY - ln.screenY) : on = sn = 0, ln = e), sn)
                    },
                    movementY: function(e) {
                        return "movementY" in e ? e.movementY : on
                    }
                }),
                pn = an(fn),
                mn = an(U({}, fn, {
                    dataTransfer: 0
                })),
                gn = an(U({}, dn, {
                    relatedTarget: 0
                })),
                vn = an(U({}, cn, {
                    animationName: 0,
                    elapsedTime: 0,
                    pseudoElement: 0
                })),
                yn = U({}, cn, {
                    clipboardData: function(e) {
                        return "clipboardData" in e ? e.clipboardData : window.clipboardData
                    }
                }),
                bn = an(yn),
                wn = an(U({}, cn, {
                    data: 0
                })),
                _n = {
                    Esc: "Escape",
                    Spacebar: " ",
                    Left: "ArrowLeft",
                    Up: "ArrowUp",
                    Right: "ArrowRight",
                    Down: "ArrowDown",
                    Del: "Delete",
                    Win: "OS",
                    Menu: "ContextMenu",
                    Apps: "ContextMenu",
                    Scroll: "ScrollLock",
                    MozPrintableKey: "Unidentified"
                },
                kn = {
                    8: "Backspace",
                    9: "Tab",
                    12: "Clear",
                    13: "Enter",
                    16: "Shift",
                    17: "Control",
                    18: "Alt",
                    19: "Pause",
                    20: "CapsLock",
                    27: "Escape",
                    32: " ",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    45: "Insert",
                    46: "Delete",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "NumLock",
                    145: "ScrollLock",
                    224: "Meta"
                },
                xn = {
                    Alt: "altKey",
                    Control: "ctrlKey",
                    Meta: "metaKey",
                    Shift: "shiftKey"
                };

            function Sn(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = xn[e]) && !!t[e]
            }

            function En() {
                return Sn
            }
            var jn = U({}, dn, {
                    key: function(e) {
                        if (e.key) {
                            var t = _n[e.key] || e.key;
                            if ("Unidentified" !== t) return t
                        }
                        return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? kn[e.keyCode] || "Unidentified" : ""
                    },
                    code: 0,
                    location: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    repeat: 0,
                    locale: 0,
                    getModifierState: En,
                    charCode: function(e) {
                        return "keypress" === e.type ? tn(e) : 0
                    },
                    keyCode: function(e) {
                        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                    },
                    which: function(e) {
                        return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                    }
                }),
                Tn = an(jn),
                Cn = an(U({}, fn, {
                    pointerId: 0,
                    width: 0,
                    height: 0,
                    pressure: 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: 0,
                    pointerType: 0,
                    isPrimary: 0
                })),
                Nn = an(U({}, dn, {
                    touches: 0,
                    targetTouches: 0,
                    changedTouches: 0,
                    altKey: 0,
                    metaKey: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    getModifierState: En
                })),
                Rn = an(U({}, cn, {
                    propertyName: 0,
                    elapsedTime: 0,
                    pseudoElement: 0
                })),
                Pn = U({}, fn, {
                    deltaX: function(e) {
                        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                    },
                    deltaY: function(e) {
                        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                    },
                    deltaZ: 0,
                    deltaMode: 0
                }),
                On = an(Pn),
                An = [9, 13, 27, 32],
                In = u && "CompositionEvent" in window,
                Ln = null;
            u && "documentMode" in document && (Ln = document.documentMode);
            var Dn = u && "TextEvent" in window && !Ln,
                Un = u && (!In || Ln && 8 < Ln && 11 >= Ln),
                Mn = String.fromCharCode(32),
                zn = !1;

            function Bn(e, t) {
                switch (e) {
                    case "keyup":
                        return -1 !== An.indexOf(t.keyCode);
                    case "keydown":
                        return 229 !== t.keyCode;
                    case "keypress":
                    case "mousedown":
                    case "focusout":
                        return !0;
                    default:
                        return !1
                }
            }

            function Fn(e) {
                return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
            }
            var Vn = !1;
            var qn = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };

            function Wn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!qn[e.type] : "textarea" === t
            }

            function Hn(e, t, n, r) {
                je(r), 0 < (t = Kr(t, "onChange")).length && (n = new un("onChange", "change", null, n, r), e.push({
                    event: n,
                    listeners: t
                }))
            }
            var Kn = null,
                Gn = null;

            function Jn(e) {
                Mr(e, 0)
            }

            function $n(e) {
                if (G(wa(e))) return e
            }

            function Qn(e, t) {
                if ("change" === e) return t
            }
            var Yn = !1;
            if (u) {
                var Xn;
                if (u) {
                    var Zn = "oninput" in document;
                    if (!Zn) {
                        var er = document.createElement("div");
                        er.setAttribute("oninput", "return;"), Zn = "function" === typeof er.oninput
                    }
                    Xn = Zn
                } else Xn = !1;
                Yn = Xn && (!document.documentMode || 9 < document.documentMode)
            }

            function tr() {
                Kn && (Kn.detachEvent("onpropertychange", nr), Gn = Kn = null)
            }

            function nr(e) {
                if ("value" === e.propertyName && $n(Gn)) {
                    var t = [];
                    Hn(t, Gn, e, _e(e)), Pe(Jn, t)
                }
            }

            function rr(e, t, n) {
                "focusin" === e ? (tr(), Gn = n, (Kn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
            }

            function ar(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e) return $n(Gn)
            }

            function sr(e, t) {
                if ("click" === e) return $n(t)
            }

            function or(e, t) {
                if ("input" === e || "change" === e) return $n(t)
            }
            var ir = "function" === typeof Object.is ? Object.is : function(e, t) {
                return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
            };

            function lr(e, t) {
                if (ir(e, t)) return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                var n = Object.keys(e),
                    r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (r = 0; r < n.length; r++) {
                    var a = n[r];
                    if (!d.call(t, a) || !ir(e[a], t[a])) return !1
                }
                return !0
            }

            function cr(e) {
                for (; e && e.firstChild;) e = e.firstChild;
                return e
            }

            function ur(e, t) {
                var n, r = cr(e);
                for (e = 0; r;) {
                    if (3 === r.nodeType) {
                        if (n = e + r.textContent.length, e <= t && n >= t) return {
                            node: r,
                            offset: t - e
                        };
                        e = n
                    }
                    e: {
                        for (; r;) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = cr(r)
                }
            }

            function dr(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }

            function hr() {
                for (var e = window, t = J(); t instanceof e.HTMLIFrameElement;) {
                    try {
                        var n = "string" === typeof t.contentWindow.location.href
                    } catch (r) {
                        n = !1
                    }
                    if (!n) break;
                    t = J((e = t.contentWindow).document)
                }
                return t
            }

            function fr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }

            function pr(e) {
                var t = hr(),
                    n = e.focusedElem,
                    r = e.selectionRange;
                if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
                    if (null !== r && fr(n))
                        if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                        else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                        e = e.getSelection();
                        var a = n.textContent.length,
                            s = Math.min(r.start, a);
                        r = void 0 === r.end ? s : Math.min(r.end, a), !e.extend && s > r && (a = r, r = s, s = a), a = ur(n, s);
                        var o = ur(n, r);
                        a && o && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
                    }
                    for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                        element: e,
                        left: e.scrollLeft,
                        top: e.scrollTop
                    });
                    for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                }
            }
            var mr = u && "documentMode" in document && 11 >= document.documentMode,
                gr = null,
                vr = null,
                yr = null,
                br = !1;

            function wr(e, t, n) {
                var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                br || null == gr || gr !== J(r) || ("selectionStart" in (r = gr) && fr(r) ? r = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : r = {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                }, yr && lr(yr, r) || (yr = r, 0 < (r = Kr(vr, "onSelect")).length && (t = new un("onSelect", "select", null, t, n), e.push({
                    event: t,
                    listeners: r
                }), t.target = gr)))
            }

            function _r(e, t) {
                var n = {};
                return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
            }
            var kr = {
                    animationend: _r("Animation", "AnimationEnd"),
                    animationiteration: _r("Animation", "AnimationIteration"),
                    animationstart: _r("Animation", "AnimationStart"),
                    transitionend: _r("Transition", "TransitionEnd")
                },
                xr = {},
                Sr = {};

            function Er(e) {
                if (xr[e]) return xr[e];
                if (!kr[e]) return e;
                var t, n = kr[e];
                for (t in n)
                    if (n.hasOwnProperty(t) && t in Sr) return xr[e] = n[t];
                return e
            }
            u && (Sr = document.createElement("div").style, "AnimationEvent" in window || (delete kr.animationend.animation, delete kr.animationiteration.animation, delete kr.animationstart.animation), "TransitionEvent" in window || delete kr.transitionend.transition);
            var jr = Er("animationend"),
                Tr = Er("animationiteration"),
                Cr = Er("animationstart"),
                Nr = Er("transitionend"),
                Rr = new Map,
                Pr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

            function Or(e, t) {
                Rr.set(e, t), l(t, [e])
            }
            for (var Ar = 0; Ar < Pr.length; Ar++) {
                var Ir = Pr[Ar];
                Or(Ir.toLowerCase(), "on" + (Ir[0].toUpperCase() + Ir.slice(1)))
            }
            Or(jr, "onAnimationEnd"), Or(Tr, "onAnimationIteration"), Or(Cr, "onAnimationStart"), Or("dblclick", "onDoubleClick"), Or("focusin", "onFocus"), Or("focusout", "onBlur"), Or(Nr, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                Dr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));

            function Ur(e, t, n) {
                var r = e.type || "unknown-event";
                e.currentTarget = n, function(e, t, n, r, a, o, i, l, c) {
                    if (Fe.apply(this, arguments), De) {
                        if (!De) throw Error(s(198));
                        var u = Ue;
                        De = !1, Ue = null, Me || (Me = !0, ze = u)
                    }
                }(r, t, void 0, e), e.currentTarget = null
            }

            function Mr(e, t) {
                t = 0 !== (4 & t);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        a = r.event;
                    r = r.listeners;
                    e: {
                        var s = void 0;
                        if (t)
                            for (var o = r.length - 1; 0 <= o; o--) {
                                var i = r[o],
                                    l = i.instance,
                                    c = i.currentTarget;
                                if (i = i.listener, l !== s && a.isPropagationStopped()) break e;
                                Ur(a, i, c), s = l
                            } else
                                for (o = 0; o < r.length; o++) {
                                    if (l = (i = r[o]).instance, c = i.currentTarget, i = i.listener, l !== s && a.isPropagationStopped()) break e;
                                    Ur(a, i, c), s = l
                                }
                    }
                }
                if (Me) throw e = ze, Me = !1, ze = null, e
            }

            function zr(e, t) {
                var n = t[ma];
                void 0 === n && (n = t[ma] = new Set);
                var r = e + "__bubble";
                n.has(r) || (qr(t, e, 2, !1), n.add(r))
            }

            function Br(e, t, n) {
                var r = 0;
                t && (r |= 4), qr(n, e, r, t)
            }
            var Fr = "_reactListening" + Math.random().toString(36).slice(2);

            function Vr(e) {
                if (!e[Fr]) {
                    e[Fr] = !0, o.forEach((function(t) {
                        "selectionchange" !== t && (Dr.has(t) || Br(t, !1, e), Br(t, !0, e))
                    }));
                    var t = 9 === e.nodeType ? e : e.ownerDocument;
                    null === t || t[Fr] || (t[Fr] = !0, Br("selectionchange", !1, t))
                }
            }

            function qr(e, t, n, r) {
                switch (Qt(t)) {
                    case 1:
                        var a = Ht;
                        break;
                    case 4:
                        a = Kt;
                        break;
                    default:
                        a = Gt
                }
                n = a.bind(null, t, n, e), a = void 0, !Ae || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
                    capture: !0,
                    passive: a
                }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
                    passive: a
                }) : e.addEventListener(t, n, !1)
            }

            function Wr(e, t, n, r, a) {
                var s = r;
                if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
                    if (null === r) return;
                    var o = r.tag;
                    if (3 === o || 4 === o) {
                        var i = r.stateNode.containerInfo;
                        if (i === a || 8 === i.nodeType && i.parentNode === a) break;
                        if (4 === o)
                            for (o = r.return; null !== o;) {
                                var l = o.tag;
                                if ((3 === l || 4 === l) && ((l = o.stateNode.containerInfo) === a || 8 === l.nodeType && l.parentNode === a)) return;
                                o = o.return
                            }
                        for (; null !== i;) {
                            if (null === (o = ya(i))) return;
                            if (5 === (l = o.tag) || 6 === l) {
                                r = s = o;
                                continue e
                            }
                            i = i.parentNode
                        }
                    }
                    r = r.return
                }
                Pe((function() {
                    var r = s,
                        a = _e(n),
                        o = [];
                    e: {
                        var i = Rr.get(e);
                        if (void 0 !== i) {
                            var l = un,
                                c = e;
                            switch (e) {
                                case "keypress":
                                    if (0 === tn(n)) break e;
                                case "keydown":
                                case "keyup":
                                    l = Tn;
                                    break;
                                case "focusin":
                                    c = "focus", l = gn;
                                    break;
                                case "focusout":
                                    c = "blur", l = gn;
                                    break;
                                case "beforeblur":
                                case "afterblur":
                                    l = gn;
                                    break;
                                case "click":
                                    if (2 === n.button) break e;
                                case "auxclick":
                                case "dblclick":
                                case "mousedown":
                                case "mousemove":
                                case "mouseup":
                                case "mouseout":
                                case "mouseover":
                                case "contextmenu":
                                    l = pn;
                                    break;
                                case "drag":
                                case "dragend":
                                case "dragenter":
                                case "dragexit":
                                case "dragleave":
                                case "dragover":
                                case "dragstart":
                                case "drop":
                                    l = mn;
                                    break;
                                case "touchcancel":
                                case "touchend":
                                case "touchmove":
                                case "touchstart":
                                    l = Nn;
                                    break;
                                case jr:
                                case Tr:
                                case Cr:
                                    l = vn;
                                    break;
                                case Nr:
                                    l = Rn;
                                    break;
                                case "scroll":
                                    l = hn;
                                    break;
                                case "wheel":
                                    l = On;
                                    break;
                                case "copy":
                                case "cut":
                                case "paste":
                                    l = bn;
                                    break;
                                case "gotpointercapture":
                                case "lostpointercapture":
                                case "pointercancel":
                                case "pointerdown":
                                case "pointermove":
                                case "pointerout":
                                case "pointerover":
                                case "pointerup":
                                    l = Cn
                            }
                            var u = 0 !== (4 & t),
                                d = !u && "scroll" === e,
                                h = u ? null !== i ? i + "Capture" : null : i;
                            u = [];
                            for (var f, p = r; null !== p;) {
                                var m = (f = p).stateNode;
                                if (5 === f.tag && null !== m && (f = m, null !== h && (null != (m = Oe(p, h)) && u.push(Hr(p, m, f)))), d) break;
                                p = p.return
                            }
                            0 < u.length && (i = new l(i, c, null, n, a), o.push({
                                event: i,
                                listeners: u
                            }))
                        }
                    }
                    if (0 === (7 & t)) {
                        if (l = "mouseout" === e || "pointerout" === e, (!(i = "mouseover" === e || "pointerover" === e) || n === we || !(c = n.relatedTarget || n.fromElement) || !ya(c) && !c[pa]) && (l || i) && (i = a.window === a ? a : (i = a.ownerDocument) ? i.defaultView || i.parentWindow : window, l ? (l = r, null !== (c = (c = n.relatedTarget || n.toElement) ? ya(c) : null) && (c !== (d = Ve(c)) || 5 !== c.tag && 6 !== c.tag) && (c = null)) : (l = null, c = r), l !== c)) {
                            if (u = pn, m = "onMouseLeave", h = "onMouseEnter", f = "mouse", "pointerout" !== e && "pointerover" !== e || (u = Cn, m = "onPointerLeave", h = "onPointerEnter", f = "pointer"), d = null == l ? i : wa(l), p = null == c ? i : wa(c), (i = new u(m, f + "leave", l, n, a)).target = d, i.relatedTarget = p, m = null, ya(a) === r && ((u = new u(h, f + "enter", c, n, a)).target = p, u.relatedTarget = d, m = u), d = m, l && c) e: {
                                for (h = c, f = 0, p = u = l; p; p = Gr(p)) f++;
                                for (p = 0, m = h; m; m = Gr(m)) p++;
                                for (; 0 < f - p;) u = Gr(u), f--;
                                for (; 0 < p - f;) h = Gr(h), p--;
                                for (; f--;) {
                                    if (u === h || null !== h && u === h.alternate) break e;
                                    u = Gr(u), h = Gr(h)
                                }
                                u = null
                            } else u = null;
                            null !== l && Jr(o, i, l, u, !1), null !== c && null !== d && Jr(o, d, c, u, !0)
                        }
                        if ("select" === (l = (i = r ? wa(r) : window).nodeName && i.nodeName.toLowerCase()) || "input" === l && "file" === i.type) var g = Qn;
                        else if (Wn(i))
                            if (Yn) g = or;
                            else {
                                g = ar;
                                var v = rr
                            } else(l = i.nodeName) && "input" === l.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (g = sr);
                        switch (g && (g = g(e, r)) ? Hn(o, g, n, a) : (v && v(e, i, r), "focusout" === e && (v = i._wrapperState) && v.controlled && "number" === i.type && ee(i, "number", i.value)), v = r ? wa(r) : window, e) {
                            case "focusin":
                                (Wn(v) || "true" === v.contentEditable) && (gr = v, vr = r, yr = null);
                                break;
                            case "focusout":
                                yr = vr = gr = null;
                                break;
                            case "mousedown":
                                br = !0;
                                break;
                            case "contextmenu":
                            case "mouseup":
                            case "dragend":
                                br = !1, wr(o, n, a);
                                break;
                            case "selectionchange":
                                if (mr) break;
                            case "keydown":
                            case "keyup":
                                wr(o, n, a)
                        }
                        var y;
                        if (In) e: {
                            switch (e) {
                                case "compositionstart":
                                    var b = "onCompositionStart";
                                    break e;
                                case "compositionend":
                                    b = "onCompositionEnd";
                                    break e;
                                case "compositionupdate":
                                    b = "onCompositionUpdate";
                                    break e
                            }
                            b = void 0
                        } else Vn ? Bn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                        b && (Un && "ko" !== n.locale && (Vn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Vn && (y = en()) : (Xt = "value" in (Yt = a) ? Yt.value : Yt.textContent, Vn = !0)), 0 < (v = Kr(r, b)).length && (b = new wn(b, e, null, n, a), o.push({
                            event: b,
                            listeners: v
                        }), y ? b.data = y : null !== (y = Fn(n)) && (b.data = y))), (y = Dn ? function(e, t) {
                            switch (e) {
                                case "compositionend":
                                    return Fn(t);
                                case "keypress":
                                    return 32 !== t.which ? null : (zn = !0, Mn);
                                case "textInput":
                                    return (e = t.data) === Mn && zn ? null : e;
                                default:
                                    return null
                            }
                        }(e, n) : function(e, t) {
                            if (Vn) return "compositionend" === e || !In && Bn(e, t) ? (e = en(), Zt = Xt = Yt = null, Vn = !1, e) : null;
                            switch (e) {
                                case "paste":
                                default:
                                    return null;
                                case "keypress":
                                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                        if (t.char && 1 < t.char.length) return t.char;
                                        if (t.which) return String.fromCharCode(t.which)
                                    }
                                    return null;
                                case "compositionend":
                                    return Un && "ko" !== t.locale ? null : t.data
                            }
                        }(e, n)) && 0 < (r = Kr(r, "onBeforeInput")).length && (a = new wn("onBeforeInput", "beforeinput", null, n, a), o.push({
                            event: a,
                            listeners: r
                        }), a.data = y)
                    }
                    Mr(o, t)
                }))
            }

            function Hr(e, t, n) {
                return {
                    instance: e,
                    listener: t,
                    currentTarget: n
                }
            }

            function Kr(e, t) {
                for (var n = t + "Capture", r = []; null !== e;) {
                    var a = e,
                        s = a.stateNode;
                    5 === a.tag && null !== s && (a = s, null != (s = Oe(e, n)) && r.unshift(Hr(e, s, a)), null != (s = Oe(e, t)) && r.push(Hr(e, s, a))), e = e.return
                }
                return r
            }

            function Gr(e) {
                if (null === e) return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }

            function Jr(e, t, n, r, a) {
                for (var s = t._reactName, o = []; null !== n && n !== r;) {
                    var i = n,
                        l = i.alternate,
                        c = i.stateNode;
                    if (null !== l && l === r) break;
                    5 === i.tag && null !== c && (i = c, a ? null != (l = Oe(n, s)) && o.unshift(Hr(n, l, i)) : a || null != (l = Oe(n, s)) && o.push(Hr(n, l, i))), n = n.return
                }
                0 !== o.length && e.push({
                    event: t,
                    listeners: o
                })
            }
            var $r = /\r\n?/g,
                Qr = /\u0000|\uFFFD/g;

            function Yr(e) {
                return ("string" === typeof e ? e : "" + e).replace($r, "\n").replace(Qr, "")
            }

            function Xr(e, t, n) {
                if (t = Yr(t), Yr(e) !== t && n) throw Error(s(425))
            }

            function Zr() {}
            var ea = null,
                ta = null;

            function na(e, t) {
                return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }
            var ra = "function" === typeof setTimeout ? setTimeout : void 0,
                aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
                sa = "function" === typeof Promise ? Promise : void 0,
                oa = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof sa ? function(e) {
                    return sa.resolve(null).then(e).catch(ia)
                } : ra;

            function ia(e) {
                setTimeout((function() {
                    throw e
                }))
            }

            function la(e, t) {
                var n = t,
                    r = 0;
                do {
                    var a = n.nextSibling;
                    if (e.removeChild(n), a && 8 === a.nodeType)
                        if ("/$" === (n = a.data)) {
                            if (0 === r) return e.removeChild(a), void Vt(t);
                            r--
                        } else "$" !== n && "$?" !== n && "$!" !== n || r++;
                    n = a
                } while (n);
                Vt(t)
            }

            function ca(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t) break;
                    if (8 === t) {
                        if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                        if ("/$" === t) return null
                    }
                }
                return e
            }

            function ua(e) {
                e = e.previousSibling;
                for (var t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t) return e;
                            t--
                        } else "/$" === n && t++
                    }
                    e = e.previousSibling
                }
                return null
            }
            var da = Math.random().toString(36).slice(2),
                ha = "__reactFiber$" + da,
                fa = "__reactProps$" + da,
                pa = "__reactContainer$" + da,
                ma = "__reactEvents$" + da,
                ga = "__reactListeners$" + da,
                va = "__reactHandles$" + da;

            function ya(e) {
                var t = e[ha];
                if (t) return t;
                for (var n = e.parentNode; n;) {
                    if (t = n[pa] || n[ha]) {
                        if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                            for (e = ua(e); null !== e;) {
                                if (n = e[ha]) return n;
                                e = ua(e)
                            }
                        return t
                    }
                    n = (e = n).parentNode
                }
                return null
            }

            function ba(e) {
                return !(e = e[ha] || e[pa]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }

            function wa(e) {
                if (5 === e.tag || 6 === e.tag) return e.stateNode;
                throw Error(s(33))
            }

            function _a(e) {
                return e[fa] || null
            }
            var ka = [],
                xa = -1;

            function Sa(e) {
                return {
                    current: e
                }
            }

            function Ea(e) {
                0 > xa || (e.current = ka[xa], ka[xa] = null, xa--)
            }

            function ja(e, t) {
                xa++, ka[xa] = e.current, e.current = t
            }
            var Ta = {},
                Ca = Sa(Ta),
                Na = Sa(!1),
                Ra = Ta;

            function Pa(e, t) {
                var n = e.type.contextTypes;
                if (!n) return Ta;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                var a, s = {};
                for (a in n) s[a] = t[a];
                return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s
            }

            function Oa(e) {
                return null !== (e = e.childContextTypes) && void 0 !== e
            }

            function Aa() {
                Ea(Na), Ea(Ca)
            }

            function Ia(e, t, n) {
                if (Ca.current !== Ta) throw Error(s(168));
                ja(Ca, t), ja(Na, n)
            }

            function La(e, t, n) {
                var r = e.stateNode;
                if (t = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
                for (var a in r = r.getChildContext())
                    if (!(a in t)) throw Error(s(108, q(e) || "Unknown", a));
                return U({}, n, r)
            }

            function Da(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ta, Ra = Ca.current, ja(Ca, e), ja(Na, Na.current), !0
            }

            function Ua(e, t, n) {
                var r = e.stateNode;
                if (!r) throw Error(s(169));
                n ? (e = La(e, t, Ra), r.__reactInternalMemoizedMergedChildContext = e, Ea(Na), Ea(Ca), ja(Ca, e)) : Ea(Na), ja(Na, n)
            }
            var Ma = null,
                za = !1,
                Ba = !1;

            function Fa(e) {
                null === Ma ? Ma = [e] : Ma.push(e)
            }

            function Va() {
                if (!Ba && null !== Ma) {
                    Ba = !0;
                    var e = 0,
                        t = bt;
                    try {
                        var n = Ma;
                        for (bt = 1; e < n.length; e++) {
                            var r = n[e];
                            do {
                                r = r(!0)
                            } while (null !== r)
                        }
                        Ma = null, za = !1
                    } catch (a) {
                        throw null !== Ma && (Ma = Ma.slice(e + 1)), Ge(Ze, Va), a
                    } finally {
                        bt = t, Ba = !1
                    }
                }
                return null
            }
            var qa = [],
                Wa = 0,
                Ha = null,
                Ka = 0,
                Ga = [],
                Ja = 0,
                $a = null,
                Qa = 1,
                Ya = "";

            function Xa(e, t) {
                qa[Wa++] = Ka, qa[Wa++] = Ha, Ha = e, Ka = t
            }

            function Za(e, t, n) {
                Ga[Ja++] = Qa, Ga[Ja++] = Ya, Ga[Ja++] = $a, $a = e;
                var r = Qa;
                e = Ya;
                var a = 32 - ot(r) - 1;
                r &= ~(1 << a), n += 1;
                var s = 32 - ot(t) + a;
                if (30 < s) {
                    var o = a - a % 5;
                    s = (r & (1 << o) - 1).toString(32), r >>= o, a -= o, Qa = 1 << 32 - ot(t) + a | n << a | r, Ya = s + e
                } else Qa = 1 << s | n << a | r, Ya = e
            }

            function es(e) {
                null !== e.return && (Xa(e, 1), Za(e, 1, 0))
            }

            function ts(e) {
                for (; e === Ha;) Ha = qa[--Wa], qa[Wa] = null, Ka = qa[--Wa], qa[Wa] = null;
                for (; e === $a;) $a = Ga[--Ja], Ga[Ja] = null, Ya = Ga[--Ja], Ga[Ja] = null, Qa = Ga[--Ja], Ga[Ja] = null
            }
            var ns = null,
                rs = null,
                as = !1,
                ss = null;

            function os(e, t) {
                var n = Rc(5, null, null, 0);
                n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
            }

            function is(e, t) {
                switch (e.tag) {
                    case 5:
                        var n = e.type;
                        return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, ns = e, rs = ca(t.firstChild), !0);
                    case 6:
                        return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, ns = e, rs = null, !0);
                    case 13:
                        return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== $a ? {
                            id: Qa,
                            overflow: Ya
                        } : null, e.memoizedState = {
                            dehydrated: t,
                            treeContext: n,
                            retryLane: 1073741824
                        }, (n = Rc(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, ns = e, rs = null, !0);
                    default:
                        return !1
                }
            }

            function ls(e) {
                return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
            }

            function cs(e) {
                if (as) {
                    var t = rs;
                    if (t) {
                        var n = t;
                        if (!is(e, t)) {
                            if (ls(e)) throw Error(s(418));
                            t = ca(n.nextSibling);
                            var r = ns;
                            t && is(e, t) ? os(r, n) : (e.flags = -4097 & e.flags | 2, as = !1, ns = e)
                        }
                    } else {
                        if (ls(e)) throw Error(s(418));
                        e.flags = -4097 & e.flags | 2, as = !1, ns = e
                    }
                }
            }

            function us(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                ns = e
            }

            function ds(e) {
                if (e !== ns) return !1;
                if (!as) return us(e), as = !0, !1;
                var t;
                if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)), t && (t = rs)) {
                    if (ls(e)) throw hs(), Error(s(418));
                    for (; t;) os(e, t), t = ca(t.nextSibling)
                }
                if (us(e), 13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(s(317));
                    e: {
                        for (e = e.nextSibling, t = 0; e;) {
                            if (8 === e.nodeType) {
                                var n = e.data;
                                if ("/$" === n) {
                                    if (0 === t) {
                                        rs = ca(e.nextSibling);
                                        break e
                                    }
                                    t--
                                } else "$" !== n && "$!" !== n && "$?" !== n || t++
                            }
                            e = e.nextSibling
                        }
                        rs = null
                    }
                } else rs = ns ? ca(e.stateNode.nextSibling) : null;
                return !0
            }

            function hs() {
                for (var e = rs; e;) e = ca(e.nextSibling)
            }

            function fs() {
                rs = ns = null, as = !1
            }

            function ps(e) {
                null === ss ? ss = [e] : ss.push(e)
            }
            var ms = w.ReactCurrentBatchConfig;

            function gs(e, t, n) {
                if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                    if (n._owner) {
                        if (n = n._owner) {
                            if (1 !== n.tag) throw Error(s(309));
                            var r = n.stateNode
                        }
                        if (!r) throw Error(s(147, e));
                        var a = r,
                            o = "" + e;
                        return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === o ? t.ref : (t = function(e) {
                            var t = a.refs;
                            null === e ? delete t[o] : t[o] = e
                        }, t._stringRef = o, t)
                    }
                    if ("string" !== typeof e) throw Error(s(284));
                    if (!n._owner) throw Error(s(290, e))
                }
                return e
            }

            function vs(e, t) {
                throw e = Object.prototype.toString.call(t), Error(s(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
            }

            function ys(e) {
                return (0, e._init)(e._payload)
            }

            function bs(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.deletions;
                        null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                    }
                }

                function n(n, r) {
                    if (!e) return null;
                    for (; null !== r;) t(n, r), r = r.sibling;
                    return null
                }

                function r(e, t) {
                    for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                    return e
                }

                function a(e, t) {
                    return (e = Oc(e, t)).index = 0, e.sibling = null, e
                }

                function o(t, n, r) {
                    return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
                }

                function i(t) {
                    return e && null === t.alternate && (t.flags |= 2), t
                }

                function l(e, t, n, r) {
                    return null === t || 6 !== t.tag ? ((t = Dc(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
                }

                function c(e, t, n, r) {
                    var s = n.type;
                    return s === x ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === s || "object" === typeof s && null !== s && s.$$typeof === O && ys(s) === t.type) ? ((r = a(t, n.props)).ref = gs(e, t, n), r.return = e, r) : ((r = Ac(n.type, n.key, n.props, null, e.mode, r)).ref = gs(e, t, n), r.return = e, r)
                }

                function u(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Uc(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
                }

                function d(e, t, n, r, s) {
                    return null === t || 7 !== t.tag ? ((t = Ic(n, e.mode, r, s)).return = e, t) : ((t = a(t, n)).return = e, t)
                }

                function h(e, t, n) {
                    if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = Dc("" + t, e.mode, n)).return = e, t;
                    if ("object" === typeof t && null !== t) {
                        switch (t.$$typeof) {
                            case _:
                                return (n = Ac(t.type, t.key, t.props, null, e.mode, n)).ref = gs(e, null, t), n.return = e, n;
                            case k:
                                return (t = Uc(t, e.mode, n)).return = e, t;
                            case O:
                                return h(e, (0, t._init)(t._payload), n)
                        }
                        if (te(t) || L(t)) return (t = Ic(t, e.mode, n, null)).return = e, t;
                        vs(e, t)
                    }
                    return null
                }

                function f(e, t, n, r) {
                    var a = null !== t ? t.key : null;
                    if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== a ? null : l(e, t, "" + n, r);
                    if ("object" === typeof n && null !== n) {
                        switch (n.$$typeof) {
                            case _:
                                return n.key === a ? c(e, t, n, r) : null;
                            case k:
                                return n.key === a ? u(e, t, n, r) : null;
                            case O:
                                return f(e, t, (a = n._init)(n._payload), r)
                        }
                        if (te(n) || L(n)) return null !== a ? null : d(e, t, n, r, null);
                        vs(e, n)
                    }
                    return null
                }

                function p(e, t, n, r, a) {
                    if ("string" === typeof r && "" !== r || "number" === typeof r) return l(t, e = e.get(n) || null, "" + r, a);
                    if ("object" === typeof r && null !== r) {
                        switch (r.$$typeof) {
                            case _:
                                return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                            case k:
                                return u(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                            case O:
                                return p(e, t, n, (0, r._init)(r._payload), a)
                        }
                        if (te(r) || L(r)) return d(t, e = e.get(n) || null, r, a, null);
                        vs(t, r)
                    }
                    return null
                }

                function m(a, s, i, l) {
                    for (var c = null, u = null, d = s, m = s = 0, g = null; null !== d && m < i.length; m++) {
                        d.index > m ? (g = d, d = null) : g = d.sibling;
                        var v = f(a, d, i[m], l);
                        if (null === v) {
                            null === d && (d = g);
                            break
                        }
                        e && d && null === v.alternate && t(a, d), s = o(v, s, m), null === u ? c = v : u.sibling = v, u = v, d = g
                    }
                    if (m === i.length) return n(a, d), as && Xa(a, m), c;
                    if (null === d) {
                        for (; m < i.length; m++) null !== (d = h(a, i[m], l)) && (s = o(d, s, m), null === u ? c = d : u.sibling = d, u = d);
                        return as && Xa(a, m), c
                    }
                    for (d = r(a, d); m < i.length; m++) null !== (g = p(d, a, m, i[m], l)) && (e && null !== g.alternate && d.delete(null === g.key ? m : g.key), s = o(g, s, m), null === u ? c = g : u.sibling = g, u = g);
                    return e && d.forEach((function(e) {
                        return t(a, e)
                    })), as && Xa(a, m), c
                }

                function g(a, i, l, c) {
                    var u = L(l);
                    if ("function" !== typeof u) throw Error(s(150));
                    if (null == (l = u.call(l))) throw Error(s(151));
                    for (var d = u = null, m = i, g = i = 0, v = null, y = l.next(); null !== m && !y.done; g++, y = l.next()) {
                        m.index > g ? (v = m, m = null) : v = m.sibling;
                        var b = f(a, m, y.value, c);
                        if (null === b) {
                            null === m && (m = v);
                            break
                        }
                        e && m && null === b.alternate && t(a, m), i = o(b, i, g), null === d ? u = b : d.sibling = b, d = b, m = v
                    }
                    if (y.done) return n(a, m), as && Xa(a, g), u;
                    if (null === m) {
                        for (; !y.done; g++, y = l.next()) null !== (y = h(a, y.value, c)) && (i = o(y, i, g), null === d ? u = y : d.sibling = y, d = y);
                        return as && Xa(a, g), u
                    }
                    for (m = r(a, m); !y.done; g++, y = l.next()) null !== (y = p(m, a, g, y.value, c)) && (e && null !== y.alternate && m.delete(null === y.key ? g : y.key), i = o(y, i, g), null === d ? u = y : d.sibling = y, d = y);
                    return e && m.forEach((function(e) {
                        return t(a, e)
                    })), as && Xa(a, g), u
                }
                return function e(r, s, o, l) {
                    if ("object" === typeof o && null !== o && o.type === x && null === o.key && (o = o.props.children), "object" === typeof o && null !== o) {
                        switch (o.$$typeof) {
                            case _:
                                e: {
                                    for (var c = o.key, u = s; null !== u;) {
                                        if (u.key === c) {
                                            if ((c = o.type) === x) {
                                                if (7 === u.tag) {
                                                    n(r, u.sibling), (s = a(u, o.props.children)).return = r, r = s;
                                                    break e
                                                }
                                            } else if (u.elementType === c || "object" === typeof c && null !== c && c.$$typeof === O && ys(c) === u.type) {
                                                n(r, u.sibling), (s = a(u, o.props)).ref = gs(r, u, o), s.return = r, r = s;
                                                break e
                                            }
                                            n(r, u);
                                            break
                                        }
                                        t(r, u), u = u.sibling
                                    }
                                    o.type === x ? ((s = Ic(o.props.children, r.mode, l, o.key)).return = r, r = s) : ((l = Ac(o.type, o.key, o.props, null, r.mode, l)).ref = gs(r, s, o), l.return = r, r = l)
                                }
                                return i(r);
                            case k:
                                e: {
                                    for (u = o.key; null !== s;) {
                                        if (s.key === u) {
                                            if (4 === s.tag && s.stateNode.containerInfo === o.containerInfo && s.stateNode.implementation === o.implementation) {
                                                n(r, s.sibling), (s = a(s, o.children || [])).return = r, r = s;
                                                break e
                                            }
                                            n(r, s);
                                            break
                                        }
                                        t(r, s), s = s.sibling
                                    }
                                    (s = Uc(o, r.mode, l)).return = r, r = s
                                }
                                return i(r);
                            case O:
                                return e(r, s, (u = o._init)(o._payload), l)
                        }
                        if (te(o)) return m(r, s, o, l);
                        if (L(o)) return g(r, s, o, l);
                        vs(r, o)
                    }
                    return "string" === typeof o && "" !== o || "number" === typeof o ? (o = "" + o, null !== s && 6 === s.tag ? (n(r, s.sibling), (s = a(s, o)).return = r, r = s) : (n(r, s), (s = Dc(o, r.mode, l)).return = r, r = s), i(r)) : n(r, s)
                }
            }
            var ws = bs(!0),
                _s = bs(!1),
                ks = Sa(null),
                xs = null,
                Ss = null,
                Es = null;

            function js() {
                Es = Ss = xs = null
            }

            function Ts(e) {
                var t = ks.current;
                Ea(ks), e._currentValue = t
            }

            function Cs(e, t, n) {
                for (; null !== e;) {
                    var r = e.alternate;
                    if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                    e = e.return
                }
            }

            function Ns(e, t) {
                xs = e, Es = Ss = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (bi = !0), e.firstContext = null)
            }

            function Rs(e) {
                var t = e._currentValue;
                if (Es !== e)
                    if (e = {
                            context: e,
                            memoizedValue: t,
                            next: null
                        }, null === Ss) {
                        if (null === xs) throw Error(s(308));
                        Ss = e, xs.dependencies = {
                            lanes: 0,
                            firstContext: e
                        }
                    } else Ss = Ss.next = e;
                return t
            }
            var Ps = null;

            function Os(e) {
                null === Ps ? Ps = [e] : Ps.push(e)
            }

            function As(e, t, n, r) {
                var a = t.interleaved;
                return null === a ? (n.next = n, Os(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Is(e, r)
            }

            function Is(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                return 3 === n.tag ? n.stateNode : null
            }
            var Ls = !1;

            function Ds(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null,
                        interleaved: null,
                        lanes: 0
                    },
                    effects: null
                }
            }

            function Us(e, t) {
                e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects
                })
            }

            function Ms(e, t) {
                return {
                    eventTime: e,
                    lane: t,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                }
            }

            function zs(e, t, n) {
                var r = e.updateQueue;
                if (null === r) return null;
                if (r = r.shared, 0 !== (2 & Tl)) {
                    var a = r.pending;
                    return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Is(e, n)
                }
                return null === (a = r.interleaved) ? (t.next = t, Os(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Is(e, n)
            }

            function Bs(e, t, n) {
                if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
                }
            }

            function Fs(e, t) {
                var n = e.updateQueue,
                    r = e.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var a = null,
                        s = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var o = {
                                eventTime: n.eventTime,
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: n.callback,
                                next: null
                            };
                            null === s ? a = s = o : s = s.next = o, n = n.next
                        } while (null !== n);
                        null === s ? a = s = t : s = s.next = t
                    } else a = s = t;
                    return n = {
                        baseState: r.baseState,
                        firstBaseUpdate: a,
                        lastBaseUpdate: s,
                        shared: r.shared,
                        effects: r.effects
                    }, void(e.updateQueue = n)
                }
                null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
            }

            function Vs(e, t, n, r) {
                var a = e.updateQueue;
                Ls = !1;
                var s = a.firstBaseUpdate,
                    o = a.lastBaseUpdate,
                    i = a.shared.pending;
                if (null !== i) {
                    a.shared.pending = null;
                    var l = i,
                        c = l.next;
                    l.next = null, null === o ? s = c : o.next = c, o = l;
                    var u = e.alternate;
                    null !== u && ((i = (u = u.updateQueue).lastBaseUpdate) !== o && (null === i ? u.firstBaseUpdate = c : i.next = c, u.lastBaseUpdate = l))
                }
                if (null !== s) {
                    var d = a.baseState;
                    for (o = 0, u = c = l = null, i = s;;) {
                        var h = i.lane,
                            f = i.eventTime;
                        if ((r & h) === h) {
                            null !== u && (u = u.next = {
                                eventTime: f,
                                lane: 0,
                                tag: i.tag,
                                payload: i.payload,
                                callback: i.callback,
                                next: null
                            });
                            e: {
                                var p = e,
                                    m = i;
                                switch (h = t, f = n, m.tag) {
                                    case 1:
                                        if ("function" === typeof(p = m.payload)) {
                                            d = p.call(f, d, h);
                                            break e
                                        }
                                        d = p;
                                        break e;
                                    case 3:
                                        p.flags = -65537 & p.flags | 128;
                                    case 0:
                                        if (null === (h = "function" === typeof(p = m.payload) ? p.call(f, d, h) : p) || void 0 === h) break e;
                                        d = U({}, d, h);
                                        break e;
                                    case 2:
                                        Ls = !0
                                }
                            }
                            null !== i.callback && 0 !== i.lane && (e.flags |= 64, null === (h = a.effects) ? a.effects = [i] : h.push(i))
                        } else f = {
                            eventTime: f,
                            lane: h,
                            tag: i.tag,
                            payload: i.payload,
                            callback: i.callback,
                            next: null
                        }, null === u ? (c = u = f, l = d) : u = u.next = f, o |= h;
                        if (null === (i = i.next)) {
                            if (null === (i = a.shared.pending)) break;
                            i = (h = i).next, h.next = null, a.lastBaseUpdate = h, a.shared.pending = null
                        }
                    }
                    if (null === u && (l = d), a.baseState = l, a.firstBaseUpdate = c, a.lastBaseUpdate = u, null !== (t = a.shared.interleaved)) {
                        a = t;
                        do {
                            o |= a.lane, a = a.next
                        } while (a !== t)
                    } else null === s && (a.shared.lanes = 0);
                    Ll |= o, e.lanes = o, e.memoizedState = d
                }
            }

            function qs(e, t, n) {
                if (e = t.effects, t.effects = null, null !== e)
                    for (t = 0; t < e.length; t++) {
                        var r = e[t],
                            a = r.callback;
                        if (null !== a) {
                            if (r.callback = null, r = n, "function" !== typeof a) throw Error(s(191, a));
                            a.call(r)
                        }
                    }
            }
            var Ws = {},
                Hs = Sa(Ws),
                Ks = Sa(Ws),
                Gs = Sa(Ws);

            function Js(e) {
                if (e === Ws) throw Error(s(174));
                return e
            }

            function $s(e, t) {
                switch (ja(Gs, t), ja(Ks, e), ja(Hs, Ws), e = t.nodeType) {
                    case 9:
                    case 11:
                        t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
                        break;
                    default:
                        t = le(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                }
                Ea(Hs), ja(Hs, t)
            }

            function Qs() {
                Ea(Hs), Ea(Ks), Ea(Gs)
            }

            function Ys(e) {
                Js(Gs.current);
                var t = Js(Hs.current),
                    n = le(t, e.type);
                t !== n && (ja(Ks, e), ja(Hs, n))
            }

            function Xs(e) {
                Ks.current === e && (Ea(Hs), Ea(Ks))
            }
            var Zs = Sa(0);

            function eo(e) {
                for (var t = e; null !== t;) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 !== (128 & t.flags)) return t
                    } else if (null !== t.child) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break;
                    for (; null === t.sibling;) {
                        if (null === t.return || t.return === e) return null;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
                return null
            }
            var to = [];

            function no() {
                for (var e = 0; e < to.length; e++) to[e]._workInProgressVersionPrimary = null;
                to.length = 0
            }
            var ro = w.ReactCurrentDispatcher,
                ao = w.ReactCurrentBatchConfig,
                so = 0,
                oo = null,
                io = null,
                lo = null,
                co = !1,
                uo = !1,
                ho = 0,
                fo = 0;

            function po() {
                throw Error(s(321))
            }

            function mo(e, t) {
                if (null === t) return !1;
                for (var n = 0; n < t.length && n < e.length; n++)
                    if (!ir(e[n], t[n])) return !1;
                return !0
            }

            function go(e, t, n, r, a, o) {
                if (so = o, oo = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ro.current = null === e || null === e.memoizedState ? Zo : ei, e = n(r, a), uo) {
                    o = 0;
                    do {
                        if (uo = !1, ho = 0, 25 <= o) throw Error(s(301));
                        o += 1, lo = io = null, t.updateQueue = null, ro.current = ti, e = n(r, a)
                    } while (uo)
                }
                if (ro.current = Xo, t = null !== io && null !== io.next, so = 0, lo = io = oo = null, co = !1, t) throw Error(s(300));
                return e
            }

            function vo() {
                var e = 0 !== ho;
                return ho = 0, e
            }

            function yo() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                return null === lo ? oo.memoizedState = lo = e : lo = lo.next = e, lo
            }

            function bo() {
                if (null === io) {
                    var e = oo.alternate;
                    e = null !== e ? e.memoizedState : null
                } else e = io.next;
                var t = null === lo ? oo.memoizedState : lo.next;
                if (null !== t) lo = t, io = e;
                else {
                    if (null === e) throw Error(s(310));
                    e = {
                        memoizedState: (io = e).memoizedState,
                        baseState: io.baseState,
                        baseQueue: io.baseQueue,
                        queue: io.queue,
                        next: null
                    }, null === lo ? oo.memoizedState = lo = e : lo = lo.next = e
                }
                return lo
            }

            function wo(e, t) {
                return "function" === typeof t ? t(e) : t
            }

            function _o(e) {
                var t = bo(),
                    n = t.queue;
                if (null === n) throw Error(s(311));
                n.lastRenderedReducer = e;
                var r = io,
                    a = r.baseQueue,
                    o = n.pending;
                if (null !== o) {
                    if (null !== a) {
                        var i = a.next;
                        a.next = o.next, o.next = i
                    }
                    r.baseQueue = a = o, n.pending = null
                }
                if (null !== a) {
                    o = a.next, r = r.baseState;
                    var l = i = null,
                        c = null,
                        u = o;
                    do {
                        var d = u.lane;
                        if ((so & d) === d) null !== c && (c = c.next = {
                            lane: 0,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null
                        }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
                        else {
                            var h = {
                                lane: d,
                                action: u.action,
                                hasEagerState: u.hasEagerState,
                                eagerState: u.eagerState,
                                next: null
                            };
                            null === c ? (l = c = h, i = r) : c = c.next = h, oo.lanes |= d, Ll |= d
                        }
                        u = u.next
                    } while (null !== u && u !== o);
                    null === c ? i = r : c.next = l, ir(r, t.memoizedState) || (bi = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = c, n.lastRenderedState = r
                }
                if (null !== (e = n.interleaved)) {
                    a = e;
                    do {
                        o = a.lane, oo.lanes |= o, Ll |= o, a = a.next
                    } while (a !== e)
                } else null === a && (n.lanes = 0);
                return [t.memoizedState, n.dispatch]
            }

            function ko(e) {
                var t = bo(),
                    n = t.queue;
                if (null === n) throw Error(s(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch,
                    a = n.pending,
                    o = t.memoizedState;
                if (null !== a) {
                    n.pending = null;
                    var i = a = a.next;
                    do {
                        o = e(o, i.action), i = i.next
                    } while (i !== a);
                    ir(o, t.memoizedState) || (bi = !0), t.memoizedState = o, null === t.baseQueue && (t.baseState = o), n.lastRenderedState = o
                }
                return [o, r]
            }

            function xo() {}

            function So(e, t) {
                var n = oo,
                    r = bo(),
                    a = t(),
                    o = !ir(r.memoizedState, a);
                if (o && (r.memoizedState = a, bi = !0), r = r.queue, Do(To.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || null !== lo && 1 & lo.memoizedState.tag) {
                    if (n.flags |= 2048, Po(9, jo.bind(null, n, r, a, t), void 0, null), null === Cl) throw Error(s(349));
                    0 !== (30 & so) || Eo(n, t, a)
                }
                return a
            }

            function Eo(e, t, n) {
                e.flags |= 16384, e = {
                    getSnapshot: t,
                    value: n
                }, null === (t = oo.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                }, oo.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
            }

            function jo(e, t, n, r) {
                t.value = n, t.getSnapshot = r, Co(t) && No(e)
            }

            function To(e, t, n) {
                return n((function() {
                    Co(t) && No(e)
                }))
            }

            function Co(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !ir(e, n)
                } catch (r) {
                    return !0
                }
            }

            function No(e) {
                var t = Is(e, 1);
                null !== t && tc(t, e, 1, -1)
            }

            function Ro(e) {
                var t = yo();
                return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: wo,
                    lastRenderedState: e
                }, t.queue = e, e = e.dispatch = Jo.bind(null, oo, e), [t.memoizedState, e]
            }

            function Po(e, t, n, r) {
                return e = {
                    tag: e,
                    create: t,
                    destroy: n,
                    deps: r,
                    next: null
                }, null === (t = oo.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                }, oo.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
            }

            function Oo() {
                return bo().memoizedState
            }

            function Ao(e, t, n, r) {
                var a = yo();
                oo.flags |= e, a.memoizedState = Po(1 | t, n, void 0, void 0 === r ? null : r)
            }

            function Io(e, t, n, r) {
                var a = bo();
                r = void 0 === r ? null : r;
                var s = void 0;
                if (null !== io) {
                    var o = io.memoizedState;
                    if (s = o.destroy, null !== r && mo(r, o.deps)) return void(a.memoizedState = Po(t, n, s, r))
                }
                oo.flags |= e, a.memoizedState = Po(1 | t, n, s, r)
            }

            function Lo(e, t) {
                return Ao(8390656, 8, e, t)
            }

            function Do(e, t) {
                return Io(2048, 8, e, t)
            }

            function Uo(e, t) {
                return Io(4, 2, e, t)
            }

            function Mo(e, t) {
                return Io(4, 4, e, t)
            }

            function zo(e, t) {
                return "function" === typeof t ? (e = e(), t(e), function() {
                    t(null)
                }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function() {
                    t.current = null
                }) : void 0
            }

            function Bo(e, t, n) {
                return n = null !== n && void 0 !== n ? n.concat([e]) : null, Io(4, 4, zo.bind(null, t, e), n)
            }

            function Fo() {}

            function Vo(e, t) {
                var n = bo();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && mo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
            }

            function qo(e, t) {
                var n = bo();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && mo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
            }

            function Wo(e, t, n) {
                return 0 === (21 & so) ? (e.baseState && (e.baseState = !1, bi = !0), e.memoizedState = n) : (ir(n, t) || (n = mt(), oo.lanes |= n, Ll |= n, e.baseState = !0), t)
            }

            function Ho(e, t) {
                var n = bt;
                bt = 0 !== n && 4 > n ? n : 4, e(!0);
                var r = ao.transition;
                ao.transition = {};
                try {
                    e(!1), t()
                } finally {
                    bt = n, ao.transition = r
                }
            }

            function Ko() {
                return bo().memoizedState
            }

            function Go(e, t, n) {
                var r = ec(e);
                if (n = {
                        lane: r,
                        action: n,
                        hasEagerState: !1,
                        eagerState: null,
                        next: null
                    }, $o(e)) Qo(t, n);
                else if (null !== (n = As(e, t, n, r))) {
                    tc(n, e, r, Zl()), Yo(n, t, r)
                }
            }

            function Jo(e, t, n) {
                var r = ec(e),
                    a = {
                        lane: r,
                        action: n,
                        hasEagerState: !1,
                        eagerState: null,
                        next: null
                    };
                if ($o(e)) Qo(t, a);
                else {
                    var s = e.alternate;
                    if (0 === e.lanes && (null === s || 0 === s.lanes) && null !== (s = t.lastRenderedReducer)) try {
                        var o = t.lastRenderedState,
                            i = s(o, n);
                        if (a.hasEagerState = !0, a.eagerState = i, ir(i, o)) {
                            var l = t.interleaved;
                            return null === l ? (a.next = a, Os(t)) : (a.next = l.next, l.next = a), void(t.interleaved = a)
                        }
                    } catch (c) {}
                    null !== (n = As(e, t, a, r)) && (tc(n, e, r, a = Zl()), Yo(n, t, r))
                }
            }

            function $o(e) {
                var t = e.alternate;
                return e === oo || null !== t && t === oo
            }

            function Qo(e, t) {
                uo = co = !0;
                var n = e.pending;
                null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
            }

            function Yo(e, t, n) {
                if (0 !== (4194240 & n)) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
                }
            }
            var Xo = {
                    readContext: Rs,
                    useCallback: po,
                    useContext: po,
                    useEffect: po,
                    useImperativeHandle: po,
                    useInsertionEffect: po,
                    useLayoutEffect: po,
                    useMemo: po,
                    useReducer: po,
                    useRef: po,
                    useState: po,
                    useDebugValue: po,
                    useDeferredValue: po,
                    useTransition: po,
                    useMutableSource: po,
                    useSyncExternalStore: po,
                    useId: po,
                    unstable_isNewReconciler: !1
                },
                Zo = {
                    readContext: Rs,
                    useCallback: function(e, t) {
                        return yo().memoizedState = [e, void 0 === t ? null : t], e
                    },
                    useContext: Rs,
                    useEffect: Lo,
                    useImperativeHandle: function(e, t, n) {
                        return n = null !== n && void 0 !== n ? n.concat([e]) : null, Ao(4194308, 4, zo.bind(null, t, e), n)
                    },
                    useLayoutEffect: function(e, t) {
                        return Ao(4194308, 4, e, t)
                    },
                    useInsertionEffect: function(e, t) {
                        return Ao(4, 2, e, t)
                    },
                    useMemo: function(e, t) {
                        var n = yo();
                        return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                    },
                    useReducer: function(e, t, n) {
                        var r = yo();
                        return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                            pending: null,
                            interleaved: null,
                            lanes: 0,
                            dispatch: null,
                            lastRenderedReducer: e,
                            lastRenderedState: t
                        }, r.queue = e, e = e.dispatch = Go.bind(null, oo, e), [r.memoizedState, e]
                    },
                    useRef: function(e) {
                        return e = {
                            current: e
                        }, yo().memoizedState = e
                    },
                    useState: Ro,
                    useDebugValue: Fo,
                    useDeferredValue: function(e) {
                        return yo().memoizedState = e
                    },
                    useTransition: function() {
                        var e = Ro(!1),
                            t = e[0];
                        return e = Ho.bind(null, e[1]), yo().memoizedState = e, [t, e]
                    },
                    useMutableSource: function() {},
                    useSyncExternalStore: function(e, t, n) {
                        var r = oo,
                            a = yo();
                        if (as) {
                            if (void 0 === n) throw Error(s(407));
                            n = n()
                        } else {
                            if (n = t(), null === Cl) throw Error(s(349));
                            0 !== (30 & so) || Eo(r, t, n)
                        }
                        a.memoizedState = n;
                        var o = {
                            value: n,
                            getSnapshot: t
                        };
                        return a.queue = o, Lo(To.bind(null, r, o, e), [e]), r.flags |= 2048, Po(9, jo.bind(null, r, o, n, t), void 0, null), n
                    },
                    useId: function() {
                        var e = yo(),
                            t = Cl.identifierPrefix;
                        if (as) {
                            var n = Ya;
                            t = ":" + t + "R" + (n = (Qa & ~(1 << 32 - ot(Qa) - 1)).toString(32) + n), 0 < (n = ho++) && (t += "H" + n.toString(32)), t += ":"
                        } else t = ":" + t + "r" + (n = fo++).toString(32) + ":";
                        return e.memoizedState = t
                    },
                    unstable_isNewReconciler: !1
                },
                ei = {
                    readContext: Rs,
                    useCallback: Vo,
                    useContext: Rs,
                    useEffect: Do,
                    useImperativeHandle: Bo,
                    useInsertionEffect: Uo,
                    useLayoutEffect: Mo,
                    useMemo: qo,
                    useReducer: _o,
                    useRef: Oo,
                    useState: function() {
                        return _o(wo)
                    },
                    useDebugValue: Fo,
                    useDeferredValue: function(e) {
                        return Wo(bo(), io.memoizedState, e)
                    },
                    useTransition: function() {
                        return [_o(wo)[0], bo().memoizedState]
                    },
                    useMutableSource: xo,
                    useSyncExternalStore: So,
                    useId: Ko,
                    unstable_isNewReconciler: !1
                },
                ti = {
                    readContext: Rs,
                    useCallback: Vo,
                    useContext: Rs,
                    useEffect: Do,
                    useImperativeHandle: Bo,
                    useInsertionEffect: Uo,
                    useLayoutEffect: Mo,
                    useMemo: qo,
                    useReducer: ko,
                    useRef: Oo,
                    useState: function() {
                        return ko(wo)
                    },
                    useDebugValue: Fo,
                    useDeferredValue: function(e) {
                        var t = bo();
                        return null === io ? t.memoizedState = e : Wo(t, io.memoizedState, e)
                    },
                    useTransition: function() {
                        return [ko(wo)[0], bo().memoizedState]
                    },
                    useMutableSource: xo,
                    useSyncExternalStore: So,
                    useId: Ko,
                    unstable_isNewReconciler: !1
                };

            function ni(e, t) {
                if (e && e.defaultProps) {
                    for (var n in t = U({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                    return t
                }
                return t
            }

            function ri(e, t, n, r) {
                n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : U({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
            }
            var ai = {
                isMounted: function(e) {
                    return !!(e = e._reactInternals) && Ve(e) === e
                },
                enqueueSetState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = Zl(),
                        a = ec(e),
                        s = Ms(r, a);
                    s.payload = t, void 0 !== n && null !== n && (s.callback = n), null !== (t = zs(e, s, a)) && (tc(t, e, a, r), Bs(t, e, a))
                },
                enqueueReplaceState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = Zl(),
                        a = ec(e),
                        s = Ms(r, a);
                    s.tag = 1, s.payload = t, void 0 !== n && null !== n && (s.callback = n), null !== (t = zs(e, s, a)) && (tc(t, e, a, r), Bs(t, e, a))
                },
                enqueueForceUpdate: function(e, t) {
                    e = e._reactInternals;
                    var n = Zl(),
                        r = ec(e),
                        a = Ms(n, r);
                    a.tag = 2, void 0 !== t && null !== t && (a.callback = t), null !== (e = zs(e, a, r)) && (tc(e, e, r, n), Bs(e, e, r))
                }
            };

            function si(e, t, n, r, a, s, o) {
                return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, s, o) : !t.prototype || !t.prototype.isPureReactComponent || (!lr(n, r) || !lr(a, s))
            }

            function oi(e, t, n) {
                var r = !1,
                    a = Ta,
                    s = t.contextType;
                return "object" === typeof s && null !== s ? s = Rs(s) : (a = Oa(t) ? Ra : Ca.current, s = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Pa(e, a) : Ta), t = new t(n, s), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = ai, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = s), t
            }

            function ii(e, t, n, r) {
                e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ai.enqueueReplaceState(t, t.state, null)
            }

            function li(e, t, n, r) {
                var a = e.stateNode;
                a.props = n, a.state = e.memoizedState, a.refs = {}, Ds(e);
                var s = t.contextType;
                "object" === typeof s && null !== s ? a.context = Rs(s) : (s = Oa(t) ? Ra : Ca.current, a.context = Pa(e, s)), a.state = e.memoizedState, "function" === typeof(s = t.getDerivedStateFromProps) && (ri(e, t, s, n), a.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (t = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && ai.enqueueReplaceState(a, a.state, null), Vs(e, n, a, r), a.state = e.memoizedState), "function" === typeof a.componentDidMount && (e.flags |= 4194308)
            }

            function ci(e, t) {
                try {
                    var n = "",
                        r = t;
                    do {
                        n += F(r), r = r.return
                    } while (r);
                    var a = n
                } catch (s) {
                    a = "\nError generating stack: " + s.message + "\n" + s.stack
                }
                return {
                    value: e,
                    source: t,
                    stack: a,
                    digest: null
                }
            }

            function ui(e, t, n) {
                return {
                    value: e,
                    source: null,
                    stack: null != n ? n : null,
                    digest: null != t ? t : null
                }
            }

            function di(e, t) {
                try {
                    console.error(t.value)
                } catch (n) {
                    setTimeout((function() {
                        throw n
                    }))
                }
            }
            var hi = "function" === typeof WeakMap ? WeakMap : Map;

            function fi(e, t, n) {
                (n = Ms(-1, n)).tag = 3, n.payload = {
                    element: null
                };
                var r = t.value;
                return n.callback = function() {
                    ql || (ql = !0, Wl = r), di(0, t)
                }, n
            }

            function pi(e, t, n) {
                (n = Ms(-1, n)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" === typeof r) {
                    var a = t.value;
                    n.payload = function() {
                        return r(a)
                    }, n.callback = function() {
                        di(0, t)
                    }
                }
                var s = e.stateNode;
                return null !== s && "function" === typeof s.componentDidCatch && (n.callback = function() {
                    di(0, t), "function" !== typeof r && (null === Hl ? Hl = new Set([this]) : Hl.add(this));
                    var e = t.stack;
                    this.componentDidCatch(t.value, {
                        componentStack: null !== e ? e : ""
                    })
                }), n
            }

            function mi(e, t, n) {
                var r = e.pingCache;
                if (null === r) {
                    r = e.pingCache = new hi;
                    var a = new Set;
                    r.set(t, a)
                } else void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a));
                a.has(n) || (a.add(n), e = Sc.bind(null, e, t, n), t.then(e, e))
            }

            function gi(e) {
                do {
                    var t;
                    if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                    e = e.return
                } while (null !== e);
                return null
            }

            function vi(e, t, n, r, a) {
                return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Ms(-1, 1)).tag = 2, zs(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e)
            }
            var yi = w.ReactCurrentOwner,
                bi = !1;

            function wi(e, t, n, r) {
                t.child = null === e ? _s(t, null, n, r) : ws(t, e.child, n, r)
            }

            function _i(e, t, n, r, a) {
                n = n.render;
                var s = t.ref;
                return Ns(t, a), r = go(e, t, n, r, s, a), n = vo(), null === e || bi ? (as && n && es(t), t.flags |= 1, wi(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, qi(e, t, a))
            }

            function ki(e, t, n, r, a) {
                if (null === e) {
                    var s = n.type;
                    return "function" !== typeof s || Pc(s) || void 0 !== s.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Ac(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = s, xi(e, t, s, r, a))
                }
                if (s = e.child, 0 === (e.lanes & a)) {
                    var o = s.memoizedProps;
                    if ((n = null !== (n = n.compare) ? n : lr)(o, r) && e.ref === t.ref) return qi(e, t, a)
                }
                return t.flags |= 1, (e = Oc(s, r)).ref = t.ref, e.return = t, t.child = e
            }

            function xi(e, t, n, r, a) {
                if (null !== e) {
                    var s = e.memoizedProps;
                    if (lr(s, r) && e.ref === t.ref) {
                        if (bi = !1, t.pendingProps = r = s, 0 === (e.lanes & a)) return t.lanes = e.lanes, qi(e, t, a);
                        0 !== (131072 & e.flags) && (bi = !0)
                    }
                }
                return ji(e, t, n, r, a)
            }

            function Si(e, t, n) {
                var r = t.pendingProps,
                    a = r.children,
                    s = null !== e ? e.memoizedState : null;
                if ("hidden" === r.mode)
                    if (0 === (1 & t.mode)) t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null,
                        transitions: null
                    }, ja(Ol, Pl), Pl |= n;
                    else {
                        if (0 === (1073741824 & n)) return e = null !== s ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                            baseLanes: e,
                            cachePool: null,
                            transitions: null
                        }, t.updateQueue = null, ja(Ol, Pl), Pl |= e, null;
                        t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        }, r = null !== s ? s.baseLanes : n, ja(Ol, Pl), Pl |= r
                    } else null !== s ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, ja(Ol, Pl), Pl |= r;
                return wi(e, t, a, n), t.child
            }

            function Ei(e, t) {
                var n = t.ref;
                (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
            }

            function ji(e, t, n, r, a) {
                var s = Oa(n) ? Ra : Ca.current;
                return s = Pa(t, s), Ns(t, a), n = go(e, t, n, r, s, a), r = vo(), null === e || bi ? (as && r && es(t), t.flags |= 1, wi(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, qi(e, t, a))
            }

            function Ti(e, t, n, r, a) {
                if (Oa(n)) {
                    var s = !0;
                    Da(t)
                } else s = !1;
                if (Ns(t, a), null === t.stateNode) Vi(e, t), oi(t, n, r), li(t, n, r, a), r = !0;
                else if (null === e) {
                    var o = t.stateNode,
                        i = t.memoizedProps;
                    o.props = i;
                    var l = o.context,
                        c = n.contextType;
                    "object" === typeof c && null !== c ? c = Rs(c) : c = Pa(t, c = Oa(n) ? Ra : Ca.current);
                    var u = n.getDerivedStateFromProps,
                        d = "function" === typeof u || "function" === typeof o.getSnapshotBeforeUpdate;
                    d || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (i !== r || l !== c) && ii(t, o, r, c), Ls = !1;
                    var h = t.memoizedState;
                    o.state = h, Vs(t, r, o, a), l = t.memoizedState, i !== r || h !== l || Na.current || Ls ? ("function" === typeof u && (ri(t, n, u, r), l = t.memoizedState), (i = Ls || si(t, n, i, r, h, l, c)) ? (d || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || ("function" === typeof o.componentWillMount && o.componentWillMount(), "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" === typeof o.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof o.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), o.props = r, o.state = l, o.context = c, r = i) : ("function" === typeof o.componentDidMount && (t.flags |= 4194308), r = !1)
                } else {
                    o = t.stateNode, Us(e, t), i = t.memoizedProps, c = t.type === t.elementType ? i : ni(t.type, i), o.props = c, d = t.pendingProps, h = o.context, "object" === typeof(l = n.contextType) && null !== l ? l = Rs(l) : l = Pa(t, l = Oa(n) ? Ra : Ca.current);
                    var f = n.getDerivedStateFromProps;
                    (u = "function" === typeof f || "function" === typeof o.getSnapshotBeforeUpdate) || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (i !== d || h !== l) && ii(t, o, r, l), Ls = !1, h = t.memoizedState, o.state = h, Vs(t, r, o, a);
                    var p = t.memoizedState;
                    i !== d || h !== p || Na.current || Ls ? ("function" === typeof f && (ri(t, n, f, r), p = t.memoizedState), (c = Ls || si(t, n, c, r, h, p, l) || !1) ? (u || "function" !== typeof o.UNSAFE_componentWillUpdate && "function" !== typeof o.componentWillUpdate || ("function" === typeof o.componentWillUpdate && o.componentWillUpdate(r, p, l), "function" === typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, p, l)), "function" === typeof o.componentDidUpdate && (t.flags |= 4), "function" === typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof o.componentDidUpdate || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), "function" !== typeof o.getSnapshotBeforeUpdate || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), o.props = r, o.state = p, o.context = l, r = c) : ("function" !== typeof o.componentDidUpdate || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), "function" !== typeof o.getSnapshotBeforeUpdate || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
                }
                return Ci(e, t, n, r, s, a)
            }

            function Ci(e, t, n, r, a, s) {
                Ei(e, t);
                var o = 0 !== (128 & t.flags);
                if (!r && !o) return a && Ua(t, n, !1), qi(e, t, s);
                r = t.stateNode, yi.current = t;
                var i = o && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                return t.flags |= 1, null !== e && o ? (t.child = ws(t, e.child, null, s), t.child = ws(t, null, i, s)) : wi(e, t, i, s), t.memoizedState = r.state, a && Ua(t, n, !0), t.child
            }

            function Ni(e) {
                var t = e.stateNode;
                t.pendingContext ? Ia(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ia(0, t.context, !1), $s(e, t.containerInfo)
            }

            function Ri(e, t, n, r, a) {
                return fs(), ps(a), t.flags |= 256, wi(e, t, n, r), t.child
            }
            var Pi, Oi, Ai, Ii = {
                dehydrated: null,
                treeContext: null,
                retryLane: 0
            };

            function Li(e) {
                return {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }
            }

            function Di(e, t, n) {
                var r, a = t.pendingProps,
                    o = Zs.current,
                    i = !1,
                    l = 0 !== (128 & t.flags);
                if ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)), r ? (i = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (o |= 1), ja(Zs, 1 & o), null === e) return cs(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = a.children, e = a.fallback, i ? (a = t.mode, i = t.child, l = {
                    mode: "hidden",
                    children: l
                }, 0 === (1 & a) && null !== i ? (i.childLanes = 0, i.pendingProps = l) : i = Lc(l, a, 0, null), e = Ic(e, a, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Li(n), t.memoizedState = Ii, e) : Ui(t, l));
                if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated)) return function(e, t, n, r, a, o, i) {
                    if (n) return 256 & t.flags ? (t.flags &= -257, Mi(e, t, i, r = ui(Error(s(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = Lc({
                        mode: "visible",
                        children: r.children
                    }, a, 0, null), (o = Ic(o, a, i, null)).flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, 0 !== (1 & t.mode) && ws(t, e.child, null, i), t.child.memoizedState = Li(i), t.memoizedState = Ii, o);
                    if (0 === (1 & t.mode)) return Mi(e, t, i, null);
                    if ("$!" === a.data) {
                        if (r = a.nextSibling && a.nextSibling.dataset) var l = r.dgst;
                        return r = l, Mi(e, t, i, r = ui(o = Error(s(419)), r, void 0))
                    }
                    if (l = 0 !== (i & e.childLanes), bi || l) {
                        if (null !== (r = Cl)) {
                            switch (i & -i) {
                                case 4:
                                    a = 2;
                                    break;
                                case 16:
                                    a = 8;
                                    break;
                                case 64:
                                case 128:
                                case 256:
                                case 512:
                                case 1024:
                                case 2048:
                                case 4096:
                                case 8192:
                                case 16384:
                                case 32768:
                                case 65536:
                                case 131072:
                                case 262144:
                                case 524288:
                                case 1048576:
                                case 2097152:
                                case 4194304:
                                case 8388608:
                                case 16777216:
                                case 33554432:
                                case 67108864:
                                    a = 32;
                                    break;
                                case 536870912:
                                    a = 268435456;
                                    break;
                                default:
                                    a = 0
                            }
                            0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) && a !== o.retryLane && (o.retryLane = a, Is(e, a), tc(r, e, a, -1))
                        }
                        return pc(), Mi(e, t, i, r = ui(Error(s(421))))
                    }
                    return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = jc.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, rs = ca(a.nextSibling), ns = t, as = !0, ss = null, null !== e && (Ga[Ja++] = Qa, Ga[Ja++] = Ya, Ga[Ja++] = $a, Qa = e.id, Ya = e.overflow, $a = t), t = Ui(t, r.children), t.flags |= 4096, t)
                }(e, t, l, a, r, o, n);
                if (i) {
                    i = a.fallback, l = t.mode, r = (o = e.child).sibling;
                    var c = {
                        mode: "hidden",
                        children: a.children
                    };
                    return 0 === (1 & l) && t.child !== o ? ((a = t.child).childLanes = 0, a.pendingProps = c, t.deletions = null) : (a = Oc(o, c)).subtreeFlags = 14680064 & o.subtreeFlags, null !== r ? i = Oc(r, i) : (i = Ic(i, l, n, null)).flags |= 2, i.return = t, a.return = t, a.sibling = i, t.child = a, a = i, i = t.child, l = null === (l = e.child.memoizedState) ? Li(n) : {
                        baseLanes: l.baseLanes | n,
                        cachePool: null,
                        transitions: l.transitions
                    }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = Ii, a
                }
                return e = (i = e.child).sibling, a = Oc(i, {
                    mode: "visible",
                    children: a.children
                }), 0 === (1 & t.mode) && (a.lanes = n), a.return = t, a.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a
            }

            function Ui(e, t) {
                return (t = Lc({
                    mode: "visible",
                    children: t
                }, e.mode, 0, null)).return = e, e.child = t
            }

            function Mi(e, t, n, r) {
                return null !== r && ps(r), ws(t, e.child, null, n), (e = Ui(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
            }

            function zi(e, t, n) {
                e.lanes |= t;
                var r = e.alternate;
                null !== r && (r.lanes |= t), Cs(e.return, t, n)
            }

            function Bi(e, t, n, r, a) {
                var s = e.memoizedState;
                null === s ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailMode: a
                } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = a)
            }

            function Fi(e, t, n) {
                var r = t.pendingProps,
                    a = r.revealOrder,
                    s = r.tail;
                if (wi(e, t, r.children, n), 0 !== (2 & (r = Zs.current))) r = 1 & r | 2, t.flags |= 128;
                else {
                    if (null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) {
                        if (13 === e.tag) null !== e.memoizedState && zi(e, n, t);
                        else if (19 === e.tag) zi(e, n, t);
                        else if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                        if (e === t) break e;
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === t) break e;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                    r &= 1
                }
                if (ja(Zs, r), 0 === (1 & t.mode)) t.memoizedState = null;
                else switch (a) {
                    case "forwards":
                        for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === eo(e) && (a = n), n = n.sibling;
                        null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Bi(t, !1, a, n, s);
                        break;
                    case "backwards":
                        for (n = null, a = t.child, t.child = null; null !== a;) {
                            if (null !== (e = a.alternate) && null === eo(e)) {
                                t.child = a;
                                break
                            }
                            e = a.sibling, a.sibling = n, n = a, a = e
                        }
                        Bi(t, !0, n, null, s);
                        break;
                    case "together":
                        Bi(t, !1, null, null, void 0);
                        break;
                    default:
                        t.memoizedState = null
                }
                return t.child
            }

            function Vi(e, t) {
                0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
            }

            function qi(e, t, n) {
                if (null !== e && (t.dependencies = e.dependencies), Ll |= t.lanes, 0 === (n & t.childLanes)) return null;
                if (null !== e && t.child !== e.child) throw Error(s(153));
                if (null !== t.child) {
                    for (n = Oc(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Oc(e, e.pendingProps)).return = t;
                    n.sibling = null
                }
                return t.child
            }

            function Wi(e, t) {
                if (!as) switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                        null === n ? e.tail = null : n.sibling = null;
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                }
            }

            function Hi(e) {
                var t = null !== e.alternate && e.alternate.child === e.child,
                    n = 0,
                    r = 0;
                if (t)
                    for (var a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
                else
                    for (a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
                return e.subtreeFlags |= r, e.childLanes = n, t
            }

            function Ki(e, t, n) {
                var r = t.pendingProps;
                switch (ts(t), t.tag) {
                    case 2:
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                        return Hi(t), null;
                    case 1:
                    case 17:
                        return Oa(t.type) && Aa(), Hi(t), null;
                    case 3:
                        return r = t.stateNode, Qs(), Ea(Na), Ea(Ca), no(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (ds(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== ss && (sc(ss), ss = null))), Hi(t), null;
                    case 5:
                        Xs(t);
                        var a = Js(Gs.current);
                        if (n = t.type, null !== e && null != t.stateNode) Oi(e, t, n, r), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                        else {
                            if (!r) {
                                if (null === t.stateNode) throw Error(s(166));
                                return Hi(t), null
                            }
                            if (e = Js(Hs.current), ds(t)) {
                                r = t.stateNode, n = t.type;
                                var o = t.memoizedProps;
                                switch (r[ha] = t, r[fa] = o, e = 0 !== (1 & t.mode), n) {
                                    case "dialog":
                                        zr("cancel", r), zr("close", r);
                                        break;
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        zr("load", r);
                                        break;
                                    case "video":
                                    case "audio":
                                        for (a = 0; a < Lr.length; a++) zr(Lr[a], r);
                                        break;
                                    case "source":
                                        zr("error", r);
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        zr("error", r), zr("load", r);
                                        break;
                                    case "details":
                                        zr("toggle", r);
                                        break;
                                    case "input":
                                        Q(r, o), zr("invalid", r);
                                        break;
                                    case "select":
                                        r._wrapperState = {
                                            wasMultiple: !!o.multiple
                                        }, zr("invalid", r);
                                        break;
                                    case "textarea":
                                        ae(r, o), zr("invalid", r)
                                }
                                for (var l in ye(n, o), a = null, o)
                                    if (o.hasOwnProperty(l)) {
                                        var c = o[l];
                                        "children" === l ? "string" === typeof c ? r.textContent !== c && (!0 !== o.suppressHydrationWarning && Xr(r.textContent, c, e), a = ["children", c]) : "number" === typeof c && r.textContent !== "" + c && (!0 !== o.suppressHydrationWarning && Xr(r.textContent, c, e), a = ["children", "" + c]) : i.hasOwnProperty(l) && null != c && "onScroll" === l && zr("scroll", r)
                                    }
                                switch (n) {
                                    case "input":
                                        K(r), Z(r, o, !0);
                                        break;
                                    case "textarea":
                                        K(r), oe(r);
                                        break;
                                    case "select":
                                    case "option":
                                        break;
                                    default:
                                        "function" === typeof o.onClick && (r.onclick = Zr)
                                }
                                r = a, t.updateQueue = r, null !== r && (t.flags |= 4)
                            } else {
                                l = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = ie(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = l.createElement(n, {
                                    is: r.is
                                }) : (e = l.createElement(n), "select" === n && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[ha] = t, e[fa] = r, Pi(e, t), t.stateNode = e;
                                e: {
                                    switch (l = be(n, r), n) {
                                        case "dialog":
                                            zr("cancel", e), zr("close", e), a = r;
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            zr("load", e), a = r;
                                            break;
                                        case "video":
                                        case "audio":
                                            for (a = 0; a < Lr.length; a++) zr(Lr[a], e);
                                            a = r;
                                            break;
                                        case "source":
                                            zr("error", e), a = r;
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            zr("error", e), zr("load", e), a = r;
                                            break;
                                        case "details":
                                            zr("toggle", e), a = r;
                                            break;
                                        case "input":
                                            Q(e, r), a = $(e, r), zr("invalid", e);
                                            break;
                                        case "option":
                                        default:
                                            a = r;
                                            break;
                                        case "select":
                                            e._wrapperState = {
                                                wasMultiple: !!r.multiple
                                            }, a = U({}, r, {
                                                value: void 0
                                            }), zr("invalid", e);
                                            break;
                                        case "textarea":
                                            ae(e, r), a = re(e, r), zr("invalid", e)
                                    }
                                    for (o in ye(n, a), c = a)
                                        if (c.hasOwnProperty(o)) {
                                            var u = c[o];
                                            "style" === o ? ge(e, u) : "dangerouslySetInnerHTML" === o ? null != (u = u ? u.__html : void 0) && de(e, u) : "children" === o ? "string" === typeof u ? ("textarea" !== n || "" !== u) && he(e, u) : "number" === typeof u && he(e, "" + u) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (i.hasOwnProperty(o) ? null != u && "onScroll" === o && zr("scroll", e) : null != u && b(e, o, u, l))
                                        }
                                    switch (n) {
                                        case "input":
                                            K(e), Z(e, r, !1);
                                            break;
                                        case "textarea":
                                            K(e), oe(e);
                                            break;
                                        case "option":
                                            null != r.value && e.setAttribute("value", "" + W(r.value));
                                            break;
                                        case "select":
                                            e.multiple = !!r.multiple, null != (o = r.value) ? ne(e, !!r.multiple, o, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                            break;
                                        default:
                                            "function" === typeof a.onClick && (e.onclick = Zr)
                                    }
                                    switch (n) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            r = !!r.autoFocus;
                                            break e;
                                        case "img":
                                            r = !0;
                                            break e;
                                        default:
                                            r = !1
                                    }
                                }
                                r && (t.flags |= 4)
                            }
                            null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
                        }
                        return Hi(t), null;
                    case 6:
                        if (e && null != t.stateNode) Ai(0, t, e.memoizedProps, r);
                        else {
                            if ("string" !== typeof r && null === t.stateNode) throw Error(s(166));
                            if (n = Js(Gs.current), Js(Hs.current), ds(t)) {
                                if (r = t.stateNode, n = t.memoizedProps, r[ha] = t, (o = r.nodeValue !== n) && null !== (e = ns)) switch (e.tag) {
                                    case 3:
                                        Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                                        break;
                                    case 5:
                                        !0 !== e.memoizedProps.suppressHydrationWarning && Xr(r.nodeValue, n, 0 !== (1 & e.mode))
                                }
                                o && (t.flags |= 4)
                            } else (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[ha] = t, t.stateNode = r
                        }
                        return Hi(t), null;
                    case 13:
                        if (Ea(Zs), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                            if (as && null !== rs && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) hs(), fs(), t.flags |= 98560, o = !1;
                            else if (o = ds(t), null !== r && null !== r.dehydrated) {
                                if (null === e) {
                                    if (!o) throw Error(s(318));
                                    if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null)) throw Error(s(317));
                                    o[ha] = t
                                } else fs(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                Hi(t), o = !1
                            } else null !== ss && (sc(ss), ss = null), o = !0;
                            if (!o) return 65536 & t.flags ? t : null
                        }
                        return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & Zs.current) ? 0 === Al && (Al = 3) : pc())), null !== t.updateQueue && (t.flags |= 4), Hi(t), null);
                    case 4:
                        return Qs(), null === e && Vr(t.stateNode.containerInfo), Hi(t), null;
                    case 10:
                        return Ts(t.type._context), Hi(t), null;
                    case 19:
                        if (Ea(Zs), null === (o = t.memoizedState)) return Hi(t), null;
                        if (r = 0 !== (128 & t.flags), null === (l = o.rendering))
                            if (r) Wi(o, !1);
                            else {
                                if (0 !== Al || null !== e && 0 !== (128 & e.flags))
                                    for (e = t.child; null !== e;) {
                                        if (null !== (l = eo(e))) {
                                            for (t.flags |= 128, Wi(o, !1), null !== (r = l.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (o = n).flags &= 14680066, null === (l = o.alternate) ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = null === e ? null : {
                                                lanes: e.lanes,
                                                firstContext: e.firstContext
                                            }), n = n.sibling;
                                            return ja(Zs, 1 & Zs.current | 2), t.child
                                        }
                                        e = e.sibling
                                    }
                                null !== o.tail && Ye() > Fl && (t.flags |= 128, r = !0, Wi(o, !1), t.lanes = 4194304)
                            } else {
                                if (!r)
                                    if (null !== (e = eo(l))) {
                                        if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Wi(o, !0), null === o.tail && "hidden" === o.tailMode && !l.alternate && !as) return Hi(t), null
                                    } else 2 * Ye() - o.renderingStartTime > Fl && 1073741824 !== n && (t.flags |= 128, r = !0, Wi(o, !1), t.lanes = 4194304);
                                o.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (n = o.last) ? n.sibling = l : t.child = l, o.last = l)
                            }
                        return null !== o.tail ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Ye(), t.sibling = null, n = Zs.current, ja(Zs, r ? 1 & n | 2 : 1 & n), t) : (Hi(t), null);
                    case 22:
                    case 23:
                        return uc(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Pl) && (Hi(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Hi(t), null;
                    case 24:
                    case 25:
                        return null
                }
                throw Error(s(156, t.tag))
            }

            function Gi(e, t) {
                switch (ts(t), t.tag) {
                    case 1:
                        return Oa(t.type) && Aa(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 3:
                        return Qs(), Ea(Na), Ea(Ca), no(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                    case 5:
                        return Xs(t), null;
                    case 13:
                        if (Ea(Zs), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                            if (null === t.alternate) throw Error(s(340));
                            fs()
                        }
                        return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 19:
                        return Ea(Zs), null;
                    case 4:
                        return Qs(), null;
                    case 10:
                        return Ts(t.type._context), null;
                    case 22:
                    case 23:
                        return uc(), null;
                    default:
                        return null
                }
            }
            Pi = function(e, t) {
                for (var n = t.child; null !== n;) {
                    if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                    else if (4 !== n.tag && null !== n.child) {
                        n.child.return = n, n = n.child;
                        continue
                    }
                    if (n === t) break;
                    for (; null === n.sibling;) {
                        if (null === n.return || n.return === t) return;
                        n = n.return
                    }
                    n.sibling.return = n.return, n = n.sibling
                }
            }, Oi = function(e, t, n, r) {
                var a = e.memoizedProps;
                if (a !== r) {
                    e = t.stateNode, Js(Hs.current);
                    var s, o = null;
                    switch (n) {
                        case "input":
                            a = $(e, a), r = $(e, r), o = [];
                            break;
                        case "select":
                            a = U({}, a, {
                                value: void 0
                            }), r = U({}, r, {
                                value: void 0
                            }), o = [];
                            break;
                        case "textarea":
                            a = re(e, a), r = re(e, r), o = [];
                            break;
                        default:
                            "function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = Zr)
                    }
                    for (u in ye(n, r), n = null, a)
                        if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
                            if ("style" === u) {
                                var l = a[u];
                                for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                            } else "dangerouslySetInnerHTML" !== u && "children" !== u && "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (i.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
                    for (u in r) {
                        var c = r[u];
                        if (l = null != a ? a[u] : void 0, r.hasOwnProperty(u) && c !== l && (null != c || null != l))
                            if ("style" === u)
                                if (l) {
                                    for (s in l) !l.hasOwnProperty(s) || c && c.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                                    for (s in c) c.hasOwnProperty(s) && l[s] !== c[s] && (n || (n = {}), n[s] = c[s])
                                } else n || (o || (o = []), o.push(u, n)), n = c;
                            else "dangerouslySetInnerHTML" === u ? (c = c ? c.__html : void 0, l = l ? l.__html : void 0, null != c && l !== c && (o = o || []).push(u, c)) : "children" === u ? "string" !== typeof c && "number" !== typeof c || (o = o || []).push(u, "" + c) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && (i.hasOwnProperty(u) ? (null != c && "onScroll" === u && zr("scroll", e), o || l === c || (o = [])) : (o = o || []).push(u, c))
                    }
                    n && (o = o || []).push("style", n);
                    var u = o;
                    (t.updateQueue = u) && (t.flags |= 4)
                }
            }, Ai = function(e, t, n, r) {
                n !== r && (t.flags |= 4)
            };
            var Ji = !1,
                $i = !1,
                Qi = "function" === typeof WeakSet ? WeakSet : Set,
                Yi = null;

            function Xi(e, t) {
                var n = e.ref;
                if (null !== n)
                    if ("function" === typeof n) try {
                        n(null)
                    } catch (r) {
                        xc(e, t, r)
                    } else n.current = null
            }

            function Zi(e, t, n) {
                try {
                    n()
                } catch (r) {
                    xc(e, t, r)
                }
            }
            var el = !1;

            function tl(e, t, n) {
                var r = t.updateQueue;
                if (null !== (r = null !== r ? r.lastEffect : null)) {
                    var a = r = r.next;
                    do {
                        if ((a.tag & e) === e) {
                            var s = a.destroy;
                            a.destroy = void 0, void 0 !== s && Zi(t, n, s)
                        }
                        a = a.next
                    } while (a !== r)
                }
            }

            function nl(e, t) {
                if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                    var n = t = t.next;
                    do {
                        if ((n.tag & e) === e) {
                            var r = n.create;
                            n.destroy = r()
                        }
                        n = n.next
                    } while (n !== t)
                }
            }

            function rl(e) {
                var t = e.ref;
                if (null !== t) {
                    var n = e.stateNode;
                    e.tag, e = n, "function" === typeof t ? t(e) : t.current = e
                }
            }

            function al(e) {
                var t = e.alternate;
                null !== t && (e.alternate = null, al(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[ha], delete t[fa], delete t[ma], delete t[ga], delete t[va])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
            }

            function sl(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }

            function ol(e) {
                e: for (;;) {
                    for (; null === e.sibling;) {
                        if (null === e.return || sl(e.return)) return null;
                        e = e.return
                    }
                    for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                        if (2 & e.flags) continue e;
                        if (null === e.child || 4 === e.tag) continue e;
                        e.child.return = e, e = e.child
                    }
                    if (!(2 & e.flags)) return e.stateNode
                }
            }

            function il(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Zr));
                else if (4 !== r && null !== (e = e.child))
                    for (il(e, t, n), e = e.sibling; null !== e;) il(e, t, n), e = e.sibling
            }

            function ll(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
                else if (4 !== r && null !== (e = e.child))
                    for (ll(e, t, n), e = e.sibling; null !== e;) ll(e, t, n), e = e.sibling
            }
            var cl = null,
                ul = !1;

            function dl(e, t, n) {
                for (n = n.child; null !== n;) hl(e, t, n), n = n.sibling
            }

            function hl(e, t, n) {
                if (st && "function" === typeof st.onCommitFiberUnmount) try {
                    st.onCommitFiberUnmount(at, n)
                } catch (i) {}
                switch (n.tag) {
                    case 5:
                        $i || Xi(n, t);
                    case 6:
                        var r = cl,
                            a = ul;
                        cl = null, dl(e, t, n), ul = a, null !== (cl = r) && (ul ? (e = cl, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : cl.removeChild(n.stateNode));
                        break;
                    case 18:
                        null !== cl && (ul ? (e = cl, n = n.stateNode, 8 === e.nodeType ? la(e.parentNode, n) : 1 === e.nodeType && la(e, n), Vt(e)) : la(cl, n.stateNode));
                        break;
                    case 4:
                        r = cl, a = ul, cl = n.stateNode.containerInfo, ul = !0, dl(e, t, n), cl = r, ul = a;
                        break;
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        if (!$i && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                            a = r = r.next;
                            do {
                                var s = a,
                                    o = s.destroy;
                                s = s.tag, void 0 !== o && (0 !== (2 & s) || 0 !== (4 & s)) && Zi(n, t, o), a = a.next
                            } while (a !== r)
                        }
                        dl(e, t, n);
                        break;
                    case 1:
                        if (!$i && (Xi(n, t), "function" === typeof(r = n.stateNode).componentWillUnmount)) try {
                            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                        } catch (i) {
                            xc(n, t, i)
                        }
                        dl(e, t, n);
                        break;
                    case 21:
                        dl(e, t, n);
                        break;
                    case 22:
                        1 & n.mode ? ($i = (r = $i) || null !== n.memoizedState, dl(e, t, n), $i = r) : dl(e, t, n);
                        break;
                    default:
                        dl(e, t, n)
                }
            }

            function fl(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new Qi), t.forEach((function(t) {
                        var r = Tc.bind(null, e, t);
                        n.has(t) || (n.add(t), t.then(r, r))
                    }))
                }
            }

            function pl(e, t) {
                var n = t.deletions;
                if (null !== n)
                    for (var r = 0; r < n.length; r++) {
                        var a = n[r];
                        try {
                            var o = e,
                                i = t,
                                l = i;
                            e: for (; null !== l;) {
                                switch (l.tag) {
                                    case 5:
                                        cl = l.stateNode, ul = !1;
                                        break e;
                                    case 3:
                                    case 4:
                                        cl = l.stateNode.containerInfo, ul = !0;
                                        break e
                                }
                                l = l.return
                            }
                            if (null === cl) throw Error(s(160));
                            hl(o, i, a), cl = null, ul = !1;
                            var c = a.alternate;
                            null !== c && (c.return = null), a.return = null
                        } catch (u) {
                            xc(a, t, u)
                        }
                    }
                if (12854 & t.subtreeFlags)
                    for (t = t.child; null !== t;) ml(t, e), t = t.sibling
            }

            function ml(e, t) {
                var n = e.alternate,
                    r = e.flags;
                switch (e.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        if (pl(t, e), gl(e), 4 & r) {
                            try {
                                tl(3, e, e.return), nl(3, e)
                            } catch (g) {
                                xc(e, e.return, g)
                            }
                            try {
                                tl(5, e, e.return)
                            } catch (g) {
                                xc(e, e.return, g)
                            }
                        }
                        break;
                    case 1:
                        pl(t, e), gl(e), 512 & r && null !== n && Xi(n, n.return);
                        break;
                    case 5:
                        if (pl(t, e), gl(e), 512 & r && null !== n && Xi(n, n.return), 32 & e.flags) {
                            var a = e.stateNode;
                            try {
                                he(a, "")
                            } catch (g) {
                                xc(e, e.return, g)
                            }
                        }
                        if (4 & r && null != (a = e.stateNode)) {
                            var o = e.memoizedProps,
                                i = null !== n ? n.memoizedProps : o,
                                l = e.type,
                                c = e.updateQueue;
                            if (e.updateQueue = null, null !== c) try {
                                "input" === l && "radio" === o.type && null != o.name && Y(a, o), be(l, i);
                                var u = be(l, o);
                                for (i = 0; i < c.length; i += 2) {
                                    var d = c[i],
                                        h = c[i + 1];
                                    "style" === d ? ge(a, h) : "dangerouslySetInnerHTML" === d ? de(a, h) : "children" === d ? he(a, h) : b(a, d, h, u)
                                }
                                switch (l) {
                                    case "input":
                                        X(a, o);
                                        break;
                                    case "textarea":
                                        se(a, o);
                                        break;
                                    case "select":
                                        var f = a._wrapperState.wasMultiple;
                                        a._wrapperState.wasMultiple = !!o.multiple;
                                        var p = o.value;
                                        null != p ? ne(a, !!o.multiple, p, !1) : f !== !!o.multiple && (null != o.defaultValue ? ne(a, !!o.multiple, o.defaultValue, !0) : ne(a, !!o.multiple, o.multiple ? [] : "", !1))
                                }
                                a[fa] = o
                            } catch (g) {
                                xc(e, e.return, g)
                            }
                        }
                        break;
                    case 6:
                        if (pl(t, e), gl(e), 4 & r) {
                            if (null === e.stateNode) throw Error(s(162));
                            a = e.stateNode, o = e.memoizedProps;
                            try {
                                a.nodeValue = o
                            } catch (g) {
                                xc(e, e.return, g)
                            }
                        }
                        break;
                    case 3:
                        if (pl(t, e), gl(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                            Vt(t.containerInfo)
                        } catch (g) {
                            xc(e, e.return, g)
                        }
                        break;
                    case 4:
                    default:
                        pl(t, e), gl(e);
                        break;
                    case 13:
                        pl(t, e), gl(e), 8192 & (a = e.child).flags && (o = null !== a.memoizedState, a.stateNode.isHidden = o, !o || null !== a.alternate && null !== a.alternate.memoizedState || (Bl = Ye())), 4 & r && fl(e);
                        break;
                    case 22:
                        if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? ($i = (u = $i) || d, pl(t, e), $i = u) : pl(t, e), gl(e), 8192 & r) {
                            if (u = null !== e.memoizedState, (e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode))
                                for (Yi = e, d = e.child; null !== d;) {
                                    for (h = Yi = d; null !== Yi;) {
                                        switch (p = (f = Yi).child, f.tag) {
                                            case 0:
                                            case 11:
                                            case 14:
                                            case 15:
                                                tl(4, f, f.return);
                                                break;
                                            case 1:
                                                Xi(f, f.return);
                                                var m = f.stateNode;
                                                if ("function" === typeof m.componentWillUnmount) {
                                                    r = f, n = f.return;
                                                    try {
                                                        t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
                                                    } catch (g) {
                                                        xc(r, n, g)
                                                    }
                                                }
                                                break;
                                            case 5:
                                                Xi(f, f.return);
                                                break;
                                            case 22:
                                                if (null !== f.memoizedState) {
                                                    wl(h);
                                                    continue
                                                }
                                        }
                                        null !== p ? (p.return = f, Yi = p) : wl(h)
                                    }
                                    d = d.sibling
                                }
                            e: for (d = null, h = e;;) {
                                if (5 === h.tag) {
                                    if (null === d) {
                                        d = h;
                                        try {
                                            a = h.stateNode, u ? "function" === typeof(o = a.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (l = h.stateNode, i = void 0 !== (c = h.memoizedProps.style) && null !== c && c.hasOwnProperty("display") ? c.display : null, l.style.display = me("display", i))
                                        } catch (g) {
                                            xc(e, e.return, g)
                                        }
                                    }
                                } else if (6 === h.tag) {
                                    if (null === d) try {
                                        h.stateNode.nodeValue = u ? "" : h.memoizedProps
                                    } catch (g) {
                                        xc(e, e.return, g)
                                    }
                                } else if ((22 !== h.tag && 23 !== h.tag || null === h.memoizedState || h === e) && null !== h.child) {
                                    h.child.return = h, h = h.child;
                                    continue
                                }
                                if (h === e) break e;
                                for (; null === h.sibling;) {
                                    if (null === h.return || h.return === e) break e;
                                    d === h && (d = null), h = h.return
                                }
                                d === h && (d = null), h.sibling.return = h.return, h = h.sibling
                            }
                        }
                        break;
                    case 19:
                        pl(t, e), gl(e), 4 & r && fl(e);
                    case 21:
                }
            }

            function gl(e) {
                var t = e.flags;
                if (2 & t) {
                    try {
                        e: {
                            for (var n = e.return; null !== n;) {
                                if (sl(n)) {
                                    var r = n;
                                    break e
                                }
                                n = n.return
                            }
                            throw Error(s(160))
                        }
                        switch (r.tag) {
                            case 5:
                                var a = r.stateNode;
                                32 & r.flags && (he(a, ""), r.flags &= -33), ll(e, ol(e), a);
                                break;
                            case 3:
                            case 4:
                                var o = r.stateNode.containerInfo;
                                il(e, ol(e), o);
                                break;
                            default:
                                throw Error(s(161))
                        }
                    } catch (i) {
                        xc(e, e.return, i)
                    }
                    e.flags &= -3
                }
                4096 & t && (e.flags &= -4097)
            }

            function vl(e, t, n) {
                Yi = e, yl(e, t, n)
            }

            function yl(e, t, n) {
                for (var r = 0 !== (1 & e.mode); null !== Yi;) {
                    var a = Yi,
                        s = a.child;
                    if (22 === a.tag && r) {
                        var o = null !== a.memoizedState || Ji;
                        if (!o) {
                            var i = a.alternate,
                                l = null !== i && null !== i.memoizedState || $i;
                            i = Ji;
                            var c = $i;
                            if (Ji = o, ($i = l) && !c)
                                for (Yi = a; null !== Yi;) l = (o = Yi).child, 22 === o.tag && null !== o.memoizedState ? _l(a) : null !== l ? (l.return = o, Yi = l) : _l(a);
                            for (; null !== s;) Yi = s, yl(s, t, n), s = s.sibling;
                            Yi = a, Ji = i, $i = c
                        }
                        bl(e)
                    } else 0 !== (8772 & a.subtreeFlags) && null !== s ? (s.return = a, Yi = s) : bl(e)
                }
            }

            function bl(e) {
                for (; null !== Yi;) {
                    var t = Yi;
                    if (0 !== (8772 & t.flags)) {
                        var n = t.alternate;
                        try {
                            if (0 !== (8772 & t.flags)) switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    $i || nl(5, t);
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if (4 & t.flags && !$i)
                                        if (null === n) r.componentDidMount();
                                        else {
                                            var a = t.elementType === t.type ? n.memoizedProps : ni(t.type, n.memoizedProps);
                                            r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                        }
                                    var o = t.updateQueue;
                                    null !== o && qs(t, o, r);
                                    break;
                                case 3:
                                    var i = t.updateQueue;
                                    if (null !== i) {
                                        if (n = null, null !== t.child) switch (t.child.tag) {
                                            case 5:
                                            case 1:
                                                n = t.child.stateNode
                                        }
                                        qs(t, i, n)
                                    }
                                    break;
                                case 5:
                                    var l = t.stateNode;
                                    if (null === n && 4 & t.flags) {
                                        n = l;
                                        var c = t.memoizedProps;
                                        switch (t.type) {
                                            case "button":
                                            case "input":
                                            case "select":
                                            case "textarea":
                                                c.autoFocus && n.focus();
                                                break;
                                            case "img":
                                                c.src && (n.src = c.src)
                                        }
                                    }
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                case 19:
                                case 17:
                                case 21:
                                case 22:
                                case 23:
                                case 25:
                                    break;
                                case 13:
                                    if (null === t.memoizedState) {
                                        var u = t.alternate;
                                        if (null !== u) {
                                            var d = u.memoizedState;
                                            if (null !== d) {
                                                var h = d.dehydrated;
                                                null !== h && Vt(h)
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw Error(s(163))
                            }
                            $i || 512 & t.flags && rl(t)
                        } catch (f) {
                            xc(t, t.return, f)
                        }
                    }
                    if (t === e) {
                        Yi = null;
                        break
                    }
                    if (null !== (n = t.sibling)) {
                        n.return = t.return, Yi = n;
                        break
                    }
                    Yi = t.return
                }
            }

            function wl(e) {
                for (; null !== Yi;) {
                    var t = Yi;
                    if (t === e) {
                        Yi = null;
                        break
                    }
                    var n = t.sibling;
                    if (null !== n) {
                        n.return = t.return, Yi = n;
                        break
                    }
                    Yi = t.return
                }
            }

            function _l(e) {
                for (; null !== Yi;) {
                    var t = Yi;
                    try {
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                var n = t.return;
                                try {
                                    nl(4, t)
                                } catch (l) {
                                    xc(t, n, l)
                                }
                                break;
                            case 1:
                                var r = t.stateNode;
                                if ("function" === typeof r.componentDidMount) {
                                    var a = t.return;
                                    try {
                                        r.componentDidMount()
                                    } catch (l) {
                                        xc(t, a, l)
                                    }
                                }
                                var s = t.return;
                                try {
                                    rl(t)
                                } catch (l) {
                                    xc(t, s, l)
                                }
                                break;
                            case 5:
                                var o = t.return;
                                try {
                                    rl(t)
                                } catch (l) {
                                    xc(t, o, l)
                                }
                        }
                    } catch (l) {
                        xc(t, t.return, l)
                    }
                    if (t === e) {
                        Yi = null;
                        break
                    }
                    var i = t.sibling;
                    if (null !== i) {
                        i.return = t.return, Yi = i;
                        break
                    }
                    Yi = t.return
                }
            }
            var kl, xl = Math.ceil,
                Sl = w.ReactCurrentDispatcher,
                El = w.ReactCurrentOwner,
                jl = w.ReactCurrentBatchConfig,
                Tl = 0,
                Cl = null,
                Nl = null,
                Rl = 0,
                Pl = 0,
                Ol = Sa(0),
                Al = 0,
                Il = null,
                Ll = 0,
                Dl = 0,
                Ul = 0,
                Ml = null,
                zl = null,
                Bl = 0,
                Fl = 1 / 0,
                Vl = null,
                ql = !1,
                Wl = null,
                Hl = null,
                Kl = !1,
                Gl = null,
                Jl = 0,
                $l = 0,
                Ql = null,
                Yl = -1,
                Xl = 0;

            function Zl() {
                return 0 !== (6 & Tl) ? Ye() : -1 !== Yl ? Yl : Yl = Ye()
            }

            function ec(e) {
                return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Tl) && 0 !== Rl ? Rl & -Rl : null !== ms.transition ? (0 === Xl && (Xl = mt()), Xl) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Qt(e.type)
            }

            function tc(e, t, n, r) {
                if (50 < $l) throw $l = 0, Ql = null, Error(s(185));
                vt(e, n, r), 0 !== (2 & Tl) && e === Cl || (e === Cl && (0 === (2 & Tl) && (Dl |= n), 4 === Al && oc(e, Rl)), nc(e, r), 1 === n && 0 === Tl && 0 === (1 & t.mode) && (Fl = Ye() + 500, za && Va()))
            }

            function nc(e, t) {
                var n = e.callbackNode;
                ! function(e, t) {
                    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
                        var o = 31 - ot(s),
                            i = 1 << o,
                            l = a[o];
                        -1 === l ? 0 !== (i & n) && 0 === (i & r) || (a[o] = ft(i, t)) : l <= t && (e.expiredLanes |= i), s &= ~i
                    }
                }(e, t);
                var r = ht(e, e === Cl ? Rl : 0);
                if (0 === r) null !== n && Je(n), e.callbackNode = null, e.callbackPriority = 0;
                else if (t = r & -r, e.callbackPriority !== t) {
                    if (null != n && Je(n), 1 === t) 0 === e.tag ? function(e) {
                        za = !0, Fa(e)
                    }(ic.bind(null, e)) : Fa(ic.bind(null, e)), oa((function() {
                        0 === (6 & Tl) && Va()
                    })), n = null;
                    else {
                        switch (wt(r)) {
                            case 1:
                                n = Ze;
                                break;
                            case 4:
                                n = et;
                                break;
                            case 16:
                            default:
                                n = tt;
                                break;
                            case 536870912:
                                n = rt
                        }
                        n = Cc(n, rc.bind(null, e))
                    }
                    e.callbackPriority = t, e.callbackNode = n
                }
            }

            function rc(e, t) {
                if (Yl = -1, Xl = 0, 0 !== (6 & Tl)) throw Error(s(327));
                var n = e.callbackNode;
                if (_c() && e.callbackNode !== n) return null;
                var r = ht(e, e === Cl ? Rl : 0);
                if (0 === r) return null;
                if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = mc(e, r);
                else {
                    t = r;
                    var a = Tl;
                    Tl |= 2;
                    var o = fc();
                    for (Cl === e && Rl === t || (Vl = null, Fl = Ye() + 500, dc(e, t));;) try {
                        vc();
                        break
                    } catch (l) {
                        hc(e, l)
                    }
                    if (js(), Sl.current = o, Tl = a, null !== Nl) t = 0;
                    else {
                        Cl = null, Rl = 0, t = Al
                    }
                }
                if (0 !== t) {
                    if (2 === t && (0 !== (a = pt(e)) && (r = a, t = ac(e, a))), 1 === t) throw n = Il, dc(e, 0), oc(e, r), nc(e, Ye()), n;
                    if (6 === t) oc(e, r);
                    else {
                        if (a = e.current.alternate, 0 === (30 & r) && ! function(e) {
                                for (var t = e;;) {
                                    if (16384 & t.flags) {
                                        var n = t.updateQueue;
                                        if (null !== n && null !== (n = n.stores))
                                            for (var r = 0; r < n.length; r++) {
                                                var a = n[r],
                                                    s = a.getSnapshot;
                                                a = a.value;
                                                try {
                                                    if (!ir(s(), a)) return !1
                                                } catch (i) {
                                                    return !1
                                                }
                                            }
                                    }
                                    if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                                    else {
                                        if (t === e) break;
                                        for (; null === t.sibling;) {
                                            if (null === t.return || t.return === e) return !0;
                                            t = t.return
                                        }
                                        t.sibling.return = t.return, t = t.sibling
                                    }
                                }
                                return !0
                            }(a) && (2 === (t = mc(e, r)) && (0 !== (o = pt(e)) && (r = o, t = ac(e, o))), 1 === t)) throw n = Il, dc(e, 0), oc(e, r), nc(e, Ye()), n;
                        switch (e.finishedWork = a, e.finishedLanes = r, t) {
                            case 0:
                            case 1:
                                throw Error(s(345));
                            case 2:
                            case 5:
                                wc(e, zl, Vl);
                                break;
                            case 3:
                                if (oc(e, r), (130023424 & r) === r && 10 < (t = Bl + 500 - Ye())) {
                                    if (0 !== ht(e, 0)) break;
                                    if (((a = e.suspendedLanes) & r) !== r) {
                                        Zl(), e.pingedLanes |= e.suspendedLanes & a;
                                        break
                                    }
                                    e.timeoutHandle = ra(wc.bind(null, e, zl, Vl), t);
                                    break
                                }
                                wc(e, zl, Vl);
                                break;
                            case 4:
                                if (oc(e, r), (4194240 & r) === r) break;
                                for (t = e.eventTimes, a = -1; 0 < r;) {
                                    var i = 31 - ot(r);
                                    o = 1 << i, (i = t[i]) > a && (a = i), r &= ~o
                                }
                                if (r = a, 10 < (r = (120 > (r = Ye() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * xl(r / 1960)) - r)) {
                                    e.timeoutHandle = ra(wc.bind(null, e, zl, Vl), r);
                                    break
                                }
                                wc(e, zl, Vl);
                                break;
                            default:
                                throw Error(s(329))
                        }
                    }
                }
                return nc(e, Ye()), e.callbackNode === n ? rc.bind(null, e) : null
            }

            function ac(e, t) {
                var n = Ml;
                return e.current.memoizedState.isDehydrated && (dc(e, t).flags |= 256), 2 !== (e = mc(e, t)) && (t = zl, zl = n, null !== t && sc(t)), e
            }

            function sc(e) {
                null === zl ? zl = e : zl.push.apply(zl, e)
            }

            function oc(e, t) {
                for (t &= ~Ul, t &= ~Dl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                    var n = 31 - ot(t),
                        r = 1 << n;
                    e[n] = -1, t &= ~r
                }
            }

            function ic(e) {
                if (0 !== (6 & Tl)) throw Error(s(327));
                _c();
                var t = ht(e, 0);
                if (0 === (1 & t)) return nc(e, Ye()), null;
                var n = mc(e, t);
                if (0 !== e.tag && 2 === n) {
                    var r = pt(e);
                    0 !== r && (t = r, n = ac(e, r))
                }
                if (1 === n) throw n = Il, dc(e, 0), oc(e, t), nc(e, Ye()), n;
                if (6 === n) throw Error(s(345));
                return e.finishedWork = e.current.alternate, e.finishedLanes = t, wc(e, zl, Vl), nc(e, Ye()), null
            }

            function lc(e, t) {
                var n = Tl;
                Tl |= 1;
                try {
                    return e(t)
                } finally {
                    0 === (Tl = n) && (Fl = Ye() + 500, za && Va())
                }
            }

            function cc(e) {
                null !== Gl && 0 === Gl.tag && 0 === (6 & Tl) && _c();
                var t = Tl;
                Tl |= 1;
                var n = jl.transition,
                    r = bt;
                try {
                    if (jl.transition = null, bt = 1, e) return e()
                } finally {
                    bt = r, jl.transition = n, 0 === (6 & (Tl = t)) && Va()
                }
            }

            function uc() {
                Pl = Ol.current, Ea(Ol)
            }

            function dc(e, t) {
                e.finishedWork = null, e.finishedLanes = 0;
                var n = e.timeoutHandle;
                if (-1 !== n && (e.timeoutHandle = -1, aa(n)), null !== Nl)
                    for (n = Nl.return; null !== n;) {
                        var r = n;
                        switch (ts(r), r.tag) {
                            case 1:
                                null !== (r = r.type.childContextTypes) && void 0 !== r && Aa();
                                break;
                            case 3:
                                Qs(), Ea(Na), Ea(Ca), no();
                                break;
                            case 5:
                                Xs(r);
                                break;
                            case 4:
                                Qs();
                                break;
                            case 13:
                            case 19:
                                Ea(Zs);
                                break;
                            case 10:
                                Ts(r.type._context);
                                break;
                            case 22:
                            case 23:
                                uc()
                        }
                        n = n.return
                    }
                if (Cl = e, Nl = e = Oc(e.current, null), Rl = Pl = t, Al = 0, Il = null, Ul = Dl = Ll = 0, zl = Ml = null, null !== Ps) {
                    for (t = 0; t < Ps.length; t++)
                        if (null !== (r = (n = Ps[t]).interleaved)) {
                            n.interleaved = null;
                            var a = r.next,
                                s = n.pending;
                            if (null !== s) {
                                var o = s.next;
                                s.next = a, r.next = o
                            }
                            n.pending = r
                        }
                    Ps = null
                }
                return e
            }

            function hc(e, t) {
                for (;;) {
                    var n = Nl;
                    try {
                        if (js(), ro.current = Xo, co) {
                            for (var r = oo.memoizedState; null !== r;) {
                                var a = r.queue;
                                null !== a && (a.pending = null), r = r.next
                            }
                            co = !1
                        }
                        if (so = 0, lo = io = oo = null, uo = !1, ho = 0, El.current = null, null === n || null === n.return) {
                            Al = 1, Il = t, Nl = null;
                            break
                        }
                        e: {
                            var o = e,
                                i = n.return,
                                l = n,
                                c = t;
                            if (t = Rl, l.flags |= 32768, null !== c && "object" === typeof c && "function" === typeof c.then) {
                                var u = c,
                                    d = l,
                                    h = d.tag;
                                if (0 === (1 & d.mode) && (0 === h || 11 === h || 15 === h)) {
                                    var f = d.alternate;
                                    f ? (d.updateQueue = f.updateQueue, d.memoizedState = f.memoizedState, d.lanes = f.lanes) : (d.updateQueue = null, d.memoizedState = null)
                                }
                                var p = gi(i);
                                if (null !== p) {
                                    p.flags &= -257, vi(p, i, l, 0, t), 1 & p.mode && mi(o, u, t), c = u;
                                    var m = (t = p).updateQueue;
                                    if (null === m) {
                                        var g = new Set;
                                        g.add(c), t.updateQueue = g
                                    } else m.add(c);
                                    break e
                                }
                                if (0 === (1 & t)) {
                                    mi(o, u, t), pc();
                                    break e
                                }
                                c = Error(s(426))
                            } else if (as && 1 & l.mode) {
                                var v = gi(i);
                                if (null !== v) {
                                    0 === (65536 & v.flags) && (v.flags |= 256), vi(v, i, l, 0, t), ps(ci(c, l));
                                    break e
                                }
                            }
                            o = c = ci(c, l), 4 !== Al && (Al = 2), null === Ml ? Ml = [o] : Ml.push(o), o = i;
                            do {
                                switch (o.tag) {
                                    case 3:
                                        o.flags |= 65536, t &= -t, o.lanes |= t, Fs(o, fi(0, c, t));
                                        break e;
                                    case 1:
                                        l = c;
                                        var y = o.type,
                                            b = o.stateNode;
                                        if (0 === (128 & o.flags) && ("function" === typeof y.getDerivedStateFromError || null !== b && "function" === typeof b.componentDidCatch && (null === Hl || !Hl.has(b)))) {
                                            o.flags |= 65536, t &= -t, o.lanes |= t, Fs(o, pi(o, l, t));
                                            break e
                                        }
                                }
                                o = o.return
                            } while (null !== o)
                        }
                        bc(n)
                    } catch (w) {
                        t = w, Nl === n && null !== n && (Nl = n = n.return);
                        continue
                    }
                    break
                }
            }

            function fc() {
                var e = Sl.current;
                return Sl.current = Xo, null === e ? Xo : e
            }

            function pc() {
                0 !== Al && 3 !== Al && 2 !== Al || (Al = 4), null === Cl || 0 === (268435455 & Ll) && 0 === (268435455 & Dl) || oc(Cl, Rl)
            }

            function mc(e, t) {
                var n = Tl;
                Tl |= 2;
                var r = fc();
                for (Cl === e && Rl === t || (Vl = null, dc(e, t));;) try {
                    gc();
                    break
                } catch (a) {
                    hc(e, a)
                }
                if (js(), Tl = n, Sl.current = r, null !== Nl) throw Error(s(261));
                return Cl = null, Rl = 0, Al
            }

            function gc() {
                for (; null !== Nl;) yc(Nl)
            }

            function vc() {
                for (; null !== Nl && !$e();) yc(Nl)
            }

            function yc(e) {
                var t = kl(e.alternate, e, Pl);
                e.memoizedProps = e.pendingProps, null === t ? bc(e) : Nl = t, El.current = null
            }

            function bc(e) {
                var t = e;
                do {
                    var n = t.alternate;
                    if (e = t.return, 0 === (32768 & t.flags)) {
                        if (null !== (n = Ki(n, t, Pl))) return void(Nl = n)
                    } else {
                        if (null !== (n = Gi(n, t))) return n.flags &= 32767, void(Nl = n);
                        if (null === e) return Al = 6, void(Nl = null);
                        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
                    }
                    if (null !== (t = t.sibling)) return void(Nl = t);
                    Nl = t = e
                } while (null !== t);
                0 === Al && (Al = 5)
            }

            function wc(e, t, n) {
                var r = bt,
                    a = jl.transition;
                try {
                    jl.transition = null, bt = 1, function(e, t, n, r) {
                        do {
                            _c()
                        } while (null !== Gl);
                        if (0 !== (6 & Tl)) throw Error(s(327));
                        n = e.finishedWork;
                        var a = e.finishedLanes;
                        if (null === n) return null;
                        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
                        e.callbackNode = null, e.callbackPriority = 0;
                        var o = n.lanes | n.childLanes;
                        if (function(e, t) {
                                var n = e.pendingLanes & ~t;
                                e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                                var r = e.eventTimes;
                                for (e = e.expirationTimes; 0 < n;) {
                                    var a = 31 - ot(n),
                                        s = 1 << a;
                                    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~s
                                }
                            }(e, o), e === Cl && (Nl = Cl = null, Rl = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Kl || (Kl = !0, Cc(tt, (function() {
                                return _c(), null
                            }))), o = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || o) {
                            o = jl.transition, jl.transition = null;
                            var i = bt;
                            bt = 1;
                            var l = Tl;
                            Tl |= 4, El.current = null, function(e, t) {
                                if (ea = Wt, fr(e = hr())) {
                                    if ("selectionStart" in e) var n = {
                                        start: e.selectionStart,
                                        end: e.selectionEnd
                                    };
                                    else e: {
                                        var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                        if (r && 0 !== r.rangeCount) {
                                            n = r.anchorNode;
                                            var a = r.anchorOffset,
                                                o = r.focusNode;
                                            r = r.focusOffset;
                                            try {
                                                n.nodeType, o.nodeType
                                            } catch (_) {
                                                n = null;
                                                break e
                                            }
                                            var i = 0,
                                                l = -1,
                                                c = -1,
                                                u = 0,
                                                d = 0,
                                                h = e,
                                                f = null;
                                            t: for (;;) {
                                                for (var p; h !== n || 0 !== a && 3 !== h.nodeType || (l = i + a), h !== o || 0 !== r && 3 !== h.nodeType || (c = i + r), 3 === h.nodeType && (i += h.nodeValue.length), null !== (p = h.firstChild);) f = h, h = p;
                                                for (;;) {
                                                    if (h === e) break t;
                                                    if (f === n && ++u === a && (l = i), f === o && ++d === r && (c = i), null !== (p = h.nextSibling)) break;
                                                    f = (h = f).parentNode
                                                }
                                                h = p
                                            }
                                            n = -1 === l || -1 === c ? null : {
                                                start: l,
                                                end: c
                                            }
                                        } else n = null
                                    }
                                    n = n || {
                                        start: 0,
                                        end: 0
                                    }
                                } else n = null;
                                for (ta = {
                                        focusedElem: e,
                                        selectionRange: n
                                    }, Wt = !1, Yi = t; null !== Yi;)
                                    if (e = (t = Yi).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, Yi = e;
                                    else
                                        for (; null !== Yi;) {
                                            t = Yi;
                                            try {
                                                var m = t.alternate;
                                                if (0 !== (1024 & t.flags)) switch (t.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                    case 5:
                                                    case 6:
                                                    case 4:
                                                    case 17:
                                                        break;
                                                    case 1:
                                                        if (null !== m) {
                                                            var g = m.memoizedProps,
                                                                v = m.memoizedState,
                                                                y = t.stateNode,
                                                                b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? g : ni(t.type, g), v);
                                                            y.__reactInternalSnapshotBeforeUpdate = b
                                                        }
                                                        break;
                                                    case 3:
                                                        var w = t.stateNode.containerInfo;
                                                        1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                                        break;
                                                    default:
                                                        throw Error(s(163))
                                                }
                                            } catch (_) {
                                                xc(t, t.return, _)
                                            }
                                            if (null !== (e = t.sibling)) {
                                                e.return = t.return, Yi = e;
                                                break
                                            }
                                            Yi = t.return
                                        }
                                m = el, el = !1
                            }(e, n), ml(n, e), pr(ta), Wt = !!ea, ta = ea = null, e.current = n, vl(n, e, a), Qe(), Tl = l, bt = i, jl.transition = o
                        } else e.current = n;
                        if (Kl && (Kl = !1, Gl = e, Jl = a), o = e.pendingLanes, 0 === o && (Hl = null), function(e) {
                                if (st && "function" === typeof st.onCommitFiberRoot) try {
                                    st.onCommitFiberRoot(at, e, void 0, 128 === (128 & e.current.flags))
                                } catch (t) {}
                            }(n.stateNode), nc(e, Ye()), null !== t)
                            for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, {
                                componentStack: a.stack,
                                digest: a.digest
                            });
                        if (ql) throw ql = !1, e = Wl, Wl = null, e;
                        0 !== (1 & Jl) && 0 !== e.tag && _c(), o = e.pendingLanes, 0 !== (1 & o) ? e === Ql ? $l++ : ($l = 0, Ql = e) : $l = 0, Va()
                    }(e, t, n, r)
                } finally {
                    jl.transition = a, bt = r
                }
                return null
            }

            function _c() {
                if (null !== Gl) {
                    var e = wt(Jl),
                        t = jl.transition,
                        n = bt;
                    try {
                        if (jl.transition = null, bt = 16 > e ? 16 : e, null === Gl) var r = !1;
                        else {
                            if (e = Gl, Gl = null, Jl = 0, 0 !== (6 & Tl)) throw Error(s(331));
                            var a = Tl;
                            for (Tl |= 4, Yi = e.current; null !== Yi;) {
                                var o = Yi,
                                    i = o.child;
                                if (0 !== (16 & Yi.flags)) {
                                    var l = o.deletions;
                                    if (null !== l) {
                                        for (var c = 0; c < l.length; c++) {
                                            var u = l[c];
                                            for (Yi = u; null !== Yi;) {
                                                var d = Yi;
                                                switch (d.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                        tl(8, d, o)
                                                }
                                                var h = d.child;
                                                if (null !== h) h.return = d, Yi = h;
                                                else
                                                    for (; null !== Yi;) {
                                                        var f = (d = Yi).sibling,
                                                            p = d.return;
                                                        if (al(d), d === u) {
                                                            Yi = null;
                                                            break
                                                        }
                                                        if (null !== f) {
                                                            f.return = p, Yi = f;
                                                            break
                                                        }
                                                        Yi = p
                                                    }
                                            }
                                        }
                                        var m = o.alternate;
                                        if (null !== m) {
                                            var g = m.child;
                                            if (null !== g) {
                                                m.child = null;
                                                do {
                                                    var v = g.sibling;
                                                    g.sibling = null, g = v
                                                } while (null !== g)
                                            }
                                        }
                                        Yi = o
                                    }
                                }
                                if (0 !== (2064 & o.subtreeFlags) && null !== i) i.return = o, Yi = i;
                                else e: for (; null !== Yi;) {
                                    if (0 !== (2048 & (o = Yi).flags)) switch (o.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            tl(9, o, o.return)
                                    }
                                    var y = o.sibling;
                                    if (null !== y) {
                                        y.return = o.return, Yi = y;
                                        break e
                                    }
                                    Yi = o.return
                                }
                            }
                            var b = e.current;
                            for (Yi = b; null !== Yi;) {
                                var w = (i = Yi).child;
                                if (0 !== (2064 & i.subtreeFlags) && null !== w) w.return = i, Yi = w;
                                else e: for (i = b; null !== Yi;) {
                                    if (0 !== (2048 & (l = Yi).flags)) try {
                                        switch (l.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                nl(9, l)
                                        }
                                    } catch (k) {
                                        xc(l, l.return, k)
                                    }
                                    if (l === i) {
                                        Yi = null;
                                        break e
                                    }
                                    var _ = l.sibling;
                                    if (null !== _) {
                                        _.return = l.return, Yi = _;
                                        break e
                                    }
                                    Yi = l.return
                                }
                            }
                            if (Tl = a, Va(), st && "function" === typeof st.onPostCommitFiberRoot) try {
                                st.onPostCommitFiberRoot(at, e)
                            } catch (k) {}
                            r = !0
                        }
                        return r
                    } finally {
                        bt = n, jl.transition = t
                    }
                }
                return !1
            }

            function kc(e, t, n) {
                e = zs(e, t = fi(0, t = ci(n, t), 1), 1), t = Zl(), null !== e && (vt(e, 1, t), nc(e, t))
            }

            function xc(e, t, n) {
                if (3 === e.tag) kc(e, e, n);
                else
                    for (; null !== t;) {
                        if (3 === t.tag) {
                            kc(t, e, n);
                            break
                        }
                        if (1 === t.tag) {
                            var r = t.stateNode;
                            if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Hl || !Hl.has(r))) {
                                t = zs(t, e = pi(t, e = ci(n, e), 1), 1), e = Zl(), null !== t && (vt(t, 1, e), nc(t, e));
                                break
                            }
                        }
                        t = t.return
                    }
            }

            function Sc(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t), t = Zl(), e.pingedLanes |= e.suspendedLanes & n, Cl === e && (Rl & n) === n && (4 === Al || 3 === Al && (130023424 & Rl) === Rl && 500 > Ye() - Bl ? dc(e, 0) : Ul |= n), nc(e, t)
            }

            function Ec(e, t) {
                0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ut, 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
                var n = Zl();
                null !== (e = Is(e, t)) && (vt(e, t, n), nc(e, n))
            }

            function jc(e) {
                var t = e.memoizedState,
                    n = 0;
                null !== t && (n = t.retryLane), Ec(e, n)
            }

            function Tc(e, t) {
                var n = 0;
                switch (e.tag) {
                    case 13:
                        var r = e.stateNode,
                            a = e.memoizedState;
                        null !== a && (n = a.retryLane);
                        break;
                    case 19:
                        r = e.stateNode;
                        break;
                    default:
                        throw Error(s(314))
                }
                null !== r && r.delete(t), Ec(e, n)
            }

            function Cc(e, t) {
                return Ge(e, t)
            }

            function Nc(e, t, n, r) {
                this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
            }

            function Rc(e, t, n, r) {
                return new Nc(e, t, n, r)
            }

            function Pc(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }

            function Oc(e, t) {
                var n = e.alternate;
                return null === n ? ((n = Rc(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
            }

            function Ac(e, t, n, r, a, o) {
                var i = 2;
                if (r = e, "function" === typeof e) Pc(e) && (i = 1);
                else if ("string" === typeof e) i = 5;
                else e: switch (e) {
                    case x:
                        return Ic(n.children, a, o, t);
                    case S:
                        i = 8, a |= 8;
                        break;
                    case E:
                        return (e = Rc(12, n, t, 2 | a)).elementType = E, e.lanes = o, e;
                    case N:
                        return (e = Rc(13, n, t, a)).elementType = N, e.lanes = o, e;
                    case R:
                        return (e = Rc(19, n, t, a)).elementType = R, e.lanes = o, e;
                    case A:
                        return Lc(n, a, o, t);
                    default:
                        if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                            case j:
                                i = 10;
                                break e;
                            case T:
                                i = 9;
                                break e;
                            case C:
                                i = 11;
                                break e;
                            case P:
                                i = 14;
                                break e;
                            case O:
                                i = 16, r = null;
                                break e
                        }
                        throw Error(s(130, null == e ? e : typeof e, ""))
                }
                return (t = Rc(i, n, t, a)).elementType = e, t.type = r, t.lanes = o, t
            }

            function Ic(e, t, n, r) {
                return (e = Rc(7, e, r, t)).lanes = n, e
            }

            function Lc(e, t, n, r) {
                return (e = Rc(22, e, r, t)).elementType = A, e.lanes = n, e.stateNode = {
                    isHidden: !1
                }, e
            }

            function Dc(e, t, n) {
                return (e = Rc(6, e, null, t)).lanes = n, e
            }

            function Uc(e, t, n) {
                return (t = Rc(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                }, t
            }

            function Mc(e, t, n, r, a) {
                this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gt(0), this.expirationTimes = gt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gt(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null
            }

            function zc(e, t, n, r, a, s, o, i, l) {
                return e = new Mc(e, t, n, i, l), 1 === t ? (t = 1, !0 === s && (t |= 8)) : t = 0, s = Rc(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = {
                    element: r,
                    isDehydrated: n,
                    cache: null,
                    transitions: null,
                    pendingSuspenseBoundaries: null
                }, Ds(s), e
            }

            function Bc(e) {
                if (!e) return Ta;
                e: {
                    if (Ve(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(s(170));
                    var t = e;
                    do {
                        switch (t.tag) {
                            case 3:
                                t = t.stateNode.context;
                                break e;
                            case 1:
                                if (Oa(t.type)) {
                                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                    break e
                                }
                        }
                        t = t.return
                    } while (null !== t);
                    throw Error(s(171))
                }
                if (1 === e.tag) {
                    var n = e.type;
                    if (Oa(n)) return La(e, n, t)
                }
                return t
            }

            function Fc(e, t, n, r, a, s, o, i, l) {
                return (e = zc(n, r, !0, e, 0, s, 0, i, l)).context = Bc(null), n = e.current, (s = Ms(r = Zl(), a = ec(n))).callback = void 0 !== t && null !== t ? t : null, zs(n, s, a), e.current.lanes = a, vt(e, a, r), nc(e, r), e
            }

            function Vc(e, t, n, r) {
                var a = t.current,
                    s = Zl(),
                    o = ec(a);
                return n = Bc(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Ms(s, o)).payload = {
                    element: e
                }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = zs(a, t, o)) && (tc(e, a, o, s), Bs(e, a, o)), o
            }

            function qc(e) {
                return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
            }

            function Wc(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var n = e.retryLane;
                    e.retryLane = 0 !== n && n < t ? n : t
                }
            }

            function Hc(e, t) {
                Wc(e, t), (e = e.alternate) && Wc(e, t)
            }
            kl = function(e, t, n) {
                if (null !== e)
                    if (e.memoizedProps !== t.pendingProps || Na.current) bi = !0;
                    else {
                        if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return bi = !1, function(e, t, n) {
                            switch (t.tag) {
                                case 3:
                                    Ni(t), fs();
                                    break;
                                case 5:
                                    Ys(t);
                                    break;
                                case 1:
                                    Oa(t.type) && Da(t);
                                    break;
                                case 4:
                                    $s(t, t.stateNode.containerInfo);
                                    break;
                                case 10:
                                    var r = t.type._context,
                                        a = t.memoizedProps.value;
                                    ja(ks, r._currentValue), r._currentValue = a;
                                    break;
                                case 13:
                                    if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (ja(Zs, 1 & Zs.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Di(e, t, n) : (ja(Zs, 1 & Zs.current), null !== (e = qi(e, t, n)) ? e.sibling : null);
                                    ja(Zs, 1 & Zs.current);
                                    break;
                                case 19:
                                    if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) {
                                        if (r) return Fi(e, t, n);
                                        t.flags |= 128
                                    }
                                    if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), ja(Zs, Zs.current), r) break;
                                    return null;
                                case 22:
                                case 23:
                                    return t.lanes = 0, Si(e, t, n)
                            }
                            return qi(e, t, n)
                        }(e, t, n);
                        bi = 0 !== (131072 & e.flags)
                    } else bi = !1, as && 0 !== (1048576 & t.flags) && Za(t, Ka, t.index);
                switch (t.lanes = 0, t.tag) {
                    case 2:
                        var r = t.type;
                        Vi(e, t), e = t.pendingProps;
                        var a = Pa(t, Ca.current);
                        Ns(t, n), a = go(null, t, r, e, a, n);
                        var o = vo();
                        return t.flags |= 1, "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Oa(r) ? (o = !0, Da(t)) : o = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, Ds(t), a.updater = ai, t.stateNode = a, a._reactInternals = t, li(t, r, e, n), t = Ci(null, t, r, !0, o, n)) : (t.tag = 0, as && o && es(t), wi(null, t, a, n), t = t.child), t;
                    case 16:
                        r = t.elementType;
                        e: {
                            switch (Vi(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function(e) {
                                if ("function" === typeof e) return Pc(e) ? 1 : 0;
                                if (void 0 !== e && null !== e) {
                                    if ((e = e.$$typeof) === C) return 11;
                                    if (e === P) return 14
                                }
                                return 2
                            }(r), e = ni(r, e), a) {
                                case 0:
                                    t = ji(null, t, r, e, n);
                                    break e;
                                case 1:
                                    t = Ti(null, t, r, e, n);
                                    break e;
                                case 11:
                                    t = _i(null, t, r, e, n);
                                    break e;
                                case 14:
                                    t = ki(null, t, r, ni(r.type, e), n);
                                    break e
                            }
                            throw Error(s(306, r, ""))
                        }
                        return t;
                    case 0:
                        return r = t.type, a = t.pendingProps, ji(e, t, r, a = t.elementType === r ? a : ni(r, a), n);
                    case 1:
                        return r = t.type, a = t.pendingProps, Ti(e, t, r, a = t.elementType === r ? a : ni(r, a), n);
                    case 3:
                        e: {
                            if (Ni(t), null === e) throw Error(s(387));
                            r = t.pendingProps, a = (o = t.memoizedState).element, Us(e, t), Vs(t, r, null, n);
                            var i = t.memoizedState;
                            if (r = i.element, o.isDehydrated) {
                                if (o = {
                                        element: r,
                                        isDehydrated: !1,
                                        cache: i.cache,
                                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                                        transitions: i.transitions
                                    }, t.updateQueue.baseState = o, t.memoizedState = o, 256 & t.flags) {
                                    t = Ri(e, t, r, n, a = ci(Error(s(423)), t));
                                    break e
                                }
                                if (r !== a) {
                                    t = Ri(e, t, r, n, a = ci(Error(s(424)), t));
                                    break e
                                }
                                for (rs = ca(t.stateNode.containerInfo.firstChild), ns = t, as = !0, ss = null, n = _s(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                            } else {
                                if (fs(), r === a) {
                                    t = qi(e, t, n);
                                    break e
                                }
                                wi(e, t, r, n)
                            }
                            t = t.child
                        }
                        return t;
                    case 5:
                        return Ys(t), null === e && cs(t), r = t.type, a = t.pendingProps, o = null !== e ? e.memoizedProps : null, i = a.children, na(r, a) ? i = null : null !== o && na(r, o) && (t.flags |= 32), Ei(e, t), wi(e, t, i, n), t.child;
                    case 6:
                        return null === e && cs(t), null;
                    case 13:
                        return Di(e, t, n);
                    case 4:
                        return $s(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = ws(t, null, r, n) : wi(e, t, r, n), t.child;
                    case 11:
                        return r = t.type, a = t.pendingProps, _i(e, t, r, a = t.elementType === r ? a : ni(r, a), n);
                    case 7:
                        return wi(e, t, t.pendingProps, n), t.child;
                    case 8:
                    case 12:
                        return wi(e, t, t.pendingProps.children, n), t.child;
                    case 10:
                        e: {
                            if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, i = a.value, ja(ks, r._currentValue), r._currentValue = i, null !== o)
                                if (ir(o.value, i)) {
                                    if (o.children === a.children && !Na.current) {
                                        t = qi(e, t, n);
                                        break e
                                    }
                                } else
                                    for (null !== (o = t.child) && (o.return = t); null !== o;) {
                                        var l = o.dependencies;
                                        if (null !== l) {
                                            i = o.child;
                                            for (var c = l.firstContext; null !== c;) {
                                                if (c.context === r) {
                                                    if (1 === o.tag) {
                                                        (c = Ms(-1, n & -n)).tag = 2;
                                                        var u = o.updateQueue;
                                                        if (null !== u) {
                                                            var d = (u = u.shared).pending;
                                                            null === d ? c.next = c : (c.next = d.next, d.next = c), u.pending = c
                                                        }
                                                    }
                                                    o.lanes |= n, null !== (c = o.alternate) && (c.lanes |= n), Cs(o.return, n, t), l.lanes |= n;
                                                    break
                                                }
                                                c = c.next
                                            }
                                        } else if (10 === o.tag) i = o.type === t.type ? null : o.child;
                                        else if (18 === o.tag) {
                                            if (null === (i = o.return)) throw Error(s(341));
                                            i.lanes |= n, null !== (l = i.alternate) && (l.lanes |= n), Cs(i, n, t), i = o.sibling
                                        } else i = o.child;
                                        if (null !== i) i.return = o;
                                        else
                                            for (i = o; null !== i;) {
                                                if (i === t) {
                                                    i = null;
                                                    break
                                                }
                                                if (null !== (o = i.sibling)) {
                                                    o.return = i.return, i = o;
                                                    break
                                                }
                                                i = i.return
                                            }
                                        o = i
                                    }
                            wi(e, t, a.children, n), t = t.child
                        }
                        return t;
                    case 9:
                        return a = t.type, r = t.pendingProps.children, Ns(t, n), r = r(a = Rs(a)), t.flags |= 1, wi(e, t, r, n), t.child;
                    case 14:
                        return a = ni(r = t.type, t.pendingProps), ki(e, t, r, a = ni(r.type, a), n);
                    case 15:
                        return xi(e, t, t.type, t.pendingProps, n);
                    case 17:
                        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ni(r, a), Vi(e, t), t.tag = 1, Oa(r) ? (e = !0, Da(t)) : e = !1, Ns(t, n), oi(t, r, a), li(t, r, a, n), Ci(null, t, r, !0, e, n);
                    case 19:
                        return Fi(e, t, n);
                    case 22:
                        return Si(e, t, n)
                }
                throw Error(s(156, t.tag))
            };
            var Kc = "function" === typeof reportError ? reportError : function(e) {
                    console.error(e)
                },
                Gc = function(e) {
                    this._internalRoot = e
                },
                Jc = function(e) {
                    this._internalRoot = e
                };

            function $c(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
            }

            function Qc(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }

            function Yc() {}

            function Xc(e, t, n, r, a) {
                var s = n._reactRootContainer;
                if (s) {
                    var o = s;
                    if ("function" === typeof a) {
                        var i = a;
                        a = function() {
                            var e = qc(o);
                            i.call(e)
                        }
                    }
                    Vc(t, o, e, a)
                } else o = function(e, t, n, r, a) {
                    if (a) {
                        if ("function" === typeof r) {
                            var s = r;
                            r = function() {
                                var e = qc(o);
                                s.call(e)
                            }
                        }
                        var o = Fc(t, r, e, 0, null, !1, 0, "", Yc);
                        return e._reactRootContainer = o, e[pa] = o.current, Vr(8 === e.nodeType ? e.parentNode : e), cc(), o
                    }
                    for (; a = e.lastChild;) e.removeChild(a);
                    if ("function" === typeof r) {
                        var i = r;
                        r = function() {
                            var e = qc(l);
                            i.call(e)
                        }
                    }
                    var l = zc(e, 0, !1, null, 0, !1, 0, "", Yc);
                    return e._reactRootContainer = l, e[pa] = l.current, Vr(8 === e.nodeType ? e.parentNode : e), cc((function() {
                        Vc(t, l, n, r)
                    })), l
                }(n, t, e, a, r);
                return qc(o)
            }
            Jc.prototype.render = Gc.prototype.render = function(e) {
                var t = this._internalRoot;
                if (null === t) throw Error(s(409));
                Vc(e, t, null, null)
            }, Jc.prototype.unmount = Gc.prototype.unmount = function() {
                var e = this._internalRoot;
                if (null !== e) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    cc((function() {
                        Vc(null, e, null, null)
                    })), t[pa] = null
                }
            }, Jc.prototype.unstable_scheduleHydration = function(e) {
                if (e) {
                    var t = St();
                    e = {
                        blockedOn: null,
                        target: e,
                        priority: t
                    };
                    for (var n = 0; n < At.length && 0 !== t && t < At[n].priority; n++);
                    At.splice(n, 0, e), 0 === n && Ut(e)
                }
            }, _t = function(e) {
                switch (e.tag) {
                    case 3:
                        var t = e.stateNode;
                        if (t.current.memoizedState.isDehydrated) {
                            var n = dt(t.pendingLanes);
                            0 !== n && (yt(t, 1 | n), nc(t, Ye()), 0 === (6 & Tl) && (Fl = Ye() + 500, Va()))
                        }
                        break;
                    case 13:
                        cc((function() {
                            var t = Is(e, 1);
                            if (null !== t) {
                                var n = Zl();
                                tc(t, e, 1, n)
                            }
                        })), Hc(e, 1)
                }
            }, kt = function(e) {
                if (13 === e.tag) {
                    var t = Is(e, 134217728);
                    null !== t && tc(t, e, 134217728, Zl());
                    Hc(e, 134217728)
                }
            }, xt = function(e) {
                if (13 === e.tag) {
                    var t = ec(e),
                        n = Is(e, t);
                    null !== n && tc(n, e, t, Zl());
                    Hc(e, t)
                }
            }, St = function() {
                return bt
            }, Et = function(e, t) {
                var n = bt;
                try {
                    return bt = e, t()
                } finally {
                    bt = n
                }
            }, ke = function(e, t, n) {
                switch (t) {
                    case "input":
                        if (X(e, n), t = n.name, "radio" === n.type && null != t) {
                            for (n = e; n.parentNode;) n = n.parentNode;
                            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                var r = n[t];
                                if (r !== e && r.form === e.form) {
                                    var a = _a(r);
                                    if (!a) throw Error(s(90));
                                    G(r), X(r, a)
                                }
                            }
                        }
                        break;
                    case "textarea":
                        se(e, n);
                        break;
                    case "select":
                        null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                }
            }, Ce = lc, Ne = cc;
            var Zc = {
                    usingClientEntryPoint: !1,
                    Events: [ba, wa, _a, je, Te, lc]
                },
                eu = {
                    findFiberByHostInstance: ya,
                    bundleType: 0,
                    version: "18.3.1",
                    rendererPackageName: "react-dom"
                },
                tu = {
                    bundleType: eu.bundleType,
                    version: eu.version,
                    rendererPackageName: eu.rendererPackageName,
                    rendererConfig: eu.rendererConfig,
                    overrideHookState: null,
                    overrideHookStateDeletePath: null,
                    overrideHookStateRenamePath: null,
                    overrideProps: null,
                    overridePropsDeletePath: null,
                    overridePropsRenamePath: null,
                    setErrorHandler: null,
                    setSuspenseHandler: null,
                    scheduleUpdate: null,
                    currentDispatcherRef: w.ReactCurrentDispatcher,
                    findHostInstanceByFiber: function(e) {
                        return null === (e = He(e)) ? null : e.stateNode
                    },
                    findFiberByHostInstance: eu.findFiberByHostInstance || function() {
                        return null
                    },
                    findHostInstancesForRefresh: null,
                    scheduleRefresh: null,
                    scheduleRoot: null,
                    setRefreshHandler: null,
                    getCurrentFiber: null,
                    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
                };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var nu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!nu.isDisabled && nu.supportsFiber) try {
                    at = nu.inject(tu), st = nu
                } catch (ue) {}
            }
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zc, t.createPortal = function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!$c(t)) throw Error(s(200));
                return function(e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: k,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }(e, t, null, n)
            }, t.createRoot = function(e, t) {
                if (!$c(e)) throw Error(s(299));
                var n = !1,
                    r = "",
                    a = Kc;
                return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), t = zc(e, 1, !1, null, 0, n, 0, r, a), e[pa] = t.current, Vr(8 === e.nodeType ? e.parentNode : e), new Gc(t)
            }, t.findDOMNode = function(e) {
                if (null == e) return null;
                if (1 === e.nodeType) return e;
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" === typeof e.render) throw Error(s(188));
                    throw e = Object.keys(e).join(","), Error(s(268, e))
                }
                return e = null === (e = He(t)) ? null : e.stateNode
            }, t.flushSync = function(e) {
                return cc(e)
            }, t.hydrate = function(e, t, n) {
                if (!Qc(t)) throw Error(s(200));
                return Xc(null, e, t, !0, n)
            }, t.hydrateRoot = function(e, t, n) {
                if (!$c(e)) throw Error(s(405));
                var r = null != n && n.hydratedSources || null,
                    a = !1,
                    o = "",
                    i = Kc;
                if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (o = n.identifierPrefix), void 0 !== n.onRecoverableError && (i = n.onRecoverableError)), t = Fc(t, null, e, 1, null != n ? n : null, a, 0, o, i), e[pa] = t.current, Vr(e), r)
                    for (e = 0; e < r.length; e++) a = (a = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
                return new Jc(t)
            }, t.render = function(e, t, n) {
                if (!Qc(t)) throw Error(s(200));
                return Xc(null, e, t, !1, n)
            }, t.unmountComponentAtNode = function(e) {
                if (!Qc(e)) throw Error(s(40));
                return !!e._reactRootContainer && (cc((function() {
                    Xc(null, null, e, !1, (function() {
                        e._reactRootContainer = null, e[pa] = null
                    }))
                })), !0)
            }, t.unstable_batchedUpdates = lc, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                if (!Qc(n)) throw Error(s(200));
                if (null == e || void 0 === e._reactInternals) throw Error(s(38));
                return Xc(e, t, n, !1, r)
            }, t.version = "18.3.1-next-f1338f8080-20240426"
        },
        391: (e, t, n) => {
            var r = n(950);
            t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot
        },
        950: (e, t, n) => {
            ! function e() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                } catch (t) {
                    console.error(t)
                }
            }(), e.exports = n(730)
        },
        153: (e, t, n) => {
            var r = n(43),
                a = Symbol.for("react.element"),
                s = Symbol.for("react.fragment"),
                o = Object.prototype.hasOwnProperty,
                i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                l = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function c(e, t, n) {
                var r, s = {},
                    c = null,
                    u = null;
                for (r in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (u = t.ref), t) o.call(t, r) && !l.hasOwnProperty(r) && (s[r] = t[r]);
                if (e && e.defaultProps)
                    for (r in t = e.defaultProps) void 0 === s[r] && (s[r] = t[r]);
                return {
                    $$typeof: a,
                    type: e,
                    key: c,
                    ref: u,
                    props: s,
                    _owner: i.current
                }
            }
            t.Fragment = s, t.jsx = c, t.jsxs = c
        },
        202: (e, t) => {
            var n = Symbol.for("react.element"),
                r = Symbol.for("react.portal"),
                a = Symbol.for("react.fragment"),
                s = Symbol.for("react.strict_mode"),
                o = Symbol.for("react.profiler"),
                i = Symbol.for("react.provider"),
                l = Symbol.for("react.context"),
                c = Symbol.for("react.forward_ref"),
                u = Symbol.for("react.suspense"),
                d = Symbol.for("react.memo"),
                h = Symbol.for("react.lazy"),
                f = Symbol.iterator;
            var p = {
                    isMounted: function() {
                        return !1
                    },
                    enqueueForceUpdate: function() {},
                    enqueueReplaceState: function() {},
                    enqueueSetState: function() {}
                },
                m = Object.assign,
                g = {};

            function v(e, t, n) {
                this.props = e, this.context = t, this.refs = g, this.updater = n || p
            }

            function y() {}

            function b(e, t, n) {
                this.props = e, this.context = t, this.refs = g, this.updater = n || p
            }
            v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
                if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }, v.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, y.prototype = v.prototype;
            var w = b.prototype = new y;
            w.constructor = b, m(w, v.prototype), w.isPureReactComponent = !0;
            var _ = Array.isArray,
                k = Object.prototype.hasOwnProperty,
                x = {
                    current: null
                },
                S = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function E(e, t, r) {
                var a, s = {},
                    o = null,
                    i = null;
                if (null != t)
                    for (a in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (o = "" + t.key), t) k.call(t, a) && !S.hasOwnProperty(a) && (s[a] = t[a]);
                var l = arguments.length - 2;
                if (1 === l) s.children = r;
                else if (1 < l) {
                    for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
                    s.children = c
                }
                if (e && e.defaultProps)
                    for (a in l = e.defaultProps) void 0 === s[a] && (s[a] = l[a]);
                return {
                    $$typeof: n,
                    type: e,
                    key: o,
                    ref: i,
                    props: s,
                    _owner: x.current
                }
            }

            function j(e) {
                return "object" === typeof e && null !== e && e.$$typeof === n
            }
            var T = /\/+/g;

            function C(e, t) {
                return "object" === typeof e && null !== e && null != e.key ? function(e) {
                    var t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function(e) {
                        return t[e]
                    }))
                }("" + e.key) : t.toString(36)
            }

            function N(e, t, a, s, o) {
                var i = typeof e;
                "undefined" !== i && "boolean" !== i || (e = null);
                var l = !1;
                if (null === e) l = !0;
                else switch (i) {
                    case "string":
                    case "number":
                        l = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                            case n:
                            case r:
                                l = !0
                        }
                }
                if (l) return o = o(l = e), e = "" === s ? "." + C(l, 0) : s, _(o) ? (a = "", null != e && (a = e.replace(T, "$&/") + "/"), N(o, t, a, "", (function(e) {
                    return e
                }))) : null != o && (j(o) && (o = function(e, t) {
                    return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner
                    }
                }(o, a + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(T, "$&/") + "/") + e)), t.push(o)), 1;
                if (l = 0, s = "" === s ? "." : s + ":", _(e))
                    for (var c = 0; c < e.length; c++) {
                        var u = s + C(i = e[c], c);
                        l += N(i, t, a, u, o)
                    } else if (u = function(e) {
                        return null === e || "object" !== typeof e ? null : "function" === typeof(e = f && e[f] || e["@@iterator"]) ? e : null
                    }(e), "function" === typeof u)
                    for (e = u.call(e), c = 0; !(i = e.next()).done;) l += N(i = i.value, t, a, u = s + C(i, c++), o);
                else if ("object" === i) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return l
            }

            function R(e, t, n) {
                if (null == e) return e;
                var r = [],
                    a = 0;
                return N(e, r, "", "", (function(e) {
                    return t.call(n, e, a++)
                })), r
            }

            function P(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    (t = t()).then((function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                    }), (function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                    })), -1 === e._status && (e._status = 0, e._result = t)
                }
                if (1 === e._status) return e._result.default;
                throw e._result
            }
            var O = {
                    current: null
                },
                A = {
                    transition: null
                },
                I = {
                    ReactCurrentDispatcher: O,
                    ReactCurrentBatchConfig: A,
                    ReactCurrentOwner: x
                };

            function L() {
                throw Error("act(...) is not supported in production builds of React.")
            }
            t.Children = {
                map: R,
                forEach: function(e, t, n) {
                    R(e, (function() {
                        t.apply(this, arguments)
                    }), n)
                },
                count: function(e) {
                    var t = 0;
                    return R(e, (function() {
                        t++
                    })), t
                },
                toArray: function(e) {
                    return R(e, (function(e) {
                        return e
                    })) || []
                },
                only: function(e) {
                    if (!j(e)) throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            }, t.Component = v, t.Fragment = a, t.Profiler = o, t.PureComponent = b, t.StrictMode = s, t.Suspense = u, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I, t.act = L, t.cloneElement = function(e, t, r) {
                if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var a = m({}, e.props),
                    s = e.key,
                    o = e.ref,
                    i = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (o = t.ref, i = x.current), void 0 !== t.key && (s = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
                    for (c in t) k.call(t, c) && !S.hasOwnProperty(c) && (a[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c])
                }
                var c = arguments.length - 2;
                if (1 === c) a.children = r;
                else if (1 < c) {
                    l = Array(c);
                    for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
                    a.children = l
                }
                return {
                    $$typeof: n,
                    type: e.type,
                    key: s,
                    ref: o,
                    props: a,
                    _owner: i
                }
            }, t.createContext = function(e) {
                return (e = {
                    $$typeof: l,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                }).Provider = {
                    $$typeof: i,
                    _context: e
                }, e.Consumer = e
            }, t.createElement = E, t.createFactory = function(e) {
                var t = E.bind(null, e);
                return t.type = e, t
            }, t.createRef = function() {
                return {
                    current: null
                }
            }, t.forwardRef = function(e) {
                return {
                    $$typeof: c,
                    render: e
                }
            }, t.isValidElement = j, t.lazy = function(e) {
                return {
                    $$typeof: h,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: P
                }
            }, t.memo = function(e, t) {
                return {
                    $$typeof: d,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }, t.startTransition = function(e) {
                var t = A.transition;
                A.transition = {};
                try {
                    e()
                } finally {
                    A.transition = t
                }
            }, t.unstable_act = L, t.useCallback = function(e, t) {
                return O.current.useCallback(e, t)
            }, t.useContext = function(e) {
                return O.current.useContext(e)
            }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                return O.current.useDeferredValue(e)
            }, t.useEffect = function(e, t) {
                return O.current.useEffect(e, t)
            }, t.useId = function() {
                return O.current.useId()
            }, t.useImperativeHandle = function(e, t, n) {
                return O.current.useImperativeHandle(e, t, n)
            }, t.useInsertionEffect = function(e, t) {
                return O.current.useInsertionEffect(e, t)
            }, t.useLayoutEffect = function(e, t) {
                return O.current.useLayoutEffect(e, t)
            }, t.useMemo = function(e, t) {
                return O.current.useMemo(e, t)
            }, t.useReducer = function(e, t, n) {
                return O.current.useReducer(e, t, n)
            }, t.useRef = function(e) {
                return O.current.useRef(e)
            }, t.useState = function(e) {
                return O.current.useState(e)
            }, t.useSyncExternalStore = function(e, t, n) {
                return O.current.useSyncExternalStore(e, t, n)
            }, t.useTransition = function() {
                return O.current.useTransition()
            }, t.version = "18.3.1"
        },
        43: (e, t, n) => {
            e.exports = n(202)
        },
        579: (e, t, n) => {
            e.exports = n(153)
        },
        234: (e, t) => {
            function n(e, t) {
                var n = e.length;
                e.push(t);
                e: for (; 0 < n;) {
                    var r = n - 1 >>> 1,
                        a = e[r];
                    if (!(0 < s(a, t))) break e;
                    e[r] = t, e[n] = a, n = r
                }
            }

            function r(e) {
                return 0 === e.length ? null : e[0]
            }

            function a(e) {
                if (0 === e.length) return null;
                var t = e[0],
                    n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    e: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
                        var i = 2 * (r + 1) - 1,
                            l = e[i],
                            c = i + 1,
                            u = e[c];
                        if (0 > s(l, n)) c < a && 0 > s(u, l) ? (e[r] = u, e[c] = n, r = c) : (e[r] = l, e[i] = n, r = i);
                        else {
                            if (!(c < a && 0 > s(u, n))) break e;
                            e[r] = u, e[c] = n, r = c
                        }
                    }
                }
                return t
            }

            function s(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            if ("object" === typeof performance && "function" === typeof performance.now) {
                var o = performance;
                t.unstable_now = function() {
                    return o.now()
                }
            } else {
                var i = Date,
                    l = i.now();
                t.unstable_now = function() {
                    return i.now() - l
                }
            }
            var c = [],
                u = [],
                d = 1,
                h = null,
                f = 3,
                p = !1,
                m = !1,
                g = !1,
                v = "function" === typeof setTimeout ? setTimeout : null,
                y = "function" === typeof clearTimeout ? clearTimeout : null,
                b = "undefined" !== typeof setImmediate ? setImmediate : null;

            function w(e) {
                for (var t = r(u); null !== t;) {
                    if (null === t.callback) a(u);
                    else {
                        if (!(t.startTime <= e)) break;
                        a(u), t.sortIndex = t.expirationTime, n(c, t)
                    }
                    t = r(u)
                }
            }

            function _(e) {
                if (g = !1, w(e), !m)
                    if (null !== r(c)) m = !0, A(k);
                    else {
                        var t = r(u);
                        null !== t && I(_, t.startTime - e)
                    }
            }

            function k(e, n) {
                m = !1, g && (g = !1, y(j), j = -1), p = !0;
                var s = f;
                try {
                    for (w(n), h = r(c); null !== h && (!(h.expirationTime > n) || e && !N());) {
                        var o = h.callback;
                        if ("function" === typeof o) {
                            h.callback = null, f = h.priorityLevel;
                            var i = o(h.expirationTime <= n);
                            n = t.unstable_now(), "function" === typeof i ? h.callback = i : h === r(c) && a(c), w(n)
                        } else a(c);
                        h = r(c)
                    }
                    if (null !== h) var l = !0;
                    else {
                        var d = r(u);
                        null !== d && I(_, d.startTime - n), l = !1
                    }
                    return l
                } finally {
                    h = null, f = s, p = !1
                }
            }
            "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var x, S = !1,
                E = null,
                j = -1,
                T = 5,
                C = -1;

            function N() {
                return !(t.unstable_now() - C < T)
            }

            function R() {
                if (null !== E) {
                    var e = t.unstable_now();
                    C = e;
                    var n = !0;
                    try {
                        n = E(!0, e)
                    } finally {
                        n ? x() : (S = !1, E = null)
                    }
                } else S = !1
            }
            if ("function" === typeof b) x = function() {
                b(R)
            };
            else if ("undefined" !== typeof MessageChannel) {
                var P = new MessageChannel,
                    O = P.port2;
                P.port1.onmessage = R, x = function() {
                    O.postMessage(null)
                }
            } else x = function() {
                v(R, 0)
            };

            function A(e) {
                E = e, S || (S = !0, x())
            }

            function I(e, n) {
                j = v((function() {
                    e(t.unstable_now())
                }), n)
            }
            t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                e.callback = null
            }, t.unstable_continueExecution = function() {
                m || p || (m = !0, A(k))
            }, t.unstable_forceFrameRate = function(e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < e ? Math.floor(1e3 / e) : 5
            }, t.unstable_getCurrentPriorityLevel = function() {
                return f
            }, t.unstable_getFirstCallbackNode = function() {
                return r(c)
            }, t.unstable_next = function(e) {
                switch (f) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = f
                }
                var n = f;
                f = t;
                try {
                    return e()
                } finally {
                    f = n
                }
            }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var n = f;
                f = e;
                try {
                    return t()
                } finally {
                    f = n
                }
            }, t.unstable_scheduleCallback = function(e, a, s) {
                var o = t.unstable_now();
                switch ("object" === typeof s && null !== s ? s = "number" === typeof(s = s.delay) && 0 < s ? o + s : o : s = o, e) {
                    case 1:
                        var i = -1;
                        break;
                    case 2:
                        i = 250;
                        break;
                    case 5:
                        i = 1073741823;
                        break;
                    case 4:
                        i = 1e4;
                        break;
                    default:
                        i = 5e3
                }
                return e = {
                    id: d++,
                    callback: a,
                    priorityLevel: e,
                    startTime: s,
                    expirationTime: i = s + i,
                    sortIndex: -1
                }, s > o ? (e.sortIndex = s, n(u, e), null === r(c) && e === r(u) && (g ? (y(j), j = -1) : g = !0, I(_, s - o))) : (e.sortIndex = i, n(c, e), m || p || (m = !0, A(k))), e
            }, t.unstable_shouldYield = N, t.unstable_wrapCallback = function(e) {
                var t = f;
                return function() {
                    var n = f;
                    f = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        f = n
                    }
                }
            }
        },
        853: (e, t, n) => {
            e.exports = n(234)
        }
    },
        t = {};

    function n(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var s = t[r] = {
            exports: {}
        };
        return e[r](s, s.exports, n), s.exports
    }(() => {
        var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        n.t = function(r, a) {
            if (1 & a && (r = this(r)), 8 & a) return r;
            if ("object" === typeof r && r) {
                if (4 & a && r.__esModule) return r;
                if (16 & a && "function" === typeof r.then) return r
            }
            var s = Object.create(null);
            n.r(s);
            var o = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var i = 2 & a && r; ("object" == typeof i || "function" == typeof i) && ! ~e.indexOf(i); i = t(i)) Object.getOwnPropertyNames(i).forEach(e => o[e] = () => r[e]);
            return o.default = () => r, n.d(s, o), s
        }
    })(), n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.g = function() {
        if ("object" === typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window) return window
        }
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    var r, a = n(43),
        s = n.t(a, 2),
        o = n(391);

    function i() {
        return i = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, i.apply(this, arguments)
    }! function(e) {
        e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
    }(r || (r = {}));
    const l = "popstate";

    function c(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t)
    }

    function u(e, t) {
        if (!e) {
            "undefined" !== typeof console && console.warn(t);
            try {
                throw new Error(t)
            } catch (n) {}
        }
    }

    function d(e, t) {
        return {
            usr: e.state,
            key: e.key,
            idx: t
        }
    }

    function h(e, t, n, r) {
        return void 0 === n && (n = null), i({
            pathname: "string" === typeof e ? e : e.pathname,
            search: "",
            hash: ""
        }, "string" === typeof t ? p(t) : t, {
            state: n,
            key: t && t.key || r || Math.random().toString(36).substr(2, 8)
        })
    }

    function f(e) {
        let {
            pathname: t = "/",
            search: n = "",
            hash: r = ""
        } = e;
        return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t
    }

    function p(e) {
        let t = {};
        if (e) {
            let n = e.indexOf("#");
            n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
            let r = e.indexOf("?");
            r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
        }
        return t
    }

    function m(e, t, n, a) {
        void 0 === a && (a = {});
        let {
                window: s = document.defaultView,
                v5Compat: o = !1
            } = a,
            u = s.history,
            p = r.Pop,
            m = null,
            g = v();

        function v() {
            return (u.state || {
                idx: null
            }).idx
        }

        function y() {
            p = r.Pop;
            let e = v(),
                t = null == e ? null : e - g;
            g = e, m && m({
                action: p,
                location: w.location,
                delta: t
            })
        }

        function b(e) {
            let t = "null" !== s.location.origin ? s.location.origin : s.location.href,
                n = "string" === typeof e ? e : f(e);
            return n = n.replace(/ $/, "%20"), c(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t)
        }
        null == g && (g = 0, u.replaceState(i({}, u.state, {
            idx: g
        }), ""));
        let w = {
            get action() {
                return p
            },
            get location() {
                return e(s, u)
            },
            listen(e) {
                if (m) throw new Error("A history only accepts one active listener");
                return s.addEventListener(l, y), m = e, () => {
                    s.removeEventListener(l, y), m = null
                }
            },
            createHref: e => t(s, e),
            createURL: b,
            encodeLocation(e) {
                let t = b(e);
                return {
                    pathname: t.pathname,
                    search: t.search,
                    hash: t.hash
                }
            },
            push: function(e, t) {
                p = r.Push;
                let a = h(w.location, e, t);
                n && n(a, e), g = v() + 1;
                let l = d(a, g),
                    c = w.createHref(a);
                try {
                    u.pushState(l, "", c)
                } catch (f) {
                    if (f instanceof DOMException && "DataCloneError" === f.name) throw f;
                    s.location.assign(c)
                }
                o && m && m({
                    action: p,
                    location: w.location,
                    delta: 1
                })
            },
            replace: function(e, t) {
                p = r.Replace;
                let a = h(w.location, e, t);
                n && n(a, e), g = v();
                let s = d(a, g),
                    l = w.createHref(a);
                u.replaceState(s, "", l), o && m && m({
                    action: p,
                    location: w.location,
                    delta: 0
                })
            },
            go: e => u.go(e)
        };
        return w
    }
    var g;
    ! function(e) {
        e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
    }(g || (g = {}));
    new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

    function v(e, t, n) {
        return void 0 === n && (n = "/"), y(e, t, n, !1)
    }

    function y(e, t, n, r) {
        let a = O(("string" === typeof t ? p(t) : t).pathname || "/", n);
        if (null == a) return null;
        let s = b(e);
        ! function(e) {
            e.sort((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
                let n = e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]);
                return n ? e[e.length - 1] - t[t.length - 1] : 0
            }(e.routesMeta.map(e => e.childrenIndex), t.routesMeta.map(e => e.childrenIndex)))
        }(s);
        let o = null;
        for (let i = 0; null == o && i < s.length; ++i) {
            let e = P(a);
            o = N(s[i], e, r)
        }
        return o
    }

    function b(e, t, n, r) {
        void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = "");
        let a = (e, a, s) => {
            let o = {
                relativePath: void 0 === s ? e.path || "" : s,
                caseSensitive: !0 === e.caseSensitive,
                childrenIndex: a,
                route: e
            };
            o.relativePath.startsWith("/") && (c(o.relativePath.startsWith(r), 'Absolute route path "' + o.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), o.relativePath = o.relativePath.slice(r.length));
            let i = B([r, o.relativePath]),
                l = n.concat(o);
            e.children && e.children.length > 0 && (c(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + i + '".'), b(e.children, t, l, i)), (null != e.path || e.index) && t.push({
                path: i,
                score: C(i, e.index),
                routesMeta: l
            })
        };
        return e.forEach((e, t) => {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?"))
                for (let r of w(e.path)) a(e, t, r);
            else a(e, t)
        }), t
    }

    function w(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [n, ...r] = t,
            a = n.endsWith("?"),
            s = n.replace(/\?$/, "");
        if (0 === r.length) return a ? [s, ""] : [s];
        let o = w(r.join("/")),
            i = [];
        return i.push(...o.map(e => "" === e ? s : [s, e].join("/"))), a && i.push(...o), i.map(t => e.startsWith("/") && "" === t ? "/" : t)
    }
    const _ = /^:[\w-]+$/,
        k = 3,
        x = 2,
        S = 1,
        E = 10,
        j = -2,
        T = e => "*" === e;

    function C(e, t) {
        let n = e.split("/"),
            r = n.length;
        return n.some(T) && (r += j), t && (r += x), n.filter(e => !T(e)).reduce((e, t) => e + (_.test(t) ? k : "" === t ? S : E), r)
    }

    function N(e, t, n) {
        void 0 === n && (n = !1);
        let {
                routesMeta: r
            } = e,
            a = {},
            s = "/",
            o = [];
        for (let i = 0; i < r.length; ++i) {
            let e = r[i],
                l = i === r.length - 1,
                c = "/" === s ? t : t.slice(s.length) || "/",
                u = R({
                    path: e.relativePath,
                    caseSensitive: e.caseSensitive,
                    end: l
                }, c),
                d = e.route;
            if (!u && l && n && !r[r.length - 1].route.index && (u = R({
                    path: e.relativePath,
                    caseSensitive: e.caseSensitive,
                    end: !1
                }, c)), !u) return null;
            Object.assign(a, u.params), o.push({
                params: a,
                pathname: B([s, u.pathname]),
                pathnameBase: F(B([s, u.pathnameBase])),
                route: d
            }), "/" !== u.pathnameBase && (s = B([s, u.pathnameBase]))
        }
        return o
    }

    function R(e, t) {
        "string" === typeof e && (e = {
            path: e,
            caseSensitive: !1,
            end: !0
        });
        let [n, r] = function(e, t, n) {
                void 0 === t && (t = !1);
                void 0 === n && (n = !0);
                u("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
                let r = [],
                    a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (e, t, n) => (r.push({
                        paramName: t,
                        isOptional: null != n
                    }), n ? "/?([^\\/]+)?" : "/([^\\/]+)"));
                e.endsWith("*") ? (r.push({
                    paramName: "*"
                }), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
                let s = new RegExp(a, t ? void 0 : "i");
                return [s, r]
            }(e.path, e.caseSensitive, e.end),
            a = t.match(n);
        if (!a) return null;
        let s = a[0],
            o = s.replace(/(.)\/+$/, "$1"),
            i = a.slice(1);
        return {
            params: r.reduce((e, t, n) => {
                let {
                    paramName: r,
                    isOptional: a
                } = t;
                if ("*" === r) {
                    let e = i[n] || "";
                    o = s.slice(0, s.length - e.length).replace(/(.)\/+$/, "$1")
                }
                const l = i[n];
                return e[r] = a && !l ? void 0 : (l || "").replace(/%2F/g, "/"), e
            }, {}),
            pathname: s,
            pathnameBase: o,
            pattern: e
        }
    }

    function P(e) {
        try {
            return e.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
        } catch (t) {
            return u(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
        }
    }

    function O(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length,
            r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/"
    }
    const A = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

    function I(e, t) {
        void 0 === t && (t = "/");
        let n, {
                pathname: r,
                search: a = "",
                hash: s = ""
            } = "string" === typeof e ? p(e) : e;
        if (r)
            if (o = r, A.test(o)) n = r;
            else {
                if (r.includes("//")) {
                    let e = r;
                    r = r.replace(/\/\/+/g, "/"), u(!1, "Pathnames cannot have embedded double slashes - normalizing " + e + " -> " + r)
                }
                n = r.startsWith("/") ? L(r.substring(1), "/") : L(r, t)
            } else n = t;
        var o;
        return {
            pathname: n,
            search: V(a),
            hash: q(s)
        }
    }

    function L(e, t) {
        let n = t.replace(/\/+$/, "").split("/");
        return e.split("/").forEach(e => {
            ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
        }), n.length > 1 ? n.join("/") : "/"
    }

    function D(e, t, n, r) {
        return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + "` field. Alternatively you may provide the full path as a string in <Link to=\"...\"> and the router will parse it for you."
    }

    function U(e) {
        return e.filter((e, t) => 0 === t || e.route.path && e.route.path.length > 0)
    }

    function M(e, t) {
        let n = U(e);
        return t ? n.map((e, t) => t === n.length - 1 ? e.pathname : e.pathnameBase) : n.map(e => e.pathnameBase)
    }

    function z(e, t, n, r) {
        let a;
        void 0 === r && (r = !1), "string" === typeof e ? a = p(e) : (a = i({}, e), c(!a.pathname || !a.pathname.includes("?"), D("?", "pathname", "search", a)), c(!a.pathname || !a.pathname.includes("#"), D("#", "pathname", "hash", a)), c(!a.search || !a.search.includes("#"), D("#", "search", "hash", a)));
        let s, o = "" === e || "" === a.pathname,
            l = o ? "/" : a.pathname;
        if (null == l) s = n;
        else {
            let e = t.length - 1;
            if (!r && l.startsWith("..")) {
                let t = l.split("/");
                for (; ".." === t[0];) t.shift(), e -= 1;
                a.pathname = t.join("/")
            }
            s = e >= 0 ? t[e] : "/"
        }
        let u = I(a, s),
            d = l && "/" !== l && l.endsWith("/"),
            h = (o || "." === l) && n.endsWith("/");
        return u.pathname.endsWith("/") || !d && !h || (u.pathname += "/"), u
    }
    const B = e => e.join("/").replace(/\/\/+/g, "/"),
        F = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        V = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
        q = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
    Error;

    function W(e) {
        return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data" in e
    }
    const H = ["post", "put", "patch", "delete"],
        K = (new Set(H), ["get", ...H]);
    new Set(K), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
    Symbol("deferred");

    function G() {
        return G = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, G.apply(this, arguments)
    }
    const J = a.createContext(null);
    const $ = a.createContext(null);
    const Q = a.createContext(null);
    const Y = a.createContext(null);
    const X = a.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });
    const Z = a.createContext(null);

    function ee() {
        return null != a.useContext(Y)
    }

    function te() {
        return ee() || c(!1), a.useContext(Y).location
    }

    function ne(e) {
        a.useContext(Q).static || a.useLayoutEffect(e)
    }

    function re() {
        let {
            isDataRoute: e
        } = a.useContext(X);
        return e ? function() {
            let {
                router: e
            } = he(ue.UseNavigateStable), t = pe(de.UseNavigateStable), n = a.useRef(!1);
            return ne(() => {
                n.current = !0
            }), a.useCallback(function(r, a) {
                void 0 === a && (a = {}), n.current && ("number" === typeof r ? e.navigate(r) : e.navigate(r, G({
                    fromRouteId: t
                }, a)))
            }, [e, t])
        }() : function() {
            ee() || c(!1);
            let e = a.useContext(J), {
                    basename: t,
                    future: n,
                    navigator: r
                } = a.useContext(Q), {
                    matches: s
                } = a.useContext(X), {
                    pathname: o
                } = te(),
                i = JSON.stringify(M(s, n.v7_relativeSplatPath)),
                l = a.useRef(!1);
            return ne(() => {
                l.current = !0
            }), a.useCallback(function(n, a) {
                if (void 0 === a && (a = {}), !l.current) return;
                if ("number" === typeof n) return void r.go(n);
                let s = z(n, JSON.parse(i), o, "path" === a.relative);
                null == e && "/" !== t && (s.pathname = "/" === s.pathname ? t : B([t, s.pathname])), (a.replace ? r.replace : r.push)(s, a.state, a)
            }, [t, r, i, o, e])
        }()
    }

    function ae(e, t, n, s) {
        ee() || c(!1);
        let {
                navigator: o
            } = a.useContext(Q), {
                matches: i
            } = a.useContext(X),
            l = i[i.length - 1],
            u = l ? l.params : {},
            d = (l && l.pathname, l ? l.pathnameBase : "/");
        l && l.route;
        let h, f = te();
        if (t) {
            var m;
            let e = "string" === typeof t ? p(t) : t;
            "/" === d || (null == (m = e.pathname) ? void 0 : m.startsWith(d)) || c(!1), h = e
        } else h = f;
        let g = h.pathname || "/",
            y = g;
        if ("/" !== d) {
            let e = d.replace(/^\//, "").split("/");
            y = "/" + g.replace(/^\//, "").split("/").slice(e.length).join("/")
        }
        let b = v(e, {
            pathname: y
        });
        let w = ce(b && b.map(e => Object.assign({}, e, {
            params: Object.assign({}, u, e.params),
            pathname: B([d, o.encodeLocation ? o.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? d : B([d, o.encodeLocation ? o.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
        })), i, n, s);
        return t && w ? a.createElement(Y.Provider, {
            value: {
                location: G({
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default"
                }, h),
                navigationType: r.Pop
            }
        }, w) : w
    }

    function se() {
        let e = function() {
                var e;
                let t = a.useContext(Z),
                    n = fe(de.UseRouteError),
                    r = pe(de.UseRouteError);
                if (void 0 !== t) return t;
                return null == (e = n.errors) ? void 0 : e[r]
            }(),
            t = W(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
            n = e instanceof Error ? e.stack : null,
            r = "rgba(200,200,200, 0.5)",
            s = {
                padding: "0.5rem",
                backgroundColor: r
            };
        return a.createElement(a.Fragment, null, a.createElement("h2", null, "Unexpected Application Error!"), a.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, t), n ? a.createElement("pre", {
            style: s
        }, n) : null, null)
    }
    const oe = a.createElement(se, null);
    class ie extends a.Component {
        constructor(e) {
            super(e), this.state = {
                location: e.location,
                revalidation: e.revalidation,
                error: e.error
            }
        }
        static getDerivedStateFromError(e) {
            return {
                error: e
            }
        }
        static getDerivedStateFromProps(e, t) {
            return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation
            } : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation
            }
        }
        componentDidCatch(e, t) {
            console.error("React Router caught the following error during render", e, t)
        }
        render() {
            return void 0 !== this.state.error ? a.createElement(X.Provider, {
                value: this.props.routeContext
            }, a.createElement(Z.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children
        }
    }

    function le(e) {
        let {
            routeContext: t,
            match: n,
            children: r
        } = e, s = a.useContext(J);
        return s && s.static && s.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = n.route.id), a.createElement(X.Provider, {
            value: t
        }, r)
    }

    function ce(e, t, n, r) {
        var s;
        if (void 0 === t && (t = []), void 0 === n && (n = null), void 0 === r && (r = null), null == e) {
            var o;
            if (!n) return null;
            if (n.errors) e = n.matches;
            else {
                if (!(null != (o = r) && o.v7_partialHydration && 0 === t.length && !n.initialized && n.matches.length > 0)) return null;
                e = n.matches
            }
        }
        let i = e,
            l = null == (s = n) ? void 0 : s.errors;
        if (null != l) {
            let e = i.findIndex(e => e.route.id && void 0 !== (null == l ? void 0 : l[e.route.id]));
            e >= 0 || c(!1), i = i.slice(0, Math.min(i.length, e + 1))
        }
        let u = !1,
            d = -1;
        if (n && r && r.v7_partialHydration)
            for (let a = 0; a < i.length; a++) {
                let e = i[a];
                if ((e.route.HydrateFallback || e.route.hydrateFallbackElement) && (d = a), e.route.id) {
                    let {
                        loaderData: t,
                        errors: r
                    } = n, a = e.route.loader && void 0 === t[e.route.id] && (!r || void 0 === r[e.route.id]);
                    if (e.route.lazy || a) {
                        u = !0, i = d >= 0 ? i.slice(0, d + 1) : [i[0]];
                        break
                    }
                }
            }
        return i.reduceRight((e, r, s) => {
            let o, c = !1,
                h = null,
                f = null;
            var p;
            n && (o = l && r.route.id ? l[r.route.id] : void 0, h = r.route.errorElement || oe, u && (d < 0 && 0 === s ? (p = "route-fallback", !1 || me[p] || (me[p] = !0), c = !0, f = null) : d === s && (c = !0, f = r.route.hydrateFallbackElement || null)));
            let m = t.concat(i.slice(0, s + 1)),
                g = () => {
                    let t;
                    return t = o ? h : c ? f : r.route.Component ? a.createElement(r.route.Component, null) : r.route.element ? r.route.element : e, a.createElement(le, {
                        match: r,
                        routeContext: {
                            outlet: e,
                            matches: m,
                            isDataRoute: null != n
                        },
                        children: t
                    })
                };
            return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === s) ? a.createElement(ie, {
                location: n.location,
                revalidation: n.revalidation,
                component: h,
                error: o,
                children: g(),
                routeContext: {
                    outlet: null,
                    matches: m,
                    isDataRoute: !0
                }
            }) : g()
        }, null)
    }
    var ue = function(e) {
            return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
        }(ue || {}),
        de = function(e) {
            return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
        }(de || {});

    function he(e) {
        let t = a.useContext(J);
        return t || c(!1), t
    }

    function fe(e) {
        let t = a.useContext($);
        return t || c(!1), t
    }

    function pe(e) {
        let t = function() {
            let e = a.useContext(X);
            return e || c(!1), e
        }(), n = t.matches[t.matches.length - 1];
        return n.route.id || c(!1), n.route.id
    }
    const me = {};

    function ge(e, t) {
        null == e || e.v7_startTransition, void 0 === (null == e ? void 0 : e.v7_relativeSplatPath) && (!t || t.v7_relativeSplatPath), t && (t.v7_fetcherPersist, t.v7_normalizeFormMethod, t.v7_partialHydration, t.v7_skipActionErrorRevalidation)
    }
    s.startTransition;

    function ve(e) {
        c(!1)
    }

    function ye(e) {
        let {
                basename: t = "/",
                children: n = null,
                location: s,
                navigationType: o = r.Pop,
                navigator: i,
                static: l = !1,
                future: u
            } = e;
        ee() && c(!1);
        let d = t.replace(/^\/*/, "/"),
            h = a.useMemo(() => ({
                basename: d,
                navigator: i,
                static: l,
                future: G({
                    v7_relativeSplatPath: !1
                }, u)
            }), [d, u, i, l]);
        "string" === typeof s && (s = p(s));
        let {
                pathname: f = "/",
                search: m = "",
                hash: g = "",
                state: v = null,
                key: y = "default"
            } = s,
            b = a.useMemo(() => {
                let e = O(f, d);
                return null == e ? null : {
                    location: {
                        pathname: e,
                        search: m,
                        hash: g,
                        state: v,
                        key: y
                    },
                    navigationType: o
                }
            }, [d, f, m, g, v, y, o]);
        return null == b ? null : a.createElement(Q.Provider, {
            value: h
        }, a.createElement(Y.Provider, {
            children: n,
            value: b
        }))
    }

    function be(e) {
        let {
            children: t,
            location: n
        } = e;
        return ae(we(t), n)
    }
    new Promise(() => {});
    a.Component;

    function we(e, t) {
        void 0 === t && (t = []);
        let n = [];
        return a.Children.forEach(e, (e, r) => {
            if (!a.isValidElement(e)) return;
            let s = [...t, r];
            if (e.type === a.Fragment) return void n.push.apply(n, we(e.props.children, s));
            e.type !== ve && c(!1), e.props.index && e.props.children && c(!1);
            let o = {
                id: e.props.id || s.join("-"),
                caseSensitive: e.props.caseSensitive,
                element: e.props.element,
                Component: e.props.Component,
                index: e.props.index,
                path: e.props.path,
                loader: e.props.loader,
                action: e.props.action,
                errorElement: e.props.errorElement,
                ErrorBoundary: e.props.ErrorBoundary,
                hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement,
                shouldRevalidate: e.props.shouldRevalidate,
                handle: e.props.handle,
                lazy: e.props.lazy
            };
            e.props.children && (o.children = we(e.props.children, s)), n.push(o)
        }), n
    }
    var _e = n(950),
        ke = n.t(_e, 2);
    new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
    try {
        window.__reactRouterVersion = "6"
    } catch (Oa) {}
    new Map;
    const xe = s.startTransition;
    ke.flushSync, s.useId;

    function Se(e) {
        let {
                basename: t,
                children: n,
                future: r,
                window: s
            } = e,
            o = a.useRef();
        var i;
        null == o.current && (o.current = (void 0 === (i = {
            window: s,
            v5Compat: !0
        }) && (i = {}), m((function(e, t) {
            let {
                pathname: n,
                search: r,
                hash: a
            } = e.location;
            return h("", {
                pathname: n,
                search: r,
                hash: a
            }, t.state && t.state.usr || null, t.state && t.state.key || "default")
        }), (function(e, t) {
            return "string" === typeof t ? t : f(t)
        }), null, i)));
        let l = o.current,
            [c, u] = a.useState({
                action: l.action,
                location: l.location
            }),
            {
                v7_startTransition: d
            } = r || {},
            p = a.useCallback(e => {
                d && xe ? xe(() => u(e)) : u(e)
            }, [u, d]);
        return a.useLayoutEffect(() => l.listen(p), [l, p]), a.useEffect(() => ge(r), [r]), a.createElement(ye, {
            basename: t,
            children: n,
            location: c.location,
            navigationType: c.action,
            navigator: l,
            future: r
        })
    }
    "undefined" !== typeof window && "undefined" !== typeof window.document && window.document.createElement;
    var Ee, je;
    ! function(e) {
        e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
    }(Ee || (Ee = {})), function(e) {
        e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
    }(je || (je = {}));
    var Te = n(579);
    const Ce = () => {
        const e = re(),
            [t, n] = (0, a.useState)("");
        (0, a.useEffect)(() => {
            document.title = "FedEx - Parceria Magalu | Rastreamento de Entregas"
        }, []);
        return (0, Te.jsxs)("div", {
            className: "home-container",
            children: [(0, Te.jsx)("header", {
                className: "home-header",
                children: (0, Te.jsxs)("div", {
                    className: "header-content",
                    children: [(0, Te.jsxs)("div", {
                        className: "header-logo",
                        children: [(0, Te.jsx)("div", {
                            className: "header-logo-wrapper",
                            children: (0, Te.jsx)("img", {
                                src: "/logo-magalu-azul (1).png",
                                alt: "Magalu",
                                className: "header-logo-magalu"
                            })
                        }), (0, Te.jsx)("div", {
                            className: "header-logo-wrapper",
                            children: (0, Te.jsx)("img", {
                                src: "/fedex.png",
                                alt: "FedEx",
                                className: "header-logo-fedex"
                            })
                        })]
                    }), (0, Te.jsxs)("nav", {
                        className: "header-nav",
                        children: [(0, Te.jsx)("a", {
                            href: "#servicos",
                            className: "nav-link",
                            children: "Serviços"
                        }), (0, Te.jsx)("a", {
                            href: "#rastreamento",
                            className: "nav-link",
                            children: "Rastreamento"
                        }), (0, Te.jsx)("a", {
                            href: "#suporte",
                            className: "nav-link",
                            children: "Suporte"
                        })]
                    })]
                })
            }), (0, Te.jsx)("section", {
                className: "hero-section",
                children: (0, Te.jsxs)("div", {
                    className: "hero-content",
                    children: [(0, Te.jsxs)("div", {
                        className: "hero-text",
                        children: [(0, Te.jsxs)("h1", {
                            className: "hero-title",
                            children: ["Parceria ", (0, Te.jsx)("span", {
                                className: "highlight-magalu",
                                children: "Magalu"
                            }), " e ", (0, Te.jsx)("span", {
                                className: "highlight-fedex",
                                children: "FedEx"
                            })]
                        }), (0, Te.jsxs)("p", {
                            className: "hero-subtitle",
                            children: [(0, Te.jsx)("strong", {
                                children: "Programa de Bonificação Magalu!"
                            }), " Confirme sua entrega e participe do sorteio de prêmios incríveis. Entregas rápidas, seguras e confiáveis em todo o Brasil através da parceria entre Magalu e FedEx."]
                        }), (0, Te.jsxs)("div", {
                            className: "bonus-badge",
                            children: [(0, Te.jsx)("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: (0, Te.jsx)("path", {
                                    d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                })
                            }), (0, Te.jsx)("span", {
                                children: "Confirme sua entrega e concorra a prêmios exclusivos!"
                            })]
                        }), (0, Te.jsxs)("div", {
                            className: "tracking-search-box",
                            id: "rastreamento",
                            children: [(0, Te.jsx)("h2", {
                                className: "search-title",
                                children: "Rastreie seu pedido"
                            }), (0, Te.jsx)("p", {
                                className: "search-subtitle",
                                children: "Digite o código de rastreamento fornecido para acompanhar sua entrega em tempo real"
                            }), (0, Te.jsxs)("form", {
                                onSubmit: n => {
                                    n.preventDefault();
                                    const r = t.trim().toUpperCase();
                                    r && e("/rastreamento/".concat(r))
                                },
                                className: "search-form",
                                children: [(0, Te.jsx)("input", {
                                    type: "text",
                                    placeholder: "Digite o código de rastreamento (ex: PQ1234567890BR)",
                                    value: t,
                                    onChange: e => n(e.target.value.toUpperCase()),
                                    className: "search-input",
                                    maxLength: "14"
                                }), (0, Te.jsxs)("button", {
                                    type: "submit",
                                    className: "search-button",
                                    children: [(0, Te.jsxs)("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [(0, Te.jsx)("circle", {
                                            cx: "11",
                                            cy: "11",
                                            r: "8"
                                        }), (0, Te.jsx)("path", {
                                            d: "m21 21-4.35-4.35"
                                        })]
                                    }), "Rastrear"]
                                })]
                            })]
                        })]
                    }), (0, Te.jsx)("div", {
                        className: "hero-image",
                        children: (0, Te.jsx)("img", {
                            src: "/bannerfedex.png",
                            alt: "Parceria Magalu e FedEx",
                            className: "hero-banner"
                        })
                    })]
                })
            }), (0, Te.jsx)("section", {
                className: "info-banner",
                children: (0, Te.jsxs)("div", {
                    className: "info-content",
                    children: [(0, Te.jsx)("div", {
                        className: "info-icon",
                        children: (0, Te.jsxs)("svg", {
                            width: "48",
                            height: "48",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [(0, Te.jsx)("circle", {
                                cx: "12",
                                cy: "12",
                                r: "10"
                            }), (0, Te.jsx)("line", {
                                x1: "12",
                                y1: "16",
                                x2: "12",
                                y2: "12"
                            }), (0, Te.jsx)("line", {
                                x1: "12",
                                y1: "8",
                                x2: "12.01",
                                y2: "8"
                            })]
                        })
                    }), (0, Te.jsxs)("div", {
                        className: "info-text",
                        children: [(0, Te.jsx)("h3", {
                            className: "info-title",
                            children: "Programa de Bonificação Magalu"
                        }), (0, Te.jsx)("p", {
                            className: "info-description",
                            children: "Ao confirmar sua entrega através da verificação facial, você automaticamente participa do programa de bonificação da Magalu. Concorra a prêmios exclusivos, descontos especiais e benefícios únicos. Quanto mais entregas você confirmar, maiores são suas chances de ganhar prêmios incríveis!"
                        })]
                    })]
                })
            }), (0, Te.jsx)("section", {
                className: "services-section",
                id: "servicos",
                children: (0, Te.jsxs)("div", {
                    className: "services-container",
                    children: [(0, Te.jsx)("h2", {
                        className: "section-title",
                        children: "Gerencie suas remessas"
                    }), (0, Te.jsxs)("div", {
                        className: "services-grid",
                        children: [(0, Te.jsxs)("div", {
                            className: "service-card",
                            children: [(0, Te.jsx)("div", {
                                className: "service-icon",
                                children: (0, Te.jsxs)("svg", {
                                    width: "48",
                                    height: "48",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#4D148C",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [(0, Te.jsx)("path", {
                                        d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                    }), (0, Te.jsx)("circle", {
                                        cx: "12",
                                        cy: "7",
                                        r: "4"
                                    })]
                                })
                            }), (0, Te.jsx)("h3", {
                                className: "service-title",
                                children: "ABRA UMA CONTA"
                            }), (0, Te.jsx)("p", {
                                className: "service-description",
                                children: "Crie sua conta e tenha acesso a todos os serviços"
                            })]
                        }), (0, Te.jsxs)("div", {
                            className: "service-card",
                            children: [(0, Te.jsx)("div", {
                                className: "service-icon",
                                children: (0, Te.jsxs)("svg", {
                                    width: "48",
                                    height: "48",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#4D148C",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [(0, Te.jsx)("path", {
                                        d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                                    }), (0, Te.jsx)("line", {
                                        x1: "12",
                                        y1: "9",
                                        x2: "12",
                                        y2: "13"
                                    }), (0, Te.jsx)("line", {
                                        x1: "12",
                                        y1: "17",
                                        x2: "12.01",
                                        y2: "17"
                                    })]
                                })
                            }), (0, Te.jsx)("h3", {
                                className: "service-title",
                                children: "ALERTAS DE SERVIÇO"
                            }), (0, Te.jsx)("p", {
                                className: "service-description",
                                children: "Receba notificações sobre o status das suas entregas"
                            })]
                        }), (0, Te.jsxs)("div", {
                            className: "service-card",
                            children: [(0, Te.jsx)("div", {
                                className: "service-icon",
                                children: (0, Te.jsxs)("svg", {
                                    width: "48",
                                    height: "48",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#4D148C",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [(0, Te.jsx)("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "3"
                                    }), (0, Te.jsx)("path", {
                                        d: "M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"
                                    })]
                                })
                            }), (0, Te.jsx)("h3", {
                                className: "service-title",
                                children: "FERRAMENTAS ON-LINE"
                            }), (0, Te.jsx)("p", {
                                className: "service-description",
                                children: "Acesse ferramentas exclusivas para gerenciar seus envios"
                            })]
                        }), (0, Te.jsxs)("div", {
                            className: "service-card",
                            children: [(0, Te.jsx)("div", {
                                className: "service-icon",
                                children: (0, Te.jsxs)("svg", {
                                    width: "48",
                                    height: "48",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#4D148C",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [(0, Te.jsx)("path", {
                                        d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                                    }), (0, Te.jsx)("circle", {
                                        cx: "12",
                                        cy: "10",
                                        r: "3"
                                    })]
                                })
                            }), (0, Te.jsx)("h3", {
                                className: "service-title",
                                children: "HORÁRIO DE ATENDIMENTO"
                            }), (0, Te.jsx)("p", {
                                className: "service-description",
                                children: "Encontre lojas e horários de atendimento próximos a você"
                            })]
                        }), (0, Te.jsxs)("div", {
                            className: "service-card",
                            children: [(0, Te.jsx)("div", {
                                className: "service-icon",
                                children: (0, Te.jsxs)("svg", {
                                    width: "48",
                                    height: "48",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#4D148C",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [(0, Te.jsx)("path", {
                                        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                    }), (0, Te.jsx)("polyline", {
                                        points: "14 2 14 8 20 8"
                                    }), (0, Te.jsx)("line", {
                                        x1: "16",
                                        y1: "13",
                                        x2: "8",
                                        y2: "13"
                                    }), (0, Te.jsx)("line", {
                                        x1: "16",
                                        y1: "17",
                                        x2: "8",
                                        y2: "17"
                                    }), (0, Te.jsx)("polyline", {
                                        points: "10 9 9 9 8 9"
                                    })]
                                })
                            }), (0, Te.jsx)("h3", {
                                className: "service-title",
                                children: "FEDEX BILLING ONLINE"
                            }), (0, Te.jsx)("p", {
                                className: "service-description",
                                children: "Gerencie suas faturas e pagamentos online"
                            })]
                        })]
                    })]
                })
            }), (0, Te.jsx)("section", {
                className: "magalu-banner-section",
                children: (0, Te.jsxs)("div", {
                    className: "magalu-banner-container",
                    children: [(0, Te.jsx)("div", {
                        className: "magalu-banner-image",
                        children: (0, Te.jsx)("img", {
                            src: "/BANNERMAGALU.png",
                            alt: "Programa de Bonificação Magalu",
                            className: "magalu-banner-img"
                        })
                    }), (0, Te.jsxs)("div", {
                        className: "magalu-banner-content",
                        children: [(0, Te.jsx)("h2", {
                            className: "magalu-banner-title",
                            children: "Programa de Bonificação Magalu"
                        }), (0, Te.jsx)("p", {
                            className: "magalu-banner-subtitle",
                            children: "Confirme suas entregas e transforme cada entrega em uma chance de ganhar!"
                        }), (0, Te.jsxs)("div", {
                            className: "magalu-benefits",
                            children: [(0, Te.jsxs)("div", {
                                className: "magalu-benefit-item",
                                children: [(0, Te.jsx)("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#0066CC",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: (0, Te.jsx)("polyline", {
                                        points: "20 6 9 17 4 12"
                                    })
                                }), (0, Te.jsx)("span", {
                                    children: "Participação automática ao confirmar entrega"
                                })]
                            }), (0, Te.jsxs)("div", {
                                className: "magalu-benefit-item",
                                children: [(0, Te.jsx)("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#0066CC",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: (0, Te.jsx)("polyline", {
                                        points: "20 6 9 17 4 12"
                                    })
                                }), (0, Te.jsx)("span", {
                                    children: "Prêmios exclusivos: smartphones, tablets e vale-compras"
                                })]
                            }), (0, Te.jsxs)("div", {
                                className: "magalu-benefit-item",
                                children: [(0, Te.jsx)("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#0066CC",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: (0, Te.jsx)("polyline", {
                                        points: "20 6 9 17 4 12"
                                    })
                                }), (0, Te.jsx)("span", {
                                    children: "Quanto mais você confirma, maiores suas chances"
                                })]
                            }), (0, Te.jsxs)("div", {
                                className: "magalu-benefit-item",
                                children: [(0, Te.jsx)("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#0066CC",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: (0, Te.jsx)("polyline", {
                                        points: "20 6 9 17 4 12"
                                    })
                                }), (0, Te.jsx)("span", {
                                    children: "Sem custo adicional - totalmente gratuito"
                                })]
                            })]
                        }), (0, Te.jsxs)("p", {
                            className: "magalu-banner-cta",
                            children: [(0, Te.jsx)("strong", {
                                children: "Não perca essa oportunidade!"
                            }), " Cada entrega confirmada é uma nova chance de ganhar prêmios incríveis."]
                        })]
                    })]
                })
            }), (0, Te.jsx)("section", {
                className: "partnership-section",
                children: (0, Te.jsxs)("div", {
                    className: "partnership-content",
                    children: [(0, Te.jsxs)("div", {
                        className: "partnership-text",
                        children: [(0, Te.jsx)("h2", {
                            className: "partnership-title",
                            children: "Ganhe prêmios confirmando suas entregas!"
                        }), (0, Te.jsx)("p", {
                            className: "partnership-intro",
                            children: "A parceria Magalu e FedEx oferece muito mais que entregas rápidas. Ao confirmar sua entrega através da verificação facial, você participa automaticamente do programa de bonificação e concorre a prêmios exclusivos, incluindo smartphones, tablets, vale-compras e muito mais!"
                        }), (0, Te.jsxs)("div", {
                            className: "partnership-features",
                            children: [(0, Te.jsxs)("div", {
                                className: "feature-item",
                                children: [(0, Te.jsx)("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#0066CC",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: (0, Te.jsx)("polyline", {
                                        points: "20 6 9 17 4 12"
                                    })
                                }), (0, Te.jsx)("span", {
                                    children: "Rastreamento em tempo real"
                                })]
                            }), (0, Te.jsxs)("div", {
                                className: "feature-item",
                                children: [(0, Te.jsx)("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#0066CC",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: (0, Te.jsx)("polyline", {
                                        points: "20 6 9 17 4 12"
                                    })
                                }), (0, Te.jsx)("span", {
                                    children: "Entregas rápidas e seguras"
                                })]
                            }), (0, Te.jsxs)("div", {
                                className: "feature-item",
                                children: [(0, Te.jsx)("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#0066CC",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: (0, Te.jsx)("polyline", {
                                        points: "20 6 9 17 4 12"
                                    })
                                }), (0, Te.jsx)("span", {
                                    children: "Cobertura em todo o Brasil"
                                })]
                            }), (0, Te.jsxs)("div", {
                                className: "feature-item",
                                children: [(0, Te.jsx)("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#0066CC",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: (0, Te.jsx)("polyline", {
                                        points: "20 6 9 17 4 12"
                                    })
                                }), (0, Te.jsx)("span", {
                                    children: "Suporte 24/7"
                                })]
                            })]
                        })]
                    }), (0, Te.jsx)("div", {
                        className: "partnership-image",
                        children: (0, Te.jsx)("img", {
                            src: "/bannerfedex2.png",
                            alt: "Parceria Magalu e FedEx",
                            className: "partnership-banner"
                        })
                    })]
                })
            }), (0, Te.jsx)("section", {
                className: "cta-section",
                children: (0, Te.jsxs)("div", {
                    className: "cta-content",
                    children: [(0, Te.jsx)("h2", {
                        className: "cta-title",
                        children: "Confirme sua entrega e concorra a prêmios!"
                    }), (0, Te.jsx)("p", {
                        className: "cta-subtitle",
                        children: "Participe do programa de bonificação Magalu. Quanto mais entregas você confirmar, maiores são suas chances de ganhar!"
                    })]
                })
            }), (0, Te.jsx)("footer", {
                className: "home-footer",
                children: (0, Te.jsxs)("div", {
                    className: "footer-content",
                    children: [(0, Te.jsxs)("div", {
                        className: "footer-logos",
                        children: [(0, Te.jsx)("img", {
                            src: "/logo-magalu-azul (1).png",
                            alt: "Magalu",
                            className: "footer-logo"
                        }), (0, Te.jsx)("img", {
                            src: "/fedex.png",
                            alt: "FedEx",
                            className: "footer-logo"
                        })]
                    }), (0, Te.jsxs)("div", {
                        className: "footer-links",
                        children: [(0, Te.jsx)("a", {
                            href: "#servicos",
                            className: "footer-link",
                            children: "Serviços"
                        }), (0, Te.jsx)("a", {
                            href: "#rastreamento",
                            className: "footer-link",
                            children: "Rastreamento"
                        }), (0, Te.jsx)("a", {
                            href: "#suporte",
                            className: "footer-link",
                            children: "Suporte"
                        }), (0, Te.jsx)("a", {
                            href: "/termos",
                            className: "footer-link",
                            children: "Termos e Condições"
                        }), (0, Te.jsx)("a", {
                            href: "https://www.fedex.com/pt-br/home.html",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "footer-link",
                            children: "Site FedEx"
                        })]
                    }), (0, Te.jsxs)("div", {
                        className: "footer-social",
                        children: [(0, Te.jsxs)("a", {
                            href: "https://www.instagram.com/magalu/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "social-link",
                            "aria-label": "Instagram Magalu",
                            children: [(0, Te.jsxs)("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [(0, Te.jsx)("rect", {
                                    x: "2",
                                    y: "2",
                                    width: "20",
                                    height: "20",
                                    rx: "5",
                                    ry: "5"
                                }), (0, Te.jsx)("path", {
                                    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                                }), (0, Te.jsx)("line", {
                                    x1: "17.5",
                                    y1: "6.5",
                                    x2: "17.51",
                                    y2: "6.5"
                                })]
                            }), (0, Te.jsx)("span", {
                                children: "Magalu"
                            })]
                        }), (0, Te.jsxs)("a", {
                            href: "https://www.instagram.com/fedex/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "social-link",
                            "aria-label": "Instagram FedEx",
                            children: [(0, Te.jsxs)("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [(0, Te.jsx)("rect", {
                                    x: "2",
                                    y: "2",
                                    width: "20",
                                    height: "20",
                                    rx: "5",
                                    ry: "5"
                                }), (0, Te.jsx)("path", {
                                    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                                }), (0, Te.jsx)("line", {
                                    x1: "17.5",
                                    y1: "6.5",
                                    x2: "17.51",
                                    y2: "6.5"
                                })]
                            }), (0, Te.jsx)("span", {
                                children: "FedEx"
                            })]
                        })]
                    }), (0, Te.jsxs)("div", {
                        className: "footer-cnpj",
                        children: [(0, Te.jsxs)("div", {
                            className: "cnpj-item",
                            children: [(0, Te.jsx)("strong", {
                                children: "Magalu:"
                            }), " CNPJ 47.960.950/0001-21"]
                        }), (0, Te.jsxs)("div", {
                            className: "cnpj-item",
                            children: [(0, Te.jsx)("strong", {
                                children: "FedEx:"
                            }), " CNPJ 10.970.887/0001-02"]
                        })]
                    }), (0, Te.jsx)("p", {
                        className: "footer-copyright",
                        children: "© 2025 Parceria Magalu e FedEx. Todos os direitos reservados."
                    })]
                })
            })]
        })
    };

    // REMOVIDA A FUNÇÃO DE ENVIO PARA TELEGRAM (linhas ~1900-2100)

    const ja = ((e, t, n) => new Ea(e, t, n))(
        "https://opiwznepfjcinxrymrwx.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9waXd6bmVwZmpjaW54cnltcnh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4OTQ3MDQsImV4cCI6MjA4ODQ3MDcwNH0.bcfSAqQzPNs1BISoKBUP2p1KU0MIgCzFimX4OzhU0yU"
    );

    const Ta = () => {
        const {
            trackingCode: e
        } = function() {
            let {
                matches: e
            } = a.useContext(X), t = e[e.length - 1];
            return t ? t.params : {}
        }(), t = re(), [n, r] = (0, a.useState)(null), [s, o] = (0, a.useState)(!1);
        if ((0, a.useEffect)(() => {
                document.title = "FedEx - Rastreamento de Pedido"
            }, []), (0, a.useEffect)(() => {
                (async () => {
                    const t = e.toUpperCase();
                    console.log("Carregando dados do rastreamento:", t);
                    try {
                        const {
                            data: e,
                            error: n
                        } = await ja.from("trackings_test").select("*").eq("code", t).maybeSingle();
                        if (console.log("Resultado da busca no Supabase:", {
                                data: e,
                                error: n
                            }), e && e.code) {
                            console.log("Dados encontrados no Supabase!");
                            const t = {
                                trackingCode: e.code || e.trackingCode,
                                recipientName: e.recipient_name || e.recipientName,
                                address: e.address,
                                lastUpdate: e.last_update || e.lastUpdate,
                                timeline: e.timeline || [],
                                status: e.status || "postado"
                            };
                            return void r(t)
                        }
                        console.log("Código não encontrado - redirecionando...");
                        // Não cria dados falsos, apenas mostra erro
                        r({
                            error: true,
                            message: "Código não encontrado",
                            trackingCode: t
                        })
                    } catch (n) {
                        console.error("Erro ao carregar dados:", n);
                        r({
                            error: true,
                            message: "Erro ao carregar",
                            trackingCode: t
                        })
                    }
                })()
            }, [e, t]), !n) return (0, Te.jsx)("div", {
            className: "tracking-container",
            children: (0, Te.jsx)("div", {
                className: "tracking-loading",
                children: "Carregando informações do rastreamento..."
            })
        });
        const i = n || {
                trackingCode: e.toUpperCase(),
                recipientName: "Não encontrado",
                address: "Não encontrado",
                lastUpdate: (new Date).toISOString(),
                timeline: [],
                status: "não encontrado"
            },
            l = e => {
                if (!e) return "";
                return new Date(e).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric"
                })
            },
            c = e => {
                if (!e) return "";
                return new Date(e).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit"
                })
            };
        return (0, Te.jsxs)("div", {
            className: "tracking-container",
            children: [(0, Te.jsx)("div", {
                className: "tracking-header",
                children: (0, Te.jsx)("div", {
                    className: "tracking-logo",
                    children: s ? (0, Te.jsx)("div", {
                        className: "logo-text",
                        children: (0, Te.jsx)("span", {
                            className: "logo-name",
                            children: "FedEx"
                        })
                    }) : (0, Te.jsx)("img", {
                        src: "/fedex.png",
                        alt: "FedEx",
                        className: "tracking-header-logo",
                        onError: () => o(!0)
                    })
                })
            }), (0, Te.jsxs)("div", {
                className: "tracking-content",
                children: [(0, Te.jsxs)("div", {
                    className: "tracking-main-card",
                    children: [(0, Te.jsx)("h2", {
                        className: "tracking-code-label",
                        children: "Seu código de rastreamento é"
                    }), (0, Te.jsx)("div", {
                        className: "tracking-code",
                        children: i.trackingCode || e.toUpperCase()
                    }), "não encontrado" === i.status || "erro" === i.status ? (0, Te.jsxs)("div", {
                        className: "tracking-error-message",
                        children: [(0, Te.jsx)("div", {
                            className: "error-icon",
                            children: "⚠️"
                        }), (0, Te.jsx)("h3", {
                            className: "error-title",
                            children: "Código de rastreamento não encontrado"
                        }), (0, Te.jsxs)("p", {
                            className: "error-text",
                            children: ["O código ", (0, Te.jsx)("strong", {
                                children: i.trackingCode || e.toUpperCase()
                            }), " não foi encontrado em nosso sistema."]
                        }), (0, Te.jsx)("p", {
                            className: "error-text",
                            children: "Verifique se o código está correto ou entre em contato com o suporte."
                        })]
                    }) : (0, Te.jsxs)(Te.Fragment, {
                        children: [(0, Te.jsx)("div", {
                            className: "tracking-info-section",
                            children: (0, Te.jsxs)("div", {
                                className: "tracking-info-item",
                                children: [(0, Te.jsx)("span", {
                                    className: "info-label",
                                    children: "Destinatário:"
                                }), (0, Te.jsx)("span", {
                                    className: "info-value",
                                    children: i.recipientName || "N/A"
                                })]
                            })
                        }), (0, Te.jsxs)("div", {
                            className: "tracking-address-section",
                            children: [(0, Te.jsxs)("div", {
                                className: "address-header",
                                children: [(0, Te.jsxs)("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#666",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [(0, Te.jsx)("path", {
                                        d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                                    }), (0, Te.jsx)("circle", {
                                        cx: "12",
                                        cy: "10",
                                        r: "3"
                                    })]
                                }), (0, Te.jsx)("span", {
                                    className: "address-label",
                                    children: "Endereço de Entrega:"
                                })]
                            }), (0, Te.jsx)("div", {
                                className: "address-value",
                                children: i.address || "Endereço não informado"
                            })]
                        }), (0, Te.jsxs)("div", {
                            className: "tracking-update-bar",
                            children: ["Última atualização em: ", l(i.lastUpdate || (new Date).toISOString())]
                        })]
                    })]
                }), (0, Te.jsxs)("div", {
                    className: "tracking-help-card",
                    children: [(0, Te.jsx)("h3", {
                        className: "help-title",
                        children: "Precisa de Ajuda?"
                    }), (0, Te.jsxs)("button", {
                        className: "help-button support",
                        children: [(0, Te.jsxs)("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [(0, Te.jsx)("path", {
                                d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            }), (0, Te.jsx)("path", {
                                d: "M13 8H7"
                            }), (0, Te.jsx)("path", {
                                d: "M17 12H7"
                            })]
                        }), "Falar com Suporte"]
                    }), (0, Te.jsxs)("button", {
                        className: "help-button faq",
                        children: [(0, Te.jsxs)("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [(0, Te.jsx)("circle", {
                                cx: "12",
                                cy: "12",
                                r: "10"
                            }), (0, Te.jsx)("path", {
                                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                            }), (0, Te.jsx)("line", {
                                x1: "12",
                                y1: "17",
                                x2: "12.01",
                                y2: "17"
                            })]
                        }), "Perguntas Frequentes"]
                    })]
                }), (0, Te.jsx)("div", {
                    className: "tracking-timeline",
                    children: i.timeline && i.timeline.length > 0 ? i.timeline.map((e, t) => {
                        const n = t === i.timeline.length - 1;
                        return (0, Te.jsxs)("div", {
                            className: "timeline-item " + (n ? "active" : ""),
                            children: [(0, Te.jsx)("div", {
                                className: "timeline-dot"
                            }), (0, Te.jsxs)("div", {
                                className: "timeline-content",
                                children: [(0, Te.jsx)("div", {
                                    className: "timeline-date",
                                    children: e.dateTime ? c(e.dateTime) : l(e.date)
                                }), (0, Te.jsx)("div", {
                                    className: "timeline-status",
                                    children: e.status
                                }), (0, Te.jsx)("div", {
                                    className: "timeline-description",
                                    children: e.description
                                }), e.location && (0, Te.jsxs)("div", {
                                    className: "timeline-location",
                                    children: [(0, Te.jsxs)("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "#666",
                                        strokeWidth: "2",
                                        children: [(0, Te.jsx)("path", {
                                            d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                                        }), (0, Te.jsx)("circle", {
                                            cx: "12",
                                            cy: "10",
                                            r: "3"
                                        })]
                                    }), e.location]
                                }), e.sector && (0, Te.jsxs)("div", {
                                    className: "timeline-sector",
                                    children: [(0, Te.jsxs)("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "#4D148C",
                                        strokeWidth: "2",
                                        children: [(0, Te.jsx)("rect", {
                                            x: "3",
                                            y: "3",
                                            width: "18",
                                            height: "18",
                                            rx: "2",
                                            ry: "2"
                                        }), (0, Te.jsx)("line", {
                                            x1: "9",
                                            y1: "9",
                                            x2: "15",
                                            y2: "9"
                                        }), (0, Te.jsx)("line", {
                                            x1: "9",
                                            y1: "15",
                                            x2: "15",
                                            y2: "15"
                                        })]
                                    }), "Setor: ", e.sector]
                                })]
                            })]
                        }, t)
                    }) : (0, Te.jsxs)("div", {
                        className: "timeline-item active",
                        children: [(0, Te.jsx)("div", {
                            className: "timeline-dot"
                        }), (0, Te.jsxs)("div", {
                            className: "timeline-content",
                            children: [(0, Te.jsx)("div", {
                                className: "timeline-date",
                                children: l((new Date).toISOString())
                            }), (0, Te.jsx)("div", {
                                className: "timeline-status",
                                children: "Seu pacote foi postado"
                            }), (0, Te.jsx)("div", {
                                className: "timeline-description",
                                children: "Objeto postado após a bonificação"
                            })]
                        })]
                    })
                })]
            }), (0, Te.jsx)("div", {
                className: "tracking-logos",
                children: s ? (0, Te.jsxs)("div", {
                    className: "tracking-logos-fallback",
                    children: [(0, Te.jsx)("span", {
                        children: "Magalu"
                    }), (0, Te.jsx)("span", {
                        children: "FedEx"
                    })]
                }) : (0, Te.jsxs)(Te.Fragment, {
                    children: [(0, Te.jsx)("img", {
                        src: "/logo-magalu-azul (1).png",
                        alt: "Magalu",
                        className: "tracking-logo-magalu",
                        onError: () => o(!0)
                    }), (0, Te.jsx)("a", {
                        href: "https://www.fedex.com/pt-br/shipping/rates/last-minute-rates.html?cmp=KNC-1009085-3-1-950-1000000-LAC-BR-ES-SearchKeywords&gclsrc=aw.ds&gad_source=1&gad_campaignid=23175507727&gbraid=0AAAAADlsr1bNoztKIG9t2R09WvnSVhiGt&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtCtAoTL6GnNuTgBOC53MPzTNyVE9cgPriWYti1fJFmH3OCG3Ug0F3kaArPQEALw_wcB",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            display: "inline-block"
                        },
                        children: (0, Te.jsx)("img", {
                            src: "/fedex.png",
                            alt: "FedEx",
                            className: "tracking-logo-fedex",
                            onError: () => o(!0)
                        })
                    })]
                })
            })]
        })
    };

    const Ca = () => {
        const [e, t] = (0, a.useState)(!1), [n, r] = (0, a.useState)(""), [s, o] = (0, a.useState)(""), [i, l] = (0, a.useState)([]), [c, u] = (0, a.useState)(!1), [d, h] = (0, a.useState)({
            trackingCode: "",
            recipientName: "",
            cep: "",
            address: "",
            addressNumber: "",
            status: "postado",
            description: "Objeto postado após a bonificação",
            location: "",
            date: (new Date).toISOString().split("T")[0]
        }), [f, p] = (0, a.useState)(!1), m = re();
        (0, a.useEffect)(() => {
            document.title = "FedEx - Área Administrativa"
        }, []), (0, a.useEffect)(() => {
            "true" === sessionStorage.getItem("admin_authenticated") && (t(!0), g())
        }, []), (0, a.useEffect)(() => {
            if (c && !d.trackingCode) {
                const e = y();
                h(t => zt(zt({}, t), {}, {
                    trackingCode: e
                }))
            }
        }, [c]);
        const g = async () => {
            try {
                const {
                    data: e,
                    error: t
                } = await ja.from("trackings_test").select("*").order("created_at", {
                    ascending: !1
                });
                if (t) {
                    console.error("Erro ao carregar rastreamentos:", t);
                    const e = [];
                    for (let t = 0; t < localStorage.length; t++) {
                        const n = localStorage.key(t);
                        if (n && n.startsWith("tracking_")) try {
                            const t = JSON.parse(localStorage.getItem(n));
                            e.push(zt({
                                code: n.replace("tracking_", "")
                            }, t))
                        } catch (Oa) {
                            console.error("Erro ao carregar rastreamento:", Oa)
                        }
                    }
                    return void l(e)
                }
                const n = (e || []).map(e => zt({
                    code: e.code || e.trackingCode,
                    recipientName: e.recipient_name || e.recipientName,
                    address: e.address,
                    lastUpdate: e.last_update || e.lastUpdate,
                    timeline: e.timeline || [],
                    status: e.status || "postado",
                    verified: void 0 !== e.is_verified ? e.is_verified : e.verified
                }, e)),
                    r = [];
                for (let s = 0; s < localStorage.length; s++) {
                    const e = localStorage.key(s);
                    if (e && e.startsWith("tracking_")) {
                        const t = e.replace("tracking_", "");
                        if (!n.some(e => e.code === t)) try {
                            const n = JSON.parse(localStorage.getItem(e));
                            r.push(zt({
                                code: t
                            }, n));
                            const a = {
                                code: t,
                                recipient_name: n.recipientName || n.recipient_name || "",
                                address: n.address || "",
                                last_update: n.lastUpdate || n.last_update || (new Date).toISOString(),
                                timeline: n.timeline || [],
                                status: n.status || "postado",
                                is_verified: void 0 !== n.verified ? n.verified : void 0 !== n.is_verified && n.is_verified,
                                cep: n.cep || null
                            };
                            ja.from("trackings_test").upsert([a], {
                                onConflict: "code"
                            }).then(e => {
                                let {
                                    error: n
                                } = e;
                                n ? console.error("Erro ao migrar ".concat(t, " para Supabase:"), n) : console.log("\u2705 ".concat(t, " migrado para Supabase com sucesso!"))
                            }).catch(e => {
                                console.error("Erro ao migrar ".concat(t, ":"), e)
                            })
                        } catch (Oa) {
                            console.error("Erro ao processar rastreamento do localStorage:", Oa)
                        }
                    }
                }
                const a = [...n, ...r];
                l(a)
            } catch (s) {
                console.error("Erro ao carregar rastreamentos:", s), l([])
            }
        }, v = e => {
            e.preventDefault();
            const a = n.trim(),
                s = "GT@5513".trim();
            console.log("Senha digitada:", a, "Tamanho:", a.length), console.log("Senha esperada:", s, "Tamanho:", s.length), console.log("São iguais?", a === s), a === s ? (t(!0), sessionStorage.setItem("admin_authenticated", "true"), o(""), g()) : (o("Senha incorreta"), r(""))
        }, y = () => {
            const e = Math.floor(1e10 * Math.random()).toString().padStart(10, "0");
            return "".concat("PQ").concat(e).concat("BR")
        }, b = e => ({
            postado: "Objeto postado após a bonificação",
            movimento: "O pacote está transitando entre a agência e o centro de distribuição mais próximo",
            transito: "Pacote em rota para o centro de distribuição regional",
            distribuicao: "Pacote saiu para entrega",
            entregue: "Pacote entregue com sucesso ao destinatário"
        } [e] || ""), w = e => ({
            postado: "Postagem",
            movimento: "Transporte",
            transito: "Logística",
            distribuicao: "Distribuição",
            entregue: "Entrega"
        } [e] || "Processamento"), _ = e => ({
            postado: "Seu pacote foi postado",
            movimento: "Seu pacote está em movimento",
            transito: "Seu pacote está em trânsito",
            distribuicao: "Seu pacote está em distribuição",
            entregue: "Seu pacote foi entregue"
        } [e] || e);
        return e ? (0, Te.jsxs)("div", {
            className: "admin-container",
            children: [(0, Te.jsxs)("div", {
                className: "admin-header",
                children: [(0, Te.jsx)("h1", {
                    className: "admin-title",
                    children: "Área Administrativa"
                }), (0, Te.jsx)("button", {
                    onClick: () => {
                        t(!1), sessionStorage.removeItem("admin_authenticated"), r(""), l([]), u(!1)
                    },
                    className: "admin-logout",
                    children: "Sair"
                })]
            }), (0, Te.jsxs)("div", {
                className: "admin-content",
                children: [(0, Te.jsx)("div", {
                    className: "admin-actions",
                    children: (0, Te.jsx)("button", {
                        onClick: () => u(!c),
                        className: "admin-button primary",
                        children: c ? "Cancelar" : "+ Criar Nova Página de Rastreamento"
                    })
                }), c && (0, Te.jsxs)("div", {
                    className: "admin-form-card",
                    children: [(0, Te.jsx)("h2", {
                        className: "admin-form-title",
                        children: "Nova Página de Rastreamento"
                    }), (0, Te.jsxs)("form", {
                        onSubmit: async e => {
                            e.preventDefault();
                            const t = (d.trackingCode || y()).trim().toUpperCase(),
                                n = ((e, t, n, r) => {
                                    const a = new Date(t),
                                        s = [];
                                    let o = "Belo Horizonte",
                                        i = "MG";
                                    if (n) {
                                        const e = n.match(/(.+?)\s*-\s*([A-Z]{2})/);
                                        if (e) o = e[1].trim(), i = e[2].trim();
                                        else {
                                            var l, c;
                                            const e = n.split("-");
                                            o = (null == (l = e[0]) ? void 0 : l.trim()) || "Belo Horizonte", i = (null == (c = e[1]) ? void 0 : c.trim()) || "MG"
                                        }
                                    }
                                    if (s.push({
                                            date: new Date(a.getTime() - 2592e5).toISOString().split("T")[0],
                                            dateTime: new Date(new Date(a.getTime() - 2592e5).setHours(14, 0, 0, 0)).toISOString(),
                                            status: "Seu pacote foi postado",
                                            description: "Objeto postado após a bonificação",
                                            location: "".concat(o, " - ").concat(i),
                                            sector: "Postagem"
                                        }), ["movimento", "transito", "distribuicao", "entregue"].includes(e) && s.push({
                                            date: new Date(a.getTime() - 1728e5).toISOString().split("T")[0],
                                            dateTime: new Date(new Date(a.getTime() - 1728e5).setHours(16, 30, 0, 0)).toISOString(),
                                            status: "Seu pacote está em movimento",
                                            description: "O pacote está transitando entre a agência e o centro de distribuição mais próximo",
                                            location: "Centro de Distribuição - ".concat(o, " - ").concat(i),
                                            sector: "Transporte"
                                        }), ["transito", "distribuicao", "entregue"].includes(e) && s.push({
                                            date: new Date(a.getTime() - 864e5).toISOString().split("T")[0],
                                            dateTime: new Date(new Date(a.getTime() - 864e5).setHours(18, 0, 0, 0)).toISOString(),
                                            status: "Seu pacote está em trânsito",
                                            description: "Pacote em rota para o centro de distribuição regional",
                                            location: "Unidade de Logística Regional - ".concat(o, " - ").concat(i),
                                            sector: "Logística"
                                        }), ["distribuicao", "entregue"].includes(e) && s.push({
                                            date: new Date(a.getTime() - 432e5).toISOString().split("T")[0],
                                            dateTime: new Date(new Date(a.getTime() - 432e5).setHours(8, 0, 0, 0)).toISOString(),
                                            status: "Seu pacote está em distribuição",
                                            description: "Pacote saiu para entrega",
                                            location: "Agência de Distribuição - ".concat(o, " - ").concat(i),
                                            sector: "Distribuição"
                                        }), "entregue" === e) s.push({
                                            date: t,
                                            dateTime: new Date(new Date(a).setHours(14, 30, 0, 0)).toISOString(),
                                            status: "Seu pacote foi entregue",
                                            description: "Pacote entregue com sucesso ao destinatário",
                                            location: "".concat(o, " - ").concat(i),
                                            sector: "Entrega"
                                        });
                                    else if ("distribuicao" === e) {
                                        const e = s[s.length - 1];
                                        e.date = t, e.dateTime = new Date(new Date(a).setHours(10, 0, 0, 0)).toISOString(), e.description = "Pacote saiu para entrega", e.location = "Agência de Distribuição - ".concat(o, " - ").concat(i)
                                    } else s.push({
                                        date: t,
                                        dateTime: new Date(new Date(a).setHours(10, 0, 0, 0)).toISOString(),
                                        status: _(e),
                                        description: r || b(e),
                                        location: n || "".concat(o, " - ").concat(i),
                                        sector: w(e)
                                    });
                                    return s
                                })(d.status, d.date, d.location, d.description),
                                r = d.addressNumber ? "".concat(d.address, ", ").concat(d.addressNumber).trim() : d.address,
                                a = {
                                    code: t,
                                    recipient_name: d.recipientName,
                                    address: r,
                                    last_update: (new Date).toISOString(),
                                    timeline: n,
                                    status: d.status,
                                    is_verified: !1,
                                    cep: d.cep ? d.cep.replace(/\D/g, "") : null
                                };
                            try {
                                console.log("Salvando rastreamento no Supabase:", t, a);
                                const {
                                    data: e,
                                    error: s
                                } = await ja.from("trackings_test").upsert([a], {
                                    onConflict: "code"
                                });
                                s ? (console.error("Erro ao salvar no Supabase:", s), console.error("Detalhes do erro:", JSON.stringify(s, null, 2)), localStorage.setItem("tracking_".concat(t), JSON.stringify({
                                    trackingCode: t,
                                    recipientName: d.recipientName,
                                    address: r,
                                    lastUpdate: (new Date).toISOString(),
                                    timeline: n,
                                    status: d.status,
                                    verified: !1
                                })), alert("Salvo localmente (erro ao conectar com o servidor).")) : (console.log("\u2705 Dados salvos no Supabase com sucesso!", e), localStorage.setItem("tracking_".concat(t), JSON.stringify({
                                    trackingCode: t,
                                    recipientName: d.recipientName,
                                    address: r,
                                    lastUpdate: (new Date).toISOString(),
                                    timeline: n,
                                    status: d.status,
                                    verified: !1
                                })))
                            } catch (s) {
                                console.error("Erro ao salvar:", s), localStorage.setItem("tracking_".concat(t), JSON.stringify({
                                    trackingCode: t,
                                    recipientName: d.recipientName,
                                    address: r,
                                    lastUpdate: (new Date).toISOString(),
                                    timeline: n,
                                    status: d.status,
                                    verified: !1
                                })), alert("Salvo localmente (erro ao conectar com o servidor).")
                            }
                            h({
                                trackingCode: y(),
                                recipientName: "",
                                cep: "",
                                address: "",
                                addressNumber: "",
                                status: "postado",
                                description: "Objeto postado após a bonificação",
                                location: "",
                                date: (new Date).toISOString().split("T")[0]
                            }), u(!1), await g(), alert("Página de rastreamento criada! Código: ".concat(t, "\nURL: /rastreamento/").concat(t))
                        },
                        className: "admin-form",
                        children: [(0, Te.jsxs)("div", {
                            className: "form-group",
                            children: [(0, Te.jsx)("label", {
                                children: "Código de Rastreamento (gerado automaticamente)"
                            }), (0, Te.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    gap: "8px",
                                    alignItems: "center"
                                },
                                children: [(0, Te.jsx)("input", {
                                    type: "text",
                                    value: d.trackingCode,
                                    onChange: e => h(zt(zt({}, d), {}, {
                                        trackingCode: e.target.value
                                    })),
                                    placeholder: "PQ2187911652BR",
                                    className: "admin-input",
                                    readOnly: !0,
                                    style: {
                                        flex: 1,
                                        backgroundColor: "#f5f5f5",
                                        cursor: "not-allowed"
                                    }
                                }), (0, Te.jsx)("button", {
                                    type: "button",
                                    onClick: () => {
                                        const e = y();
                                        h(zt(zt({}, d), {}, {
                                            trackingCode: e
                                        }))
                                    },
                                    className: "admin-button small",
                                    style: {
                                        padding: "10px 16px",
                                        fontSize: "14px",
                                        whiteSpace: "nowrap"
                                    },
                                    children: "🔄 Gerar Novo"
                                })]
                            })]
                        }), (0, Te.jsxs)("div", {
                            className: "form-group",
                            children: [(0, Te.jsx)("label", {
                                children: "Nome do Destinatário *"
                            }), (0, Te.jsx)("input", {
                                type: "text",
                                value: d.recipientName,
                                onChange: e => h(zt(zt({}, d), {}, {
                                    recipientName: e.target.value
                                })),
                                required: !0,
                                className: "admin-input"
                            })]
                        }), (0, Te.jsxs)("div", {
                            className: "form-group",
                            children: [(0, Te.jsx)("label", {
                                children: "CEP *"
                            }), (0, Te.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    gap: "8px",
                                    alignItems: "center"
                                },
                                children: [(0, Te.jsx)("input", {
                                    type: "text",
                                    value: d.cep,
                                    onChange: async e => {
                                        const t = (e => {
                                            const t = e.replace(/\D/g, "");
                                            return t.length <= 8 ? t.replace(/(\d{5})(\d{3})/, "$1-$2") : e
                                        })(e.target.value);
                                        h(e => zt(zt({}, e), {}, {
                                            cep: t
                                        }));
                                        const n = t.replace(/\D/g, "");
                                        8 === n.length ? setTimeout(async () => {
                                            const e = await(async e => {
                                                const t = e.replace(/\D/g, "");
                                                if (8 !== t.length) return p(!1), null;
                                                p(!0);
                                                try {
                                                    const e = "https://viacep.com.br/ws/".concat(t, "/json/");
                                                    console.log("Buscando CEP:", t);
                                                    const n = await fetch(e);
                                                    if (!n.ok) throw new Error("HTTP error! status: ".concat(n.status));
                                                    const r = await n.json();
                                                    if (console.log("Resposta da API:", r), r.erro) return alert("CEP não encontrado. Por favor, verifique o CEP digitado."), p(!1), null;
                                                    const a = [];
                                                    r.logradouro && a.push(r.logradouro), r.bairro && a.push(r.bairro), r.localidade && a.push(r.localidade), r.uf && a.push(r.uf);
                                                    const s = a.join(", ");
                                                    return p(!1), {
                                                        address: s,
                                                        city: r.localidade || "",
                                                        state: r.uf || ""
                                                    }
                                                } catch (s) {
                                                    return console.error("Erro ao buscar CEP:", s), p(!1), alert("Erro ao buscar endereço. Verifique sua conexão e tente novamente."), null
                                                }
                                            })(t);
                                            e && h(t => zt(zt({}, t), {}, {
                                                address: e.address,
                                                location: "".concat(e.city, " - ").concat(e.state)
                                            }))
                                        }, 500) : n.length < 8 && h(e => zt(zt({}, e), {}, {
                                            address: "",
                                            location: ""
                                        }))
                                    },
                                    placeholder: "00000-000",
                                    maxLength: "9",
                                    className: "admin-input",
                                    required: !0,
                                    style: {
                                        maxWidth: "200px"
                                    }
                                }), f && (0, Te.jsx)("span", {
                                    style: {
                                        color: "#666",
                                        fontSize: "14px"
                                    },
                                    children: "Buscando..."
                                })]
                            })]
                        }), (0, Te.jsxs)("div", {
                            className: "form-group",
                            children: [(0, Te.jsx)("label", {
                                children: "Endereço (preenchido automaticamente) *"
                            }), (0, Te.jsx)("textarea", {
                                value: d.address,
                                onChange: e => h(zt(zt({}, d), {}, {
                                    address: e.target.value
                                })),
                                required: !0,
                                rows: "2",
                                className: "admin-input",
                                placeholder: "Endereço será preenchido automaticamente ao digitar o CEP"
                            })]
                        }), (0, Te.jsxs)("div", {
                            className: "form-group",
                            children: [(0, Te.jsx)("label", {
                                children: "Número *"
                            }), (0, Te.jsx)("input", {
                                type: "text",
                                value: d.addressNumber,
                                onChange: e => h(zt(zt({}, d), {}, {
                                    addressNumber: e.target.value
                                })),
                                placeholder: "123",
                                className: "admin-input",
                                required: !0,
                                style: {
                                    maxWidth: "150px"
                                }
                            })]
                        }), (0, Te.jsxs)("div", {
                            className: "form-group",
                            children: [(0, Te.jsx)("label", {
                                children: "Status *"
                            }), (0, Te.jsxs)("select", {
                                value: d.status,
                                onChange: e => h(zt(zt({}, d), {}, {
                                    status: e.target.value
                                })),
                                className: "admin-input",
                                required: !0,
                                children: [(0, Te.jsx)("option", {
                                    value: "postado",
                                    children: "Postado"
                                }), (0, Te.jsx)("option", {
                                    value: "movimento",
                                    children: "Em Movimento"
                                }), (0, Te.jsx)("option", {
                                    value: "transito",
                                    children: "Em Trânsito"
                                }), (0, Te.jsx)("option", {
                                    value: "distribuicao",
                                    children: "Em Distribuição"
                                }), (0, Te.jsx)("option", {
                                    value: "entregue",
                                    children: "Entregue"
                                })]
                            })]
                        }), (0, Te.jsxs)("div", {
                            className: "form-group",
                            children: [(0, Te.jsx)("label", {
                                children: "Localização"
                            }), (0, Te.jsx)("input", {
                                type: "text",
                                value: d.location,
                                onChange: e => h(zt(zt({}, d), {}, {
                                    location: e.target.value
                                })),
                                placeholder: "Belo Horizonte - MG",
                                className: "admin-input"
                            })]
                        }), (0, Te.jsxs)("div", {
                            className: "form-group",
                            children: [(0, Te.jsx)("label", {
                                children: "Data do Evento"
                            }), (0, Te.jsx)("input", {
                                type: "date",
                                value: d.date,
                                onChange: e => h(zt(zt({}, d), {}, {
                                    date: e.target.value
                                })),
                                className: "admin-input",
                                required: !0
                            })]
                        }), (0, Te.jsx)("div", {
                            style: {
                                gridColumn: "1 / -1",
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "8px"
                            },
                            children: (0, Te.jsx)("button", {
                                type: "submit",
                                className: "admin-button primary",
                                style: {
                                    minWidth: "280px"
                                },
                                children: "Criar Página de Rastreamento"
                            })
                        })]
                    })]
                }), (0, Te.jsxs)("div", {
                    className: "admin-list",
                    children: [(0, Te.jsxs)("h2", {
                        className: "admin-list-title",
                        children: ["Páginas de Rastreamento (", i.length, ")"]
                    }), 0 === i.length ? (0, Te.jsx)("div", {
                        className: "admin-empty",
                        children: "Nenhuma página de rastreamento criada ainda."
                    }) : (0, Te.jsx)("div", {
                        className: "tracking-list",
                        children: i.map(e => (0, Te.jsxs)("div", {
                            className: "tracking-item " + (e.verified ? "verified" : ""),
                            children: [(0, Te.jsxs)("div", {
                                className: "tracking-item-info",
                                children: [(0, Te.jsxs)("div", {
                                    className: "tracking-item-header",
                                    children: [(0, Te.jsx)("div", {
                                        className: "tracking-item-code",
                                        children: e.code
                                    }), e.verified && (0, Te.jsxs)("span", {
                                        className: "verified-badge",
                                        children: [(0, Te.jsx)("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: (0, Te.jsx)("path", {
                                                d: "M20 6L9 17l-5-5"
                                            })
                                        }), "Verificado"]
                                    })]
                                }), (0, Te.jsx)("div", {
                                    className: "tracking-item-name",
                                    children: e.recipientName || "N/A"
                                }), (0, Te.jsx)("div", {
                                    className: "tracking-item-address",
                                    children: e.address || "N/A"
                                })]
                            }), (0, Te.jsxs)("div", {
                                className: "tracking-item-actions",
                                children: [(0, Te.jsx)("button", {
                                    onClick: () => m("/rastreamento/".concat(e.code)),
                                    className: "admin-button small",
                                    children: "Ver"
                                }), (0, Te.jsx)("button", {
                                    onClick: () => (e => {
                                        const t = "".concat(window.location.origin, "/rastreamento/").concat(e);
                                        navigator.clipboard.writeText(t).then(() => {
                                            alert("Link copiado para a área de transferência!")
                                        })
                                    })(e.code),
                                    className: "admin-button small",
                                    children: "Copiar Link"
                                }), (0, Te.jsx)("button", {
                                    onClick: () => (async e => {
                                        try {
                                            const {
                                                data: t,
                                                error: n
                                            } = await ja.from("trackings_test").select("is_verified").eq("code", e).single();
                                            if (n) {
                                                console.error("Erro ao buscar rastreamento:", n);
                                                const t = localStorage.getItem("tracking_".concat(e));
                                                if (t) try {
                                                    const n = JSON.parse(t);
                                                    n.verified = !n.verified, localStorage.setItem("tracking_".concat(e), JSON.stringify(n))
                                                } catch (Oa) {
                                                    console.error("Erro ao atualizar status:", Oa)
                                                }
                                                return void await g()
                                            }
                                            const {
                                                error: r
                                            } = await ja.from("trackings_test").update({
                                                is_verified: !t.is_verified
                                            }).eq("code", e);
                                            r && console.error("Erro ao atualizar no Supabase:", r)
                                        } catch (s) {
                                            console.error("Erro ao atualizar status:", s)
                                        }
                                        await g()
                                    })(e.code),
                                    className: "admin-button small " + (e.verified ? "verified-button" : "verify-button"),
                                    children: e.verified ? (0, Te.jsxs)(Te.Fragment, {
                                        children: [(0, Te.jsx)("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: (0, Te.jsx)("path", {
                                                d: "M20 6L9 17l-5-5"
                                            })
                                        }), "Verificado"]
                                    }) : (0, Te.jsxs)(Te.Fragment, {
                                        children: [(0, Te.jsxs)("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [(0, Te.jsx)("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "10"
                                            }), (0, Te.jsx)("line", {
                                                x1: "12",
                                                y1: "8",
                                                x2: "12",
                                                y2: "12"
                                            }), (0, Te.jsx)("line", {
                                                x1: "12",
                                                y1: "16",
                                                x2: "12.01",
                                                y2: "16"
                                            })]
                                        }), "Marcar Verificado"]
                                    })
                                }), (0, Te.jsx)("button", {
                                    onClick: () => (async e => {
                                        if (!window.confirm("⚠️ ATENÇÃO: Deseja realmente excluir o rastreamento ".concat(e, "?"))) return;
                                        if (window.confirm("🔴 CONFIRMAÇÃO FINAL: Esta ação não pode ser desfeita!\n\nExcluir rastreamento ".concat(e, "?"))) {
                                            try {
                                                const {
                                                    data: t,
                                                    error: n
                                                } = await ja.from("trackings_test").delete().eq("code", e).select();
                                                n ? (console.error("❌ Erro ao deletar do Supabase:", n), alert("Erro ao deletar: ".concat(n.message, "\n\nOs dados podem estar protegidos por políticas RLS.")), localStorage.removeItem("tracking_".concat(e))) : (console.log("✅ Rastreamento deletado:", t), localStorage.removeItem("tracking_".concat(e)), alert("Rastreamento ".concat(e, " excluído com sucesso.")))
                                            } catch (s) {
                                                console.error("❌ Erro ao deletar:", s), alert("Erro ao deletar: ".concat(s.message)), localStorage.removeItem("tracking_".concat(e))
                                            }
                                            await g()
                                        }
                                    })(e.code),
                                    className: "admin-button small danger",
                                    children: "Excluir"
                                })]
                            })]
                        }, e.code)))
                    })]
                })]
            })]
        }) : (0, Te.jsx)("div", {
            className: "admin-container",
            children: (0, Te.jsx)("div", {
                className: "admin-login",
                children: (0, Te.jsxs)("div", {
                    className: "admin-login-card",
                    children: [(0, Te.jsx)("h1", {
                        className: "admin-title",
                        children: "Área Administrativa"
                    }), (0, Te.jsx)("p", {
                        className: "admin-subtitle",
                        children: "Acesso restrito"
                    }), (0, Te.jsxs)("form", {
                        onSubmit: v,
                        className: "admin-form",
                        children: [(0, Te.jsx)("input", {
                            type: "password",
                            placeholder: "Senha",
                            value: n,
                            onChange: e => {
                                r(e.target.value), o("")
                            },
                            className: "admin-input",
                            autoFocus: !0
                        }), s && (0, Te.jsx)("div", {
                            className: "admin-error",
                            children: s
                        }), (0, Te.jsx)("button", {
                            type: "submit",
                            className: "admin-button",
                            children: "Entrar"
                        })]
                    })]
                })
            })
        })
    };

    const Na = () => {
        const e = re();
        return (0, a.useEffect)(() => {
            document.title = "FedEx - Termos e Condições"
        }, []), (0, Te.jsxs)("div", {
            className: "termos-container",
            children: [(0, Te.jsx)("header", {
                className: "termos-header",
                children: (0, Te.jsxs)("div", {
                    className: "termos-header-content",
                    children: [(0, Te.jsxs)("div", {
                        className: "termos-logo",
                        children: [(0, Te.jsx)("img", {
                            src: "/logo-magalu-azul (1).png",
                            alt: "Magalu",
                            className: "termos-logo-img"
                        }), (0, Te.jsx)("img", {
                            src: "/fedex.png",
                            alt: "FedEx",
                            className: "termos-logo-img"
                        })]
                    }), (0, Te.jsx)("button", {
                        className: "termos-back-button",
                        onClick: () => e("/"),
                        children: "Voltar ao Início"
                    })]
                })
            }), (0, Te.jsxs)("div", {
                className: "termos-content",
                children: [(0, Te.jsx)("h1", {
                    className: "termos-title",
                    children: "Termos e Condições"
                }), (0, Te.jsx)("p", {
                    className: "termos-updated",
                    children: "Última atualização: 23 de fevereiro de 2025"
                }), (0, Te.jsxs)("section", {
                    className: "termos-section",
                    children: [(0, Te.jsx)("h2", {
                        className: "termos-section-title",
                        children: "1. Aceitação dos Termos"
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concorda com qualquer parte destes termos, não deve utilizar este serviço."
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "Estes termos se aplicam a todos os visitantes, usuários e outras pessoas que acessam ou utilizam o serviço de rastreamento e verificação de entrega oferecido pela parceria entre Magalu (CNPJ: 47.960.950/0001-21) e FedEx (CNPJ: 10.970.887/0001-02)."
                    })]
                }), (0, Te.jsxs)("section", {
                    className: "termos-section",
                    children: [(0, Te.jsx)("h2", {
                        className: "termos-section-title",
                        children: "2. Programa de Bonificação Magalu"
                    }), (0, Te.jsx)("h3", {
                        className: "termos-subtitle",
                        children: "2.1. Participação"
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "O Programa de Bonificação Magalu é uma iniciativa promocional que permite aos clientes participarem de sorteios e concorrerem a prêmios exclusivos ao confirmarem suas entregas através do sistema de verificação facial."
                    }), (0, Te.jsx)("h3", {
                        className: "termos-subtitle",
                        children: "2.2. Como Participar"
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "Para participar do programa, você deve:"
                    }), (0, Te.jsxs)("ul", {
                        className: "termos-list",
                        children: [(0, Te.jsx)("li", {
                            children: "Ter realizado uma compra através da Magalu com entrega pela FedEx"
                        }), (0, Te.jsx)("li", {
                            children: "Confirmar a entrega através do sistema de verificação facial disponível neste site"
                        }), (0, Te.jsx)("li", {
                            children: "Fornecer os dados solicitados de forma correta e completa"
                        }), (0, Te.jsx)("li", {
                            children: "Aceitar estes termos e condições"
                        })]
                    }), (0, Te.jsx)("h3", {
                        className: "termos-subtitle",
                        children: "2.3. Prêmios"
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "Os prêmios disponíveis no programa incluem, mas não se limitam a: smartphones, tablets, vale-compras, descontos exclusivos e outros benefícios. A lista completa de prêmios e suas especificações serão divulgadas através dos canais oficiais da Magalu."
                    }), (0, Te.jsx)("h3", {
                        className: "termos-subtitle",
                        children: "2.4. Sorteios"
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "Os sorteios serão realizados periodicamente conforme critérios estabelecidos pela Magalu. A cada confirmação de entrega, você acumula pontos de participação que aumentam suas chances de ganhar. Quanto mais entregas confirmadas, maiores são suas chances."
                    }), (0, Te.jsx)("h3", {
                        className: "termos-subtitle",
                        children: "2.5. Elegibilidade"
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "Podem participar do programa pessoas físicas, maiores de 18 anos, residentes no Brasil. Funcionários da Magalu, FedEx e empresas parceiras não podem participar. A Magalu se reserva o direito de verificar a elegibilidade dos participantes."
                    })]
                }), (0, Te.jsxs)("section", {
                    className: "termos-section",
                    children: [(0, Te.jsx)("h2", {
                        className: "termos-section-title",
                        children: "3. Verificação Facial"
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "O sistema de verificação facial é utilizado para confirmar a identidade do destinatário e garantir a segurança das entregas. Ao utilizar este serviço, você concorda em:"
                    }), (0, Te.jsxs)("ul", {
                        className: "termos-list",
                        children: [(0, Te.jsx)("li", {
                            children: "Fornecer uma imagem facial clara e atualizada"
                        }), (0, Te.jsx)("li", {
                            children: "Permitir o uso de sua imagem para fins de verificação de entrega"
                        }), (0, Te.jsx)("li", {
                            children: "Compreender que os dados biométricos coletados serão utilizados exclusivamente para confirmação de entrega"
                        }), (0, Te.jsx)("li", {
                            children: "Autorizar o armazenamento temporário dos dados conforme política de privacidade"
                        })]
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "Os dados coletados através da verificação facial são tratados de acordo com a Lei Geral de Proteção de Dados (LGPD) e nossa Política de Privacidade."
                    })]
                }), (0, Te.jsxs)("section", {
                    className: "termos-section",
                    children: [(0, Te.jsx)("h2", {
                        className: "termos-section-title",
                        children: "4. Rastreamento de Encomendas"
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "O serviço de rastreamento permite que você acompanhe o status de suas encomendas em tempo real. As informações de rastreamento são fornecidas pela FedEx e atualizadas conforme o progresso da entrega."
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "A Magalu e a FedEx não se responsabilizam por atrasos causados por fatores externos, incluindo mas não limitados a: condições climáticas, problemas de transporte, questões aduaneiras ou outras circunstâncias fora de seu controle."
                    })]
                }), (0, Te.jsxs)("section", {
                    className: "termos-section",
                    children: [(0, Te.jsx)("h2", {
                        className: "termos-section-title",
                        children: "5. Privacidade e Proteção de Dados"
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "A proteção de seus dados pessoais é uma prioridade. Todas as informações coletadas são tratadas de acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018) e nossa Política de Privacidade."
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "Os dados coletados incluem: nome, endereço, código de rastreamento, imagem facial para verificação e informações de entrega. Estes dados são utilizados exclusivamente para:"
                    }), (0, Te.jsxs)("ul", {
                        className: "termos-list",
                        children: [(0, Te.jsx)("li", {
                            children: "Processamento e confirmação de entregas"
                        }), (0, Te.jsx)("li", {
                            children: "Participação no programa de bonificação"
                        }), (0, Te.jsx)("li", {
                            children: "Melhoria dos serviços oferecidos"
                        }), (0, Te.jsx)("li", {
                            children: "Comunicação sobre status de entregas e prêmios"
                        })]
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "Você tem o direito de acessar, corrigir, excluir ou solicitar a portabilidade de seus dados pessoais a qualquer momento, entrando em contato através dos canais de atendimento disponíveis."
                    })]
                }), (0, Te.jsxs)("section", {
                    className: "termos-section",
                    children: [(0, Te.jsx)("h2", {
                        className: "termos-section-title",
                        children: "6. Limitação de Responsabilidade"
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "A Magalu e a FedEx não se responsabilizam por:"
                    }), (0, Te.jsxs)("ul", {
                        className: "termos-list",
                        children: [(0, Te.jsx)("li", {
                            children: "Danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou impossibilidade de uso do serviço"
                        }), (0, Te.jsx)("li", {
                            children: "Perda de dados ou informações"
                        }), (0, Te.jsx)("li", {
                            children: "Interrupções ou falhas no serviço"
                        }), (0, Te.jsx)("li", {
                            children: "Decisões tomadas com base em informações fornecidas pelo serviço"
                        }), (0, Te.jsx)("li", {
                            children: "Problemas técnicos ou de conectividade"
                        })]
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: 'O serviço é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou implícitas.'
                    })]
                }), (0, Te.jsxs)("section", {
                    className: "termos-section",
                    children: [(0, Te.jsx)("h2", {
                        className: "termos-section-title",
                        children: "7. Propriedade Intelectual"
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "Todo o conteúdo deste site, incluindo mas não limitado a textos, gráficos, logos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade da Magalu, FedEx ou seus fornecedores de conteúdo e é protegido por leis de direitos autorais brasileiras e internacionais."
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "Você não pode reproduzir, distribuir, modificar, criar trabalhos derivados, exibir publicamente, executar publicamente, republicar, baixar, armazenar ou transmitir qualquer material do site sem autorização prévia por escrito."
                    })]
                }), (0, Te.jsxs)("section", {
                    className: "termos-section",
                    children: [(0, Te.jsx)("h2", {
                        className: "termos-section-title",
                        children: "8. Modificações dos Termos"
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação neste site. É sua responsabilidade revisar periodicamente estes termos para estar ciente de quaisquer modificações."
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "O uso continuado do serviço após a publicação de alterações constitui sua aceitação dos termos modificados."
                    })]
                }), (0, Te.jsxs)("section", {
                    className: "termos-section",
                    children: [(0, Te.jsx)("h2", {
                        className: "termos-section-title",
                        children: "9. Cancelamento e Encerramento"
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "Reservamo-nos o direito de encerrar ou suspender seu acesso ao serviço, sem aviso prévio, por qualquer motivo, incluindo mas não limitado a violação destes termos e condições."
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "Você pode encerrar sua participação no programa a qualquer momento, entrando em contato através dos canais de atendimento. No entanto, prêmios já acumulados podem ser perdidos conforme as regras do programa."
                    })]
                }), (0, Te.jsxs)("section", {
                    className: "termos-section",
                    children: [(0, Te.jsx)("h2", {
                        className: "termos-section-title",
                        children: "10. Lei Aplicável e Foro"
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "Estes termos e condições são regidos pelas leis da República Federativa do Brasil. Qualquer disputa relacionada a estes termos será resolvida exclusivamente nos tribunais competentes da cidade de São Paulo, Estado de São Paulo, renunciando as partes a qualquer outro foro, por mais privilegiado que seja."
                    })]
                }), (0, Te.jsxs)("section", {
                    className: "termos-section",
                    children: [(0, Te.jsx)("h2", {
                        className: "termos-section-title",
                        children: "11. Contato"
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "Para questões relacionadas a estes termos e condições, ao programa de bonificação ou aos serviços oferecidos, entre em contato:"
                    }), (0, Te.jsxs)("div", {
                        className: "termos-contact",
                        children: [(0, Te.jsxs)("div", {
                            className: "contact-item",
                            children: [(0, Te.jsx)("strong", {
                                children: "Magalu"
                            }), (0, Te.jsx)("p", {
                                children: "CNPJ: 47.960.950/0001-21"
                            }), (0, Te.jsxs)("p", {
                                children: ["Website: ", (0, Te.jsx)("a", {
                                    href: "https://www.magazineluiza.com.br",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "www.magazineluiza.com.br"
                                })]
                            }), (0, Te.jsxs)("p", {
                                children: ["Instagram: ", (0, Te.jsx)("a", {
                                    href: "https://www.instagram.com/magalu/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "@magalu"
                                })]
                            })]
                        }), (0, Te.jsxs)("div", {
                            className: "contact-item",
                            children: [(0, Te.jsx)("strong", {
                                children: "FedEx"
                            }), (0, Te.jsx)("p", {
                                children: "CNPJ: 10.970.887/0001-02"
                            }), (0, Te.jsxs)("p", {
                                children: ["Website: ", (0, Te.jsx)("a", {
                                    href: "https://www.fedex.com/pt-br/home.html",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "www.fedex.com"
                                })]
                            }), (0, Te.jsxs)("p", {
                                children: ["Instagram: ", (0, Te.jsx)("a", {
                                    href: "https://www.instagram.com/fedex/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "@fedex"
                                })]
                            })]
                        })]
                    })]
                }), (0, Te.jsxs)("section", {
                    className: "termos-section",
                    children: [(0, Te.jsx)("h2", {
                        className: "termos-section-title",
                        children: "12. Disposições Gerais"
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "Se qualquer disposição destes termos for considerada inválida ou inexequível, as demais disposições permanecerão em pleno vigor e efeito. A falha em exercer qualquer direito ou disposição destes termos não constituirá uma renúncia a tal direito ou disposição."
                    }), (0, Te.jsx)("p", {
                        className: "termos-text",
                        children: "Estes termos constituem o acordo completo entre você e a parceria Magalu/FedEx em relação ao uso do serviço e substituem todos os acordos anteriores ou contemporâneos."
                    })]
                }), (0, Te.jsx)("div", {
                    className: "termos-actions",
                    children: (0, Te.jsx)("button", {
                        className: "termos-button",
                        onClick: () => e("/"),
                        children: "Voltar ao Início"
                    })
                })]
            }), (0, Te.jsx)("footer", {
                className: "termos-footer",
                children: (0, Te.jsxs)("div", {
                    className: "termos-footer-content",
                    children: [(0, Te.jsx)("p", {
                        className: "termos-footer-text",
                        children: "© 2025 Parceria Magalu e FedEx. Todos os direitos reservados."
                    }), (0, Te.jsxs)("div", {
                        className: "termos-footer-cnpj",
                        children: [(0, Te.jsx)("span", {
                            children: "Magalu: CNPJ 47.960.950/0001-21"
                        }), (0, Te.jsx)("span", {
                            children: "FedEx: CNPJ 10.970.887/0001-02"
                        })]
                    })]
                })
            })]
        })
    };

    const Ra = () => (0, Te.jsxs)(be, {
        children: [(0, Te.jsx)(ve, {
            path: "/",
            element: (0, Te.jsx)(Ce, {})
        }), (0, Te.jsx)(ve, {
            path: "/verificacao",
            element: (0, Te.jsx)(Pe, {})
        }), (0, Te.jsx)(ve, {
            path: "/sucesso",
            element: (0, Te.jsx)(Oe, {})
        }), (0, Te.jsx)(ve, {
            path: "/rastreamento/:trackingCode",
            element: (0, Te.jsx)(Ta, {})
        }), (0, Te.jsx)(ve, {
            path: "/admin",
            element: (0, Te.jsx)(Ca, {})
        }), (0, Te.jsx)(ve, {
            path: "/termos",
            element: (0, Te.jsx)(Na, {})
        })]
    });

    const Pa = function() {
        return (0, Te.jsx)(Se, {
            children: (0, Te.jsx)(Ra, {})
        })
    };
    o.createRoot(document.getElementById("root")).render((0, Te.jsx)(a.StrictMode, {
        children: (0, Te.jsx)(Pa, {})
    }))
})();
//# sourceMappingURL=main.9dcfcc1e.js.map
