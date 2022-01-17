import React from 'react';
import renderer from 'react-test-renderer';

import PostCard from '.';

describe('Post Card component', () => {
  const postMocked: IPost = { hashTag: '#test', title: 'title test', avatarImg: 'avatar.png', img: 'bgTest.png' };
  test('Post Card render correctly', () => {
    const tree = renderer.create(<PostCard post={postMocked} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
