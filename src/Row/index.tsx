import React from 'react';
import classnames from 'classnames';

import './index.less';

export default (props: any) => {
  const { children, className = '', ...otherProps } = props;
  const cls: any = classnames({
    'we-row': true,
  });
  return (
    <div className={`${cls} ${className}`} {...otherProps}>
      {children}
    </div>
  );
};
