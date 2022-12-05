import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function ProtectAdminRoute({ user, token, children }) {
  const nav = useNavigate();

  useEffect(() => {
    if (token === undefined) {
      nav('/admin/signin');
    } else {
      if (user) {
        console.log(user.role);
        if (user.role === 1) {
          nav('/signin');
        }
        nav('/admin');
      }
    }
  }, [token, user]);

  return children;
}
export default ProtectAdminRoute;