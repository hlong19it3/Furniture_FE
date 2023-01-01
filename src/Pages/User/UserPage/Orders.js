import { useEffect, useState } from 'react';
import { Image } from '~/components/Image';
import CustomAxios from '~/config/api';
function Orders() {
  const [tabName, setTabName] = useState('Pending');
  const [orders, setOrders] = useState([]);
  const [ordersPending, setOrdersPending] = useState([]);
  const [ordersShipping, setOrdersShipping] = useState([]);
  const [ordersDelivered, setOrdersDelivered] = useState([]);
  // console.log(orders);
  const tabItems = [
    { title: 'Pending', onclick: () => setTabName('Pending'), badge: ordersPending.length },
    { title: 'Shipping', onclick: () => setTabName('Shipping'), badge: ordersShipping.length },
    { title: 'Delevired & Cancel', onclick: () => setTabName('Delevired & Cancel'), badge: ordersDelivered.length },
  ];
  useEffect(() => {
    handleShowPendingOrders();
    handleShowShippingOrders();
    handleShowDeliveredCancelOrders();
  }, []);
  useEffect(() => {
    if (tabName === tabItems[0].title) setOrders(ordersPending);
    else if (tabName === tabItems[1].title) setOrders(ordersShipping);
    else if (tabName === tabItems[2].title) setOrders(ordersDelivered);
  }, [tabName]);

  const handleShowPendingOrders = async () => {
    try {
      const pendingOrders = await CustomAxios.get('/api/v1/orders/pending-orders', {
        headers: {
          'x-accesstoken': JSON.parse(localStorage.getItem('userInfo')).accessToken,
        },
      });
      let pendingArr = [];
      pendingOrders.data.forEach(async (element) => {
        console.log(element.id);
        try {
          const res = await CustomAxios.get(`/api/v1/orders/order-detail/${element.id}`, {
            headers: { 'x-accesstoken': JSON.parse(localStorage.getItem('userInfo')).accessToken },
          });
          pendingArr.push(res.data);
          // console.log(res.data);
        } catch (error) {
          console.log(error);
        }
      });
      console.log(pendingArr);
      setOrdersPending(pendingOrders.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleShowShippingOrders = async () => {
    try {
      const shippingOrders = await CustomAxios.get('/api/v1/orders/shipping-orders', {
        headers: {
          'x-accesstoken': JSON.parse(localStorage.getItem('userInfo')).accessToken,
        },
      });
      setOrdersShipping(shippingOrders.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleShowDeliveredCancelOrders = async () => {
    try {
      const deliveredCancelOrders = await CustomAxios.get('/api/v1/orders/delivered-cancel-orders', {
        headers: {
          'x-accesstoken': JSON.parse(localStorage.getItem('userInfo')).accessToken,
        },
      });
      setOrdersDelivered(deliveredCancelOrders.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mb-5 w-full flex flex-col items-center">
      <div class="w-full flex justify-center  text-sm font-medium text-center text-gray-500  dark:text-gray-400 ">
        <div className="w-2/3 flex justify-around">
          {tabItems.map((tabItem, index) => (
            <button
              onClick={tabItem.onclick}
              className={
                tabItem.title === tabName
                  ? 'relative p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500'
                  : 'relative p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
              }
            >
              {tabItem.title}
              {tabItem.badge !== undefined && tabItem.title !== 'Delevired & Cancel' && (
                <span className="inline-flex absolute top-3 right-0 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white">
                  {tabItem.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full h-[600px] bg-slate-200 rounded-lg shadow-sm mt-3 overflow-y-auto text-base">
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex flex-col py-4 items-center">
            <div className="w-5/6 h-48 flex flex-col items-center border-2 border-slate-400 rounded-lg px-2 py-3 my-2">
              <div className="w-5/6 flex ">
                <div className="font-bold  whitespace-nowrap">Shipping address:</div>
                <div className="ml-2 text-ellipsis whitespace-nowrap  overflow-hidden">290 Mai Dang Chon asdađâ s</div>
              </div>
              <div className="w-5/6 flex">
                <div className="font-bold ">Phone number:</div>
                <div className="ml-2 ">290 Mai Dang Chon asdađâsdasdasdasdsdas</div>
              </div>
              <div className="w-5/6 flex">
                <Image
                  src="http://localhost:8080/Images\\Upload\\1671811073941.jpg"
                  className="w-24 h-24 rounded-md"
                  alt="img-product"
                />
                <div className="flex-1 flex flex-col ml-3">
                  <div className="text-ellipsis whitespace-nowrap  overflow-hidden">
                    Tên sản phẩmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                  </div>
                  <div className="">Quantity: 10</div>
                </div>
                <div className="flex">
                  <button className="underline font-bold text-lg">Detail</button>
                </div>
              </div>
              <div className="w-5/6 flex justify-center items-center">
                <div className=" font-bold text-lg">More...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
