import { shallow, mount, render } from 'enzyme';
import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import App from '../public/src/components/App.jsx';

describe('app rendered', () => {

  it('App component should render the app div', () => {
    expect(shallow(<App />).is('.app')).toBe(true);
  });

  it('should mount only 1', function () {
    expect(mount(<App />).find('.app').length).toBe(1);
  });

  const wrapper = shallow(<App />);
  wrapper.state().likeStatus = false;

  it('handleClick in App.jsx toggles the boolean in state.likeStatus', () => {
    expect(wrapper.state().likeStatus).toEqual(false);
    wrapper.instance().handleClick();
    expect(wrapper.state('likeStatus')).toEqual(true);
    wrapper.instance().handleClick();
  });
})
