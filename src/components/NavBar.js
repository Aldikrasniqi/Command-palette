import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Combobox } from '@headlessui/react';
import { SearchCircleOutline } from 'heroicons-react';
import { Link } from 'react-router-dom';
library.add(far, fas, fab);
const people = [
  'Durward Reynolds',
  'Kenton Towne',
  'Therese Wunsch',
  'Benedict Kessler',
  'Katelyn Rohan',
];

function NavBar() {
  const [isOpen, setIspen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const togleDropdown = () => {
    setIspen(!isOpen);
    console.log('togleDropdown');
  };

  const [query, setQuery] = useState('');

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <>
      <div className="w-1/6 bg-[#f2f4f4] font-body">
        <nav className="navbar navbar-expand-lg navbar-dark">
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
          <div className="m-3">
            {/* USER DROPDOWN */}
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
              <div className="flex flex-col leading-none text-[#454b4b] cursor-pointer" onClick={togleDropdown}>
                <FontAwesomeIcon icon={['fas', 'angle-up']} className="ml-2" />
                <FontAwesomeIcon
                  icon={['fas', 'angle-down']}
                  className="ml-2"
                />
              </div>
            </div>
 
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
                <div className="px-3 py-1.5 text-sm text-white cursor-pointer" onClick={togleDropdown}>Exit</div>
              </div>
            )}
            <div className="font-body">
              {/* input sections */}
              <Combobox
                as="div"
                className="relative mt-8 max-w-xl mx-auto bg-white rounded-xl shadow-2xl ring-1 ring-black/5 divide-y divide-gray-200 overflow-hidden"
              >
                <div className="flex items-center p-2">
                  <SearchCircleOutline className="h-6 w-6 text-gray-500 " />
                  <Combobox.Input
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search for people"
                    className="w-full bg-transparent border-0 text-sm focus:ring-0 text-gray-800 placeholder-gray-900 outline-none h-6 px-2"
                  />
                </div>
                <Combobox.Options className="py-4 text-sm max-h-40 overflow-y-auto">
                  {filteredPeople.map((person) => (
                    <Combobox.Option key={person} value={person}>
                      {({ active }) => (
                        <div
                          className={`py-2 px-4 space-x-1 ${
                            active ? 'bg-indigo-600' : 'bg-white'
                          }`}
                        >
                          <span
                            className={`font-medium ${
                              active ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {person}
                          </span>
                        </div>
                      )}
                    </Combobox.Option>
                  ))}
                  {query && filteredPeople.length === 0 && (
                    <p className="p-1 text-sm text-gray-500">
                      No results found for{' '}
                      <span className="font-medium">{query}</span>
                    </p>
                  )}
                </Combobox.Options>
              </Combobox>
            </div>
            <div className="flex flex-col justify-center gap-2 font-body">
              {/* if home is active bg-gray-900 */}
              {activeTab === 'home' ? (
                <>
                  <div className="mt-10 w-full bg-gray-50 p-1.5 rounded-sm">
                    <FontAwesomeIcon
                      icon={['fas', 'home']}
                      className="mr-2 text-gray-700"
                    />
                    <Link to="/" className="text-sm text-gray-700">
                      Home
                    </Link>
                  </div>
                  <div className="w-full p-1.5 rounded-sm">
                    <FontAwesomeIcon
                      icon={['fas', 'tasks']}
                      className="mr-2 text-gray-700"
                    />
                    <Link to="/" className="text-sm text-gray-700">
                      My tasks
                    </Link>
                  </div>
                  <div className="w-full p-1.5 rounded-sm">
                    <FontAwesomeIcon
                      icon={['fas', 'calendar']}
                      className="mr-2 text-gray-700"
                    />
                    <Link to="/" className="text-sm text-gray-700">
                      Recent
                    </Link>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <h3 className="text-gray-600 opacity-90 font-body font-semibold text-sm">
                TEAMS
              </h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <h3 className="text-gray-600 opacity-90 font-body font-semibold text-sm">
                  Design
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                <h3 className="text-gray-600 opacity-90 font-body font-semibold text-sm">
                  Development
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <h3 className="text-gray-600 opacity-90 font-body font-semibold text-sm">
                  Marketing
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                <h3 className="text-gray-600 opacity-90 font-body font-semibold text-sm">
                  Engineering
                </h3>
                </div>
            </div>
                      </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
