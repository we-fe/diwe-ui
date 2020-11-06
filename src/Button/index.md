## Button

Demo:

```tsx
import React from 'react';
import { Button } from 'diwe-ui';

import './demo.less';

export default () => {
  const list = [
    {
      text: 'Primary',
      type: 'primary',
    },
    {
      text: 'Default',
      type: 'default',
    },
    {
      text: 'Dashed',
      type: 'dashed',
    },
    {
      text: 'Danger',
      type: 'danger',
    },
    {
      text: 'Link',
      type: 'link',
    },
  ];
  const onHandleClick = () => {
    alert('click');
  };
  return (
    <div className="buttons-demo">
      {list.map(item => (
        <Button key={item.type} type={item.type}>
          {item.text}
        </Button>
      ))}
    </div>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
