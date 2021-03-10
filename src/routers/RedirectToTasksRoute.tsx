import { Route, Redirect } from 'react-router';
import React from 'react';
import { IRoute } from 'interfaces/IRoute';
import { useUserState } from 'selectors/stateSelectors';

export const RedirectToTasksRoute = ({
  component,
  path,
  exact,
}: IRoute): JSX.Element => {
  const user = useUserState();
  return user ? (
    <Redirect to="/tasks" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};
