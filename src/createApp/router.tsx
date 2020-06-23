import {
  Link,
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import { IRoute } from './interface';
import  React from 'react';
import loadable from '@loadable/component'

export const createRoutes = (routes: IRoute[]) => {
  return (
    <Router>
      <Switch>
        {
          routes.map(route => {
            const { path, component, redirect } = route;

            if (redirect) {
              return (
                <Redirect to={redirect} key={path}/>
              )
            }

            if (component) {
              const Page = loadable(component)

              return (
                <Route path={path} key={path}>
                  <Page />
                </Route>
              )
            }

            return null;
          })
        }
      </Switch>
    </Router>
  )
}

export {
  Router,
  Switch,
  Route,
  Link,
}