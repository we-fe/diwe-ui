import React from 'react';
import classnames from 'classnames';

import './index.less';

export default (props: any) => {
  const {
    children,
    orientation = '',
    type = 'horizontal',
    className = '',
    style = {},
    dashed = false,
  } = props;
  const clsObj: any = {
    'we-divider': true,
  };
  let _orientation = orientation;
  if (children && !_orientation) {
    _orientation = 'left';
  }
  if (_orientation) {
    clsObj[`we-divider-${_orientation}`] = true;
  }
  if (type === 'vertical') {
    clsObj[`we-divider-${type}`] = true;
  }

  const classNames = classnames(clsObj);
  return (
    <span className={classNames}>
      {children && <span className="we-divider-text">{children}</span>}
    </span>
  );
};
