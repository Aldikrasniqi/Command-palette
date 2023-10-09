import { Dialog, Combobox, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { SearchCircleOutline } from 'heroicons-react';
export default function CommandPalette({ data }) {
  const [isOpen, setIspen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    function onkeydown(e) {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIspen(!isOpen);
      }
    }
    window.addEventListener('keydown', onkeydown);
    return () => {
      window.removeEventListener('keydown', onkeydown);
    };
  }, [isOpen]);

  const filteredProjects = query
    ? data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];
  return (
    <Transition.Root
      show={isOpen}
      as={Fragment}
      afterLeave={() => {
        setQuery('');
      }}
    >
      <Dialog
        onClose={setIspen}
        className="fixed inset-0 p-4 pt-[25vh] overflow-y-auto m-3 sm:w"
      >
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opcaity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500/75 opacity-30" />
        </Transition.Child>
        <Combobox
          as="div"
          onChange={(data) => {
            setIspen(false);

          }}
          className="relative max-w-xl mx-auto bg-white rounded-xl shadow-2xl ring-1 ring-black/5 divide-y divide-gray-200 overflow-hidden"
        >
          <div className="flex items-center px-4">
            <SearchCircleOutline className="h-6 w-6 text-gray-500 " />
            <Combobox.Input
              onChange={(e) => {
                setQuery(e.target.value);
                console.log('onChange');
              }}
              className="w-full bg-transparent border-0 text-sm focus:ring-0 text-gray-800 placeholder-gray-900 outline-none h-12 px-2"
              placeholder="Search for a team or project"
            />
          </div>

          {filteredProjects.length > 0 && (
            <Combobox.Options
              static
              className="py-4 text-sm max-h-40 overflow-y-auto"
            >
              {filteredProjects.map((item) => (
                <Combobox.Option key={item.id} value={item}>
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
                        {item.title}
                      </span>
                      <span
                        className={`${
                          active ? 'text-indigo-200' : 'text-gray-400'
                        }`}
                      >
                        in {item.team}
                      </span>
                    </div>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
          {query && filteredProjects.length === 0 && (
            <p className="p-4 text-sm text-gray-500">
              No results found for <span className="font-medium">{query}</span>
            </p>
          )}
        </Combobox>
      </Dialog>
    </Transition.Root>
  );
}
