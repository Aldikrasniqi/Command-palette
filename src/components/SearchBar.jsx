import React from 'react';
import { Combobox } from '@headlessui/react';
import { SearchCircleOutline } from 'heroicons-react';
import { useState } from 'react';
import { people } from '../data/people';
function SearchBar() {
  const [query, setQuery] = useState('');
  const [selectedPerson, setSelectedPerson] = useState('');

  const filteredPeople = query
    ? people.filter((person) =>
        person.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];
  console.log(filteredPeople);
  return (
    <div className="font-body">
      {/* input sections */}
      <Combobox
        value={selectedPerson}
        onChange={(person) => setSelectedPerson(person.name)} 
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
            <Combobox.Option key={person.id} value={person}>
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
                    {person.name}
                  </span>
                </div>
              )}
            </Combobox.Option>
          ))}
          {query && filteredPeople.length === 0 && (
            <p className="p-1 text-sm text-gray-500">
              No results found for <span className="font-medium">{query}</span>
            </p>
          )}
        </Combobox.Options>
      </Combobox>
    </div>
  );
}

export default SearchBar;
