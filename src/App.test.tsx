import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {App} from './App';
describe('App', () => {
  let subject: ShallowWrapper;
  beforeEach(() =>{
    subject = shallow(<App />);
  });

  it('should be div compnent',() => {
    expect(subject.type()).toBe('div');
  });
});