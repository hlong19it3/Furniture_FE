import { useParams } from 'react-router-dom';
import { UserPage } from './Admin/UsersPage';

function AdminPages() {
  const { adminRoute } = useParams();

  if (adminRoute === 'users') return <UserPage />;
  else if (adminRoute === 'products') return <UserPage />;
  else if (adminRoute === 'orders') return <UserPage />;
  else if (adminRoute === 'comments') return <UserPage />;
  return <></>;
}

export default AdminPages;
