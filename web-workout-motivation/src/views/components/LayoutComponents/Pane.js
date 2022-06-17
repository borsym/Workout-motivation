import React from 'react';

export const Pane = ({ children, styleling }) => {
  return <div className={styleling}>{children}</div>;
};
