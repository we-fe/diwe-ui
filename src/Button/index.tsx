import React from 'react';

import './index.less';

export default ({
  type,
  size,
  onClick,
  children,
}: {
  type: string;
  size: string;
  onClick?: Function;
  children: any;
}) => {
  const onHandleClick = () => {
    if (onClick) onClick();
  };
  return (
    <button onClick={onHandleClick} className={`we-btn we-btn-${type}`}>
      {children}
    </button>
  );
};
