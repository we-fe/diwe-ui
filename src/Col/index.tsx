import React from 'react';

import './index.less';

export default (props: any) => {
  const { children, className, span, ...otherProps } = props;
  const cls = `we-col we-col-${span} ${className}`;
  return (
    <div className={cls} {...otherProps}>
      {children}
    </div>
  );
};
