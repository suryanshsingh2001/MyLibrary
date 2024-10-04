import { useEffect, useState } from "react";

const Dropdown = ({ label, options, value, onChange, className }) => {
  const [selected, setSelected] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (value) => {
    setSelected(options?.find((option) => option.value === value));
    setIsOpen(false);
    onChange && onChange(value);
  };

  useEffect(() => {
    setSelected(options?.find((option) => option.value === value));
  }, [value, options]);

  return (
    <div className={className || ''}>
      {label && (
        <label
          id="listbox-label"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="relative mt-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-[#ead9c6] focus:outline-none focus:ring-2 focus:ring-[#7b5e2d] sm:text-sm sm:leading-6"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
        >
          <span className="flex items-center">
            <span className="block truncate">{selected?.label}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <svg
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fillRule="evenodd"
                d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        <ul
          className={`${
            isOpen ? "opacity-100" : "opacity-0 h-0"
          } transition ease-in duration-100 absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
          tabIndex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          {/* <!--
                    Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

                    Highlighted: "bg-indigo-600 text-white", Not Highlighted: "text-gray-900"
                --> */}
          {options.map((option) => (
            <li
              key={option.value}
              className={`relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-[#ead9c6] hover:text-[#523f1b] text-gray-900`}
              id="listbox-option-0"
              role="option"
              onClick={() => handleChange(option.value)}
            >
              <div className="flex items-center">
                <span
                  className={`ml-3 block truncate ${
                    option.value === selected?.value
                      ? "font-semibold"
                      : "font-normal"
                  }`}
                >
                  {option.label}
                </span>
              </div>
              {option.value === selected?.value && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-#7b5e2d">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
