import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { InteractiveRoute, Spin } from './components';

const interactiveRoutes = [
  {
    key: 'signin',
    path: '/signIn',
    redirectPath: '/',
    component: lazy(() => import('./containers/SignIn')),
    exact: true,
    isAccepted: () => true,
  },
];

export default function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<Spin />}>
        <Switch>
          {interactiveRoutes.map(route => (
            <InteractiveRoute {...route} />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
}
