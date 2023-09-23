import React from 'react';

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="animate-fade-in text-white text-3xl font-semibold">
        Loading...
      </div>
    </div>
  );
};

export default Loading;
