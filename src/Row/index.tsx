import React from 'react';

import './index.less';

export default (props: any) => {
  const { children, className, ...otherProps } = props;
  const cls = `we-row ${className}`;
  return (
    <div className={cls} {...otherProps}>
      {children}
    </div>
  );
};
