import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import CommentList from '../public/src/components/CommentList.jsx';

const fakeComment = [
  {
    fullName: 'David Cheng',
    userImage: 'https://s3.amazonaws.com/uifaces/faces/twitter/tristanlegros/128.jp',
    commentsText: 'Labore sed dicta amet aut recusandae. Voluptates dolorem non. Tempora vel possimus voluptas. Qui sunt et sint dolor impedit. Ratione quos quia iste eum temporibus sit. Illum et minima quibusdam sint laudantium cum. Voluptatem quod quam et odio quaerat et minima dignissimos magnam. Optio et impedit et eum sit. Enim praesentium et quia. Nihil neque quos in et.',
  },
  {
    fullName: 'David Cheng',
    userImage: 'https://s3.amazonaws.com/uifaces/faces/twitter/tristanlegros/128.jp',
    commentsText: 'Labore sed dicta amet aut recusandae. Voluptates dolorem non. Tempora vel possimus voluptas. Qui sunt et sint dolor impedit. Ratione quos quia iste eum temporibus sit. Illum et minima quibusdam sint laudantium cum. Voluptatem quod quam et odio quaerat et minima dignissimos magnam. Optio et impedit et eum sit. Enim praesentium et quia. Nihil neque quos in et.',
  },
  {
    fullName: 'David Cheng',
    userImage: 'https://s3.amazonaws.com/uifaces/faces/twitter/tristanlegros/128.jp',
    commentsText: 'Labore sed dicta amet aut recusandae. Voluptates dolorem non. Tempora vel possimus voluptas. Qui sunt et sint dolor impedit. Ratione quos quia iste eum temporibus sit. Illum et minima quibusdam sint laudantium cum. Voluptatem quod quam et odio quaerat et minima dignissimos magnam. Optio et impedit et eum sit. Enim praesentium et quia. Nihil neque quos in et.',
  }
]

describe('CommentList Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<CommentList comments={fakeComment} />));
  });
});