
import React, { Component } from 'react';
import Card from './Card';
import { mount, shallow } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });
});
