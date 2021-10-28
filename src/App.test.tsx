import React from 'react';
import { shallow, render, mount } from 'enzyme';
import App from 'src/App';

test('App renders without crushing', () => {
  const app = shallow(<App />);
  expect(app.exists()).toBe(true);
});
