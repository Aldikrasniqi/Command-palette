import React from 'react';
import '@fortawesome/fontawesome-free';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import TeamsComponent from './TeamsComponent';
import UserProfile from './UserProfile';
import SearchBar from './SearchBar';
import MenuPages from './MenuPages';
library.add(far, fas, fab);

function NavBar() {
 
  return (
    <>
      <div className="w-1/6 bg-[#f2f4f4] font-body">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <UserProfile />
          <div className="m-3">
            <SearchBar />
            <MenuPages />
            <TeamsComponent />
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
