import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UserProfile() {
  const [isOpen, setIspen] = useState(false);
  const togleDropdown = () => {
    setIspen(!isOpen);
    console.log('togleDropdown');
  };

  return (
    <>
      <div className=" flex flex-row items-center h-full justify-center mt-2 gap-2">
        <img
          src="https://i0.wp.com/theworkflowpro.com/wp-content/uploads/2022/05/wfp_logo_new.png?fit=311%2C310&ssl=1"
          alt="Workflow logo"
          width="50px"
        />
        <h1 className="text-2xl font-semibold font-body tracking-tight text-[#353333]">
          workflow
        </h1>
      </div>
      <div className="flex items-center justify-center space-x-4 m-4">
        <img
          id="avatarButton"
          type="button"
          onClick={togleDropdown}
          data-dropdown-toggle="userDropdown"
          data-dropdown-placement="bottom-start"
          class="w-10 h-10 rounded-full cursor-pointer"
          src="https://www.eclipsegroup.co.uk/wp-content/uploads/2020/03/Round-Profile-Picture-768x768-1.png"
          alt="Large avatar"
        />
        <div class="font-medium leading-3">
          <h2 className="text-sm">Aldi Krasniqi</h2>
          <span className="text-sm text-gray-600">@Aldikrasniqii</span>
          {/* add arrow up down icon */}
        </div>
        <div
          className="flex flex-col leading-none text-[#454b4b] cursor-pointer"
          onClick={togleDropdown}
        >
          <FontAwesomeIcon icon={['fas', 'angle-up']} className="ml-2" />
          <FontAwesomeIcon icon={['fas', 'angle-down']} className="ml-2" />
        </div>
      </div>

      {/* USER DROPDOWN */}

      {isOpen && (
        <div class="z-10 absolute  bg-white divide-y divide-gray-100 rounded-lg shadow w-52 ml-20 dark:bg-gray-700 dark:divide-gray-600">
          <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Aldi Krasniqi</div>
            <div class="font-medium truncate">aldikrasniqi@gmail.com</div>
          </div>
          <ul
            class=" text-sm text-gray-700 dark:text-gray-200 px-3 py-1.5 flex flex-col"
            aria-labelledby="avatarButton"
          >
            <Link to={'/#'}>Settings</Link>
            <Link to={'/#'}>Edit</Link>
            <Link to={'/#'}>test</Link>
          </ul>
          <div
            className="px-3 py-1.5 text-sm text-white cursor-pointer"
            onClick={togleDropdown}
          >
            Exit
          </div>
        </div>
      )}
    </>
  );
}

export default UserProfile;
