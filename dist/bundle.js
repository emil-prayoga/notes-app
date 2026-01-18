(() => {
  var e = {
      56(e, t, n) {
        'use strict';
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute('nonce', t);
        };
      },
      72(e) {
        'use strict';
        var t = [];
        function n(e) {
          for (var n = -1, o = 0; o < t.length; o++)
            if (t[o].identifier === e) {
              n = o;
              break;
            }
          return n;
        }
        function o(e, o) {
          for (var a = {}, i = [], s = 0; s < e.length; s++) {
            var l = e[s],
              c = o.base ? l[0] + o.base : l[0],
              d = a[c] || 0,
              u = ''.concat(c, ' ').concat(d);
            a[c] = d + 1;
            var p = n(u),
              m = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== p) (t[p].references++, t[p].updater(m));
            else {
              var w = r(m, o);
              ((o.byIndex = s),
                t.splice(s, 0, { identifier: u, updater: w, references: 1 }));
            }
            i.push(u);
          }
          return i;
        }
        function r(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, r) {
          var a = o((e = e || []), (r = r || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var s = n(a[i]);
              t[s].references--;
            }
            for (var l = o(e, r), c = 0; c < a.length; c++) {
              var d = n(a[c]);
              0 === t[d].references && (t[d].updater(), t.splice(d, 1));
            }
            a = l;
          };
        };
      },
      113(e) {
        'use strict';
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      253() {
        class e extends HTMLElement {
          connectedCallback() {
            (this.render(), this.attachEventListeners());
          }
          render() {
            this.innerHTML =
              '\n      <link rel="stylesheet" href="../styles/style.css">\n      <form class="note-form" id="noteForm">\n        <div class="form-group">\n          <label for="note-title">Judul Catatan <span>*</span></label>\n          <input \n            type="text" \n            id="note-title" \n            name="title" \n            placeholder="Masukkan judul catatan"\n            required\n          >\n          <span class="error-message" id="title-error">Judul harus diisi (minimal 3 karakter)</span>\n          <span class="char-count" id="title-count">0</span>\n        </div>\n\n        <div class="form-group">\n          <label for="note-body">Isi Catatan <span>*</span></label>\n          <textarea \n            id="note-body" \n            name="body" \n            placeholder="Tulis catatan Anda di sini"\n            required\n          ></textarea>\n          <span class="error-message" id="body-error">Isi catatan harus diisi (minimal 10 karakter)</span>\n          <span class="char-count" id="body-count">0</span>\n        </div>\n\n        <button type="submit" class="submit-btn" id="submitBtn" disabled>\n          <i class="fas fa-plus"></i> Tambah Catatan\n        </button>\n      </form>\n    ';
          }
          attachEventListeners() {
            const e = this.querySelector('#noteForm'),
              t = this.querySelector('#note-title'),
              n = this.querySelector('#note-body'),
              o = this.querySelector('#title-error'),
              r = this.querySelector('#body-error'),
              a = this.querySelector('#title-count'),
              i = this.querySelector('#body-count'),
              s = this.querySelector('#submitBtn'),
              l = () => {
                const e = t.value.trim().length >= 3,
                  o = n.value.trim().length >= 10;
                s.disabled = !(e && o);
              };
            (t.addEventListener('input', (e) => {
              const n = e.target.value.length;
              ((a.textContent = n),
                0 === n
                  ? (t.classList.add('invalid'),
                    (o.textContent = 'Judul harus diisi'),
                    o.classList.add('show'))
                  : n < 3
                    ? (t.classList.add('invalid'),
                      (o.textContent = 'Judul minimal 3 karakter'),
                      o.classList.add('show'))
                    : (t.classList.remove('invalid'),
                      o.classList.remove('show')),
                l());
            }),
              n.addEventListener('input', (e) => {
                const t = e.target.value.length;
                ((i.textContent = t),
                  0 === t
                    ? (n.classList.add('invalid'),
                      (r.textContent = 'Isi catatan harus diisi'),
                      r.classList.add('show'))
                    : t < 10
                      ? (n.classList.add('invalid'),
                        (r.textContent = 'Isi catatan minimal 10 karakter'),
                        r.classList.add('show'))
                      : (n.classList.remove('invalid'),
                        r.classList.remove('show')),
                  l());
              }),
              e.addEventListener('submit', (o) => {
                o.preventDefault();
                const r = t.value.trim(),
                  s = n.value.trim();
                r.length >= 3 &&
                  s.length >= 10 &&
                  (this.dispatchEvent(
                    new CustomEvent('note-submit', {
                      detail: { title: r, body: s },
                      bubbles: !0,
                      composed: !0,
                    })
                  ),
                  e.reset(),
                  (a.textContent = '0'),
                  (i.textContent = '0'),
                  t.classList.remove('invalid'),
                  n.classList.remove('invalid'),
                  l());
              }));
          }
        }
        customElements.define('note-form', e);
      },
      314(e) {
        'use strict';
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = '',
                  o = void 0 !== t[5];
                return (
                  t[4] && (n += '@supports ('.concat(t[4], ') {')),
                  t[2] && (n += '@media '.concat(t[2], ' {')),
                  o &&
                    (n += '@layer'.concat(
                      t[5].length > 0 ? ' '.concat(t[5]) : '',
                      ' {'
                    )),
                  (n += e(t)),
                  o && (n += '}'),
                  t[2] && (n += '}'),
                  t[4] && (n += '}'),
                  n
                );
              }).join('');
            }),
            (t.i = function (e, n, o, r, a) {
              'string' == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (o)
                for (var s = 0; s < this.length; s++) {
                  var l = this[s][0];
                  null != l && (i[l] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var d = [].concat(e[c]);
                (o && i[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = '@layer'
                        .concat(d[5].length > 0 ? ' '.concat(d[5]) : '', ' {')
                        .concat(d[1], '}')),
                    (d[5] = a)),
                  n &&
                    (d[2]
                      ? ((d[1] = '@media '
                          .concat(d[2], ' {')
                          .concat(d[1], '}')),
                        (d[2] = n))
                      : (d[2] = n)),
                  r &&
                    (d[4]
                      ? ((d[1] = '@supports ('
                          .concat(d[4], ') {')
                          .concat(d[1], '}')),
                        (d[4] = r))
                      : (d[4] = ''.concat(r))),
                  t.push(d));
              }
            }),
            t
          );
        };
      },
      354(e) {
        'use strict';
        e.exports = function (e) {
          var t = e[1],
            n = e[3];
          if (!n) return t;
          if ('function' == typeof btoa) {
            var o = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
              r =
                'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                  o
                ),
              a = '/*# '.concat(r, ' */');
            return [t].concat([a]).join('\n');
          }
          return [t].join('\n');
        };
      },
      366() {
        class e extends HTMLElement {
          constructor() {
            (super(), (this.notes = []));
          }
          static get observedAttributes() {
            return ['type'];
          }
          connectedCallback() {
            this.render();
          }
          setNotes(e) {
            try {
              (console.log('setNotes called:', {
                received: e,
                length: e?.length,
                type: this.getAttribute('type'),
              }),
                (this.notes = e || []),
                this.render());
            } catch (e) {
              console.error('Error in setNotes:', e);
            }
          }
          render() {
            const e = this.getAttribute('type') || 'active';
            (console.log('render called:', {
              type: e,
              notesCount: this.notes.length,
            }),
              (this.innerHTML = `\n      <link rel="stylesheet" href="../styles/style.css">\n      ${0 === this.notes.length ? this.renderEmptyState(e) : this.renderNotes()}\n    `));
          }
          renderEmptyState(e) {
            return `\n      <div class="empty-state">\n        <div class="empty-state-icon"><i class="fas fa-file-alt"></i></div>\n        <p class="empty-state-text">${'archived' === e ? 'Belum ada catatan yang diarsipkan.' : 'Belum ada catatan aktif. Mulai tambahkan catatan pertama Anda!'}</p>\n      </div>\n    `;
          }
          renderNotes() {
            console.log('renderNotes called with:', this.notes);
            const e = this.notes
              .map(
                (e) =>
                  `\n      <note-item \n        note-id="${e.id}"\n        note-title="${this.escapeAttribute(e.title)}"\n        note-body="${this.escapeAttribute(e.body)}"\n        note-date="${e.createdAt}"\n        is-archived="${e.archived}"\n      ></note-item>\n    `
              )
              .join('');
            return (
              console.log('notesHTML generated:', {
                count: this.notes.length,
                htmlLength: e.length,
              }),
              `<div class="notes-grid">${e}</div>`
            );
          }
          escapeAttribute(e) {
            return e
              .replace(/&/g, '&amp;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#39;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;');
          }
        }
        customElements.define('notes-list', e);
      },
      367() {
        class e extends HTMLElement {
          connectedCallback() {
            const e = this.getAttribute('title') || 'My App';
            this.innerHTML = `\n             <link rel="stylesheet" href="../style.css">\n            <header class="app-bar">\n                <h1> <i class="fas fa-sticky-note"></i> ${e}</h1>\n            </header>\n        `;
          }
        }
        customElements.define('app-bar', e);
      },
      465(e) {
        ((e.exports = (function () {
          'use strict';
          function e(e, t, n) {
            if ('function' == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              'Private element is not present on this object'
            );
          }
          function t(t, n) {
            return t.get(e(t, n));
          }
          function n(e, t, n) {
            ((function (e, t) {
              if (t.has(e))
                throw new TypeError(
                  'Cannot initialize the same private elements twice on an object'
                );
            })(e, t),
              t.set(e, n));
          }
          const o = {},
            r = (e) =>
              new Promise((t) => {
                if (!e) return t();
                const n = window.scrollX,
                  r = window.scrollY;
                ((o.restoreFocusTimeout = setTimeout(() => {
                  (o.previousActiveElement instanceof HTMLElement
                    ? (o.previousActiveElement.focus(),
                      (o.previousActiveElement = null))
                    : document.body && document.body.focus(),
                    t());
                }, 100)),
                  window.scrollTo(n, r));
              }),
            a = 'swal2-',
            i = [
              'container',
              'shown',
              'height-auto',
              'iosfix',
              'popup',
              'modal',
              'no-backdrop',
              'no-transition',
              'toast',
              'toast-shown',
              'show',
              'hide',
              'close',
              'title',
              'html-container',
              'actions',
              'confirm',
              'deny',
              'cancel',
              'footer',
              'icon',
              'icon-content',
              'image',
              'input',
              'file',
              'range',
              'select',
              'radio',
              'checkbox',
              'label',
              'textarea',
              'inputerror',
              'input-label',
              'validation-message',
              'progress-steps',
              'active-progress-step',
              'progress-step',
              'progress-step-line',
              'loader',
              'loading',
              'styled',
              'top',
              'top-start',
              'top-end',
              'top-left',
              'top-right',
              'center',
              'center-start',
              'center-end',
              'center-left',
              'center-right',
              'bottom',
              'bottom-start',
              'bottom-end',
              'bottom-left',
              'bottom-right',
              'grow-row',
              'grow-column',
              'grow-fullscreen',
              'rtl',
              'timer-progress-bar',
              'timer-progress-bar-container',
              'scrollbar-measure',
              'icon-success',
              'icon-warning',
              'icon-info',
              'icon-question',
              'icon-error',
              'draggable',
              'dragging',
            ].reduce((e, t) => ((e[t] = a + t), e), {}),
            s = ['success', 'warning', 'info', 'question', 'error'].reduce(
              (e, t) => ((e[t] = a + t), e),
              {}
            ),
            l = 'SweetAlert2:',
            c = (e) => e.charAt(0).toUpperCase() + e.slice(1),
            d = (e) => {
              console.warn(`${l} ${'object' == typeof e ? e.join(' ') : e}`);
            },
            u = (e) => {
              console.error(`${l} ${e}`);
            },
            p = [],
            m = (e, t = null) => {
              var n;
              ((n = `"${e}" is deprecated and will be removed in the next major release.${t ? ` Use "${t}" instead.` : ''}`),
                p.includes(n) || (p.push(n), d(n)));
            },
            w = (e) => ('function' == typeof e ? e() : e),
            h = (e) => e && 'function' == typeof e.toPromise,
            g = (e) => (h(e) ? e.toPromise() : Promise.resolve(e)),
            f = (e) => e && Promise.resolve(e) === e,
            b = () => document.body.querySelector(`.${i.container}`),
            A = (e) => {
              const t = b();
              return t ? t.querySelector(e) : null;
            },
            v = (e) => A(`.${e}`),
            y = () => v(i.popup),
            x = () => v(i.icon),
            C = () => v(i.title),
            E = () => v(i['html-container']),
            B = () => v(i.image),
            k = () => v(i['progress-steps']),
            L = () => v(i['validation-message']),
            T = () => A(`.${i.actions} .${i.confirm}`),
            $ = () => A(`.${i.actions} .${i.cancel}`),
            S = () => A(`.${i.actions} .${i.deny}`),
            P = () => A(`.${i.loader}`),
            I = () => v(i.actions),
            M = () => v(i.footer),
            z = () => v(i['timer-progress-bar']),
            j = () => v(i.close),
            O = () => {
              const e = y();
              if (!e) return [];
              const t = e.querySelectorAll(
                  '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
                ),
                n = Array.from(t).sort((e, t) => {
                  const n = parseInt(e.getAttribute('tabindex') || '0'),
                    o = parseInt(t.getAttribute('tabindex') || '0');
                  return n > o ? 1 : n < o ? -1 : 0;
                }),
                o = e.querySelectorAll(
                  '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
                ),
                r = Array.from(o).filter(
                  (e) => '-1' !== e.getAttribute('tabindex')
                );
              return [...new Set(n.concat(r))].filter((e) => ee(e));
            },
            D = () =>
              H(document.body, i.shown) &&
              !H(document.body, i['toast-shown']) &&
              !H(document.body, i['no-backdrop']),
            N = () => {
              const e = y();
              return !!e && H(e, i.toast);
            },
            q = (e, t) => {
              if (((e.textContent = ''), t)) {
                const n = new DOMParser().parseFromString(t, 'text/html'),
                  o = n.querySelector('head');
                o &&
                  Array.from(o.childNodes).forEach((t) => {
                    e.appendChild(t);
                  });
                const r = n.querySelector('body');
                r &&
                  Array.from(r.childNodes).forEach((t) => {
                    t instanceof HTMLVideoElement ||
                    t instanceof HTMLAudioElement
                      ? e.appendChild(t.cloneNode(!0))
                      : e.appendChild(t);
                  });
              }
            },
            H = (e, t) => {
              if (!t) return !1;
              const n = t.split(/\s+/);
              for (let t = 0; t < n.length; t++)
                if (!e.classList.contains(n[t])) return !1;
              return !0;
            },
            Y = (e, t, n) => {
              if (
                (((e, t) => {
                  Array.from(e.classList).forEach((n) => {
                    Object.values(i).includes(n) ||
                      Object.values(s).includes(n) ||
                      Object.values(t.showClass || {}).includes(n) ||
                      e.classList.remove(n);
                  });
                })(e, t),
                !t.customClass)
              )
                return;
              const o = t.customClass[n];
              o &&
                ('string' == typeof o || o.forEach
                  ? W(e, o)
                  : d(
                      `Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof o}"`
                    ));
            },
            V = (e, t) => {
              if (!t) return null;
              switch (t) {
                case 'select':
                case 'textarea':
                case 'file':
                  return e.querySelector(`.${i.popup} > .${i[t]}`);
                case 'checkbox':
                  return e.querySelector(`.${i.popup} > .${i.checkbox} input`);
                case 'radio':
                  return (
                    e.querySelector(
                      `.${i.popup} > .${i.radio} input:checked`
                    ) ||
                    e.querySelector(
                      `.${i.popup} > .${i.radio} input:first-child`
                    )
                  );
                case 'range':
                  return e.querySelector(`.${i.popup} > .${i.range} input`);
                default:
                  return e.querySelector(`.${i.popup} > .${i.input}`);
              }
            },
            F = (e) => {
              if ((e.focus(), 'file' !== e.type)) {
                const t = e.value;
                ((e.value = ''), (e.value = t));
              }
            },
            Z = (e, t, n) => {
              e &&
                t &&
                ('string' == typeof t && (t = t.split(/\s+/).filter(Boolean)),
                t.forEach((t) => {
                  Array.isArray(e)
                    ? e.forEach((e) => {
                        n ? e.classList.add(t) : e.classList.remove(t);
                      })
                    : n
                      ? e.classList.add(t)
                      : e.classList.remove(t);
                }));
            },
            W = (e, t) => {
              Z(e, t, !0);
            },
            U = (e, t) => {
              Z(e, t, !1);
            },
            R = (e, t) => {
              const n = Array.from(e.children);
              for (let e = 0; e < n.length; e++) {
                const o = n[e];
                if (o instanceof HTMLElement && H(o, t)) return o;
              }
            },
            X = (e, t, n) => {
              (n === `${parseInt(`${n}`)}` && (n = parseInt(n)),
                n || 0 === parseInt(`${n}`)
                  ? e.style.setProperty(t, 'number' == typeof n ? `${n}px` : n)
                  : e.style.removeProperty(t));
            },
            _ = (e, t = 'flex') => {
              e && (e.style.display = t);
            },
            G = (e) => {
              e && (e.style.display = 'none');
            },
            K = (e, t = 'block') => {
              e &&
                new MutationObserver(() => {
                  Q(e, e.innerHTML, t);
                }).observe(e, { childList: !0, subtree: !0 });
            },
            J = (e, t, n, o) => {
              const r = e.querySelector(t);
              r && r.style.setProperty(n, o);
            },
            Q = (e, t, n = 'flex') => {
              t ? _(e, n) : G(e);
            },
            ee = (e) =>
              Boolean(
                e &&
                (e.offsetWidth || e.offsetHeight || e.getClientRects().length)
              ),
            te = (e) => Boolean(e.scrollHeight > e.clientHeight),
            ne = (e) => {
              const t = window.getComputedStyle(e),
                n = parseFloat(t.getPropertyValue('animation-duration') || '0'),
                o = parseFloat(
                  t.getPropertyValue('transition-duration') || '0'
                );
              return n > 0 || o > 0;
            },
            oe = (e, t = !1) => {
              const n = z();
              n &&
                ee(n) &&
                (t && ((n.style.transition = 'none'), (n.style.width = '100%')),
                setTimeout(() => {
                  ((n.style.transition = `width ${e / 1e3}s linear`),
                    (n.style.width = '0%'));
                }, 10));
            },
            re =
              `\n <div aria-labelledby="${i.title}" aria-describedby="${i['html-container']}" class="${i.popup}" tabindex="-1">\n   <button type="button" class="${i.close}"></button>\n   <ul class="${i['progress-steps']}"></ul>\n   <div class="${i.icon}"></div>\n   <img class="${i.image}" />\n   <h2 class="${i.title}" id="${i.title}"></h2>\n   <div class="${i['html-container']}" id="${i['html-container']}"></div>\n   <input class="${i.input}" id="${i.input}" />\n   <input type="file" class="${i.file}" />\n   <div class="${i.range}">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="${i.select}" id="${i.select}"></select>\n   <div class="${i.radio}"></div>\n   <label class="${i.checkbox}">\n     <input type="checkbox" id="${i.checkbox}" />\n     <span class="${i.label}"></span>\n   </label>\n   <textarea class="${i.textarea}" id="${i.textarea}"></textarea>\n   <div class="${i['validation-message']}" id="${i['validation-message']}"></div>\n   <div class="${i.actions}">\n     <div class="${i.loader}"></div>\n     <button type="button" class="${i.confirm}"></button>\n     <button type="button" class="${i.deny}"></button>\n     <button type="button" class="${i.cancel}"></button>\n   </div>\n   <div class="${i.footer}"></div>\n   <div class="${i['timer-progress-bar-container']}">\n     <div class="${i['timer-progress-bar']}"></div>\n   </div>\n </div>\n`.replace(
                /(^|\n)\s*/g,
                ''
              ),
            ae = () => {
              o.currentInstance && o.currentInstance.resetValidationMessage();
            },
            ie = (e) => {
              const t = (() => {
                const e = b();
                return (
                  !!e &&
                  (e.remove(),
                  U(
                    [document.documentElement, document.body],
                    [i['no-backdrop'], i['toast-shown'], i['has-column']]
                  ),
                  !0)
                );
              })();
              if (
                'undefined' == typeof window ||
                'undefined' == typeof document
              )
                return void u('SweetAlert2 requires document to initialize');
              const n = document.createElement('div');
              ((n.className = i.container),
                t && W(n, i['no-transition']),
                q(n, re),
                (n.dataset.swal2Theme = e.theme));
              const r = ((e) => {
                if ('string' == typeof e) {
                  const t = document.querySelector(e);
                  if (!t) throw new Error(`Target element "${e}" not found`);
                  return t;
                }
                return e;
              })(e.target || 'body');
              (r.appendChild(n),
                e.topLayer && (n.setAttribute('popover', ''), n.showPopover()),
                ((e) => {
                  const t = y();
                  t &&
                    (t.setAttribute('role', e.toast ? 'alert' : 'dialog'),
                    t.setAttribute(
                      'aria-live',
                      e.toast ? 'polite' : 'assertive'
                    ),
                    e.toast || t.setAttribute('aria-modal', 'true'));
                })(e),
                ((e) => {
                  'rtl' === window.getComputedStyle(e).direction &&
                    (W(b(), i.rtl), (o.isRTL = !0));
                })(r),
                (() => {
                  const e = y();
                  if (!e) return;
                  const t = R(e, i.input),
                    n = R(e, i.file),
                    o = e.querySelector(`.${i.range} input`),
                    r = e.querySelector(`.${i.range} output`),
                    a = R(e, i.select),
                    s = e.querySelector(`.${i.checkbox} input`),
                    l = R(e, i.textarea);
                  (t && (t.oninput = ae),
                    n && (n.onchange = ae),
                    a && (a.onchange = ae),
                    s && (s.onchange = ae),
                    l && (l.oninput = ae),
                    o &&
                      r &&
                      ((o.oninput = () => {
                        (ae(), (r.value = o.value));
                      }),
                      (o.onchange = () => {
                        (ae(), (r.value = o.value));
                      })));
                })());
            },
            se = (e, t) => {
              e instanceof HTMLElement
                ? t.appendChild(e)
                : 'object' == typeof e
                  ? le(e, t)
                  : e && q(t, e);
            },
            le = (e, t) => {
              'jquery' in e ? ce(t, e) : q(t, e.toString());
            },
            ce = (e, t) => {
              if (((e.textContent = ''), 0 in t))
                for (let n = 0; n in t; n++) e.appendChild(t[n].cloneNode(!0));
              else e.appendChild(t.cloneNode(!0));
            },
            de = (e, t) => {
              const n = I(),
                o = P();
              n &&
                o &&
                (t.showConfirmButton || t.showDenyButton || t.showCancelButton
                  ? _(n)
                  : G(n),
                Y(n, t, 'actions'),
                (function (e, t, n) {
                  const o = T(),
                    r = S(),
                    a = $();
                  o &&
                    r &&
                    a &&
                    (pe(o, 'confirm', n),
                    pe(r, 'deny', n),
                    pe(a, 'cancel', n),
                    (function (e, t, n, o) {
                      o.buttonsStyling
                        ? (W([e, t, n], i.styled),
                          o.confirmButtonColor &&
                            e.style.setProperty(
                              '--swal2-confirm-button-background-color',
                              o.confirmButtonColor
                            ),
                          o.denyButtonColor &&
                            t.style.setProperty(
                              '--swal2-deny-button-background-color',
                              o.denyButtonColor
                            ),
                          o.cancelButtonColor &&
                            n.style.setProperty(
                              '--swal2-cancel-button-background-color',
                              o.cancelButtonColor
                            ),
                          ue(e),
                          ue(t),
                          ue(n))
                        : U([e, t, n], i.styled);
                    })(o, r, a, n),
                    n.reverseButtons &&
                      (n.toast
                        ? (e.insertBefore(a, o), e.insertBefore(r, o))
                        : (e.insertBefore(a, t),
                          e.insertBefore(r, t),
                          e.insertBefore(o, t))));
                })(n, o, t),
                q(o, t.loaderHtml || ''),
                Y(o, t, 'loader'));
            };
          function ue(e) {
            const t = window.getComputedStyle(e);
            if (t.getPropertyValue('--swal2-action-button-focus-box-shadow'))
              return;
            const n = t.backgroundColor.replace(
              /rgba?\((\d+), (\d+), (\d+).*/,
              'rgba($1, $2, $3, 0.5)'
            );
            e.style.setProperty(
              '--swal2-action-button-focus-box-shadow',
              t
                .getPropertyValue('--swal2-outline')
                .replace(/ rgba\(.*/, ` ${n}`)
            );
          }
          function pe(e, t, n) {
            const o = c(t);
            (Q(e, n[`show${o}Button`], 'inline-block'),
              q(e, n[`${t}ButtonText`] || ''),
              e.setAttribute('aria-label', n[`${t}ButtonAriaLabel`] || ''),
              (e.className = i[t]),
              Y(e, n, `${t}Button`));
          }
          const me = (e, t) => {
            const n = b();
            n &&
              ((function (e, t) {
                'string' == typeof t
                  ? (e.style.background = t)
                  : t ||
                    W(
                      [document.documentElement, document.body],
                      i['no-backdrop']
                    );
              })(n, t.backdrop),
              (function (e, t) {
                t &&
                  (t in i
                    ? W(e, i[t])
                    : (d(
                        'The "position" parameter is not valid, defaulting to "center"'
                      ),
                      W(e, i.center)));
              })(n, t.position),
              (function (e, t) {
                t && W(e, i[`grow-${t}`]);
              })(n, t.grow),
              Y(n, t, 'container'));
          };
          var we = { innerParams: new WeakMap(), domCache: new WeakMap() };
          const he = [
              'input',
              'file',
              'range',
              'select',
              'radio',
              'checkbox',
              'textarea',
            ],
            ge = (e) => {
              if (!e.input) return;
              if (!Ce[e.input])
                return void u(
                  `Unexpected type of input! Expected ${Object.keys(Ce).join(' | ')}, got "${e.input}"`
                );
              const t = ye(e.input);
              if (!t) return;
              const n = Ce[e.input](t, e);
              (_(t),
                e.inputAutoFocus &&
                  setTimeout(() => {
                    F(n);
                  }));
            },
            fe = (e, t) => {
              const n = y();
              if (!n) return;
              const o = V(n, e);
              if (o) {
                ((e) => {
                  for (let t = 0; t < e.attributes.length; t++) {
                    const n = e.attributes[t].name;
                    ['id', 'type', 'value', 'style'].includes(n) ||
                      e.removeAttribute(n);
                  }
                })(o);
                for (const e in t) o.setAttribute(e, t[e]);
              }
            },
            be = (e) => {
              if (!e.input) return;
              const t = ye(e.input);
              t && Y(t, e, 'input');
            },
            Ae = (e, t) => {
              !e.placeholder &&
                t.inputPlaceholder &&
                (e.placeholder = t.inputPlaceholder);
            },
            ve = (e, t, n) => {
              if (n.inputLabel) {
                const o = document.createElement('label'),
                  r = i['input-label'];
                (o.setAttribute('for', e.id),
                  (o.className = r),
                  'object' == typeof n.customClass &&
                    W(o, n.customClass.inputLabel),
                  (o.innerText = n.inputLabel),
                  t.insertAdjacentElement('beforebegin', o));
              }
            },
            ye = (e) => {
              const t = y();
              if (t) return R(t, i[e] || i.input);
            },
            xe = (e, t) => {
              ['string', 'number'].includes(typeof t)
                ? (e.value = `${t}`)
                : f(t) ||
                  d(
                    `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`
                  );
            },
            Ce = {};
          ((Ce.text =
            Ce.email =
            Ce.password =
            Ce.number =
            Ce.tel =
            Ce.url =
            Ce.search =
            Ce.date =
            Ce['datetime-local'] =
            Ce.time =
            Ce.week =
            Ce.month =
              (e, t) => {
                const n = e;
                return (
                  xe(n, t.inputValue),
                  ve(n, n, t),
                  Ae(n, t),
                  (n.type = t.input),
                  n
                );
              }),
            (Ce.file = (e, t) => {
              const n = e;
              return (ve(n, n, t), Ae(n, t), n);
            }),
            (Ce.range = (e, t) => {
              const n = e,
                o = n.querySelector('input'),
                r = n.querySelector('output');
              return (
                o && (xe(o, t.inputValue), (o.type = t.input), ve(o, e, t)),
                r && xe(r, t.inputValue),
                e
              );
            }),
            (Ce.select = (e, t) => {
              const n = e;
              if (((n.textContent = ''), t.inputPlaceholder)) {
                const e = document.createElement('option');
                (q(e, t.inputPlaceholder),
                  (e.value = ''),
                  (e.disabled = !0),
                  (e.selected = !0),
                  n.appendChild(e));
              }
              return (ve(n, n, t), n);
            }),
            (Ce.radio = (e) => ((e.textContent = ''), e)),
            (Ce.checkbox = (e, t) => {
              const n = y();
              if (!n) throw new Error('Popup not found');
              const o = V(n, 'checkbox');
              if (!o) throw new Error('Checkbox input not found');
              ((o.value = '1'), (o.checked = Boolean(t.inputValue)));
              const r = e.querySelector('span');
              if (r) {
                const e = t.inputPlaceholder || t.inputLabel;
                e && q(r, e);
              }
              return o;
            }),
            (Ce.textarea = (e, t) => {
              const n = e;
              (xe(n, t.inputValue), Ae(n, t), ve(n, n, t));
              return (
                setTimeout(() => {
                  if ('MutationObserver' in window) {
                    const e = y();
                    if (!e) return;
                    const o = parseInt(window.getComputedStyle(e).width);
                    new MutationObserver(() => {
                      if (!document.body.contains(n)) return;
                      const e =
                          n.offsetWidth +
                          ((a = n),
                          parseInt(window.getComputedStyle(a).marginLeft) +
                            parseInt(window.getComputedStyle(a).marginRight)),
                        r = y();
                      var a;
                      r &&
                        (e > o
                          ? (r.style.width = `${e}px`)
                          : X(r, 'width', t.width));
                    }).observe(n, {
                      attributes: !0,
                      attributeFilter: ['style'],
                    });
                  }
                }),
                n
              );
            }));
          const Ee = (e, t) => {
              const n = E();
              n &&
                (K(n),
                Y(n, t, 'htmlContainer'),
                t.html
                  ? (se(t.html, n), _(n, 'block'))
                  : t.text
                    ? ((n.textContent = t.text), _(n, 'block'))
                    : G(n),
                ((e, t) => {
                  const n = y();
                  if (!n) return;
                  const o = we.innerParams.get(e),
                    r = !o || t.input !== o.input;
                  (he.forEach((e) => {
                    const o = R(n, i[e]);
                    o &&
                      (fe(e, t.inputAttributes),
                      (o.className = i[e]),
                      r && G(o));
                  }),
                    t.input && (r && ge(t), be(t)));
                })(e, t));
            },
            Be = (e, t) => {
              for (const [n, o] of Object.entries(s)) t.icon !== n && U(e, o);
              (W(e, t.icon && s[t.icon]), Te(e, t), ke(), Y(e, t, 'icon'));
            },
            ke = () => {
              const e = y();
              if (!e) return;
              const t = window
                  .getComputedStyle(e)
                  .getPropertyValue('background-color'),
                n = e.querySelectorAll(
                  '[class^=swal2-success-circular-line], .swal2-success-fix'
                );
              for (let e = 0; e < n.length; e++) n[e].style.backgroundColor = t;
            },
            Le = (e, t) => {
              if (!t.icon && !t.iconHtml) return;
              let n = e.innerHTML,
                o = '';
              (t.iconHtml
                ? (o = $e(t.iconHtml))
                : 'success' === t.icon
                  ? ((o = ((e) =>
                      `\n  ${e.animation ? '<div class="swal2-success-circular-line-left"></div>' : ''}\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div>\n  ${e.animation ? '<div class="swal2-success-fix"></div>' : ''}\n  ${e.animation ? '<div class="swal2-success-circular-line-right"></div>' : ''}\n`)(
                      t
                    )),
                    (n = n.replace(/ style=".*?"/g, '')))
                  : 'error' === t.icon
                    ? (o =
                        '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n')
                    : t.icon &&
                      (o = $e(
                        { question: '?', warning: '!', info: 'i' }[t.icon]
                      )),
                n.trim() !== o.trim() && q(e, o));
            },
            Te = (e, t) => {
              if (t.iconColor) {
                ((e.style.color = t.iconColor),
                  (e.style.borderColor = t.iconColor));
                for (const n of [
                  '.swal2-success-line-tip',
                  '.swal2-success-line-long',
                  '.swal2-x-mark-line-left',
                  '.swal2-x-mark-line-right',
                ])
                  J(e, n, 'background-color', t.iconColor);
                J(e, '.swal2-success-ring', 'border-color', t.iconColor);
              }
            },
            $e = (e) => `<div class="${i['icon-content']}">${e}</div>`;
          let Se = !1,
            Pe = 0,
            Ie = 0,
            Me = 0,
            ze = 0;
          const je = (e) => {
              const t = y();
              if (!t) return;
              const n = x();
              if (e.target === t || (n && n.contains(e.target))) {
                Se = !0;
                const n = Ne(e);
                ((Pe = n.clientX),
                  (Ie = n.clientY),
                  (Me = parseInt(t.style.insetInlineStart) || 0),
                  (ze = parseInt(t.style.insetBlockStart) || 0),
                  W(t, 'swal2-dragging'));
              }
            },
            Oe = (e) => {
              const t = y();
              if (t && Se) {
                let { clientX: n, clientY: r } = Ne(e);
                const a = n - Pe;
                ((t.style.insetInlineStart = `${Me + (o.isRTL ? -a : a)}px`),
                  (t.style.insetBlockStart = `${ze + (r - Ie)}px`));
              }
            },
            De = () => {
              const e = y();
              ((Se = !1), U(e, 'swal2-dragging'));
            },
            Ne = (e) => {
              let t = 0,
                n = 0;
              return (
                e.type.startsWith('mouse')
                  ? ((t = e.clientX), (n = e.clientY))
                  : e.type.startsWith('touch') &&
                    ((t = e.touches[0].clientX), (n = e.touches[0].clientY)),
                { clientX: t, clientY: n }
              );
            },
            qe = (e, t) => {
              const n = b(),
                o = y();
              if (n && o) {
                if (t.toast) {
                  (X(n, 'width', t.width), (o.style.width = '100%'));
                  const e = P();
                  e && o.insertBefore(e, x());
                } else X(o, 'width', t.width);
                (X(o, 'padding', t.padding),
                  t.color && (o.style.color = t.color),
                  t.background && (o.style.background = t.background),
                  G(L()),
                  He(o, t),
                  t.draggable && !t.toast
                    ? (W(o, i.draggable),
                      ((e) => {
                        (e.addEventListener('mousedown', je),
                          document.body.addEventListener('mousemove', Oe),
                          e.addEventListener('mouseup', De),
                          e.addEventListener('touchstart', je),
                          document.body.addEventListener('touchmove', Oe),
                          e.addEventListener('touchend', De));
                      })(o))
                    : (U(o, i.draggable),
                      ((e) => {
                        (e.removeEventListener('mousedown', je),
                          document.body.removeEventListener('mousemove', Oe),
                          e.removeEventListener('mouseup', De),
                          e.removeEventListener('touchstart', je),
                          document.body.removeEventListener('touchmove', Oe),
                          e.removeEventListener('touchend', De));
                      })(o)));
              }
            },
            He = (e, t) => {
              const n = t.showClass || {};
              ((e.className = `${i.popup} ${ee(e) ? n.popup : ''}`),
                t.toast
                  ? (W(
                      [document.documentElement, document.body],
                      i['toast-shown']
                    ),
                    W(e, i.toast))
                  : W(e, i.modal),
                Y(e, t, 'popup'),
                'string' == typeof t.customClass && W(e, t.customClass),
                t.icon && W(e, i[`icon-${t.icon}`]));
            },
            Ye = (e) => {
              const t = document.createElement('li');
              return (W(t, i['progress-step']), q(t, e), t);
            },
            Ve = (e) => {
              const t = document.createElement('li');
              return (
                W(t, i['progress-step-line']),
                e.progressStepsDistance &&
                  X(t, 'width', e.progressStepsDistance),
                t
              );
            },
            Fe = (e, t) => {
              var n;
              (qe(0, t),
                me(0, t),
                ((e, t) => {
                  const n = k();
                  if (!n) return;
                  const { progressSteps: o, currentProgressStep: r } = t;
                  o && 0 !== o.length && void 0 !== r
                    ? (_(n),
                      (n.textContent = ''),
                      r >= o.length &&
                        d(
                          'Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)'
                        ),
                      o.forEach((e, a) => {
                        const s = Ye(e);
                        if (
                          (n.appendChild(s),
                          a === r && W(s, i['active-progress-step']),
                          a !== o.length - 1)
                        ) {
                          const e = Ve(t);
                          n.appendChild(e);
                        }
                      }))
                    : G(n);
                })(0, t),
                ((e, t) => {
                  const n = we.innerParams.get(e),
                    o = x();
                  if (o) {
                    if (n && t.icon === n.icon)
                      return (Le(o, t), void Be(o, t));
                    if (t.icon || t.iconHtml) {
                      if (t.icon && -1 === Object.keys(s).indexOf(t.icon))
                        return (
                          u(
                            `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`
                          ),
                          void G(o)
                        );
                      (_(o),
                        Le(o, t),
                        Be(o, t),
                        W(o, t.showClass && t.showClass.icon),
                        window
                          .matchMedia('(prefers-color-scheme: dark)')
                          .addEventListener('change', ke));
                    } else G(o);
                  }
                })(e, t),
                ((e, t) => {
                  const n = B();
                  n &&
                    (t.imageUrl
                      ? (_(n, ''),
                        n.setAttribute('src', t.imageUrl),
                        n.setAttribute('alt', t.imageAlt || ''),
                        X(n, 'width', t.imageWidth),
                        X(n, 'height', t.imageHeight),
                        (n.className = i.image),
                        Y(n, t, 'image'))
                      : G(n));
                })(0, t),
                ((e, t) => {
                  const n = C();
                  n &&
                    (K(n),
                    Q(n, Boolean(t.title || t.titleText), 'block'),
                    t.title && se(t.title, n),
                    t.titleText && (n.innerText = t.titleText),
                    Y(n, t, 'title'));
                })(0, t),
                ((e, t) => {
                  const n = j();
                  n &&
                    (q(n, t.closeButtonHtml || ''),
                    Y(n, t, 'closeButton'),
                    Q(n, t.showCloseButton),
                    n.setAttribute('aria-label', t.closeButtonAriaLabel || ''));
                })(0, t),
                Ee(e, t),
                de(0, t),
                ((e, t) => {
                  const n = M();
                  n &&
                    (K(n),
                    Q(n, Boolean(t.footer), 'block'),
                    t.footer && se(t.footer, n),
                    Y(n, t, 'footer'));
                })(0, t));
              const r = y();
              ('function' == typeof t.didRender && r && t.didRender(r),
                null === (n = o.eventEmitter) ||
                  void 0 === n ||
                  n.emit('didRender', r));
            },
            Ze = () => {
              var e;
              return null === (e = T()) || void 0 === e ? void 0 : e.click();
            },
            We = Object.freeze({
              cancel: 'cancel',
              backdrop: 'backdrop',
              close: 'close',
              esc: 'esc',
              timer: 'timer',
            }),
            Ue = (e) => {
              if (
                e.keydownTarget &&
                e.keydownHandlerAdded &&
                e.keydownHandler
              ) {
                const t = e.keydownHandler;
                (e.keydownTarget.removeEventListener('keydown', t, {
                  capture: e.keydownListenerCapture,
                }),
                  (e.keydownHandlerAdded = !1));
              }
            },
            Re = (e, t) => {
              var n;
              const o = O();
              if (o.length)
                return (
                  -2 === (e += t) && (e = o.length - 1),
                  e === o.length ? (e = 0) : -1 === e && (e = o.length - 1),
                  void o[e].focus()
                );
              null === (n = y()) || void 0 === n || n.focus();
            },
            Xe = ['ArrowRight', 'ArrowDown'],
            _e = ['ArrowLeft', 'ArrowUp'],
            Ge = (e, t, n) => {
              e &&
                (t.isComposing ||
                  229 === t.keyCode ||
                  (e.stopKeydownPropagation && t.stopPropagation(),
                  'Enter' === t.key
                    ? Ke(t, e)
                    : 'Tab' === t.key
                      ? Je(t)
                      : [...Xe, ..._e].includes(t.key)
                        ? Qe(t.key)
                        : 'Escape' === t.key && et(t, e, n)));
            },
            Ke = (e, t) => {
              if (!w(t.allowEnterKey)) return;
              const n = y();
              if (!n || !t.input) return;
              const o = V(n, t.input);
              if (
                e.target &&
                o &&
                e.target instanceof HTMLElement &&
                e.target.outerHTML === o.outerHTML
              ) {
                if (['textarea', 'file'].includes(t.input)) return;
                (Ze(), e.preventDefault());
              }
            },
            Je = (e) => {
              const t = e.target,
                n = O();
              let o = -1;
              for (let e = 0; e < n.length; e++)
                if (t === n[e]) {
                  o = e;
                  break;
                }
              (e.shiftKey ? Re(o, -1) : Re(o, 1),
                e.stopPropagation(),
                e.preventDefault());
            },
            Qe = (e) => {
              const t = I(),
                n = T(),
                o = S(),
                r = $();
              if (!(t && n && o && r)) return;
              const a = [n, o, r];
              if (
                document.activeElement instanceof HTMLElement &&
                !a.includes(document.activeElement)
              )
                return;
              const i = Xe.includes(e)
                ? 'nextElementSibling'
                : 'previousElementSibling';
              let s = document.activeElement;
              if (s) {
                for (let e = 0; e < t.children.length; e++) {
                  if (((s = s[i]), !s)) return;
                  if (s instanceof HTMLButtonElement && ee(s)) break;
                }
                s instanceof HTMLButtonElement && s.focus();
              }
            },
            et = (e, t, n) => {
              (e.preventDefault(), w(t.allowEscapeKey) && n(We.esc));
            };
          var tt = {
            swalPromiseResolve: new WeakMap(),
            swalPromiseReject: new WeakMap(),
          };
          const nt = () => {
              Array.from(document.body.children).forEach((e) => {
                e.hasAttribute('data-previous-aria-hidden')
                  ? (e.setAttribute(
                      'aria-hidden',
                      e.getAttribute('data-previous-aria-hidden') || ''
                    ),
                    e.removeAttribute('data-previous-aria-hidden'))
                  : e.removeAttribute('aria-hidden');
              });
            },
            ot = 'undefined' != typeof window && Boolean(window.GestureEvent),
            rt = () => {
              const e = b();
              if (!e) return;
              let t;
              ((e.ontouchstart = (e) => {
                t = at(e);
              }),
                (e.ontouchmove = (e) => {
                  t && (e.preventDefault(), e.stopPropagation());
                }));
            },
            at = (e) => {
              const t = e.target,
                n = b(),
                o = E();
              return !(
                !n ||
                !o ||
                it(e) ||
                st(e) ||
                (t !== n &&
                  (te(n) ||
                    !(t instanceof HTMLElement) ||
                    ((e, t) => {
                      let n = e;
                      for (; n && n !== t; ) {
                        if (te(n)) return !0;
                        n = n.parentElement;
                      }
                      return !1;
                    })(t, o) ||
                    'INPUT' === t.tagName ||
                    'TEXTAREA' === t.tagName ||
                    (te(o) && o.contains(t))))
              );
            },
            it = (e) =>
              Boolean(
                e.touches &&
                e.touches.length &&
                'stylus' === e.touches[0].touchType
              ),
            st = (e) => e.touches && e.touches.length > 1;
          let lt = null;
          const ct = (e) => {
            null === lt &&
              (document.body.scrollHeight > window.innerHeight ||
                'scroll' === e) &&
              ((lt = parseInt(
                window
                  .getComputedStyle(document.body)
                  .getPropertyValue('padding-right')
              )),
              (document.body.style.paddingRight = `${
                lt +
                (() => {
                  const e = document.createElement('div');
                  ((e.className = i['scrollbar-measure']),
                    document.body.appendChild(e));
                  const t = e.getBoundingClientRect().width - e.clientWidth;
                  return (document.body.removeChild(e), t);
                })()
              }px`));
          };
          function dt(e, t, n, a) {
            (N() ? bt(e, a) : (r(n).then(() => bt(e, a)), Ue(o)),
              ot
                ? (t.setAttribute('style', 'display:none !important'),
                  t.removeAttribute('class'),
                  (t.innerHTML = ''))
                : t.remove(),
              D() &&
                (null !== lt &&
                  ((document.body.style.paddingRight = `${lt}px`), (lt = null)),
                (() => {
                  if (H(document.body, i.iosfix)) {
                    const e = parseInt(document.body.style.top, 10);
                    (U(document.body, i.iosfix),
                      (document.body.style.top = ''),
                      (document.body.scrollTop = -1 * e));
                  }
                })(),
                nt()),
              U(
                [document.documentElement, document.body],
                [i.shown, i['height-auto'], i['no-backdrop'], i['toast-shown']]
              ));
          }
          function ut(e) {
            e = ht(e);
            const t = tt.swalPromiseResolve.get(this),
              n = pt(this);
            this.isAwaitingPromise
              ? e.isDismissed || (wt(this), t(e))
              : n && t(e);
          }
          const pt = (e) => {
            const t = y();
            if (!t) return !1;
            const n = we.innerParams.get(e);
            if (!n || H(t, n.hideClass.popup)) return !1;
            (U(t, n.showClass.popup), W(t, n.hideClass.popup));
            const o = b();
            return (
              U(o, n.showClass.backdrop),
              W(o, n.hideClass.backdrop),
              gt(e, t, n),
              !0
            );
          };
          function mt(e) {
            const t = tt.swalPromiseReject.get(this);
            (wt(this), t && t(e));
          }
          const wt = (e) => {
              e.isAwaitingPromise &&
                (delete e.isAwaitingPromise,
                we.innerParams.get(e) || e._destroy());
            },
            ht = (e) =>
              void 0 === e
                ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
                : Object.assign(
                    { isConfirmed: !1, isDenied: !1, isDismissed: !1 },
                    e
                  ),
            gt = (e, t, n) => {
              var r;
              const a = b(),
                i = ne(t);
              ('function' == typeof n.willClose && n.willClose(t),
                null === (r = o.eventEmitter) ||
                  void 0 === r ||
                  r.emit('willClose', t),
                i && a
                  ? ft(e, t, a, Boolean(n.returnFocus), n.didClose)
                  : a && dt(e, a, Boolean(n.returnFocus), n.didClose));
            },
            ft = (e, t, n, r, a) => {
              o.swalCloseEventFinishedCallback = dt.bind(null, e, n, r, a);
              const i = function (e) {
                var n;
                e.target === t &&
                  (null === (n = o.swalCloseEventFinishedCallback) ||
                    void 0 === n ||
                    n.call(o),
                  delete o.swalCloseEventFinishedCallback,
                  t.removeEventListener('animationend', i),
                  t.removeEventListener('transitionend', i));
              };
              (t.addEventListener('animationend', i),
                t.addEventListener('transitionend', i));
            },
            bt = (e, t) => {
              setTimeout(() => {
                var n;
                ('function' == typeof t && t.bind(e.params)(),
                  null === (n = o.eventEmitter) ||
                    void 0 === n ||
                    n.emit('didClose'),
                  e._destroy && e._destroy());
              });
            },
            At = (e) => {
              let t = y();
              if ((t || new Qn(), (t = y()), !t)) return;
              const n = P();
              (N() ? G(x()) : vt(t, e),
                _(n),
                t.setAttribute('data-loading', 'true'),
                t.setAttribute('aria-busy', 'true'),
                t.focus());
            },
            vt = (e, t) => {
              const n = I(),
                o = P();
              n &&
                o &&
                (!t && ee(T()) && (t = T()),
                _(n),
                t &&
                  (G(t),
                  o.setAttribute('data-button-to-replace', t.className),
                  n.insertBefore(o, t)),
                W([e, n], i.loading));
            },
            yt = (e) => (e.checked ? 1 : 0),
            xt = (e) => (e.checked ? e.value : null),
            Ct = (e) =>
              e.files && e.files.length
                ? null !== e.getAttribute('multiple')
                  ? e.files
                  : e.files[0]
                : null,
            Et = (e, t) => {
              const n = y();
              if (!n) return;
              const o = (e) => {
                'select' === t.input
                  ? (function (e, t, n) {
                      const o = R(e, i.select);
                      if (!o) return;
                      const r = (e, t, o) => {
                        const r = document.createElement('option');
                        ((r.value = o),
                          q(r, t),
                          (r.selected = Lt(o, n.inputValue)),
                          e.appendChild(r));
                      };
                      (t.forEach((e) => {
                        const t = e[0],
                          n = e[1];
                        if (Array.isArray(n)) {
                          const e = document.createElement('optgroup');
                          ((e.label = t),
                            (e.disabled = !1),
                            o.appendChild(e),
                            n.forEach((t) => r(e, t[1], t[0])));
                        } else r(o, n, t);
                      }),
                        o.focus());
                    })(n, kt(e), t)
                  : 'radio' === t.input &&
                    (function (e, t, n) {
                      const o = R(e, i.radio);
                      if (!o) return;
                      t.forEach((e) => {
                        const t = e[0],
                          r = e[1],
                          a = document.createElement('input'),
                          s = document.createElement('label');
                        ((a.type = 'radio'),
                          (a.name = i.radio),
                          (a.value = t),
                          Lt(t, n.inputValue) && (a.checked = !0));
                        const l = document.createElement('span');
                        (q(l, r),
                          (l.className = i.label),
                          s.appendChild(a),
                          s.appendChild(l),
                          o.appendChild(s));
                      });
                      const r = o.querySelectorAll('input');
                      r.length && r[0].focus();
                    })(n, kt(e), t);
              };
              h(t.inputOptions) || f(t.inputOptions)
                ? (At(T()),
                  g(t.inputOptions).then((t) => {
                    (e.hideLoading(), o(t));
                  }))
                : 'object' == typeof t.inputOptions
                  ? o(t.inputOptions)
                  : u(
                      'Unexpected type of inputOptions! Expected object, Map or Promise, got ' +
                        typeof t.inputOptions
                    );
            },
            Bt = (e, t) => {
              const n = e.getInput();
              n &&
                (G(n),
                g(t.inputValue)
                  .then((o) => {
                    ((n.value =
                      'number' === t.input ? `${parseFloat(o) || 0}` : `${o}`),
                      _(n),
                      n.focus(),
                      e.hideLoading());
                  })
                  .catch((t) => {
                    (u(`Error in inputValue promise: ${t}`),
                      (n.value = ''),
                      _(n),
                      n.focus(),
                      e.hideLoading());
                  }));
            };
          const kt = (e) => {
              const t = [];
              return (
                e instanceof Map
                  ? e.forEach((e, n) => {
                      let o = e;
                      ('object' == typeof o && (o = kt(o)), t.push([n, o]));
                    })
                  : Object.keys(e).forEach((n) => {
                      let o = e[n];
                      ('object' == typeof o && (o = kt(o)), t.push([n, o]));
                    }),
                t
              );
            },
            Lt = (e, t) =>
              Boolean(t) && null != t && t.toString() === e.toString(),
            Tt = (e, t) => {
              const n = we.innerParams.get(e);
              if (!n.input)
                return void u(
                  `The "input" parameter is needed to be set when using returnInputValueOn${c(t)}`
                );
              const o = e.getInput(),
                r = ((e, t) => {
                  const n = e.getInput();
                  if (!n) return null;
                  switch (t.input) {
                    case 'checkbox':
                      return yt(n);
                    case 'radio':
                      return xt(n);
                    case 'file':
                      return Ct(n);
                    default:
                      return t.inputAutoTrim ? n.value.trim() : n.value;
                  }
                })(e, n);
              n.inputValidator
                ? $t(e, r, t)
                : o && !o.checkValidity()
                  ? (e.enableButtons(),
                    e.showValidationMessage(
                      n.validationMessage || o.validationMessage
                    ))
                  : 'deny' === t
                    ? St(e, r)
                    : Mt(e, r);
            },
            $t = (e, t, n) => {
              const o = we.innerParams.get(e);
              (e.disableInput(),
                Promise.resolve()
                  .then(() => g(o.inputValidator(t, o.validationMessage)))
                  .then((o) => {
                    (e.enableButtons(),
                      e.enableInput(),
                      o
                        ? e.showValidationMessage(o)
                        : 'deny' === n
                          ? St(e, t)
                          : Mt(e, t));
                  }));
            },
            St = (e, t) => {
              const n = we.innerParams.get(e);
              (n.showLoaderOnDeny && At(S()),
                n.preDeny
                  ? ((e.isAwaitingPromise = !0),
                    Promise.resolve()
                      .then(() => g(n.preDeny(t, n.validationMessage)))
                      .then((n) => {
                        !1 === n
                          ? (e.hideLoading(), wt(e))
                          : e.close({
                              isDenied: !0,
                              value: void 0 === n ? t : n,
                            });
                      })
                      .catch((t) => It(e, t)))
                  : e.close({ isDenied: !0, value: t }));
            },
            Pt = (e, t) => {
              e.close({ isConfirmed: !0, value: t });
            },
            It = (e, t) => {
              e.rejectPromise(t);
            },
            Mt = (e, t) => {
              const n = we.innerParams.get(e);
              (n.showLoaderOnConfirm && At(),
                n.preConfirm
                  ? (e.resetValidationMessage(),
                    (e.isAwaitingPromise = !0),
                    Promise.resolve()
                      .then(() => g(n.preConfirm(t, n.validationMessage)))
                      .then((n) => {
                        ee(L()) || !1 === n
                          ? (e.hideLoading(), wt(e))
                          : Pt(e, void 0 === n ? t : n);
                      })
                      .catch((t) => It(e, t)))
                  : Pt(e, t));
            };
          function zt() {
            const e = we.innerParams.get(this);
            if (!e) return;
            const t = we.domCache.get(this);
            (G(t.loader),
              N() ? e.icon && _(x()) : jt(t),
              U([t.popup, t.actions], i.loading),
              t.popup.removeAttribute('aria-busy'),
              t.popup.removeAttribute('data-loading'),
              (t.confirmButton.disabled = !1),
              (t.denyButton.disabled = !1),
              (t.cancelButton.disabled = !1));
          }
          const jt = (e) => {
            const t = e.loader.getAttribute('data-button-to-replace'),
              n = t ? e.popup.getElementsByClassName(t) : [];
            n.length
              ? _(n[0], 'inline-block')
              : !ee(T()) && !ee(S()) && !ee($()) && G(e.actions);
          };
          function Ot() {
            const e = we.innerParams.get(this),
              t = we.domCache.get(this);
            return t ? V(t.popup, e.input) : null;
          }
          function Dt(e, t, n) {
            const o = we.domCache.get(e);
            t.forEach((e) => {
              o[e].disabled = n;
            });
          }
          function Nt(e, t) {
            const n = y();
            if (n && e)
              if ('radio' === e.type) {
                const e = n.querySelectorAll(`[name="${i.radio}"]`);
                for (let n = 0; n < e.length; n++) e[n].disabled = t;
              } else e.disabled = t;
          }
          function qt() {
            Dt(this, ['confirmButton', 'denyButton', 'cancelButton'], !1);
          }
          function Ht() {
            Dt(this, ['confirmButton', 'denyButton', 'cancelButton'], !0);
          }
          function Yt() {
            Nt(this.getInput(), !1);
          }
          function Vt() {
            Nt(this.getInput(), !0);
          }
          function Ft(e) {
            const t = we.domCache.get(this),
              n = we.innerParams.get(this);
            (q(t.validationMessage, e),
              (t.validationMessage.className = i['validation-message']),
              n.customClass &&
                n.customClass.validationMessage &&
                W(t.validationMessage, n.customClass.validationMessage),
              _(t.validationMessage));
            const o = this.getInput();
            o &&
              (o.setAttribute('aria-invalid', 'true'),
              o.setAttribute('aria-describedby', i['validation-message']),
              F(o),
              W(o, i.inputerror));
          }
          function Zt() {
            const e = we.domCache.get(this);
            e.validationMessage && G(e.validationMessage);
            const t = this.getInput();
            t &&
              (t.removeAttribute('aria-invalid'),
              t.removeAttribute('aria-describedby'),
              U(t, i.inputerror));
          }
          const Wt = {
              title: '',
              titleText: '',
              text: '',
              html: '',
              footer: '',
              icon: void 0,
              iconColor: void 0,
              iconHtml: void 0,
              template: void 0,
              toast: !1,
              draggable: !1,
              animation: !0,
              theme: 'light',
              showClass: {
                popup: 'swal2-show',
                backdrop: 'swal2-backdrop-show',
                icon: 'swal2-icon-show',
              },
              hideClass: {
                popup: 'swal2-hide',
                backdrop: 'swal2-backdrop-hide',
                icon: 'swal2-icon-hide',
              },
              customClass: {},
              target: 'body',
              color: void 0,
              backdrop: !0,
              heightAuto: !0,
              allowOutsideClick: !0,
              allowEscapeKey: !0,
              allowEnterKey: !0,
              stopKeydownPropagation: !0,
              keydownListenerCapture: !1,
              showConfirmButton: !0,
              showDenyButton: !1,
              showCancelButton: !1,
              preConfirm: void 0,
              preDeny: void 0,
              confirmButtonText: 'OK',
              confirmButtonAriaLabel: '',
              confirmButtonColor: void 0,
              denyButtonText: 'No',
              denyButtonAriaLabel: '',
              denyButtonColor: void 0,
              cancelButtonText: 'Cancel',
              cancelButtonAriaLabel: '',
              cancelButtonColor: void 0,
              buttonsStyling: !0,
              reverseButtons: !1,
              focusConfirm: !0,
              focusDeny: !1,
              focusCancel: !1,
              returnFocus: !0,
              showCloseButton: !1,
              closeButtonHtml: '&times;',
              closeButtonAriaLabel: 'Close this dialog',
              loaderHtml: '',
              showLoaderOnConfirm: !1,
              showLoaderOnDeny: !1,
              imageUrl: void 0,
              imageWidth: void 0,
              imageHeight: void 0,
              imageAlt: '',
              timer: void 0,
              timerProgressBar: !1,
              width: void 0,
              padding: void 0,
              background: void 0,
              input: void 0,
              inputPlaceholder: '',
              inputLabel: '',
              inputValue: '',
              inputOptions: {},
              inputAutoFocus: !0,
              inputAutoTrim: !0,
              inputAttributes: {},
              inputValidator: void 0,
              returnInputValueOnDeny: !1,
              validationMessage: void 0,
              grow: !1,
              position: 'center',
              progressSteps: [],
              currentProgressStep: void 0,
              progressStepsDistance: void 0,
              willOpen: void 0,
              didOpen: void 0,
              didRender: void 0,
              willClose: void 0,
              didClose: void 0,
              didDestroy: void 0,
              scrollbarPadding: !0,
              topLayer: !1,
            },
            Ut = [
              'allowEscapeKey',
              'allowOutsideClick',
              'background',
              'buttonsStyling',
              'cancelButtonAriaLabel',
              'cancelButtonColor',
              'cancelButtonText',
              'closeButtonAriaLabel',
              'closeButtonHtml',
              'color',
              'confirmButtonAriaLabel',
              'confirmButtonColor',
              'confirmButtonText',
              'currentProgressStep',
              'customClass',
              'denyButtonAriaLabel',
              'denyButtonColor',
              'denyButtonText',
              'didClose',
              'didDestroy',
              'draggable',
              'footer',
              'hideClass',
              'html',
              'icon',
              'iconColor',
              'iconHtml',
              'imageAlt',
              'imageHeight',
              'imageUrl',
              'imageWidth',
              'preConfirm',
              'preDeny',
              'progressSteps',
              'returnFocus',
              'reverseButtons',
              'showCancelButton',
              'showCloseButton',
              'showConfirmButton',
              'showDenyButton',
              'text',
              'title',
              'titleText',
              'theme',
              'willClose',
            ],
            Rt = { allowEnterKey: void 0 },
            Xt = [
              'allowOutsideClick',
              'allowEnterKey',
              'backdrop',
              'draggable',
              'focusConfirm',
              'focusDeny',
              'focusCancel',
              'returnFocus',
              'heightAuto',
              'keydownListenerCapture',
            ],
            _t = (e) => Object.prototype.hasOwnProperty.call(Wt, e),
            Gt = (e) => -1 !== Ut.indexOf(e),
            Kt = (e) => Rt[e],
            Jt = (e) => {
              _t(e) || d(`Unknown parameter "${e}"`);
            },
            Qt = (e) => {
              Xt.includes(e) &&
                d(`The parameter "${e}" is incompatible with toasts`);
            },
            en = (e) => {
              const t = Kt(e);
              t && m(e, t);
            },
            tn = (e) => {
              (!1 === e.backdrop &&
                e.allowOutsideClick &&
                d(
                  '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
                ),
                e.theme &&
                  ![
                    'light',
                    'dark',
                    'auto',
                    'minimal',
                    'borderless',
                    'bootstrap-4',
                    'bootstrap-4-light',
                    'bootstrap-4-dark',
                    'bootstrap-5',
                    'bootstrap-5-light',
                    'bootstrap-5-dark',
                    'material-ui',
                    'material-ui-light',
                    'material-ui-dark',
                    'embed-iframe',
                    'bulma',
                    'bulma-light',
                    'bulma-dark',
                  ].includes(e.theme) &&
                  d(`Invalid theme "${e.theme}"`));
              for (const t in e) (Jt(t), e.toast && Qt(t), en(t));
            };
          function nn(e) {
            const t = b(),
              n = y(),
              o = we.innerParams.get(this);
            if (!n || H(n, o.hideClass.popup))
              return void d(
                "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
              );
            const r = on(e),
              a = Object.assign({}, o, r);
            (tn(a),
              t && (t.dataset.swal2Theme = a.theme),
              Fe(this, a),
              we.innerParams.set(this, a),
              Object.defineProperties(this, {
                params: {
                  value: Object.assign({}, this.params, e),
                  writable: !1,
                  enumerable: !0,
                },
              }));
          }
          const on = (e) => {
            const t = {};
            return (
              Object.keys(e).forEach((n) => {
                if (Gt(n)) {
                  const o = e;
                  t[n] = o[n];
                } else d(`Invalid parameter to update: ${n}`);
              }),
              t
            );
          };
          function rn() {
            var e;
            const t = we.domCache.get(this),
              n = we.innerParams.get(this);
            n
              ? (t.popup &&
                  o.swalCloseEventFinishedCallback &&
                  (o.swalCloseEventFinishedCallback(),
                  delete o.swalCloseEventFinishedCallback),
                'function' == typeof n.didDestroy && n.didDestroy(),
                null === (e = o.eventEmitter) ||
                  void 0 === e ||
                  e.emit('didDestroy'),
                an(this))
              : sn(this);
          }
          const an = (e) => {
              (sn(e),
                delete e.params,
                delete o.keydownHandler,
                delete o.keydownTarget,
                delete o.currentInstance);
            },
            sn = (e) => {
              e.isAwaitingPromise
                ? (ln(we, e), (e.isAwaitingPromise = !0))
                : (ln(tt, e),
                  ln(we, e),
                  delete e.isAwaitingPromise,
                  delete e.disableButtons,
                  delete e.enableButtons,
                  delete e.getInput,
                  delete e.disableInput,
                  delete e.enableInput,
                  delete e.hideLoading,
                  delete e.disableLoading,
                  delete e.showValidationMessage,
                  delete e.resetValidationMessage,
                  delete e.close,
                  delete e.closePopup,
                  delete e.closeModal,
                  delete e.closeToast,
                  delete e.rejectPromise,
                  delete e.update,
                  delete e._destroy);
            },
            ln = (e, t) => {
              for (const n in e) e[n].delete(t);
            };
          var cn = Object.freeze({
            __proto__: null,
            _destroy: rn,
            close: ut,
            closeModal: ut,
            closePopup: ut,
            closeToast: ut,
            disableButtons: Ht,
            disableInput: Vt,
            disableLoading: zt,
            enableButtons: qt,
            enableInput: Yt,
            getInput: Ot,
            handleAwaitingPromise: wt,
            hideLoading: zt,
            rejectPromise: mt,
            resetValidationMessage: Zt,
            showValidationMessage: Ft,
            update: nn,
          });
          const dn = (e, t, n) => {
              t.popup.onclick = () => {
                (e && (un(e) || e.timer || e.input)) || n(We.close);
              };
            },
            un = (e) =>
              Boolean(
                e.showConfirmButton ||
                e.showDenyButton ||
                e.showCancelButton ||
                e.showCloseButton
              );
          let pn = !1;
          const mn = (e) => {
              e.popup.onmousedown = () => {
                e.container.onmouseup = function (t) {
                  ((e.container.onmouseup = () => {}),
                    t.target === e.container && (pn = !0));
                };
              };
            },
            wn = (e) => {
              e.container.onmousedown = (t) => {
                (t.target === e.container && t.preventDefault(),
                  (e.popup.onmouseup = function (t) {
                    ((e.popup.onmouseup = () => {}),
                      (t.target === e.popup ||
                        (t.target instanceof HTMLElement &&
                          e.popup.contains(t.target))) &&
                        (pn = !0));
                  }));
              };
            },
            hn = (e, t, n) => {
              t.container.onclick = (o) => {
                pn
                  ? (pn = !1)
                  : o.target === t.container &&
                    w(e.allowOutsideClick) &&
                    n(We.backdrop);
              };
            },
            gn = (e) =>
              e instanceof Element ||
              ((e) => 'object' == typeof e && e.jquery)(e);
          const fn = () => {
              if (o.timeout)
                return (
                  (() => {
                    const e = z();
                    if (!e) return;
                    const t = parseInt(window.getComputedStyle(e).width);
                    (e.style.removeProperty('transition'),
                      (e.style.width = '100%'));
                    const n =
                      (t / parseInt(window.getComputedStyle(e).width)) * 100;
                    e.style.width = `${n}%`;
                  })(),
                  o.timeout.stop()
                );
            },
            bn = () => {
              if (o.timeout) {
                const e = o.timeout.start();
                return (oe(e), e);
              }
            };
          let An = !1;
          const vn = {};
          const yn = (e) => {
            for (let t = e.target; t && t !== document; t = t.parentNode)
              for (const e in vn) {
                const n = t.getAttribute && t.getAttribute(e);
                if (n) return void vn[e].fire({ template: n });
              }
          };
          o.eventEmitter = new (class {
            constructor() {
              this.events = {};
            }
            _getHandlersByEventName(e) {
              return (
                void 0 === this.events[e] && (this.events[e] = []),
                this.events[e]
              );
            }
            on(e, t) {
              const n = this._getHandlersByEventName(e);
              n.includes(t) || n.push(t);
            }
            once(e, t) {
              const n = (...o) => {
                (this.removeListener(e, n), t.apply(this, o));
              };
              this.on(e, n);
            }
            emit(e, ...t) {
              this._getHandlersByEventName(e).forEach((e) => {
                try {
                  e.apply(this, t);
                } catch (e) {
                  console.error(e);
                }
              });
            }
            removeListener(e, t) {
              const n = this._getHandlersByEventName(e),
                o = n.indexOf(t);
              o > -1 && n.splice(o, 1);
            }
            removeAllListeners(e) {
              void 0 !== this.events[e] && (this.events[e].length = 0);
            }
            reset() {
              this.events = {};
            }
          })();
          var xn = Object.freeze({
            __proto__: null,
            argsToParams: (e) => {
              const t = {};
              return (
                'object' != typeof e[0] || gn(e[0])
                  ? ['title', 'html', 'icon'].forEach((n, o) => {
                      const r = e[o];
                      'string' == typeof r || gn(r)
                        ? (t[n] = r)
                        : void 0 !== r &&
                          u(
                            `Unexpected type of ${n}! Expected "string" or "Element", got ${typeof r}`
                          );
                    })
                  : Object.assign(t, e[0]),
                t
              );
            },
            bindClickHandler: function (e = 'data-swal-template') {
              ((vn[e] = this),
                An || (document.body.addEventListener('click', yn), (An = !0)));
            },
            clickCancel: () => {
              var e;
              return null === (e = $()) || void 0 === e ? void 0 : e.click();
            },
            clickConfirm: Ze,
            clickDeny: () => {
              var e;
              return null === (e = S()) || void 0 === e ? void 0 : e.click();
            },
            enableLoading: At,
            fire: function (...e) {
              return new this(...e);
            },
            getActions: I,
            getCancelButton: $,
            getCloseButton: j,
            getConfirmButton: T,
            getContainer: b,
            getDenyButton: S,
            getFocusableElements: O,
            getFooter: M,
            getHtmlContainer: E,
            getIcon: x,
            getIconContent: () => v(i['icon-content']),
            getImage: B,
            getInputLabel: () => v(i['input-label']),
            getLoader: P,
            getPopup: y,
            getProgressSteps: k,
            getTimerLeft: () => o.timeout && o.timeout.getTimerLeft(),
            getTimerProgressBar: z,
            getTitle: C,
            getValidationMessage: L,
            increaseTimer: (e) => {
              if (o.timeout) {
                const t = o.timeout.increase(e);
                return (oe(t, !0), t);
              }
            },
            isDeprecatedParameter: Kt,
            isLoading: () => {
              const e = y();
              return !!e && e.hasAttribute('data-loading');
            },
            isTimerRunning: () => Boolean(o.timeout && o.timeout.isRunning()),
            isUpdatableParameter: Gt,
            isValidParameter: _t,
            isVisible: () => ee(y()),
            mixin: function (e) {
              return class extends this {
                _main(t, n) {
                  return super._main(t, Object.assign({}, e, n));
                }
              };
            },
            off: (e, t) => {
              o.eventEmitter &&
                (e
                  ? t
                    ? o.eventEmitter.removeListener(e, t)
                    : o.eventEmitter.removeAllListeners(e)
                  : o.eventEmitter.reset());
            },
            on: (e, t) => {
              o.eventEmitter && o.eventEmitter.on(e, t);
            },
            once: (e, t) => {
              o.eventEmitter && o.eventEmitter.once(e, t);
            },
            resumeTimer: bn,
            showLoading: At,
            stopTimer: fn,
            toggleTimer: () => {
              const e = o.timeout;
              return e && (e.running ? fn() : bn());
            },
          });
          class Cn {
            constructor(e, t) {
              ((this.callback = e),
                (this.remaining = t),
                (this.running = !1),
                this.start());
            }
            start() {
              return (
                this.running ||
                  ((this.running = !0),
                  (this.started = new Date()),
                  (this.id = setTimeout(this.callback, this.remaining))),
                this.remaining
              );
            }
            stop() {
              return (
                this.started &&
                  this.running &&
                  ((this.running = !1),
                  clearTimeout(this.id),
                  (this.remaining -=
                    new Date().getTime() - this.started.getTime())),
                this.remaining
              );
            }
            increase(e) {
              const t = this.running;
              return (
                t && this.stop(),
                (this.remaining += e),
                t && this.start(),
                this.remaining
              );
            }
            getTimerLeft() {
              return (
                this.running && (this.stop(), this.start()),
                this.remaining
              );
            }
            isRunning() {
              return this.running;
            }
          }
          const En = ['swal-title', 'swal-html', 'swal-footer'],
            Bn = (e) => {
              const t = {};
              return (
                Array.from(e.querySelectorAll('swal-param')).forEach((e) => {
                  Mn(e, ['name', 'value']);
                  const n = e.getAttribute('name'),
                    o = e.getAttribute('value');
                  n &&
                    o &&
                    (t[n] =
                      n in Wt && 'boolean' == typeof Wt[n]
                        ? 'false' !== o
                        : n in Wt && 'object' == typeof Wt[n]
                          ? JSON.parse(o)
                          : o);
                }),
                t
              );
            },
            kn = (e) => {
              const t = {};
              return (
                Array.from(e.querySelectorAll('swal-function-param')).forEach(
                  (e) => {
                    const n = e.getAttribute('name'),
                      o = e.getAttribute('value');
                    n && o && (t[n] = new Function(`return ${o}`)());
                  }
                ),
                t
              );
            },
            Ln = (e) => {
              const t = {};
              return (
                Array.from(e.querySelectorAll('swal-button')).forEach((e) => {
                  Mn(e, ['type', 'color', 'aria-label']);
                  const n = e.getAttribute('type');
                  if (n && ['confirm', 'cancel', 'deny'].includes(n)) {
                    if (
                      ((t[`${n}ButtonText`] = e.innerHTML),
                      (t[`show${c(n)}Button`] = !0),
                      e.hasAttribute('color'))
                    ) {
                      const o = e.getAttribute('color');
                      null !== o && (t[`${n}ButtonColor`] = o);
                    }
                    if (e.hasAttribute('aria-label')) {
                      const o = e.getAttribute('aria-label');
                      null !== o && (t[`${n}ButtonAriaLabel`] = o);
                    }
                  }
                }),
                t
              );
            },
            Tn = (e) => {
              const t = {},
                n = e.querySelector('swal-image');
              return (
                n &&
                  (Mn(n, ['src', 'width', 'height', 'alt']),
                  n.hasAttribute('src') &&
                    (t.imageUrl = n.getAttribute('src') || void 0),
                  n.hasAttribute('width') &&
                    (t.imageWidth = n.getAttribute('width') || void 0),
                  n.hasAttribute('height') &&
                    (t.imageHeight = n.getAttribute('height') || void 0),
                  n.hasAttribute('alt') &&
                    (t.imageAlt = n.getAttribute('alt') || void 0)),
                t
              );
            },
            $n = (e) => {
              const t = {},
                n = e.querySelector('swal-icon');
              return (
                n &&
                  (Mn(n, ['type', 'color']),
                  n.hasAttribute('type') && (t.icon = n.getAttribute('type')),
                  n.hasAttribute('color') &&
                    (t.iconColor = n.getAttribute('color')),
                  (t.iconHtml = n.innerHTML)),
                t
              );
            },
            Sn = (e) => {
              const t = {},
                n = e.querySelector('swal-input');
              n &&
                (Mn(n, ['type', 'label', 'placeholder', 'value']),
                (t.input = n.getAttribute('type') || 'text'),
                n.hasAttribute('label') &&
                  (t.inputLabel = n.getAttribute('label')),
                n.hasAttribute('placeholder') &&
                  (t.inputPlaceholder = n.getAttribute('placeholder')),
                n.hasAttribute('value') &&
                  (t.inputValue = n.getAttribute('value')));
              const o = Array.from(e.querySelectorAll('swal-input-option'));
              return (
                o.length &&
                  ((t.inputOptions = {}),
                  o.forEach((e) => {
                    Mn(e, ['value']);
                    const n = e.getAttribute('value');
                    if (!n) return;
                    const o = e.innerHTML;
                    t.inputOptions[n] = o;
                  })),
                t
              );
            },
            Pn = (e, t) => {
              const n = {};
              for (const o in t) {
                const r = t[o],
                  a = e.querySelector(r);
                a &&
                  (Mn(a, []),
                  (n[r.replace(/^swal-/, '')] = a.innerHTML.trim()));
              }
              return n;
            },
            In = (e) => {
              const t = En.concat([
                'swal-param',
                'swal-function-param',
                'swal-button',
                'swal-image',
                'swal-icon',
                'swal-input',
                'swal-input-option',
              ]);
              Array.from(e.children).forEach((e) => {
                const n = e.tagName.toLowerCase();
                t.includes(n) || d(`Unrecognized element <${n}>`);
              });
            },
            Mn = (e, t) => {
              Array.from(e.attributes).forEach((n) => {
                -1 === t.indexOf(n.name) &&
                  d([
                    `Unrecognized attribute "${n.name}" on <${e.tagName.toLowerCase()}>.`,
                    t.length
                      ? `Allowed attributes are: ${t.join(', ')}`
                      : 'To set the value, use HTML within the element.',
                  ]);
              });
            },
            zn = (e) => {
              var t, n;
              const r = b(),
                a = y();
              if (!r || !a) return;
              ('function' == typeof e.willOpen && e.willOpen(a),
                null === (t = o.eventEmitter) ||
                  void 0 === t ||
                  t.emit('willOpen', a));
              const i = window.getComputedStyle(document.body).overflowY;
              if (
                (Nn(r, a, e),
                setTimeout(() => {
                  On(r, a);
                }, 10),
                D() &&
                  (Dn(
                    r,
                    void 0 !== e.scrollbarPadding && e.scrollbarPadding,
                    i
                  ),
                  (() => {
                    const e = b();
                    Array.from(document.body.children).forEach((t) => {
                      t.contains(e) ||
                        (t.hasAttribute('aria-hidden') &&
                          t.setAttribute(
                            'data-previous-aria-hidden',
                            t.getAttribute('aria-hidden') || ''
                          ),
                        t.setAttribute('aria-hidden', 'true'));
                    });
                  })()),
                N() ||
                  o.previousActiveElement ||
                  (o.previousActiveElement = document.activeElement),
                'function' == typeof e.didOpen)
              ) {
                const t = e.didOpen;
                setTimeout(() => t(a));
              }
              null === (n = o.eventEmitter) ||
                void 0 === n ||
                n.emit('didOpen', a);
            },
            jn = (e) => {
              const t = y();
              if (!t || e.target !== t) return;
              const n = b();
              n &&
                (t.removeEventListener('animationend', jn),
                t.removeEventListener('transitionend', jn),
                (n.style.overflowY = 'auto'),
                U(n, i['no-transition']));
            },
            On = (e, t) => {
              ne(t)
                ? ((e.style.overflowY = 'hidden'),
                  t.addEventListener('animationend', jn),
                  t.addEventListener('transitionend', jn))
                : (e.style.overflowY = 'auto');
            },
            Dn = (e, t, n) => {
              ((() => {
                if (ot && !H(document.body, i.iosfix)) {
                  const e = document.body.scrollTop;
                  ((document.body.style.top = -1 * e + 'px'),
                    W(document.body, i.iosfix),
                    rt());
                }
              })(),
                t && 'hidden' !== n && ct(n),
                setTimeout(() => {
                  e.scrollTop = 0;
                }));
            },
            Nn = (e, t, n) => {
              var o;
              (null !== (o = n.showClass) &&
                void 0 !== o &&
                o.backdrop &&
                W(e, n.showClass.backdrop),
                n.animation
                  ? (t.style.setProperty('opacity', '0', 'important'),
                    _(t, 'grid'),
                    setTimeout(() => {
                      var e;
                      (null !== (e = n.showClass) &&
                        void 0 !== e &&
                        e.popup &&
                        W(t, n.showClass.popup),
                        t.style.removeProperty('opacity'));
                    }, 10))
                  : _(t, 'grid'),
                W([document.documentElement, document.body], i.shown),
                n.heightAuto &&
                  n.backdrop &&
                  !n.toast &&
                  W(
                    [document.documentElement, document.body],
                    i['height-auto']
                  ));
            };
          var qn = (e, t) =>
              /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e)
                ? Promise.resolve()
                : Promise.resolve(t || 'Invalid email address'),
            Hn = (e, t) =>
              /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
                e
              )
                ? Promise.resolve()
                : Promise.resolve(t || 'Invalid URL');
          function Yn(e) {
            ((function (e) {
              e.inputValidator ||
                ('email' === e.input && (e.inputValidator = qn),
                'url' === e.input && (e.inputValidator = Hn));
            })(e),
              e.showLoaderOnConfirm &&
                !e.preConfirm &&
                d(
                  'showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request'
                ),
              (function (e) {
                (!e.target ||
                  ('string' == typeof e.target &&
                    !document.querySelector(e.target)) ||
                  ('string' != typeof e.target && !e.target.appendChild)) &&
                  (d('Target parameter is not valid, defaulting to "body"'),
                  (e.target = 'body'));
              })(e),
              'string' == typeof e.title &&
                (e.title = e.title.split('\n').join('<br />')),
              ie(e));
          }
          let Vn;
          var Fn = new WeakMap();
          class Zn {
            constructor(...t) {
              if (
                (n(
                  this,
                  Fn,
                  Promise.resolve({
                    isConfirmed: !1,
                    isDenied: !1,
                    isDismissed: !0,
                  })
                ),
                'undefined' == typeof window)
              )
                return;
              Vn = this;
              const o = Object.freeze(this.constructor.argsToParams(t));
              var r, a, i;
              ((this.params = o),
                (this.isAwaitingPromise = !1),
                (r = Fn),
                (a = this),
                (i = this._main(Vn.params)),
                r.set(e(r, a), i));
            }
            _main(e, t = {}) {
              if ((tn(Object.assign({}, t, e)), o.currentInstance)) {
                const e = tt.swalPromiseResolve.get(o.currentInstance),
                  { isAwaitingPromise: t } = o.currentInstance;
                (o.currentInstance._destroy(),
                  t || e({ isDismissed: !0 }),
                  D() && nt());
              }
              o.currentInstance = Vn;
              const n = Un(e, t);
              (Yn(n),
                Object.freeze(n),
                o.timeout && (o.timeout.stop(), delete o.timeout),
                clearTimeout(o.restoreFocusTimeout));
              const r = Rn(Vn);
              return (Fe(Vn, n), we.innerParams.set(Vn, n), Wn(Vn, r, n));
            }
            then(e) {
              return t(Fn, this).then(e);
            }
            finally(e) {
              return t(Fn, this).finally(e);
            }
          }
          const Wn = (e, t, n) =>
              new Promise((r, a) => {
                const i = (t) => {
                  e.close({
                    isDismissed: !0,
                    dismiss: t,
                    isConfirmed: !1,
                    isDenied: !1,
                  });
                };
                (tt.swalPromiseResolve.set(e, r),
                  tt.swalPromiseReject.set(e, a),
                  (t.confirmButton.onclick = () => {
                    ((e) => {
                      const t = we.innerParams.get(e);
                      (e.disableButtons(),
                        t.input ? Tt(e, 'confirm') : Mt(e, !0));
                    })(e);
                  }),
                  (t.denyButton.onclick = () => {
                    ((e) => {
                      const t = we.innerParams.get(e);
                      (e.disableButtons(),
                        t.returnInputValueOnDeny ? Tt(e, 'deny') : St(e, !1));
                    })(e);
                  }),
                  (t.cancelButton.onclick = () => {
                    ((e, t) => {
                      (e.disableButtons(), t(We.cancel));
                    })(e, i);
                  }),
                  (t.closeButton.onclick = () => {
                    i(We.close);
                  }),
                  ((e, t, n) => {
                    e.toast ? dn(e, t, n) : (mn(t), wn(t), hn(e, t, n));
                  })(n, t, i),
                  ((e, t, n) => {
                    if ((Ue(e), !t.toast)) {
                      const o = (e) => Ge(t, e, n);
                      e.keydownHandler = o;
                      const r = t.keydownListenerCapture ? window : y();
                      if (r) {
                        ((e.keydownTarget = r),
                          (e.keydownListenerCapture =
                            t.keydownListenerCapture));
                        const n = o;
                        (e.keydownTarget.addEventListener('keydown', n, {
                          capture: e.keydownListenerCapture,
                        }),
                          (e.keydownHandlerAdded = !0));
                      }
                    }
                  })(o, n, i),
                  ((e, t) => {
                    'select' === t.input || 'radio' === t.input
                      ? Et(e, t)
                      : ['text', 'email', 'number', 'tel', 'textarea'].some(
                          (e) => e === t.input
                        ) &&
                        (h(t.inputValue) || f(t.inputValue)) &&
                        (At(T()), Bt(e, t));
                  })(e, n),
                  zn(n),
                  Xn(o, n, i),
                  _n(t, n),
                  setTimeout(() => {
                    t.container.scrollTop = 0;
                  }));
              }),
            Un = (e, t) => {
              const n = ((e) => {
                  const t =
                    'string' == typeof e.template
                      ? document.querySelector(e.template)
                      : e.template;
                  if (!t) return {};
                  const n = t.content;
                  return (
                    In(n),
                    Object.assign(
                      Bn(n),
                      kn(n),
                      Ln(n),
                      Tn(n),
                      $n(n),
                      Sn(n),
                      Pn(n, En)
                    )
                  );
                })(e),
                o = Object.assign({}, Wt, t, n, e);
              return (
                (o.showClass = Object.assign({}, Wt.showClass, o.showClass)),
                (o.hideClass = Object.assign({}, Wt.hideClass, o.hideClass)),
                !1 === o.animation &&
                  ((o.showClass = { backdrop: 'swal2-noanimation' }),
                  (o.hideClass = {})),
                o
              );
            },
            Rn = (e) => {
              const t = {
                popup: y(),
                container: b(),
                actions: I(),
                confirmButton: T(),
                denyButton: S(),
                cancelButton: $(),
                loader: P(),
                closeButton: j(),
                validationMessage: L(),
                progressSteps: k(),
              };
              return (we.domCache.set(e, t), t);
            },
            Xn = (e, t, n) => {
              const o = z();
              (G(o),
                t.timer &&
                  ((e.timeout = new Cn(() => {
                    (n('timer'), delete e.timeout);
                  }, t.timer)),
                  t.timerProgressBar &&
                    o &&
                    (_(o),
                    Y(o, t, 'timerProgressBar'),
                    setTimeout(() => {
                      e.timeout && e.timeout.running && oe(t.timer);
                    }))));
            },
            _n = (e, t) => {
              if (!t.toast)
                return w(t.allowEnterKey)
                  ? void (Gn(e) || Kn(e, t) || Re(-1, 1))
                  : (m('allowEnterKey'), void Jn());
            },
            Gn = (e) => {
              const t = Array.from(e.popup.querySelectorAll('[autofocus]'));
              for (const e of t)
                if (e instanceof HTMLElement && ee(e)) return (e.focus(), !0);
              return !1;
            },
            Kn = (e, t) =>
              t.focusDeny && ee(e.denyButton)
                ? (e.denyButton.focus(), !0)
                : t.focusCancel && ee(e.cancelButton)
                  ? (e.cancelButton.focus(), !0)
                  : !(
                      !t.focusConfirm ||
                      !ee(e.confirmButton) ||
                      (e.confirmButton.focus(), 0)
                    ),
            Jn = () => {
              document.activeElement instanceof HTMLElement &&
                'function' == typeof document.activeElement.blur &&
                document.activeElement.blur();
            };
          ((Zn.prototype.disableButtons = Ht),
            (Zn.prototype.enableButtons = qt),
            (Zn.prototype.getInput = Ot),
            (Zn.prototype.disableInput = Vt),
            (Zn.prototype.enableInput = Yt),
            (Zn.prototype.hideLoading = zt),
            (Zn.prototype.disableLoading = zt),
            (Zn.prototype.showValidationMessage = Ft),
            (Zn.prototype.resetValidationMessage = Zt),
            (Zn.prototype.close = ut),
            (Zn.prototype.closePopup = ut),
            (Zn.prototype.closeModal = ut),
            (Zn.prototype.closeToast = ut),
            (Zn.prototype.rejectPromise = mt),
            (Zn.prototype.update = nn),
            (Zn.prototype._destroy = rn),
            Object.assign(Zn, xn),
            Object.keys(cn).forEach((e) => {
              Zn[e] = function (...t) {
                if (Vn && Vn[e]) return Vn[e](...t);
              };
            }),
            (Zn.DismissReason = We),
            (Zn.version = '11.26.17'));
          const Qn = Zn;
          return ((Qn.default = Qn), Qn);
        })()),
          void 0 !== this &&
            this.Sweetalert2 &&
            (this.swal =
              this.sweetAlert =
              this.Swal =
              this.SweetAlert =
                this.Sweetalert2),
          'undefined' != typeof document &&
            (function (e, t) {
              var n = e.createElement('style');
              if (
                (e.getElementsByTagName('head')[0].appendChild(n), n.styleSheet)
              )
                n.styleSheet.disabled || (n.styleSheet.cssText = t);
              else
                try {
                  n.innerHTML = t;
                } catch (e) {
                  n.innerText = t;
                }
            })(
              document,
              ':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}'
            ));
      },
      484() {
        class e extends HTMLElement {
          connectedCallback() {
            (this.render(), this.hide());
          }
          render() {
            this.innerHTML =
              '\n      <style>\n        .loading-overlay {\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba(0, 0, 0, 0.5);\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          z-index: 9999;\n          backdrop-filter: blur(5px);\n        }\n\n        .loading-overlay.hidden {\n          display: none;\n        }\n\n        .spinner {\n          width: 60px;\n          height: 60px;\n          border: 5px solid rgba(255, 255, 255, 0.3);\n          border-top-color: var(--secondary-color);\n          border-radius: 50%;\n          animation: spin 1s linear infinite;\n        }\n\n        @keyframes spin {\n          to {\n            transform: rotate(360deg);\n          }\n        }\n\n        .loading-text {\n          color: white;\n          margin-top: 20px;\n          font-size: 1.2rem;\n          text-align: center;\n        }\n      </style>\n      <div class="loading-overlay hidden" id="loadingOverlay">\n        <div style="text-align: center;">\n          <div class="spinner"></div>\n          <p class="loading-text">Memuat...</p>\n        </div>\n      </div>\n    ';
          }
          show() {
            this.querySelector('#loadingOverlay').classList.remove('hidden');
          }
          hide() {
            this.querySelector('#loadingOverlay').classList.add('hidden');
          }
        }
        customElements.define('loading-indicator', e);
      },
      540(e) {
        'use strict';
        e.exports = function (e) {
          var t = document.createElement('style');
          return (e.setAttributes(t, e.attributes), e.insert(t, e.options), t);
        };
      },
      659(e) {
        'use strict';
        var t = {};
        e.exports = function (e, n) {
          var o = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(n);
        };
      },
      825(e) {
        'use strict';
        e.exports = function (e) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var o = '';
                (n.supports && (o += '@supports ('.concat(n.supports, ') {')),
                  n.media && (o += '@media '.concat(n.media, ' {')));
                var r = void 0 !== n.layer;
                (r &&
                  (o += '@layer'.concat(
                    n.layer.length > 0 ? ' '.concat(n.layer) : '',
                    ' {'
                  )),
                  (o += n.css),
                  r && (o += '}'),
                  n.media && (o += '}'),
                  n.supports && (o += '}'));
                var a = n.sourceMap;
                (a &&
                  'undefined' != typeof btoa &&
                  (o +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      ' */'
                    )),
                  t.styleTagTransform(o, e, t.options));
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      919(e, t, n) {
        'use strict';
        n.d(t, { A: () => s });
        var o = n(354),
          r = n.n(o),
          a = n(314),
          i = n.n(a)()(r());
        i.push([
          e.id,
          "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --primary-color: #0f2854;\n  --secondary-color: #5259c0;\n  --accent-color: #b4bce8;\n  --background-color: #f7f4f350;\n  --text-color: #2d3561;\n  --hover-shadow: 0 8px 12px rgba(15, 40, 84, 0.25);\n  --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  --border-radius: 12px;\n}\n\nbody {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  background-color: var(--background-color);\n  color: var(--text-color);\n  line-height: 1.6;\n  padding-top: 100px;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\nh2 {\n  color: var(--primary-color);\n  margin-bottom: 20px;\n  font-size: 1.8rem;\n}\n\n.form-section {\n  background: white;\n  padding: 30px;\n  border-radius: var(--border-radius);\n  box-shadow: var(--card-shadow);\n  margin-bottom: 40px;\n}\n\n.notes-section {\n  margin-top: 40px;\n  background: white;\n  padding: 30px;\n  border-radius: var(--border-radius);\n  box-shadow: var(--card-shadow);\n}\n\n.notes-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.notes-header h2 {\n  margin: 0;\n}\n\n/* App Bar Styles */\n.app-bar {\n  background: linear-gradient(\n    135deg,\n    var(--primary-color),\n    var(--secondary-color)\n  );\n  color: white;\n  padding: 20px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  margin-bottom: 30px;\n  position: fixed;\n  z-index: 100;\n  width: 100%;\n  top: 0;\n}\n\n.app-bar h1 {\n  margin: 0;\n  font-size: 2rem;\n  text-align: center;\n  font-weight: 600;\n}\n\n/* Form Styles */\n.note-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.form-group label {\n  font-weight: 600;\n  color: var(--primary-color);\n  font-size: 1rem;\n}\n\nspan {\n  color: #d32f2f;\n}\n\n.form-group input,\n.form-group textarea {\n  padding: 12px 15px;\n  border: 2px solid #e0e0e0;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-family: inherit;\n  transition: all 0.3s ease;\n}\n\n.form-group input:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: var(--secondary-color);\n  box-shadow: 0 0 0 3px rgba(15, 40, 84, 0.1);\n}\n\n.form-group textarea {\n  min-height: 120px;\n  resize: vertical;\n}\n\n.toggle-btn {\n  background: linear-gradient(\n    135deg,\n    var(--secondary-color),\n    var(--primary-color)\n  );\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.toggle-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 12px rgba(15, 40, 84, 0.3);\n}\n\n.error-message {\n  color: #d32f2f;\n  font-size: 0.875rem;\n  display: none;\n  margin-top: 4px;\n}\n\n.error-message.show {\n  display: block;\n}\n\n.form-group input.invalid,\n.form-group textarea.invalid {\n  border-color: #d32f2f;\n}\n\n.char-count {\n  font-size: 0.875rem;\n  color: #666;\n  text-align: right;\n}\n\n.char-count.warning {\n  color: #f57c00;\n}\n\n.note-actions {\n  display: flex;\n  gap: 10px;\n  margin-top: 15px;\n}\n\n.btn {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.btn-archive {\n  background-color: #ff9800;\n  color: white;\n}\n\n.btn-archive:hover {\n  background-color: #f57c00;\n}\n\n.btn-unarchive {\n  background-color: #4caf50;\n  color: white;\n}\n\n.btn-unarchive:hover {\n  background-color: #388e3c;\n}\n\n.btn-delete {\n  background-color: var(--danger-color);\n  color: white;\n}\n\n.btn-delete:hover {\n  background-color: #b71c1c;\n}\n\n.submit-btn {\n  background: linear-gradient(\n    135deg,\n    var(--secondary-color),\n    var(--primary-color)\n  );\n  color: white;\n  padding: 14px 28px;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.submit-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 12px rgba(15, 40, 84, 0.3);\n}\n\n.submit-btn:active {\n  transform: translateY(0);\n}\n\n.submit-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n\n/* Notes Grid */\n.notes-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 24px;\n  margin-top: 20px;\n}\n\n.note-item {\n  background: white;\n  border-radius: var(--border-radius);\n  padding: 24px;\n  box-shadow: var(--card-shadow);\n  transition:\n    transform 0.3s ease,\n    box-shadow 0.3s ease;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  border-left: 4px solid var(--secondary-color);\n}\n\n.notes-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 24px;\n  margin-top: 20px;\n}\n\n.empty-state {\n  text-align: center;\n  padding: 60px 20px;\n  color: #999;\n}\n\n.empty-state-icon {\n  font-size: 4rem;\n  margin-bottom: 16px;\n}\n\n.empty-state-text {\n  font-size: 1.2rem;\n  color: #666;\n}\n\n.note-item:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--hover-shadow);\n}\n\n.note-header {\n  margin-bottom: 12px;\n}\n\n.note-title {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: var(--primary-color);\n  margin-bottom: 8px;\n  word-wrap: break-word;\n}\n\n.note-date {\n  font-size: 0.875rem;\n  color: #666;\n  font-style: italic;\n}\n\n.note-body {\n  color: var(--text-color);\n  line-height: 1.7;\n  flex-grow: 1;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\n.empty-state {\n  text-align: center;\n  padding: 60px 20px;\n  color: #999;\n}\n\n.empty-state-icon {\n  font-size: 4rem;\n  margin-bottom: 16px;\n}\n\n.empty-state-text {\n  font-size: 1.2rem;\n  color: #666;\n}\n\n/* Notification */\n.notification {\n  position: fixed;\n  top: 100px;\n  right: 20px;\n  background: linear-gradient(\n    135deg,\n    var(--secondary-color),\n    var(--primary-color)\n  );\n  color: white;\n  padding: 16px 24px;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n  z-index: 1000;\n  animation:\n    slideIn 0.3s ease,\n    slideOut 0.3s ease 2.7s forwards;\n}\n\n@keyframes slideIn {\n  from {\n    transform: translateX(400px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n@keyframes slideOut {\n  from {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateX(400px);\n    opacity: 0;\n  }\n}\n\nfooter {\n  margin-top: 20px;\n  padding: 40px;\n  text-align: center;\n  width: 100%;\n  color: white;\n  font-size: 0.9rem;\n  background: linear-gradient(\n    135deg,\n    var(--primary-color) 0%,\n    var(--secondary-color) 100%\n  );\n}\n\n/* Responsive */\n@media (max-width: 768px) {\n  .container {\n    padding: 15px;\n  }\n\n  .form-section {\n    padding: 20px;\n  }\n\n  h2 {\n    font-size: 1.5rem;\n  }\n\n  .app-bar h1 {\n    font-size: 1.5rem;\n  }\n\n  .notes-grid {\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 20px;\n  }\n\n  .note-item {\n    padding: 18px;\n  }\n\n  .note-title {\n    font-size: 1.2rem;\n  }\n\n  .note-actions {\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 480px) {\n  .container {\n    padding: 10px;\n  }\n\n  .form-section {\n    padding: 15px;\n  }\n\n  h2 {\n    font-size: 1.3rem;\n  }\n\n  .notes-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n\n  .note-item {\n    padding: 18px;\n  }\n\n  .note-title {\n    font-size: 1.2rem;\n  }\n\n  .form-group input,\n  .form-group textarea {\n    padding: 10px 12px;\n    font-size: 0.95rem;\n  }\n\n  .submit-btn {\n    padding: 12px 24px;\n  }\n\n  .empty-state {\n    padding: 40px 20px;\n  }\n\n  .empty-state-icon {\n    font-size: 3rem;\n  }\n\n  .empty-state-text {\n    font-size: 1rem;\n  }\n}\n",
          '',
          {
            version: 3,
            sources: ['webpack://./src/styles/style.css'],
            names: [],
            mappings:
              'AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,uBAAuB;EACvB,6BAA6B;EAC7B,qBAAqB;EACrB,iDAAiD;EACjD,2CAA2C;EAC3C,qBAAqB;AACvB;;AAEA;EACE,4DAA4D;EAC5D,yCAAyC;EACzC,wBAAwB;EACxB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,2BAA2B;EAC3B,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mCAAmC;EACnC,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb,mCAAmC;EACnC,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,SAAS;AACX;;AAEA,mBAAmB;AACnB;EACE;;;;GAIC;EACD,YAAY;EACZ,aAAa;EACb,yCAAyC;EACzC,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,WAAW;EACX,MAAM;AACR;;AAEA;EACE,SAAS;EACT,eAAe;EACf,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,gBAAgB;EAChB,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,oBAAoB;EACpB,yBAAyB;AAC3B;;AAEA;;EAEE,aAAa;EACb,oCAAoC;EACpC,2CAA2C;AAC7C;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE;;;;GAIC;EACD,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf;;wBAEsB;AACxB;;AAEA;EACE,2BAA2B;EAC3B,4CAA4C;AAC9C;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,qCAAqC;EACrC,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE;;;;GAIC;EACD,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf;;wBAEsB;AACxB;;AAEA;EACE,2BAA2B;EAC3B,4CAA4C;AAC9C;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA,eAAe;AACf;EACE,aAAa;EACb,4DAA4D;EAC5D,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,mCAAmC;EACnC,aAAa;EACb,8BAA8B;EAC9B;;wBAEsB;EACtB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,6CAA6C;AAC/C;;AAEA;EACE,aAAa;EACb,4DAA4D;EAC5D,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,2BAA2B;EAC3B,+BAA+B;AACjC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,2BAA2B;EAC3B,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,YAAY;EACZ,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA,iBAAiB;AACjB;EACE,eAAe;EACf,UAAU;EACV,WAAW;EACX;;;;GAIC;EACD,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,yCAAyC;EACzC,aAAa;EACb;;oCAEkC;AACpC;;AAEA;EACE;IACE,4BAA4B;IAC5B,UAAU;EACZ;EACA;IACE,wBAAwB;IACxB,UAAU;EACZ;AACF;;AAEA;EACE;IACE,wBAAwB;IACxB,UAAU;EACZ;EACA;IACE,4BAA4B;IAC5B,UAAU;EACZ;AACF;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB;;;;GAIC;AACH;;AAEA,eAAe;AACf;EACE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,4DAA4D;IAC5D,SAAS;EACX;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,sBAAsB;EACxB;AACF;;AAEA;EACE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,0BAA0B;IAC1B,SAAS;EACX;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,iBAAiB;EACnB;;EAEA;;IAEE,kBAAkB;IAClB,kBAAkB;EACpB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;AACF',
            sourcesContent: [
              "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --primary-color: #0f2854;\n  --secondary-color: #5259c0;\n  --accent-color: #b4bce8;\n  --background-color: #f7f4f350;\n  --text-color: #2d3561;\n  --hover-shadow: 0 8px 12px rgba(15, 40, 84, 0.25);\n  --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  --border-radius: 12px;\n}\n\nbody {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  background-color: var(--background-color);\n  color: var(--text-color);\n  line-height: 1.6;\n  padding-top: 100px;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\nh2 {\n  color: var(--primary-color);\n  margin-bottom: 20px;\n  font-size: 1.8rem;\n}\n\n.form-section {\n  background: white;\n  padding: 30px;\n  border-radius: var(--border-radius);\n  box-shadow: var(--card-shadow);\n  margin-bottom: 40px;\n}\n\n.notes-section {\n  margin-top: 40px;\n  background: white;\n  padding: 30px;\n  border-radius: var(--border-radius);\n  box-shadow: var(--card-shadow);\n}\n\n.notes-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.notes-header h2 {\n  margin: 0;\n}\n\n/* App Bar Styles */\n.app-bar {\n  background: linear-gradient(\n    135deg,\n    var(--primary-color),\n    var(--secondary-color)\n  );\n  color: white;\n  padding: 20px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  margin-bottom: 30px;\n  position: fixed;\n  z-index: 100;\n  width: 100%;\n  top: 0;\n}\n\n.app-bar h1 {\n  margin: 0;\n  font-size: 2rem;\n  text-align: center;\n  font-weight: 600;\n}\n\n/* Form Styles */\n.note-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.form-group label {\n  font-weight: 600;\n  color: var(--primary-color);\n  font-size: 1rem;\n}\n\nspan {\n  color: #d32f2f;\n}\n\n.form-group input,\n.form-group textarea {\n  padding: 12px 15px;\n  border: 2px solid #e0e0e0;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-family: inherit;\n  transition: all 0.3s ease;\n}\n\n.form-group input:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: var(--secondary-color);\n  box-shadow: 0 0 0 3px rgba(15, 40, 84, 0.1);\n}\n\n.form-group textarea {\n  min-height: 120px;\n  resize: vertical;\n}\n\n.toggle-btn {\n  background: linear-gradient(\n    135deg,\n    var(--secondary-color),\n    var(--primary-color)\n  );\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.toggle-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 12px rgba(15, 40, 84, 0.3);\n}\n\n.error-message {\n  color: #d32f2f;\n  font-size: 0.875rem;\n  display: none;\n  margin-top: 4px;\n}\n\n.error-message.show {\n  display: block;\n}\n\n.form-group input.invalid,\n.form-group textarea.invalid {\n  border-color: #d32f2f;\n}\n\n.char-count {\n  font-size: 0.875rem;\n  color: #666;\n  text-align: right;\n}\n\n.char-count.warning {\n  color: #f57c00;\n}\n\n.note-actions {\n  display: flex;\n  gap: 10px;\n  margin-top: 15px;\n}\n\n.btn {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.btn-archive {\n  background-color: #ff9800;\n  color: white;\n}\n\n.btn-archive:hover {\n  background-color: #f57c00;\n}\n\n.btn-unarchive {\n  background-color: #4caf50;\n  color: white;\n}\n\n.btn-unarchive:hover {\n  background-color: #388e3c;\n}\n\n.btn-delete {\n  background-color: var(--danger-color);\n  color: white;\n}\n\n.btn-delete:hover {\n  background-color: #b71c1c;\n}\n\n.submit-btn {\n  background: linear-gradient(\n    135deg,\n    var(--secondary-color),\n    var(--primary-color)\n  );\n  color: white;\n  padding: 14px 28px;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.submit-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 12px rgba(15, 40, 84, 0.3);\n}\n\n.submit-btn:active {\n  transform: translateY(0);\n}\n\n.submit-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n\n/* Notes Grid */\n.notes-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 24px;\n  margin-top: 20px;\n}\n\n.note-item {\n  background: white;\n  border-radius: var(--border-radius);\n  padding: 24px;\n  box-shadow: var(--card-shadow);\n  transition:\n    transform 0.3s ease,\n    box-shadow 0.3s ease;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  border-left: 4px solid var(--secondary-color);\n}\n\n.notes-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 24px;\n  margin-top: 20px;\n}\n\n.empty-state {\n  text-align: center;\n  padding: 60px 20px;\n  color: #999;\n}\n\n.empty-state-icon {\n  font-size: 4rem;\n  margin-bottom: 16px;\n}\n\n.empty-state-text {\n  font-size: 1.2rem;\n  color: #666;\n}\n\n.note-item:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--hover-shadow);\n}\n\n.note-header {\n  margin-bottom: 12px;\n}\n\n.note-title {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: var(--primary-color);\n  margin-bottom: 8px;\n  word-wrap: break-word;\n}\n\n.note-date {\n  font-size: 0.875rem;\n  color: #666;\n  font-style: italic;\n}\n\n.note-body {\n  color: var(--text-color);\n  line-height: 1.7;\n  flex-grow: 1;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\n.empty-state {\n  text-align: center;\n  padding: 60px 20px;\n  color: #999;\n}\n\n.empty-state-icon {\n  font-size: 4rem;\n  margin-bottom: 16px;\n}\n\n.empty-state-text {\n  font-size: 1.2rem;\n  color: #666;\n}\n\n/* Notification */\n.notification {\n  position: fixed;\n  top: 100px;\n  right: 20px;\n  background: linear-gradient(\n    135deg,\n    var(--secondary-color),\n    var(--primary-color)\n  );\n  color: white;\n  padding: 16px 24px;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n  z-index: 1000;\n  animation:\n    slideIn 0.3s ease,\n    slideOut 0.3s ease 2.7s forwards;\n}\n\n@keyframes slideIn {\n  from {\n    transform: translateX(400px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n@keyframes slideOut {\n  from {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateX(400px);\n    opacity: 0;\n  }\n}\n\nfooter {\n  margin-top: 20px;\n  padding: 40px;\n  text-align: center;\n  width: 100%;\n  color: white;\n  font-size: 0.9rem;\n  background: linear-gradient(\n    135deg,\n    var(--primary-color) 0%,\n    var(--secondary-color) 100%\n  );\n}\n\n/* Responsive */\n@media (max-width: 768px) {\n  .container {\n    padding: 15px;\n  }\n\n  .form-section {\n    padding: 20px;\n  }\n\n  h2 {\n    font-size: 1.5rem;\n  }\n\n  .app-bar h1 {\n    font-size: 1.5rem;\n  }\n\n  .notes-grid {\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 20px;\n  }\n\n  .note-item {\n    padding: 18px;\n  }\n\n  .note-title {\n    font-size: 1.2rem;\n  }\n\n  .note-actions {\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 480px) {\n  .container {\n    padding: 10px;\n  }\n\n  .form-section {\n    padding: 15px;\n  }\n\n  h2 {\n    font-size: 1.3rem;\n  }\n\n  .notes-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n\n  .note-item {\n    padding: 18px;\n  }\n\n  .note-title {\n    font-size: 1.2rem;\n  }\n\n  .form-group input,\n  .form-group textarea {\n    padding: 10px 12px;\n    font-size: 0.95rem;\n  }\n\n  .submit-btn {\n    padding: 12px 24px;\n  }\n\n  .empty-state {\n    padding: 40px 20px;\n  }\n\n  .empty-state-icon {\n    font-size: 3rem;\n  }\n\n  .empty-state-text {\n    font-size: 1rem;\n  }\n}\n",
            ],
            sourceRoot: '',
          },
        ]);
        const s = i;
      },
    },
    t = {};
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var a = (t[o] = { id: o, exports: {} });
    return (e[o].call(a.exports, a, a.exports, n), a.exports);
  }
  ((n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return (n.d(t, { a: t }), t);
  }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nc = void 0),
    (() => {
      'use strict';
      var e = n(72),
        t = n.n(e),
        o = n(825),
        r = n.n(o),
        a = n(659),
        i = n.n(a),
        s = n(56),
        l = n.n(s),
        c = n(540),
        d = n.n(c),
        u = n(113),
        p = n.n(u),
        m = n(919),
        w = {};
      ((w.styleTagTransform = p()),
        (w.setAttributes = l()),
        (w.insert = i().bind(null, 'head')),
        (w.domAPI = r()),
        (w.insertStyleElement = d()),
        t()(m.A, w),
        m.A && m.A.locals && m.A.locals,
        n(367),
        n(484),
        n(253));
      var h = {
          update: null,
          begin: null,
          loopBegin: null,
          changeBegin: null,
          change: null,
          changeComplete: null,
          loopComplete: null,
          complete: null,
          loop: 1,
          direction: 'normal',
          autoplay: !0,
          timelineOffset: 0,
        },
        g = {
          duration: 1e3,
          delay: 0,
          endDelay: 0,
          easing: 'easeOutElastic(1, .5)',
          round: 0,
        },
        f = [
          'translateX',
          'translateY',
          'translateZ',
          'rotate',
          'rotateX',
          'rotateY',
          'rotateZ',
          'scale',
          'scaleX',
          'scaleY',
          'scaleZ',
          'skew',
          'skewX',
          'skewY',
          'perspective',
          'matrix',
          'matrix3d',
        ],
        b = { CSS: {}, springs: {} };
      function A(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      function v(e, t) {
        return e.indexOf(t) > -1;
      }
      function y(e, t) {
        return e.apply(null, t);
      }
      var x = {
        arr: function (e) {
          return Array.isArray(e);
        },
        obj: function (e) {
          return v(Object.prototype.toString.call(e), 'Object');
        },
        pth: function (e) {
          return x.obj(e) && e.hasOwnProperty('totalLength');
        },
        svg: function (e) {
          return e instanceof SVGElement;
        },
        inp: function (e) {
          return e instanceof HTMLInputElement;
        },
        dom: function (e) {
          return e.nodeType || x.svg(e);
        },
        str: function (e) {
          return 'string' == typeof e;
        },
        fnc: function (e) {
          return 'function' == typeof e;
        },
        und: function (e) {
          return void 0 === e;
        },
        nil: function (e) {
          return x.und(e) || null === e;
        },
        hex: function (e) {
          return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
        },
        rgb: function (e) {
          return /^rgb/.test(e);
        },
        hsl: function (e) {
          return /^hsl/.test(e);
        },
        col: function (e) {
          return x.hex(e) || x.rgb(e) || x.hsl(e);
        },
        key: function (e) {
          return (
            !h.hasOwnProperty(e) &&
            !g.hasOwnProperty(e) &&
            'targets' !== e &&
            'keyframes' !== e
          );
        },
      };
      function C(e) {
        var t = /\(([^)]+)\)/.exec(e);
        return t
          ? t[1].split(',').map(function (e) {
              return parseFloat(e);
            })
          : [];
      }
      function E(e, t) {
        var n = C(e),
          o = A(x.und(n[0]) ? 1 : n[0], 0.1, 100),
          r = A(x.und(n[1]) ? 100 : n[1], 0.1, 100),
          a = A(x.und(n[2]) ? 10 : n[2], 0.1, 100),
          i = A(x.und(n[3]) ? 0 : n[3], 0.1, 100),
          s = Math.sqrt(r / o),
          l = a / (2 * Math.sqrt(r * o)),
          c = l < 1 ? s * Math.sqrt(1 - l * l) : 0,
          d = l < 1 ? (l * s - i) / c : -i + s;
        function u(e) {
          var n = t ? (t * e) / 1e3 : e;
          return (
            (n =
              l < 1
                ? Math.exp(-n * l * s) *
                  (1 * Math.cos(c * n) + d * Math.sin(c * n))
                : (1 + d * n) * Math.exp(-n * s)),
            0 === e || 1 === e ? e : 1 - n
          );
        }
        return t
          ? u
          : function () {
              var t = b.springs[e];
              if (t) return t;
              for (var n = 1 / 6, o = 0, r = 0; ; )
                if (1 === u((o += n))) {
                  if (++r >= 16) break;
                } else r = 0;
              var a = o * n * 1e3;
              return ((b.springs[e] = a), a);
            };
      }
      function B(e) {
        return (
          void 0 === e && (e = 10),
          function (t) {
            return Math.ceil(A(t, 1e-6, 1) * e) * (1 / e);
          }
        );
      }
      var k,
        L,
        T = (function () {
          var e = 0.1;
          function t(e, t) {
            return 1 - 3 * t + 3 * e;
          }
          function n(e, t) {
            return 3 * t - 6 * e;
          }
          function o(e) {
            return 3 * e;
          }
          function r(e, r, a) {
            return ((t(r, a) * e + n(r, a)) * e + o(r)) * e;
          }
          function a(e, r, a) {
            return 3 * t(r, a) * e * e + 2 * n(r, a) * e + o(r);
          }
          return function (t, n, o, i) {
            if (0 <= t && t <= 1 && 0 <= o && o <= 1) {
              var s = new Float32Array(11);
              if (t !== n || o !== i)
                for (var l = 0; l < 11; ++l) s[l] = r(l * e, t, o);
              return function (l) {
                return (t === n && o === i) || 0 === l || 1 === l
                  ? l
                  : r(
                      (function (n) {
                        for (var i = 0, l = 1; 10 !== l && s[l] <= n; ++l)
                          i += e;
                        --l;
                        var c = i + ((n - s[l]) / (s[l + 1] - s[l])) * e,
                          d = a(c, t, o);
                        return d >= 0.001
                          ? (function (e, t, n, o) {
                              for (var i = 0; i < 4; ++i) {
                                var s = a(t, n, o);
                                if (0 === s) return t;
                                t -= (r(t, n, o) - e) / s;
                              }
                              return t;
                            })(n, c, t, o)
                          : 0 === d
                            ? c
                            : (function (e, t, n, o, a) {
                                var i,
                                  s,
                                  l = 0;
                                do {
                                  (i = r((s = t + (n - t) / 2), o, a) - e) > 0
                                    ? (n = s)
                                    : (t = s);
                                } while (Math.abs(i) > 1e-7 && ++l < 10);
                                return s;
                              })(n, i, i + e, t, o);
                      })(l),
                      n,
                      i
                    );
              };
            }
          };
        })(),
        $ =
          ((k = {
            linear: function () {
              return function (e) {
                return e;
              };
            },
          }),
          (L = {
            Sine: function () {
              return function (e) {
                return 1 - Math.cos((e * Math.PI) / 2);
              };
            },
            Expo: function () {
              return function (e) {
                return e ? Math.pow(2, 10 * e - 10) : 0;
              };
            },
            Circ: function () {
              return function (e) {
                return 1 - Math.sqrt(1 - e * e);
              };
            },
            Back: function () {
              return function (e) {
                return e * e * (3 * e - 2);
              };
            },
            Bounce: function () {
              return function (e) {
                for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11; );
                return (
                  1 / Math.pow(4, 3 - n) -
                  7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                );
              };
            },
            Elastic: function (e, t) {
              (void 0 === e && (e = 1), void 0 === t && (t = 0.5));
              var n = A(e, 1, 10),
                o = A(t, 0.1, 2);
              return function (e) {
                return 0 === e || 1 === e
                  ? e
                  : -n *
                      Math.pow(2, 10 * (e - 1)) *
                      Math.sin(
                        ((e - 1 - (o / (2 * Math.PI)) * Math.asin(1 / n)) *
                          (2 * Math.PI)) /
                          o
                      );
              };
            },
          }),
          ['Quad', 'Cubic', 'Quart', 'Quint'].forEach(function (e, t) {
            L[e] = function () {
              return function (e) {
                return Math.pow(e, t + 2);
              };
            };
          }),
          Object.keys(L).forEach(function (e) {
            var t = L[e];
            ((k['easeIn' + e] = t),
              (k['easeOut' + e] = function (e, n) {
                return function (o) {
                  return 1 - t(e, n)(1 - o);
                };
              }),
              (k['easeInOut' + e] = function (e, n) {
                return function (o) {
                  return o < 0.5
                    ? t(e, n)(2 * o) / 2
                    : 1 - t(e, n)(-2 * o + 2) / 2;
                };
              }),
              (k['easeOutIn' + e] = function (e, n) {
                return function (o) {
                  return o < 0.5
                    ? (1 - t(e, n)(1 - 2 * o)) / 2
                    : (t(e, n)(2 * o - 1) + 1) / 2;
                };
              }));
          }),
          k);
      function S(e, t) {
        if (x.fnc(e)) return e;
        var n = e.split('(')[0],
          o = $[n],
          r = C(e);
        switch (n) {
          case 'spring':
            return E(e, t);
          case 'cubicBezier':
            return y(T, r);
          case 'steps':
            return y(B, r);
          default:
            return y(o, r);
        }
      }
      function P(e) {
        try {
          return document.querySelectorAll(e);
        } catch (e) {
          return;
        }
      }
      function I(e, t) {
        for (
          var n = e.length,
            o = arguments.length >= 2 ? arguments[1] : void 0,
            r = [],
            a = 0;
          a < n;
          a++
        )
          if (a in e) {
            var i = e[a];
            t.call(o, i, a, e) && r.push(i);
          }
        return r;
      }
      function M(e) {
        return e.reduce(function (e, t) {
          return e.concat(x.arr(t) ? M(t) : t);
        }, []);
      }
      function z(e) {
        return x.arr(e)
          ? e
          : (x.str(e) && (e = P(e) || e),
            e instanceof NodeList || e instanceof HTMLCollection
              ? [].slice.call(e)
              : [e]);
      }
      function j(e, t) {
        return e.some(function (e) {
          return e === t;
        });
      }
      function O(e) {
        var t = {};
        for (var n in e) t[n] = e[n];
        return t;
      }
      function D(e, t) {
        var n = O(e);
        for (var o in e) n[o] = t.hasOwnProperty(o) ? t[o] : e[o];
        return n;
      }
      function N(e, t) {
        var n = O(e);
        for (var o in t) n[o] = x.und(e[o]) ? t[o] : e[o];
        return n;
      }
      function q(e) {
        var t =
          /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
            e
          );
        if (t) return t[1];
      }
      function H(e, t) {
        return x.fnc(e) ? e(t.target, t.id, t.total) : e;
      }
      function Y(e, t) {
        return e.getAttribute(t);
      }
      function V(e, t, n) {
        if (j([n, 'deg', 'rad', 'turn'], q(t))) return t;
        var o = b.CSS[t + n];
        if (!x.und(o)) return o;
        var r = document.createElement(e.tagName),
          a =
            e.parentNode && e.parentNode !== document
              ? e.parentNode
              : document.body;
        (a.appendChild(r),
          (r.style.position = 'absolute'),
          (r.style.width = 100 + n));
        var i = 100 / r.offsetWidth;
        a.removeChild(r);
        var s = i * parseFloat(t);
        return ((b.CSS[t + n] = s), s);
      }
      function F(e, t, n) {
        if (t in e.style) {
          var o = t.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
            r = e.style[t] || getComputedStyle(e).getPropertyValue(o) || '0';
          return n ? V(e, r, n) : r;
        }
      }
      function Z(e, t) {
        return x.dom(e) && !x.inp(e) && (!x.nil(Y(e, t)) || (x.svg(e) && e[t]))
          ? 'attribute'
          : x.dom(e) && j(f, t)
            ? 'transform'
            : x.dom(e) && 'transform' !== t && F(e, t)
              ? 'css'
              : null != e[t]
                ? 'object'
                : void 0;
      }
      function W(e) {
        if (x.dom(e)) {
          for (
            var t,
              n = e.style.transform || '',
              o = /(\w+)\(([^)]*)\)/g,
              r = new Map();
            (t = o.exec(n));
          )
            r.set(t[1], t[2]);
          return r;
        }
      }
      function U(e, t, n, o) {
        switch (Z(e, t)) {
          case 'transform':
            return (function (e, t, n, o) {
              var r = v(t, 'scale')
                  ? 1
                  : 0 +
                    (function (e) {
                      return v(e, 'translate') || 'perspective' === e
                        ? 'px'
                        : v(e, 'rotate') || v(e, 'skew')
                          ? 'deg'
                          : void 0;
                    })(t),
                a = W(e).get(t) || r;
              return (
                n && (n.transforms.list.set(t, a), (n.transforms.last = t)),
                o ? V(e, a, o) : a
              );
            })(e, t, o, n);
          case 'css':
            return F(e, t, n);
          case 'attribute':
            return Y(e, t);
          default:
            return e[t] || 0;
        }
      }
      function R(e, t) {
        var n = /^(\*=|\+=|-=)/.exec(e);
        if (!n) return e;
        var o = q(e) || 0,
          r = parseFloat(t),
          a = parseFloat(e.replace(n[0], ''));
        switch (n[0][0]) {
          case '+':
            return r + a + o;
          case '-':
            return r - a + o;
          case '*':
            return r * a + o;
        }
      }
      function X(e, t) {
        if (x.col(e))
          return (function (e) {
            return x.rgb(e)
              ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((t = e)))
                ? 'rgba(' + n[1] + ',1)'
                : t
              : x.hex(e)
                ? (function (e) {
                    var t = e.replace(
                        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        function (e, t, n, o) {
                          return t + t + n + n + o + o;
                        }
                      ),
                      n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                    return (
                      'rgba(' +
                      parseInt(n[1], 16) +
                      ',' +
                      parseInt(n[2], 16) +
                      ',' +
                      parseInt(n[3], 16) +
                      ',1)'
                    );
                  })(e)
                : x.hsl(e)
                  ? (function (e) {
                      var t,
                        n,
                        o,
                        r =
                          /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) ||
                          /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(
                            e
                          ),
                        a = parseInt(r[1], 10) / 360,
                        i = parseInt(r[2], 10) / 100,
                        s = parseInt(r[3], 10) / 100,
                        l = r[4] || 1;
                      function c(e, t, n) {
                        return (
                          n < 0 && (n += 1),
                          n > 1 && (n -= 1),
                          n < 1 / 6
                            ? e + 6 * (t - e) * n
                            : n < 0.5
                              ? t
                              : n < 2 / 3
                                ? e + (t - e) * (2 / 3 - n) * 6
                                : e
                        );
                      }
                      if (0 == i) t = n = o = s;
                      else {
                        var d = s < 0.5 ? s * (1 + i) : s + i - s * i,
                          u = 2 * s - d;
                        ((t = c(u, d, a + 1 / 3)),
                          (n = c(u, d, a)),
                          (o = c(u, d, a - 1 / 3)));
                      }
                      return (
                        'rgba(' +
                        255 * t +
                        ',' +
                        255 * n +
                        ',' +
                        255 * o +
                        ',' +
                        l +
                        ')'
                      );
                    })(e)
                  : void 0;
            var t, n;
          })(e);
        if (/\s/g.test(e)) return e;
        var n = q(e),
          o = n ? e.substr(0, e.length - n.length) : e;
        return t ? o + t : o;
      }
      function _(e, t) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
      }
      function G(e) {
        for (var t, n = e.points, o = 0, r = 0; r < n.numberOfItems; r++) {
          var a = n.getItem(r);
          (r > 0 && (o += _(t, a)), (t = a));
        }
        return o;
      }
      function K(e) {
        if (e.getTotalLength) return e.getTotalLength();
        switch (e.tagName.toLowerCase()) {
          case 'circle':
            return (function (e) {
              return 2 * Math.PI * Y(e, 'r');
            })(e);
          case 'rect':
            return (function (e) {
              return 2 * Y(e, 'width') + 2 * Y(e, 'height');
            })(e);
          case 'line':
            return (function (e) {
              return _(
                { x: Y(e, 'x1'), y: Y(e, 'y1') },
                { x: Y(e, 'x2'), y: Y(e, 'y2') }
              );
            })(e);
          case 'polyline':
            return G(e);
          case 'polygon':
            return (function (e) {
              var t = e.points;
              return G(e) + _(t.getItem(t.numberOfItems - 1), t.getItem(0));
            })(e);
        }
      }
      function J(e, t) {
        var n = t || {},
          o =
            n.el ||
            (function (e) {
              for (var t = e.parentNode; x.svg(t) && x.svg(t.parentNode); )
                t = t.parentNode;
              return t;
            })(e),
          r = o.getBoundingClientRect(),
          a = Y(o, 'viewBox'),
          i = r.width,
          s = r.height,
          l = n.viewBox || (a ? a.split(' ') : [0, 0, i, s]);
        return {
          el: o,
          viewBox: l,
          x: l[0] / 1,
          y: l[1] / 1,
          w: i,
          h: s,
          vW: l[2],
          vH: l[3],
        };
      }
      function Q(e, t, n) {
        function o(n) {
          void 0 === n && (n = 0);
          var o = t + n >= 1 ? t + n : 0;
          return e.el.getPointAtLength(o);
        }
        var r = J(e.el, e.svg),
          a = o(),
          i = o(-1),
          s = o(1),
          l = n ? 1 : r.w / r.vW,
          c = n ? 1 : r.h / r.vH;
        switch (e.property) {
          case 'x':
            return (a.x - r.x) * l;
          case 'y':
            return (a.y - r.y) * c;
          case 'angle':
            return (180 * Math.atan2(s.y - i.y, s.x - i.x)) / Math.PI;
        }
      }
      function ee(e, t) {
        var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
          o = X(x.pth(e) ? e.totalLength : e, t) + '';
        return {
          original: o,
          numbers: o.match(n) ? o.match(n).map(Number) : [0],
          strings: x.str(e) || t ? o.split(n) : [],
        };
      }
      function te(e) {
        return I(e ? M(x.arr(e) ? e.map(z) : z(e)) : [], function (e, t, n) {
          return n.indexOf(e) === t;
        });
      }
      function ne(e) {
        var t = te(e);
        return t.map(function (e, n) {
          return {
            target: e,
            id: n,
            total: t.length,
            transforms: { list: W(e) },
          };
        });
      }
      function oe(e, t) {
        var n = O(t);
        if (
          (/^spring/.test(n.easing) && (n.duration = E(n.easing)), x.arr(e))
        ) {
          var o = e.length;
          2 !== o || x.obj(e[0])
            ? x.fnc(t.duration) || (n.duration = t.duration / o)
            : (e = { value: e });
        }
        var r = x.arr(e) ? e : [e];
        return r
          .map(function (e, n) {
            var o = x.obj(e) && !x.pth(e) ? e : { value: e };
            return (
              x.und(o.delay) && (o.delay = n ? 0 : t.delay),
              x.und(o.endDelay) &&
                (o.endDelay = n === r.length - 1 ? t.endDelay : 0),
              o
            );
          })
          .map(function (e) {
            return N(e, n);
          });
      }
      var re = {
        css: function (e, t, n) {
          return (e.style[t] = n);
        },
        attribute: function (e, t, n) {
          return e.setAttribute(t, n);
        },
        object: function (e, t, n) {
          return (e[t] = n);
        },
        transform: function (e, t, n, o, r) {
          if ((o.list.set(t, n), t === o.last || r)) {
            var a = '';
            (o.list.forEach(function (e, t) {
              a += t + '(' + e + ') ';
            }),
              (e.style.transform = a));
          }
        },
      };
      function ae(e, t) {
        ne(e).forEach(function (e) {
          for (var n in t) {
            var o = H(t[n], e),
              r = e.target,
              a = q(o),
              i = U(r, n, a, e),
              s = R(X(o, a || q(i)), i),
              l = Z(r, n);
            re[l](r, n, s, e.transforms, !0);
          }
        });
      }
      function ie(e, t) {
        return I(
          M(
            e.map(function (e) {
              return t.map(function (t) {
                return (function (e, t) {
                  var n = Z(e.target, t.name);
                  if (n) {
                    var o = (function (e, t) {
                        var n;
                        return e.tweens.map(function (o) {
                          var r = (function (e, t) {
                              var n = {};
                              for (var o in e) {
                                var r = H(e[o], t);
                                (x.arr(r) &&
                                  1 ===
                                    (r = r.map(function (e) {
                                      return H(e, t);
                                    })).length &&
                                  (r = r[0]),
                                  (n[o] = r));
                              }
                              return (
                                (n.duration = parseFloat(n.duration)),
                                (n.delay = parseFloat(n.delay)),
                                n
                              );
                            })(o, t),
                            a = r.value,
                            i = x.arr(a) ? a[1] : a,
                            s = q(i),
                            l = U(t.target, e.name, s, t),
                            c = n ? n.to.original : l,
                            d = x.arr(a) ? a[0] : c,
                            u = q(d) || q(l),
                            p = s || u;
                          return (
                            x.und(i) && (i = c),
                            (r.from = ee(d, p)),
                            (r.to = ee(R(i, d), p)),
                            (r.start = n ? n.end : 0),
                            (r.end =
                              r.start + r.delay + r.duration + r.endDelay),
                            (r.easing = S(r.easing, r.duration)),
                            (r.isPath = x.pth(a)),
                            (r.isPathTargetInsideSVG =
                              r.isPath && x.svg(t.target)),
                            (r.isColor = x.col(r.from.original)),
                            r.isColor && (r.round = 1),
                            (n = r),
                            r
                          );
                        });
                      })(t, e),
                      r = o[o.length - 1];
                    return {
                      type: n,
                      property: t.name,
                      animatable: e,
                      tweens: o,
                      duration: r.end,
                      delay: o[0].delay,
                      endDelay: r.endDelay,
                    };
                  }
                })(e, t);
              });
            })
          ),
          function (e) {
            return !x.und(e);
          }
        );
      }
      function se(e, t) {
        var n = e.length,
          o = function (e) {
            return e.timelineOffset ? e.timelineOffset : 0;
          },
          r = {};
        return (
          (r.duration = n
            ? Math.max.apply(
                Math,
                e.map(function (e) {
                  return o(e) + e.duration;
                })
              )
            : t.duration),
          (r.delay = n
            ? Math.min.apply(
                Math,
                e.map(function (e) {
                  return o(e) + e.delay;
                })
              )
            : t.delay),
          (r.endDelay = n
            ? r.duration -
              Math.max.apply(
                Math,
                e.map(function (e) {
                  return o(e) + e.duration - e.endDelay;
                })
              )
            : t.endDelay),
          r
        );
      }
      var le = 0,
        ce = [],
        de = (function () {
          var e;
          function t(n) {
            for (var o = ce.length, r = 0; r < o; ) {
              var a = ce[r];
              a.paused ? (ce.splice(r, 1), o--) : (a.tick(n), r++);
            }
            e = r > 0 ? requestAnimationFrame(t) : void 0;
          }
          return (
            'undefined' != typeof document &&
              document.addEventListener('visibilitychange', function () {
                pe.suspendWhenDocumentHidden &&
                  (ue()
                    ? (e = cancelAnimationFrame(e))
                    : (ce.forEach(function (e) {
                        return e._onDocumentVisibility();
                      }),
                      de()));
              }),
            function () {
              e ||
                (ue() && pe.suspendWhenDocumentHidden) ||
                !(ce.length > 0) ||
                (e = requestAnimationFrame(t));
            }
          );
        })();
      function ue() {
        return !!document && document.hidden;
      }
      function pe(e) {
        void 0 === e && (e = {});
        var t,
          n = 0,
          o = 0,
          r = 0,
          a = 0,
          i = null;
        function s(e) {
          var t =
            window.Promise &&
            new Promise(function (e) {
              return (i = e);
            });
          return ((e.finished = t), t);
        }
        var l = (function (e) {
          var t = D(h, e),
            n = D(g, e),
            o = (function (e, t) {
              var n = [],
                o = t.keyframes;
              for (var r in (o &&
                (t = N(
                  (function (e) {
                    for (
                      var t = I(
                          M(
                            e.map(function (e) {
                              return Object.keys(e);
                            })
                          ),
                          function (e) {
                            return x.key(e);
                          }
                        ).reduce(function (e, t) {
                          return (e.indexOf(t) < 0 && e.push(t), e);
                        }, []),
                        n = {},
                        o = function (o) {
                          var r = t[o];
                          n[r] = e.map(function (e) {
                            var t = {};
                            for (var n in e)
                              x.key(n)
                                ? n == r && (t.value = e[n])
                                : (t[n] = e[n]);
                            return t;
                          });
                        },
                        r = 0;
                      r < t.length;
                      r++
                    )
                      o(r);
                    return n;
                  })(o),
                  t
                )),
              t))
                x.key(r) && n.push({ name: r, tweens: oe(t[r], e) });
              return n;
            })(n, e),
            r = ne(e.targets),
            a = ie(r, o),
            i = se(a, n),
            s = le;
          return (
            le++,
            N(t, {
              id: s,
              children: [],
              animatables: r,
              animations: a,
              duration: i.duration,
              delay: i.delay,
              endDelay: i.endDelay,
            })
          );
        })(e);
        function c() {
          var e = l.direction;
          ('alternate' !== e &&
            (l.direction = 'normal' !== e ? 'normal' : 'reverse'),
            (l.reversed = !l.reversed),
            t.forEach(function (e) {
              return (e.reversed = l.reversed);
            }));
        }
        function d(e) {
          return l.reversed ? l.duration - e : e;
        }
        function u() {
          ((n = 0), (o = d(l.currentTime) * (1 / pe.speed)));
        }
        function p(e, t) {
          t && t.seek(e - t.timelineOffset);
        }
        function m(e) {
          for (var t = 0, n = l.animations, o = n.length; t < o; ) {
            var r = n[t],
              a = r.animatable,
              i = r.tweens,
              s = i.length - 1,
              c = i[s];
            s &&
              (c =
                I(i, function (t) {
                  return e < t.end;
                })[0] || c);
            for (
              var d = A(e - c.start - c.delay, 0, c.duration) / c.duration,
                u = isNaN(d) ? 1 : c.easing(d),
                p = c.to.strings,
                m = c.round,
                w = [],
                h = c.to.numbers.length,
                g = void 0,
                f = 0;
              f < h;
              f++
            ) {
              var b = void 0,
                v = c.to.numbers[f],
                y = c.from.numbers[f] || 0;
              ((b = c.isPath
                ? Q(c.value, u * v, c.isPathTargetInsideSVG)
                : y + u * (v - y)),
                m && ((c.isColor && f > 2) || (b = Math.round(b * m) / m)),
                w.push(b));
            }
            var x = p.length;
            if (x) {
              g = p[0];
              for (var C = 0; C < x; C++) {
                p[C];
                var E = p[C + 1],
                  B = w[C];
                isNaN(B) || (g += E ? B + E : B + ' ');
              }
            } else g = w[0];
            (re[r.type](a.target, r.property, g, a.transforms),
              (r.currentValue = g),
              t++);
          }
        }
        function w(e) {
          l[e] && !l.passThrough && l[e](l);
        }
        function f(e) {
          var u = l.duration,
            h = l.delay,
            g = u - l.endDelay,
            f = d(e);
          ((l.progress = A((f / u) * 100, 0, 100)),
            (l.reversePlayback = f < l.currentTime),
            t &&
              (function (e) {
                if (l.reversePlayback) for (var n = a; n--; ) p(e, t[n]);
                else for (var o = 0; o < a; o++) p(e, t[o]);
              })(f),
            !l.began && l.currentTime > 0 && ((l.began = !0), w('begin')),
            !l.loopBegan &&
              l.currentTime > 0 &&
              ((l.loopBegan = !0), w('loopBegin')),
            f <= h && 0 !== l.currentTime && m(0),
            ((f >= g && l.currentTime !== u) || !u) && m(u),
            f > h && f < g
              ? (l.changeBegan ||
                  ((l.changeBegan = !0),
                  (l.changeCompleted = !1),
                  w('changeBegin')),
                w('change'),
                m(f))
              : l.changeBegan &&
                ((l.changeCompleted = !0),
                (l.changeBegan = !1),
                w('changeComplete')),
            (l.currentTime = A(f, 0, u)),
            l.began && w('update'),
            e >= u &&
              ((o = 0),
              l.remaining && !0 !== l.remaining && l.remaining--,
              l.remaining
                ? ((n = r),
                  w('loopComplete'),
                  (l.loopBegan = !1),
                  'alternate' === l.direction && c())
                : ((l.paused = !0),
                  l.completed ||
                    ((l.completed = !0),
                    w('loopComplete'),
                    w('complete'),
                    !l.passThrough && 'Promise' in window && (i(), s(l))))));
        }
        return (
          s(l),
          (l.reset = function () {
            var e = l.direction;
            ((l.passThrough = !1),
              (l.currentTime = 0),
              (l.progress = 0),
              (l.paused = !0),
              (l.began = !1),
              (l.loopBegan = !1),
              (l.changeBegan = !1),
              (l.completed = !1),
              (l.changeCompleted = !1),
              (l.reversePlayback = !1),
              (l.reversed = 'reverse' === e),
              (l.remaining = l.loop),
              (t = l.children));
            for (var n = (a = t.length); n--; ) l.children[n].reset();
            (((l.reversed && !0 !== l.loop) ||
              ('alternate' === e && 1 === l.loop)) &&
              l.remaining++,
              m(l.reversed ? l.duration : 0));
          }),
          (l._onDocumentVisibility = u),
          (l.set = function (e, t) {
            return (ae(e, t), l);
          }),
          (l.tick = function (e) {
            ((r = e), n || (n = r), f((r + (o - n)) * pe.speed));
          }),
          (l.seek = function (e) {
            f(d(e));
          }),
          (l.pause = function () {
            ((l.paused = !0), u());
          }),
          (l.play = function () {
            l.paused &&
              (l.completed && l.reset(),
              (l.paused = !1),
              ce.push(l),
              u(),
              de());
          }),
          (l.reverse = function () {
            (c(), (l.completed = !l.reversed), u());
          }),
          (l.restart = function () {
            (l.reset(), l.play());
          }),
          (l.remove = function (e) {
            we(te(e), l);
          }),
          l.reset(),
          l.autoplay && l.play(),
          l
        );
      }
      function me(e, t) {
        for (var n = t.length; n--; )
          j(e, t[n].animatable.target) && t.splice(n, 1);
      }
      function we(e, t) {
        var n = t.animations,
          o = t.children;
        me(e, n);
        for (var r = o.length; r--; ) {
          var a = o[r],
            i = a.animations;
          (me(e, i), i.length || a.children.length || o.splice(r, 1));
        }
        n.length || o.length || t.pause();
      }
      ((pe.version = '3.2.1'),
        (pe.speed = 1),
        (pe.suspendWhenDocumentHidden = !0),
        (pe.running = ce),
        (pe.remove = function (e) {
          for (var t = te(e), n = ce.length; n--; ) we(t, ce[n]);
        }),
        (pe.get = U),
        (pe.set = ae),
        (pe.convertPx = V),
        (pe.path = function (e, t) {
          var n = x.str(e) ? P(e)[0] : e,
            o = t || 100;
          return function (e) {
            return {
              property: e,
              el: n,
              svg: J(n),
              totalLength: K(n) * (o / 100),
            };
          };
        }),
        (pe.setDashoffset = function (e) {
          var t = K(e);
          return (e.setAttribute('stroke-dasharray', t), t);
        }),
        (pe.stagger = function (e, t) {
          void 0 === t && (t = {});
          var n = t.direction || 'normal',
            o = t.easing ? S(t.easing) : null,
            r = t.grid,
            a = t.axis,
            i = t.from || 0,
            s = 'first' === i,
            l = 'center' === i,
            c = 'last' === i,
            d = x.arr(e),
            u = d ? parseFloat(e[0]) : parseFloat(e),
            p = d ? parseFloat(e[1]) : 0,
            m = q(d ? e[1] : e) || 0,
            w = t.start || 0 + (d ? u : 0),
            h = [],
            g = 0;
          return function (e, t, f) {
            if (
              (s && (i = 0),
              l && (i = (f - 1) / 2),
              c && (i = f - 1),
              !h.length)
            ) {
              for (var b = 0; b < f; b++) {
                if (r) {
                  var A = l ? (r[0] - 1) / 2 : i % r[0],
                    v = l ? (r[1] - 1) / 2 : Math.floor(i / r[0]),
                    y = A - (b % r[0]),
                    x = v - Math.floor(b / r[0]),
                    C = Math.sqrt(y * y + x * x);
                  ('x' === a && (C = -y), 'y' === a && (C = -x), h.push(C));
                } else h.push(Math.abs(i - b));
                g = Math.max.apply(Math, h);
              }
              (o &&
                (h = h.map(function (e) {
                  return o(e / g) * g;
                })),
                'reverse' === n &&
                  (h = h.map(function (e) {
                    return a ? (e < 0 ? -1 * e : -e) : Math.abs(g - e);
                  })));
            }
            return (
              w + (d ? (p - u) / g : u) * (Math.round(100 * h[t]) / 100) + m
            );
          };
        }),
        (pe.timeline = function (e) {
          void 0 === e && (e = {});
          var t = pe(e);
          return (
            (t.duration = 0),
            (t.add = function (n, o) {
              var r = ce.indexOf(t),
                a = t.children;
              function i(e) {
                e.passThrough = !0;
              }
              r > -1 && ce.splice(r, 1);
              for (var s = 0; s < a.length; s++) i(a[s]);
              var l = N(n, D(g, e));
              l.targets = l.targets || e.targets;
              var c = t.duration;
              ((l.autoplay = !1),
                (l.direction = t.direction),
                (l.timelineOffset = x.und(o) ? c : R(o, c)),
                i(t),
                t.seek(l.timelineOffset));
              var d = pe(l);
              (i(d), a.push(d));
              var u = se(a, e);
              return (
                (t.delay = u.delay),
                (t.endDelay = u.endDelay),
                (t.duration = u.duration),
                t.seek(0),
                t.reset(),
                t.autoplay && t.play(),
                t
              );
            }),
            t
          );
        }),
        (pe.easing = S),
        (pe.penner = $),
        (pe.random = function (e, t) {
          return Math.floor(Math.random() * (t - e + 1)) + e;
        }));
      const he = pe;
      class ge extends HTMLElement {
        static get observedAttributes() {
          return [
            'note-id',
            'note-title',
            'note-body',
            'note-date',
            'is-archived',
          ];
        }
        connectedCallback() {
          (this.render(), this.animateIn());
        }
        attributeChangedCallback() {
          this.render();
        }
        animateIn() {
          he({
            targets: this.querySelector('.note-item'),
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600,
            easing: 'easeOutQuad',
          });
        }
        render() {
          const e = this.getAttribute('note-id') || '',
            t = this.getAttribute('note-title') || 'Untitled',
            n = this.getAttribute('note-body') || '',
            o = this.getAttribute('note-date') || '',
            r = 'true' === this.getAttribute('is-archived'),
            a = o ? this.formatDate(o) : '';
          ((this.innerHTML = `\n      <link rel="stylesheet" href="./styles/style.css">\n      <article class="note-item" data-note-id="${e}">\n        <div class="note-header">\n          <h3 class="note-title">${this.escapeHtml(t)}</h3>\n          <p class="note-date">${a}</p>\n        </div>\n        <p class="note-body">${this.escapeHtml(n)}</p>\n        <div class="note-actions">\n          ${r ? '<button class="btn btn-unarchive" data-action="unarchive">Batalkan Arsip</button>' : '<button class="btn btn-archive" data-action="archive">Arsipkan</button>'}\n          <button class="btn btn-delete" data-action="delete">Hapus</button>\n        </div>\n      </article>\n    `),
            this.attachActionListeners());
        }
        attachActionListeners() {
          const e = this.querySelector('.note-item'),
            t = e.dataset.noteId;
          e.addEventListener('click', (e) => {
            const n = e.target.dataset.action;
            n &&
              this.dispatchEvent(
                new CustomEvent('note-action', {
                  detail: { id: t, action: n },
                  bubbles: !0,
                  composed: !0,
                })
              );
          });
        }
        formatDate(e) {
          return new Date(e).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          });
        }
        escapeHtml(e) {
          const t = document.createElement('div');
          return ((t.textContent = e), t.innerHTML);
        }
      }
      (customElements.define('note-item', ge), n(366));
      const fe = [
          {
            id: 'notes-jT-jjsyz61J8XKiI',
            title: 'Welcome to Notes, Dimas!',
            body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
            createdAt: '2022-07-28T10:03:12.594Z',
            archived: !1,
          },
          {
            id: 'notes-aB-cdefg12345',
            title: 'Meeting Agenda',
            body: 'Discuss project updates and assign tasks for the upcoming week.',
            createdAt: '2022-08-05T15:30:00.000Z',
            archived: !1,
          },
          {
            id: 'notes-XyZ-789012345',
            title: 'Shopping List',
            body: 'Milk, eggs, bread, fruits, and vegetables.',
            createdAt: '2022-08-10T08:45:23.120Z',
            archived: !1,
          },
          {
            id: 'notes-1a-2b3c4d5e6f',
            title: 'Personal Goals',
            body: 'Read two books per month, exercise three times a week, learn a new language.',
            createdAt: '2022-08-15T18:12:55.789Z',
            archived: !1,
          },
          {
            id: 'notes-LMN-456789',
            title: 'Recipe: Spaghetti Bolognese',
            body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
            createdAt: '2022-08-20T12:30:40.200Z',
            archived: !1,
          },
          {
            id: 'notes-QwErTyUiOp',
            title: 'Workout Routine',
            body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
            createdAt: '2022-08-25T09:15:17.890Z',
            archived: !1,
          },
          {
            id: 'notes-abcdef-987654',
            title: 'Book Recommendations',
            body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
            createdAt: '2022-09-01T14:20:05.321Z',
            archived: !1,
          },
          {
            id: 'notes-zyxwv-54321',
            title: 'Daily Reflections',
            body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
            createdAt: '2022-09-07T20:40:30.150Z',
            archived: !1,
          },
          {
            id: 'notes-poiuyt-987654',
            title: 'Travel Bucket List',
            body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
            createdAt: '2022-09-15T11:55:44.678Z',
            archived: !1,
          },
          {
            id: 'notes-asdfgh-123456',
            title: 'Coding Projects',
            body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
            createdAt: '2022-09-20T17:10:12.987Z',
            archived: !1,
          },
          {
            id: 'notes-5678-abcd-efgh',
            title: 'Project Deadline',
            body: 'Complete project tasks by the deadline on October 1st.',
            createdAt: '2022-09-28T14:00:00.000Z',
            archived: !1,
          },
          {
            id: 'notes-9876-wxyz-1234',
            title: 'Health Checkup',
            body: 'Schedule a routine health checkup with the doctor.',
            createdAt: '2022-10-05T09:30:45.600Z',
            archived: !1,
          },
          {
            id: 'notes-qwerty-8765-4321',
            title: 'Financial Goals',
            body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
            createdAt: '2022-10-12T12:15:30.890Z',
            archived: !1,
          },
          {
            id: 'notes-98765-54321-12345',
            title: 'Holiday Plans',
            body: 'Research and plan for the upcoming holiday destination.',
            createdAt: '2022-10-20T16:45:00.000Z',
            archived: !1,
          },
          {
            id: 'notes-1234-abcd-5678',
            title: 'Language Learning',
            body: 'Practice Spanish vocabulary for 30 minutes every day.',
            createdAt: '2022-10-28T08:00:20.120Z',
            archived: !1,
          },
        ],
        be = [],
        Ae = 'https://notes-api.dicoding.dev/v2',
        ve = {
          async getNotes() {
            try {
              const e = await fetch(`${Ae}/notes`),
                t = await e.json();
              if ('success' === t.status) return t.data;
              throw new Error(t.message);
            } catch (e) {
              return (
                console.warn(
                  'Failed to fetch notes from API, using fallback data:',
                  e
                ),
                fe
              );
            }
          },
          async getArchivedNotes() {
            try {
              const e = await fetch(`${Ae}/notes/archived`),
                t = await e.json();
              if ('success' === t.status) return t.data;
              throw new Error(t.message);
            } catch (e) {
              return (
                console.warn(
                  'Failed to fetch archived notes from API, using fallback data:',
                  e
                ),
                be
              );
            }
          },
          async getNoteById(e) {
            try {
              const t = await fetch(`${Ae}/notes/${e}`),
                n = await t.json();
              if ('success' === n.status) return n.data;
              throw new Error(n.message);
            } catch (e) {
              throw new Error(`Failed to fetch note: ${e.message}`);
            }
          },
          async createNote(e, t) {
            try {
              const n = await fetch(`${Ae}/notes`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ title: e, body: t }),
                }),
                o = await n.json();
              if ('success' === o.status) return o.data;
              throw new Error(o.message);
            } catch (e) {
              throw new Error(`Failed to create note: ${e.message}`);
            }
          },
          async archiveNote(e) {
            try {
              const t = await fetch(`${Ae}/notes/${e}/archive`, {
                  method: 'POST',
                }),
                n = await t.json();
              if ('success' === n.status) return n.message;
              throw new Error(n.message);
            } catch (e) {
              throw new Error(`Failed to archive note: ${e.message}`);
            }
          },
          async unarchiveNote(e) {
            try {
              const t = await fetch(`${Ae}/notes/${e}/unarchive`, {
                  method: 'POST',
                }),
                n = await t.json();
              if ('success' === n.status) return n.message;
              throw new Error(n.message);
            } catch (e) {
              throw new Error(`Failed to unarchive note: ${e.message}`);
            }
          },
          async deleteNote(e) {
            try {
              const t = await fetch(`${Ae}/notes/${e}`, { method: 'DELETE' }),
                n = await t.json();
              if ('success' === n.status) return n.message;
              throw new Error(n.message);
            } catch (e) {
              throw new Error(`Failed to delete note: ${e.message}`);
            }
          },
        };
      var ye = n(465),
        xe = n.n(ye);
      const Ce = {
        success(e) {
          xe().fire({
            icon: 'success',
            title: 'Berhasil!',
            text: e,
            timer: 2e3,
            showConfirmButton: !1,
            toast: !0,
            position: 'top-end',
          });
        },
        error(e) {
          xe().fire({
            icon: 'error',
            title: 'Oops...',
            text: e,
            confirmButtonColor: '#525dc0ff',
          });
        },
        confirm: (e, t) =>
          xe().fire({
            title: e,
            text: t,
            icon: 'warning',
            showCancelButton: !0,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#525dc0ff',
            confirmButtonText: 'Ya, lanjutkan!',
            cancelButtonText: 'Batal',
          }),
      };
      class Ee {
        constructor() {
          ((this.activeNotesList = document.querySelector('#activeNotes')),
            (this.archivedNotesList = document.querySelector('#archivedNotes')),
            (this.noteForm = document.querySelector('note-form')),
            (this.loadingIndicator =
              document.querySelector('loading-indicator')),
            (this.toggleArchivedBtn =
              document.querySelector('#toggleArchived')),
            (this.toggleActiveBtn = document.querySelector('#toggleActive')),
            this.init());
        }
        async init() {
          (this.attachEventListeners(), await this.loadNotes());
        }
        attachEventListeners() {
          (document.addEventListener('note-submit', async (e) => {
            await this.handleNoteSubmit(e.detail);
          }),
            document.addEventListener('note-action', async (e) => {
              await this.handleNoteAction(e.detail);
            }),
            this.toggleArchivedBtn.addEventListener('click', () => {
              this.showArchivedView();
            }),
            this.toggleActiveBtn.addEventListener('click', () => {
              this.showActiveView();
            }));
        }
        showArchivedView() {
          ((document.querySelector(
            '.notes-section:not(.archived-section)'
          ).style.display = 'none'),
            (document.querySelector('.archived-section').style.display =
              'block'));
        }
        showActiveView() {
          ((document.querySelector(
            '.notes-section:not(.archived-section)'
          ).style.display = 'block'),
            (document.querySelector('.archived-section').style.display =
              'none'));
        }
        async loadNotes() {
          try {
            this.loadingIndicator.show();
            const [e, t] = await Promise.all([
              ve.getNotes(),
              ve.getArchivedNotes(),
            ]);
            (this.activeNotesList.setNotes(e),
              this.archivedNotesList.setNotes(t));
          } catch (e) {
            Ce.error(e.message);
          } finally {
            this.loadingIndicator.hide();
          }
        }
        async handleNoteSubmit({ title: e, body: t }) {
          try {
            (this.loadingIndicator.show(),
              await ve.createNote(e, t),
              Ce.success('Catatan berhasil ditambahkan!'),
              await this.loadNotes());
          } catch (e) {
            Ce.error(e.message);
          } finally {
            this.loadingIndicator.hide();
          }
        }
        async handleNoteAction({ id: e, action: t }) {
          'delete' === t
            ? (
                await Ce.confirm(
                  'Hapus Catatan',
                  'Anda yakin ingin menghapus catatan ini?'
                )
              ).isConfirmed && (await this.deleteNote(e))
            : 'archive' === t
              ? await this.archiveNote(e)
              : 'unarchive' === t && (await this.unarchiveNote(e));
        }
        async deleteNote(e) {
          try {
            (this.loadingIndicator.show(),
              await ve.deleteNote(e),
              Ce.success('Catatan berhasil dihapus!'),
              await this.loadNotes());
          } catch (e) {
            Ce.error(e.message);
          } finally {
            this.loadingIndicator.hide();
          }
        }
        async archiveNote(e) {
          try {
            (this.loadingIndicator.show(),
              await ve.archiveNote(e),
              Ce.success('Catatan berhasil diarsipkan!'),
              await this.loadNotes());
          } catch (e) {
            Ce.error(e.message);
          } finally {
            this.loadingIndicator.hide();
          }
        }
        async unarchiveNote(e) {
          try {
            (this.loadingIndicator.show(),
              await ve.unarchiveNote(e),
              Ce.success('Catatan berhasil dibatalkan dari arsip!'),
              await this.loadNotes());
          } catch (e) {
            Ce.error(e.message);
          } finally {
            this.loadingIndicator.hide();
          }
        }
      }
      document.addEventListener('DOMContentLoaded', () => {
        new Ee();
      });
    })());
})();
//# sourceMappingURL=bundle.js.map
