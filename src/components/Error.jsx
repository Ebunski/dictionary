const ErrorComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-lg max-w-md">
        <div className="flex items-center">
          <div className="py-1">
            <svg
              className="fill-current h-6 w-6 text-red-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-3a1 1 0 11-2 0 1 1 0 012 0zm0-9a1 1 0 011 1v4a1 1 0 11-2 0V7a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="font-semibold">Word not found</p>
            <p className="text-sm">
              Sorry, the word you're looking for could not be found in the
              dictionary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
