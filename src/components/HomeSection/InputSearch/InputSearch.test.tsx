import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import InputSearch from '.';

describe('InputSearch component', () => {
  test('InputSearch render correctly', () => {
    const mockCallback = jest.fn();
    const tree = renderer.create(<InputSearch value={'test'} onChange={mockCallback} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('InputSearch onchange', () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(<InputSearch value={'test'} onChange={mockCallback} />);
    const input = getByTestId('input-search-test') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test edited' } });
    expect(input.value).toBe('test edited');
  });
});
