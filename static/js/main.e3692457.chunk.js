(this['webpackJsonp@brain-juice/frontend'] =
  this['webpackJsonp@brain-juice/frontend'] || []).push([
  [0],
  {
    115: function (e, t, a) {
      e.exports = a(175);
    },
    170: function (e, t) {},
    175: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        r = a.n(n),
        c = a(7),
        l = a.n(c),
        o = a(47),
        i = a(17),
        m = a(224),
        u = a(226),
        s = a(24),
        f = a(10),
        p = a(211),
        E = a(213),
        g = a(55),
        d = a(209),
        h = Object(d.a)(function (e) {
          return {
            root: { flexGrow: 1 },
            menuButton: { marginRight: e.spacing(2) },
            link: { color: 'white', textDecoration: 'none' },
          };
        });
      var b = function () {
          var e = h();
          return r.a.createElement(
            'div',
            { className: e.root },
            r.a.createElement(
              p.a,
              { position: 'static' },
              r.a.createElement(
                E.a,
                null,
                r.a.createElement(
                  g.a,
                  { variant: 'h6' },
                  r.a.createElement(
                    s.b,
                    { to: '/', className: e.link },
                    'Brain Juice',
                  ),
                ),
              ),
            ),
          );
        },
        j = a(48),
        v = a(217),
        O = a(225),
        y = a(218),
        S = a(227),
        w = a(214),
        x = a(215),
        N = Object(d.a)({
          root: {
            minWidth: 275,
            maxWidth: '70vw',
            margin: 'auto',
            marginTop: '4em',
          },
          title: { fontSize: 16 },
        }),
        k = function (e) {
          var t = e.title,
            a = e.children,
            n = N();
          return r.a.createElement(
            w.a,
            { className: n.root },
            r.a.createElement(
              x.a,
              null,
              r.a.createElement(g.a, { component: 'h1', variant: 'h5' }, t),
              a,
            ),
          );
        },
        C = Object(d.a)(function (e) {
          return {
            paper: {
              marginTop: e.spacing(8),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            },
            avatar: {
              margin: e.spacing(1),
              backgroundColor: e.palette.secondary.main,
            },
            form: { width: '100%', marginTop: e.spacing(1) },
            submit: { margin: e.spacing(3, 0, 2) },
          };
        }),
        G = a(54),
        T = a.n(G);
      (T.a.defaults.baseURL = 'https://mind-juice.herokuapp.com/'),
        (T.a.defaults.headers.post['Content-Type'] = 'application/json');
      var W = T.a;
      var D = function () {
          var e = Object(f.f)(),
            t = C(),
            a = Object(n.useState)({ name: '' }),
            c = Object(i.a)(a, 2),
            l = c[0],
            m = c[1],
            u = Object(n.useState)(!1),
            s = Object(i.a)(u, 2),
            p = s[0],
            E = s[1],
            g = Object(n.useState)(''),
            d = Object(i.a)(g, 2),
            h = d[0],
            b = d[1];
          return r.a.createElement(
            k,
            { title: 'Starts a new game' },
            r.a.createElement(
              'form',
              {
                className: t.form,
                noValidate: !0,
                onSubmit: function (t) {
                  var a;
                  (t.preventDefault(), l.name) &&
                    (E(!0),
                    ((a = l),
                    W.post('/games', a).then(function (e) {
                      return e.data;
                    }))
                      .then(function (t) {
                        E(!1), e.push('/game/'.concat(t.id));
                      })
                      .catch(function () {
                        E(!1),
                          b('There was something wrong when starting the game');
                      }));
                },
              },
              r.a.createElement(O.a, {
                variant: 'outlined',
                margin: 'normal',
                required: !0,
                fullWidth: !0,
                id: 'name',
                label: 'Game name',
                name: 'name',
                error: !Boolean(l.name),
                value: l.name,
                onChange: function (e) {
                  var t = e.target,
                    a = t.name,
                    n = t.value;
                  m(Object(o.a)({}, l, Object(j.a)({}, a, n)));
                },
                autoFocus: !0,
              }),
              r.a.createElement(
                v.a,
                {
                  type: 'submit',
                  fullWidth: !0,
                  variant: 'contained',
                  color: 'primary',
                  className: t.submit,
                  disabled: p,
                },
                'Start game',
              ),
              h && r.a.createElement(S.a, { severity: 'error' }, h),
              p && r.a.createElement(y.a, { variant: 'query' }),
            ),
          );
        },
        B = a(102),
        I = a(219),
        F = a(216),
        J = a(220),
        P = a(221),
        q = a(222),
        R = a(223),
        z = a(101),
        A = a.n(z),
        L = a(100),
        M = a.n(L),
        U = Object(d.a)(function (e) {
          return {
            root: { display: 'flex', alignItems: 'center' },
            gameContainer: {
              padding: e.spacing(4),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '90vh',
            },
          };
        }),
        V = function (e) {
          var t = e.onStartGame,
            a = e.canStart,
            n = window.location.href;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              g.a,
              { variant: 'h5' },
              'We are waiting for the players to join',
            ),
            r.a.createElement(
              'p',
              null,
              r.a.createElement('img', {
                src: '/imgs/cat.gif',
                alt: 'Cat gif',
              }),
            ),
            r.a.createElement(
              'p',
              null,
              'You can share this link with your friends to join ',
              r.a.createElement('b', null, n),
            ),
            r.a.createElement(
              'p',
              null,
              r.a.createElement(
                v.a,
                {
                  type: 'button',
                  fullWidth: !0,
                  variant: 'contained',
                  color: 'primary',
                  disabled: a,
                  onClick: t,
                },
                'Start the game',
              ),
            ),
          );
        },
        Y = function () {
          return r.a.createElement('div', null, 'Game has started');
        },
        H = 'player-connected',
        K = 'players',
        Q = 'join',
        X = 'game-start',
        Z = M()('https://mind-juice.herokuapp.com/'),
        $ = function () {
          var e = U(),
            t = Object(f.g)().id,
            a = Object(n.useState)(!1),
            c = Object(i.a)(a, 2),
            l = c[0],
            o = c[1],
            m = Object(n.useState)(!1),
            u = Object(i.a)(m, 2),
            s = u[0],
            p = u[1],
            E = Object(n.useState)([]),
            d = Object(i.a)(E, 2),
            h = d[0],
            b = d[1],
            j = Object(n.useState)({}),
            v = Object(i.a)(j, 2),
            O = v[0],
            y = v[1],
            S = Object(n.useState)(''),
            w = Object(i.a)(S, 2),
            x = (w[0], w[1]);
          function N() {
            Z.emit(X, O);
          }
          Object(n.useEffect)(
            function () {
              o(!0),
                Z.on(K, function (e) {
                  console.log('Players connected', e), b(e);
                }),
                Z.on(H, function (e) {
                  console.log('New player connected'),
                    b(function (t) {
                      return [].concat(Object(B.a)(t), [e]);
                    });
                }),
                Z.on(X, function () {
                  console.log('Game has started'), p(!0);
                }),
                (function (e) {
                  return W.get(''.concat('/games', '/').concat(e)).then(
                    function (e) {
                      return e.data;
                    },
                  );
                })(t)
                  .then(function (e) {
                    o(!1), y(e);
                    var t = 'Player ' + new Date().getTime();
                    x(t), Z.emit(Q, { game: e, player: { name: t } });
                  })
                  .catch(function () {
                    o(!1);
                  });
            },
            [t],
          );
          var k = function () {
            window.location.href;
            return r.a.createElement(
              I.a,
              { container: !0, spacing: 2 },
              r.a.createElement(
                I.a,
                { item: !0, xs: 3 },
                r.a.createElement(g.a, { variant: 'h5' }, O.name),
                r.a.createElement(
                  F.a,
                  null,
                  h.map(function (e) {
                    return r.a.createElement(
                      r.a.Fragment,
                      { key: e.name },
                      r.a.createElement(
                        J.a,
                        { button: !0 },
                        r.a.createElement(
                          P.a,
                          null,
                          r.a.createElement(A.a, null),
                        ),
                        r.a.createElement(q.a, { primary: e.name }),
                      ),
                      r.a.createElement(R.a, null),
                    );
                  }),
                ),
              ),
              r.a.createElement(
                I.a,
                { item: !0, xs: 9, className: e.gameContainer },
                s
                  ? r.a.createElement(Y, null)
                  : r.a.createElement(V, {
                      onStartGame: N,
                      canStart: h.length < 2,
                    }),
              ),
            );
          };
          return r.a.createElement(
            'div',
            { className: e.root },
            l || r.a.createElement(k, null),
          );
        },
        _ = Object(d.a)(function (e) {
          return {
            content: { padding: e.spacing(5) },
            item: { textAlign: 'center' },
          };
        });
      var ee = function () {
          var e = _();
          return r.a.createElement(
            k,
            { title: 'Choose an option' },
            r.a.createElement(
              I.a,
              { container: !0, className: e.content },
              r.a.createElement(
                I.a,
                { item: !0, xs: 6, className: e.item },
                r.a.createElement(
                  v.a,
                  {
                    variant: 'contained',
                    color: 'primary',
                    component: s.b,
                    to: '/start',
                  },
                  'Start a game',
                ),
              ),
              r.a.createElement(
                I.a,
                { item: !0, xs: 6, className: e.item },
                r.a.createElement(
                  v.a,
                  {
                    variant: 'contained',
                    color: 'secondary',
                    component: s.b,
                    to: '/enter',
                  },
                  'Enter a game',
                ),
              ),
            ),
          );
        },
        te = { game: { name: '' }, players: [] },
        ae = n.createContext({
          state: te,
          setState: function (e) {
            return e;
          },
        });
      var ne = function () {
        var e = Object(n.useState)(te),
          t = Object(i.a)(e, 2),
          a = t[0],
          c = t[1];
        return r.a.createElement(
          s.a,
          null,
          r.a.createElement(
            ae.Provider,
            {
              value: {
                setState: function (e) {
                  c(Object(o.a)({}, a, {}, e));
                },
                state: a,
              },
            },
            r.a.createElement(m.a, null),
            r.a.createElement(b, null),
            r.a.createElement(
              u.a,
              null,
              r.a.createElement(
                f.c,
                null,
                r.a.createElement(
                  f.a,
                  { path: '/game/:id' },
                  r.a.createElement($, null),
                ),
                r.a.createElement(
                  f.a,
                  { path: '/start' },
                  r.a.createElement(D, null),
                ),
                r.a.createElement(
                  f.a,
                  { path: '/' },
                  r.a.createElement(ee, null),
                ),
              ),
            ),
          ),
        );
      };
      l.a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(ne, null)),
        document.getElementById('root'),
      );
    },
  },
  [[115, 1, 2]],
]);
//# sourceMappingURL=main.e3692457.chunk.js.map
