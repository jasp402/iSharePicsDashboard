import React, { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from 'layout/Layout';
import RouteIdentifier from 'routing/components/RouteIdentifier';
import { getRoutes } from 'routing/helper';
import routesAndMenuItems from 'routes.js';
import Loading from 'components/loading/Loading';
import { setCurrentUser, sign, logout } from 'auth/authSlice';
import Login from './views/pages/authentication/Login';
import { auth, onAuthStateChanged } from './firebase';
import { USER_ROLE } from './constants';

const App = () => {
  const { currentUser, isLogin } = useSelector((state) => state.auth);
  const { isLogin: loginStatus } = useSelector(sign);
  const dispatch = useDispatch();

  const routes = useMemo(() => getRoutes({ data: routesAndMenuItems, isLogin, userRole: currentUser?.role }), [isLogin, currentUser]);

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          setCurrentUser({
            name: userAuth.displayName,
            thumb: userAuth.photoURL,
            role: USER_ROLE.Admin,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  if (!loginStatus) {
    return <Login />;
  }

  if (routes) {
    return (
      <Layout>
        <RouteIdentifier routes={routes} fallback={<Loading />} />
      </Layout>
    );
  }

  return <></>;
};

export default App;
