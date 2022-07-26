/*!
 * CookieConsent v2.8.2
 * https://www.github.com/orestbida/cookieconsent
 * Author Orest Bida
 * Released under the MIT License
 */
!(function () {
  "use strict";
  var e = "initCookieConsent";
  "undefined" != typeof window &&
    "function" != typeof window[e] &&
    (window[e] = function (e) {
      var t,
        n,
        i,
        o,
        a,
        c,
        r,
        s,
        l,
        d,
        u,
        p,
        f,
        g,
        h,
        v,
        _,
        m,
        b,
        y,
        k,
        C,
        w,
        A,
        x,
        S,
        N,
        T,
        O,
        L,
        j,
        M,
        E = {
          mode: "opt-in",
          current_lang: "en",
          auto_language: null,
          autorun: !0,
          page_scripts: !0,
          hide_from_bots: !0,
          cookie_name: "cc_cookie",
          cookie_expiration: 182,
          cookie_domain: window.location.hostname,
          cookie_path: "/",
          cookie_same_site: "Lax",
          use_rfc_cookie: !1,
          autoclear_cookies: !0,
          revision: 0,
          script_selector: "data-cookiecategory",
        },
        H = {},
        D = {},
        J = null,
        I = !0,
        q = !1,
        P = !1,
        U = !1,
        F = !1,
        z = !1,
        R = !0,
        K = [],
        B = !1,
        G = [],
        V = [],
        Q = [],
        W = !1,
        X = [],
        Y = [],
        Z = [],
        $ = [],
        ee = [],
        te = document.documentElement,
        ne = function (e) {
          "number" == typeof (t = e).cookie_expiration &&
            (E.cookie_expiration = t.cookie_expiration),
            "number" == typeof t.cookie_necessary_only_expiration &&
              (E.cookie_necessary_only_expiration =
                t.cookie_necessary_only_expiration),
            "boolean" == typeof t.autorun && (E.autorun = t.autorun),
            "string" == typeof t.cookie_domain &&
              (E.cookie_domain = t.cookie_domain),
            "string" == typeof t.cookie_same_site &&
              (E.cookie_same_site = t.cookie_same_site),
            "string" == typeof t.cookie_path && (E.cookie_path = t.cookie_path),
            "string" == typeof t.cookie_name && (E.cookie_name = t.cookie_name),
            "function" == typeof t.onAccept && (s = t.onAccept),
            "function" == typeof t.onFirstAction && (d = t.onFirstAction),
            "function" == typeof t.onChange && (l = t.onChange),
            "opt-out" === t.mode && (E.mode = "opt-out"),
            "number" == typeof t.revision &&
              (t.revision > -1 && (E.revision = t.revision), (z = !0)),
            "boolean" == typeof t.autoclear_cookies &&
              (E.autoclear_cookies = t.autoclear_cookies),
            !0 === t.use_rfc_cookie && (E.use_rfc_cookie = !0),
            "boolean" == typeof t.hide_from_bots &&
              (E.hide_from_bots = t.hide_from_bots),
            E.hide_from_bots &&
              (W =
                navigator &&
                ((navigator.userAgent &&
                  /bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent)) ||
                  navigator.webdriver)),
            (E.page_scripts = !0 === t.page_scripts),
            "browser" === t.auto_language || !0 === t.auto_language
              ? (E.auto_language = "browser")
              : "document" === t.auto_language &&
                (E.auto_language = "document"),
            E.auto_language,
            (E.current_lang = de(t.languages, t.current_lang));
        },
        ie = function (e) {
          for (
            var t = "accept-",
              n = r("c-settings"),
              i = r(t + "all"),
              o = r(t + "necessary"),
              a = r(t + "custom"),
              c = 0;
            c < n.length;
            c++
          )
            n[c].setAttribute("aria-haspopup", "dialog"),
              me(n[c], "click", function (e) {
                e.preventDefault(), H.showSettings(0);
              });
          for (c = 0; c < i.length; c++)
            me(i[c], "click", function (e) {
              s(e, "all");
            });
          for (c = 0; c < a.length; c++)
            me(a[c], "click", function (e) {
              s(e);
            });
          for (c = 0; c < o.length; c++)
            me(o[c], "click", function (e) {
              s(e, []);
            });
          function r(t) {
            return (e || document).querySelectorAll(
              'a[data-cc="' + t + '"], button[data-cc="' + t + '"]'
            );
          }
          function s(e, t) {
            e.preventDefault(), H.accept(t), H.hideSettings(), H.hide();
          }
        },
        oe = function (e, t) {
          return Object.prototype.hasOwnProperty.call(t, e)
            ? e
            : be(t).length > 0
            ? Object.prototype.hasOwnProperty.call(t, E.current_lang)
              ? E.current_lang
              : be(t)[0]
            : void 0;
        },
        ae = function (e) {
          if ((!0 === t.force_consent && ye(te, "force--consent"), !v)) {
            v = le("div");
            var n = le("div"),
              i = le("div");
            (v.id = "cm"),
              (n.id = "c-inr-i"),
              (i.id = "cm-ov"),
              v.setAttribute("role", "dialog"),
              v.setAttribute("aria-modal", "true"),
              v.setAttribute("aria-hidden", "false"),
              v.setAttribute("aria-labelledby", "c-ttl"),
              v.setAttribute("aria-describedby", "c-txt"),
              h.appendChild(v),
              h.appendChild(i),
              (v.style.visibility = i.style.visibility = "hidden"),
              (i.style.opacity = 0);
          }
          var o = t.languages[e].consent_modal.title;
          o &&
            (_ ||
              (((_ = le("div")).id = "c-ttl"),
              _.setAttribute("role", "heading"),
              _.setAttribute("aria-level", "2"),
              n.appendChild(_)),
            (_.innerHTML = o));
          var a = t.languages[e].consent_modal.description;
          z &&
            (a = R
              ? a.replace("{{revision_message}}", "")
              : a.replace(
                  "{{revision_message}}",
                  t.languages[e].consent_modal.revision_message || ""
                )),
            m || (((m = le("div")).id = "c-txt"), n.appendChild(m)),
            (m.innerHTML = a);
          var c,
            r = t.languages[e].consent_modal.primary_btn,
            s = t.languages[e].consent_modal.secondary_btn;
          r &&
            (b ||
              (((b = le("button")).id = "c-p-bn"),
              (b.className = "c-bn"),
              "accept_all" === r.role && (c = "all"),
              me(b, "click", function () {
                H.hide(), H.accept(c);
              })),
            (b.innerHTML = t.languages[e].consent_modal.primary_btn.text)),
            s &&
              (y ||
                (((y = le("button")).id = "c-s-bn"),
                (y.className = "c-bn c_link"),
                "accept_necessary" === s.role
                  ? me(y, "click", function () {
                      H.hide(), H.accept([]);
                    })
                  : me(y, "click", function () {
                      H.showSettings(0);
                    })),
              (y.innerHTML = t.languages[e].consent_modal.secondary_btn.text));
          var l = t.gui_options;
          C || (((C = le("div")).id = "c-inr"), C.appendChild(n)),
            k ||
              (((k = le("div")).id = "c-bns"),
              l && l.consent_modal && !0 === l.consent_modal.swap_buttons
                ? (s && k.appendChild(y),
                  r && k.appendChild(b),
                  (k.className = "swap"))
                : (r && k.appendChild(b), s && k.appendChild(y)),
              (r || s) && C.appendChild(k),
              v.appendChild(C)),
            (q = !0);
        },
        ce = function (e) {
          if (w) (T = le("div")).id = "s-bl";
          else {
            w = le("div");
            var n = le("div"),
              i = le("div"),
              o = le("div");
            (A = le("div")), (x = le("div"));
            var a = le("div");
            S = le("button");
            var s = le("div");
            N = le("div");
            var l = le("div");
            (w.id = "s-cnt"),
              (n.id = "c-vln"),
              (o.id = "c-s-in"),
              (i.id = "cs"),
              (x.id = "s-ttl"),
              (A.id = "s-inr"),
              (a.id = "s-hdr"),
              (N.id = "s-bl"),
              (S.id = "s-c-bn"),
              (l.id = "cs-ov"),
              (s.id = "s-c-bnc"),
              (S.className = "c-bn"),
              w.setAttribute("role", "dialog"),
              w.setAttribute("aria-modal", "true"),
              w.setAttribute("aria-hidden", "true"),
              w.setAttribute("aria-labelledby", "s-ttl"),
              x.setAttribute("role", "heading"),
              (w.style.visibility = l.style.visibility = "hidden"),
              (l.style.opacity = 0),
              s.appendChild(S),
              me(
                n,
                "keydown",
                function (e) {
                  27 === (e = e || window.event).keyCode && H.hideSettings(0);
                },
                !0
              ),
              me(S, "click", function () {
                H.hideSettings(0);
              });
          }
          S.setAttribute(
            "aria-label",
            t.languages[e].settings_modal.close_btn_label || "Close"
          ),
            (r = t.languages[e].settings_modal.blocks),
            (c = t.languages[e].settings_modal.cookie_table_headers);
          var d = r.length;
          x.innerHTML = t.languages[e].settings_modal.title;
          for (var u = 0; u < d; ++u) {
            var p = r[u].title,
              f = r[u].description,
              g = r[u].toggle,
              v = r[u].cookie_table,
              _ = !0 === t.remove_cookie_tables,
              m = f ? "truthy" : !_ && v && "truthy",
              b = le("div"),
              y = le("div");
            if (f) {
              var k = le("div");
              (k.className = "p"), k.insertAdjacentHTML("beforeend", f);
            }
            var C = le("div");
            if (
              ((C.className = "title"),
              (b.className = "c-bl"),
              (y.className = "desc"),
              void 0 !== g)
            ) {
              var E = "c-ac-" + u,
                J = le(m ? "button" : "div"),
                q = le("label"),
                P = le("input"),
                U = le("span"),
                F = le("span"),
                z = le("span"),
                R = le("span");
              (J.className = m ? "b-tl exp" : "b-tl"),
                (q.className = "b-tg"),
                (P.className = "c-tgl"),
                (z.className = "on-i"),
                (R.className = "off-i"),
                (U.className = "c-tg"),
                (F.className = "t-lb"),
                m &&
                  (J.setAttribute("aria-expanded", "false"),
                  J.setAttribute("aria-controls", E)),
                (P.type = "checkbox"),
                U.setAttribute("aria-hidden", "true");
              var K = g.value;
              (P.value = K),
                (F.textContent = p),
                J.insertAdjacentHTML("beforeend", p),
                C.appendChild(J),
                U.appendChild(z),
                U.appendChild(R),
                I
                  ? g.enabled
                    ? ((P.checked = !0),
                      !T && Z.push(!0),
                      g.enabled && !T && Q.push(K))
                    : !T && Z.push(!1)
                  : se(D.categories, K) > -1
                  ? ((P.checked = !0), !T && Z.push(!0))
                  : !T && Z.push(!1),
                !T && $.push(K),
                g.readonly
                  ? ((P.disabled = !0), ye(U, "c-ro"), !T && ee.push(!0))
                  : !T && ee.push(!1),
                ye(y, "b-acc"),
                ye(C, "b-bn"),
                ye(b, "b-ex"),
                (y.id = E),
                y.setAttribute("aria-hidden", "true"),
                q.appendChild(P),
                q.appendChild(U),
                q.appendChild(F),
                C.appendChild(q),
                m &&
                  (function (e, t, n) {
                    me(
                      J,
                      "click",
                      function () {
                        Ce(t, "act")
                          ? (ke(t, "act"),
                            n.setAttribute("aria-expanded", "false"),
                            e.setAttribute("aria-hidden", "true"))
                          : (ye(t, "act"),
                            n.setAttribute("aria-expanded", "true"),
                            e.setAttribute("aria-hidden", "false"));
                      },
                      !1
                    );
                  })(y, b, J);
            } else if (p) {
              var B = le("div");
              (B.className = "b-tl"),
                B.setAttribute("role", "heading"),
                B.setAttribute("aria-level", "3"),
                B.insertAdjacentHTML("beforeend", p),
                C.appendChild(B);
            }
            if (
              (p && b.appendChild(C), f && y.appendChild(k), !_ && void 0 !== v)
            ) {
              for (
                var G = document.createDocumentFragment(), V = 0;
                V < c.length;
                ++V
              ) {
                var W = le("th"),
                  X = c[V];
                if ((W.setAttribute("scope", "col"), X)) {
                  var Y = X && be(X)[0];
                  (W.textContent = c[V][Y]), G.appendChild(W);
                }
              }
              var te = le("tr");
              te.appendChild(G);
              var ne = le("thead");
              ne.appendChild(te);
              var ie = le("table");
              ie.appendChild(ne);
              for (
                var oe = document.createDocumentFragment(), ae = 0;
                ae < v.length;
                ae++
              ) {
                for (var ce = le("tr"), re = 0; re < c.length; ++re)
                  if ((X = c[re])) {
                    Y = be(X)[0];
                    var de = le("td");
                    de.insertAdjacentHTML("beforeend", v[ae][Y]),
                      de.setAttribute("data-column", X[Y]),
                      ce.appendChild(de);
                  }
                oe.appendChild(ce);
              }
              var ue = le("tbody");
              ue.appendChild(oe), ie.appendChild(ue), y.appendChild(ie);
            }
            ((g && p) || (!g && (p || f))) &&
              (b.appendChild(y), T ? T.appendChild(b) : N.appendChild(b));
          }
          O || ((O = le("div")).id = "s-bns"),
            j ||
              (((j = le("button")).id = "s-all-bn"),
              (j.className = "c-bn"),
              O.appendChild(j),
              me(j, "click", function () {
                H.hideSettings(), H.hide(), H.accept("all");
              })),
            (j.innerHTML = t.languages[e].settings_modal.accept_all_btn);
          var pe = t.languages[e].settings_modal.reject_all_btn;
          if (
            (pe &&
              (M ||
                (((M = le("button")).id = "s-rall-bn"),
                (M.className = "c-bn"),
                me(M, "click", function () {
                  H.hideSettings(), H.hide(), H.accept([]);
                }),
                (A.className = "bns-t"),
                O.appendChild(M)),
              (M.innerHTML = pe)),
            L ||
              (((L = le("button")).id = "s-sv-bn"),
              (L.className = "c-bn"),
              O.appendChild(L),
              me(L, "click", function () {
                H.hideSettings(), H.hide(), H.accept();
              })),
            (L.innerHTML = t.languages[e].settings_modal.save_settings_btn),
            T)
          )
            return A.replaceChild(T, N), void (N = T);
          a.appendChild(x),
            a.appendChild(s),
            A.appendChild(a),
            A.appendChild(N),
            A.appendChild(O),
            o.appendChild(A),
            i.appendChild(o),
            n.appendChild(i),
            w.appendChild(n),
            h.appendChild(w),
            h.appendChild(l);
        };
      H.updateLanguage = function (e, n) {
        if ("string" == typeof e) {
          var i = oe(e, t.languages);
          return (
            (i !== E.current_lang || !0 === n) &&
            ((E.current_lang = i), q && (ae(i), ie(C)), ce(i), !0)
          );
        }
      };
      var re = function (e) {
          var t = r.length,
            n = -1;
          B = !1;
          var i = ve("", "all"),
            o = [E.cookie_domain, "." + E.cookie_domain];
          if ("www." === E.cookie_domain.slice(0, 4)) {
            var a = E.cookie_domain.substr(4);
            o.push(a), o.push("." + a);
          }
          for (var s = 0; s < t; s++) {
            var l = r[s];
            if (Object.prototype.hasOwnProperty.call(l, "toggle")) {
              var d = se(K, l.toggle.value) > -1;
              if (
                !Z[++n] &&
                Object.prototype.hasOwnProperty.call(l, "cookie_table") &&
                (e || d)
              ) {
                var u = l.cookie_table,
                  p = be(c[0])[0],
                  f = u.length;
                "on_disable" === l.toggle.reload && d && (B = !0);
                for (var g = 0; g < f; g++) {
                  var h = u[g],
                    v = [],
                    _ = h[p],
                    m = h.is_regex || !1,
                    b = h.domain || null,
                    y = h.path || !1;
                  if ((b && (o = [b, "." + b]), m))
                    for (var k = 0; k < i.length; k++)
                      i[k].match(_) && v.push(i[k]);
                  else {
                    var C = se(i, _);
                    C > -1 && v.push(i[C]);
                  }
                  v.length > 0 &&
                    (_e(v, y, o), "on_clear" === l.toggle.reload && (B = !0));
                }
              }
            }
          }
        },
        se = function (e, t) {
          return e.indexOf(t);
        },
        le = function (e) {
          var t = document.createElement(e);
          return "button" === e && t.setAttribute("type", e), t;
        },
        de = function (e, t) {
          return "browser" === E.auto_language
            ? oe(ue(), e)
            : "document" === E.auto_language
            ? oe(document.documentElement.lang, e)
            : "string" == typeof t
            ? (E.current_lang = oe(t, e))
            : (E.current_lang, E.current_lang);
        },
        ue = function () {
          var e = navigator.language || navigator.browserLanguage;
          return e.length > 2 && (e = e[0] + e[1]), e.toLowerCase();
        };
      (H.allowedCategory = function (e) {
        if (I && "opt-in" !== E.mode) t = Q;
        else
          var t =
            JSON.parse(ve(E.cookie_name, "one", !0) || "{}").categories || [];
        return se(t, e) > -1;
      }),
        (H.run = function (t) {
          if (!document.getElementById("cc_div")) {
            if ((ne(t), W)) return;
            D = JSON.parse(ve(E.cookie_name, "one", !0) || "{}");
            var c = (o = D.consent_uuid) !== undefined;
            if (
              ((n = D.consent_date) && (n = new Date(n)),
              (i = D.last_consent_update) && (i = new Date(i)),
              (J = D.data !== undefined ? D.data : null),
              z && D.revision !== E.revision && (R = !1),
              (q = I = !(c && R && n && i && o)),
              (function () {
                ((g = le("div")).id = "cc--main"),
                  (g.style.position = "fixed"),
                  (g.style.zIndex = "1000000"),
                  (g.innerHTML =
                    '\x3c!--[if lt IE 9 ]><div id="cc_div" class="cc_div ie"></div><![endif]--\x3e\x3c!--[if (gt IE 8)|!(IE)]>\x3c!--\x3e<div id="cc_div" class="cc_div"></div>\x3c!--<![endif]--\x3e'),
                  (h = g.children[0]);
                var t = E.current_lang;
                q && ae(t), ce(t), (e || document.body).appendChild(g);
              })(),
              (function () {
                var e = [
                  "[href]",
                  "button",
                  "input",
                  "details",
                  '[tabindex="0"]',
                ];
                function t(t, n) {
                  var i = !1,
                    o = !1;
                  try {
                    for (
                      var a,
                        c = t.querySelectorAll(
                          e.join(':not([tabindex="-1"]), ')
                        ),
                        r = c.length,
                        s = 0;
                      s < r;

                    )
                      (a = c[s].getAttribute("data-focus")),
                        o || "1" !== a
                          ? "0" === a &&
                            ((i = c[s]),
                            o ||
                              "0" === c[s + 1].getAttribute("data-focus") ||
                              (o = c[s + 1]))
                          : (o = c[s]),
                        s++;
                  } catch (l) {
                    return t.querySelectorAll(e.join(", "));
                  }
                  (n[0] = c[0]),
                    (n[1] = c[c.length - 1]),
                    (n[2] = i),
                    (n[3] = o);
                }
                t(A, Y), q && t(v, X);
              })(),
              (function (e, t) {
                if ("object" == typeof e) {
                  var n = e.consent_modal,
                    i = e.settings_modal;
                  q &&
                    n &&
                    o(
                      v,
                      ["box", "bar", "cloud"],
                      ["top", "middle", "bottom"],
                      ["zoom", "slide"],
                      n.layout,
                      n.position,
                      n.transition
                    ),
                    i &&
                      o(
                        w,
                        ["bar"],
                        ["left", "right"],
                        ["zoom", "slide"],
                        i.layout,
                        i.position,
                        i.transition
                      );
                }
                function o(e, t, n, i, o, a, c) {
                  if (
                    ((a = (a && a.split(" ")) || []),
                    se(t, o) > -1 &&
                      (ye(e, o),
                      ("bar" !== o || "middle" !== a[0]) && se(n, a[0]) > -1))
                  )
                    for (var r = 0; r < a.length; r++) ye(e, a[r]);
                  se(i, c) > -1 && ye(e, c);
                }
              })(t.gui_options),
              ie(),
              E.autorun && q && H.show(t.delay || 0),
              setTimeout(function () {
                ye(g, "c--anim");
              }, 30),
              setTimeout(function () {
                var e, t;
                (e = !1),
                  (t = !1),
                  me(document, "keydown", function (n) {
                    "Tab" === (n = n || window.event).key &&
                      (a &&
                        (n.shiftKey
                          ? document.activeElement === a[0] &&
                            (a[1].focus(), n.preventDefault())
                          : document.activeElement === a[1] &&
                            (a[0].focus(), n.preventDefault()),
                        t ||
                          F ||
                          ((t = !0),
                          !e && n.preventDefault(),
                          n.shiftKey
                            ? a[3]
                              ? a[2]
                                ? a[2].focus()
                                : a[0].focus()
                              : a[1].focus()
                            : a[3]
                            ? a[3].focus()
                            : a[0].focus())),
                      !t && (e = !0));
                  }),
                  document.contains &&
                    me(
                      g,
                      "click",
                      function (e) {
                        (e = e || window.event),
                          U
                            ? A.contains(e.target)
                              ? (F = !0)
                              : (H.hideSettings(0), (F = !1))
                            : P && v.contains(e.target) && (F = !0);
                      },
                      !0
                    );
              }, 100),
              I)
            )
              "opt-out" === E.mode && (E.mode, pe(Q));
            else {
              var r = "boolean" == typeof D.rfc_cookie;
              (!r || (r && D.rfc_cookie !== E.use_rfc_cookie)) &&
                ((D.rfc_cookie = E.use_rfc_cookie),
                he(E.cookie_name, JSON.stringify(D))),
                (u = ge(fe())),
                pe(),
                "function" == typeof s && s(D);
            }
          }
        }),
        (H.showSettings = function (e) {
          setTimeout(
            function () {
              ye(te, "show--settings"),
                w.setAttribute("aria-hidden", "false"),
                (U = !0),
                setTimeout(function () {
                  P
                    ? (f = document.activeElement)
                    : (p = document.activeElement),
                    0 !== Y.length &&
                      (Y[3] ? Y[3].focus() : Y[0].focus(), (a = Y));
                }, 200);
            },
            e > 0 ? e : 0
          );
        });
      var pe = function (e) {
        if (E.page_scripts) {
          var t = document.querySelectorAll(
              "script[" + E.script_selector + "]"
            ),
            n = e || D.categories || [],
            i = function (e, t) {
              if (t < e.length) {
                var o = e[t],
                  a = o.getAttribute(E.script_selector);
                if (se(n, a) > -1) {
                  (o.type = "text/javascript"),
                    o.removeAttribute(E.script_selector);
                  var c = o.getAttribute("data-src");
                  c && o.removeAttribute("data-src");
                  var r = le("script");
                  if (
                    ((r.textContent = o.innerHTML),
                    (function (e, t) {
                      for (
                        var n = t.attributes, i = n.length, o = 0;
                        o < i;
                        o++
                      ) {
                        var a = n[o].nodeName;
                        e.setAttribute(a, t[a] || t.getAttribute(a));
                      }
                    })(r, o),
                    c ? (r.src = c) : (c = o.src),
                    c &&
                      (r.readyState
                        ? (r.onreadystatechange = function () {
                            ("loaded" !== r.readyState &&
                              "complete" !== r.readyState) ||
                              ((r.onreadystatechange = null), i(e, ++t));
                          })
                        : (r.onload = function () {
                            (r.onload = null), i(e, ++t);
                          })),
                    o.parentNode.replaceChild(r, o),
                    c)
                  )
                    return;
                }
                i(e, ++t);
              }
            };
          i(t, 0);
        }
      };
      (H.set = function (e, t) {
        switch (e) {
          case "data":
            return (function (e, n) {
              var i = !1;
              if ("update" === t.mode) {
                var o = typeof (J = H.get("data")) == typeof e;
                if (o && "object" == typeof J)
                  for (var a in (!J && (J = {}), e))
                    J[a] !== e[a] && ((J[a] = e[a]), (i = !0));
                else (!o && J) || J === e || ((J = e), (i = !0));
              } else (J = e), (i = !0);
              return (
                i && ((D.data = J), he(E.cookie_name, JSON.stringify(D))), i
              );
            })(t.value);
          default:
            return !1;
        }
      }),
        (H.get = function (e, t) {
          return JSON.parse(ve(t || E.cookie_name, "one", !0) || "{}")[e];
        }),
        (H.getConfig = function (e) {
          return E[e] || t[e];
        });
      var fe = function () {
          return (
            (G = D.categories || []),
            (V = $.filter(function (e) {
              return -1 === se(G, e);
            })),
            { accepted: G, rejected: V }
          );
        },
        ge = function (e) {
          var t = "custom",
            n = ee.filter(function (e) {
              return !0 === e;
            }).length;
          return (
            e.accepted.length === $.length
              ? (t = "all")
              : e.accepted.length === n && (t = "necessary"),
            t
          );
        };
      (H.getUserPreferences = function () {
        var e = fe();
        return {
          accept_type: ge(e),
          accepted_categories: e.accepted,
          rejected_categories: e.rejected,
        };
      }),
        (H.loadScript = function (e, t, n) {
          var i = "function" == typeof t;
          if (document.querySelector('script[src="' + e + '"]')) i && t();
          else {
            var o = le("script");
            if (n && n.length > 0)
              for (var a = 0; a < n.length; ++a)
                n[a] && o.setAttribute(n[a].name, n[a].value);
            i && (o.onload = t), (o.src = e), document.head.appendChild(o);
          }
        }),
        (H.updateScripts = function () {
          pe();
        }),
        (H.show = function (e, t) {
          !0 === t && ae(E.current_lang),
            q &&
              setTimeout(
                function () {
                  ye(te, "show--consent"),
                    v.setAttribute("aria-hidden", "false"),
                    (P = !0),
                    setTimeout(function () {
                      (p = document.activeElement), (a = X);
                    }, 200);
                },
                e > 0 ? e : t ? 30 : 0
              );
        }),
        (H.hide = function () {
          q &&
            (ke(te, "show--consent"),
            v.setAttribute("aria-hidden", "true"),
            (P = !1),
            setTimeout(function () {
              p.focus(), (a = null);
            }, 200));
        }),
        (H.hideSettings = function () {
          ke(te, "show--settings"),
            (U = !1),
            w.setAttribute("aria-hidden", "true"),
            setTimeout(function () {
              P ? (f && f.focus(), (a = X)) : (p && p.focus(), (a = null)),
                (F = !1);
            }, 200);
        }),
        (H.accept = function (e, t) {
          var a = e || undefined,
            c = t || [],
            r = [];
          if (a)
            if ("object" == typeof a && "number" == typeof a.length)
              for (var p = 0; p < a.length; p++)
                -1 !== se($, a[p]) && r.push(a[p]);
            else
              "string" == typeof a &&
                ("all" === a ? (r = $.slice()) : -1 !== se($, a) && r.push(a));
          else
            r = (function () {
              for (
                var e = document.querySelectorAll(".c-tgl") || [],
                  t = [],
                  n = 0;
                n < e.length;
                n++
              )
                e[n].checked && t.push(e[n].value);
              return t;
            })();
          if (c.length >= 1)
            for (p = 0; p < c.length; p++)
              r = r.filter(function (e) {
                return e !== c[p];
              });
          for (p = 0; p < $.length; p++)
            !0 === ee[p] && -1 === se(r, $[p]) && r.push($[p]);
          !(function (e) {
            K = [];
            var t = document.querySelectorAll(".c-tgl") || [];
            if (t.length > 0)
              for (var a = 0; a < t.length; a++)
                -1 !== se(e, $[a])
                  ? ((t[a].checked = !0), Z[a] || (K.push($[a]), (Z[a] = !0)))
                  : ((t[a].checked = !1), Z[a] && (K.push($[a]), (Z[a] = !1)));
            !I && E.autoclear_cookies && K.length > 0 && re(),
              n || (n = new Date()),
              o ||
                (o = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
                  /[018]/g,
                  function (e) {
                    try {
                      return (
                        e ^
                        ((window.crypto || window.msCrypto).getRandomValues(
                          new Uint8Array(1)
                        )[0] &
                          (15 >> (e / 4)))
                      ).toString(16);
                    } catch (t) {
                      return "";
                    }
                  }
                )),
              (D = {
                categories: e,
                revision: E.revision,
                data: J,
                rfc_cookie: E.use_rfc_cookie,
                consent_date: n.toISOString(),
                consent_uuid: o,
              }),
              (I || K.length > 0) &&
                ((R = !0),
                (i = i ? new Date() : n),
                (D.last_consent_update = i.toISOString()),
                (u = ge(fe())),
                he(E.cookie_name, JSON.stringify(D)),
                pe()),
              (I &&
                (E.autoclear_cookies && re(!0),
                "function" == typeof d && d(H.getUserPreferences(), D),
                "function" == typeof s && s(D),
                (I = !1),
                "opt-in" === E.mode)) ||
                ("function" == typeof l && K.length > 0 && l(D, K),
                B && window.location.reload());
          })(r);
        }),
        (H.eraseCookies = function (e, t, n) {
          var i = [],
            o = n ? [n, "." + n] : [E.cookie_domain, "." + E.cookie_domain];
          if ("object" == typeof e && e.length > 0)
            for (var a = 0; a < e.length; a++)
              this.validCookie(e[a]) && i.push(e[a]);
          else this.validCookie(e) && i.push(e);
          _e(i, t, o);
        });
      var he = function (e, t) {
          var n = E.cookie_expiration;
          "number" == typeof E.cookie_necessary_only_expiration &&
            "necessary" === u &&
            (n = E.cookie_necessary_only_expiration),
            (t = E.use_rfc_cookie ? encodeURIComponent(t) : t);
          var i = new Date();
          i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
          var o =
            e +
            "=" +
            (t || "") +
            "; expires=" +
            i.toUTCString() +
            "; Path=" +
            E.cookie_path +
            ";";
          (o += " SameSite=" + E.cookie_same_site + ";"),
            window.location.hostname.indexOf(".") > -1 &&
              (o += " Domain=" + E.cookie_domain + ";"),
            "https:" === window.location.protocol && (o += " Secure;"),
            (document.cookie = o);
        },
        ve = function (e, t, n) {
          var i;
          if ("one" === t) {
            if (
              (i = (i = document.cookie.match(
                "(^|;)\\s*" + e + "\\s*=\\s*([^;]+)"
              ))
                ? n
                  ? i.pop()
                  : e
                : "") &&
              e === E.cookie_name
            ) {
              try {
                i = JSON.parse(i);
              } catch (c) {
                try {
                  i = JSON.parse(decodeURIComponent(i));
                } catch (c) {
                  i = {};
                }
              }
              i = JSON.stringify(i);
            }
          } else if ("all" === t) {
            var o = document.cookie.split(/;\s*/);
            i = [];
            for (var a = 0; a < o.length; a++) i.push(o[a].split("=")[0]);
          }
          return i;
        },
        _e = function (e, t, n) {
          for (var i = t || "/", o = 0; o < e.length; o++) {
            for (var a = 0; a < n.length; a++)
              document.cookie =
                e[o] +
                "=; path=" +
                i +
                (n[a].indexOf(".") > -1 ? "; domain=" + n[a] : "") +
                "; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            e[o];
          }
        };
      H.validCookie = function (e) {
        return "" !== ve(e, "one", !0);
      };
      var me = function (e, t, n, i) {
          e.addEventListener(t, n, !0 === i && { passive: !0 });
        },
        be = function (e) {
          if ("object" == typeof e) return Object.keys(e);
        },
        ye = function (e, t) {
          e.classList.add(t);
        },
        ke = function (e, t) {
          e.classList.remove(t);
        },
        Ce = function (e, t) {
          return e.classList.contains(t);
        };
      return H;
    });
})();
