import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '.';

describe('Footer component', () => {
  test('Footer render correctly', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
