import React from 'react';
import renderer from 'react-test-renderer';

import Input from '.';

describe('Input component', () => {
  test('Input render correctly', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Input with value and placehonder render correctly', () => {
    const tree = renderer.create(<Input value={'some value'} placeholder="some placeholder" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
