import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { UserAction } from './UserAction';
describe('UserAction', () => {
  let subject: ShallowWrapper;
  const defaultProp = {
    userAction: 'Typing ...'
  };

  beforeEach(() =>{
    subject = shallow(<UserAction {...defaultProp}/>);
  });

  it('should be p element',() => {
    expect(subject.type()).toBe('p');
  });

  it('should has class UserAction__Text',() => {
    expect(subject.hasClass('UserAction__Text')).toBe(true);
  });
  
  it('should has userAction text',() => {
    expect(subject.text()).toBe(defaultProp.userAction);
  });
});