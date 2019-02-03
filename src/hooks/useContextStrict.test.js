// @flow strict

import React from 'react';
import { mount } from 'enzyme';

import { ServicesContext } from 'contexts/ServicesContext';
import { HomelessContextConsumerError } from 'data/errors/LonelyConsumerError';
import { useContextStrict } from 'hooks/useContextStrict';
import { mockServices } from 'services/mock/index';

const Component = () => {
  const context = useContextStrict(ServicesContext)
  return <div />
}

it('should throw when used outside of the Provider', () => {
  try {
    mount(<Component />)
  } catch (e) {
    expect(e).toBeInstanceOf(HomelessContextConsumerError)
  }
})

it('should throw when used inside of the Provider that accepts null', () => {
  try {
    mount(
      <ServicesContext.Provider value={null}>
        <Component />
      </ServicesContext.Provider>
    )
  } catch (e) {
    expect(e).toBeInstanceOf(HomelessContextConsumerError)
  }
})

it('should NOT throw when used inside of the Provider that accepts a valid context instance', () => {
  mount(
    <ServicesContext.Provider value={mockServices}>
      <Component />
    </ServicesContext.Provider>
  )
})