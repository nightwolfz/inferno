(function() {
	var t = InfernoCreateElement;
    var Router = InfernoRouter.Router;
    var Route = InfernoRouter.Route;
    var Link = InfernoRouter.Link;
    var browserHistory = InfernoRouter.browserHistory;

    function App({ children }) {
        return t('div', null,
            t('h1', null, 'Routing Example'),
            t('p', null, `Below are the sub-children components for this "app", 
                they will show and hide depending on the route. This example uses hashbangs only.`),
            t('p', null, 'Some links:'),
            t('ul', null,
                t('li', null, t(Link, { to: '/foo' }, 'Route to foo')),
                t('li', null, t(Link, { to: '/bar' }, 'Route to bar'))
            ),
            t('div', null, children ? children : null)
        );
    }

    function Foo() {
        return (
            t('div', null,
                t('h2', null, 'I am Foo'),
                t('p', null, 'I should only appear when you visit #!/foo')
            )
        );
    }

    function Bar() {
        return (
            t('div', null,
                t('h2', null, 'I am Bar'),
                t('p', null, 'I should only appear when you visit #!/bar')
            )
        );
    }

	InfernoDOM.render((
        t(Router, { history: browserHistory, component: App, hashbang: true },
            t(Route, { path: '/foo', component: Foo }),
            t(Route, { path: '/bar', component: Bar })
        )
    ), document.getElementById('app'));
})();