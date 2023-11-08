import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  let auth = localStorage.getItem('token') !== null

  return (
    auth ? <Outlet /> : <Navigate to="login" />
  );
}
  