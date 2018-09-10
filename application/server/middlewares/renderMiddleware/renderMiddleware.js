import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import createMemoryHistory from 'history/createMemoryHistory';
import makeCreateStore from '../../../client/services/store/makeCreateStore';
import renderHtml from './renderHtml';
import routes from '../../../client/route';

const APP_SSR = process.env.APP_SSR === 'true';

export default (req, res) => {
  const history = createMemoryHistory();
  history.replace(req.originalUrl);

  const store = makeCreateStore({ history })();

  const app = renderToString(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
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
    </Provider>
  );

  const page = renderHtml(
    app,
    req,
  );

  res.send(page);
};
