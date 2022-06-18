import React from 'react';

export const Container = ({ children }) => {
  return (
    <div className="w-screen h-screen grid grid-cols-[1fr_1fr_1fr] grid-rows-[50px_1fr_1fr_50px] box-border gap-2.5 bg-gray-300">
      {children}
    </div>
  );
};
