import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import Comment from '../client/src/Comment.jsx';
import { shallow, mount, render } from 'enzyme';

const fakeComment = {
  fullName: 'David Cheng',
  userImage: 'https://s3.amazonaws.com/uifaces/faces/twitter/tristanlegros/128.jp',
  commentsText: 'Labore sed dicta amet aut recusandae. Voluptates dolorem non. Tempora vel possimus voluptas. Qui sunt et sint dolor impedit. Ratione quos quia iste eum temporibus sit. Illum et minima quibusdam sint laudantium cum. Voluptatem quod quam et odio quaerat et minima dignissimos magnam. Optio et impedit et eum sit. Enim praesentium et quia. Nihil neque quos in et.',
};

describe('Comment Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Comment comment={fakeComment} />));
  });
  it('correctly renders info section', () => {
    const wrapper = shallow(<Comment comment={fakeComment} />);
    const info = (<div className="info">
      <img src="https://s3.amazonaws.com/uifaces/faces/twitter/tristanlegros/128.jp" alt="user" />
      <span>David Cheng</span>
    </div>)
    expect(wrapper.contains(info)).toEqual(true);
  });
  it('correctly renders comments\'s text', () => {
    const wrapper = shallow(<Comment comment={fakeComment} />);
    const info = (<p className="commentsText" >Labore sed dicta amet aut recusandae. Voluptates dolorem non. Tempora vel possimus voluptas. Qui sunt et sint dolor impedit. Ratione quos quia iste eum temporibus sit. Illum et minima quibusdam sint laudantium cum. Voluptatem quod quam et odio quaerat et minima dignissimos magnam. Optio et impedit et eum sit. Enim praesentium et quia. Nihil neque quos in et.</p>)
    expect(wrapper.contains(info)).toEqual(true);
  });
});