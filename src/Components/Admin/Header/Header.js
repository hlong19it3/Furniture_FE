import React from 'react'
import {
  BellIcon,
  ChartBarIcon,
  InboxIcon,
  SearchIcon,
  UserCircleIcon,
} from '@heroicons/react/outline'

function Header() {
  return (
    <div className=" w-full py-6 bg-[#F0F5F5] items-center justify-between flex px-12">
      {/* search */}
      <div className="w-full lg:flex hidden space-x-4 items-center justify-start py-2   ">
        <SearchIcon className="w-4 h-4" />
        <input
          type="text"
          placeholder="Search anything..."
          className="bg-transparent outline-none"
        />
      </div>
      {/* logo */}
      <div className="items-center w-full justify-center flex space-x-4">
        <ChartBarIcon className="w-6 h-6" />
        <h1 className="text-xl text-gray-900 font-medium ">
          Furniture Store - Admin
        </h1>
      </div>
      {/* icons */}
      <div className="items-center justify-end space-x-6 flex w-full">
        <BellIcon className="header-icon w-5 h-5" />
        <InboxIcon className="header-icon w-5 h-5" />
        <UserCircleIcon className="header-icon w-5 h-5" />
      </div>
    </div>
  )
}

export default Header
