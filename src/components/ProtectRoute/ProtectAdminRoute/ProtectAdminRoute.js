import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
function ProtectAdminRoute({ user, token, children }) {
  const [show, setShow] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    if (token === undefined) {
      nav('/admin/signin');
    } else {
      if (user) {
        console.log(user.role);
        if (user.role === 1) {
          nav('/signin');
          //       setShow(true);
          //     } else {
          //       <Navigate to={'/signin'} />;
        }
      }
    }
  }, [token, user]);

  // if (token === undefined) {
  //   return <Navigate to={'/admin/signin'} />;
  // } else {
  // if (user) {
  //   if (user.role === 2) {
  //     return children;
  //   } else {
  //     return <Navigate to={'/signin'} />;
  //   }
  // }
  // }
  return children;
}
export default ProtectAdminRoute;
