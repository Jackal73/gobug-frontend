import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { fetchNewAccessJWT } from '../../api/userApi';
import { DefaultLayout } from '../../layout/DefaultLayout';
import { loginSuccess } from '../login/loginSlice';

export const PrivateRoute = ({children, ...rest}) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);

  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await fetchNewAccessJWT();
      result && dispatch(loginSuccess());
    };

    !sessionStorage.getItem('accessJWT') && localStorage.getItem('tikkit') && updateAccessJWT();

    !isAuth && sessionStorage.getItem('accessJWT') && dispatch(loginSuccess());
  }, [dispatch, isAuth]);

  return (
    <Route
        {...rest}
        render={() =>
          isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to='/'/>
        }
    />
  );
};
