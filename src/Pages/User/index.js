import { useParams } from 'react-router-dom';
import { HomePage } from './HomePage';

function UserPages() {
  const { userRoute } = useParams();

  if (userRoute === '') return <HomePage />;
  // else if (adminRoute === 'products') return <ProductPage />;
  return <></>;
}

export default UserPages;
