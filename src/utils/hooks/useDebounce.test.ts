import { renderHook } from '@testing-library/react-hooks';
import useDebounce from './useDebounce';

describe('HOOK useDebounce', () => {
  test('Should return the default value', async () => {
    const { result: hookResult } = renderHook(() => useDebounce('test', 200));
    const { current } = hookResult;

    expect(current).toEqual('test');
  });
});
