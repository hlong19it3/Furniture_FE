import { useLayoutEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function SideBarItem({ content, url, Icon }) {
  const [active, setActive] = useState();
  const { adminRoute } = useParams();

  console.log(active);

  useLayoutEffect(() => {
    if (adminRoute === content.toLowerCase()) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [adminRoute]);

  return (
    <Link
      to={url}
      className={
        active === true
          ? 'bg-gray-400 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700'
          : 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
      }
    >
      {Icon}
      <span className="flex-1 ml-3 whitespace-nowrap">{content}</span>
    </Link>
  );
}

export default SideBarItem;
