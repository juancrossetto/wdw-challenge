import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';

import Button from '.';

describe('Button component', () => {
  test('Button render correctly', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Button with value render correctly', () => {
    const tree = renderer.create(<Button value={'some value'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Button onClick', () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(<Button value={'test'} onClick={mockCallback} />);
    const input = getByTestId('btn-test');
    fireEvent.click(input);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
