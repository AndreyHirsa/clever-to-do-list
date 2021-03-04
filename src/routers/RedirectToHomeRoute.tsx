
import { Route, Redirect } from 'react-router';
import { IRoute } from '../interfaces/IRoute';
import { useUserState } from '../selectors/stateSelectors';

export const RedirectHomeRoute = ({
    component,
    path,
    exact,
}: IRoute): JSX.Element => {
    const user = useUserState();
    return user ? (
        <Route path={path} exact={exact} component={component} />
    ) : (
        <Redirect to="/home_page" />
    );
};