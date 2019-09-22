import React from 'react';

import { addDecorator } from '@storybook/react';

const getWrapperStyles = () => ({
  display: 'grid',
  gridGap: '20px',
  padding: '100px'
});

const getSlotStyles = (width = 'auto') => ({
  border: '1px dashed lightgrey',
  width
});

const Slot = ({ children, width = 'auto' }) => (
  <div>
    <small>{width}</small>
    <div style={getSlotStyles(width)}>{children}</div>
  </div>
);

const Wrapper = ({ children }) => <div style={getWrapperStyles()}>{children}</div>;

const Decorator = storyFn => (
  <Wrapper>
    <Slot>{storyFn()}</Slot>
    <Slot width="800px">{storyFn()}</Slot>
    <Slot width="400px">{storyFn()}</Slot>
    <Slot width="200px">{storyFn()}</Slot>
  </Wrapper>
);

addDecorator(Decorator);
