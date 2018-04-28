import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import About from '../public/src/components/About.jsx';

describe('About component renders correctly', () => {
  it('should render correctly', () => {
    setTimeout(() => {
      const rendered = renderer.create(
        <About />
      );
      expect(rendered.toJSON()).toMatchSnapshot();
    });
  }, 1000);
});