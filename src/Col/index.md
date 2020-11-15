## Col

Demo:

```tsx
import React from 'react';
import { Row, Col } from '@we-fe/we-ui';

import './demo.less';

export default () => {
  return (
    <div>
      <Row className="demo-row">
        <Col span={24}>col-24</Col>
      </Row>
      <Row className="demo-row">
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>
      <Row className="demo-row">
        <Col span={6}>
          <Row>
            <Col span={6}>6-6</Col>
            <Col span={6}>6-6</Col>
          </Row>
        </Col>
        <Col span={6}>col-6</Col>
      </Row>
    </div>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
