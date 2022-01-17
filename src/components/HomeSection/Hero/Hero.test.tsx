import React from 'react';
import renderer from 'react-test-renderer';

import Hero from '.';

describe('Hero component', () => {
  test('Hero render correctly', () => {
    const tree = renderer.create(<Hero />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
