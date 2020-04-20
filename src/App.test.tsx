import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import GitUser from './GitUser/GitUser';
import {App} from './App';
describe('App', () => {
  let subject: ShallowWrapper;

  beforeEach(() =>{
    subject = shallow(<App />);
  });

  it('should be div compnent',() => {
    expect(subject.type()).toBe('div');
  });

  it('should has App class',() =>{
    expect(subject.hasClass('App')).toBe(true);
  });

  describe('GitUser component',() =>{
    it('should has GitUser Component',() =>{
      expect(subject.childAt(0).type()).toBe(GitUser);
    });
  });

});