import { useEffect, useState } from 'react';
import { Modal } from '~/components/Modal';
import CustomAxios from '~/config/api';
import useDebounce from '~/hooks/useDebounce';

const limit = 5;

function UserPage() {
  // const accessToken = localStorage.getItem();
  // axios.interceptors.request.use()
  const [toggleModalCreate, setToggleModalCreate] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  console.log(firstName);

  const [users, setUser] = useState([]);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [offSet, setOffSet] = useState(0);
  const [total, setTotal] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const debounced = useDebounce(searchValue, 600);

  const totalPage = Math.ceil(total / limit);

  useEffect(() => {
    getUsers();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let page = [];
    for (let i = 0; i < totalPage; i++) {
      page.push(i);
    }
    setPages(page);

    // eslint-disable-next-line
  }, [users]);

  useEffect(() => {
    if (!debounced.trim()) {
      getUsers();
    } else {
      searchUser(debounced);
    }
    // eslint-disable-next-line
  }, [debounced, offSet]);

  const tokens = JSON.parse(localStorage.getItem('userInfo'));

  const getUsers = async () => {
    const res = await CustomAxios.get('/api/v1/users/', {
      headers: { 'x-accesstoken': tokens.accessToken },
      params: {
        limit: limit,
        offset: offSet,
      },
    });
    setUser(res.data.rows);
    setTotal(res.data.count);
  };
  const deleteUser = async (id) => {
    try {
      await CustomAxios.delete(`/api/v1/users/${id}`, { headers: { 'x-accesstoken': tokens.accessToken } });
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const searchUser = async (value) => {
    try {
      const res = await CustomAxios.get(`/api/v1/users/search/${value}`, {
        headers: { 'x-accesstoken': tokens.accessToken },
      });
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchUser = (e) => {
    setSearchValue(e.target.value);
  };

  const handlePaging = (currentPosition) => {
    setOffSet(currentPosition * limit);
    setCurrentPage(currentPosition);
  };
  const handlePreNext = (status) => {
    if (status === 'pre') {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    } else {
      if (currentPage < total / limit - 1) {
        setCurrentPage(currentPage + 1);
      }
    }
  };

  const handleSubmitCreate = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(address);
    console.log(email);
    console.log(phone);

    setFirstName('');
    setLastName('');
    setAddress('');
    setEmail('');
    setPhone('');
  };
  return (
    <div className=" flex flex-1 justify-center items-center p-10 ">
      {toggleModalCreate && (
        <Modal
          inputs={[
            {
              lable: 'First Name',
              value: firstName,
              setValue: setFirstName,
            },
            {
              lable: 'Last Name',
              value: lastName,
              setValue: setLastName,
            },
            {
              lable: 'Address',
              value: address,
              setValue: setAddress,
            },
            {
              lable: 'Email',
              value: email,
              setValue: setEmail,
            },
            {
              lable: 'Phone',
              value: phone,
              setValue: setPhone,
            },
          ]}
          toggleModal={() => {
            setToggleModalCreate(false);
          }}
          onCLickSubmit={handleSubmitCreate}
        />
      )}
      <div className=" w-full relative shadow-md sm:rounded-lg ">
        <div className="flex justify-between">
          <div className="mb-3 xl:w-96 justify-start">
            <div className="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
              <input
                value={searchValue}
                onChange={handleSearchUser}
                type="search"
                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search User"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
            </div>
          </div>

          <div className=" justify-end">
            <div className="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
              <button
                onClick={() => setToggleModalCreate(true)}
                type="button"
                class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Create
              </button>
            </div>
          </div>
        </div>
        <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {/* <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th> */}
              <th scope="col" className="py-3 px-6">
                First name
              </th>
              <th scope="col" className="py-3 px-6">
                Last name
              </th>
              <th scope="col" className="py-3 px-6">
                Address
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                Phone
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                {/* <td className="p-4 w-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-table-search-1" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td> */}
                {/* <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.first_name}
                </th> */}
                <td className="py-4 px-6">{user.firstName}</td>
                <td className="py-4 px-6">{user.lastName}</td>
                <td className="py-4 px-6">{user.address}</td>
                <td className="py-4 px-6">{user.email}</td>
                <td className="py-4 px-6">{user.phone}</td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <nav className="flex justify-between items-center pt-4 text-base" aria-label="Table navigation">
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Showing{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              {offSet + 1 + '-' + (offSet + limit > total ? total : offSet + limit)}{' '}
            </span>
            of <span className="font-semibold text-gray-900 dark:text-white">{total}</span>
          </span>
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <button
                onClick={() => handlePreNext('pre')}
                className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
            {pages.map((position) => (
              <li key={position}>
                <button
                  onClick={() => handlePaging(position)}
                  className={
                    currentPage === position
                      ? ' text-blue-600 bg-blue-50  py-2 px-3 leading-tight hover:bg-blue-100 hover:text-blue-700 border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                      : 'py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  }
                >
                  {position + 1}
                </button>
              </li>
            ))}

            <li>
              <button
                onClick={() => handlePreNext('next')}
                className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default UserPage;
