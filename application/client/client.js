import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import makeCreateStore from './services/store/makeCreateStore';
import routes from './../client/route';

const history = createBrowserHistory();
const store = makeCreateStore({ history })(window.__INITIAL_STATE__);

ReactDOM.hydrate(
    <Provider store={store}>
        <Router history={history}>
            <Switch {...switchProps}>
            {
                routes.map((route, i) => (
                <Route
                    key={route.key || i}
                    path={route.path}
                    exact={route.exact}
                    strict={route.strict}
                    render={(props) => {
                    return (
                        <route.component
                            {...props}
                            route={route}
                        />
                    );
                    }}
                />
                ))
            }
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'),
);
